import Navbar from "../component/Navbar";
import styled from "styled-components";
import profilepic from "../images/profile2.jpeg";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { FaRegObjectUngroup } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaSwatchbook } from "react-icons/fa";
import Footer from "../component/footer";
const Container = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: auto;

  .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
   
    height: auto;

   .header {
    display: flex;
    color: #fff;
    align-items: center;

    .sec1 {
      margin-top: 20px;
      margin-right: 20px;
      margin-left: 50px;
      font-family: "Courier New", Courier, monospace;
      font-size: 2.5rem;
      font-weight: bolder;
      position: relative;
    }

    .sec2 {
       margin-top: 20px;
      height: 2px;
      width: 190px;
      border-radius: 50px;
      background-image: linear-gradient(to right, #dd2476, #fa5252);
    }
   
  }
    .details {
      margin-top: 10px;
      display: flex;
       margin-left: 50px;
      align-items: center;
      .bio {
        color: #8e8989;
        line-height: 1.75rem;
        font-size: 18px;
        font-family: Poppins, sans-serif;
      }
      h1 {
        font-family: "Courier New", Courier, monospace;
        color: #fff;
        font-size: 30px;
        text-align: left;
        font-weight: 700;
      }
      .profile {
        width: 350px;
        height: 390px;
        border: 5px solid;
        border-color: linear-gradient(to right, #dd2476, #fa5252);
        background-image: url(${profilepic});
        background-position: center;
        background-size: cover;
        border-radius: 30px;
        margin-right: 50px;
      }
    }
     h1{
      text-align: center;
     }
    .info {
      display: flex;
      gap: 100px;
      .sec1,
      .sec2 {
        .item1,
        .item2 {
          display: flex;
          text-align: start;
          .b {
            
            span {
              display: block;
            }
            a{
               
              text-decoration: none;
            
            }
            .connect {
              font-size: 15px;
              font-family: sans-serif;
              color: #fff;
              font-weight: 400;
              line-height: 20px;
              margin-top: 0;
              :hover {
                cursor: pointer;
                color: #fa5252;
                transition-duration: 0.3s;
              }
            }
          }
          .ai {
            margin-top: 10px;
            font-size: 22px;
            margin-right: 5px;
            padding: 8px 12px;
            border-radius: 5px;
            background-color: #2c2929;
            color: #dd2476;
            margin-bottom: 10px;
           
          }
          span {
            font-weight: bold;
            font-size: 0.75rem;
          }
        }

        .item1,
        .item2 {
          align-items: center;
          .b {
            .aa {
              font-size: 15px;
            }
          }
          p {
            margin: 0;
            padding: 0;
          }
        }
  
      }
    }
    .l {
      line-height: 20px;
      margin-top: 10px;
      font-size: 26px;
      margin-right: 10px;
      margin-right: 5px;
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #fa5252;
      margin-bottom: 10px;
    }
    .c {
      margin-top: 10px;
      font-size: 22px;
      margin-right: 10px;
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #c17ceb;
      margin-bottom: 10px;
    }
    .e {
      margin-top: 10px;
      margin-right: 10px;
      font-size: 22px;
      margin-right: 5px;
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #51bfc6;
      margin-bottom: 10px;
    }
    h1 {
      font-family: "Courier New", Courier, monospace;
      color: white;
      font-size: 40px;
    }
    .career {
      display: flex;
      align-items: center;
      justify-content: center;
      .sec1 {
        .user1 {
          border: 2px solid #312f2f;
          padding: 30px 40px;
          width: 100%;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            text-align: center;
            .logos {
              margin-top: 15px;
              color: #d566ff;
              font-size: 45px;
              margin-right: 15px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
        .user2 {
           border: 2px solid #312f2f;
          padding: 30px 40px;
         width: 100%;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            text-align: center;
            .logos {
              margin-top: 15px;
              color: #DDA10C;
              font-size: 45px;
              margin-right: 15px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
      }
      .sec2 {
        margin-left: 5%;
        .user1 {
          border: 2px solid #312f2f;
          padding: 30px 40px;
          width: 100%;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            text-align: center;
            .logos {
              margin-top: 15px;
              color: #269FFF;
              font-size: 45px;
              margin-right: 15px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
                text-align: center;
                align-items: center;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
        .user2{
         border: 2px solid #312f2f;
          padding: 30px 40px;
         width: 100%;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            .logos {
              margin-top: 15px;
              color: #FF75D8;
              font-size: 45px;
              margin-right: 10px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
      }
    }
  

    
  }
    @media  (max-width : 1100px)  {

       .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 30px;
    height: auto;

    .header {
      margin-left: 50px;
      display: flex;
      color: #fff;
      align-items: center;

      .sec1 {
        margin-right: 20px;
        font-family: "Courier New", Courier, monospace;
        font-size: 1.5rem;
        font-weight: bolder;
        position: relative;
         justify-content: center;
      }

      .sec2 {
     height: 2px;
        width: 190px;
        border-radius: 50px;
        background-image: linear-gradient(to right, #dd2476, #fa5252);
      }
    }
    .details {
       margin-left: 50px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      .bio {
        color: #8e8989;
        line-height: 1.75rem;
        font-size: 18px;
        font-family: Poppins, sans-serif;
      }
      h1 {
        text-align: left;
        font-family: "Courier New", Courier, monospace;
        color: #fff;
        font-size: 30px;
        font-weight: 700;
      }
      .profile {
        width: 250px;
        height: 390px;
        border: 5px solid;
        border-color: linear-gradient(to right, #dd2476, #fa5252);
        background-image: url(${profilepic});
        background-position: center;
        background-size: cover;
        border-radius: 30px;
       
      }
    }
     h1{
      text-align: center;
     }
     .info {
      display: flex;
 
      .sec1,
      .sec2 {
        .item1,
        .item2 {
          display: flex;
          text-align: start;
          .b {
            span {
              display: block;
            }
             a{
               
              text-decoration: none;
            
            }
            .connect {
              font-size: 15px;
              font-family: sans-serif;
              color: #fff;
              font-weight: 400;
              line-height: 20px;
              margin-top: 0;
              :hover {
                cursor: pointer;
                color: #fa5252;
                transition-duration: 0.3s;
              }
            }
          }
          .ai {
            margin-top: 10px;
            font-size: 22px;
            margin-right: 5px;
            padding: 8px 12px;
            border-radius: 5px;
            background-color: #2c2929;
            color: #dd2476;
            margin-bottom: 10px;
          }
          span {
            font-weight: bold;
            font-size: 0.75rem;
          }
        }

        .item1,
        .item2 {
          align-items: center;
          .b {
            .aa {
              font-size: 15px;
            }
          }
          p {
            margin: 0;
            padding: 0;
          }
        }
  
      }
    }
    .l {
      line-height: 20px;
      margin-top: 10px;
      font-size: 26px;
 
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #fa5252;
      margin-bottom: 10px;
    }
    .c {
      margin-top: 10px;
      font-size: 22px;
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #c17ceb;
      margin-bottom: 10px;
    }
    .e {
      margin-top: 10px;
   
      font-size: 22px;
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #51bfc6;
      margin-bottom: 10px;
    }
    h1 {
      font-family: "Courier New", Courier, monospace;
      color: white;
      font-size: 40px;
    }
    .career {
      display: flex;
      align-items: center;
      justify-content: center;
      .sec1 {
        .user1 {
          border: 2px solid #312f2f;
          padding: 30px 40px;
           width: 100%;
          height: auto;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            text-align: center;
            .logos {
              margin-top: 15px;
              color: #d566ff;
              font-size: 45px;
              margin-right: 15px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
        .user2 {
           border: 2px solid #312f2f;
          padding: 30px 40px;
           width: 100%;
          height: auto;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            text-align: center;
            .logos {
              margin-top: 15px;
              color: #DDA10C;
              font-size: 45px;
              margin-right: 15px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
      }
      .sec2 {
        margin-left: 3%;
        .user1 {
          border: 2px solid #312f2f;
          padding: 30px 40px;
           width: 100%;
          height: auto;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            text-align: center;
            .logos {
              margin-top: 15px;
              color: #269FFF;
              font-size: 45px;
              margin-right: 15px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
                text-align: center;
                align-items: center;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
        .user2{
           border: 2px solid #312f2f;
          padding: 30px 40px;
           width: 100%;
          height: auto;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            .logos {
              margin-top: 15px;
              color: #FF75D8;
              font-size: 45px;
              margin-right: 10px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
      }
    }
  

    
  }
     }
      @media  (max-width : 600px)  {

       .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: auto;

    .header {
   
      color: #fff;
      
      .sec1 {
         margin-top: 20px;
      margin-right: 0;
      margin-left: 0;
        font-family: "Courier New", Courier, monospace;
        font-weight: bold;
        span{
          font-size: 40px;
        }

      }

      .sec2 {
     display: none;
      }
    }
    .details {
       display: block;
      
      
   
       .profile {
        width: auto;
        height: 400px;
        border: 5px solid;
        border-color: linear-gradient(to right, #dd2476, #fa5252);
        background-image: url(${profilepic});
        background-position: center;
        background-size: cover;
        border-radius: 30px;
       
    
       
      }
      .bio {
      
        color: #8e8989;
        line-height: 1.75rem;
        font-size: 18px;
        font-family: Poppins, sans-serif;
      }
      h1 {
        text-align: left;
        font-family: "Courier New", Courier, monospace;
        color: #fff;
        font-size: 30px;
        font-weight: 700;
      }
     
    }
     h1{
      text-align: center;
     }
     .info {
      display: block;
 
      .sec1,
      .sec2 {
        .item1,
        .item2 {
          display: flex;
          text-align: start;
          .b {
            span {
              display: block;
            }
             a{
               
              text-decoration: none;
            
            }
            .connect {
              font-size: 15px;
              font-family: sans-serif;
              color: #fff;
              font-weight: 400;
              line-height: 20px;
              margin-top: 0;
              :hover {
                cursor: pointer;
                color: #fa5252;
                transition-duration: 0.3s;
              }
            }
          }
          .ai {
            margin-top: 10px;
            font-size: 22px;
            margin-right: 5px;
            padding: 8px 12px;
            border-radius: 5px;
            background-color: #2c2929;
            color: #dd2476;
            margin-bottom: 10px;
          }
          span {
            font-weight: bold;
            font-size: 0.75rem;
          }
        }

        .item1,
        .item2 {
          align-items: center;
          .b {
            .aa {
              font-size: 15px;
            }
          }
          p {
            margin: 0;
            padding: 0;
          }
        }
  
      }
    }
    .l {
      line-height: 20px;
      margin-top: 10px;
      font-size: 26px;
 
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #fa5252;
      margin-bottom: 10px;
    }
    .c {
      margin-top: 10px;
      font-size: 22px;
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #c17ceb;
      margin-bottom: 10px;
    }
    .e {
      margin-top: 10px;
   
      font-size: 22px;
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #2c2929;
      color: #51bfc6;
      margin-bottom: 10px;
    }
    h1 {
      font-family: "Courier New", Courier, monospace;
      color: white;
      font-size: 40px;
    }
    .career {
      display: block;
      align-items: center;
      justify-content: center;
     
      .sec1 {
       margin-left: 30px;
        .user1 {
      
          border: 2px solid #312f2f;
          padding: 20px 20px;
           width: 90%;
          height: auto;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            text-align: center;
            .logos {
              margin-top: 15px;
              color: #d566ff;
              font-size: 45px;
              margin-right: 15px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
        .user2 {
           border: 2px solid #312f2f;
          padding: 20px 20px;
         width: 90%;
          height: auto;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            text-align: center;
            .logos {
              margin-top: 15px;
              color: #DDA10C;
              font-size: 45px;
              margin-right: 15px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
      }
      .sec2 {
       margin-left: 30px;
        .user1 {
          border: 2px solid #312f2f;
           padding: 20px 20px;
           width: 90%;
          height: auto;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            text-align: center;
            .logos {
              margin-top: 15px;
              color: #269FFF;
              font-size: 45px;
              margin-right: 15px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
                text-align: center;
                align-items: center;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
        .user2{
           border: 2px solid #312f2f;
          padding: 20px 20px;
          width: 90%;
          height: auto;
          background-color: #1b1919;
          border-radius: 5px;
          margin-bottom: 20px;
          .all {
            display: flex;
            .logos {
              margin-top: 15px;
              color: #FF75D8;
              font-size: 45px;
              margin-right: 10px;
            }
            .test {
              margin-top: 0;
              color: #fff;
              text-align: center;
              h1{
                font-size: 25px;
              }
              
            }
            p {
              color: #8e8383;
              margin-top: 0;
            }
          }
        }
      }
    }
  

    
  }
     }
`;

const About = () => {
  return (
    <Container>
      <div className="general">
        <Navbar />
        <div className="border">
          <div className="header">
            <div className="sec1">
              <span>About Me</span>
            </div>
            <div className="sec2"></div>
          </div>
          <div className="details">
            <div className="profile"></div>
            <div className="bio">
              <h1>Who am i?</h1>
              <span>
                I'm Creative Director and UI/UX Designer from River State,
                Nigeria,working in web
                <br />
                development and UI/UX. I enjoy turning complex problems
                into simple,
                <br />
                beautiful and intuitive designs.

                <br />
                My aim is to bring across your message and identity in the most
                creative way.
                <br /> I created web design for many famous brand companies.
              </span>
              <h1>Personal info</h1>
              <div className="info">
                <div className="sec1">
                  <div className="item1">
                    <div className="ai">
                      <FaMobileAlt />
                    </div>
                    <div className="b">
                      <p className="aa">Phone</p>
                      <a href="tel:+2348085034076"><p className="connect">+234 808 5034 076</p></a>
                    
                    </div>
                  </div>
                  <div className="item2">
                    <div className="e">
                      <FaEnvelopeOpenText />
                    </div>
                    <div className="b">
                      <p className="aa">Email</p>
                     
                      <a href="mailto:princeajuzie1@gmail.com">  <p className="connect" >princeajuzie1@gmail.com</p></a>
                     
                    </div>
                  </div>
                </div>
                <div className="sec2">
                  <div className="item1">
                    <div className="l">
                      <MdLocationOn />
                    </div>
                    <div className="b">
                      <span>Location</span>
                      <a href="https://goo.gl/maps/My8j5QzsaHgabPb6A">  <span className="connect">Rivers State Nigeria</span></a>
                    
                    </div>
                  </div>
                  <div className="item2">
                    <div className="c">
                      <FaCalendarAlt />
                    </div>
                    <div className="b">
                      <p className="aa">Calender</p>
                      <p className="connect">june 30, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1>What I do!</h1>
          <div className="career">
            <div className="sec1">
              <div className="user1">
                <div className="all">
                  <div className="logos">
                    <FaSwatchbook />
                  </div>
                  <div className="test">
                    <h1>Ui/Ux Design</h1>
                    <p>
                      i am a UI & UX Designer,
                      <br /> i use figma for my Design,
                      <br />
                      i have work with some startup company.
                    </p>
                  </div>
                </div>
              </div>
              <div className="user2">
                <div className="all">
                  <div className="logos">
                    <FaRegObjectUngroup />
                  </div>
                  <div className="test">
                    <h1>App Development</h1>
                    <p>
                        coming soon....,
                      <br />  coming soon....,
                      <br />
                       coming soon.....
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec2">
              <div className="user1">
                <div className="all">
                  <div className="logos">
                    <BiCodeAlt />
                  </div>
                  <div className="test">
                    <h1>Web Development</h1>
                    <p>
                      I am a Front-end Developer,
                      <br /> i use React-js framework,
                      <br />
                         for all my website.
                    </p>
                  </div>
                </div>
              </div>
              <div className="user2">
                <div className="all">
                  <div className="logos">
                    <FaCogs />
                  </div>
                  <div className="test">
                    <h1>Management</h1>
                    <p>
                     I am also a social media manager,
                      <br /> i have manage alot of nigeria,
                      <br />
                     celebrity their website and social media.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>

      </div>

    </Container>
  );
};

export default About;
