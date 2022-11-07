import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Users from './components/Users'
import { Page404, Home } from './pages'

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route index element={<Hero />} />
                    <Route path="users" element={<Users />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    )
}

export default App