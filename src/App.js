import React, { useState } from 'react';

function App() {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [results, setResults] = useState([]);

  const computeDifferences = () => {
    const arrayA = listA.split(',');
    const arrayB = listB.split(',');

    const uniqueA = arrayA.filter((item) => !arrayB.includes(item));
    const uniqueB = arrayB.filter((item) => !arrayA.includes(item));
    const commonItems = arrayA.filter((item) => arrayB.includes(item));
    const combinedItems = [...new Set([...arrayA, ...arrayB])];

    const differences = {
      onlyInA: uniqueA,
      onlyInB: uniqueB,
      commonItems: commonItems,
      combinedItems: combinedItems,
    };

    setResults(differences);
  };

  return (
    <div>
      <div>
        <label>List A:</label>
        <input
          type="text"
          value={listA}
          onChange={(e) => setListA(e.target.value)}
        />
      </div>
      <div>
        <label>List B:</label>
        <input
          type="text"
          value={listB}
          onChange={(e) => setListB(e.target.value)}
        />
      </div>
      <button onClick={computeDifferences}>Compute</button>

      <div>
        <h2>Results:</h2>
        <p>Items only in A: {results.onlyInA && results.onlyInA.join(', ')}</p>
        <p>Items only in B: {results.onlyInB && results.onlyInB.join(', ')}</p>
        <p>Items present in both A and B: {results.commonItems && results.commonItems.join(', ')}</p>
        <p>Combined unique items: {results.combinedItems && results.combinedItems.join(', ')}</p>
      </div>
    </div>
  );
}

export default App;