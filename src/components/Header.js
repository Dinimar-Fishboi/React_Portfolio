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
            padding: '10px',
            color: '#1B9AAA'
        }
    }

  return (
      <>
        <header style={styles.header}>
            <h1 style={styles.h1}>
                Dev.Fish Studio
            </h1>
            <ul style={styles.nav} className="nav nav-tabs">
            {name.map(
                (item, index) =>   {
                return (
                    <li className="nav-item" key={index}
                        href={item}
                        style={{color: '#1B9AAA'}}
                        onClick={() => handlePageChange(item)}
                        // eslint-disable-next-line
                        className={currentPage === item ? 'nav-link active' : 'nav-link'}>
                        {item}
                    </li>
                      )
                  }
              )
            }    
            </ul>
        </header>
    </>
  );
}

export default Header;
