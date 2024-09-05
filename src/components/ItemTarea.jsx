import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemTarea = () => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>Escribe tu tarea<Button variant='danger'>Borrar</Button></ListGroup.Item>
    );
};

export default ItemTarea;