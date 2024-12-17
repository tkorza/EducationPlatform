import Landing from './Page/Landing'
import Login from './Page/Login'
import SignUp from './Page/SignUp'
import CoursesFunc from './Page/Courses'
import InfoCourse from './Page/AboutCourse'
import ErrorWindow from './Page/ErrorWindow'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/reg' element={<SignUp></SignUp>}></Route>
      <Route path='/courses' element={<CoursesFunc></CoursesFunc>}></Route>
      <Route path='/aboutcourse' element={<InfoCourse></InfoCourse>}></Route>
      <Route path='/errorPage' element={<ErrorWindow></ErrorWindow>}></Route>
    </Routes>
  )
}
export default App