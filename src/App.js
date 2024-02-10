import './App.css';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './components/Home.jsx'
import Layout from "./components/Layout.jsx";
import TestLogin from "./components/TestLogin.jsx";

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<TestLogin/>} />
                <Route path='*' element={<h1>Page not found</h1>} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
