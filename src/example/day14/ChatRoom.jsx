import { Client } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react"
import './ChatRoom.css';
import Notice from "./Notice";
// ** 웹소캣/STOMP설치 ** 설치: 
export default function ChatRoom(props){

    // 1. useState이란? 상태(값) 저장하고 ** 변경시 해당 컴포넌트/함수 재호출 ** 축/라이브러리
    const [message, setMessage] = useState('');   // 입력받은 메세지
    const [messages, setMessages] = useState([]);   // 메세지들, 서버로부터 받은 메세지들

    // * useRef란? 상태 저장하고 ** 다른 상태와 상관없이 새로고침/초기화 방지 => 상태유지 ** 
    // const 변수명 = useRef(초기값);, 랜더링되어도 초기화x
    // 지역변수 vs 상태(useState)변수 vs 참조(useRef)변수
    const clientRef = useRef(null); // <---> let 변수명=3; 랜더링되면 초기화됨

    // 컴포넌트 사망시 stomp 종료
    useEffect(()=>{
        return () => { if(clientRef.current) clientRef.current.deactivate(); }
    },[])

    // 2. 전송시 백엔드에게 메세지 보내기
    const sendMessage = (e) => {
        console.log("메세지 보내기")
        // 8. 만약 소켓객체가 없으면 실패
        if(clientRef.current == null) return;
        // 9. 메세지 전송, client.current({destination: "/발행주소", body: 내용물})
        // 발행주소, 스프링의 configureMessageBroker 정의된 발행주소 + @MessageMapping 정의된 주소
        const info = {  // 스프링의 dto참고해 구성
            type: 'TALK', roomId, sender, content: message, date: new Date().toLocaleTimeString()
        } 
        clientRef.current.publish({
            destination: "/pub/chat/message",
            body:  JSON.stringify(info) // JSON.stringify(js객체 -> 문자열 변환)
            })
        setMessage(''); // 입력창 비우기
    }

    const [ isConnected , setIsConnected] = useState( false ); // 방 접속 여부
    const [ roomId , setRoomId ] = useState(''); // 입력받은 방
    const [ sender , setSender ] = useState(''); // 접속자(닉네임)
    
    // 접속 함수 --> 스프링 브로커 연결 
    const connect = ()=>{
        const client = new Client( { 
            brokerURL : "ws://localhost:8080/ws-chat" , 
            onConnect : () => { 
                setIsConnected( true ); // 1. ********* 접속 상태 변경 *******
                // ********* 2.입력받은 방제목으로 구독 *******
                client.subscribe( `/sub/chat/room/${ roomId }` , (message)=>{
                    const msg = JSON.parse( message.body );
                    setMessages( (prev) => [...prev, msg] ); // 이전 상태 기준으로 추가
                })
                // ********** 3. 입장메시지 발행 ********
                client.publish({
                    destination : "/pub/chat/message",
                    body: JSON.stringify( {type:'ENTER', roomId , sender ,
                         content: '', date: new Date().toLocaleTimeString() })
                });
            }
        }) // client end 
        client.activate()
        clientRef.current = client;
    }

    // 퇴장 함수
    const disconnect = ()=>{ 
        // 1. 퇴장 메시지 발행 
        clientRef.current.publish({
            destination : "/pub/chat/message", 
            body: JSON.stringify( {type:'QUIT', roomId , sender ,
                    content: '', date: new Date().toLocaleTimeString() })
        })
        // 2. 소켓 닫기 
        clientRef.current.deactivate();
        setIsConnected( false ); setMessages([]); // 상태변수 초기화
    }

    return (
        <div>
            { !isConnected ? (
                <div>
                    <input value={ roomId } placeholder="방제목/번호 입력"
                        onChange={ (e) =>{ setRoomId( e.target.value ) } } />
                    <input value={ sender } placeholder="채팅 닉네임 입력"
                        onChange={ (e) =>{ setSender( e.target.value) } } />
                    <button type="button" onClick={ connect }> 접속 </button>
                </div>
            ) : (
                <div>
                    <div>
                        <b> 방제목:{ roomId } / 접속자 : { sender } </b>
                        <button type="button" onClick={ disconnect }> 퇴장 </button>
                    </div>
                    <div>
                        { messages.map( (msg, index)=>(
                            <div key={ index }>
                                { msg.type === 'TALK' ? (
                                    /* 내가 보낸 메시지 여부 */
                                    msg.sender === sender ? (
                                        <div>
                                            <time>{msg.date} </time>
                                            <p>{ msg.content} </p>
                                        </div>
                                    ) : ( /* 남이 보낸 메시지 */
                                        <div>
                                            <small>{ msg.sender} </small>
                                            <div>
                                                <span> {msg.content } </span>
                                                <time> {msg.date }</time>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <i> { msg.content } </i>
                                )}
                            </div>
                        ) )}
                    </div>
                    <div>
                        <input value={ message } onChange={ (e)=> setMessage(e.target.value )} />
                        <button type="button" onClick={ sendMessage }> 전송 </button>
                    </div>
                </div>
            )}
            <Notice />
        </div>
    )
}