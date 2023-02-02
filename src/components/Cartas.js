import { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

function Cartas() {
    const initialState = {
        'id' : '',
        'nombre' : '',
        'direccion' : '',
        'telefono' : '',
    }

    const btnActual = useRef(null);


    const [datos, setDatos] = useState(initialState);
    const{nombre,direccion,telefono} = datos;//Deconstruccion de datos 
    const[informacion, setInformacion] = useState([]);

    
    useEffect(() => {
        btnActual.current.disabled = true;
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const initialState2 = {
            'id' : uuid(),
            'nombre' : datos.nombre,
            'direccion' : datos.direccion,
            'telefono' : datos.telefono,
        };
        let inf = informacion;
        inf.push(initialState2);
        setInformacion(inf);
        setDatos(initialState);
    }
    const handleChange = (e) => {
        setDatos({
            ...datos, [e.target.name]:e.target.value
        });
    }
    const handleEliminar = (e) =>{
        let nombre = e.target.name;
        nombre = nombre.slice(1);
        let inf = [];
        console.log(nombre);
        for(let i=0; i<informacion.length;i++) {
             if(informacion[i].id !== nombre) {
                 inf.push(informacion[i]);
             }
         }
        setInformacion(inf);
    }

    const handleModificar = (e) =>{
        btnActual.current.disabled = false; 

    }
    return ( 
    <Container>
        <Row className="row-cols-3">
            {
            informacion.map(inf =>(
            <Col key={inf.id} className="mt-3">
                <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{inf.nombre}</Card.Title>
            <Card.Text>id:{inf.id}</Card.Text>
            <Card.Text>Direccion:{inf.direccion}</Card.Text>
            <Card.Text>Teléfono:{inf.telefono}</Card.Text>
            <Button name={'e'+inf.id} variant="danger" className="me-3" onClick={handleEliminar}>Eliminar</Button>
            <Button name={'m'+inf.id} variant="info" onClick={handleModificar}>Editar</Button>
            </Card.Body>
            </Card>
            </Col>
            ))
            }
        </Row>
        <Row>
            <Col></Col>
            <Col>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" value={nombre} onChange={handleChange} placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" name="direccion" value={direccion} onChange={handleChange} placeholder="Direccion" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name="telefono" value={telefono} onChange={handleChange} placeholder="Telefono" />
            </Form.Group>

            <Button variant="primary" type="submit" name='btnAgregar' className='me-3'>
                Agregar
            </Button>
            <Button variant="success" name='btnActualizar' ref={btnActual} >
                Actualizar
            </Button>
            </Form>
            </Col>
            <Col></Col>
        </Row>
    </Container>
     );
}

export default Cartas;