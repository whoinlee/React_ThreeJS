import { useRef } from 'react';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import Nav from './components/Nav';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';
import Loader from './components/Loader';

function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer ref={webgiViewerRef} contentRef={contentRef} />
    </div>
  );
}

export default App;
