import './App.css';

import {Routes, Route} from 'react-router-dom';

//Routes
import NewsPage from './pages/newsPage/newsPage.js';
import NewPage from './pages/newPage/newPage.js';
import CreateNews from './pages/createNewsPage/createNewsPage.js';
import SeeInfo from "./pages/InformationUser/SeeInfo.js";
import UpdateInfo from "./pages/InformationUser/UpdateInfo.js";


function App() {
  return (
    <Routes>
      <Route path='/news' element={<NewsPage/>}/>
      <Route path='/new/:new_id' element={<NewPage/>}/>
      <Route path='/createNews' element={<CreateNews/>}/>
      <Route path="/UpdateInfo" element={<UpdateInfo/>}/>
      <Route path="/SeeInfo" element={<SeeInfo/>}/>
    </Routes>
  );
}

export default App;
