import React from 'react';

const ApplicationQuestions = () => {
  return (
    <>
      <h1 className="font-bold text-2xl" style={{ marginRight: '900px', fontSize: '20px' }}>
        Application Questions
      </h1>
      <form className="ml-2 my-5 lg:mr-5">
        <label>
          <span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>Are you of legal age to work in the country in which this position will be based? :
          <select className="bg-gray-300 my-5 px-7 py-2 lg:mr-3">
            <option value="Select">Please Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />
        </label>
      </form>
      <form className="lg:mr-5 my-5">
        <label>
          {' '}
          <span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>Have you been employed by AI Chefmaster in the past? :<br />
          <div className="my-2">
            <input type="radio" name="employee" value="employee" /> Employee
          </div>
          <div className="my-2">
            <input type="radio" name="employee" value="intern" /> Intern
          </div>
          <div className="my-2">
            <input type="radio" name="employee" value="new" /> I have not worked for AI Chefmaster in the past
          </div>
        </label>
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
