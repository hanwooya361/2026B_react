const BackComp = ({onMyEvent2}) => {
    return (<>
        <li>
            <a href="/" onClick={(event)=>{
                event.preventDefault();
                onMyEvent2('백엔드 클릭됨');
            }}>백엔드</a>
        </li>
        <ul>
            <li>JAVA</li>
            <li>ORACLE</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}
export default BackComp;
/*
    a 마크업 사용시 주의할점, 104p
        - a 마크업은 HTTP GET 통신 마크업이라서 깜빡거림
        - 리액트는 CSR(HTTP 통신1번)이라서 깜빡거림 제거
        onClick={(e)=>{e.preventDefault()l}}
    콜백함수 형식
        const plus = (x,y)=>{return x+y}
        const cal = (func) => {
            console.log(func(3,4))    
        }
    --------------------------------------
    cal(plus(3,5))      ==> Error
    cal(plus)           ==> 7
    CallBack 함수에서 함수를 실행x 정의o
*/