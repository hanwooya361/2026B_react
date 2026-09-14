import { useState } from "react";
import FrontComp from "./FrontComp2";
import BackComp from "./BackComp2";
export default function Component3(props){
    const [mode,setMode] = useState('both');
    const handleSetMode = (mode)=>{
        setMode(mode);
    };
    let contents = '';
    if(mode==='front'){
        contents=<>
        <FrontComp onSetMode={(mode)=>{
            setMode(mode);
        }}></FrontComp>
        </>
    }

    else if(mode==='back'){
        contents = <>
            <BackComp setMode={setMode}/>
        </>
    }

    else{
        contents = <>
        <FrontComp onSetMode={(mode)=>{
            handleSetMode(mode);
        }}></FrontComp>
        <BackComp setMode={handleSetMode}/>
        </>
    }
    return(<>
        <h2><a href="/" onClick={(event)=>{
            event.preventDefault();
            setMode('both');
        }}>react-state</a></h2>
        <ol>
            {contents}
        </ol>
    </>)
}