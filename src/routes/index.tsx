
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screens/home/HomeContainer'
import paths from './paths'
import SignIn from '../modules/onboarding/sign-in/SignIn';
export default function index() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.login} element={<SignIn />} />
        </Routes>
    </BrowserRouter>
  )
}
