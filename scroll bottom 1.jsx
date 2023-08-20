import { useRef, useState } from 'react';

const allFruits = [
  'Apples',
  'Bananas',
  'Oranges',
  'Grapes',
  'Strawberries',
  'Blueberries',
  'Pineapples',
  'Mangoes',
  'Kiwis',
  'Watermelons',
];

export default function App() {
  const ref = useRef(null);

  const [fruits, setFruits] = useState([...allFruits.slice(0, 3)]);

  const addFruit = () => {
    setFruits((prevFruits) => [...prevFruits, allFruits[prevFruits.length]]);
  };

  const scrollToLastFruit = () => {
    const lastChildElement = ref.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          backgroundColor: 'white',
          bottom: 0,
          marginBottom: 10,
        }}
      >
        <button onClick={addFruit}>Add fruit</button>
        <button onClick={scrollToLastFruit} style={{ marginLeft: '8px' }}>
          Scroll to last
        </button>
      </div>

      <div style={{ height: '5rem' }} />

      <div ref={ref}>
        {fruits.map((fruit) => (
          <h2 key={fruit}>{fruit}</h2>
        ))}
      </div>

      <div style={{ height: '150rem' }} />
    </div>
  );
}
