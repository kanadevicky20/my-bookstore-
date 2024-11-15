import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import BookListPage from './Components/BookListPage';
import ContactUsPage from './Components/ContactUsPage';
import AboutUsPage from './Components/AboutUsPage';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BookListPage />} />
                    <Route path="/contact" element={<ContactUsPage/>}/>
                    <Route path='/about' element={<AboutUsPage/>}/>
                </Routes>                
            </div>
        </Router>
    );
}

export default App;
