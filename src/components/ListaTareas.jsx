import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arrayTareas}) => {
  return (
    <div>
      <ListGroup>
        {
            arrayTareas.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea}></ItemTarea>)
        }
      </ListGroup>
      
    </div>
  );
};

export default ListaTareas;
