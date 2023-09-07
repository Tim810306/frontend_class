import React from 'react';
import Sidebar from './Sidebar';

function Dashboard(){
    const DashTitle = "儀表板頁面";
    const word = "安安你好嗎";
    return (
      <div>
        <Sidebar />
        {/* <h1>{DashTitle}</h1>
        <h2>{word}</h2>
        <p>寫程式簡單</p>
        <h1>123</h1>
        <h2>xxx</h2> */}
      </div>
    );
}

export default Dashboard;