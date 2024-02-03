import React, { useState } from 'react';

function SkillInput() {
  const [inputValue, setInputValue] = useState('');
  const [skills, setSkills] = useState([]);

  // Function to handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle adding a skill
  const handleAddSkill = () => {
    if (inputValue.trim() !== '') {
      // Add the new skill to the skills list
      setSkills([...skills, inputValue.trim()]);

      // Clear the input field after adding the skill
      setInputValue('');
    }
  };

  // Function to handle removing a skill
  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div>
      <div className="md:w-3/5 flex md:gap-x-24">
        <input
         className="p-2 bg-gray-300 focus:outline-none w-3/5"
          type="text"
          value={inputValue}
          onChange={handleChange} 
        />
       <button className=' text-blue-700' onClick={handleAddSkill}>Add</button>
      </div>
      <div>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill}
              
              <button className='ml-5' onClick={() => handleRemoveSkill(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillInput;
