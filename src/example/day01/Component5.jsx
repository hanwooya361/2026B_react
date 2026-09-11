export default function Component5(props){
    // 선언적함수
    function event1(){alert('이벤트발생1')}
    // 익명함수
    const event2 = function(){alert('이벤트발생2')}
    // 람다식 화살표함수
    const event3 = ()=>{alert('이벤트발생3')}

    // onclick="함수명()"--react방식--> onClick = 함수명
    // 1. c-->C     2. 함수실행x
    return(<>
        <button onClick={event1}>이벤트1</button>
        <button onClick={event2}>이벤트2</button>
        <button onClick={event3}>이벤트3</button>
        <button onClick={()=>{alert('이벤트발생4')}}>이벤트4</button>
    </>)
}