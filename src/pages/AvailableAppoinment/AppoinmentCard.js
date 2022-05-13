import React from 'react';

const AppoinmentCard = ({appoinment}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="card-title mx-auto">{appoinment.title}</h2>
                <p>{appoinment.time}</p>
                <p>{appoinment.description}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">Book Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentCard;