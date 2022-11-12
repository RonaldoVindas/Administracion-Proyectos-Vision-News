import './App.css';

import {Routes, Route} from 'react-router-dom';

//Routes
import LoginPage from './pages/loginPage/loginPage.js'
import NewsPage from './pages/newsPage/newsPage.js';
import NewPage from './pages/newPage/newPage.js';
import CreateNews from './pages/createNewsPage/createNewsPage.js';
import SeeInfo from "./pages/InformationUser/SeeInfo.js";
import UpdateInfo from "./pages/InformationUser/UpdateInfo.js";
import FilterPage from "./pages/filterPage/filterPage.js";
import SinginPage from "./pages/singinPage/singinPage.js";
import FilternewsPage from "./pages/filterNews/filternewsPage.js"


function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/signIn' element={<SinginPage/>}/>
      <Route path='/news' element={<NewsPage/>}/>
      <Route path='/new/:new_id' element={<NewPage/>}/>
      <Route path='/createNews' element={<CreateNews/>}/>
      <Route path="/UpdateInfo" element={<UpdateInfo/>}/>
      <Route path="/SeeInfo" element={<SeeInfo/>}/>
      <Route path="/filterPage" element={<FilterPage/>}/>
      <Route path="/filternewsPage/:filtro/:f_id" element={<FilternewsPage/>}/>
    </Routes>
  );
}

export default App;
