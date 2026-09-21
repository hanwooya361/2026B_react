import { useRef, useState } from "react"
export default function UseRefExam1 (props) {
    // 훅: 리액트에서 만든 다양한 함수들, 컴포넌트와 연관기능
    // useState, useEffect, useRef 등

    const [stateNum, setStateNum] = useState(0);    // state변수
    const refNum = useRef(0);   // ref변수
    let myNum = 0;  // 지역변수
    // 렌더링: 함수 재호출
    const plusState = () => {
        setStateNum(stateNum + 1);
        console.log('state증가', stateNum)
    }

    const plusRef = () => {
        refNum.current = refNum.current + 1;
        console.log('ref증가', refNum.current);
    }

    const plusMyNum = () => {
        console.log('일반변수증가', ++myNum)
    }

    return(<>
        <h2>useref 사용하기1</h2>
            <div>
                <p>State: {stateNum}</p>
                <p>Ref: {refNum.current}</p>
                <p>myNum: {myNum}</p>
                <button onClick={plusState}>state증가</button>
                <button onClick={plusRef}>ref증가</button>
                <button onClick={plusMyNum}>mynum증가</button>
            </div>
        </>)
    }