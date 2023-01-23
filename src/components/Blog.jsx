import React,{useEffect, useState} from "react";
// import blogData from "../data/blogData";
import axios from "axios";

const client = axios.create({
  baseURL:
    "https://yanfoma.com/ghost/api/content/posts/",
});

export default function Blog() {
  const [postData, setPostData] = useState([]);
  
  useEffect(()=>{
    const fetchPost = async () => {
      let response = await client.get("?key=9cf98ee267557de238f56ec2fb");
      setPostData(response.data.posts);
      
      
      
    };
      fetchPost();
      // post = postData.posts;
    },[]);

    console.dir(postData);
    // console.log("posts:", postData.posts);
   

      const DisplayPost = postData.map(
        (post) => {
          return(
            <div className="col-md-4">
                    <div className="card blog-post my-4 my-sm-5 my-md-0">
                        <img src={post.feature_image} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>
                        <div className="card-body">
                            {/* <div className="details mb-3">
                                <a href="javascript:void(0)"><i className="ti-comments"></i> 123</a>
                                <a href="javascript:void(0)"><i className="ti-eye"></i> 123</a>
                            </div> */}
                            <h5 className="card-title">{post.title}</h5>
                            <p>{post.excerpt}</p>
                            <a href="javascript:void(0)" className="d-block mt-3">Read More...</a>
                        </div>
                    </div>
                </div>
          )
        }
      ) 
      return (
    <section id="blog">
      <div className="container">
        <h6 className="section-subtitle text-center">News Feeds</h6>
        <h6 className="section-title mb-6 text-center">Our Blog</h6>

        <div className="row">
          
            {DisplayPost}
          
         
        </div>
      </div>
    </section>
  );

    }



  // 
