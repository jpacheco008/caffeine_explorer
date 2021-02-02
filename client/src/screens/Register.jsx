import { useState } from 'react';
import '../styles/Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData);
    }}
      className='register-form'
    >
      <h4 className='register-title'>Register</h4>
      <label className='register-label'>Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          />
      </label >
      <br/>
      <label className='register-label'>Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          />
      </label>
      <br/>
      <label className='register-label'>Password:
        <input
          type="text"
          name='password'
          value={password}
          onChange={handleChange}
          />
      </label>
      <br />
      <button className='register-button'>Submit</button>
    </form>
  )
}
