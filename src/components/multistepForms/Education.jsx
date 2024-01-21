import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
const Education = () => {
  const [degrees, setDegrees] = useState([
    { institute: "", batch: "", countryType: "", degree: "" },
  ]);

  const handleInputChange = (index, name, value) => {
    const newDegrees = [...degrees];
    newDegrees[index][name] = value;
    setDegrees(newDegrees);
  };
  const handleAddDegree = () => {
    setDegrees([...degrees, { institute: '', batch: '', countryType: '', degree: '' }]);
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
              <Input label="Batch" />
            </div>
            <div className="flex gap-10 items-center w-[35rem]">
              <p className="w-20">Country Type</p>
              <Input label="Country Type" />
            </div>
            <div className="flex gap-10 items-center w-[35rem]">
              <p className="w-20">Degree</p>
              <Input label="Degree" />
            </div>
          </div>
        ))}
        <Button className="w-fit ml-[7rem]" onClick={handleAddDegree}>+ Add Degree</Button>
      </form>

      <div className="flex justify-center mt-10 gap-5">
        <Button className="bg-indigo-600">Back </Button>
        <Button className="bg-indigo-600">Save & Next </Button>
      </div>
    </>
  );
};

export default Education;
