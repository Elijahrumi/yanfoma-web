import React, { useState } from 'react'
import axios from 'axios';
// import "bulma/css/bulma.css";
import { useNavigate } from 'react-router-dom';
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }

        
    }
    return (
      <section className="col-sm m-5">
        <div className="card my-4">
          <div className="container">
            <div className="card">
              <div className="col-sm ">
                <form onSubmit={Auth} className="box">
                      <p className="has-text-centered">{msg}</p>
                      <div className="field mt-5">
                        <label className="label">Email or Username</label>
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
                        <button className="button is-success is-fullwidth">
                          Login
                        </button>
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