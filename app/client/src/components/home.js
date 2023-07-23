import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/home1.jpeg'
import './home.css'
import Button from 'react-bootstrap/esm/Button'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        border: '',
        width: '100vw',
        height: '99.5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E9FF',
      }}
    >
      <div
        style={{
          border: '',
          minWidth: '1000px',
          minHeight: '650px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          boxShadow: '0px 10px 30px 1px rgba(0, 0, 0, 0.75)',
        }}
      >
        <img
          src={logo}
          style={{
            width: '500px',
            height: '650px',
            border: '1px solid purple',
          }}
        ></img>
        <form
          style={{
            width: '500px',
            height: '650px',
            border: '1px solid purple',
            color: 'black',
          }}
        >
          <div style={{ border: '3px solid white', margin: '50px 0 0 0' }}>
            <div
              style={{
                fontSize: '32px',
                textAlign: 'center',
                color: '#444444',
                border: '3px solid white',
              }}
              className="elecText1"
            >
              Road Gaurdian
            </div>
            <div
              style={{
                fontSize: '25px',
                textAlign: 'center',
                fontWeight: '700',
                color: '#878787',
                margin: '55px 0 0 0',
                border: '3px solid white',
              }}
              className="welcomeText"
            >
              Road Detection at its finest!
            </div>
          </div>
          <div
            style={{
              fontSize: '20px',
              textAlign: 'center',
              border: '3px solid white',
              margin: '10px 0 0 0',
            }}
            className="welcomeText"
          >
            What Would you like to?
          </div>
          <div
            style={{
              display: 'flex',
              justifyContentL: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              margin: '25px 0 0 0',
              border: '3px solid white',
            }}
          >
            <Button
              onClick={() => navigate('/login')}
              style={{
                padding: '10px 55px 10px 55px',
                border: '1px solid transparent',
                color: 'white',
                backgroundColor: '#4A4A4A',
                borderRadius: '20px',
                margin: '0 0 20px 0',
                fontSize: '17px',
              }}
              className="homebtn"
            >
              Sign in
            </Button>
            <Button
              onClick={() => navigate('/signup')}
              style={{
                border: '1px solid transparent',
                padding: '10px 50px 10px 50px',
                color: 'white',
                backgroundColor: '#4A4A4A',
                borderRadius: '20px',
                fontSize: '17px',
              }}
              className="homebtn"
            >
              Sign up
            </Button>
            <div style={{ margin: '10px 0 0 0' }}>
              _______________________________________________________
            </div>
            <div
              style={{
                border: '',
                width: '440px',
                margin: '30px 0 0 0',
                fontSize: '20px',
              }}
              className="steps"
            >
              <div style={{ fontWeight: '700' }}>How to use?</div>
              <div style={{}}>
                Step-1: Sign-in or Sign-up to Road Detection project
              </div>
              <div>Step-2: Upload your image</div>
              <div>Step-3: It'll be detected by self-trained AI</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
