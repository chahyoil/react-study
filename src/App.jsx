import './App.css';
import React, { useState, useMemo } from 'react';


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
    </div>
  );
}