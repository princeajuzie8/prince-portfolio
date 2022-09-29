import styled from "styled-components";
import Navbar from "../component/Navbar";
import profile from "../images/profile.jpeg";

const Container = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center;
  height: auto;
  width: auto;
  .user {
    text-align: center;
  }

  img {
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
`;

const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        <div className="user">
          <img src={profile} alt="" />
          <div className="username">
            Prince Ajuzie
            <div className="career">Full Stack Development</div>
            <div className="socials">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-tiktok"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className="cv-download">
              <button>
                {" "}
                <i class="fa-solid fa-download"></i> Download CV
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
