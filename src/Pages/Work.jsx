import Navbar from "../component/Navbar";
import styled from "styled-components";
import { GiGraduateCap } from "react-icons/gi"
import { FaAward } from "react-icons/fa";
import { CgBriefcase } from "react-icons/cg";
import Footer from "../component/footer";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center;
  width: auto;
  
  
  .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 30px;
    padding: 35px 80px; 
  
    
  }
  .header {
    display: flex;
    color: #fff;
    align-items: center;

    .sec1 {
      margin-right: 20px;
      font-family: "Courier New", Courier, monospace;
      font-size: 1.2rem;
      font-weight: bolder;
      position: relative;
    }

    .sec2 {
      height: 2px;
      width: 190px;
      border-radius: 50px;
      background-image: linear-gradient(to right, #dd2476, #fa5252);
    }
   
  }
  .ALL{
    align-items: center;
 display: flex;
    text-align: center;
    justify-content: center;
    color: #fff;
    height: 100vh;
    .icon{
     
    }
  }
  @media (max-width : 1100px){
    .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 30px;
    padding: 35px 80px; 
  
    
  }
  .header {
    display: flex;
    color: #fff;
    align-items: center;

    .sec1 {
      margin-right: 20px;
      font-family: "Courier New", Courier, monospace;
      font-size: 1.2rem;
      font-weight: bolder;
      position: relative;
    }

    .sec2 {
      display: none;
    }
   
  }
  .ALL{
    align-items: center;
 display: flex;
    text-align: center;
    justify-content: center;
    color: #fff;
    height: 100vh;
    .icon{
     
    }
  }
  }

`;

const Work = () => {
    return (

        <Container>
            <Navbar />
            <div className="general">
                <div className="border">
                    <div className="header">
                        <div className="sec1">
                            <h1>Work</h1>
                        </div>
              <div className="sec2"></div>
             
                  
                    </div>
                    

          </div>
          <div className="ALL">
            <CircularProgress  className="icon"/>
          
          </div>
                
        </div>
       
        <Footer />
        </Container>
    );
}

export default Work;