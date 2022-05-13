import React from 'react';

const Test = ({ test }) => {
    return (
        <div class="card lg:w-max-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{test.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, magni?</p>
                {/* <img src={test.img} alt="" className='w-20 h-20 border-2 border-primary p-1 rounded-full' /> */}

                <div className='flex  items-center'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img src={test.img} />
                        </div>

                    </div>
                    <div >
                        <h1 className='text-2xl text-accent'>Person name</h1>
                        <h1 className='text-lg'>location</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;