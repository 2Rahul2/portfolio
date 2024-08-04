import { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import project from "../assets/img/project.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [currentView, setCurrentView] = useState('default');
  const [selectedProject, setSelectedProject] = useState(null);

  const FullStackProjects = [
    {
      title: "Peer to Peer File Sharing",
      description: "JavaScript,ExpressJS,WebRTC,Firebase",
      explaination:"A web app for users to share files directly to another client without need of storing the file on the server built with express ,firebase and nodejs.The peer to peer connection is made with webRTC by sharing each other Offers and ICE candidates to connect both users together.",
      imgUrl: project,
      webUrl:"https://p2p-filesharingapp.onrender.com/home/"
    },
    {
      title: "Social Media Clone",
      description: "Python,Django,JavaScript,Sql",
      explaination:"A social media platform where users can upload photos ,users can like photos ,comment and follow their friends.Web Application built using djangoa python web framework and Django RestFrameWork as backend and JS ,HTML ,CSS for frontend.",
      imgUrl: project,
      webUrl : ""

    },
    {
      title: "Data Backup Server",
      description: "Python,Django Rest Framework,Postgress",
      explaination:"The application allows you to take a backup of your selected folder at your specified duration and stores data in the server built with Django and Django REST framework and to store data Postgres database is used.",
      imgUrl: project,
      webUrl : "https://updata.onrender.com/"

    },
    {
      title: "You Tube Downloader",
      description: "Django,Python,JavaScript",
      explaination:"Web Application using python (django) as backend and JS ,HTML ,CSS.Download video and audio separately of you tube videos",
      imgUrl: project,
      webUrl : ""

    },
  ];
  const DesktopProjects = [
    {
      title: "Data Backup Tool",
      description: "Java,Python,Django,JavaFX,Postgress",
      explaination:"The application allows you to take a backup of your selected folder at your specified duration.• It will continuously run in the background taking backups and keeping your files safe, and you will be able to restore your files once your backup has been uploaded to the server. The application was made in Java and the GUI was made using JavaFX, The files are first zipped and stored in the temp folder and then sent to the server. Apache commons library is used to make connections between the client and the server The server is built with Django and Django REST framework and to store data Postgres database is used",
      imgUrl: project,
      webUrl : "https://updata.onrender.com/"
    },
    {
      title: "Voice Assistant",
      description: "Python,PyQt,ExpressJS",
      explaination:"Developed a voice assistant desktop application using Python and PyQt, enabling users to control their system through voice commands for operations such as opening/closing applications, playing music, managing files, and executing system commands (shutdown, sleep).",
      imgUrl: project,
      webUrl : ""

    },
  ];
  const GameDevProjects = [
    {
      title: "Robot Invasion",
      description: "C#,Unity Engine",
      explaination:"Immerse yourself in the thrilling world of [Your Game Title], a 3D top-down shooter that combines intense combat with strategic puzzles and epic boss fights. Choose from a diverse roster of characters, each equipped with unique skills and powerful abilities that can turn the tide of battle in your favor.",
      imgUrl: project,
      webUrl : "https://connerito.itch.io/robot-invasion"
    },
  ];


  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentView('projectDetails');
  };

  const renderContent = () => {
    if (currentView === 'default') {
      return (
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Full Stack Application</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Desktop Application</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Game Development</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
            <Tab.Pane eventKey="first">
              <Row>
                {FullStackProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
                
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Row>
                  {DesktopProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      {...project}
                      onClick={() => handleProjectClick(project)}
                    />
                  ))}
                  
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <Row>
                  {GameDevProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      {...project}
                      onClick={() => handleProjectClick(project)}
                    />
                  ))}                  
                </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      );
    } else if (currentView === 'projectDetails' && selectedProject) {
      return (
        <div className='projectDetails'>
          <div className='imgSection'>
            <button className='goBack' onClick={() => setCurrentView('default')}>Back to Projects</button>
            <img className='projectDetailsImg' src={selectedProject.imgUrl} alt={selectedProject.title} />
          </div>
          <div className='projectInfo'>
            <h2>{selectedProject.title}</h2>
            <span className='descPara'>{selectedProject.explaination}</span>
          <div className='urlName'>
            <span>Url : <a href={selectedProject.webUrl} target="_blank" rel="noopener noreferrer">click here</a></span>
          </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  {renderContent()}
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
