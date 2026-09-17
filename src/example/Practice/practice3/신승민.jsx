import { useState, useEffect } from "react";
import axios from "axios";

function ProductPrint(props) {
  // 객체 안에 빈배열 속성으로 초기화
  // API 응답 결과 저장하는 상태/변수
  const [myJSON, setMySJON] = useState({ results: [] });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cno, setCno] = useState("");

  const 제품등록 = async () => {
    await axios.post(
      "https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/products",
      { name, price, cno },
    );
  };

  return (
    <>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>제품 등록 폼</th>
            </tr>
          </thead>
          <tbody className="sTbody">
            <tr>
              <td>
                <div className="inputWrap">
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="제품명 (예: 기계식 키보드)"
                  />
                  <input
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    placeholder="가격 (예: 45000)"
                  />
                  <input
                    value={cno}
                    onChange={(e) => setCno(e.target.value)}
                    placeholder="카테고리 번호(cno) (예: 1)"
                  />
                  <input
                    type="submit"
                    name="submit"
                    value="등록"
                    onClick={제품등록}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default function Seung(props) {
  return (
    <>
      <ProductPrint></ProductPrint>
    </>
  );
}
