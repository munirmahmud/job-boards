import React from 'react';

const JobList = ({job}) => {
    const langAndTools = [...job.languages, ...job.tools];

    return (
        <div className={`flex bg-white shadow-md m-4 p-6 rounded ${job.featured && 'border-l-4 border-teal-400 border-solid'}`}>
            <div>
                <img src={job.logo} alt={job.company} />
            </div>

            <div className="ml-5 flex justify-center flex-col">
                <h3 className="font-bold text-teal-400">
                    <span className="mr-3">{job.company}</span>
                    {job.isNew && <span className="bg-teal-400 text-teal-100 font-bold rounded-full py-1 px-2 ml-2">New</span>}
                    {job.featured && <span className="bg-gray-900 text-white font-bold rounded-full py-1 px-2 ml-3">Featured</span>}
                </h3>
                <h2 className="font-bold text-xl">{job.position}</h2>
                <p className="text-gray-700">
                    {job.postedAt} &bull; {job.contract} &bull; {job.location}
                </p>
            </div>

            <div className="flex items-center ml-auto">
                {langAndTools ? langAndTools.map((langAndTool, index) => <span key={index} className="bg-teal-100 text-teal-600 bd-teal-100 font-bold m-2 px-3 py-2 rounded cursor-pointer">{langAndTool}</span>) : ''}
            </div>
        </div>
    )
}

export default JobList;
