import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex items-center justify-center mt-5'>
            <div class="bg-base-200 py-5">
                <h2 className="text-3xl text-primary text-center font-bold">Mehedi Hassan</h2>

                <div className='px-10 mt-5'>
                    <p className="text-"><span className='font-bold'>Email:</span> anantojibon6544@gmail.com</p>
                    <p className="text-"><span className='font-bold'>Educational Background:</span> Studying In Bsc.</p>
                    <p className="text-"><span className='font-bold'>Technologies I have in Web Development:</span>
                        <ul>
                            <li>1. HTML</li>
                            <li>2. CSS</li>
                            <li>3. Bootstrap 5</li>
                            <li>4. TailwindCSS</li>
                            <li>5. DaisyUI(Component Library)</li>
                            <li>6. React Bootstrap(Component Library)</li>
                            <li>7. JavaScript</li>
                            <li>8. ReactJS</li>
                            <li>9. MongoDB(Basic)</li>
                            <li>10. NodeJS(Basic)</li>
                            <li>11. ExpressJS(Basic)</li>
                        </ul>
                    </p>

                    <p className="text-"><span className='font-bold'>Links of my latest three projects:</span>
                        <ul>
                            <li><a href="https://jocular-crisp-1c9fac.netlify.app/"><span className='text-primary'>1. Visaconsulting</span></a></li>
                            <li><a href="https://laptopcams-warehouse.web.app/"><span className='text-primary'>2. Laptopcams</span></a></li>
                            <li><a href="https://macbook-analysis-cf3313.netlify.app/"><span className='text-primary'>3. Macbook Analysis</span></a></li>

                        </ul>
                    </p>
                </div>

            </div>
        </div >
    );
};

export default MyPortfolio;