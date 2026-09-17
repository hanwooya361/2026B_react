import axios from "axios";
import { useEffect, useState } from "react";

function Content(props){
  const [myJSON, setMySJON] = useState({ results: [] });
  const [name , setName] = useState("");
  const addCategory = async () => {
    await axios.post("https://discussions-louis-bradley-blue.trycloudflare.com/api/categories",{ name },);
  };
  
  return(<>
    <tr>
      <td><input value={name} onChange={(e)=> {setName(e.target.value);}}  placeholder="카테고리명"/></td>
      <td><button type="button" onClick={addCategory}>등록</button></td>
    </tr>
  </>)
}

export default function Hanwoo(props) {
  return (
    <>
      <div className="Box">
        <h2>조현우</h2>
        <table>
          <tbody>
            <tr>
              <td>학과</td>
              <td>정보통신공학과</td>
            </tr>
            <tr>
              <td>잘부탁</td>
              <td>잘부탁</td>
            </tr>
            <Content></Content>
          </tbody>
        </table>
      </div>
    </>
  );
}