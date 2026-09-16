import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import TopNavi from "./TopNavi";
import NotFound from "./NotFound";
import CommonLayout from "./CommonLayout"; 
import Layoutindex from "./LayoutIndex";
import RouterHooks from "./RouterHooks";

export default function App(props){
    return (<> 
    <TopNavi></TopNavi>
    <Routes>    {/* 여기에 들어가는 경로들은 주소정의에따라 렌더링 */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/intro" element={<CommonLayout/>}>
        <Route index element={<Layoutindex/>}/>
        <Route path="router" element={<RouterHooks/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </>)
}
// <Route path="도메인이후주소정의" element={<컴포넌트/>}></Route>