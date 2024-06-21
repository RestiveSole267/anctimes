import Home from './components/home/home';
import Politics from './components/politics/politics'
import Opinion from './components/opinions/opinion'
import Elections from './components/elections/elections'
import Mayorial from './components/elections/mayorial';
import Assembly from './components/elections/assembly';
import Referendum from './components/elections/referendum';
import Polls from './components/elections/polls';
import Video from './components/video/video'
import './App.css';
import { Route, Routes } from "react-router-dom"

function App() {
  console.log(window.location)
  return (
    <div className="App">
      <Routes>
        <Route path="/anctimes/" element={<Home></Home>}></Route>
        <Route path="/anctimes/politics" element={<Politics></Politics>}></Route>
        <Route path="/anctimes/opinion" element={<Opinion></Opinion>}></Route>
        <a href="https://restivesole267.github.io/anctimes-elections/" ></a>
        <Route path="/anctimes/mayorial" element={<Mayorial></Mayorial>}></Route>
        <Route path="/anctimes/assembly" element={<Assembly></Assembly>}></Route>
        <Route path="/anctimes/referendum" element={<Referendum></Referendum>}></Route>
        <Route path="/anctimes/polls" element={<Polls></Polls>}></Route>
        <Route path="/anctimes/video" element={<Video></Video>}></Route>
      </Routes>
    </div>
  );
}

export default App;
