import React from 'react';
import { useParams } from 'react-router-dom';
import { homeposts } from './Home';

function Singlehome() {
    const { id } = useParams();
    const singlecard = homeposts.find((singlecard) => singlecard.id === Number(id));

    if (!singlecard) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h2>{singlecard.title}</h2>
            <img src={singlecard.image} alt={singlecard.title} />
            <p>{singlecard.content}</p>
        </div>
    );
}

export default Singlehome;
