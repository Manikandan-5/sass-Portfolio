import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const ProjectList = ({project}) => {
  return (
    <>
      <section id='project'>
    <Card style={{ width: '18rem',height:'34rem' }} className='text-center mt-4 cards'>
      <Card.Img variant="top" src={project.img} className='img-fluid '/>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
          {project.use}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{project.technologies}</ListGroup.Item>
      </ListGroup>
       <a target='_blank'  href={project.git} className='btn btn-info'>View Project</a>
    </Card>
    </section>

    </>
  )
}

export default ProjectList