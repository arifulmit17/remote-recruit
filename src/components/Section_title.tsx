import React from 'react';

type Section_titleProps = {
    title?: string;
};

const Section_title = (props: Section_titleProps) => {
    return (
        <>
            <h4 className="text-3xl font-bold text-black">
                {props.title}
            </h4>
        </>
    );
};

export default Section_title;