import { Link, NavLink } from "react-router-dom";

export default function SideNav(props) {
  return (
    <>
      <div className="Nav">
        <h2>ooo 팀 프로젝트</h2>
        <a href="/">홈(공통)</a> {/* html 링크 마크업 */}
        <div>팀원 소개</div>
        <NavLink className="bottomNav" to="/seung">
          신승민
        </NavLink>
        <NavLink className="bottomNav" to="/hyun">
          조현우
        </NavLink>
        <NavLink className="bottomNav" to="/hwan">
          김지환
        </NavLink>
        <NavLink className="bottomNav" to="/yoo">
          권유린
        </NavLink>
      </div>
    </>
  );
}

/*
    <a href="이동할경로">텍스트</a>     : 페이지 로드(새로고침)있다. 
    <NavLink to = "이동할경로"> 텍스트 </NavLink> : 페이지로드(새로고침) 없다.
    <Link to = "이동할경로"> 텍스트 </Link> : 페이지로드(새로고침) 없다. active 클래스 없다.
*/