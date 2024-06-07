import React, { useState } from 'react';
import data from "./data"
import ProjectList from './ProjectList';

export const Project = () => {
    const [projects]=useState(data)
  return (
    <div className='container'>
      
        <div className="row">

    {
        projects.map((project)=>{
            return(
                <div className="col col-lg-4 col-md-6 " key={project.id}>
                        <ProjectList project={project}/>
            </div>
            )
})
    }
            </div>


    </div>
  )
}
