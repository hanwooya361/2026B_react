import { useEffect, useRef } from "react";

export default function UseRefExam2(props){
    const passRef1 = useRef();  // 재렌더링시 값 유지 변수
    const passRef2 = useRef();
    
    // 컴포넌트 생성 시 최초 1번 실행
    useEffect(()=>{
        console.log('passRef', passRef1, passRef2);
        passRef1.current.focus();   // .focus: 해당 dom에 마우스 (깜빡)커서 두기
    },[]);

    const checkPassword = () => {
        if(!passRef1.current.value || passRef2.current.value==''){  // 비밀번호 or 비밀번호확인이 하나라도 없으면
            alert('비밀번호를 입력해주세요');
            passRef1.current.focus();   
            return;
        }
        if(passRef1.current.value===passRef2.current.value){    // 패스워드1,2가 같으면 
            alert('비밀번호 확인이 완료되었습니다');
        }
        else{
            alert('비밀번호가 일치하지 않습니다');  // 같지않으면
            passRef1.current.value = '';
            passRef2.current.value = '';
            passRef1.current.focus();
        }
    }

    return(<>
        <h2>useref 사용하기2</h2>
        <form>
            패스워드1: <input type="text" ref={passRef1} name='pass1'/> <br/>
            패스워드2: <input type="text" ref={passRef2} name='pass2'/> <br/>
            <button type="button" onClick={checkPassword}>패스워드확인</button>
        </form>
    </>)
}

/*
    입력상자내 입력받은 값 제어
        1. useState
            const [Title, setTitle] = useState('');
            <input value={title} onChange={(e)=>{setTitle(e.target.value);}}/>

        2. useRef
            const titleRef = useRef('');
            <input ref={titleRef}/>
        ---------------------------------------------------------------------------
    const formRef = useRef('');
    *<form ref={formRef}>

    </form>
*/