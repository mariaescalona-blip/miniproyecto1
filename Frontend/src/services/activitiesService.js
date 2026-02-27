
import { seedActivities } from '../data/activities.js'

const KEY = 'mp1_activities_v1'

function readStorage() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

function initIfEmpty() {
  if (!readStorage()) {
    localStorage.setItem(KEY, JSON.stringify(seedActivities))
  }
}

export function getAll() {
  initIfEmpty()
  return JSON.parse(localStorage.getItem(KEY)) || []
}

export function addActivity(activity) {
  const items = getAll()
  const newAct = { id: String(Date.now()), ...activity }
  items.push(newAct)
  localStorage.setItem(KEY, JSON.stringify(items))
  return newAct
}

export function updateActivity(id, patch) {
  const items = getAll().map(a => a.id === id ? { ...a, ...patch } : a)
  localStorage.setItem(KEY, JSON.stringify(items))
  return items
}

export function seedReset() {
  localStorage.setItem(KEY, JSON.stringify(seedActivities))
}
