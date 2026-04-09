import React from 'react'

const NewTask = ({data, setUserData, userData, loggedInUser}) => {

    const handleAccept = () => {
        // Data copy karein
        const updatedEmployees = [...userData.employees]
        
        updatedEmployees.forEach((emp) => {
            // Login user ko match karein
            if (emp.firstName === loggedInUser.firstName) {
                emp.tasks.forEach((t) => {
                    // Task title se specific task dhoondein
                    if (t.taskTitle === data.taskTitle) {
                        t.active = true      // Kaam shuru ho gaya
                        t.newTask = false    // Ab ye naya nahi raha
                    }
                })
                // Counters update karein
                emp.taskNumbers.active += 1
                emp.taskNumbers.newTask -= 1
            }
        })

        // Global state aur LocalStorage update karein
        setUserData({...userData, employees: updatedEmployees})
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <span className='bg-red-600 text-white text-xs px-3 py-1 rounded font-bold uppercase'>
                    {data.category}
                </span>
                <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold text-gray-800'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-gray-700 leading-tight'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button 
                    onClick={handleAccept} 
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 text-sm font-medium rounded transition-colors'
                >
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask
