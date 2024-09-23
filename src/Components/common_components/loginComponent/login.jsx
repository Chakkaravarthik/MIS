import React, { useState } from 'react';
import '../loginComponent/login.css'


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
      <div className='container-fluid d-flex align-items-center  justify-content-center min-vh-100 '>
          <div className='row d-flex align-items-center justify-content-center p-5 shadow-lg border-custom rounded-3'>
              <div className='col '>
                <img className='image' src='https://img.freepik.com/premium-vector/elephant-logo-label-line-style-logotype-template-easy-use-business-templates_279597-925.jpg?size=626&ext=jpg'></img>
              </div>
              <div className='col d-flex align-items-center justify-content-center'>
                  <form className='col d-flex align-items-center justify-content-center flex-column' onSubmit={handleSubmit}>
                      <div>
                          <input
                              className='border-0 p-2 m-1 shadow-sm rounded-3'
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              placeholder='Email/userid'
                          />
                      </div>
                      <div>
                          <input
                              className='border-0 p-2 m-1 shadow-sm rounded-3'
                              type="password"
                              id="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              placeholder='Password'
                          />
                      </div>
                      <button className='btn m-3 custom-border rounded-2 shadow-sm' type="submit">Login</button>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default LoginForm;
