// App.jsx
import { useEffect, useState, useRef } from 'react';
import './App.css';

export default function App() {
  const [peopleData, setPeopleData] = useState([]);
  const idRef = useRef(0);

  // post로 데이터생성시 리스트의 key가 중복되면 안되므로
  // 렌더링간에 값이 유지되는 useRef사용
  idRef.current += 1;

  // 클린업함수 이용하여 데이터 한번만 가져오기
  // 리액트 개발중 strict mode로 인해 useEffect 스트레스 테스트가 진행되어
  // 두번 렌더링이 되며 클린업함수를 이용하여 한번만 데이터 가져오도록함
  let ignore = false;

  // 첫번째 렌더링후 이펙트실행 ignore = false
  // 두번째 렌더링후 이번이펙트의 클린업 실행 ignore = true
  // 이펙트 실행 ignore = true
  // 세번째 렌더링에서 지역변수 ignore값 유지되지않고 새로 초기화되어 false
  useEffect(() => {
    // console.log(ignore);
    // async function fetchData() {
    //   try {
    //     if (!ignore) {
    //       const response = await fetch('/people');
    //       const data = await response.json();
    //       setPeopleData(data);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // fetchData();

    async function createData() {
      try {
        if (!ignore) {
          const response = await fetch('/people', {
            method: 'POST',
            body: JSON.stringify({
              id: idRef.current,
              name: 'son',
              country: 'asia',
              lang: 'php',
            }),
          });
          const data = await response.json();
          setPeopleData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    createData();

    return () => {
      ignore = true;
    };
  }, []);

  function handleAdd() {
    idRef.current += 1;

    async function createData() {
      try {
        const response = await fetch('/people', {
          method: 'POST',
          body: JSON.stringify({
            id: idRef.current,
            name: 'son',
            country: 'asia',
            lang: 'php',
          }),
        });
        const data = await response.json();
        setPeopleData(data);
      } catch (error) {
        console.log(error);
      }
    }

    createData();
  }



  return (

    <div className="App">
      <button type="button" className="btn" onClick={handleAdd}>
        개발자 추가
      </button>
      {/* 최초 로딩시 배열데이터가 없으므로 배열요소가 있을때 화면에 렌더링 */}
      {peopleData.length > 0 ? (
        peopleData.map((item) => (
          <div key={item.id}>
            <p>이름 : {item.name}</p>
            <p>나라 : {item.country}</p>
            <p>언어 : {item.lang}</p>
          </div>
        ))
      ) : (
        <p>...로딩중</p>
      )}
    </div>
  );
}