import './App.css';

import {Routes, Route} from 'react-router-dom'

//Routes
import NewsPage from './pages/newsPage/newsPage';
import NewPage from './pages/newPage/newPage';
import SeeInfo from "./pages/InformationUser/SeeInfo.js"
import UpdateInfo from "./pages/InformationUser/UpdateInfo"

function App() {
  return (
    <Routes>
      <Route path='/news' element={<NewsPage/>}/>
      <Route path='/new' element={<NewPage/>}/>
      <Route path="/UpdateInfo" element={<UpdateInfo/>}/>
      <Route path="/SeeInfo" element={<SeeInfo/>}/>
    </Routes>
  );
}

export default App;
