import React from "react";

const VoluntaryDisclosures = () => {
  return (
    <>
      <h1 className="mx-4 sm:mx-6 lg:mx-8 font-bold text-2xl">
        Voluntary Disclosures
      </h1>
      <form className="mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
        <div className="flex text-sm md:w-3/5 md:flex md:gap-x-24">
          <label className="w-2/5">
            {" "}
            Please select your veteran status
            <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
          </label>
          <select className="p-2 bg-gray-300 focus:outline-none w-3/5">
            <option value="Select">Please Select</option>
            <option value="No">I am not a protected Veteran</option>
            <option value="Yes">
              I identify as one or more of the classification of protected
              veterans
            </option>
          </select>
        </div>

        <div className="flex text-sm md:w-3/5 md:flex md:gap-x-24">
          <label className="w-2/5">
            Please select your gender
            <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
          </label>
          <select className="p-2 bg-gray-300 focus:outline-none w-3/5">
            <option value="Select">Please Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex text-sm md:w-3/5 md:flex md:gap-x-24">
          <label className="w-2/5">
            Please select your ethnicity
            <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
          </label>
          <select className="p-2 bg-gray-300 focus:outline-none w-3/5">
            <option value="">Please select</option>
            <option value="asian">Asian</option>
            <option value="black">Black or African American</option>
            <option value="hispanic">Hispanic or Latino</option>
            <option value="white">White</option>
            <option value="native">Native American or American Indian</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
      <div >
        <h2 className="my-5 mx-4 sm:mx-6 lg:mx-8" stylclassName="flex flex-col items-start"e={{ fontSize: "20px" }}>
          Terms and Conditions
        </h2>
        <p className="mx-4 sm:mx-6 lg:mx-8" style={{ fontSize: "16px" }}>
          By checking the box below, you acknowledge you have read these Terms &
          Conditions
        </p>
        <div>
          <input
            type="checkbox"
            style={{ transform: "scale(1.5)", marginRight: "5px" }}
          />

          <label className="w-2/4">
            <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>Check
            this box to confirm the statement above.
          </label>
        </div>
      </div>
    </>
  );
};

export default VoluntaryDisclosures;
