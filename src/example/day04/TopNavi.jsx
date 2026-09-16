import { Link, NavLink } from "react-router-dom";

export default function TopNavi(props){
    return(<>
        <div>
            <a href="/">Home</a>    {/* html 링크 마크업 */}
            <NavLink to="/">Home2</NavLink>
            <NavLink to="/intro">텍스트</NavLink>
            <NavLink to="/intro/router">라우터</NavLink>
            <Link to="/xyz">잘못된URL</Link>
        </div>
    </>)
}
// <a href="이동할경로">Home</a>                    : 페이지 로드(새로고침) 있다.
// <NavLink to="이동할경로">텍스트</NavLink>        : 페이지 로드(새로고침) 없다.
// <Link to="이동할경로">잘못된URL</Link>           : 페이지 로드(새로고침) 없다. active 클래스가 없다.