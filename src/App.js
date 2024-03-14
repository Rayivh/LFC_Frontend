import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {AuthProvider} from "./components/HOC/AuthProvider";

import Home from './components/pages/Home.jsx'
import Layout from "./components/HOC/Layout.jsx";
import Profile from "./components/pages/Profile/Profile";
import Register from "./components/pages/Register";
import PDF from "./components/pages/ApplyForm/PDF";
import AccountVerification from "./components/pages/AccountVerification";
import Login from "./components/pages/Login";
import Staff from "./components/pages/Staff";
import Mission from "./components/pages/Mission";
import Recruitment from "./components/pages/Recruitment";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/profile/apply' element={<PDF/>}/>
                    <Route path='/account-verification' element={<AccountVerification/>}/>
                    <Route path='/staff' element={<Staff/>}/>
                    <Route path='/mission' element={<Mission/>}/>
                    <Route path='/recruitment' element={<Recruitment/>}/>
                    <Route path='/contact' element={<Contact/>}/>

                    <Route path='/dashboard'/>
                    <Route path='/admin'/>

                    <Route path='/error'/>
                    <Route path='*' element={<h1>Page not found</h1>} />
                </Routes>
            </Layout>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
