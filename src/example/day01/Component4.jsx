function FrontComp(props){
    const liRows = [];  // 배열
    for(let i=0; i<props.propData1.length; i++){
        // 부모로부터 전달받은 props내 propData1 반복
        liRows.push(<li key={i}>{props.propData1[i]}</li>);
        // 배열명.push(값); 배열내 값 추가
    }
    return (<>
        <li>{props.frTitle}</li>
        <ui>
            {liRows}
        </ui>
    </>)
}

// 원래 props 객체인데 구조분해해 propData2,baTitle 변수로 각각 저장
const BackComp = ({propData2, baTitle}) => {    
    const liRows = [];
    for(let i=0; i<propData2.length; i++){
        // 부모로부터 전달받은 props내 propData1 반복
        liRows.push(<li key={i}>{propData2[i]}</li>);
        // 배열명.push(값); 배열내 값 추가
    }
    return(<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}

export default function Component4(){
    // *추후에 연동할 백엔드와통신 axios*
    const frontData = ['HTML', 'CSS', 'JS', 'jQuery'];
    const backData = ['java', 'oracle', 'JSP', 'Spring Boot'];
    return(<>
        <div>
            <h2>React-props</h2>
            <ol>
                <FrontComp propData1={frontData} frTitle="프론트엔드"></FrontComp>
                <BackComp propData2={backData} baTitle="백엔드"/>
            </ol>
        </div>
    </>)
}