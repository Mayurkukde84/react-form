import { Button, Input, Select } from "@material-tailwind/react";
import { useState } from "react";
const Education = () => {
  const [degrees, setDegrees] = useState([
    { institute: "", batch: "", countryType: "", degree: "" },
  ]);

  const startYear = 1990;
  const endYear = 2030;

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  console.log(years);

  const handleInputChange = (index, name, value) => {
    const newDegrees = [...degrees];
    newDegrees[index][name] = value;
    setDegrees(newDegrees);
  };
  const handleAddDegree = () => {
    setDegrees([
      ...degrees,
      { institute: "", batch: "", countryType: "", degree: "" },
    ]);
  };
  return (
    <>
      <p className="text-xl w-auto bg-gray-400 p-2 ">2.Education</p>
      <form className="flex flex-col justify-center space-y-8 p-5  mt-5">
        {degrees.map((degree, index) => (
          <div key={index} className="space-y-8">
            <div className="flex justify-center gap-10 items-center w-[35rem]">
              <p className="w-20">Institute</p>
              <Input label="Institute" />
            </div>
            <div className="flex gap-10 items-center w-[35rem]">
              <p className="w-20">Batch</p>
              <div className="flex  gap-[1.3rem] items-center">
                <select
                  id="yearSelect"
                  className="mt-1 p-2 border border-gray-700 rounded-md w-full overflow-x-auto"
                >
                  <option value="" disabled>
                    -- Select Year --
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                to
                <select
                  id="yearSelect"
                  className="mt-1 p-2 border border-gray-700 rounded-md w-full overflow-x-auto"
                >
                  <option value="" disabled>
                    -- Select Year --
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-10 items-center w-[35rem]">
              <p className="w-20">Course Type</p>
              <select className="mt-1 p-2 border border-gray-700 rounded-md w-full overflow-x-auto">
                <option>Select</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Online</option>
                <option>Bootcamp</option>
              </select>
            </div>
            <div className="flex gap-10 items-center w-[35rem]">
              <p className="w-20">Education Level</p>
              <select className="mt-1 p-2 border border-gray-700 rounded-md w-full overflow-x-auto">
                <option>Select</option>
                <option>10th</option>
                <option>12th</option>
                <option>POLYTECHNIC</option>
                <option>LLM/LLB</option>
                <option>B.Tech/B.E</option>
                <option>MBBS</option>
                <option>BSC</option>
                <option>BA</option>
                <option>B.COM</option>
                <option>BBA</option>
                <option>BCA</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        ))}
        <Button className="w-fit ml-[7rem]" onClick={handleAddDegree}>
          + Add 
        </Button>
      </form>

      <div className="flex justify-center mt-10 gap-5">
        <Button className="bg-indigo-600">Back </Button>
        <Button className="bg-indigo-600">Save & Next </Button>
      </div>
    </>
  );
};

export default Education;
