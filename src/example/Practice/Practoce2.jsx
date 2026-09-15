import { useState } from "react"


export default function Practice2(props){
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState('');
    const [members, setMembers] = useState([]); // 빈배열
    // 등록함수
    const 등록함수 = () => {
        const obj = {name, phone, age} // 입력받은 값 3개를 객체로 만든다
        members.push(obj); // 배열에 만든 객체 저장
        setMembers([...members]) // 랜더링을 위한 members setter에 스프레드연산자로 배열 복사
    }
    // 삭제함수
    const 삭제함수 = (index) => {
        members.splice(index, 1)    // JS에서 특정 인덱스 1개 삭제
        setMembers([...members])
    }
    return(<>
        <input value={name} onChange={(e)=>{setName(e.target.value);}}/>
        <input value={age} onChange={(e)=>{setAge(e.target.value);}}/>
        <input value={phone} onChange={(e)=>{setPhone(e.target.value);}}/>
        <button onClick={등록함수}>등록</button>
        <br/>
        {
            members.map((m, index)=>{
                return (<>
                    <div>
                        <span>성명: {m.name}</span>
                        <span>연락처: {m.phone}</span>
                        <span>나이: {m.age}</span>
                        <button onClick={()=>{삭제함수(index)}}>삭제</button>
                    </div>
                </>);
            })
        }
        <div>총인원: {members.length}명</div>
    </>)
}


