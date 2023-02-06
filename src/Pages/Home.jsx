import styled from "styled-components";
import Footer from "../component/footer";
import Navbar from "../component/Navbar";
import profile from "../images/profile.jpeg"; 
import cv from "../images/Prince Ajuzie.pdf"
// import { useContext } from "react";
// import { ThemeContext } from "../component/Context";
const Container = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center;     
  height: fit-content;
  width:  auto;
  .user {
    text-align: center;
   
    
  }

  img {
    margin-top: 10px;
    background-image: url({profile});
    width: 250px;
    height: 250px;
    border-radius: 9999px;
    border: 5px solid gray;
  }
  .username {
    font-weight: 600;
    font-size: 30px;
    color: white;
    margin-top: 5px;
    .career {
      font-family: "Courier New";
      font-weight: small;
      font-size: 20px;
      margin-top: 15px;
      color: #7b7b7b;
      margin-bottom: 1rem;
    }
    .socials {
      margin-right: 20px;
      cursor: pointer;
      
      i {
        background-color: #4a4d4e;
        color: #109dfbdd;
        border-radius: 0.5rem;
        padding: 12px 15px;
        font-size: 18px;
        margin-left: 15px;
        :hover {
          transition: all 1s ease-in-out;
          background-image: linear-gradient(to right, #fa5252, #dd2476);
          color: white;
        }
      }
    }
  }

  .cv-download {
    padding-bottom: 30px;
  
    button {
      color: #d6d1d1;
      background-image: linear-gradient(to right, #fa5252, #dd2476);
      border-radius: 35px;
      font-size: 18px;
      align-items: center;
      font-weight: 600;
      margin-top: 10px;
      border: none;
      padding: 14px 45px;
      cursor: pointer;
      :hover {
        transition: all 1s ease-in-out;
        background-image: linear-gradient(to right, #dd2476, #fa5252);
        color: white;
      }
    }
  }
  @media (max-width : 1100px){

  background-size: cover;
  background-position: center;     

  padding: 0;
  width:  auto;
  
  .user {
    text-align: center;
     height: 50vh;
    display: block;
    margin-top: 20%;
   
  }

  img {
    margin-top: 0;
    margin: auto;
    background-image: url({profile});
    width: 250px;
    height: 250px;
    border-radius: 9999px;
    border: 5px solid gray;
  }
  .username {
    font-weight: 600;
    font-size: 30px;
    color: white;
    margin-top: 5px;
    .career {
      font-family: "Courier New";
      font-weight: small;
      font-size: 20px;
      margin-top: 15px;
      color: #7b7b7b;
      margin-bottom: 1rem;
    }
    .socials {
      margin-right: 20px;
      cursor: pointer;
      
      i {
        background-color: #4a4d4e;
        color: #109dfbdd;
        border-radius: 0.5rem;
        padding: 12px 15px;
        font-size: 18px;
        margin-left: 15px;
        :hover {
          transition: all 1s ease-in-out;
          background-image: linear-gradient(to right, #fa5252, #dd2476);
          color: white;
        }
      }
    }
  }

  .cv-download {
    
  
    button {
      color: #d6d1d1;
      background-image: linear-gradient(to right, #fa5252, #dd2476);
      border-radius: 35px;
      font-size: 18px;
      align-items: center;
      font-weight: 600;
      margin-top: 10px;
      border: none;
      padding: 14px 45px;
      cursor: pointer;
      :hover {
        transition: all 1s ease-in-out;
        background-image: linear-gradient(to right, #dd2476, #fa5252);
        color: white;
      }
    }
  } 
  }
  @media (max-width : 600px) {
   
  background-size: cover;
  background-position: center;     

  padding: 0;
  width:  auto;
  
  .user {
    text-align: center;
    height: 80vh;
    display: block;
    margin-top: 20%;
    margin-bottom: 2%;
   
  }

  img {
    margin-top: 0;
    margin: auto;
    background-image: url({profile});
    width: 250px;
    height: 250px;
    border-radius: 9999px;
    border: 5px solid gray;
  }
  .username {
    font-weight: 600;
    font-size: 30px;
    color: white;
    margin-top: 5px;
    .career {
      font-family: "Courier New";
      font-weight: small;
      font-size: 20px;
      margin-top: 15px;
      color: #7b7b7b;
      margin-bottom: 1rem;
    }
    .socials {
      margin-right: 20px;
      cursor: pointer;
     
      i {
        background-color: #4a4d4e;
        color: #109dfbdd;
        border-radius: 0.5rem;
        padding: 12px 15px;
        font-size: 18px;
        margin-left: 15px;
        .twit{
          font-size: 18px;
          
        }
        :hover {
          transition: all 1s ease-in-out;
          background-image: linear-gradient(to right, #fa5252, #dd2476);
          color: white;
        }
      }
    }
  }

  .cv-download {
    padding-bottom: 20px;
  
    button {
      color: #d6d1d1;
      background-image: linear-gradient(to right, #fa5252, #dd2476);
      border-radius: 35px;
      font-size: 18px;
      align-items: center;
      font-weight: 600;
      margin-top: 10px;
      border: none;
      padding: 14px 45px;
      cursor: pointer;
      :hover {
        transition: all 1s ease-in-out;
        background-image: linear-gradient(to right, #dd2476, #fa5252);
        color: white;
      }
    }
  } 
  }
`;

const Home = () => {
  // const downloadTxtFile = () => {
  //   // text content
  //   const texts = [cv]
  //   // file object
  //   const file = new Blob(texts, { type: 'image/plain' });
  //   // anchor link
  //   const element = document.createElement("a");
  //   element.href = URL.createObjectURL(file);
  //   element.download = "100ideas-" + Date.now() + ".txt";
  //   // simulate link click
  //   document.body.appendChild(element); // Required for this to work in FireFox
  //   element.click();
  // }
  return (
    <>
      <Container>
        <Navbar />
        <div className="user">
          <img src={profile} alt="" />
          <div className="username">
          {/* {Princes} */}
            Prince Ajuzie
            <div className="career">Front-End Developer</div>
            <div className="socials">
              <a href="https://web.facebook.com/prince.ajuzie.148"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/Princeajuzie2" ><i class="fa-brands fa-twitter"></i></a>
              
            
              <a href="https://www.tiktok.com/@prince.ajuzie"><i class="fa-brands fa-tiktok"></i></a>
              <a href="https://www.linkedin.com/in/prince-ajuzie-4a1125229/"><i class="fa-brands fa-linkedin"></i></a>
              
            </div>
            <div className="cv-download">
              <a href={cv} download>
                <button value="download" >
                  {" "}
                  <i class="fa-solid fa-download"></i> Download CV
                </button>

              </a>
           
            </div>
          </div>
      
        </div>
        <Footer />
      </Container>
    
    </>
  );
};

export default Home;
