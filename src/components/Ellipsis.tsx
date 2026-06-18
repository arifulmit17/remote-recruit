import React from 'react';

type EllipsisProps = {
  image?: string;
  size: string;
  sectionNo: string;
};

const Ellipsis = ({ image,size, sectionNo }: EllipsisProps) => {
    return (
        <div className={`w-${size} h-${size} flex items-center justify-center rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85]`}>
            {sectionNo === "1" && (
                <img className="w-1/2 h-1/2 object-contain"  src={image} alt="" />
            )}
            {sectionNo === "2" && (
                <img className="w-1/2 h-1/2 object-contain"  src={image} alt="" />
            )}
            {sectionNo === "3" && (
                <img className="w-10/12 h-10/12 rounded-full object-cover"  src={image} alt="" />
            )}
        </div>
    );
};

export default Ellipsis;