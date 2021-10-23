import React from 'react';

function Header({ currentPage, handlePageChange, name }) {
    const styles = {
        header: {
            justifyContent: 'space-around',
        },
        nav: {
            justifyContent: 'flex-end',
        },
        h1: {
            margin: '10px',
        }
    }

  return (
      <>
        <header>
            <h1 style={styles.h1}>
                Dev.Fish Studio
            </h1>
            <ul style={styles.nav} className="nav nav-tabs">
            {name.map(
                (item) =>   {
                    console.log(item)
                return (
                    <li className="nav-item" key={item.index}>
                    <a
                    href={item}
                    onClick={() => handlePageChange(item)}
                    className={currentPage === item ? 'nav-link active' : 'nav-link'}
                    >
                    {item}
                    </a>
            </li>
                )
                }
            )
            }
            {/* <li className="nav-item">
                <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                Resume
                </a>
            </li> */}
            </ul>
        </header>
    </>
  );
}

export default Header;
