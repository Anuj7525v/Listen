import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ProgramDetails.css';

function ProgramDetails() {
    const { id } = useParams();
    const [program, setPrograms] = useState(null);


    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const { data } = await axios.get(`https://localhost:4000/api/programs/${id}`);
                setPrograms(data);
            }
            catch (error) {
                console.error(error);
            };
        };
        fetchProgram();
    }, [id]);


    return program ? (
        <div className="program-details">

            <h1>{program.title}</h1>
            <p>{program.description}</p>
            <div className='track-list'>
                {program.tracks.map(track => (
                    <Link key={track._id} to={`/program/${program._id}/track/${track._id}`}>
                        <div className='track-item'>
                            <h4>{track.title}</h4>
                            <p>{track.duration}</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    ) : <p>Loading...</p>
}


export default ProgramDetails;
