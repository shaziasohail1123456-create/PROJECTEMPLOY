// import React from 'react'
// import Header from '../Other/Header'
// import TaskListNumber from '../Other/TaskListNumber'
// import TaskList from '../TaskList/TaskList'


// const EmployeeDashboard = ({data, handleLogout}) => {
//   return (
//     <div className='p-10 bg-[#1c1c1c] h-screen'>
//       <Header data={data} handleLogout={handleLogout} />
//       <TaskListNumber data={data} />
//       <TaskList data={data} />
      
//     </div>
//   )
// }

// export default EmployeeDashboard


import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] px-4 sm:px-6 lg:px-10 py-6">
      <Header data={data} handleLogout={handleLogout} />

      <div className="mt-6">
        <TaskListNumber data={data} />
      </div>

      <div className="mt-6 pb-10">
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard