import React, { useEffect, useState } from 'react';
import dataFetcher from './services/dataFetcher'

function App() {

  const [textData, setTextData] = useState<String | null>(null);
  const [textUrl, setTextUrl] = useState<String>('https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt');
  
  useEffect(() => {
    dataFetcher
      .fetch(textUrl).then(data => setTextData(data.json()))
      .catch(error => console.log(error))
  }, [textUrl])

  return (
    <div className="App">
      <h3>Hello, Welt!</h3>
      {textData ? <p>{textData}</p> : <p>No data :(</p>}
    </div>
  );
}

export default App;
