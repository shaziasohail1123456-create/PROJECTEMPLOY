// import React from 'react'
// import Header from '../Other/Header'
// import CreateTask from '../Other/CreateTask'
// import { motion } from 'framer-motion'

// const AdminDashboard = ({ employees = [], handleLogout }) => {
//   return (
//     <div className="min-h-screen bg-[#1C1C1C] p-8">
//       {/* 1. Header Section */}
//       <Header data={{ name: 'Admin' }} handleLogout={handleLogout} />

//       {/* 2. Task Assignment Form (Jo ab nazar aa raha hai) */}
//       <CreateTask /> 

//       {/* 3. Overview Title */}
//       <h2 className="text-white text-3xl font-bold mb-6 mt-10">
//         Employees Overview
//       </h2>

//       {/* 4. Task Summary Cards (Top Overview) */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
//         <motion.div whileHover={{ scale: 1.05 }} className="bg-yellow-500 p-5 rounded-xl shadow-lg text-white font-bold text-center">
//           <p className="text-4xl">{employees?.reduce((a, e) => a + (e.taskNumbers?.active || 0), 0)}</p>
//           <p className="text-sm mt-2">Active Tasks</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className="bg-green-500 p-5 rounded-xl shadow-lg text-white font-bold text-center">
//           <p className="text-4xl">{employees?.reduce((a, e) => a + (e.taskNumbers?.newTask || 0), 0)}</p>
//           <p className="text-sm mt-2">New Tasks</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-500 p-5 rounded-xl shadow-lg text-white font-bold text-center">
//           <p className="text-4xl">{employees?.reduce((a, e) => a + (e.taskNumbers?.completed || 0), 0)}</p>
//           <p className="text-sm mt-2">Completed</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className="bg-red-500 p-5 rounded-xl shadow-lg text-white font-bold text-center">
//           <p className="text-4xl">{employees?.reduce((a, e) => a + (e.taskNumbers?.failed || 0), 0)}</p>
//           <p className="text-sm mt-2">Failed Tasks</p>
//         </motion.div>
//       </div>

//       {/* 5. Employee Detail Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {employees?.map((emp, index) => (
//           <motion.div
//             key={emp.id || index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg border border-gray-700"
//           >
//             <h3 className="text-white text-xl font-semibold">{emp.name}</h3>
//             <p className="text-gray-400 mb-4">{emp.email}</p>

//             <div className="flex justify-between mt-3">
//               <div className="text-center">
//                 <p className="text-yellow-400 font-bold">{emp.taskNumbers?.active || 0}</p>
//                 <p className="text-xs text-gray-300">Active</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-green-400 font-bold">{emp.taskNumbers?.newTask || 0}</p>
//                 <p className="text-xs text-gray-300">New</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-blue-400 font-bold">{emp.taskNumbers?.completed || 0}</p>
//                 <p className="text-xs text-gray-300">Completed</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-red-400 font-bold">{emp.taskNumbers?.failed || 0}</p>
//                 <p className="text-xs text-gray-300">Failed</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AdminDashboard





















import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import { motion } from 'framer-motion'

const AdminDashboard = ({ employees = [], handleLogout }) => {
  return (
    <div className="min-h-screen bg-[#1C1C1C] px-4 sm:px-6 lg:px-8 py-6">

      {/* 1. Header */}
      <Header data={{ name: 'Admin' }} handleLogout={handleLogout} />

      {/* 2. Task Assignment Form */}
      <div className="mt-6">
        <CreateTask />
      </div>

      {/* 3. Overview Title */}
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5 mt-10">
        Employees Overview
      </h2>

      {/* 4. Task Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-500 p-4 sm:p-5 rounded-xl shadow-lg text-white font-bold text-center"
        >
          <p className="text-3xl sm:text-4xl">
            {employees?.reduce((a, e) => a + (e.taskNumbers?.active || 0), 0)}
          </p>
          <p className="text-xs sm:text-sm mt-2">Active Tasks</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 p-4 sm:p-5 rounded-xl shadow-lg text-white font-bold text-center"
        >
          <p className="text-3xl sm:text-4xl">
            {employees?.reduce((a, e) => a + (e.taskNumbers?.newTask || 0), 0)}
          </p>
          <p className="text-xs sm:text-sm mt-2">New Tasks</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 p-4 sm:p-5 rounded-xl shadow-lg text-white font-bold text-center"
        >
          <p className="text-3xl sm:text-4xl">
            {employees?.reduce((a, e) => a + (e.taskNumbers?.completed || 0), 0)}
          </p>
          <p className="text-xs sm:text-sm mt-2">Completed</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-red-500 p-4 sm:p-5 rounded-xl shadow-lg text-white font-bold text-center"
        >
          <p className="text-3xl sm:text-4xl">
            {employees?.reduce((a, e) => a + (e.taskNumbers?.failed || 0), 0)}
          </p>
          <p className="text-xs sm:text-sm mt-2">Failed Tasks</p>
        </motion.div>
      </div>

      {/* 5. Employee Detail Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
        {employees?.map((emp, index) => (
          <motion.div
            key={emp.id || index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#2a2a2a] p-5 sm:p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <h3 className="text-white text-lg sm:text-xl font-semibold truncate">
              {emp.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4 truncate">{emp.email}</p>

            <div className="grid grid-cols-4 gap-2 mt-3">
              <div className="text-center">
                <p className="text-yellow-400 font-bold text-lg sm:text-xl">
                  {emp.taskNumbers?.active || 0}
                </p>
                <p className="text-xs text-gray-300 mt-1">Active</p>
              </div>
              <div className="text-center">
                <p className="text-green-400 font-bold text-lg sm:text-xl">
                  {emp.taskNumbers?.newTask || 0}
                </p>
                <p className="text-xs text-gray-300 mt-1">New</p>
              </div>
              <div className="text-center">
                <p className="text-blue-400 font-bold text-lg sm:text-xl">
                  {emp.taskNumbers?.completed || 0}
                </p>
                <p className="text-xs text-gray-300 mt-1">Done</p>
              </div>
              <div className="text-center">
                <p className="text-red-400 font-bold text-lg sm:text-xl">
                  {emp.taskNumbers?.failed || 0}
                </p>
                <p className="text-xs text-gray-300 mt-1">Failed</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default AdminDashboard