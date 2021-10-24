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
            img: "barter",
            github: "https://github.com/Dinimar-Fishboi/Project_2_team3",
            website: "https://project2t3.herokuapp.com/",
            id: 1,
        },
        {
            title: "Help I'm Bored",
            img: "bored",
            github: "https://github.com/rajnidua/project-one",
            website: "https://rajnidua.github.io/project-one/",
            id: 2,
        },
        {
            title: 'Note Taker',
            img: "note",
            github: "https://github.com/Dinimar-Fishboi/NoteTaker",
            website: "https://eleven-note-take.herokuapp.com/",
            id: 3,
        },
        {
            title: 'Budget Tracker',
            img: "budget",
            github: "https://github.com/Dinimar-Fishboi/Budget_Tracker",
            website: "https://boiling-brook-13121.herokuapp.com",
            id: 4,
        },
        {
            title: 'Password Generator',
            img: "password",
            github: "https://github.com/Dinimar-Fishboi/PasswordGenerator",
            website: "https://dinimar-fishboi.github.io/PasswordGenerator/",
            id: 5,
        },
        {
            title: 'Work Day Scheduler',
            img: "workday",
            github: "https://github.com/Dinimar-Fishboi/Work-Day-Scheduler",
            website: "https://dinimar-fishboi.github.io/Work-Day-Scheduler/",
            id: 6,
        }
        
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
