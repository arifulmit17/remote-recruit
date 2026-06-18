import React from 'react';
type BoxProps = {
    image: string;
    designation: string;
    name:string;
    textColor1?: string;
    textColor2?: string;

};

const Box = ({ image, designation, name, textColor1,textColor2 }: BoxProps) => {
  return (
    <div className="w-90 h-20 rounded-full flex gap-5 shadow-lg bg-white" >
      <div className="w-18 h-18 m-2 rounded-full border-amber-200 border-8">
        <img src={image} alt="" className="size-full rounded-full bg-contain" />
      </div>

      <div className="flex flex-col items-start justify-center gap-1">
        <h4 className={`${textColor1 ?? "text-[#0c2b80]"} font-semibold`}>
          {name}
        </h4>

        <p className={textColor2 ?? "text-[#2a1a3d]"}>
          {designation}
        </p>
      </div>
    </div>
  );
};

export default Box;