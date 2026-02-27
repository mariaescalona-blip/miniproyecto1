
import React, { useState } from 'react'

export default function ActivityForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('Pendiente')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title || !subject || !date) return alert('Completa todos los campos')
    onSubmit({ title, subject, date, status })
    setTitle(''); setSubject(''); setDate(''); setStatus('Pendiente')
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="form-row">
        <label>Título</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" />
      </div>
      <div className="form-row">
        <label>Materia</label>
        <input value={subject} onChange={e=>setSubject(e.target.value)} type="text" />
      </div>
      <div className="form-row">
        <label>Fecha</label>
        <input value={date} onChange={e=>setDate(e.target.value)} type="date" />
      </div>
      <div className="form-row">
        <label>Estado</label>
        <select value={status} onChange={e=>setStatus(e.target.value)}>
          <option>Pendiente</option>
          <option>Completada</option>
        </select>
      </div>

      <div>
        <button className="btn" type="submit">Guardar</button>
      </div>
    </form>
  )
}
