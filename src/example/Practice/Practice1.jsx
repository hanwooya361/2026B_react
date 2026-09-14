export default function Practice1( props ){
  const data = [
    { name: 'Hedy Lamarr', imageUrl: 'https://i.pravatar.cc/150?img=47' },
    { name: 'Grace Hopper', imageUrl: 'https://i.pravatar.cc/150?img=48' },
    { name: 'Ada Lovelace', imageUrl: 'https://i.pravatar.cc/150?img=49' },
    { name: 'Margaret Hamilton', imageUrl: 'https://i.pravatar.cc/150?img=50' }
  ];

  return (<> 
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