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
  console.log(window.location)
  let component
  switch (window.location.pathname) {
    case "/anctimes/":
      component = <Home></Home>
      break;
    case "/anctimes/#/politics":
      component = <Politics></Politics>
      break;
    case "/anctimes/#/opinion":
      component = <Opinion></Opinion>
      break;
    case "/anctimes/#/elections":
      component = <Elections></Elections>
      break;
    case "/anctimes/#/mayorial":
      component = <Mayorial></Mayorial>
      break;
    case "/anctimes/#/assembly":
      component = <Assembly></Assembly>
      break;
    case "/anctimes/#/referendums":
      component = <Referendum></Referendum>
      break;
    case "/anctimes/#/polls":
        component = <Polls></Polls>
        break;
    case "/anctimes/#/video":
      component = <Video></Video>
      break;
    default:
      console.log("Could not find the correct window page to display.")
      break;
  }
  return (
    <div className="App">
      {component}
    </div>
  );
}

export default App;
