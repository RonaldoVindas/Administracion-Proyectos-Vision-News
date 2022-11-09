import './App.css';

import {Routes, Route} from 'react-router-dom'

//Routes
import NewsPage from './pages/newsPage/newsPage';
import NewPage from './pages/newPage/newPage';

function App() {
  return (
    <Routes>
      <Route path='/news' element={<NewsPage/>}/>
      <Route path='/new/:new_id' element={<NewPage/>}/>
    </Routes>
  );
}

export default App;
