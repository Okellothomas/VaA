import MainAbout from './about/MainAbout';
import './App.css';
import MainContact from './contact/MainContact';
import MainIndustries from './industries/MainIndustries';
import MainService from './services/MainService';

function App() {
  return (
    <div className='mainapp'>
      {/* <MainIndustries /> */}
      {/* <MainAbout /> */}
      {/* <MainContact /> */}
      <MainService />
    </div>
  );
}

export default App;
