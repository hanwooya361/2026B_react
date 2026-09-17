import axios from "axios";
import { useEffect, useState } from "react";

function RandomUser(props){
    // 
    const [myJSON, setMyJSON] = useState({results:[]}); // 객체안에 빈배열 속성으로 초기화
    // useEffect(()=>{하고싶은코드},[]) 최초 1번만 실행
    useEffect(async function(){
        // await axios.http메소드명("통신할주소", body값)
        // axios를 이용해 API 통신 하고 응답결과 상태변수에 저장
        const response = await axios.get("https://api.randomuser.me?results=10")
        const data = response.data;
        setMyJSON(data);
    },[]);

    // 현재 상태변수에 존재하는 리스트를 tr로 구성해 하나씩 html 만들기
    let trTag = myJSON.results.map((data)=>{
        return(
            <tr key={data.login.md5}>
                <td><img src={data.picture.thumbnail} alt={data.login.username}/></td>
                <td><a href="/" onClick={(e)=>{
                    e.preventDefault();
                    props.onProfile(data);
                }}>{data.login.username}</a>
                </td>
                <td>{data.name.title}{data.name.first}{data.name.last}</td>
                <td>{data.nat}</td>
                <td>{data.email}</td>
            </tr>
        );
    });
    return(
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>사진</th><th>로그인</th><th>이름</th>
                        <th>국가</th><th>이메일</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    );
}

export default function ExternalApiAxios(props){
        return(<>
            <h2>외부 서버 통신</h2>
            <RandomUser onProfile={(sData)=>{
                console.log(sData);
                let info = 
                `전화번호:${sData.cell}
                성별:${sData.gender}
                username:${sData.login.username}
                password:${sData.login.password}`;
                alert(info);
            }}></RandomUser>
    </>);
}

/*
    axios란? 주로 API 비봉기통신
    - 주로 외부API와 백엔드API(controller)통신 도구
    - content-type 기본값이 application/json
    1. 사용법
        const 함수명 = async()=>{
            const reponse = await axios.http메소드명("통신할주소?쿼리스트링", {body});
            const data = reponse.data
            set~~(data)    
        }
*/