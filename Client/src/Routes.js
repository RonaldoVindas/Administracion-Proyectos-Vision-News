import {BrowserRouter,Routes ,Route} from 'react-router-dom';
import SeeInfo from "./pages/InformationUser/SeeInfo.js"
import UpdateInfo from "./pages/InformationUser/UpdateInfo"






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