/*
    1. 컴포너늩 생생시 첫글자 대문자
    2. export default function 컴포넌트명(props){}
    3. 컴포넌트내 return(<>jsx문법<>)
        * jsx란? 가상 DOM(HTML)과 JS 함께 표현 문법
    컴포넌트 최초 랜더링
    1. main.jsx에서 컴포넌트 import 함
    2. import 한 컴포넌트를 create.render(<컴포넌트/>)
*/

/*
    for(let i=0; i<data.length; i++){
    let i = data[i];
    html += <div>
                <h2>{props.name}</h2>
                <img src={props.imageUrl}/>
            </div>
    }
*/ 
export default function Practice1( props ){
  const data = [
    { name: 'Hedy Lamarr', imageUrl: 'https://i.pravatar.cc/150?img=47' },
    { name: 'Grace Hopper', imageUrl: 'https://i.pravatar.cc/150?img=48' },
    { name: 'Ada Lovelace', imageUrl: 'https://i.pravatar.cc/150?img=49' },
    { name: 'Margaret Hamilton', imageUrl: 'https://i.pravatar.cc/150?img=50' }
  ];

  return (<>
    {/* <Profile name={data[0].name} imageUrl={data[0].imageUrl}/>
    <Profile name={data[1].name} imageUrl={data[1].imageUrl}/>
    <Profile name={data[2].name} imageUrl={data[2].imageUrl}/>
    <Profile name={data[3].name} imageUrl={data[3].imageUrl}/> */}
      {data.map((data)=>(
        <Profile name={data.name} imageUrl={data.imageUrl}/>
      ))}
  </>)
} // func end 

function Profile( props ) { 
  return (<>
      <h2>{props.name}</h2>
      <img src={props.imageUrl}/>
  </> );
}