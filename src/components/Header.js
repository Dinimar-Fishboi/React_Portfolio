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
                    <li className="nav-item" key={item.index}
                        href={item}
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
