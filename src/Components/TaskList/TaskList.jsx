import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

const TaskList = ({ data }) => {
  const { userData, setUserData } = useContext(AuthContext)

  const updateTaskStatus = (taskTitle, newStatus) => {
    const updatedEmployees = [...userData.employees];

    updatedEmployees.forEach((emp) => {
      if (emp.name === data.name) {
        emp.tasks.forEach((t) => {
          if (t.title === taskTitle) {
            if (newStatus === 'active') {
              t.active = true;
              t.newTask = false;
              emp.taskNumbers.active += 1;
              emp.taskNumbers.newTask -= 1;
            } else if (newStatus === 'completed') {
              t.active = false;
              t.completed = true;
              emp.taskNumbers.active -= 1;
              emp.taskNumbers.completed += 1;
            } else if (newStatus === 'failed') {
              t.active = false;
              t.failed = true;
              emp.taskNumbers.active -= 1;
              emp.taskNumbers.failed += 1;
            }
          }
        });
      }
    });

    setUserData({ ...userData, employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  /* Status badge config */
  const getStatusBadge = (task) => {
    if (task.newTask)   return { label: 'New',       cls: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' }
    if (task.active)    return { label: 'Active',     cls: 'bg-blue-500/20   text-blue-400   border-blue-500/30'   }
    if (task.completed) return { label: 'Completed',  cls: 'bg-green-500/20  text-green-400  border-green-500/30'  }
    if (task.failed)    return { label: 'Failed',     cls: 'bg-red-500/20    text-red-400    border-red-500/30'    }
    return { label: 'Unknown', cls: 'bg-gray-500/20 text-gray-400 border-gray-500/30' }
  }

  return (
    <div className="mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-white text-xl sm:text-2xl font-semibold">Your Tasks</h2>
        <span className="text-gray-500 text-sm">{data.tasks.length} task{data.tasks.length !== 1 ? 's' : ''}</span>
      </div>

      {/* No tasks */}
      {data.tasks.length === 0 && (
        <div className="bg-[#2a2a2a] rounded-2xl p-10 text-center border border-gray-800">
          <p className="text-4xl mb-3">📋</p>
          <p className="text-gray-400 text-sm">No tasks assigned yet.</p>
        </div>
      )}

      {/* 
          Mobile  → vertical scroll (flex-col)
          Tablet+ → horizontal scroll cards 
      */}

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-4 sm:hidden">
        {data.tasks.map((task, index) => {
          const badge = getStatusBadge(task)
          return (
            <div key={index} className="bg-[#2a2a2a] p-4 rounded-2xl shadow-lg border border-gray-800 flex flex-col gap-3">

              {/* Top row */}
              <div className="flex justify-between items-center">
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {task.category}
                </span>
                <span className={`border text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${badge.cls}`}>
                  {badge.label}
                </span>
              </div>

              {/* Title + Date */}
              <div>
                <h3 className="text-white font-bold text-base leading-tight">{task.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{task.date}</p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{task.description}</p>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-1">
                {task.newTask && (
                  <button
                    onClick={() => updateTaskStatus(task.title, 'active')}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
                  >
                    ✋ Accept Task
                  </button>
                )}
                {task.active && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateTaskStatus(task.title, 'completed')}
                      className="flex-1 bg-green-600 hover:bg-green-700 active:scale-95 py-2.5 rounded-lg text-xs font-bold text-white uppercase transition-all"
                    >
                      ✅ Complete
                    </button>
                    <button
                      onClick={() => updateTaskStatus(task.title, 'failed')}
                      className="flex-1 bg-red-600 hover:bg-red-700 active:scale-95 py-2.5 rounded-lg text-xs font-bold text-white uppercase transition-all"
                    >
                      ❌ Failed
                    </button>
                  </div>
                )}
                {task.completed && (
                  <div className="w-full text-center bg-green-500/10 py-2.5 rounded-lg border border-green-500/30">
                    <span className="text-green-400 text-xs font-bold uppercase">Task Completed ✅</span>
                  </div>
                )}
                {task.failed && (
                  <div className="w-full text-center bg-red-500/10 py-2.5 rounded-lg border border-red-500/30">
                    <span className="text-red-400 text-xs font-bold uppercase">Task Failed ❌</span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Tablet & Desktop: horizontal scroll cards */}
      <div className="hidden sm:flex gap-5 overflow-x-auto pb-6 px-1 scrollbar-hide">
        {data.tasks.map((task, index) => {
          const badge = getStatusBadge(task)
          return (
            <div
              key={index}
              className="min-w-[280px] max-w-[300px] bg-[#2a2a2a] p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-800 flex flex-col justify-between flex-shrink-0"
            >
              <div>
                {/* Category + Status */}
                <div className="flex justify-between items-center mb-3 gap-2 flex-wrap">
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {task.category}
                  </span>
                  <span className={`border text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${badge.cls}`}>
                    {badge.label}
                  </span>
                </div>

                {/* Date */}
                <p className="text-gray-500 text-xs mb-2">{task.date}</p>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{task.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">{task.description}</p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-2">
                {task.newTask && (
                  <button
                    onClick={() => updateTaskStatus(task.title, 'active')}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 py-2 rounded-lg text-sm font-semibold text-white transition-all"
                  >
                    ✋ Accept Task
                  </button>
                )}
                {task.active && (
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => updateTaskStatus(task.title, 'completed')}
                      className="flex-1 bg-green-600 hover:bg-green-700 active:scale-95 py-2 rounded-lg text-xs font-bold text-white uppercase transition-all"
                    >
                      ✅ Complete
                    </button>
                    <button
                      onClick={() => updateTaskStatus(task.title, 'failed')}
                      className="flex-1 bg-red-600 hover:bg-red-700 active:scale-95 py-2 rounded-lg text-xs font-bold text-white uppercase transition-all"
                    >
                      ❌ Failed
                    </button>
                  </div>
                )}
                {task.completed && (
                  <div className="w-full text-center bg-green-500/10 py-2 rounded-lg border border-green-500/30">
                    <span className="text-green-400 text-xs font-bold uppercase">Task Completed ✅</span>
                  </div>
                )}
                {task.failed && (
                  <div className="w-full text-center bg-red-500/10 py-2 rounded-lg border border-red-500/30">
                    <span className="text-red-400 text-xs font-bold uppercase">Task Failed ❌</span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TaskList