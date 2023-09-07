import React from 'react';
import Sidebar from './Sidebar';

function Settings(){
    const SettingsTitle = "設定頁面";
    const word = "安安你好嗎";
    return (
      <div>
        <Sidebar />
        <h1>{SettingsTitle}</h1>
        <h2>{word}</h2>
      </div>
    );
}

export default Settings;