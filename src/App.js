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


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home></Home>
      break;
    case "/politics":
      component = <Politics></Politics>
      break;
    case "/opinion":
      component = <Opinion></Opinion>
      break;
    case "/elections":
      component = <Elections></Elections>
      break;
    case "/mayorial":
      component = <Mayorial></Mayorial>
      break;
    case "/assembly":
      component = <Assembly></Assembly>
      break;
    case "/referendums":
      component = <Referendum></Referendum>
      break;
    case "/polls":
        component = <Polls></Polls>
        break;
    case "/video":
      component = <Video></Video>
      break;
  }
  return (
    <div className="App">
      {component}
    </div>
  );
}

export default App;
