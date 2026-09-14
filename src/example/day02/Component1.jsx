import FrontComp from "./FrontComp";
import BackComp from "./BackComp";
export default function Component1(props){
    return(<>
        <h2>react-modules</h2>
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