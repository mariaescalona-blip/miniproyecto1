import React from 'react'

export default function ActivityCard({ activity }) {
  return (
    <div className="card">
      <div className="activity-title">{activity.title} - <small style={{fontWeight:400}}>{activity.subject}</small></div>
      <div className="meta">Fecha: {activity.date}</div>
      <div className="meta">Estado: {activity.status}</div>
    </div>
  )
}
