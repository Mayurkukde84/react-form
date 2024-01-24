import { Button, Input, input } from "@material-tailwind/react";

const Certification = ({
  certificationInputForm,
  setCertificationInputForm,
}) => {
  const startYear = 1990;
  const endYear = 2030;

  const year = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const handleInputCertification = (index, name, value) => {
    const newformCertification = [...certificationInputForm];
    newformCertification[index][name] = value;
    setCertificationInputForm(newformCertification);
  };

  const handleAddCertification = () => {
    setCertificationInputForm([
      ...certificationInputForm,
      {
        courseCertifications: "",
        certificationInstitue: "",
        certificationFromYear: "",
        certificationToYear: "",
      },
    ]);
  };
  return (
    <>
      <p className="text-xl w-auto bg-gray-400 p-2 ">Certification</p>
      <form className="flex flex-col justify-center space-y-8 p-5  mt-5">
        {certificationInputForm.map((certificationInputForm, index) => (
          <div key={index} className="space-y-8">
            {index > 0 && <hr className="w-auto border-t-2 border-gray-500" />}{" "}
            <div className="flex justify-center gap-10 items-center w-[35rem]"></div>
            <div className="flex justify-center gap-10 items-center w-[35rem]">
              <p className="w-20">Course Certification</p>
              <Input
                label="Course"
                name="courseCertifications"
                onChange={(e) =>
                  handleInputCertification(
                    index,
                    "courseCertifications",
                    e.target.value
                  )
                }
                value={certificationInputForm.courseCertifications}
              />
            </div>
            <div className="flex justify-center gap-10 items-center w-[35rem]">
              <p className="w-20">Institute</p>
              <Input
                label="Institute"
                name="certificationInstitue"
                onChange={(e) => handleInputCertification(index,'certificationInstitue',e.target.value)}
                value={certificationInputForm.certificationInstitue}
              />
            </div>
            <div className="flex justify-start gap-10 items-center w-[35rem]">
              <p className="w-20">Year</p>
              <div className="flex  gap-5">
                <select
                  name="certificationFromYear"
                  onChange={(e) =>
                    handleInputCertification(
                      index,
                      "certificationFromYear",
                      e.target.value
                    )
                  }
                  className="w-fit border border-gray-700 mt-1 p-2 rounded-md overflow-x-auto"
                >
                  <option>From</option>
                  {year.map((yearData, index) => {
                    return <option key={index}>{yearData}</option>;
                  })}
                </select>

                <select className="w-fit border border-gray-700 mt-1 p-2 rounded-md overflow-x-auto">
                  <option>To</option>
                  {year.map((yearData, index) => {
                    return <option key={index}>{yearData}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        ))}
        <Button className="w-fit" onClick={handleAddCertification}>
          +ADD
        </Button>
      </form>
    </>
  );
};

export default Certification;
