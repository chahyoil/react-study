import './App.css';
import React, { useState, useMemo, useEffect } from 'react';


function hardCalc(num) {
  console.time('어려운 계산 시간이 얼마나 걸리나?');
  for (let i = 0; i < 999999999; i++) {
    num + 1;
  }
  console.timeEnd('어려운 계산 시간이 얼마나 걸리나?');
  return num + 10000;
}

function easyCalc(num) {
  console.time('쉬운계산 시간이 얼마나 걸리나?');

  console.timeEnd('쉬운계산 시간이 얼마나 걸리나?');
  return num + 1;
}

export default function App() {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  const hardSum = useMemo(() => hardCalc(hardNum), [hardNum]);
  const easySum = easyCalc(easyNum);

  const [num, setNum] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? '한국' : '외국';
  // const location = {
  //   country : isKorea ? '한국' : '외국'
  // }
  const location = useMemo(
    () => ({
      country: isKorea ? '한국' : '외국',
    })
    , [isKorea]);

  // 의존성 배열에 '객체' 타입이 들어간 경우 재 렌더링이 되지 않도록 따로 처리해야함.
  // 그 이유는 '객체' 타입은 참조형이라서 새 객체가 만들어진것으로 보기 때문에, num이 변경되어도 location이 변경된걸로 본다...
  // num이 변경된 경우에는 location이 변경되어도 노드는 렌더링이 되지 않도록 따로 처리해야함.
  // useMemo로 객체를 다시 계산하는 경우를 고려해줘야 한다.
  useEffect(() => {
    console.log('useEffect 호출');
  }, [location]);

  return (
    <div>
      <h2>어려운 계산</h2>
      <input
        type="number"
        value={hardNum}
        onChange={(e) => setHardNum(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
      <h2>쉬운 계산</h2>
      <input
        type="number"
        value={easyNum}
        onChange={(e) => setEasyNum(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>

      {' '}{' '}

      <div className="app">
        <h2>하루에 몇끼 먹어요?</h2>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <h2>어느 나라에 있어요?</h2>
        <p>나라: {location.country}</p>
        <button type="button" onClick={() => setIsKorea(!isKorea)}>
          비행기 타자
        </button>
      </div>
    </div>
  );
}