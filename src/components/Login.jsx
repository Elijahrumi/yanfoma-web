import React, { useState } from 'react'
import axios from 'axios';
// import "bulma/css/bulma.css";
import { useNavigate } from 'react-router-dom';
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Auth = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          setMsg(response.data.message);
        } else {
          setMsg(response.data[0].email);
          navigate("/dashboard");
        }
      });
    };


        
    
    return (
      <section className="col-sm m-5">
        <div className="card my-4">
          <div className="container">
            <div className="card">
              <div className="col-sm ">
                <form className="box">
                  <p className="has-text-centered">{msg}</p>
                  <div className="field mt-5">
                    <label className="label">Email</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Username"
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
                  <div className="field mt-5">
                    <input
                      type="submit"
                      onClick={Auth}
                      value="Login"
                      className="button is-success is-fullwidth"
                    />
                    <h1
                      style={{
                        color: "red",
                        fontSize: "15px",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      {msg}
                    </h1>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    }

export default Login