import React from 'react';
import Sidebar from './Sidebar';

function Visualization(){
    const VisualTitle = "視覺化頁面";
    const word = "安安你好嗎";
    return (
      <div>
        <Sidebar />
        <h1>{VisualTitle}</h1>
        <h2>{word}</h2>
      </div>
    );
}

export default Visualization;