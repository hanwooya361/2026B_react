/*
    1. 컴포넌트명.jsx 파일 생성
    2. export default function 컴포넌트명(props){}
        export default: 내보내기, 다른 파일에서 import 할 수 있도록
            - 만약에 내부에서 사용하는 컴포넌트 생략
        컴포넌트명: 첫글자 무조건 대문자 시작
    3. {} 안에 return 에서는 jsx 문법가능, 그 외 js문법
        return에서는 2줄이상 입력시 (<> <>)묶어준다.
*/
function Footer(props){         // 푸터
    return <div>푸터구역</div>
}
function Header(props){         // 헤더
    return <div>헤더구역</div>
}
export default function Component1(props){  // 본문
    return  (<>
        <Header ></Header>
        <div>메인페이지</div>
        <Footer> </Footer>
    </>)
}
