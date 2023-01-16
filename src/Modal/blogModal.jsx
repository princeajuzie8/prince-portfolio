import styled from "styled-components";
import { MdOutlineCancel } from "react-icons/md"
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";
import profile from "../images/profile2.jpeg"
import {
  BsDribbble,
  BsFacebook,
  BsLinkedin,
  BsTwitter,

} from "react-icons/bs";
import { SiTiktok } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa";

const Container = styled.div`
  .modal {


 width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      z-index: 100;
    .overlay {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      background: #0000003d;

      
      .general{
       

 .modal-content {
 position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        background: #323232;  
        padding-bottom: 10px;
        border-radius: 20px;
        width: 65vw;
        
        .header1 {
        text-align: right;
        .icon{
          #cancel{
            color: white;
            font-size: 40px;
 
    margin: 3px 20px; 
    -webkit-transition: 0.2s ease-out;
    -moz-transition:  0.2s ease-out;
    transition:  0.2s ease-out;
            cursor: pointer;
           &:hover{
                color: red;
                -webkit-transform: rotateZ(45deg);
      -moz-transform: rotateZ(45deg);
      transform: rotateZ(45deg);
            }
          }
           
        }
        }

        .gen{
          color: white;
            height: 400px;
            overflow: hidden;
            margin-top: 0;
            margin-bottom: 0;
       margin-right: 4%;
      
        margin-left: 4%;
      overflow-y: scroll;
     
      border-radius: 10px;
       
      ::-webkit-scrollbar {
        width: 10px;
     
        
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ;
        padding-top: 30px;
        border-radius: 10px;
        color: #000000;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #4F4F4F;
        border-radius: 10px;
        padding: 20px;
  
      }

   
        .sec1{
            display: flex;
            align-items: center;
            justify-content: center;
          
            img{
                margin-right: 40px;
              border-radius: 0.75rem;
            object-fit: cover;
          background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  height: auto;
   width: 60vw;
                .blogimg{

                 
                }
               
            }
        }
        .alltest{

  /* margin-top: 0;
  margin-bottom: 0; */
.sub{
     margin-top: 10px;
          display: flex;
          align-items: center;
        
          .dot{
            margin-left: 10px;
            margin-right: 10px;
            height: 5px;
            width: 5px;
            border-radius: 50px;
            background-color: #44566C;
          }
        }
        .maintittle{
       
        }
        .description{
          font-weight: 500;
          line-height: 25px;
          font-size: 15px;
       
        }
        .userprofile{
       
          height: 20vh;
          width: 56vw;
          padding: 10px;
           background: linear-gradient(#232220, #232220) padding-box,
             linear-gradient(to right, #fa5252, #dd2476) border-box;
  border: 1.5px solid transparent;
        
          border-radius: 5px;
          display: flex;
          gap: 20px;
          align-items: center;
          justify-content: space-between;
          .image{
           
            img{
              max-width: 75px;
              margin-left: 5px;
             border-radius: 10px;
              height: auto;
            }
          }
          .form{

            .sec1{
              justify-content: space-between;
              .name{
                font-size: 15px;

              }
              .min{
                color: #A9A9A9;
              }
            }
            .sec2{
            
              p{
                 color: #A9A9A9;
                 font-size: 15px
              }
            }
          }
        }
        .socials{
        display: flex;
        align-items: center;
        justify-content: space-between;
        float: right;
      span{
              margin-top: 20px;
              margin-right: 5px;
            }
        .icons{
          .socialmedia{
            display: flex;
            
            justify-content: space-between;
            margin-right: 15px;
             gap: 10px;
             .soc{
              margin-top: 20px;
            cursor: pointer;
           height: 35px;
            border-radius: 5px;
            width: 35px;
             background-color: #212425;
             align-items: center;
             text-align: center;
             display: flex;
             justify-content: center;


             :hover{
              background-image: linear-gradient(to right, #fa5252, #dd2476);
              color: #fff;
             }
             

             #fb{
          color: #1773EA;

          :hover{
            color: #fff;
          }
             }
             #tw{
             color: #1C9CEA;

             :hover{
            color: #fff;
          }
             }
             #li{
            color: #0072B1;

            :hover{
            color: #fff;
          }
             }
             #tk{
             color: #D84880;

             :hover{
            color: #fff;
          }
             }

             
 .same{
       

            font-size: 15px;

            
           
          }

          
             
             }
         
            
          }
        }
        }

        .reply{
          margin-top:90px;
          .form{
            #area{
 background-color: #242424;
          border: none;
          border-radius: 5px;
          outline: none;
          color: white;
          padding: 10px;
          width: 56vw;
          font-size: 15px;
          height: 15vh;
            }
           .submit{
            margin: 20px 0px 20px 0px;
            input{
              padding: 15px 40px 15px 40px;
              background-image: linear-gradient(to right, #fa5252, #dd2476);
              border: none;
              color: white;
              border-radius: 40px;
              font-size: 15px;
              cursor: pointer;
              :hover{
                 color: white;
                background-image: linear-gradient(to right, #dd2476, #fa5252);
              }
            }
           }
          }
        }
        }
        
      }
     
     
      }
     

      
    
    }
    }}

@media (max-width : 1100px) {
  .modal {


 width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      z-index: 100;
    .overlay {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      background: #0000003d;

      
      .general{
       

 .modal-content {
 position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        background: #323232;  
        padding-bottom: 10px;
        border-radius: 20px;
        
        width: 85vw;
        
        .header1 {
        text-align: right;
        .icon{
          #cancel{
            color: white;
            font-size: 40px;
 
    margin: 3px 20px; 
    -webkit-transition: 0.2s ease-out;
    -moz-transition:  0.2s ease-out;
    transition:  0.2s ease-out;
            cursor: pointer;
           &:hover{
                color: red;
                -webkit-transform: rotateZ(45deg);
      -moz-transform: rotateZ(45deg);
      transform: rotateZ(45deg);
            }
          }
           
        }
        }

        .gen{
          color: white;
            height: 80vh;
            overflow: hidden;
            margin-top: 0;
            margin-bottom: 0;
       margin-right: 4%;
      
        margin-left: 4%;
      overflow-y: scroll;
     
      border-radius: 10px;
       
      ::-webkit-scrollbar {
        width: 10px;
     
        
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ;
        padding-top: 30px;
        border-radius: 10px;
        color: #000000;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #4F4F4F;
        border-radius: 10px;
        padding: 20px;
  
      }

   
        .sec1{
            display: flex;
            align-items: center;
            justify-content: center;
          
            img{
                margin-right: 40px;
              border-radius: 0.75rem;
            object-fit: cover;
          background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  height: auto;
   width: 80vw;
                .blogimg{

                 
                }
               
            }
        }
        .alltest{

  /* margin-top: 0;
  margin-bottom: 0; */
.sub{
     margin-top: 10px;
          display: flex;
          align-items: center;
        
          .dot{
            margin-left: 10px;
            margin-right: 10px;
            height: 5px;
            width: 5px;
            border-radius: 50px;
            background-color: #44566C;
          }
        }
        .maintittle{
       
        }
        .description{
          font-weight: 500;
          line-height: 25px;
          font-size: 15px;
       
        }
        .userprofile{
       
          height: 15vh;
          width: 75vw;
          padding: 10px;
           background: linear-gradient(#232220, #232220) padding-box,
             linear-gradient(to right, #fa5252, #dd2476) border-box;
  border: 1.5px solid transparent;
        
          border-radius: 5px;
          display: flex;
          gap: 20px;
          align-items: center;
          justify-content: space-between;
          .image{
           
            img{
              max-width: 75px;
              margin-left: 5px;
             border-radius: 10px;
              height: auto;
            }
          }
          .form{

            .sec1{
              justify-content: space-between;
              .name{
                font-size: 15px;

              }
              .min{
                color: #A9A9A9;
              }
            }
            .sec2{
            
              p{
                 color: #A9A9A9;
                 font-size: 15px
              }
            }
          }
        }
        .socials{
        display: flex;
        align-items: center;
        justify-content: space-between;
        float: right;
      span{
              margin-top: 20px;
              margin-right: 5px;
            }
        .icons{
          .socialmedia{
            display: flex;
          
            justify-content: space-between;
            margin-right: 15px;
             gap: 10px;
             .soc{
              margin-top: 20px;
            cursor: pointer;
           height: 35px;
            border-radius: 5px;
            width: 35px;
             background-color: #212425;
             align-items: center;
             text-align: center;
             display: flex;
             justify-content: center;


             :hover{
              background-image: linear-gradient(to right, #fa5252, #dd2476);
              color: #fff;
             }
             

             #fb{
          color: #1773EA;

          :hover{
            color: #fff;
          }
             }
             #tw{
             color: #1C9CEA;

             :hover{
            color: #fff;
          }
             }
             #li{
            color: #0072B1;

            :hover{
            color: #fff;
          }
             }
             #tk{
             color: #D84880;

             :hover{
            color: #fff;
          }
             }

             
 .same{
       

            font-size: 15px;

            
           
          }

          
             
             }
         
            
          }
        }
        }

        .reply{
          margin-top:90px;
          .form{
            #area{
 background-color: #242424;
          border: none;
          border-radius: 5px;
          outline: none;
          color: white;
          padding: 10px;
          width: 75vw;
          font-size: 15px;
          height: 10vh;
            }
           .submit{
            margin: 20px 0px 20px 0px;
            input{
              padding: 15px 40px 15px 40px;
              background-image: linear-gradient(to right, #fa5252, #dd2476);
              border: none;
              color: white;
              border-radius: 40px;
              font-size: 15px;
              cursor: pointer;
              :hover{
                 color: white;
                background-image: linear-gradient(to right, #dd2476, #fa5252);
              }
            }
           }
          }
        }
        }
        
      }
     
     
      }
     

      
    
    }
    }}

}
@media (max-width : 600px){
   .modal {


 width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      z-index: 100;
    .overlay {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      background: #0000003d;

      
      .general{
       

 .modal-content {
 position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        background: #323232;  
        padding-bottom: 10px;
        border-radius: 20px;
        
        width: 95vw;
        
        .header1 {
        text-align: right;
        .icon{
          #cancel{
            color: white;
            font-size: 40px;
 
    margin: 3px 20px; 
    -webkit-transition: 0.2s ease-out;
    -moz-transition:  0.2s ease-out;
    transition:  0.2s ease-out;
            cursor: pointer;
           &:hover{
                color: red;
                -webkit-transform: rotateZ(45deg);
      -moz-transform: rotateZ(45deg);
      transform: rotateZ(45deg);
            }
          }
           
        }
        }

        .gen{
          color: white;
            height: 75vh;
            overflow: hidden;
            margin-top: 0;
            margin-bottom: 0;
       margin-right: 4%;
      
        margin-left: 4%;
      overflow-y: scroll;
     
      border-radius: 10px;
       
      ::-webkit-scrollbar {
        width: 10px;
     
        
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ;
        padding-top: 30px;
        border-radius: 10px;
        color: #000000;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #4F4F4F;
        border-radius: 10px;
        padding: 20px;
  
      }

   
        .sec1{
            display: flex;
            align-items: center;
            justify-content: center;
          
            img{
                margin-right: 40px;
              border-radius: 0.75rem;
            object-fit: cover;
          background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  height: auto;
   width: 95vw;
                .blogimg{

                 
                }
               
            }
        }
        .alltest{

  /* margin-top: 0;
  margin-bottom: 0; */
.sub{
     margin-top: 10px;
          display: flex;
          align-items: center;
        
          .dot{
            margin-left: 10px;
            margin-right: 10px;
            height: 5px;
            width: 5px;
            border-radius: 50px;
            background-color: #44566C;
          }
          .date{
            font-size: 15px;
          }
          .tittle{
             font-size: 15px;
          }
        }
        .maintittle{
    
            font-size: 12px;
font-weight: 700;
        }
        .description{
          font-weight: 500;
          line-height: 25px;
          font-size: 15px;
       
        }
        .userprofile{
       
          height: 25vh;
          width: 80vw;
          padding: 10px;
           background: linear-gradient(#232220, #232220) padding-box,
             linear-gradient(to right, #fa5252, #dd2476) border-box;
  border: 1.5px solid transparent;
        
          border-radius: 10px;
          display: flex;
          gap: 20px;
          align-items: center;
       
          .image{
           
            img{
              max-width: 75px;
              margin-left: 5px;
             border-radius: 10px;
              margin-bottom: 35px;
              height: auto;
            }
          }
          .form{

            .sec1{
            
              align-items: center;
              .name{
                font-size: 15px;

              }
              .min{
                color: #A9A9A9;
                font-size: 15px;
              }
            }
            .sec2{
             
              .p{
                 color: #A9A9A9;
                 font-size: 15px
              }
              span{
                font-size: 10px;
              }
            }
          }
        }
        .socials{
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: space-between;
         float: none;
      span{
              margin-top: 20px;
              margin-right: 5px;
            }
        .icons{
          .socialmedia{
            display: flex;
          
            justify-content: space-between;
            margin-right: 50px;
             gap: 10px;
             .soc{
              margin-top: 20px;
            cursor: pointer;
           height: 35px;
            border-radius: 5px;
            width: 35px;
             background-color: #212425;
             align-items: center;
             text-align: center;
             display: flex;
             justify-content: center;


             :hover{
              background-image: linear-gradient(to right, #fa5252, #dd2476);
              color: #fff;
             }
             

             #fb{
          color: #1773EA;

          :hover{
            color: #fff;
          }
             }
             #tw{
             color: #1C9CEA;

             :hover{
            color: #fff;
          }
             }
             #li{
            color: #0072B1;

            :hover{
            color: #fff;
          }
             }
             #tk{
             color: #D84880;

             :hover{
            color: #fff;
          }
             }

             
 .same{
       

            font-size: 15px;

            
           
          }

          
             
             }
         
            
          }
        }
        }

        .reply{
          margin-top:  20px;
          .form{
            #area{
 background-color: #242424;
          border: none;
          border-radius: 5px;
          outline: none;
          color: white;
          padding: 10px;
          width: 80vw;
          font-size: 15px;
          height: 10vh;
            }
           .submit{
            margin: 20px 0px 20px 0px;
            input{
              padding: 15px 40px 15px 40px;
              background-image: linear-gradient(to right, #fa5252, #dd2476);
              border: none;
              color: white;
              border-radius: 40px;
              font-size: 15px;
              cursor: pointer;
              :hover{
                 color: white;
                background-image: linear-gradient(to right, #dd2476, #fa5252);
              }
            }
           }
          }
        }
        }
        
      }
     
     
      }
     

      
    
    }
    }}

}
`;
const Blogmodal = ({ setOpenmodal, blog, img, tittle, smallimage, date, body, description }) => {


  const blogDescriptionSplit = description?.split("\n");


  return (
    <Container>
      <div className="modal" >
        <div className="overlay" >
          <div className="general">

            <div className="modal-content">

              <div className="header1" id="handle">

                <div className="icon" onClick={() => setOpenmodal(false)}>

                  <MdOutlineCancel id="cancel" />

                </div>

              </div>
              <div className="gen">
               
                <div className="sec1" >

                  <img
                    className="\"
                    src={smallimage}
                    alt="blog"

                  />

                </div>
                <div className="alltest">
                  <div className="sub">
                    <div className="date">
                      <span>{date}</span>
                    </div>
                    <div className="dot">

                    </div>
                    <div className="tittle">
                      <span>{tittle}</span>
                    </div>

                  </div>
                  <div className="maintittle">
                    <h2>{body}</h2>
                  </div>
                  <div className="description">
                    {blogDescriptionSplit?.map((item, j) => (
                      <p
                        className="dark:text-white font-normal text-[15px] sm:text-sm my-4"
                        key={j}
                      >

                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="userprofile">
                    <div className="image">
                      <img src="https://bostamireact.ibthemespro.com/static/media/about.01c11c889888a40123f4.jpg" alt="" />
                    </div>
                    <div className="form">
                      <div className="sec1">
                        <div className="name"><h3>Rafia Ana</h3></div>
                        <div className="min"><span>15 min ago</span></div>
                      </div>
                      <div className="sec2">
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nam ad, unde vel aut soluta atque consequatur. Omnis, debitis nihil? <br /> </span>
                       
                        <span className="p">Reply</span>
                      </div>

                    </div>
                  </div>
                  <div className="socials">

                    <span>Login With:</span>
                    <div className="icons">
                      <div className="socialmedia">

                        <a href="https://web.facebook.com/prince.ajuzie.148">
                        
                          <div className="soc">
                            <BsFacebook className="same" id="fb" />
                          </div>
                        </a>
                      


                        <a href="https://twitter.com/Princeajuzie2">
                          <div className="soc">
                            <BsTwitter className="same" id="tw" />
                          </div>
                        </a>
                       

                        <a href="https://www.linkedin.com/in/prince-ajuzie-4a1125229/">

                          <div className="soc">
                            <FaLinkedinIn className="same" id="li" />
                          </div>
                        </a>
                       
                       
                        <a href="https://www.tiktok.com/@prince.ajuzie">
                          <div className="soc">
                            <SiTiktok className="same" id="tk" />
                          </div>
                          </a>




                      </div>
                    </div>

                  </div>
                  <div className="reply">
                    
                    <div className="text">
                      <h2>Leave a Reply</h2>

                    </div>
                    <div className="form">
                      <form action="">
                        <textarea name="" id="area" rows="3"></textarea>
                        <div className="submit">
                          <input type="submit" value="Comment" />
                        </div>
                      </form>
                      
                    </div>
                  </div>
                </div>
               
              </div>
            </div>




          </div>
        </div>
      </div>
    </Container>
  );
}

export default Blogmodal;