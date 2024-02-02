import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Certificates from './Certificates.jsx'
import Skills from './Skills.jsx';
import Websites from './Wevsites.jsx';
import SocialMedia from './SocialMedia.jsx';

const MyExperience = () => {
  const [experiences, setExperiences] = useState([
    {
      jobTitle: "",
      company: "",
      location: "",
      from: null,
      to: null,
      role: "",
      isCurrentlyPursuing: false
    }
  ]);

  
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      field: "",
      from: null,
      to: null
    }
  ]);

  const handleCurrentlyPursuingChange = (index, e) => {
    const newExperiences = [...experiences];
    newExperiences[index].isCurrentlyPursuing = e.target.checked;
    if (e.target.checked) {
      newExperiences[index].to = null;
    }
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        jobTitle: "",
        company: "",
        location: "",
        from: null,
        to: null,
        role: "",
        isCurrentlyPursuing: false
      }
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        school: "",
        degree: "",
        field: "",
        from: null,
        to: null
      }
    ]);
  };

  return (
    <>
      <h1 className='font-bold text-3xl my-6' style={{ marginRight: '1000px', fontSize:'20px'}}>My Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index}>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex'>Job Title<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
              <input
                className='bg-gray-300  px-7 py-2 ml-64 w-64'
                type="text"
                value={experience.jobTitle}
                required
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].jobTitle = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
            </label>
          </form>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex' style={{ marginRigt: '100px'}}>Company<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
              <input
                className='bg-gray-300  px-7 py-2 ml-60 w-64'
                type="text"
                value={experience.company}
                required
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].company = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
            </label>
          </form>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex' style={{ marginRigt: '25px'}}>Location<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
              <input
                className='bg-gray-300  px-7 py-2 ml-60 w-64'
                type="text"
                value={experience.location}
                required
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].location = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
            </label>
          </form>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex' style={{ marginLeft: '8px'}}>From<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
              <DatePicker
                className='bg-gray-300  px-7 py-2 ml-64 w-64'
                selected={experience.from}
                onChange={(date) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].from = date;
                  setExperiences(newExperiences);
                }}
              />
            </label>
          </form>
          {!experience.isCurrentlyPursuing && (
            <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
              <label className='flex'  style={{ marginLeft: '25px'}}>To<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
                <DatePicker
                  className='bg-gray-300 py-2 ml-64 w-64'
                  selected={experience.to}
                  onChange={(date) => {
                    const newExperiences = [...experiences];
                    newExperiences[index].to = date;
                    setExperiences(newExperiences);
                  }}
                />
              </label>
            </form>
          )}
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex'>
              <input
                type="checkbox"
                style={{ transform: 'scale(1.5)' ,marginRight: '5px'}} 
                checked={experience.isCurrentlyPursuing}
                onChange={(e) => handleCurrentlyPursuingChange(index, e)}
              />
              I currently work here
            </label>
          </form>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex'>Role description:
              <input
                className='bg-gray-300  px-7 py-2 ml-40 w-96'
                type="text"
                value={experience.role}
                required
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].role = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
            </label>
          </form>
        </div>
      ))}
      <button className='text-blue-700' style={{ marginRight: '1000px', fontSize:'20px'}}  onClick={addExperience}>+Add Experience</button>

      <h2 className='font-bold text-3xl my-6' style={{ marginRight: '1000px', fontSize:'20px'}}>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex'>School<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
              <input
                className='bg-gray-300  px-7 py-2 ml-60 w-64'
                type="text"
                value={edu.school}
                required
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].school = e.target.value;
                  setEducation(newEducation);
                }}
              />
            </label>
          </form>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex'>Degree<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
            <select className='bg-gray-300  px-7 py-2 ml-60 w-64'>
         <option value="Select">Please Select</option>
         <option value="B.tech">B.tech</option>
         <option value="Bsc">Bsc.</option>
         <option value="BCA">BCA</option>
         <option value="BA">BA</option>
         <option value="Phd">Phd</option>
         <option value="Other">Other</option>
      </select>
            </label>
          </form>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex'>Field<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
            <select className='bg-gray-300  px-7 py-2 ml-64 w-64'>
         <option value="Select">PleaseSelect</option>
         <option value="ComputerScience">Computer Science</option>
         <option value="Engineering">Engineering</option>
         <option value="Business">Business Administration</option>
         <option value="Psychology">Psychology</option>
         <option value="Biology">Biology</option>
         <option value="Mathematics">Mathematics</option>
         <option value="Art">Art & Design</option>
         <option value="Medicine">Medicine</option>
         <option value="Other">Other</option>
      </select>
            </label>
          </form>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex'>From<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
              <DatePicker
                className='bg-gray-300  px-7 py-2 ml-64 w-64'
                selected={edu.from}
                onChange={(date) => {
                  const newEducation = [...education];
                  newEducation[index].from = date;
                  setEducation(newEducation);
                }}
              />
            </label>
          </form>
          <form className='mx-4 sm:mx-6 lg:mx-8 my-5'>
            <label className='flex' style={{ marginLeft: '25px'}}>To<span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
              <DatePicker
                className='bg-gray-300  px-7 py-2 ml-64 w-64'
                selected={edu.to}
                onChange={(date) => {
                  const newEducation = [...education];
                  newEducation[index].to = date;
                  setEducation(newEducation);
                }}
              />
            </label>
          </form>
        </div>
      ))}
      <button className='text-blue-700' style={{ marginRight: '1000px', fontSize:'20px'}} onClick={addEducation}>+ Add Education</button>
      <h1 className='font-bold text-3xl my-6' style={{ marginRight: '1000px', fontSize:'20px'}}>Certifications</h1>
      <Certificates />
      <h1 className='font-bold text-3xl my-6' style={{ marginRight: '1000px', fontSize:'20px'}}>Skills</h1>
      <Skills />
      <h1 className='font-bold text-3xl my-6' style={{ marginRight: '1000px', fontSize:'20px'}}>Websites</h1>
      <Websites />
      <h1 className='font-bold text-3xl my-6' style={{ marginRight: '1000px', fontSize:'20px'}}>Social Media URL</h1>
      <SocialMedia />
    </>
  );
}

export default MyExperience;
