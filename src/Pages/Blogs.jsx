import Navbar from "../component/Navbar";
import styled from "styled-components";
import Blog1 from "../images/blog 1.jpg"
// import Blog2 from "../images/blog2.jpg"
import { useState } from "react";
import { useEffect } from "react";
import Bloglist from "../component/Bloglist";
import { CircularProgress } from "@mui/material";
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
    width: auto;
     .Allblogs{
           display: grid;
           grid-template-columns: auto auto auto;
           justify-content: center;

           .error{
            color: white;
            align-items: center;
           }
        .blogdetails{
            
            display: flex;
            justify-content: center;
             .blog{
                   border: 1px solid #343131;
                     border-radius: 10px;
                   padding: 20px;
                  width: 300px;
                  height: fit-content;
                  margin-bottom: 30px;
                  margin-left: 30px;
                .blog1{
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                     border-radius: 10px;
                         height: 300px;
                          width: auto;
                    img{
                        transition: all .2s;
                        cursor: pointer;
                        border-radius: 10px;
                          height: 290px;
                          width: auto;
                          :hover{
                             transform: scale(1.1);
                          }
                     } 
                }
                .Alltest{
                        display: flex;
                        align-items: center;
                         color: #d3d3d3;
                         
                        .date{
                             span{
                           font-size: .875rem;
                            
                              margin-right: 10px;
                           }

                        }
                         .test{
                                font-size: .550rem;
                           }
                }
                  .body{
                           color: white;
                            p{
                                font-size: 15px;
                                font-weight: bold;
                                width: 220px;
                                cursor: pointer;
                                :hover{
                                    transition: 1.1s;
                                    color: #ff2d55;
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
  @media (max-width : 1100px){
  .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 30px;
    padding: 35px 80px;
    height: fit-content;
    width: auto;
     .Allblogs{
           display: grid;
           grid-template-columns: auto auto ;
           justify-content: center;

           .error{
            color: white;
            align-items: center;
           }
        .blogdetails{
            
            display: flex;
            justify-content: center;
             .blog{
                   border: 1px solid #343131;
                     border-radius: 10px;
                   padding: 20px;
                  width: 300px;
                  height: fit-content;
                  margin-bottom: 30px;
                  margin-left: 30px;
                .blog1{
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                     border-radius: 10px;
                         height: 300px;
                          width: auto;
                    img{
                        transition: all .2s;
                        cursor: pointer;
                        border-radius: 10px;
                          height: 290px;
                          width: auto;
                          :hover{
                             transform: scale(1.1);
                          }
                     } 
                }
                .Alltest{
                        display: flex;
                        align-items: center;
                         color: #d3d3d3;
                         
                        .date{
                             span{
                           font-size: .875rem;
                            
                              margin-right: 10px;
                           }

                        }
                         .test{
                                font-size: .550rem;
                           }
                }
                  .body{
                           color: white;
                            p{
                                font-size: 15px;
                                font-weight: bold;
                                width: 220px;
                                cursor: pointer;
                                :hover{
                                    transition: 1.1s;
                                    color: #ff2d55;
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
    @media (max-width : 600px){
       .border {
    font-family: poppins, sans-serif;
    background: #111111;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin-top: 10px;
    padding: 5px 40px;
    height: fit-content;
    width: auto;
     .Allblogs{
           display: grid;
           grid-template-columns: auto;
           justify-content: center;

           .error{
            color: white;
            align-items: center;
           }
        .blogdetails{
            
            display: flex;
            justify-content: center;
             .blog{
                   border: 1px solid #343131;
                     border-radius: 10px;
                   padding: 20px;
                  width: 300px;
                  height: fit-content;
                  margin-bottom: 30px;
                  margin-left: 0;
                .blog1{
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                     border-radius: 10px;
                         height: 300px;
                          width: auto;
                    img{
                        transition: all .2s;
                        cursor: pointer;
                        border-radius: 10px;
                          height: 290px;
                          width: auto;
                          :hover{
                             transform: scale(1.1);
                          }
                     } 
                }
                .Alltest{
                        display: flex;
                        align-items: center;
                         color: #d3d3d3;
                         
                        .date{
                             span{
                           font-size: .875rem;
                            
                              margin-right: 10px;
                           }

                        }
                         .test{
                                font-size: .550rem;
                           }
                }
                  .body{
                           color: white;
                            p{
                                font-size: 15px;
                                font-weight: bold;
                                width: 220px;
                                cursor: pointer;
                                :hover{
                                    transition: 1.1s;
                                    color: #ff2d55;
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
  

    .sec1 {
       text-align: left;
      margin-right: 0;
      font-family: "Courier New", Courier, monospace;
      font-size: 1.2rem;
      font-weight: bolder;
     margin-left: 0;
    }

    .sec2 {
     display: none;
    }
 
  }
    }
`;


const Blogs = () => {
  const [blogs, Setblogs] = useState(null)
  const [Ispending, Setispending] = useState(true)
  const [error, Seterror] = useState(null)
  useEffect(() => {

    fetch('http://localhost:7000/blogs')
      .then(res => {
        // console.log(res)
        if (!res.ok) {
          throw Error("could not fetch data for that resources")
        }
        return res.json()
      })
      .then(data => {
        //  console.log(data);
        Setblogs(data);
        Setispending(false);
        Seterror(null)
      })
      .catch(err => {
        Setispending(false)
        Seterror(err.message);
      })
  }, []);

  return (
    <Container>
      <div className="general">
        <Navbar />
        <div className="border">
          <div className="header">
            <div className="sec1">
              <h1>Blogs</h1>
            </div>
            <div className="sec2"></div>
          </div>
          <div className="Allblogs">
            {error && <div className="error">{error}</div>}
            {Ispending && <div><CircularProgress disableShrink /></div>}
            {blogs && <Bloglist blogs={blogs} />}
          </div>
        </div>

      </div>
      <Footer />
    </Container>

  );
}

export default Blogs;