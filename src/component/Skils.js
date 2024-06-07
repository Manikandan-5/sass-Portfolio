import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Skils = () => {
  return (
    <>
    <Container>
        <Row>
            
            <Col lg={6} md={6}>
            <section id='About'>

                <h3 className='text-white mt-5 mb-5'>
                
I have one year of Experience as a <span className='text-info'>Software Trainer at LiveCourses</span>,
 specializing in delivering comprehensive training on various software applications.
  I am now ready to transition into a <span className='text-info'>MERN Stack Development Role</span>,
 leveraging my Strong foundation in teaching and technical Skills
                </h3>
                </section>
            </Col>
            <Col lg={5} md={5}>
            <section id="skills">

            <div className="inner_skill  mt-5 mb-5">
            <h3><span class="badge bg-info text-white"> HTML</span></h3>
        <h3><span class="badge bg-info text-white"> CSS</span></h3>
        <h3><span class="badge bg-info text-white"> JAVASCRIPT</span></h3>
        <h3><span class="badge bg-info text-white"> REACT JS</span></h3>
        <h3><span class="badge bg-info text-white"> NODE JS</span></h3>
        <h3><span class="badge bg-info text-white">EXPRESS JS</span></h3>
        <h3><span class="badge bg-info text-white">MONGO DB</span></h3>
        <h3><span class="badge bg-info text-white">C</span></h3>
        <h3><span class="badge bg-info text-white">C++</span></h3>
        <h3><span class="badge bg-info text-white"> PYTHON</span></h3>
        <h3><span class="badge bg-info text-white">SQL</span></h3>
        <h3><span class="badge bg-info text-white">API</span></h3>
        <h3><span class="badge bg-info text-white">POST MAN</span></h3>
        <h3><span class="badge bg-info text-white">GIT HUB</span></h3>
        </div>
        </section>
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default Skils