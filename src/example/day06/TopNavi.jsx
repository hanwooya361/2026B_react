import { NavLink } from "react-router-dom"

const TopNavi = () => {
    return(<>
        <nav>
            <NavLink to="/use-ref1">useRef1</NavLink>
            <NavLink to="/use-ref2">useRef2</NavLink>
            <NavLink to="/use-memo">useMemo</NavLink>
            <NavLink to="/use-callback">useCallback</NavLink>
        </nav>
    </>)
}
export default TopNavi;