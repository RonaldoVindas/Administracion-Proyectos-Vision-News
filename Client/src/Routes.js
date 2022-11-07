import {BrowserRouter,Routes ,Route} from 'react-router-dom';
import SeeInfo from "./Page/SeeInfo.js"
import UpdateInfo from "./Page/UpdateInfo"






export default function RoutesP() {
    return (
  
        <BrowserRouter>

            <Routes>
                <Route path="/UpdateInfo" element={<UpdateInfo/>}/>
                <Route path="/SeeInfo" element={<SeeInfo/>}/>
            </Routes>
        </BrowserRouter>
    )
  }