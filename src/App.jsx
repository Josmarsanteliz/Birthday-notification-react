import React, { useState, useEffect } from 'react'
 import data from './data';
import List from './List';

function App() {

   const [datos, setDatos] = useState([]);
  useEffect(() => {
      setDatos(data);
  
  }, [])
  
  if (datos.length === 0) {
    return (
        <section className='section'>
            <main className='main'>
                <div class='container'>
               <h3>{datos.length} birthdays today</h3>
           </div>
               </main>
        </section>
    )
  } else {
    return (
        <section className='section'>
            <main className='main'>
                <div class='container'>
               <h3>5 birthdays today</h3>
              {datos.map(dato => (
              <List dato={dato}/>

              ))}
              <button className='button' onClick={() =>setDatos([])}>Clear</button>
                </div>
            </main>
        </section>
      )
  }
 
}

export default App