import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Test from './Test';

const TestimonialCard = () => {

    const tests = [
        { id: 1, title: 'aijewmcpjar', description: 'lorem10', img: people1 },
        { id: 2, title: 'aiwr3jpolcpodfa', description: 'lorem10', img: people2 },
        { id: 3, title: 'far9uxcm09wkr', description: 'lorem10', img: people3 }
    ];
    return (
        <section className='px-12 py-12'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-primary font-bold'>Testimonial</h1>
                    <h1 className='text-3xl capitalize'>What our patients says</h1>
                </div>
                <img src={quote} alt="" className='w-40 lg:w-48'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tests.map(test => <Test
                        key={test.id}
                        test={test}
                    ></Test>)
                }
            </div>
        </section>
    );
};

export default TestimonialCard;