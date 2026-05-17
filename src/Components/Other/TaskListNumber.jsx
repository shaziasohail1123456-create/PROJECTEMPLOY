import React from 'react'

const TaskListNumber = ({ data }) => {
  const { taskNumbers } = data

  const cards = [
    {
      label: 'Active',
      value: taskNumbers.active,
      light: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      iconBg: 'bg-blue-500/20',
      icon: '🔵',
    },
    {
      label: 'New Task',
      value: taskNumbers.newTask,
      light: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      text: 'text-yellow-400',
      iconBg: 'bg-yellow-500/20',
      icon: '🟡',
    },
    {
      label: 'Completed',
      value: taskNumbers.completed,
      light: 'bg-green-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
      iconBg: 'bg-green-500/20',
      icon: '🟢',
    },
    {
      label: 'Failed',
      value: taskNumbers.failed,
      light: 'bg-red-500/10',
      border: 'border-red-500/30',
      text: 'text-red-400',
      iconBg: 'bg-red-500/20',
      icon: '🔴',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 mt-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`${card.light} border ${card.border} p-4 sm:p-5 rounded-xl transition-transform hover:scale-105`}
        >
          {/* Icon + Label Row */}
          <div className={`flex items-center gap-2 mb-3`}>
            <span className={`${card.iconBg} text-lg p-1.5 rounded-lg`}>
              {card.icon}
            </span>
            <p className={`${card.text} text-sm sm:text-base font-semibold`}>
              {card.label}
            </p>
          </div>

          {/* Number */}
          <p className={`text-3xl sm:text-4xl font-bold ${card.text}`}>
            {card.value}
          </p>

          {/* Subtitle */}
          <p className="text-gray-500 text-xs mt-1">
            Total {card.label.toLowerCase()} tasks
          </p>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber