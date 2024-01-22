import { Button, Textarea } from "@material-tailwind/react";
const Resume = () => {
  return (
    <>
      <p className="text-xl w-auto bg-gray-400 p-2 ">Resume Details</p>
      <form className="flex flex-col justify-center space-y-8   mt-5">
        <div className="flex  gap-10 items-center w-[35rem] justify-between">
          <p className="w-20">Attach Resume</p>
          <input type="file" accept="application/pdf" />
        </div>

        <div className="flex justify-center gap-10 items-center w-[35rem]">
          <p className="w-20">Cover Letter</p>
          <Textarea />
        </div>
        <div className="flex justify-center">
        <Button className="bg-indigo-600">Save & Next </Button>
      </div>
      </form>
    </>
  );
};

export default Resume;
