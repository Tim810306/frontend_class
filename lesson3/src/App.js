// 1 需要下載套件到專案
// 2 需要已經下載套件放到程式碼
// 3 使用對應套件
import logo from './logo.svg';
// logo.svg 用一個變數名字叫做logo ，去呼叫logo，他就會反應
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Visualization from './components/Visualization';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/settings" component={Settings}></Route>
          <Route path="/visualization" component={Visualization}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
