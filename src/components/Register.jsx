import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";


const baseUrl = 'http://localhost:3001';

const Register = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confPassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        
            await axios.post(`${baseUrl}/register`, {
                username: username,
                email:email,
                password: password,
                // confPassword: confPassword
            }).then((response)=>{
              if(response.data.message){
                setMsg(response.data.message)
              }else{
                setMsg("registration successful");
                navigate("/login");
              }
            });
            
         
    }

    return (
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <form onSubmit={Register} className="box">
                  <p className="has-text-centered">{msg}</p>
                  <div className="field mt-5">
                    <label className="label">username</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Email</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Password</label>
                    <div className="controls">
                      <input
                        type="password"
                        className="input"
                        placeholder="******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <div className="field mt-5">
                    <label className="label">Confirm Password</label>
                    <div className="controls">
                      <input
                        type="password"
                        className="input"
                        placeholder="******"
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                      />
                    </div>
                  </div> */}
                  <div className="field mt-5">
                    <button className="button is-success is-fullwidth">
                      Register
                    </button>
                  </div>
                  <h3 style={{color: 'red'}}>{msg}</h3>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Register;