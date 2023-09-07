import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
    const SideTitle = "選單頁面";
    const word = "安安你好嗎";
    return (
      <div>
        <h1>{SideTitle}</h1>
        <h2>{word}</h2>
        <ul>
            <li><Link to='/'> 前往 Dashboard</Link></li>
            <li><Link to='/settings'> 前往 Settings</Link></li>
            <li><Link to='/visualization'> 前往 Visualization</Link></li>
        </ul>
      </div>
    );
}


export default Sidebar;