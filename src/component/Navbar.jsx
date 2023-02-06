import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiCodesandbox } from "react-icons/fi";
import { FaRegUser, FaBlogger, FaTimes } from "react-icons/fa";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { BsBrightnessHigh } from "react-icons/bs";
import {  CgNotes } from "react-icons/cg"
import { useState } from "react";

const Container = styled.div`
  background-color: black;
  margin: 0;
  padding: 0;
  .logs{
 .logo {
    align-items: center;
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
  .bar{
    display: none;
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
  .list-small {
    display: none;
  } 

  @media  (max-width : 1100px) {
    
    margin: 0;

    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    height: 8vh;
  padding: 0;
.smat{
     .list-small {
        position: absolute;
  width: 100%;
     border-bottom-left-radius: 20px;
         background-color: #1D1D1D;
   border-bottom-right-radius: 20px;
      display: block;
     
      right: 0;
      
   ul {
    align-items: center;
    
      display: block;
      list-style: none;
      
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

    }
    }
}
     .logs{
     
 
    .logo {
      display: flex;
      gap: 0;
        align-items: center;
    
    h1{
    

    }
   
    display: flex;
    align-items: center;
   
    align-items: center;
      margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    margin-bottom: 25px;
    span {
      color: #ff2d55;
    }

    a {
      text-decoration: none;
      color: #d6d1d1;
    }
  }
     }
        .bar{
      flex-direction: column;
      position: relative;
   .click{
  display: flex;
      align-items: center;
        i{
     margin-right: 10px;
     margin-bottom: 20px;
      font-size: 25px;
.high{
    
        background-color: #4D4D4D;
        color: white;
          height: 40px;
      width: 40px;
       display: flex;
     align-items: center;
      border-radius: 50%;
     justify-content: center;
     }
     .menu{
        height: 40px;
         background-image: linear-gradient(to right, #fa5252, #dd2476);
         display: none;
      width: 40px;
      color: white;
        border-radius: 50%;
       display: flex;
     align-items: center;
    
     justify-content: center;
   .times{
       margin-top: 7px;
       margin-left: 7px;
    }
     }

     .cancels{
       display: flex;
       align-items: center;
        height: 40px;
         background-image: linear-gradient(to right, #fa5252, #dd2476);
      width: 40px;
      color: white;
        border-radius: 50%;
      
    .times{
       margin-top: 7px;
       margin-left: 7px;
    }
  
     }
     #cancel{
      display: none;
     }
    }
   }
    
   
    }
.Nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
   
    margin-bottom: 0;
    margin-top: 0;
background-color: black;
height: 13vh;
width: auto;

    .list {
      display: none;
 

  .lastchild {
    display: none;

    }
    }

  
    
 
  }
  .list {
    text-decoration: none;
    
 
  }  
  

  }
@media (max-width :  600px){
 
    margin: 0;

    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    height: 8vh;
  padding: 0;
.smat{
     .list-small {
        position: absolute;
  width: 100%;
     border-bottom-left-radius: 20px;
         background-color: #1D1D1D;
   border-bottom-right-radius: 20px;
      display: block;
     
      right: 0;
      
   ul {
    align-items: center;
    
      display: block;
      list-style: none;
      
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

    }
    }
}
     .logs{
     
 
    .logo {
      display: flex;
      gap: 0;
        align-items: center;
    
    h1{
    

    }
   
    display: flex;
    align-items: center;
   
    align-items: center;
      margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    margin-bottom: 25px;
    span {
      color: #ff2d55;
    }

    a {
      text-decoration: none;
      color: #d6d1d1;
    }
  }
     }
        .bar{
      flex-direction: column;
      position: relative;
   .click{
  display: flex;
      align-items: center;
        i{
     margin-right: 10px;
     margin-bottom: 20px;
      font-size: 25px;
.high{
    
        background-color: #4D4D4D;
        color: white;
          height: 40px;
      width: 40px;
       display: flex;
     align-items: center;
      border-radius: 50%;
     justify-content: center;
     }
     .menu{
        height: 40px;
         background-image: linear-gradient(to right, #fa5252, #dd2476);
         display: none;
      width: 40px;
      color: white;
        border-radius: 50%;
       display: flex;
     align-items: center;
    
     justify-content: center;
   .times{
       margin-top: 7px;
       margin-left: 7px;
    }
     }

     .cancels{
       display: flex;
       align-items: center;
        height: 40px;
         background-image: linear-gradient(to right, #fa5252, #dd2476);
      width: 40px;
      color: white;
        border-radius: 50%;
      
    .times{
       margin-top: 7px;
       margin-left: 7px;
    }
  
     }
     #cancel{
      display: none;
     }
    }
   }
    
   
    }
.Nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
   
    margin-bottom: 0;
    margin-top: 0;
background-color: black;
height: 13vh;
width: auto;

    .list {
      display: none;
 

  .lastchild {
    display: none;

    }
    }

  
    
 
  }
  .list {
    text-decoration: none;
    
 
  }  
}

@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3){
  
    margin: 0;

    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    height: 8vh;
  padding: 0;
.smat{
     .list-small {
        position: absolute;
  width: 100%;
     border-bottom-left-radius: 20px;
         background-color: #1D1D1D;
   border-bottom-right-radius: 20px;
      display: block;
     
      right: 0;
      
   ul {
    align-items: center;
    
      display: block;
      list-style: none;
      
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

    }
    }
}
     .logs{
     
 
    .logo {
      display: flex;
      gap: 0;
        align-items: center;
    
    h1{
    

    }
   
    display: flex;
    align-items: center;
   
    align-items: center;
      margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    margin-bottom: 25px;
    span {
      color: #ff2d55;
    }

    a {
      text-decoration: none;
      color: #d6d1d1;
    }
  }
     }
        .bar{
      flex-direction: column;
      position: relative;
   .click{
  display: flex;
      align-items: center;
        i{
     margin-right: 10px;
     margin-bottom: 20px;
      font-size: 25px;
.high{
    
        background-color: #4D4D4D;
        color: white;
          height: 40px;
      width: 40px;
       display: flex;
     align-items: center;
      border-radius: 50%;
     justify-content: center;
     }
     .menu{
        height: 40px;
         background-image: linear-gradient(to right, #fa5252, #dd2476);
         display: none;
      width: 40px;
      color: white;
        border-radius: 50%;
       display: flex;
     align-items: center;
    
     justify-content: center;
   .times{
       margin-top: 7px;
       margin-left: 7px;
    }
     }

     .cancels{
       display: flex;
       align-items: center;
        height: 40px;
         background-image: linear-gradient(to right, #fa5252, #dd2476);
      width: 40px;
      color: white;
        border-radius: 50%;
      
    .times{
       margin-top: 7px;
       margin-left: 7px;
    }
  
     }
     #cancel{
      display: none;
     }
    }
   }
    
   
    }
.Nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
   
    margin-bottom: 0;
    margin-top: 0;
background-color: black;
height: 13vh;
width: auto;

    .list {
      display: none;
 

  .lastchild {
    display: none;

    }
    }

  
    
 
  }
  .list {
    text-decoration: none;
    
 
  }  
}
`;
const Navbar = () => {

  const [navs, setNav] = useState(false)

  

  const Handleopen = () => {
    setNav(true);
    document.getElementById('menut').style.display = "none";
    document.getElementById('cancel').style.display = "block";
  
    document.getElementById('CAN').style.marginTop = "7px";
    document.getElementById('CAN').style.marginLeft = "7px";


  }
  const Handleclose = () => {
    document.getElementById('times').style.marginTop = "7px";
    document.getElementById('times').style.marginLeft = "7px";
    document.getElementById('cancel').style.display = "none"
    document.getElementById('menut').style.display = 'block'
    setNav(false)
  }

  return (
    <Container>
      <div className="Nav" id="nav">
        <div className="logs">
          <div className="logo">
            <h1>
              <NavLink to="/">
                Prince<span>-Aj</span>
              </NavLink>

            </h1>

          </div>
          
        </div>
        <div className="bar">
          <div className="click">
            <i>
              <div className="high">
                <BsBrightnessHigh />
              </div>

            </i>


            <i>
              <div className="menu" id="menut" onClick={() => Handleopen()} >
                <AiOutlineMenu id="times" />
              </div>
              <div className="cancels" id="cancel" onClick={Handleclose}
              >
                <FaTimes id="CAN" />
              </div>

            </i>
          </div>

         
        </div>
        <div className='list'>
       
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
            <i  className="lasst">
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
      <div className="smat">
        {navs && (
          <div className='list-small'>

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
        )}
      </div>
    </Container>
  );
};


export default Navbar;
