import { useState } from "react";
import Blogmodal from "../Modal/blogModal";

const  Bloglist= ({blogs}) => {
    const [Openmodal, setOpenmodal] = useState(false)
    const [img, setimg] = useState({})
    const [tittle, setTittle] = useState({})
    const [smallimage, Setsmallimage] = useState({})
    const [body, setBody] = useState({})
    const [date, setDate] = useState({})
    const [description, setDescription] = useState({})
    const [SingleData, setSingleData] = useState({})

    const Pop = (id) => {
       
        setOpenmodal(true)
       

    };
    
    return ( 
        <>
            {blogs.map((blog) => (
                <div className="blogdetails" key={blog.id}>
                    <div className="blog">
                        <div className="blog1">
                            <img src={blog.img} alt="" onClick={() => {
                                Pop()
                                setTittle(blog.title)
                                console.log(blog)
                                setimg(blog.img);
                                setDate(blog.date)
                                Setsmallimage(blog.smalimg)
                                setBody(blog.body)
                                setDescription(blog.description)
                            }} />
                          
                          
                        </div>
                        <div className="Alltest">
                            <div className="date">
                                <span>{blog.date}</span>
                            </div>
                            <div className="test">
                                <h2>{blog.title}</h2>
                            </div>
                        </div>
                        <div className="body">
                            <p>{blog.body}</p>
                        </div>
                    </div>
                    
                    {Openmodal && <Blogmodal setOpenmodal={setOpenmodal} blog={blog} img={img} tittle={tittle} smallimage={smallimage} date={date} body={body} description={description} />}
                </div>
            ))}
        </>
     );
}
 
export default  Bloglist;