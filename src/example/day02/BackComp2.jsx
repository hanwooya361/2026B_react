const BackComp = ({setMode}) => {
    return (<>
        <li>
            <a href="/" onClick={(event)=>{
                event.preventDefault();
                setMode('back');
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