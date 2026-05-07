import React from 'react'

const CompleteTask = ({data, setUserData, userData, loggedInUser}) => {

    const handleComplete = () => {
        const updatedEmployees = [...userData.employees]
        updatedEmployees.forEach((emp) => {
            if (emp.firstName === loggedInUser.firstName) {
                emp.tasks.forEach((t) => {
                    if (t.taskTitle === data.taskTitle) {
                        t.active = false
                        t.completed = true
                    }
                })
                emp.taskNumbers.completed += 1
                emp.taskNumbers.active -= 1
            }
        })
        setUserData({...userData, employees: updatedEmployees})
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-6'>
                <button onClick={handleComplete} className='w-full bg-green-600 py-1 px-2 text-sm rounded'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask
