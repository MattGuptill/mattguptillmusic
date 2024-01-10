
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaWindowClose  } from "react-icons/fa";
import { useState } from "react";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick () {
    setMenuOpen(!menuOpen)
  }

  <FaBars size={45}/>

  return (
    <>
    <nav>
      <div className="logo"><Link to="/">Matt Guptill Music</Link></div>

      

      <div className="menu" onClick={handleClick}>{menuOpen ? <FaWindowClose size={45} /> : <FaBars size={45}/> }</div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>

    {/* styling */}
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        height: 60px;
        background-color: #092635;
        position: sticky;
        top: 0;
        z-index: 99;
      }
      nav ul {
        display: flex;
        list-style-type: none;
      }

      nav a  {
        font-size: 35px;
        text-decoration: none;
        color: white !important;
        transition: all linear 200ms;
      }

      a:link, a:visited{
        text-decoration: none;
      }

      .logo a {
        font-size: 45px;
        color: green;
        text-decoration: none!important
        
      }

      nav li {
        padding-left: 2.5rem;
        
      }

      nav div a {
        color: red;
      }

      nav .menu {
        color: white;
        position: absolute;
        top: 0.75rem;
        right: 0.5rem;
        display: none;
      }

      nav li a:hover {
        color: #9EC8B9;
      }
      
      .active {
        color: #9EC8B9;
      }

      @media only screen and (max-width: 1000px) {
       nav .menu {
        display: flex;
       }

       nav {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
       }

       nav ul {
        display: none;
        flex-direction: column;
        width: 100%;
        margin-bottom: 0.25rem;
        background-color: #092635;
        position: relative;
        
       }

       nav ul.open {
        display: flex;
        
       }

        nav ul li {
          width: 100%;
          text-align: center;
          padding: 0;
        }

        nav ul li a {
          margin: 0.2rem 0.5rem;
        }

        .logo {
          font-size: 35px;
          padding-left: 0.5rem;
        }
      }

    `}</style>
    </>
  )
}
