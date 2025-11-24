
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screens/home/Home'
import paths from './paths'
export default function index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={paths.home} element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}
