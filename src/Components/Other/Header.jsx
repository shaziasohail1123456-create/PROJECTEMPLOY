// import React from 'react'

// const Header = ({ data, handleLogout}) => {
//   return (
//     <div className="flex items-center justify-between mb-10">
//       <h1 className="text-2xl font-medium text-white">
//         Hello {data?.name || 'Admin'} <br />
//         <span className="text-3xl text-white font-semibold">{data?.name} 👋</span>
//       </h1>
//       <button
//         onClick={handleLogout}
//         className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-xl"
//       >
//         Log Out
//       </button>
//     </div>
//   )
// }

// export default Header











import React from 'react'

const Header = ({ data, handleLogout }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">

      {/* Greeting */}
      <div>
        <p className="text-sm sm:text-base text-gray-400 font-medium">
          Welcome back,
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-0.5">
          {data?.name || 'Admin'} 👋
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 active:scale-95 text-sm sm:text-base font-semibold text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/20 whitespace-nowrap"
      >
        
        <span>Log Out</span>
      </button>

    </div>
  )
}

export default Header