import styled from "styled-components";
import {
    BsDribbble,
    BsFacebook,
    BsLinkedin,
    BsTwitter,
 
} from "react-icons/bs";
import { SiTiktok } from "react-icons/si"
import { useState } from "react";

const Main = styled.div`
  margin-top: 120px;
  .groupfooter4 {
    color: #fff;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    justify-items: center;
    padding: 20px 35px;
    .a {
      p {
        font-size: 12px;
        font-weight: "Mnrope";

        i {
          margin-right: 2px;
        }
      }
    }

    .b {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;

        li {
          list-style: none;

          .icon {
            color: #fff;

            :hover {
          color: #fa5274;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .groupfooter4 {
    background-color: black;
    color: aliceblue;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    justify-items: center;
    padding: 30px 35px;

    .a {
      p {
        font-size: 12px;
        font-weight: "Mnrope";

        i {
          margin-right: 2px;
        }
      }
    }

    .b {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;

        li {
          list-style: none;

        .icon {
            color: #fff;

            :hover {
          color: #fa5274;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  }

  @media (max-width: 900px) {
    .groupfooter4 {
    background-color: #020c1b;
    color: aliceblue;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content: space-between;
    border-top: 1px solid gray;
    justify-items: center;
    padding: 30px 35px;

    .a {
      p {
        font-size: 12px;
        font-weight: "Mnrope";

        i {
          margin-right: 2px;
        }
      }
    }

    .b {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;

        li {
          list-style: none;

        .icon {
            color: #fff;

            :hover {
          color: #fa5274;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  }

  @media (max-width: 600px) {
    .groupfooter4 {
    background-color: #020c1b;
    color: aliceblue;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content: space-between;
    border-top: 1px solid gray;
    justify-items: center;
    padding: 30px 35px;

    .a {
      p {
        font-size: 12px;
        font-weight: "Mnrope";
        text-align: center;

        i {
          margin-right: 2px;
        }
      }
    }

    .b {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;

        li {
          list-style: none;

          .icon {
            color: gold;

            :hover {
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  }
`;

const Footer = () => {
  let date = new Date()
  let y = date.getFullYear()
  // THIS RETURNS THE YEAR 
  const [year, setYear] = useState( y )

    return (
        <Main>
            <div className="groupfooter4">
                <div className="a">
                    <p>
              <i className="fa-solid fa-copyright"></i>{year} Prince Ajuzie. All
                        rights reserved. -- Privacy Policy - Terms of Services
                    </p>
                </div>

                <div className="b">
                    <ul>
                        <li>
                {" "}
                <a href="https://web.facebook.com/prince.ajuzie.148"><BsFacebook className="icon" /></a>
                
                        </li>

                        <li>
                            {" "}
                
                <a href="https://twitter.com/Princeajuzie2"><BsTwitter className="icon" /></a>
                        </li>

                        <li>
                <a href="https://www.tiktok.com/@prince.ajuzie"> <SiTiktok className="icon" /></a>
                           
                        </li>
                        <li>
                <a href="https://www.linkedin.com/in/prince-ajuzie-4a1125229/"><BsLinkedin className="icon" /></a>
                            
                        </li>

                    </ul>
                </div>
            </div>
        </Main>
    );
};

export default Footer;