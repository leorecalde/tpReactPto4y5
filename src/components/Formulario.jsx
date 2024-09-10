import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const leerLocalstorage =
    JSON.parse(localStorage.getItem("listaTareasKey")) || [];
  const [arrayTareas, setArrayTareas] = useState(leerLocalstorage);

  useEffect(() => {
    console.log("se habilita el ciclo de vida de useEffect");
    localStorage.setItem("listaTareasKey", JSON.stringify(arrayTareas));
  }, [arrayTareas]);

  const onSubmit = (data) => {
    console.log(data.tarea);
    setArrayTareas([...arrayTareas, data.tarea]);
    reset();
  };

  const borrarTarea = (nombreTarea) => {
    const arrayFiltrado = arrayTareas.filter((tarea) => tarea !== nombreTarea);
    setArrayTareas(arrayFiltrado);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 2,
                message: "la tarea debe tener como minimo 2 caracteres",
              },
              maxLength: {
                value: 100,
                message: "la tarea debe tener como maximo 100 caracteres",
              },
            })}
            type="text"
            placeholder="Tarea"
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text
          className="
      text-danger mb-3"
        >
          {errors.tarea?.message}
        </Form.Text>
      </Form>
      <ListaTareas
        arrayTareas={arrayTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </section>
  );
};

export default Formulario;
