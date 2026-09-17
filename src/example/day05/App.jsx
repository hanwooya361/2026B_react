import { Route, Routes } from "react-router-dom";
import TopNavi from "./TopNavi";
import LifeCycle from "./Lifrcycle";

export default function App(props){
    return(<>
    <TopNavi></TopNavi>
    <Routes>
        <Route path="/" element={<LifeCycle/>}/>
    </Routes>
    </>)
}