import React, { useState } from 'react'
import img from './me2.jpg'
import exampleFile from './resume.pdf' // Import the file
import ExtandedText from './ExtandedText'

const About = () => {
  const [Expand, setExpand] = useState('more')
  const [isVisible, setisVisible] = useState(false)
  const downloadFile = () => {
    // Create a new anchor element
    const link = document.createElement('a')
    link.href = exampleFile // Set the file's URL as the href
    link.download = 'resume.pdf' // Set the desired file name

    // Simulate a click to trigger the download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className='bg-black bg-img h-screen w-screen py-20 flex   items-center text-white '>
      <div className='bg-img h-screen w-screen fixed z-0'></div>

      <div className='h-5/6  flex  flex-col md:flex-row px-14 z-10 '>
        <img src={img} alt='' className='h-3/4 w-fit  rounded-xl my-8 ' />
        <div className='flex flex-col mx-8'>
          <h1 className='my-2 text-red-600 text-4xl font-bold'>About Us</h1>
          <p className='my-2 '>
            I am Muhammad Awais Qamar, a MERN Stack Developer with a Bachelor of
            Software Engineering degree from the University of Central Punjab,
            Lahore, where I graduated with a CGPA of 3.67 in July 2024. I have 8
            months of hands-on experience in MERN stack development, working
            with technologies like MongoDB, Express.js, React.js, Node.js, and
            MySQL.
            {isVisible && <ExtandedText />}
            <span
              className='text-red-500 whitespace-pre-line hover:cursor-pointer'
              id='expand'
              onClick={() => {
                setExpand(pre => {
                  if (pre === 'more') {
                    setisVisible(true)
                    return 'less'
                  } else {
                    setisVisible(false)
                    return 'more'
                  }
                })
              }}
            >
              {'\u00A0'}
              {Expand}
            </span>
          </p>
          <button
            onClick={downloadFile}
            className='my-5 bg-red-600 text-white rounded-2xl p-2 px-4 hover:bg-red-500 w-60  '
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
