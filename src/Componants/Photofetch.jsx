import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Photofetch() {

    const [data, setData] = useState([]);

    const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(json => {
                setData(json);
            });
    };

    useEffect(() => {
        apiGet();
    },[])

    
    return (
        <div  >
            <Container className="ms-auto">

            <h1>PhotoFetch</h1>
        
                
                    <Row>
                {data.map(photo => (
                  
                        <Col key={photo.id} md={6} sm={12} lg={4} xl={3} className="g-4">
                         <Card style={{ width: '100%', alignContent:"space-between" }}>
                            <Card.Img variant="top" src={photo.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{photo.title }</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                ))}
                </Row>
               
           
                    

                </Container>
        </div>
    )
}


export { Photofetch };