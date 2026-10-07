import { useState } from "react"

export default function ChatRoom(props){

    // 1. useState이란? 상태(값) 저장하고 ** 변경시 해당 컴포넌트/함수 재호출 ** 축/라이브러리
    const [message, setMessage] = useState('');   // 입력받은 메세지
    const [messages, setMessages] = useState([]);   // 메세지들, 서버로부터 받은 메세지들
    // 2. 전송시 백엔드에게 메세지 보내기
    const sendMessage = (e) => {
        console.log("메세지 보내기")
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