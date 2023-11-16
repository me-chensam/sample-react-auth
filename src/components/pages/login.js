import React from 'react'
import useAuth from '../../contexts/auth'

export default function Login() {
  const [formData, setFormData] = React.useState({})

  const auth = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    auth.signIn(formData);
    console.log(formData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }))
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input type='text' name='username' onChange={handleChange} />
        <label>password</label>
        <input type='password' name='password' onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>
    </React.Fragment>
  )
}