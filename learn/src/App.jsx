import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Account from './Pages/Account';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import AddBlog from './Pages/AddBlog';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import Chatbox from './components/Chatbox';
import Footer from './components/Footer';
import Enroll from './Pages/Enroll';
import Course from './Pages/Course';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <div className='pt-20'>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Courses" element={<Courses/>}/>
            <Route path="/Account" element={<Account/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/add-blog" element={<AddBlog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Get" element={<Courses/>}/>
            <Route path="/Learn" element={<Blog/>}/>
            <Route path="/enroll/:id" element={<Enroll />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="settings" element={<Settings />} />
            <Route path="/regi" element={<Register />} />
        </Routes>
    </div>
    <Footer />
    <Chatbox /> 
    </BrowserRouter>
    </>
  )
}

export default App