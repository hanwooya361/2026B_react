  import { useState, useEffect } from "react";
  import axios from "axios";
import { data } from "react-router-dom";

  function ProductList(props) {
    const [myJSON, setMyJSON] = useState([]);
    // 객체 안에 빈배열 속성으로 초기화
    // API 응답 결과를 저장하는 상태/변수   // 배열로 바로 초기화

    // useEffect( () => { 하고싶은코드 } , [  ] ) // 최초 1번만 실행
    // AXIOS 이용하여 API 통신 하고 응답 결과 상태변수에 저장
    useEffect(()=>{
      const getData = async () =>{
      const response = await axios.get(
        "http://localhost:8080/test4"
      );
      const data = response.data;
      setMyJSON(data.data);
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

    let trTag = myJSON.map((data , index) => {
      // 간단한 표 이용하여 위에서 정의한

      return (
        <tr key={index}>
          <td>{data.도로명주소}</td>
          <td>{data.상호}</td>
          <td>{data.업종}</td>
          <td>{data.지번주소}</td>
        </tr>
      );
    });
    console.log(trTag);
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>도로명주소</th>
              <th>상호</th>
              <th>업종</th>
              <th>지번주소</th>
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
        <h2>김지환 [제품 전체 조회 및 서울특별시 성동구 헬스장정보]</h2>
        <table>
          <tbody>
            <tr>
              <td>제품소개</td>
              <td>
                <ProductList
                ></ProductList>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }