import React from 'react';

const ApplyByLinkedInButton = () => {
  const handleApply = () => {
    // Redirect the user to the LinkedIn job posting or company page
    window.location.href = 'https://www.linkedin.com/company/aichefmaster/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BMip5G5OeT3qf2%2BXC%2FirNGg%3D%3D';
  };

  return (
    <button className='bg-blue-700 p-3 w-52 ml-3 mr-20 rounded text-white linkedin-button font-bold text-xl font-sans my-3' onClick={handleApply} >
      Apply by LinkedIn
    </button>
  );
};

export default ApplyByLinkedInButton;
