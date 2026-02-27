import { useNavigate } from "react-router-dom";
import { addActivity } from "../services/activitiesService";
import ActivityForm from "../components/ActivityForm";

function CrearActividad() {
  const navigate = useNavigate();

  const handleCreate = (data) => {
    addActivity(data);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Crear Actividad</h1>
      <ActivityForm onSubmit={handleCreate} />
    </div>
  );
}

export default CrearActividad;
