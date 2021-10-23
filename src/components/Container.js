import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const publicProjects = [
        {
            title: 'Barter Place',
            img: "",
            github: "",
            website: "",
            id: 1,
        },
        {
            title: "Help I'm Bored",
            img: "",
            github: "",
            website: "",
            id: 2,
        },
        {
            title: 'Note Taker',
            img: "",
            github: "",
            website: "",
            id: 3,
        },
        
    ]
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio projects={publicProjects}/>;
      }
      if (currentPage === 'Resume') {
        return <Resume/>;
      }
      return <Contact />;
    };

    const name = ['About', 'Portfolio', 'Contact', 'Resume'];

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
         <Header currentPage={currentPage} handlePageChange={handlePageChange} name={name} />
         {renderPage()}
         <Footer/>
        </div>
    );
}
