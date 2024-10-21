import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProgramList() {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
         fetch('http://localhost:4000/api/programs')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPrograms(data);
         })
         .catch((error) => {
            console.error('Error fetching programs:',error);
         });

    }, []);








    return (
        <div className="program-list">
            {programs.map(program => (
                <Link key={program._id} to={`/program/${program._id}`}>
                    <div className='program-card'>
                        <img src={program.imageUrl} alt={program.title} />
                        <h3>{program.title}</h3>
                    </div>
                </Link>
            ))}

        </div>
    );
};

export default ProgramList;