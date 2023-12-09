import { BiTask } from "react-icons/bi";

const Card = () => {
  return (
    <div className="relative w-60 h-72 rounded-[20px] bg-zinc-900/90 p-5 overflow-hidden">
      <BiTask color="white" size={"24px"} />
      <p className=" mt-5 font-semibold leading-tight text-slate-200 text-sm ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
      <div className="footer absolute bottom-0 bg-sky-200 w-full h-20 left-0">

      </div>
    </div>
  );
};

export default Card;
