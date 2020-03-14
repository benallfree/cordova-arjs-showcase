import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <ul>
          <li>
            <Link to="/basicGetUserMedia">Basic getUserMedia</Link>
          </li>
          <li>
            <Link to="/getusermedia-canvas">getUserMedia to canvas</Link>
          </li>
          <li>
            <Link to="/positioning-test">Positioning Test</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
