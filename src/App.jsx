import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import Nav from './components/Nav';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';

function App() {

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
