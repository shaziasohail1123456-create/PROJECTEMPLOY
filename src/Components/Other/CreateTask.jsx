import React, { useState, useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {

    const { userData, setUserData } = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category: category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const data = [...userData.employees]

        data.forEach(function (elem) {
            if (assignTo === elem.name) {
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
            }
        })

        setUserData({ ...userData, employees: data })
        localStorage.setItem('employees', JSON.stringify(data))

        setTaskTitle('')
        setCategory('')
        setAssignTo('')
        setTaskDate('')
        setTaskDescription('')

        alert("Task Created Successfully!")
    }

    const inputClass = "text-sm py-2 px-3 w-full rounded-lg outline-none bg-transparent border border-gray-600 focus:border-emerald-400 mb-4 text-white transition-colors placeholder-gray-500"
    const labelClass = "text-sm text-gray-300 mb-1 block font-medium"

    return (
        <div className="p-4 sm:p-6 bg-[#1c1c1c] mt-5 rounded-xl shadow-lg">

            {/* Section Title */}
            <h2 className="text-white text-lg sm:text-xl font-bold mb-5">
                ➕ Create New Task
            </h2>

            <form onSubmit={submitHandler}>
                {/* 
                    Layout:
                    Mobile  → single column (all stacked)
                    Tablet+ → two columns (fields left, description right)
                */}
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* ── Left: Input Fields ── */}
                    <div className="w-full lg:w-1/2 flex flex-col">

                        <div>
                            <label className={labelClass}>Task Title</label>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className={inputClass}
                                type="text"
                                placeholder="e.g. Make a UI design"
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                className={inputClass}
                                type="date"
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>Assign To</label>
                            <input
                                value={assignTo}
                                onChange={(e) => setAssignTo(e.target.value)}
                                className={inputClass}
                                type="text"
                                placeholder="Employee Name"
                                required
                            />
                        </div>

                        <div>
                            <label className={labelClass}>Category</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className={inputClass}
                                type="text"
                                placeholder="e.g. Design, Development, HR"
                                required
                            />
                        </div>

                    </div>

                    {/* ── Right: Description + Button ── */}
                    <div className="w-full lg:w-1/2 flex flex-col">

                        <div className="flex flex-col flex-1">
                            <label className={labelClass}>Description</label>
                            <textarea
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                className="w-full flex-1 min-h-[160px] sm:min-h-[180px] text-sm py-2 px-4 rounded-lg outline-none bg-transparent border border-gray-600 focus:border-emerald-400 text-white transition-colors placeholder-gray-500 resize-none mb-4"
                                placeholder="Describe the task in detail..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 py-3 px-5 rounded-lg text-sm w-full text-white font-bold transition-all duration-200 shadow-lg shadow-emerald-500/20"
                        >
                            ✅ Create Task
                        </button>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask