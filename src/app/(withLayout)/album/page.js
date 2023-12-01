import Image from 'next/image';
import React from 'react';

const Album = () => {
    return (
        <div>
            <Image src={"https://i.ibb.co/k3jFX61/pexels-arnie-chou-1229042.jpg"} alt='img' width={500} height={500}/>
        </div>
    );
};

export default Album;