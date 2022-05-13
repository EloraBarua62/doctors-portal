import React from 'react';
// import clock from '../../assets/icons/clock.svg'

const Info = ({img ,title, color}) => {
    return (
        <div class={`card lg:card-side ${color} shadow-xl p-2`}>
            <figure>
                <img src={img} alt="Album" className='p-5'></img>
            </figure>
            <div class="card-body">
                <h2 class="card-title text-white">{title}</h2>
                <p className='text-white'>{`lorem10`}</p>
                
            </div>
        </div>
    );
};

export default Info;