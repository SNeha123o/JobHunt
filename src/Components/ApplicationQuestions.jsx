import React from 'react';

const ApplicationQuestions = () => {
  return (
    <>
      <h1 className="font-bold text-2xl" style={{ marginRight: '900px', fontSize: '20px' }}>
        Application Questions
      </h1>
      <form className="mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
      <div className="md:w-3/5 text-sm flex md:gap-x-24">
      <label className="w-4/5">Are you of legal age to work in the country in which this position will be based? :<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                  <select type="text" className="p-2 bg-gray-300 focus:outline-none w-2/5">
                  <option value="Select">Please Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>    
        </div>
        <div className="flex flex-col items-start"><form className="lg:mr-5 my-5">
        <label >
          {' '}
          <span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>Have you been employed by AI Chefmaster in the past? :<br />
          <div className="my-2 flex flex-col">
            <div><input type="radio" name="employee" value="employee" /> Employee</div>
            <div><input type="radio" name="employee" value="intern" /> Intern</div>
            <div><input type="radio" name="employee" value="new" /> I have not worked for AI Chefmaster in the past</div>
            
          </div>
          
        </label>
      </form></div>
      </form>
      
      <form className="lg:mr-5 my-5">
        <label>
          <span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>Will you now or in the future require sponsorship for employment visa status (e.g., H-1B visa status, spouse visa, etc)? :
          <select className="bg-gray-300 my-2 px-7 py-2 ml-16 lg:ml-0">
            <option value="Select">Please Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Other">Other</option>
          </select>
          <br />
        </label>
      </form>
    </>
  );
};

export default ApplicationQuestions;
