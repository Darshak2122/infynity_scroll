import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ApiData from './pages/ApiData';
import DetailsPage from './pages/DetailsPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ApiData/>}/>
        <Route exact path="/DetailsPage" element={<DetailsPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
