import axios from "axios";
import { useEffect, useState } from "react";

function ProductList(props) {
  const [myJSON, setMyJSON] = useState([]);
  // 객체 안에 빈배열 속성으로 초기화
  // API 응답 결과를 저장하는 상태/변수   // 배열로 바로 초기화

  // useEffect( () => { 하고싶은코드 } , [  ] ) // 최초 1번만 실행
  // AXIOS 이용하여 API 통신 하고 응답 결과 상태변수에 저장
  useEffect(()=> {
    const getData = async () =>{
    const response = await axios.get("http://localhost:8080/hanwoo");
    const data = response.data.response.body.items;
    setMyJSON(data);
    }
    getData();
  }, []);
  // 현재 상태변수에 졵하는 리스트들을 tr로 구성하여 하나씩 html을 만들기
  // <table>: 표 전체
  // <thead>: 표의 머리말 부분(제목 줄)
  // <th>: 머리말 한 칸(제목)
  // tbody>: 표의 실제 데이터가 들어가는 몸통 부분
  // <tr>: 표의 한 줄(행)
  // <td>: 한 칸(셀)

  let trTag = myJSON.map((data) => {
    // 간단한 표 이용하여 위에서 정의한

    return (
      <tr key={data.reg_animal_cnt}>
        <td>{data.reg_animal_cnt}</td>
        <td>{data.animal_ownr_per_reg_animal_cnt}</td>
        <td>{data.reg_mby_sgg_reg}</td>
        <td>{data.sigun_nm}</td>
        <td>{data.emd_nm}</td>
      </tr>
    );
  });
  console.log(trTag);
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>등록된 반려동물수</th>
            <th>소유자1명당 등록 동물 수 </th>
            <th>시군구청 직접 등록한 동물 수</th>
            <th>시군 이름</th>
            <th>읍면동 이름</th>
          </tr>
        </thead>
        <tbody>{trTag}</tbody>
      </table>
    </div>
  );
}

function Content(props){
  const [name , setName] = useState("");
  const addCategory = async () => {
    await axios.post("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories",{ name },);
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

            <tr>
            <td></td>
            <td>
              <ProductList
                onProfile={(sData) => {
                  console.log(sData);
                  let info = `상품명: ${sData.name}
                            가격: ${sData.price}원
                            카테고리: ${sData.categoryname}`;
                  alert(info);
                }}
              ></ProductList>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}