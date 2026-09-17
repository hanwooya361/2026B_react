import { useState, useEffect } from "react";
import axios from "axios";

function ProductList(props) {
  const [myJSON, setMyJSON] = useState([]);
  // 객체 안에 빈배열 속성으로 초기화
  // API 응답 결과를 저장하는 상태/변수   // 배열로 바로 초기화

  // useEffect( () => { 하고싶은코드 } , [  ] ) // 최초 1번만 실행
  // AXIOS 이용하여 API 통신 하고 응답 결과 상태변수에 저장
  useEffect(async function Data() {
    const response = await axios.get(
      "https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/products",
    );
    const data = response.data;
    setMyJSON(data);
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
      <tr key={data.bno}>
        <td>{data.bno}</td>
        <td>{data.categoryname}</td>
        <td>{data.name}</td>
        <td>{data.price}원</td>
      </tr>
    );
  });
  console.log(trTag);
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>bno</th>
            <th>카테고리</th>
            <th>상품명</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>{trTag}</tbody>
      </table>
    </div>
  );
}

export default function Kim(props) {
  return (
    <>
      <h2>김지환 [제품 전체 조회]</h2>
      <table>
        <tbody>
          <tr>
            <td>제품소개</td>
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
    </>
  );
}
