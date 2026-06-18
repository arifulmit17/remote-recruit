import React from 'react';

type EllipsisProps = {
  image?: string;
  size: string;
};

const Ellipsis = ({ image,size }: EllipsisProps) => {
    return (
        <div className={`w-${size} h-${size} flex items-center justify-center rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85]`}>
            <img className="w-1/2 h-1/2object-contain"  src={image} alt="" />
            
        </div>
    );
};

export default Ellipsis;