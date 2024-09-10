import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arrayTareas, borrarTarea}) => {
  return (
    <div>
      <ListGroup>
        {
            arrayTareas.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
        }
      </ListGroup>
      
    </div>
  );
};

export default ListaTareas;
