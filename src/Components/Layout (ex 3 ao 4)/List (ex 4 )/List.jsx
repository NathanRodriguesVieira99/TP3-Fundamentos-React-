import React, { useState } from 'react';
import './List.css';

function List() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const BestAlbuns = [
    { name: 'Stop Starring at The Shadows', year: 2020 },
    { name: 'Long Term Effects of SUFFERING', year: 2021 },
    { name: 'I Want to Die in New Orleans', year: 2018 },
  ];

  return (
    <div>
      {isOpen && <div className="overlay" onClick={toggleDropdown} />}
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown} type="button">
          {isOpen ? 'x' : 'More about $B'}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <h1>The Best $B Albums</h1>
            <ul>
              {BestAlbuns.map((album, index) => (
                <li key={index}>
                  {album.name} ({album.year})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
