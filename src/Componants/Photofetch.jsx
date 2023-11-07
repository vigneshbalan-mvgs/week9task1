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
        <div>
            <Container>

            <h1>PhotoFetch</h1>
        
                
                    <Row className="justify-content-center">
                {data.map(photo => (
                  
                        <Col key={photo.id} md={6} sm={12} xl={4} className="g-4">
                         <Card style={{ width: '18rem' }}>
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