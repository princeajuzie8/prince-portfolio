import Navbar from "../component/Navbar";
import styled from "styled-components";
import { GiGraduateCap } from "react-icons/gi"
import { FaAward } from "react-icons/fa";
import { CgBriefcase } from "react-icons/cg";
import Footer from "../component/footer";

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
    height: fit-content;
    .contentgen{
 display: flex;
 align-items: center;
 justify-content: space-between;
 
 .content{

        color: #ffff;
        grid-template-columns: 1fr;
        .cont1{
            .head{
                display: flex;
                align-items: center;
                .icon{
                    color:  #ff2d55;
                    font-size: 1.75rem;
                    margin-right: 10px;
                }
            }
        }
        .tittle{
         font-weight: 700;
             font-size: 1.650rem;
        }
        .content2{
            margin-bottom: 20px;
             border: 2px solid #282727;
             border-radius: 5px;
             justify-content: center;
            height: auto;
            padding: 20px 80px 40px 30px; 
            background: transparent;
            width: fit-content;
          .sec1{
          color: #b7b7b7;
          margin-bottom: 15px;
          font-size: .875rem;
          }
          .sec2{
            font-size: 1.25rem;
 margin-bottom: 15px;
          }
          .sec3{
  color: #b7b7b7;
          }
        }
    }
       }
  }
 .header {
    display: flex;
    color: #fff;
    align-items: center;

    .sec1 {
   
      margin-right: 20px;
      
      font-family: "Courier New", Courier, monospace;
      font-size: 2.5rem;
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
  
  .contentgen2{
    display: flex;
  
    justify-content: center;

    color: white;
    .skills{
        height: 50%;
        width: 50%;
        .skillhead{

        } 
        .genload{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;

        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 80%;
              background-color:#FF6464;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 20%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
        .genload2{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;

        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 20%;
              background-color:#9272D4;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 80%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
.genload3{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;

        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 50%;
              background-color:#5185D4;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 50%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
      
       .genload4{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;
        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 70%;
              background-color:#CA56F2;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 30%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
    }
    .knowledge{
        display: flex;
        flex-direction: column;
      
         height: 60%;
        width: 55%;
        margin-left: 30px;
    .knowledgehead{

     
    }
        .care{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;
            gap: 10px;
            margin-top: 20px;
        
.sec1{
        height: 40px;
        width: auto;
        
        padding: 0px 30px 0px 30px;
        background-color: #1C1C1C;
        display: flex;
        justify-content: space-between;
        justify-content: space-around;
        align-items: center;
        color: #9F9F9F;
        border-radius: 5px;
        p{
            display: flex;
        }
      }
  
        }
      
    }
  }
  @media  (max-width : 1100px) {
     .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 30px;
    padding: 35px 80px; 
    height: fit-content;
    .contentgen{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

 
  #last{
  
   }
 .content{
  
        color: #ffff;
         
        .cont1{
            .head{
                display: flex;
                align-items: center;
                .icon{
                    color:  #ff2d55;
                    font-size: 1.75rem;
                    margin-right: 10px;
                }
            }
        }
        .tittle{
         font-weight: 700;
             font-size: 1.650rem;
        }
        .content2{
            margin-bottom: 20px;
             border: 2px solid #282727;
             border-radius: 5px;
             justify-content: center;
             height: auto;
            padding: 20px 80px 40px 30px; 
            background: transparent;
            width: fit-content;
          .sec1{
          color: #b7b7b7;
          margin-bottom: 15px;
          font-size: .875rem;
          }
          .sec2{
             white-space: nowrap;
            font-size: 1.25rem;
 margin-bottom: 15px;
          }
          .sec3{
  color: #b7b7b7;
          }
        }
    }
       }
  }
  .header {
    display: flex;
    color: #fff;
    align-items: center;
   margin-top: 30px;
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
  
  .contentgen2{
    display: flex;
    justify-content: space-between ;
  
    justify-content: center;

    color: white;
    .skills{
        height: 50%;
        width: 50%;
        .skillhead{

        } 
        .genload{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;

        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 80%;
              background-color:#FF6464;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 20%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
        .genload2{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;

        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 20%;
              background-color:#9272D4;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 80%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
.genload3{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;

        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 50%;
              background-color:#5185D4;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 50%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
      
       .genload4{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;
        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 70%;
              background-color:#CA56F2;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 30%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
    }
    .knowledge{
        
      
       
        margin-left: 30px;
    .knowledgehead{

     
    }
        .care{
           display: grid;
           grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;
            gap: 10px;
            margin-top: 20px;
        
.sec1{
        height: 40px;
        width: fit-content;
        
        padding: 0px 30px 0px 30px;
        background-color: #1C1C1C;
        display: flex;
        justify-content: space-between;
        justify-content: space-around;
        align-items: center;
        color: #9F9F9F;
        border-radius: 5px;
        p{
            display: flex;
        }
      }
  
        }
      
    }
  }
  }
  @media  (max-width : 600px){
      .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 0;
    padding: 0;
    .contentgen{
display: grid;
grid-template-columns: 1fr;
  gap: 20px;

 
  #last{
  
   }
 .content{
     margin: auto;
        color: #ffff;
         
        .cont1{
            .head{
                display: flex;
                align-items: center;
                .icon{
                    color:  #ff2d55;
                    font-size: 1.75rem;
                    margin-right: 10px;
                }
            }
        }
        .tittle{
         font-weight: 700;
             font-size: 1.650rem;
        }
        .content2{
     
             border: 2px solid #282727;
             border-radius: 5px;
             justify-content: center;
              height: auto;
            
            background: transparent;
          
          
            padding: 20px 80px 40px 30px; 
        
            width: fit-content;
          
          .sec1{
          color: #b7b7b7;
           line-height: 20px;
          font-size: .875rem;
          }
          .sec2{
            font-size: 1.25rem;
 line-height: 20px;
          }
          .sec3{
  color: #b7b7b7;
  white-space: nowrap;
    line-height: 20px;
          }
        }
    }
       }
 
  .header {

    color: #fff;
   

    .sec1 {
margin-right: 0;
margin-left: 30px;
margin-top: 19px;


      font-family: "Courier New", Courier, monospace;
      font-size: 50px;
      font-weight: bolder;
      position: relative;
    }

    .sec2 {
    display: none;
    }
   
  }
  
  .contentgen2{
     display: grid;
     grid-template-columns: 1fr;
     gap: 20px;
    color: white;
   
    .skills{
      margin-left: 20px;
        height: 50%;
        width: 90%;
        .skillhead{
     white-space: nowrap;
     font-size: 13px;
        } 
        .genload{
           
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;

        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 80%;
              background-color:#FF6464;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 20%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
        .genload2{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;

        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 20%;
              background-color:#9272D4;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 80%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
.genload3{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;

        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 50%;
              background-color:#5185D4;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 50%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
      
       .genload4{
 .tittle{
    color: #A6A6A6;
            display: flex;
            justify-content: space-between;
    font-weight: 600;
        }
        .webdesignprogress{
            display: flex;
            align-items: center;
            .coloredbar{
              height: 5px;
              width: 70%;
              background-color:#CA56F2;
              border-radius: 10px;
            }
            .opacity{
        height: 5px;
              width: 30%;
              opacity: 1px;
          background-color: #1C1C1C;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
        }
        }
    }
    .knowledge{
        
        height: 50%;
        width: 90%;
       margin-bottom: 20px;
    .knowledgehead{
font-size: 13px;
     
    }
        .care{
           display: grid;
           grid-template-columns: 1fr 1fr;
            margin-bottom: 5px;
            margin-top: 20px;
        
.sec1{
        height: 40px;
        width: fit-content;
        white-space: nowrap;
        
        background-color: #1C1C1C;
        display: flex;
        
        align-items: center;
        color: #9F9F9F;
        border-radius: 5px;
        p{
            display: flex;
        }
      }
  
        }
      
    }
  }
  }
   }
`;

const Resume = () => {
    return (

        <Container>
            <Navbar />
            <div className="general">
                <div className="border">
                    <div className="header">
                        <div className="sec1">
                            <span>Resume</span>
                        </div>
                        <div className="sec2"></div>

                    </div>
                    <div className="contentgen">
                        <div className="content">
                            <div className="cont1">
                                <div className="head">
                                    <div className="icon">

                                        <GiGraduateCap />
                                    </div>
                                    <div className="tittle">
                                        <p>Education</p>
                                    </div>

                                </div>
                            </div>
                            <div className="content2">
                                <div className="sec1">
                                    2021-2023
                                </div>
                                <div className="sec2">
                                    Ph.D in Horriblensess
                                </div>
                                <div className="sec3">
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className="content2">
                                <div className="sec1">
                                    2021-2023
                                </div>
                                <div className="sec2">
                                    Ph.D in Horriblensess
                                </div>
                                <div className="sec3">
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className="content2">
                                <div className="sec1">
                                    2021-2023
                                </div>
                                <div className="sec2">
                                    Ph.D in Horriblensess
                                </div>
                                <div className="sec3">
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="cont1">
                                <div className="head">
                                    <div className="icon">

                                        <CgBriefcase />
                                    </div>
                                    <div className="tittle">
                                        <p>Experience</p>
                                    </div>

                                </div>
                            </div>
                            <div className="content2">
                                <div className="sec1">
                                    2021-2023
                                </div>
                                <div className="sec2">
                                    Ph.D in Horriblensess
                                </div>
                                <div className="sec3">
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className="content2">
                                <div className="sec1">
                                    2021-2023
                                </div>
                                <div className="sec2">
                                    Ph.D in Horriblensess
                                </div>
                                <div className="sec3">
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className="content2">
                                <div className="sec1">
                                    2021-2023
                                </div>
                                <div className="sec2">
                                    Ph.D in Horriblensess
                                </div>
                                <div className="sec3">
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                        </div>
                        <div className="content" id="last">
                            <div className="cont1">
                                <div className="head">
                                    <div className="icon">

                                        <FaAward />
                                    </div>
                                    <div className="tittle">
                                        <p>Award</p>
                                    </div>

                                </div>
                            </div>
                            <div className="content2">
                                <div className="sec1">
                                    2021-2023
                                </div>
                                <div className="sec2">
                                    Ph.D in Horriblensess
                                </div>
                                <div className="sec3">
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className="content2">
                                <div className="sec1">
                                    2021-2023
                                </div>
                                <div className="sec2">
                                    Ph.D in Horriblensess
                                </div>
                                <div className="sec3">
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className="content2">
                                <div className="sec1">
                                    2021-2023
                                </div>
                                <div className="sec2">
                                    Ph.D in Horriblensess
                                </div>
                                <div className="sec3">
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentgen2">
                        <div className="skills">
                            <div className="skillhead">
                                <h1>Working Skills</h1>
                            </div>
                            <div className="genload">
                                <div className="tittle">
                                    <div className="text">
                                        <p>web Design</p>
                                    </div>
                                    <div className="percentage">
                                        <p>80%</p>
                                    </div>
                                </div>
                                <div className="webdesignprogress">
                                    <div className="coloredbar"></div>
                                    <div className="opacity">

                                    </div>
                                </div>
                            </div>
                            <div className="genload2">
                                <div className="tittle">
                                    <div className="text">
                                        <p>Mobile Application</p>
                                    </div>
                                    <div className="percentage">
                                        <p>20%</p>
                                    </div>
                                </div>
                                <div className="webdesignprogress">
                                    <div className="coloredbar"></div>
                                    <div className="opacity">

                                    </div>
                                </div>
                            </div>
                            <div className="genload3">
                                <div className="tittle">
                                    <div className="text">
                                        <p>IIlustrator</p>
                                    </div>
                                    <div className="percentage">
                                        <p>50%</p>
                                    </div>
                                </div>
                                <div className="webdesignprogress">
                                    <div className="coloredbar"></div>
                                    <div className="opacity">

                                    </div>
                                </div>
                            </div>
                            <div className="genload4">
                                <div className="tittle">
                                    <div className="text">
                                        <p>ui & ux Design</p>
                                    </div>
                                    <div className="percentage">
                                        <p>70%</p>
                                    </div>
                                </div>
                                <div className="webdesignprogress">
                                    <div className="coloredbar"></div>
                                    <div className="opacity">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="knowledge">
                            <div className="knowledgehead">
                                <h1>Knowledges</h1>
                            </div>
                            <div className="care">
                                <div className="sec1"><p>Digital Design</p></div>
                                <div className="sec1"><p>marketing</p></div>
                                <div className="sec1"><p>Social Media</p></div>
                                <div className="sec1"><p>content writer</p></div>
                            </div>
                            <div className="care">
                                <div className="sec1"><p>Time Management</p></div>
                                <div className="sec1"><p>Flexibility</p></div>
                                <div className="sec1"><p>ui</p></div>
                                <div className="sec1"><p>ux</p></div>
                            </div>
                            <div className="care">
                                <div className="sec1"><p>Time Management</p></div>
                                <div className="sec1"><p>Flexibility</p></div>
                                <div className="sec1"><p>print</p></div>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        </Container>
    );
}

export default Resume;