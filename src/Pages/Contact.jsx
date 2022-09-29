import Navbar from "../component/Navbar";
import styled from "styled-components";
import tele from "../images/tele.png";
import address from "../images/location.png";
import email from "../images/mail.png";
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
    height: auto;

    .contact {
      display: grid;
      grid-template-columns: 0.9fr 3fr;
      gap: 80px;
      .form1 {
        margin-top: 5px;

        .phone {
          background-color: #282525;
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
          background-color: #282525;
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
          background-color: #282525;
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
            input {
              transform: scale(1);
              padding: 10px 35px;
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
`;

const Contact = () => {
  return (
    <Container>
      <div className="general">
        <Navbar />
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
                  <form action="">
                    <label htmlFor="name"> Name *</label> <br />
                    <input
                      type="text"
                      name=""
                      id="name"
                      size={70}
                      required
                    />{" "}
                    <br />
                    <label htmlFor="email"> Email *</label> <br />
                    <input
                      type="email"
                      name=""
                      id="email"
                      size={70}
                      required
                    />{" "}
                    <br />
                    <label htmlFor="message"> Message *</label> <br />
                    <input
                      type="text"
                      name=""
                      id="message"
                      size={70}
                      required
                    />
                    <br />
                    <input
                      type="submit"
                      value="submit"
                      required
                      height={20}
                      width={5}
                      className="submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
