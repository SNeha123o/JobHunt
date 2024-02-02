import React from 'react';

const VoluntaryDisclosures = () => {
  return (
    <>
      <h1 className='mx-4 sm:mx-6 lg:mx-8 font-bold text-2xl'>Voluntary Disclosures</h1>
      <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
        <label className='flex'><span style={{ color: 'red', fontSize:'1.5rem'}}>*</span> Please select your veteran status :
          <select className='bg-gray-300 px-4 sm:px-7 py-2 sm:py-2 ml-2 sm:ml-52 w-full sm:w-64'>
            <option value="Select">Please Select</option>
            <option value="No">I am not a protected Veteran</option>
            <option value="Yes">I identify as one or more of the classification of protected veterans</option>
          </select>
        </label>
      </form>

      <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
        <label className='flex'><span style={{ color: 'red', fontSize:'1.5rem'}}>*</span>Please select your gender. :
          <select className='bg-gray-300 px-4 sm:px-7 py-2 sm:py-2 ml-2 sm:ml-64 w-full sm:w-64'>
            <option value="Select">Please Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </form>

      <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
        <label className='flex'><span style={{ color: 'red', fontSize:'1.5rem'}}>*</span>Please select your ethnicity :
          <select className='bg-gray-300 px-4 sm:px-7 py-2 sm:py-2 ml-2 sm:ml-60 w-full sm:w-64'>
            <option value="">Please select</option>
            <option value="asian">Asian</option>
            <option value="black">Black or African American</option>
            <option value="hispanic">Hispanic or Latino</option>
            <option value="white">White</option>
            <option value="native">Native American or American Indian</option>
            <option value="other">Other</option>
          </select>
        </label>
      </form>

      <h2 className='my-5 mx-4 sm:mx-6 lg:mx-8' style={{ fontSize:'20px'}}>Terms and Conditions</h2>
      <p className='mx-4 sm:mx-6 lg:mx-8' style={{ fontSize:'16px'}}>By checking the box below, you acknowledge you have read these Terms & Conditions</p>
      <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>  
        <label className='mx-4 sm:mx-6 lg:mx-8 my-5 '  >
          <input
            type='checkbox'
            style={{ transform: 'scale(1.5)' ,marginRight: '5px'}} 
          /><span style={{ color: 'red', fontSize:'1.5rem'}}>*</span>
          Check this box to confirm the statement above.
        </label>
      </form>
    </>
  );
};

export default VoluntaryDisclosures;
