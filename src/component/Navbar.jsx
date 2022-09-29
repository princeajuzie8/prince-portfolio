import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiCodesandbox } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { BsBrightnessHigh } from "react-icons/bs";
import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";




const Container = styled.div`
  background-color: black;
  margin: 0;
  padding: 0;
  .logo {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    span {
      color: #ff2d55;
    }

    a {
      text-decoration: none;
      color: #d6d1d1;
    }
  }
  .Nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;

    .list ul {
      display: flex;
      list-style: none;
      margin-bottom: 0px;
      a {
        text-decoration: none;
      }
    }

    li {
      margin-right: 20px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #d6d1d1;
      display: flex;
      align-items: center;
      padding: 10px 20px;
      cursor: pointer;
      transform: translate(-50% -50%);
      margin-bottom: 0px;

      font-size: 13px;
      i {
        align-items: center;
        font-size: 20px;
        margin-right: 10px;
      }
    }
    .lastchild {
      border-radius: 100px;
      padding-left: 10px;
      padding-right: 1px;
      padding-top: 8px;
      background-color: #3a3a3a;
      padding-bottom: 5px;
      margin-right: 10px;
      i {
        font-size: 25px;
      }
    }
    ul {
      a:is(:link, :active, :visited).active {
        border-radius: 5px;
        background-image: linear-gradient(to right, #fa5252, #dd2476);
        padding: 0;
        color: white;

        margin-bottom: 0;
      }
    }
  }
  li:hover {
    transition: 3s;
    transform: scale(1.1);
    background-image: linear-gradient(to right, #fa5252, #dd2476);
    color: white;
  }

  .list {
    text-decoration: none;
  }
`;
const Navbar = () => {

  
  const Home = () => {
    let name = 'prince';
    const [] = useState("mario");
  
    
  };
  

  return (
    <Container>
      <div className="Nav">
        <div className="logo">
          <h1>
            <Link to="/">
              Prince<span>-Aj</span>
            </Link>
          </h1>
        </div>
        <div className="list">
          <ul>
            <Link to="/" className="active">
              <li>
                <i>
                  <AiOutlineHome />
                </i>
                Home
              </li>
            </Link>

            <Link to="/about">
              <li>
                <i>
                  <FaRegUser />
                </i>
                About
              </li>
            </Link>

            <Link to="/Resume">
              <li>
                <i class="fa-solid fa-book"></i>Resume
              </li>
            </Link>

            <Link to="/work">
              <li>
                <i>
                  <FiCodesandbox />
                </i>
                Works
              </li>
            </Link>

            <Link to="/blogs">
              <li>
                <i class="fa-brands fa-blogger"></i>Blogs
              </li>
            </Link>

            <Link to="/contact">
              <li>
                <i>
                  <RiContactsBookLine />
                </i>
                Contact
              </li>
            </Link>

            <li className="lastchild">
              <i>
                <BsBrightnessHigh />
              </i>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
