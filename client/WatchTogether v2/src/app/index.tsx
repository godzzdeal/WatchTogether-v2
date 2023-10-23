// import { useState } from 'react'
import { withProviders } from "./providers";

import { ParticlesBg } from '../entities/ParticlesBg';
import { VersionHeader } from '../entities/VersionInfoHeader/index'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import "./index.scss"
import land from '../assets/img/planet-logo2.png';
import logo from '../assets/img/logo.png';

let version = import.meta.env.VITE_VERION_APP;
console.log('1', version);

const App = () => {
  // const [count, setCount] = useState(0)

  return (

    <>
      <ParticlesBg />
      <VersionHeader version={version} />
      <Container className="align-items-center justify-content-center" style={{ marginTop: '10px' }}>
        <div className="d-flex">
          <img src={land} alt="land" className="rotate scale" />
          <Alert variant="light">
            <Alert.Heading><span className="badge bg-secondary">Free</span> Бесплатный сервис совместного просмотра </Alert.Heading>
            <p>
              Смотрите вместе свободно 👀 даже на расстоянии космоса 🌎🚀🛰
            </p>
          </Alert>
        </div>
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#w">
              <Nav.Item>
                <Button href="#w" variant="dark"><img src={logo} alt="logo" style={{ width: 16 }} /> Watch together 2</Button>
                {/* <Nav.Link href="#w" className="dark"></Nav.Link> */}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Info
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>


            </Card.Text>
            <Button variant="outline-dark"> Начать</Button>
          </Card.Body>
        </Card>

      </Container>


      {/* <div className="card"> */}
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

      {/* </div> */}

    </>
  )
}

export default withProviders(App); 
