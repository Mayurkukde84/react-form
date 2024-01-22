import { Button, Input } from "@material-tailwind/react";

const Certification = () => {
  const startYear = 1990;
  const endYear = 2030;

  const year = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  return (
    <>
      <p className="text-xl w-auto bg-gray-400 p-2 ">Certification</p>
      <form className="flex flex-col justify-center space-y-8 p-5  mt-5">
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p className="w-20">Course Certification</p>
          <Input label="Course" />
        </div>
        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p className="w-20">Institute</p>
          <Input label="Institute" />
        </div>
        <div className="flex justify-start gap-10 items-center w-[35rem]">
          <p className="w-20">Year</p>
          <div className="flex  gap-5">
            <select className="w-fit border border-gray-700 mt-1 p-2 rounded-md overflow-x-auto">
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
        <Button className="w-fit">+ADD</Button>
        <div className="flex justify-center">
        <Button className="bg-indigo-600">Save & Next </Button>
      </div>
      </form>
    </>
  );
};

export default Certification;
