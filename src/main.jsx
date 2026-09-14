// [필수]1. 리액트 라이브러리 최초 렌더링하는 함수
import {createRoot} from "react-dom/client";
// [필수]2. index.html에서 root 마크업 가져오기 , #ID, .Class
const root = document.querySelector('#root')
// [필수]3. 가져온 root 마크업을 createRoot함수에 전달
const create = createRoot(root);

// [선택] 최초로 화면을 그리기 할 컴포넌트 가져와서 렌더링
// 1. import 이용해 컴포넌트 가져온다
// import App from './App.jsx'
// 2. 가져온 컴포넌트 렌더링하기
// create.render(<App> </App>)
// import MyMarkup from "./example/day01/MyMarkup";
// create.render(<MyMarkup></MyMarkup>)
// [day01] render는 1번만
// import Component1 from "./example/day01/Component1";
// create.render(<Component1></Component1>)
// import Component2 from "./example/day01/Component2";
// create.render(<Component2></Component2>)
// import Component3 from "./example/day01/Component3";
// create.render(<Component3></Component3>)
// import Component4 from "./example/day01/Component4";
// create.render(<Component4></Component4>)
// import Component5 from "./example/day01/Component5";
// create.render(<Component5></Component5>)
// import Component6 from "./example/day01/Component6";
// create.render(<Component6></Component6>)
// import Practice1 from "./example/Practice/Practice1";
// create.render(<Practice1></Practice1>)
import Component1 from "./example/day02/Component1";
create.render(<Component1></Component1>)