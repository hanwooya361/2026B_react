import { useEffect, useState } from "react";

function MoveBox(props){
    console.log('LifeCycle==>1.컴포넌트 실행(함수호출');
    const [position, setPosition] = useState(props.initPosition);
    const [leftCount, setLeftCount] = useState(1);
    const boxStyle = {
        backgroundColor: 'red', position: 'relative', textAlign:'center',
        width: '100px', height: '100px', margin: '10px', lineHeight: '100px',
        left: `${position}px`
    };

    const moveLeft = () =>{
        setPosition(()=>position-20);
        setLeftCount(()=>leftCount+1);
    };

    const moveRight=()=>{
        setPosition(()=>position+20);
    };
    //***********생명주기************//
    // 순서는 b->a로 실행 언마운트 되기 직전 b영역 실행 후 마운트 후 a영역 실행
    useEffect(function(){
        // a영역
        console.log('useEffect 실행==>마운트');
        return()=>{
            // b영역
            console.log('useEffect 실행==>언마운트');
        }
    // });          // [1] 의존성 배열 생략: 최초1번실행, 업데이트
    // },[]);       // [2] 의존성 배열 공백: 최초1번실행
    },[leftCount]); // [3] 의존성 배열에 특정 변수: 최초1번실행, 특정변수 업데이트
    console.log('return실행 ==>랜더링');
    return(
        <div>
            <h4>컴포넌트 생명주기</h4>
            <div style={boxStyle}>{leftCount}</div>
            <input type="button" value="좌측이동" onClick={moveLeft}/>
            <input type="button" value="우측이동" onClick={moveRight}/>
        </div>
    );
}

export default function LifeCycle(props){
    return(<>
        <h2>react hook</h2>
        <MoveBox initPosition={50}/>
    </>)
}