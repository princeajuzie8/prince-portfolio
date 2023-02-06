import Navbar from "../component/Navbar";
import styled from "styled-components";
import main1 from "../images/main 1.jpg"
import main2 from "../images/main 2.jpg"
import main3 from "../images/main 3.jpg"
import main4 from "../images/main 4.jpeg"
import main5 from "../images/main 5.jpg"
import main6 from "../images/main 6.jpg"
import small1 from "../images/small 1.jpg"
import small2 from "../images/small 2.jpg"
import small3 from "../images/small 3.jpg"
import small4 from "../images/small 4.jpg"
import small5 from "../images/small 5.jpg"
import small6 from "../images/small 6.jpg"
import { useState } from "react";
import Bloglist from "../component/Bloglist";

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
                  width: 100%;
                  height: auto;
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
                  width: 100%;
                  height: auto;
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
                  width: 100%;
                  height: auto;
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
      margin-top: 19px;
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
  const [blogs, Setblogs] = useState(

    [
      {
        title: "story of my life",
        body: "How to Own Your Audience by Creating an Email List.",
        img: main1,
        smalimg: small1,
        date: "117 April",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. .",
        id: 1
      },
      {
        title: "story of my life",
        body: "How to Own Your Audience by Creating an Email List.",
        img: main2,
        smalimg: small2,
        date: "117 April",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. .",
        id: 2
      },
      {
        title: "story of my life",
        body: "How to Own Your Audience by Creating an Email List.",
        img: main3,
        smalimg: small3,
        date: "117 April",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. .",
        id: 3
      },
      {
        title: "story of my life",
        body: "How to Own Your Audience by Creating an Email List.",
        img: main4,
        smalimg: small4,
        date: "117 April",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. .",
        id: 4
      },
      {
        title: "story of my life",
        body: "How to Own Your Audience by Creating an Email List.",
        img: main5,
        smalimg: small5,
        date: "117 April",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. .",
        id: 5
      },
      {
        title: "story of my life",
        body: "How to Own Your Audience by Creating an Email List.",
        img: main6,
        smalimg: small6,
        date: "117 April",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. .",
        id: 6
      },

    ]
  )







  



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
          
            {blogs && <Bloglist blogs={blogs} />}
          </div>
        </div>

      </div>
      <Footer />
    </Container>

  );
}

export default Blogs;