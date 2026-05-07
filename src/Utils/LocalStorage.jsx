
localStorage.clear()
const employees = [
{
id: 1,
name: "Ali Khan",
email: "employee1@example.com",
password: "123",

taskNumbers: {
active: 1,
newTask: 1,
completed: 1,
failed: 1
},

tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
title: "Prepare sales report",
description: "Compile and submit weekly sales report.",
date: "2026-02-20",
category: "Reporting"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
title: "Update CRM",
description: "Update customer information in CRM system.",
date: "2026-02-18",
category: "Data Entry"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
title: "Client follow-up",
description: "Call client regarding delayed payment.",
date: "2026-02-15",
category: "Communication"
}
]
},

{
id: 2,
name: "Ahmed Raza",
email: "employee2@example.com",
password: "123",

taskNumbers: {
active: 1,
newTask: 1,
completed: 1,
failed: 1
},

tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
title: "Fix login bug",
description: "Resolve login issue reported by QA.",
date: "2026-02-21",
category: "Development"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
title: "Code review",
description: "Review teammate’s pull request.",
date: "2026-02-17",
category: "Development"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
title: "Deploy hotfix",
description: "Deploy hotfix to production server.",
date: "2026-02-14",
category: "DevOps"
}
]
},

{
id: 3,
name: "Usman Ali",
email: "employee3@example.com",
password: "123",

taskNumbers: {
active: 1,
newTask: 1,
completed: 1,
failed: 1
},

tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
title: "Design homepage banner",
description: "Create new banner for marketing campaign.",
date: "2026-02-22",
category: "Design"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
title: "Update brand assets",
description: "Organize and update logo files.",
date: "2026-02-16",
category: "Branding"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
title: "Export design kit",
description: "Export assets for developers.",
date: "2026-02-13",
category: "Design"
}
]
},

{
id: 4,
name: "Hassan Ahmed",
email: "employee4@example.com",
password: "123",

taskNumbers: {
active: 1,
newTask: 1,
completed: 1,
failed: 1
},

tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
title: "Write blog post",
description: "Write article about new product launch.",
date: "2026-02-23",
category: "Content"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
title: "SEO optimization",
description: "Optimize landing page SEO.",
date: "2026-02-18",
category: "Marketing"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
title: "Email campaign draft",
description: "Prepare draft for email newsletter.",
date: "2026-02-12",
category: "Marketing"
}
]
},

{
id: 5,
name: "Bilal Sheikh",
email: "employee5@example.com",
password: "123",

taskNumbers: {
active: 1,
newTask: 1,
completed: 1,
failed: 1
},

tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
title: "Prepare onboarding docs",
description: "Create onboarding guide for new hires.",
date: "2026-02-24",
category: "HR"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
title: "Team meeting notes",
description: "Summarize weekly team meeting.",
date: "2026-02-19",
category: "Documentation"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
title: "Policy update review",
description: "Review updated HR policies.",
date: "2026-02-11",
category: "HR"
}
]
}
]
const admin = [
{
id: 1,
email: "admin@me.com",
password: "123"
}
]
export const setLocalStorage = () => {
localStorage.setItem('employees', JSON.stringify(employees))
localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees =JSON.parse(localStorage.getItem('employees')) || []
    const admin =JSON.parse(localStorage.getItem('admin')) || []

console.log("Employees:", employees)
console.log("Admin", admin)
return {employees,admin}
}