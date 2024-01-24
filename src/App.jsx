import { useState } from "react";

import SkillAndRecommendations from "./components/multistepForms/SkillAndRecommendations";
import PersonalDetails from "./components/multistepForms/PersonalDetails";
import Education from "./components/multistepForms/Education";
import ProfessionalDetails from "./components/multistepForms/ProfessionalDetails";
import Resume from "./components/multistepForms/Resume";
import Certification from "./components/multistepForms/Certification";
import AdditionalInformation from "./components/multistepForms/AdditionalInformation";
import { Button } from "@material-tailwind/react";
import { Stepper, Step } from "@material-tailwind/react";
import { format } from "date-fns";

const App = () => {
  const [step, setStep] = useState(0);
  const [birthDate, setBirthDate] = useState();
  const [formPersonalDetails, setFormPersonalDetails] = useState({
    profilePicture: null,
    name: "",
    gender: "",
    dateOfBirth: "",
    currentLocation: "",
    preferredLocation: "",
    phone: "",
    industry: "",
    functionalArea: "",
    noticePeriod: "",
    experience: "",
    annualSalary: "",
    expectedSalary: "",
  });

  const [degrees, setDegrees] = useState([
    { institute: "", frombatch: "", tobatch: "", countryType: "", degree: "" },
  ]);

  const [professionalDetails , setProfessionalDetails ] = useState([{
    designation:"",organization:"", salary:"",fromDateProfessionalDetails:"",fromMonthProfessionalDetails:"",toFromDateProfessionalDetails:"",toFromMonthProfessionalDetails:""
  }])

  const [certificationInputForm,setCertificationInputForm] = useState([{
    courseCertifications:"",certificationInstitue:"",certificationFromYear:"",certificationToYear:""
  }])

  const [skillsInputForm,setSkillsInputForm] = useState([])

  console.log(professionalDetails)

  console.log(degrees);
  const dateResult = birthDate ? format(birthDate, "MM-dd-yy") : null;
  console.log(dateResult);

  const personalDetails = () => {
    console.log(formPersonalDetails);
    console.log("click");
  };

  const educationDetails = () => {
    console.log(degrees);
  };
  const ProfessionalDetailsHandle = () => {
    console.log(professionalDetails);
  };

  const certificationHandle = ()=>{
    console.log(certificationInputForm)
  }

  const NextStep = () => {
    if (step >= 5) return;
    if (step === 0) {
      personalDetails();
    }
    if (step === 1) {
      educationDetails();
    }
    if (step === 2) {
      ProfessionalDetailsHandle();
    }
    if(step === 4){
certificationHandle()
    }
    setStep((prev) => prev + 1);
  };

  const BackStep = () => {
    if (step <= 0) return;
    setStep((prev) => prev - 1);
  };
  console.log(formPersonalDetails);

  return (
    <>
      <div className="w-full py-4 px-8  ">
        <Stepper activeStep={step}>
          <Step
            onClick={() => setStep(0)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Personal Details</p>
          </Step>
          <Step
            onClick={() => setStep(1)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Education</p>
          </Step>
          <Step
            onClick={() => setStep(2)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Professional Details</p>
          </Step>
          <Step
            onClick={() => setStep(3)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Resume</p>
          </Step>
          <Step
            onClick={() => setStep(4)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Certification</p>
          </Step>
          <Step
            onClick={() => setStep(5)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Skill And Recommendations</p>
          </Step>
          {/* <Step
            onClick={() => setStep(1)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Additional Information</p>
          </Step> */}
        </Stepper>
      </div>
      {step == 0 && (
        <PersonalDetails
          formPersonalDetails={formPersonalDetails}
          setFormPersonalDetails={setFormPersonalDetails}
          dateOfBirth={birthDate}
          setBirthDate={setBirthDate}
        />
      )}
      {step == 1 && <Education degrees={degrees} setDegrees={setDegrees} />}
      {step == 2 && <ProfessionalDetails professionalDetails={professionalDetails} setProfessionalDetails={setProfessionalDetails} />}
      {step == 3 && <Resume />}
      {step == 4 && <Certification certificationInputForm={certificationInputForm} setCertificationInputForm={setCertificationInputForm} />}
      {step == 5 && <SkillAndRecommendations skillsInputForm={skillsInputForm} setSkillsInputForm={setSkillsInputForm} />}
      {/* {step == 6 && <AdditionalInformation />} */}
      {/* {CurrentStepComponent && (
        <CurrentStepComponent
          formPersonalDetails={formPersonalDetails}
          setFormPersonalDetails={setFormPersonalDetails}
          dateOfBirth = {birthDate}
          setBirthDate = {setBirthDate}
        />
      )} */}

      <div className="flex gap-2 justify-center">
        <Button
          onClick={BackStep}
          disabled={step == 0}
          className=" bg-indigo-800"
        >
          Back
        </Button>
        <Button onClick={NextStep} className=" bg-indigo-800">
          Next
        </Button>
      </div>
    </>
  );
};

export default App;
