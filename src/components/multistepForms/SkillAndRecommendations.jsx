import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
const SkillAndRecommendations = ({ setSkillsInputForm, skillsInputForm }) => {
  const [inputArrayName, setInputArrayName] = useState("");

  return (
    <>
      <p className="text-xl w-auto bg-gray-400 p-2 ">Skills</p>
<div className="flex justify-center flex-col ">
      <div  className="container mx-auto flex max-w-[35rem] mt-5">
        <Input
          type="text"
          label="Skills"
          value={inputArrayName}
          onChange={(e) => setInputArrayName(e.target.value)}
          className="w-[30rem]"
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            setSkillsInputForm([...skillsInputForm, inputArrayName]);
            setInputArrayName("");
          }}
          className="ml-3"
        >
          Add
        </Button>
      </div>
<div className="flex justify-center m-5">
      {skillsInputForm.map((item, index) => (
        <div key={index}>
          <div
            className="mt-1 ml-1  bg-gray-300 rounded-[0.7rem] inline-flex  w-fit p-0.5 text-sm "
            
          >
            <p className="p-1 ml-2 mr-2 ">{item}</p>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>
  );
};

export default SkillAndRecommendations;
