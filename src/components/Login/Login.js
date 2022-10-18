import React from 'react';
import './Login.css'


const Login = () => {
  return (
    <div className='form-container'>
      <h2 className='form-title'>login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' required />
        </div>
        <input className='btn-submit' type="submit" value="login" />
      </form>
    </div>


  );
};

export default Login; <h2>This is login</h2>