import { useNavigate } from "react-router-dom";

export const BlogModal = () => {
    const navigate = useNavigate();
    console.log("modal blog created")
    return (
        <div className="row m-5">
            <div className="col-sm m-5">
                <h3>Modal</h3>
                <button onClick={()=> navigate(-1)}>Close</button>
            </div>
        </div>
    )
}