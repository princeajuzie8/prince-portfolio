import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiCodesandbox } from "react-icons/fi";
import { FaRegUser, FaBlogger } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { BsBrightnessHigh } from "react-icons/bs";
import { CgLoadbarDoc, CgNotes } from "react-icons/cg"

const Container = styled.div`
  background-color: black;
  margin: 0;
  padding: 0;
  .logo {
    h1{
      
    }
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
    margin-bottom: 0;

    .list ul {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      a {
        text-decoration: none;
      }
    }

    li {

      

      a{
        margin-right: 20px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #A6A6A6;
      display: flex;
      align-items: center;
      padding: 10px 25px;
      cursor: pointer;
      margin-bottom: 0px;
      font-size: 13px;
      :hover{
        background-image: linear-gradient(to right, #fa5252, #dd2476);
        color: white;
        transition: 0.6s ease;
      }
      
      i {
        align-items: center;
        font-size: 18px;
        margin-right: 10px;
      }
      }
      .active{
        background-image: linear-gradient(to right, #fa5252, #dd2476);
        color: white;
        transition: 0.6s ease;
      }
      

    }

  .lastchild {
    :hover{
        background-image: linear-gradient(to right, #fa5252, #dd2476);
        color: white;
        transition: 0.6s ease;
      }
      border-radius: 100px;
      padding-left: 12px;
      padding-right: 12px;
      padding-top: 8px;
      color: #a49e9e;
      background-color: #3a3a3a;
      padding-bottom: 5px;
      cursor: pointer;
      margin-right: 10px;
      i {
        align-items: center;
        font-size: 25px;
      }
    }
  }
  .list {
    text-decoration: none;
    
 
  }  

  @media  (max-width : 1100px) {
    
     background-color: black;
  margin: 0;

    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    height: 8vh;
  padding: 0;
  padding-top: 0;
      .logo {
    margin-top: 0;
    h1{
      
    }
      margin-top: 20px;
    font-size: 15px;
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
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 0;
    margin-top: 0;
background-color: black;
height: 15vh;
width: auto;

    .list ul {
      height: auto;
    margin-top: 0;
  padding: 0;
 padding-left: 15px;
    background-color: #1D1D1D;
width: 95vw;
      display: block;
      list-style: none;
      margin-bottom: 0;
      a {
        text-decoration: none;
      }
    }

    li {
   display: flex;
      align-items: center;
  
        
      a{
        margin-right: 0;
      border-radius: 5px;
      margin: 0;
      background-color: inherit;
      color: white;
  
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 0;
      padding: 0 0;
      cursor: pointer;
      
      font-size: 15px;
      :hover{
        background-image: none;
        color: #FA5252;
        transition: 0.6s ease;
      }
      
      i {
        align-items: center;
        font-size: 18px;
        margin-right: 10px;
        .lasst{
          margin-bottom: 10px;
        }
        
      }
      }
      .active{
        background-image: none;
       color: #FA5252;
        transition: 0.6s ease;
      }
      

    }

  .lastchild {
    display: none;
    :hover{
        background-image: linear-gradient(to right, #fa5252, #dd2476);
        color: white;
        transition: 0.6s ease;
      }
      border-radius: 100px;
      padding-left: 12px;
      padding-right: 12px;
      padding-top: 8px;
      color: #a49e9e;
      background-color: #3a3a3a;
      padding-bottom: 5px;
      cursor: pointer;
      margin-right: 10px;
      i {
        align-items: center;
        font-size: 25px;
      }
    }
  }
  .list {
    text-decoration: none;
    
 
  }  
  }
`;




const Navbar = () => {


  return (
    <Container>
      <div className="Nav" id="nav">
        <div className="logo">
          <h1>
            <NavLink to="/">
              Prince<span>-Aj</span>
            </NavLink>
          </h1>
        </div>
        <div className="list">
          <ul>


            <li>
              <NavLink to="/" end> 
                <i>
                  <AiOutlineHome />
                </i>
                Home
              </NavLink>
            </li>



            <li>
              <NavLink to="/about" >
          
                <i>
                  <FaRegUser />
                </i>
                About
              </NavLink>
            </li>



            <li >
              <NavLink to="/resume" >
                <i>
                  <CgNotes /></i>Resume
              </NavLink>
            </li>




            <li >
              <NavLink to="/work">
                <i>
                  <FiCodesandbox />
                </i>
                Works
              </NavLink>
            </li>





            <li >
              <NavLink to="/blogs">
                <i>
                  <FaBlogger style={{
                    Fontsize: "30px"
                  }} />
                  
                  </i>
                  Blogs
              </NavLink >
            </li>



            <li>
              <NavLink to="/contact">
                <i className="lasst">
                  <RiContactsBookLine />
                </i>
                Contact
              </NavLink>
            </li>


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
