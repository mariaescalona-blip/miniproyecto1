
import { activities } from "../data/activities";

export const getActivities = () => {
  return activities;
};

export const addActivity = (newActivity) => {
  activities.push({
    id: activities.length + 1,
    estado: "Pendiente",
    ...newActivity,
  });
};
