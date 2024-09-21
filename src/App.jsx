// App.jsx
import useStore from '@/stores/store.js';
import useNumberBaseStore from '@/stores/numberBaseStore.js';

export default function App() {
  const { bears, increasePopulation, removeAllBears } = useStore();
  const { numberA, numberB, increaseNumberA, increaseNumberB } = useNumberBaseStore();

  return (
    <div className="app">
      <div>
        <h1>{bears} around here ...</h1>

        <button type="button" onClick={increasePopulation}>
          one up
        </button>
        <button type="button" onClick={removeAllBears}>
          remove all
        </button>
      </div>
      <div>
        <p>numberA: {numberA}</p>
        <p>numberB: {numberB}</p>
        <button type="button" onClick={increaseNumberA}>
          increase numberA
        </button>
        <button type="button" onClick={() => increaseNumberB(3)}>
          increase numberB
        </button>
      </div>
    </div>

  );

}