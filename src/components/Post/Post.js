import React,{useState} from 'react'
import './Post.css';
import Navbar from '../Navbar/Navbar.js'
const post = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files;
    setSelectedFiles([...selectedFiles, file]);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className='post-cont'>
        <h2>Create a Listing</h2>
        <div className="flex-cont">
          <div className="left-content">
            <div >
              <input className='post-inp' type="text" placeholder='Name' />
            </div>
            <div>
              <textarea className="post-inp" rows="5" cols="47" placeholder='Description'></textarea>
            </div>
            <div >
              <input className="post-inp" type="text" placeholder='Address' />
            </div>
            <div className="post-select">
              <div className='num'>
                <input type="number" id="beds" />
                <label htmlFor="beds">Beds</label>
              </div>
              <div className='num'>
                <input type="number" id="bathrooms" />
                <label htmlFor="bathrooms">Bathrooms</label>
              </div>
            </div>
            <div className="num">
              <input type="number" id="price" />
              <label htmlFor="price">Price</label>
            </div>
          </div>
          <div className="right-content">
            <p className='right-heading'><b>images:</b>(max 6)</p>
            <div className="file">
              <div>
                <input type="file" id="post-file" multiple />
                <label htmlFor="post-file"></label>
              </div>
              <div>
                <button id='up-btn' onClick={handleFileChange}>Upload</button>
              </div>
            </div>
            <div>
              {selectedFiles.length > 0 && (
                <div id="selected-files">
                  <p>Selected files:</p>
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default post
