import React, { useState } from 'react';

function ProfileUrlUploader() {
  const [linkedinInput, setLinkedinInput] = useState(''); // State for LinkedIn profile URL
  const [githubInput, setGithubInput] = useState(''); // State for GitHub profile URL

  // Function to handle LinkedIn input change
  const handleLinkedinInputChange = (event) => {
    setLinkedinInput(event.target.value);
  };

  // Function to handle GitHub input change
  const handleGithubInputChange = (event) => {
    setGithubInput(event.target.value);
  };

  // Function to handle adding LinkedIn profile URL
  const handleAddLinkedinUrl = () => {
    if (linkedinInput.trim() !== '') {
      window.open(linkedinInput.trim(), '_blank'); // Open LinkedIn URL in a new tab
    }
  };

  // Function to handle adding GitHub profile URL
  const handleAddGithubUrl = () => {
    if (githubInput.trim() !== '') {
      window.open(githubInput.trim(), '_blank'); // Open GitHub URL in a new tab
    }
  };

  return (
    <div>
      <div>
      <button onClick={handleAddLinkedinUrl}>LinkedIn Profile URL</button>
        <input
          type="text"
          className='bg-gray-300  px-7 py-2 ml-12 w-64 my-5'
          value={linkedinInput}
          onChange={handleLinkedinInputChange}
        />
        
      </div>
      <div>
      <button onClick={handleAddGithubUrl}>GitHub Profile URL</button>
        <input
          type="text"
          className='bg-gray-300  px-7 py-2 ml-12 w-64'
          value={githubInput}
          onChange={handleGithubInputChange}
        />

      </div>
    </div>
  );
}

export default ProfileUrlUploader;
