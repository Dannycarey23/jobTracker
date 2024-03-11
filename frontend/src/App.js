import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
