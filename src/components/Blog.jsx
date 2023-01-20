import React,{useEffect, useState} from "react";
// import blogData from "../data/blogData";
import axios from "axios";

export default function Blog() {
  const [blogData, setBlogData] = useState([]);
  const blogDataEndpoint = "https://yanfoma.com/ghost/api/content/posts/?key=9cf98ee267557de238f56ec2fb";
  const fetchBlogData = () => {
    axios.get(blogDataEndpoint)
         .then((response)=>{
          // console.log(response.data);
          setBlogData(response.data);
         }) 
  }

  useEffect(()=>{
    fetchBlogData()
  },[]);

  

  // const posts = Object.values(blogData).map(item => console.log(item))
  

  
    
        return (

            <div className="col-md-4">
            <div className="card blog-post my-4 my-sm-5 my-md-0">
              <img
                // src={data["feature-image"]}
                alt="blog-image"
              />
              <div className="card-body">

               
               
                {
                // Object.keys(blogData).map(
                //   item => {
        
                //     const posts = blogData[item];


                //     Object.values(posts).map(elem => {
                //       return(
                //         <h1 key={elem.id}>
                //           {elem.title}
                //         </h1>
                //       )
                //     })



                //   }
                // )
                }
                {/* <h5 className="card-title">{data.title}</h5> */}
                {/* <p>{data.excerpt}</p> */}
                <a href="javascript:void(0)" className="d-block mt-3">
                  Read More...
                </a>
              </div>
            </div>
            </div>
        )
    }



  // return (
  //   <section id="blog">
  //     <div className="container">
  //       <h6 className="section-subtitle text-center">News Feeds</h6>
  //       <h6 className="section-title mb-6 text-center">Our Blog</h6>

  //       <div className="row">
          
  //           {BlogData}
          
         
  //       </div>
  //     </div>
  //   </section>
  // );

