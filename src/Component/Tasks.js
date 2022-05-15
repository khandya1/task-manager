import React from 'react'
import { useState } from 'react'
const tasks = [
    {
        id: '1',
        description: 'Appointment',
        time: AnimationTimeline,
        setReminder: false,
    },
    {
        id: '2',
        description: 'Birthday',
        time: AnimationTimeline,
        setReminder: false,
    },
]

const Tasks = () => {
  return (
      <>
    {tasks.map((task) => (<h3 key = {task.id}> {task.description}</h3>))
    }
    </>
  )
}

export default Tasks
