import React from 'react';
type HeadingProps = {
    heading: string;
};

const Heading = ({heading}:HeadingProps) => {
    return (
        <div className="w-30 h-10 rounded-full font-semibold text-black text-xs flex items-center justify-center text-center bg-[#C2EEFF]">
            <h4>{heading}</h4>
        </div>
    );
};

export default Heading;