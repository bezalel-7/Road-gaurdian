import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import back1 from '../images/back3.png'
import { TextField } from '@mui/material'
import './login.css'

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const login = () => {
    axios
      .post('http://localhost:3001/login', user)
      // axios.post("http://43.206.117.90:5000/login", user)
      .then((res) => {
        // alert(res.data.message)
        setLoginUser(res.data.user)
        if (res.data.user) {
          navigate('/detect')
        } else {
          alert('User Not Found!')
        }
      })
  }

  return (
    <div
      className="mainborderpage"
      style={{
        border: '',
        height: '99vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E9FF',

        padding: '30px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          minWidth: '1000px',
          minHeight: '650px',
          borderRadius: '4px',
          boxShadow: '0px 10px 30px 1px rgba(0, 0, 0, 0.75)',
        }}
      >
        <img
          src={back1}
          alt="backGround1"
          style={{
            width: '500px',
            position: 'relative',
            height: 'auto',
            float: 'left',
          }}
        />

        <Form
          style={{
            borderRadius: '',
            padding: '20px',
            color: 'black',
            height: '650px',
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            float: 'right',
            border: '2px solid white',
            backgroundColor: 'white',
          }}
        >
          <div
            style={{
              fontWeight: '700',
              fontSize: '32px',
              margin: '40px 0 80px 0',
              textAlign: 'center',
              color: '#444444',
            }}
            className="elecText2"
          >
            Road Gaurdian
          </div>
          <div
            style={{
              border: '',
              margin: '0 0 30px 0',
            }}
          >
            <div
              style={{
                fontSize: '25px',
                textAlign: 'center',
                fontWeight: '700',
                color: '#878787',
              }}
              className="loginText"
            >
              Welcome to Road Gaurdian
            </div>
          </div>
          <Row
            style={{
              padding: '10px 50px 20px 50px',
              margin: '10px 0 0 0',
              border: '',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                border: '',
                width: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Form.Group
                style={{
                  width: '300px',
                  margin: '0 0 10px 0',
                  textAlign: 'center',
                }}
              >
                <TextField
                  id="standard-basic"
                  color="secondary"
                  label="Username"
                  variant="standard"
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  style={{ width: '300px' }}
                />
              </Form.Group>

              <Form.Group style={{ textAlign: 'center' }}>
                <TextField
                  id="standard-basic"
                  color="secondary"
                  label="Password"
                  variant="standard"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  style={{ width: '300px' }}
                />
                <div
                  style={{
                    float: 'right',
                    fontSize: '12.5px',
                    margin: '5px 16px 0 0',
                    color: '#949FFF ',
                  }}
                >
                  Forgot password?
                </div>
              </Form.Group>
            </div>
            <div
              style={{
                width: '400px',
                margin: '30px 0 0 0',
                border: '',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                style={{
                  padding: '10px 55px 10px 55px',
                  border: '1px solid #999',
                  borderRadius: '20px',
                  backgroundColor: '#4A4A4A',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '18px',
                }}
                variant="contained"
                onClick={login}
                className="signIn"
              >
                Sign in
              </Button>
            </div>
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
            {/* <Button
                style={{
                  padding: "10px 55px 10px 55px",
                  border: "1px solid #999",
                  float: "right",
                }}
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Button> */}
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
                New here?
              </div>
              <a
                href="#"
                onClick={() => navigate('/signup')}
                style={{ color: '#949FFF' }}
              >
                Create an account
              </a>
            </div>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default Login
