import { useState, useEffect } from "react";
import axios from "axios";

function DataList(props) {
  const [myJSON, setMyJSON] = useState([]);
  useEffect(() => {
    async function Data() {
      const response = await axios.get("http://localhost:8080/api4");
      console.log(response.data.data);
      const data = response.data;

      setMyJSON(data.data);
    }
    Data();
  }, []);

  let trTag = myJSON.map((data) => {
    return (
      <tr key={data.관리기관명}>
        <td>{data.관리기관명}</td>
        <td>{data.관할경찰서명}</td>
        <td>{data.CCTV설치대수}</td>
        <td>{data.CCTV설치여부}</td>
        <td>{data.경도}</td>
      </tr>
    );
  });
  console.log(trTag);
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>관리기관명</th>
            <th>관할경찰서명</th>
            <th>CCTV설치대수</th>
            <th>CCTV설치여부</th>
            <th>경도</th>
          </tr>
        </thead>
        <tbody>{trTag}</tbody>
      </table>
    </div>
  );
}

export default function Seung(props) {
  return (
    <>
      <h2>신승민 [성동구 어린이보호구역]</h2>
      <DataList></DataList>
    </>
  );
}