import React from 'react'

const styleAbout = {
  background: 'linear-gradient(90deg, rgba(0,9,36,1) 0%, rgba(9,86,121,1) 35%, rgba(0,91,255,1) 100%)',
  padding:'40px 10px',
  color:'#fff',
  textAlign: 'center'
}

const About = () => {
  return (
    <div style={styleAbout}>
      <h3 className='text-4xl font-bold'>About Page</h3>
    </div>
  )
}

export default About
