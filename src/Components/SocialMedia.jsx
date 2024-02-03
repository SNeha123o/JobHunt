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
      <div className=" md:gap-x-20">
      <button onClick={handleAddLinkedinUrl}>LinkedIn Profile URL</button>
        <input
          type="text"
          className="p-2 bg-gray-300 focus:outline-none w-3/5 my-5"
          value={linkedinInput}
          onChange={handleLinkedinInputChange}
        />
        
      </div>
      <div className=" md:gap-x-20">
      <button onClick={handleAddGithubUrl}>GitHub Profile URL</button>
        <input
          type="text"
          className="p-2 bg-gray-300 focus:outline-none w-3/5"
          value={githubInput}
          onChange={handleGithubInputChange}
        />

      </div>
    </div>
  );
}

export default ProfileUrlUploader;
