import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'
import './detect.css'
import dected from '../images/person.png'

// command to run
// python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000

const Detect = (props) => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [detected, setDetected] = useState()
  const [semantic, setSemantic] = useState()
  const [toolslist, setTools] = useState()
  const [processing1, setProcessing1] = useState(false)
  const [processing2, setProcessing2] = useState(false)

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setDetected()
    setSemantic()
    console.log(e.target.files)
    setSelectedFile(e.target.files[0])
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    console.log(selectedFile)
    const objectUrl = URL.createObjectURL(selectedFile)
    console.log(objectUrl)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  async function detect() {
    console.log(selectedFile)
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    }
    let formData = new FormData()
    formData.append('file', selectedFile)

    axios
      .post('http://localhost:8000/object-to-img', formData, config)
      .then((res) => {
        setProcessing1(true)
        setTools(res.data.result)
        var encode_image = JSON.parse(res.data.img.body)['image']
        var image = new Image()
        image.src = 'data:image/png;base64,' + encode_image
        console.log(typeof image)
        setDetected('data:image/png;base64,' + encode_image)
        setProcessing1(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div
      style={{
        border: '',
        minWidth: '98.9vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#E6E9FF',
      }}
    >
      <div
        className="detect"
        style={{
          width: '1300px',
          height: 'auto',
          margin: '30px 0 20px 0',
          border: '3px solid #BB7FFF',
          borderRadius: '3px',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.75)',
        }}
      >
        <div
          style={{
            border: '5px solid white',
          }}
        >
          <div
            style={{
              color: 'black',
              width: '1150px',
              margin: '0 0 40px 0',
              border: '1px solid white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="header"
              style={{
                border: '2px solid white',
                width: '900px',
                fontSize: '60px',
                padding: '0 0 0 0',
                margin: '30px 80px 0 250px',
                textAlign: 'center',
              }}
            >
              WELCOME, {props.details.user.firstname}
            </div>
            <div style={{ border: '3px solid white', margin: '0 0 0 10px' }}>
              <Button
                onClick={() => props.details.setLoginUser({})}
                style={{
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '20px',
                  backgroundColor: '#4A4A4A',
                  padding: '11px 20px 10px 20px',
                  margin: '0 0 0 0',
                  float: 'right',
                  fontSize: '15px',
                }}
                className="logoutBtn"
              >
                Logout
              </Button>
            </div>
          </div>
          <div
            style={{
              border: '1px solid white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: '#BB7FFF',
                border: '1px solid white',
                width: '800px',
                height: '300px',
                margin: '30px 0 30px 0',
                fontSize: '30px',
                display: 'flex',
                padding: '10px 0 10px 0',
                borderRadius: '40px',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: 'white',
              }}
              className="steps"
            >
              <div style={{ fontWeight: '700' }}>How to use?</div>
              <div style={{ fontStyle: 'bold' }}>
                Step-1: Sign-in or Sign-up to Road Detection project
              </div>
              <div>Step-2: Upload your image</div>
              <div>Step-3: It'll be detected by self-trained AI</div>
            </div>
          </div>
          {/* asdasd 
          
          
          
          
          
          */}
          <div
            style={{
              border: '5px solid white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="forBOX"
              style={{
                width: '1000px',
                border: '3px solid white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  border: '1px solid white',
                  width: '1000px',
                }}
              >
                <div className="homepage" style={{}}>
                  <input
                    type="file"
                    onChange={onSelectFile}
                    style={{
                      width: '300px',
                      color: 'black',
                    }}
                  />{' '}
                  <br />
                  <br />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {selectedFile && (
                      <img
                        src={preview}
                        style={{
                          maxWidth: '800px',
                          maxHeight: '600px',
                          border: '',
                          boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.75)',
                        }}
                        alt="image1"
                      />
                    )}
                  </div>
                  <br /> <br />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={detect}
                      style={{
                        color: 'white',
                        backgroundColor: '#4A4A4A',
                        borderRadius: '20px',
                        padding: '10px 55px 10px 55px',
                        margin: '-20px 0 -20px 0',
                      }}
                    >
                      Detect Image
                    </Button>
                  </div>
                  <br />
                  <br />
                </div>
              </Box>
            </div>

            {processing1 && processing2 ? (
              <h1>Processing image....!</h1>
            ) : (
              <div
                style={{
                  color: 'black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  border: '3px solid white',
                }}
              >
                {detected && (
                  <div
                    style={{
                      float: 'left',
                      border: '1px solid white',
                      width: '1000px',
                      fontSize: '36px',
                      margin: '20px 0 20px 0',
                      padding: '0 0 0 0',
                    }}
                    className="bounding"
                  >
                    Bounding Box:{' '}
                  </div>
                )}
                <Grid
                  style={{
                    padding: '10px 0 20px 0',
                    border: '2px solid white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                >
                  <Grid
                    style={{
                      border: '2px solid white',
                      margin: '10px 0 10px 0',
                    }}
                  >
                    <div>
                      {detected && (
                        <img
                          src={detected}
                          style={{
                            maxWidth: '750px',
                            maxHeight: '600px',
                            boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.75)',
                          }}
                          alt="image2"
                        />
                      )}
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: '0 0 0 10px',
                      border: '2px solid white',
                      margin: '0 0 320px 10px',
                    }}
                  >
                    <div style={{ border: '' }}>
                      {detected && (
                        <div style={{ fontSize: '30px' }} className="detected">
                          Detected Class:{' '}
                        </div>
                      )}
                      {detected && (
                        <div style={{ fontSize: '30px' }}>
                          {toolslist.length > 0 &&
                            toolslist.map((item) => (
                              <div
                                key={item}
                                style={{
                                  border: '1px solid white',
                                  display: 'flex',
                                  flexDirection: 'row',
                                }}
                              >
                                <img src={dected}></img>
                                <div
                                  className="nameofPerson"
                                  style={{
                                    border: '1px solid white',
                                    margin: '5px 0 0 10px',
                                  }}
                                >
                                  {item}
                                </div>{' '}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detect
