import "react";

const DottedButton = () => {
  return (
    <div className="p-2 ">
      <button className="rounded-2xl border-2 border-dashed border-white  px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Hover me
      </button>
    </div>
  );
};

export default DottedButton;