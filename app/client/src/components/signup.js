import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import './signup.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import logo from '../images/back5.jpeg'
import { TextField } from '@mui/material'

const Signup = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const signup = () => {
    const { firstname, lastname, username, email, password } = user
    if (firstname && lastname && username && email && password) {
      console.log(username)
      // axios.post("http://43.206.117.90:5000/signup", user)
      axios
        .post('http://localhost:3001/signup', user)
        .then((res) => {
          alert(res.data.message)
          navigate('/login')
        })
        .catch((err) => console.log('req error'))
    } else {
      alert('Sign in UNSUCCESSFUL!!!')
    }
  }

  const [showpassword, setshowpassword] = useState('')
  return (
    <div
      style={{
        border: '1px solid white',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E9FF',
        position: 'relative',
      }}
    >
      <div
        style={{
          border: '',
          minWidth: '1100px',
          minHeight: '650px',
          backgroundColor: 'white',
          boxShadow: '0px 10px 30px 1px rgba(0, 0, 0, 0.75)',
        }}
      >
        <img
          src={logo}
          style={{
            border: '1px solid white',
            width: '575px',
            height: '650px',
          }}
          alt="background2"
        ></img>
        <Form
          className="Container"
          style={{
            height: '650px',
            width: '600px',
            border: '1px solid white',
            float: 'right',
          }}
        >
          <div
            style={{
              fontWeight: '700',
              fontSize: '32px',
              margin: '25px 0 50px 0',
              textAlign: 'center',
              color: '#444444',
            }}
            className="elecText3"
          >
            Road Gaurdian
          </div>
          <div
            className="twolines"
            style={{ border: '1px solid white', textAlign: 'center' }}
          >
            <div
              className="Header"
              style={{
                fontWeight: '700',
                fontSize: '25px',
                color: '#444444',
                marginBottom: '5px',
              }}
            >
              Register!
            </div>
            <div
              className="Header"
              style={{
                fontWeight: '700',
                fontSize: '15px',
                color: '#878787',
                marginBottom: '10px',
              }}
            >
              Enter all your credentials to join in!
            </div>
          </div>
          <div style={{ border: '1px solid white', margin: '30px 0 0 0' }}>
            {/* First Name and Last Name */}
            <Row
              style={{
                border: '',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                margin: '0 0 0 0',
              }}
            >
              {/* First Name */}
              <Form.Group style={{ border: '1px solid white', width: '520px' }}>
                <TextField
                  id="standard-basic"
                  label="Firstname"
                  color="secondary"
                  variant="standard"
                  type="text"
                  name="firstname"
                  value={user.firstname}
                  onChange={handleChange}
                  style={{
                    width: '200px',
                    float: 'left',
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Lastname"
                  color="secondary"
                  variant="standard"
                  type="text"
                  name="lastname"
                  value={user.lastname}
                  onChange={handleChange}
                  style={{ width: '200px', float: 'right' }}
                />
              </Form.Group>
            </Row>

            {/* Username and Email */}
            <Row
              style={{
                border: '',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                margin: '20px 0 0 0',
              }}
            >
              <Form.Group style={{ border: '1px solid white', width: '520px' }}>
                <TextField
                  id="standard-basic"
                  label="Username"
                  variant="standard"
                  color="secondary"
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  style={{ width: '200px', float: 'left' }}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  color="secondary"
                  variant="standard"
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  style={{ width: '200px', float: 'right' }}
                />
              </Form.Group>
            </Row>

            {/* Password and Retype Password*/}
            <Row
              style={{
                border: '',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                margin: '20px 0 0 0',
              }}
            >
              <Form.Group style={{ border: '1px solid white', width: '520px' }}>
                <TextField
                  id="standard-basic"
                  label="Pasword"
                  color="secondary"
                  variant="standard"
                  type={showpassword ? 'text' : 'password'}
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  style={{ width: '200px', float: 'left' }}
                />
                <TextField
                  id="standard-basic"
                  label="Retype password"
                  color="secondary"
                  variant="standard"
                  type={showpassword ? 'text' : 'password'}
                  name="password"
                  style={{ width: '200px', float: 'right' }}
                />
              </Form.Group>
            </Row>
          </div>

          <div
            style={{
              color: '#973CFF',
              fontSize: '12.5px',
              border: '1px solid white',
              display: 'flex',
              paddingLeft: '50px',
              fontWeight: '500',
            }}
          >
            <Form.Check
              type="checkbox"
              label="show password"
              checked={showpassword}
              onChange={() => setshowpassword(!showpassword)}
            />
          </div>

          <div
            style={{
              display: 'flex',
              border: '',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '15px',
            }}
          >
            <Button
              style={{
                padding: '7px 50px 7px 50px',
                border: '1px solid #999',
                borderRadius: '20px',
                backgroundColor: '#4A4A4A',
                color: 'white',
                textAlign: 'center',
                fontSize: '18px',
              }}
              onClick={signup}
            >
              Sign up
            </Button>
            <div
              className="orThing"
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '18px 0 0 5px',
                color: '#A1A1A1',
              }}
            >
              <div>_______________________</div>
              <div style={{ margin: '7px 0 0 0', padding: '0 5px 0 5px' }}>
                or
              </div>
              <div>_______________________</div>
            </div>
            <div
              style={{
                border: '',
                display: 'flex',
                margin: '16px 0 0 0',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ color: '#878787', margin: '0 5px 0 0' }}>
                Already have an account?
              </div>
              <a
                href="/login"
                onClick={() => navigate('/login')}
                style={{ color: '#949FFF' }}
              >
                Log in
              </a>
            </div>

            {/* <Button
              style={{
                border: "1px solid white",
                padding: "7px  100px 7px 100px",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button> */}
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Signup
