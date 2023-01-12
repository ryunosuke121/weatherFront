import { useState } from 'react';
import '../App.css';
import AreaForm from './areaForm';
import Header from './Header';

function App() {


  return (
    <>
      <Header/>
      <div className='container mx-auto max-w-2xl bg-blue-50 p-10'>
        <AreaForm/>
      </div>
    </>
  );
}

export default App;
