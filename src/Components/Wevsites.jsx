import React, { useState } from 'react';

function WebsiteLinkUploader() {
  const [linkInput, setLinkInput] = useState(''); // State to track input value
  const [links, setLinks] = useState([]); // State to store uploaded links

  // Function to handle input change
  const handleInputChange = (event) => {
    setLinkInput(event.target.value);
  };

  // Function to handle adding a link
  const handleAddLink = () => {
    if (linkInput.trim() !== '') {
      setLinks([...links, linkInput.trim()]); // Add the link to the list
      setLinkInput(''); // Clear the input field
    }
  };

  return (
    <div>
      <div className="md:w-3/5 flex  md:gap-x-20">
      
        <input
       className="p-2 bg-gray-300 focus:outline-none w-3/5"
          type="text"
          value={linkInput}
          onChange={handleInputChange}
        />
        <button className='text-blue-700 ml-5' onClick={handleAddLink}>Upload Link</button>
      </div>
      <div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WebsiteLinkUploader;
