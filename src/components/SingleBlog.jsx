import React,{useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import Navbar from "./Navbar";

const client = axios.create({
  baseURL: "https://yanfoma.com/ghost/api/content/posts/slug/",
});



const SingleBlog = () => {
    const { slug } = useParams();
    const [singleBlogData, setSingleBlogData] = useState([]);
    
    
    const fetchBlog = async () => {
      let response = await client.get(
        `${slug}?key=9cf98ee267557de238f56ec2fb`
      );
      setSingleBlogData(response.data.posts);
      console.log(response.data);
    };

    useEffect(() => {
      fetchBlog();
    }, []);

    return (
        <>
          {
            singleBlogData.map((data)=>{
                return (
                  
                  <div className="row m-1" key={data.id}>
                    <div className="row top-bar">
                      <div className=" top-bar-overlay"></div>
                      <Navbar/>
                    </div>

                    <div className="col-sm m-5">
                      <div className="card blog-post my-4 my-sm-5 my-md-0">
                        <img
                          className="inner-blog-image"
                          src={data.feature_image}
                          alt={data.feature_image}
                        />
                        <div className="card-body p-5">
                          {/* <div className="details mb-3">
                                <a href="javascript:void(0)"><i className="ti-comments"></i> 123</a>
                                <a href="javascript:void(0)"><i className="ti-eye"></i> 123</a>
                            </div> */}
                          <h5 className="card-title">{data.title}</h5>
                          <div>{ReactHtmlParser(data.html)}</div>
                          <div className="btn btn-sm btn-primary">
                            {/* <Link to="/">Go back</Link> */}
                            <HashLink smooth to="/#blog">Go back </HashLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })
          }
        </>
    )

}

export default SingleBlog;