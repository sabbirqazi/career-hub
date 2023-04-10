import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      
      <Header></Header>
      
        <div className='md:min-h-[calc(100vh-341px)]'>
          <Outlet></Outlet>
        </div>
    </>
  );
};

export default App;