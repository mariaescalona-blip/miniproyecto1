export function seedIfEmpty() {
  if (!localStorage.getItem("activities")) {
    const seed = [
      {
        id: "1",
        title: "Estudiar para el parcial",
        dueDate: "2026-03-01",
        createdAt: new Date().toISOString()
      },
      {
        id: "2",
        title: "Preparar presentación",
        dueDate: "2026-03-02",
        createdAt: new Date().toISOString()
      }
    ];

    localStorage.setItem("activities", JSON.stringify(seed));
  }
}

export function getActivities() {
  return JSON.parse(localStorage.getItem("activities")) || [];
}

export function saveActivity(activity) {
  const stored = JSON.parse(localStorage.getItem("activities")) || [];
  stored.push(activity);
  localStorage.setItem("activities", JSON.stringify(stored));
}
