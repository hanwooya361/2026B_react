function FrontComp(props){
    return(<>
        <li>
            <a href="/" onClick={()=>{props.onMyEvent1();}}>프론트엔드</a>
        </li>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>JQUERY</li>
        </ul>
    </>)
}
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
export default function Component6(){
    return(<>
        <h2>react-event</h2>
        <ol>
            <FrontComp onMyEvent1={()=>{
                alert('프론트엔드 클릭됨');
            }}></FrontComp>
            <BackComp onMyEvent2={(msg)=>{
                alert(msg);
            }}></BackComp>
        </ol>
    </>)
}

