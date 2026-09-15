import { useState } from "react"


const TopComp = ({MyData}) => {
    return(<>
        <ol>
            <li>프론트엔드</li>
            <ul>
                {MyData.front.map((item,i)=> <li key={i}>{item}</li>)}
            </ul>
            <li>백엔드</li>
            <ul>
                {MyData.back.map((item,i)=> <li key={i}>{item}</li>)}
            </ul>
        </ol>
    </>)
}

export default function Component3(props){
    const [MyData, setMyData] = useState({
        front: ['HTML', 'CSS', 'JS', 'JQUERY'],
        back: ['JAVA', 'ORACLE', 'JSP', 'Spring Boot'],
    });
    const addFront = () => {
        MyData.front.push('React');
        setMyData(MyData);
    }
    const addBack = () => {
        const newBack = [...MyData.back, 'Node.js'];
        const newMyData = {...MyData, back: newBack};
        setMyData(newMyData);
    }
    return(<>
        <h2>react-shallow comparison</h2>
        <TopComp MyData={MyData}/>
        <button type="button" onClick={addFront}>프론트추가</button>
        <button type="button" onClick={addBack}>백엔드추가</button>
    </>)
}