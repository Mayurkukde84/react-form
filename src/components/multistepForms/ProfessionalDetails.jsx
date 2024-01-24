import { Input } from "@material-tailwind/react";
import { annualSalaryRanges } from "../../data/AnnualSalary";
import { Button } from "@material-tailwind/react";
const ProfessionalDetails = ({
  professionalDetails,
  setProfessionalDetails,
}) => {

  const handleInputChange = (index,name,value)=>{
const newformPersonalDetails = [...professionalDetails]
newformPersonalDetails[index][name] = value;
setProfessionalDetails(newformPersonalDetails)
  }

  const handleAddPersonalDetails = ()=>{
    setProfessionalDetails([
      ...professionalDetails,
      {designation:"",organization:"", salary:"",fromDateProfessionalDetails:"",toFromDateProfessionalDetails:""}
    ])
  }

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
        {
          professionalDetails.map((professionalDetails,index)=>(

         <div key={index} className="space-y-8">
         {index > 0 && <hr className="w-auto border-t-2 border-gray-500" />}            <div className="flex justify-center gap-10 items-center w-[35rem]"></div>
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p className="w-20">Designation</p>
          <Input label="Designation" name="designation" onChange={(e)=>handleInputChange(index,'designation',e.target.value)} value={professionalDetails.designation} />
        </div>
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p className="w-20">Organization</p>
          <Input label="Organization" name="organization" onChange={(e)=>handleInputChange(index,'organization',e.target.value)} value={professionalDetails.organization} />
        </div>
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p className="w-20">Salary</p>
          <select name="salary" onChange={(e)=>handleInputChange(index,'salary',e.target.value)} value={professionalDetails.salary} className="mt-1 p-2 w-full border border-gray-700 rounded-md overflow-x-auto">
            {annualSalaryRanges.map((experienceDuration, index) => {
              return <option key={index}>{experienceDuration}</option>;
            })}
          </select>
        </div>
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p>Time Peroid</p>
          <div className="w-full flex items-center gap-9">
            <select onChange={(e)=>handleInputChange(index,'fromDateProfessionalDetails',e.target.value)} name="fromDateProfessionalDetails" value={professionalDetails.fromDateProfessionalDetails} className="w-auto border border-blue-gray-700 rounded mt-1 p-2 overflow-x-auto">
              <option>MM</option>
              {month.map((monthdata, index) => {
                return <option key={index}>{monthdata}</option>;
              })}
            </select>
            <select name="fromMonthProfessionalDetails" onChange={(e)=>handleInputChange(index,'fromMonthProfessionalDetails',e.target.value)} value={professionalDetails.toFromMonthProfessionalDetailsProfessionalDetails} className="w-auto border border-blue-gray-700 rounded mt-1 p-2 overflow-x-auto">
              <option>YYYY</option>
              {year.map((yearData, index) => {
                return <option key={index}>{yearData}</option>;
              })}
            </select>
            to
            <select name="toFromDateProfessionalDetails" onChange={(e)=>handleInputChange(index,'toFromDateProfessionalDetails',e.target.value)} value={professionalDetails.toFromDateProfessionalDetails} className="w-auto border border-blue-gray-700 rounded mt-1 p-2 overflow-x-auto">
              <option>MM</option>
              {month.map((monthdata, index) => {
                return <option key={index}>{monthdata}</option>;
              })}
            </select>
            <select name="toFromMonthProfessionalDetails" onChange={(e)=>handleInputChange(index,'toFromMonthProfessionalDetails',e.target.value)} value={professionalDetails.toFromMonthProfessionalDetails} className="w-auto border border-blue-gray-700 rounded mt-1 p-2 overflow-x-auto">
              <option>YYYY</option>
              {year.map((yearData, index) => {
                return <option key={index}>{yearData}</option>;
              })}
            </select>
          </div>
        </div>
        </div>
        ))
        }
        <div className="flex justify-center">
          <Button className="w-fit   " onClick={handleAddPersonalDetails} >+Add</Button>
        </div>

        <div className="flex justify-center mt-10 gap-5"></div>
      </form>
    </>
  );
};

export default ProfessionalDetails;
