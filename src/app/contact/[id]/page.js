import React from 'react';

const Dymanic = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
         this a Dymanic {params.id}
        </div>
    );
};

export default Dymanic;