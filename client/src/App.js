import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Verify from './pages/verify/verify';
import Reset from './pages/reset/reset';
import Create from './pages/create/create';
import Check from './pages/check_out/check';
import Plan from './pages/plan/plan';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" replace />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/verify" element={<Verify />}/>
                <Route path="/reset" element={<Reset />}/>
                <Route path="/create" element={<Create />}/>
                <Route path="/check" element={<Check />}/>
                <Route path="/plan" element={<Plan />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;