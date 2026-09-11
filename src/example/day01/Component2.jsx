// 1. 선언적함수 방법으로 컴포넌트 생성
function FrontComp(props){
    return (<>
        <li>프론트엔드</li>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>JQUERY</li>
        </ul>
    </>)
}
// 2. 화살표함수 방법으로 컴포넌트 생성
const BackComp=(props)=>{
    return(<>
        <li>백엔드</li>
        <ul>
            <li>java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}
// 3. 익명함수 방법으로 컴포넌트 생성
let FormComp = function(){
    return(<>
        <form>
            <select name="gubun">
                <option value="front">프론트엔드</option>
                <option value="back">백엔드</option>
            </select>
            <input type="text" name="title"/>
            <input type="submit" value="추가"/>
        </form>
    </>);
}
// 4. 최상위 컴포넌트(3가지 컴포넌트 합치기)
export default function Component2(){
    return(<>
        <div>
            <h2>React-Component</h2>
            <ol>
                <FrontComp></FrontComp>
                <BackComp/>
            </ol>
            <FormComp/>
        </div>
    </>)
}
