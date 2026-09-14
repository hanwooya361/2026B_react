    export default function FrontComp(props){
        return (<>
            <li><a href="/" onClick={(event)=>{
                event.preventDefault();
                props.onSetMode('front');
            }}> 프론트엔드</a></li>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>JQUERY</li>
            </ul>
        </>)
    }