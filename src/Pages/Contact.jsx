import Navbar from "../component/Navbar";
import styled from "styled-components";
import tele from "../images/tele.png";
import address from "../images/location.png";
import email from "../images/mail.png";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Footer from "../component/footer";
import {  useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Toast } from 'primereact/toast';

const Container = styled.div`
  background-color: black;
  background-size: cover;
  margin: 0;
  padding: 0;
  background-position: center;
  width: auto;
  .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 30px;
    padding: 35px 80px;
    height: auto;

    .contact {
      display: grid;
      grid-template-columns: 0.9fr 3fr;
      gap: 80px;
      .form1 {
        margin-top: 5px;

        .phone {
          background-color: #212425;
          padding: 15px 5px 15px 35px;
          border-radius: 10px;
          margin-bottom: 20px;
          .phone1 {
            font-family: sans-serif;
            position: relative right 5px;
            display: flex;
            margin-left: 0;
            align-items: flex-start;
            .logo {
              margin-top: 19px;
            }
            .test {
              margin-left: 8px;
              h2 {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
              }
              p {
                color: #b5aaaa;
                font-family: sans-serif;
                font-size: 18px;
              }
            }
          }
        }
        .email {
          background-color: #212425;
          padding: 15px 50px 15px 35px;
          border-radius: 10px;
          margin-bottom: 20px;
          .email1 {
            font-family: sans-serif;
            position: relative right 5px;
            display: flex;
            margin-left: 0;
            align-items: flex-start;
            .logo {
              margin-top: 19px;
            }
            .test {
              margin-left: 8px;
              h2 {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
              }
              p {
                color: #b5aaaa;
                font-family: sans-serif;
                font-size: 18px;
              }
            }
          }
        }
        .address {
          background-color: #212425;
          padding: 15px 50px 15px 35px;
          border-radius: 10px;
          margin-bottom: 20px;
          .address1 {
            font-family: sans-serif;
            position: relative right 5px;
            display: flex;
            margin-left: 0;
            align-items: flex-start;
            .logo {
              margin-top: 19px;
            }
            .test {
              margin-left: 8px;
              h2 {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
              }
              p {
                color: #b5aaaa;
                font-family: sans-serif;
                font-size: 18px;
              }
            }
          }
        }
      }
      .form2 {
        background-color: transparent;
        border: 2px solid #1f1e1e;
        border-radius: 10px;
        padding: 15px 35px;
        .gen {
          .test {
            font-family: sans-serif;
            h1 {
              color: #b5aaaa;
              font-size: 25px;
            }
            h2 {
              color: #fff;
            }
          }
        }

        .allform {
          align-items: center;
          justify-content: space-between;
          form {
            margin-top: 50px;
            label {
              color: #b5aaaa;
              transform: scale(1);
              :focus {
                color: #ff2d55;
              }
            }
            input[type=text],[type=email]{
              transform: scale(1);
              padding: 10px 35px;
              background-color: transparent;
              margin-bottom: 30px;
               width: 100%;
              outline: none;
              border: none;
              border-bottom: 1px solid gray;
              background: transparent;
              color: #fff;
            
            }

            .submit {
              font-weight: bold;
              padding: 10px 25px;
              background-color: transparent;
              border-radius: 0.5rem;
              color: #fff;
              border: 2px solid #b5aaaa;
              font-size: 15px;
              :hover {
                background-image: linear-gradient(to right, #fa5252, #dd2476);
                color: white;
                transition: all;
               border-image: linear-gradient(to left, #fa5252, #dd2476);
               border-image-slice: 0;
              }
            }
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
  @media  (max-width : 1100px) {
    .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 30px;
    padding: 35px 80px;
    height: auto;

    .contact {
      display: grid;
      grid-template-columns: 1fr;
      gap: 80px;
      .form1 {
        margin-top: 5px;

        .phone {
          background-color: #212425;
          padding: 15px 5px 15px 35px;
          border-radius: 10px;
          margin-bottom: 20px;
          .phone1 {
            font-family: sans-serif;
            position: relative right 5px;
            display: flex;
            margin-left: 0;
            align-items: flex-start;
            .logo {
              margin-top: 19px;
            }
            .test {
              margin-left: 8px;
              h2 {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
              }
              p {
                color: #b5aaaa;
                font-family: sans-serif;
                font-size: 18px;
              }
            }
          }
        }
        .email {
          background-color: #212425;
          padding: 15px 50px 15px 35px;
          border-radius: 10px;
          margin-bottom: 20px;
          .email1 {
            font-family: sans-serif;
            position: relative right 5px;
            display: flex;
            margin-left: 0;
            align-items: flex-start;
            .logo {
              margin-top: 19px;
            }
            .test {
              margin-left: 8px;
              h2 {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
              }
              p {
                color: #b5aaaa;
                font-family: sans-serif;
                font-size: 18px;
              }
            }
          }
        }
        .address {
          background-color: #212425;
          padding: 15px 50px 15px 35px;
          border-radius: 10px;
          margin-bottom: 20px;
          .address1 {
            font-family: sans-serif;
            position: relative right 5px;
            display: flex;
            margin-left: 0;
            align-items: flex-start;
            .logo {
              margin-top: 19px;
            }
            .test {
              margin-left: 8px;
              h2 {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
              }
              p {
                color: #b5aaaa;
                font-family: sans-serif;
                font-size: 18px;
              }
            }
          }
        }
      }
      .form2 {
        background-color: transparent;
        border: 2px solid #1f1e1e;
        border-radius: 10px;
        padding: 15px 35px;
        .gen {
          .test {
            font-family: sans-serif;
            h1 {
              color: #b5aaaa;
              font-size: 25px;
            }
            h2 {
              color: #fff;
            }
          }
        }

        .allform {
          align-items: center;
          justify-content: space-between;
          form {
            margin-top: 50px;
            label {
              color: #b5aaaa;
              transform: scale(1);
              :focus {
                color: #ff2d55;
              }
            }
            input[type=text],[type=email] {
              transform: scale(1);
              padding: 10px 35px;
              width: 100%;
              background-color: transparent;
              margin-bottom: 30px;
              outline: none;
              border: none;
              border-bottom: 1px solid gray;
              background: transparent;
              color: #fff;
            
            }

            .submit {
              font-weight: bold;
              padding: 10px 25px;
              background-color: transparent;
              border-radius: 0.5rem;
              color: #fff;
              border: 2px solid #b5aaaa;
              font-size: 15px;
              :hover {
                background-image: linear-gradient(to right, #fa5252, #dd2476);
                color: white;
                transition: all;
               border-image: linear-gradient(to left, #fa5252, #dd2476);
               border-image-slice: 0;
              }
            }
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
  }
  @media  (max-width : 600px){
       .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-top: 0;
     padding-left: 12px;
    margin-top: 0;
    .contact {
       margin: auto;
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      margin-left: 20px;
         .form1 {
       

        .phone {
           
          background-color: #212425;
          width: 83vw;
          border-radius: 10px;
          margin-bottom: 20px;
          .phone1 {
            font-family: sans-serif;
            position: relative right 5px;
            display: flex;
            margin-left: 0;
            align-items: flex-start;
            .logo {
              margin-top: 19px;
            }
            .test {
              margin-left: 8px;
              h2 {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
              }
              p {
                color: #b5aaaa;
                font-family: sans-serif;
                font-size: 18px;
              }
            }
          }
        }
        .email {
         
          background-color: #212425;
       width: 83vw;
          border-radius: 10px;
          margin-bottom: 20px;
          .email1 {
            font-family: sans-serif;
            position: relative right 5px;
            display: flex;
            margin-left: 0;
            align-items: flex-start;
            .logo {
              margin-top: 19px;
            }
            .test {
              margin-left: 8px;
              h2 {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
              }
              p {
                color: #b5aaaa;
                font-family: sans-serif;
                font-size: 18px;
              }
            }
          }
        }
        .address {
          background-color: #212425;
        width: 83vw;
          border-radius: 10px;
         
          .address1 {
            font-family: sans-serif;
            position: relative right 5px;
            display: flex;
            margin-left: 0;
            align-items: flex-start;
            .logo {
              margin-top: 19px;
            }
            .test {
              margin-left: 8px;
              h2 {
                font-weight: bold;
                color: #fff;
                font-size: 20px;
              }
              p {
                color: #b5aaaa;
                font-family: sans-serif;
                font-size: 18px;
              }
            }
          }
        }
      }
      .form2 {
        background-color: transparent;
        border: 2px solid #1f1e1e;
        border-radius: 10px;
      width: 100%;
padding:20px;
        .gen {
        
          .test {
            font-family: sans-serif;
            h1 {
              color: #b5aaaa;
              font-size: 20px;
            }
            h2 {
              color: #fff;
            }
          }
        }

        .allform {
          align-items: center;
          justify-content: space-between;
          margin: 0;
          margin-left: 0;
         padding:10px;
          form {
          
            label {
              color: #b5aaaa;
              transform: scale(1);
              :focus {
                color: #ff2d55;
              }
            }
            input[type=text],[type=email]{
              transform: scale(1);
           padding: 10px;
              background-color: transparent;
              margin-bottom: 30px;
              width: 100%;
              outline: none;
              border: none;
              border-bottom: 1px solid gray;
              background: transparent;
              color: #fff;
            
            }

            .submit {
              font-weight: bold;
              padding: 10px 25px;
              background-color: transparent;
              border-radius: 0.5rem;
              color: #fff;
              border: 2px solid #b5aaaa;
              font-size: 15px;
              :hover {
                background-image: linear-gradient(to right, #fa5252, #dd2476);
                color: white;
                transition: all;
               border-image: linear-gradient(to left, #fa5252, #dd2476);
               border-image-slice: 0;
              }
            }
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
      margin-top: 19px;
      margin-right: 0;
      font-family: "Courier New", Courier, monospace;
      font-size: 1.2rem;
      font-weight: bolder;
      position: relative;
    }

    .sec2 {
     display: none;
    }
  } 
  }


`;

const Contact = () => {
  
  const toast = useRef(null);

  const form = useRef();
  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Email sent successfully', life: 3000 });
  }



  const showWarn = () => {
    toast.current.show({ severity: 'warn', summary: 'Unable to send Email', detail: 'Network Error', life: 3000 });
  }

  const [ispending,setispending] = useState(false)
  const onsubmmit = (e) => {
    e.preventDefault()
setispending(true)
    emailjs.sendForm('service_g97owxl', 'template_umbfdxc', form.current, 'o3dlBwqjWQZsB4mwg')
      .then((result) => {
        console.log(result.text);
        setispending(false)
        console.log('message sent')
        showSuccess()
        e.target.reset()
      }, (error) => {
        showWarn()
        console.log(error.text);
        setispending(false)
      });


  }
   return (
    <Container>
      <div className="general">
         <Navbar />
         <Toast ref={toast} />
        <div className="border">
          <div className="header">
            <div className="sec1">
              <h1>Contact</h1>
            </div>
            <div className="sec2"></div>
          </div>
          <div className="contact">
            <div className="form1">
              <div className="phone">
                <div className="phone1">
                  <div className="logo">
                    <img src={tele} alt="" height={32} width={32} />
                  </div>
                  <div className="test">
                    <h2>Phone : </h2>
                    <p>+234&nbsp;808&nbsp;503&nbsp;4076</p>
                    <p>+234&nbsp;666&nbsp;386</p>
                  </div>
                </div>
              </div>
              <div className="email">
                <div className="email1">
                  <div className="logo">
                    <img src={email} alt="" height={32} width={32} />
                  </div>
                  <div className="test">
                    <h2>Email : </h2>
                    <p>princeajuzie1@gmail.com</p>
                    <p>princeajuzie03@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="address">
                <div className="address1">
                  <div className="logo">
                    <img src={address} alt="" height={32} width={32} />
                  </div>
                  <div className="test">
                    <h2>Address : </h2>
                    <p>Maount View, Oval</p>
                    <p>Road, New York, USA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="form2">
              <div className="gen">
                <div className="test">
                  <h1>I'm always open to discussing product</h1>
                  <h2>design work or partnerships.</h2>
                </div>
                <div className="allform">
                   <form action="" ref={form} onSubmit={onsubmmit}>
                    <label htmlFor="name"> Name *</label> <br />
                    <input
                      type="text"
                       name="full-Name"
                         
                       
                      required
                    />{" "}
                    <br />
                    <label htmlFor="email"> Email *</label> <br />
                    <input
                      type="email"
                       name="email"
                      id="email"
                   
                      required
                    />{" "}
                    <br />
                    <label htmlFor="message"> Message *</label> <br />
                    <input
                      type="text"
                       name="message"
                       id="message"
                      
                       
                      required
                    />
                    <br />
                 { !ispending && <input
                      type="submit"
                      value="submit"
                      required
                      height={20}
                      width={5}
                      className="submit"
                     />}
                      { ispending && <input
                      type="submit"
                      value="Loading.."
                      required
                      height={20}
                      width={5}
                       className="submit"
                       disabled
                       
                    />  }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Contact;
