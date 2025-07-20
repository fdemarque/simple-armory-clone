import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [searchParams, setSearchParams] = useState(null);

  function handleSearch(params) {
      setSearchParams(params);
      console.log('Buscando montarias para: ', params);
  }

  return (
    <div className='App'>
        <h1>Simple Armory Clone</h1>
        {/*to be implemented*/}
        {seachParams && (
            <p>Buscando montarias para: {searchParams.character}-{searchParams.realm}</p>
        )}
    </div>
  );
}

export default App
