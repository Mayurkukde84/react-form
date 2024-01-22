import { Input } from "@material-tailwind/react";
import { annualSalaryRanges } from "../../data/AnnualSalary";
import {Button} from "@material-tailwind/react";
const ProfessionalDetails = () => {

    

  const startYear = 1990;
  const endYear = 2030;

  const startMonth = 1;
  const endMonth = 12;

  const month = Array.from(
    { length: endMonth - startMonth + 1 },
    (_, index) => startMonth + index
  );

  const year = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  
  return (
    <>
      <p className="text-xl w-auto bg-gray-400 p-2 ">Personal Details</p>
      <form className="flex flex-col justify-center space-y-8 p-5  mt-5">
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p className="w-20">Designation</p>
          <Input label="Designation" />
        </div>
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p className="w-20">Organization</p>
          <Input label="Organization" />
        </div>
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p className="w-20">Salary</p>
          <select className="mt-1 p-2 w-full border border-gray-700 rounded-md overflow-x-auto">
            {annualSalaryRanges.map((experienceDuration, index) => {
              return <option key={index}>{experienceDuration}</option>;
            })}
          </select>
        </div>
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p>Time Peroid</p>
          <div className="w-full flex items-center gap-9">
            <select className="w-auto border border-blue-gray-700 rounded mt-1 p-2 overflow-x-auto">
              <option>MM</option>
              {month.map((monthdata, index) => {
                return <option key={index}>{monthdata}</option>;
              })}
            </select>
            <select className="w-auto border border-blue-gray-700 rounded mt-1 p-2 overflow-x-auto">
              <option>YYYY</option>
              {year.map((yearData, index) => {
                return <option key={index}>{yearData}</option>;
              })}
            </select>
            to
            <select className="w-auto border border-blue-gray-700 rounded mt-1 p-2 overflow-x-auto">
              <option>MM</option>
              {month.map((monthdata, index) => {
                return <option key={index}>{monthdata}</option>;
              })}
            </select>
            <select className="w-auto border border-blue-gray-700 rounded mt-1 p-2 overflow-x-auto">
              <option>YYYY</option>
              {year.map((yearData, index) => {
                return <option key={index}>{yearData}</option>;
              })}
            </select>
            

          </div>
    
        </div>
        <div className="flex justify-center">
        <Button className="w-fit   ">+Add</Button>

        </div>
      

        <div className="flex justify-center mt-10 gap-5">
        <Button className="bg-indigo-600">Back </Button>
        <Button className="bg-indigo-600">Save & Next </Button>
      </div>
      </form>
    </>
  );
};

export default ProfessionalDetails;
