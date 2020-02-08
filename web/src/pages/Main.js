import React from 'react';

import './Main.css';

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import deslike from '../assets/deslike.svg'

function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>

        <li>
          <img src="https://avatars2.githubusercontent.com/u/23706340?s=460&v=4" alt="" />
          <footer>
            <strong>Lucas Lombardi Floriano</strong>
            <p>“O espírito humano precisa prevalecer sobre a tecnologia”. - Albert Einstein</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="Deslike" />
            </button>
            <button type="button" alt="Like">
              <img src={like} alt="" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars2.githubusercontent.com/u/23706340?s=460&v=4" alt="" />
          <footer>
            <strong>Lucas Lombardi Floriano</strong>
            <p>Lorem ipsum Dolor</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="Deslike" />
            </button>
            <button type="button" alt="Like">
              <img src={like} alt="" />
            </button>
          </div>
        </li>

        <li>
          <img src="https://avatars2.githubusercontent.com/u/23706340?s=460&v=4" alt="" />
          <footer>
            <strong>Lucas Lombardi Floriano</strong>
            <p>Lorem ipsusaawdsawdad dadw m Dolor</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="Deslike" />
            </button>
            <button type="button" alt="Like">
              <img src={like} alt="" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Main;