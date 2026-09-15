// 전통방식의 css파일 import 'css파일경로' or index.html 포함
import './index.css'
import logo from '../../assets/karina.jpg';
export default function Component1(props){
    const myStyle = {
        color:"white",
        backgroundColor:"DodgerBlue",
        padding:"10px",
        fontFamily:"Verdana"
    };

    const iWidth = {maxWidth:'300px'};
    return(<>
        <h2>react-style</h2>
        <ol>
            {/* 인라인방식의 css적용, {key:value} */}
            <li style={{color:"red"}}>프론트엔드</li>
            <ul>
                {/* img 삽입 3가지 방법 */}
                <li><img src="/img/karina.jpg" style={iWidth}/></li>
                <li><img src="{logo}" style={iWidth}/></li>
                <li><img src="http://nakja.co.kr/images/reactjs.png" style={iWidth}/></li>
            </ul>
            <li className="backEnd">백엔드</li>
            <ul>
                <li id='backEndSub'>JAVA</li>
                <li class='warnings'>ORACLE</li>
                <li style={myStyle}>JSP</li>
                <li>스프링부트</li>
            </ul>
        </ol>
        </>)
}