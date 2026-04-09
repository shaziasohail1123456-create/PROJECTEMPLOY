
// import React, { useEffect, useState } from 'react'

// const AllTask = () => {

// const [employees,setEmployees] = useState([])

// useEffect(()=>{

// const data = JSON.parse(localStorage.getItem("employees"))

// if(data){
// setEmployees(data)
// }

// },[])

// return (

// <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48 overflow-auto'>

// {employees.map((emp,index)=>(
  
// emp.tasks.map((task,i)=>{

// let bgColor = "bg-gray-400"

// if(task.newTask) bgColor = "bg-yellow-400"
// if(task.active) bgColor = "bg-blue-400"
// if(task.completed) bgColor = "bg-green-400"
// if(task.failed) bgColor = "bg-red-400"

// return(

// <div key={i} className={`${bgColor} mb-2 py-2 px-4 flex justify-between rounded`}>

// <h2 className='text-xl text-white'>{emp.name}</h2>

// <h3 className='text-xl text-white'>{task.title}</h3>

// <h3 className='text-xl text-white'>
// {task.newTask && "New"}
// {task.active && "Active"}
// {task.completed && "Completed"}
// {task.failed && "Failed"}
// </h3>

// </div>

// )

// })

// ))}

// </div>

// )

// }

// export default AllTask









import React, { useEffect, useState } from 'react'

const AllTask = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees"))
    if (data) {
      setEmployees(data)
    }
  }, [])

  return (
    <div className="bg-[#1c1c1c] p-4 sm:p-5 rounded-xl mt-5">

      {/* Table Header — hidden on mobile */}
      <div className="hidden sm:grid grid-cols-4 gap-3 mb-3 px-3">
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Employee</h3>
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Task Title</h3>
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Category</h3>
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Status</h3>
      </div>

      {/* Task List */}
      <div className="max-h-64 sm:max-h-72 overflow-y-auto pr-1 flex flex-col gap-2">
        {employees.length === 0 && (
          <p className="text-gray-500 text-center py-6 text-sm">No tasks found</p>
        )}

        {employees.map((emp, index) =>
          emp.tasks.map((task, i) => {

            let bgColor   = "bg-gray-500"
            let statusTxt = "Unknown"
            let badge     = "bg-gray-600"

            if (task.newTask)   { bgColor = "bg-yellow-500"; statusTxt = "New";       badge = "bg-yellow-600" }
            if (task.active)    { bgColor = "bg-blue-500";   statusTxt = "Active";    badge = "bg-blue-600" }
            if (task.completed) { bgColor = "bg-green-500";  statusTxt = "Completed"; badge = "bg-green-600" }
            if (task.failed)    { bgColor = "bg-red-500";    statusTxt = "Failed";    badge = "bg-red-600" }

            return (
              <div
                key={`${index}-${i}`}
                className={`${bgColor} bg-opacity-20 border border-opacity-30 rounded-lg px-3 sm:px-4 py-3`}
                style={{ borderColor: bgColor.replace('bg-', '') }}
              >

                {/* Mobile layout — stacked */}
                <div className="flex flex-col gap-1 sm:hidden">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-sm">{emp.name}</span>
                    <span className={`${bgColor} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                      {statusTxt}
                    </span>
                  </div>
                  <span className="text-gray-300 text-sm">{task.title}</span>
                  {task.category && (
                    <span className="text-gray-400 text-xs">{task.category}</span>
                  )}
                </div>

                {/* Desktop layout — grid */}
                <div className="hidden sm:grid grid-cols-4 gap-3 items-center">
                  <h2 className="text-white font-semibold text-sm truncate">{emp.name}</h2>
                  <h3 className="text-gray-200 text-sm truncate">{task.title}</h3>
                  <h3 className="text-gray-400 text-sm truncate">{task.category || '—'}</h3>
                  <span className={`${bgColor} text-white text-xs font-bold px-3 py-1 rounded-full w-fit`}>
                    {statusTxt}
                  </span>
                </div>

              </div>
            )
          })
        )}
      </div>

      {/* Footer count */}
      <div className="mt-3 pt-3 border-t border-gray-700">
        <p className="text-gray-500 text-xs">
          Total Tasks: {employees.reduce((a, e) => a + (e.tasks?.length || 0), 0)}
        </p>
      </div>

    </div>
  )
}

export default AllTask