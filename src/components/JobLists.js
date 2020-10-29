import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import JobList from './JobList';


const JobLists = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(data);
    }, []);

    return (
        <div>
            {jobs.length === 0 ? (
                <h3>Jobs are loading...</h3>
            ) : (
                jobs.map(job => <JobList key={job.id} job={job} />)
            )}
        </div>
    )
};


export default JobLists;
