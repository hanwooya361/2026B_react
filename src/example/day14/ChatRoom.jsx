import { Client } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react"
// ** 웹소캣/STOMP설치 ** 설치: 
export default function ChatRoom(props){

    // 1. useState이란? 상태(값) 저장하고 ** 변경시 해당 컴포넌트/함수 재호출 ** 축/라이브러리
    const [message, setMessage] = useState('');   // 입력받은 메세지
    const [messages, setMessages] = useState([]);   // 메세지들, 서버로부터 받은 메세지들

    // * useRef란? 상태 저장하고 ** 다른 상태와 상관없이 새로고침/초기화 방지 => 상태유지 ** 
    // const 변수명 = useRef(초기값);, 랜더링되어도 초기화x
    // 지역변수 vs 상태(useState)변수 vs 참조(useRef)변수
    const clientRef = useRef(null); // <---> let 변수명=3; 랜더링되면 초기화됨

    // 컴포넌트 최초 실행시 1번만 실행
    useEffect(()=>{
        // const client = new Client({brokerURL: "접속할백엔드브로커주소", onConnect: 접속성공이벤트 })
        const client = new Client({
            brokerURL: "ws://localhost:8080/ws-chat", // 스프링의 registerStompEndpoints 정의 주소와 일치
            // 3. 만약 stomp 접속 성공시 특정 경로 구독
            onConnect:  () => { // 접속 성공하면 실행되는 이벤트/함수
                // 특정 경로 구독 신청(구독끼리 채팅) 
                // client.subscribe("/구독경로", (message)=>{메세지 받았을 때})    // 스프링의 configureMessageBroker 정의 주소와 일치
                client.subscribe("/sub/chat/room/general", (message)=>{
                    // 4. 만약 특정 경로의 구독에서 메세지를 받았을 때
                    // JSON.parse(문자열 -> js객체 변환) vs JSON.stringify(js객체 -> 문자열 변환)
                    // axios 통신은 JSON이 기본값으로 자동 변환 지원 
                    messages.push(JSON.parse(message.body));    // message.body 메세지본문
                    setMessages(messages);  // 랜더링
                })
            }
        })
        // 5. stomp 실행, client.activate();
        client.activate();
        // 6. client 객체 다른 함수(전송함수) 사용하기위해 밖으로 빼기
        clientRef.current = client;
        // 7. 만약 컴포넌트 사망, stomp 종료, client.deactivate();
        return () => {client.deactivate();}
    },[])

    // 2. 전송시 백엔드에게 메세지 보내기
    const sendMessage = (e) => {
        console.log("메세지 보내기")
        // 8. 만약 소켓객체가 없으면 실패
        if(clientRef.current == null) return;
        // 9. 메세지 전송, client.current({destination: "/발행주소", body: 내용물})
        // 발행주소, 스프링의 configureMessageBroker 정의된 발행주소 + @MessageMapping 정의된 주소
        const info = {  // 스프링의 dto참고해 구성
            type: 'TALK', roomId: "general", sender: "user", content: message, date: new Date().toISOString()
        } 
        clientRef.current.publish({
            destination: "/pub/chat/message",
            body:  JSON.stringify(info) // JSON.stringify(js객체 -> 문자열 변환)
            })
    }

    return(<>
        <h3> 채팅방 </h3>
        {messages.map((msg)=>{
            <div>{msg.sender} : {msg.content}</div>
        })}
        <input value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button type="button" onClick={sendMessage}> 전송 </button>
    </>)
}