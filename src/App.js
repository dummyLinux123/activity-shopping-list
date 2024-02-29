import './App.css';

/* importing of components */
import Header from './component/Header';
import MainComponent from './component/MainComponent';

function App() {
  return (
    <div className="App">
     
      <div>
        <Header/>
        <MainComponent/>
      </div> 

    </div>
  );
}

export default App;
