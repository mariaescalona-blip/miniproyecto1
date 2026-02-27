function ActivityCard({ titulo, categoria, fecha, estado }) {
  return (
    <div
      style={{
        border: "1px solid #444",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "12px",
      }}
    >
      <strong>
        {titulo} - {categoria}
      </strong>
      <br />
      Fecha: {fecha}
      <br />
      Estado: {estado === "Pendiente" ? "⏳ Pendiente" : "✅ Completada"}
    </div>
  );
}

export default ActivityCard;
