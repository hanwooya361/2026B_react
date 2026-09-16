import { Route, Routes } from "react-router-dom";
import Seung from "./신승민";
import Home from "./Home";
import 김지환 from "./김지환";
import Hanwoo from "./조현우";
import Practice2 from "./권유린";

export default function App3(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="seung" element={<Seung />} />
          <Route path="hwan" element={<김지환 />} />
          <Route path="hyun" element={<Hanwoo />} />
          <Route path="yoo" element={<Practice2 />} />
        </Route>
      </Routes>
    </>
  );
}
// <Route path="/도메인이후주소정의" element={ 컴포넌트/> } />