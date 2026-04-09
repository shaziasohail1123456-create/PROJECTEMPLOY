// // import React from 'react'
// // import { motion } from 'framer-motion'
// // import { Link } from 'react-router-dom'

// // const HomePage = () => {

// //   // ✅ Unique Videos (No Same Video)
// //   const reviews = [
// //     {
// //       vid: "https://assets.mixkit.co/videos/preview/mixkit-business-team-working-together-4265-large.mp4",
// //       text: "This system boosted our productivity!",
// //       name: "Ali Khan",
// //       role: "HR Manager"
// //     },
// //     {
// //       vid: "https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-modern-office-4359-large.mp4",
// //       text: "Very easy to use and efficient.",
// //       name: "Sara Ahmed",
// //       role: "Team Lead"
// //     },
// //     {
// //       vid: "https://assets.mixkit.co/videos/preview/mixkit-young-man-working-on-laptop-4050-large.mp4",
// //       text: "Best EMS platform I have used.",
// //       name: "Usman Ali",
// //       role: "Developer"
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-gray-900 text-white font-sans">

// //       {/* NAVBAR */}
// //       <nav className="fixed top-0 w-full z-50 px-6 py-4">
// //         <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
          
// //           <motion.h1 
// //             initial={{ opacity: 0, x: -20 }} 
// //             animate={{ opacity: 1, x: 0 }}
// //             className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
// //             EMS PRO
// //           </motion.h1>

// //           <div className="flex gap-8 items-center">
// //             <div className="hidden md:flex gap-6 text-sm text-gray-400">
// //                <a href="#features" className="hover:text-emerald-400">Features</a>
// //                <a href="#stats" className="hover:text-emerald-400">Stats</a>
// //                <a href="#reviews" className="hover:text-emerald-400">Reviews</a>
// //             </div>

// //             <Link to="/login" className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2 rounded-xl font-bold">
// //               Sign In
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* HERO */}
// //       <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        
// //         {/* Video Background */}
// //         <div className="absolute inset-0 z-0">
// //           <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
// //             <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-with-people-working-4352-large.mp4" type="video/mp4" />
// //           </video>

// //           {/* Overlay */}
// //           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black"></div>
// //         </div>

// //         <div className="relative z-10 max-w-4xl">
// //           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            
// //             <h1 className="text-5xl md:text-7xl font-black mb-6">
// //               Manage Your Team <br />
// //               <span className="text-emerald-400 italic">Like a Pro</span>
// //             </h1>

// //             <p className="text-gray-300 mb-10">
// //               Smart Employee Management System for modern teams.
// //             </p>

// //             <Link to="/login" className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
// //               Get Started
// //             </Link>

// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* STATS */}
// //       <section id="stats" className="py-20 text-center">
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// //           {[
// //             { val: "10k+", label: "Tasks Done" },
// //             { val: "500+", label: "Teams" },
// //             { val: "15+", label: "Countries" },
// //             { val: "99.9%", label: "Uptime" }
// //           ].map((stat, i) => (
// //             <div key={i}>
// //               <h3 className="text-4xl text-emerald-400">{stat.val}</h3>
// //               <p className="text-gray-400">{stat.label}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* FEATURES */}
// //       <section id="features" className="py-20 px-6 max-w-6xl mx-auto text-center">
// //         <h2 className="text-4xl mb-10">Features</h2>

// //         <div className="grid md:grid-cols-3 gap-8">
// //           {[
// //             { title: "Task Tracking", desc: "Track tasks in real time" },
// //             { title: "Secure Access", desc: "Role-based dashboards" },
// //             { title: "Analytics", desc: "Performance insights" }
// //           ].map((f, i) => (
// //             <div key={i} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10">
// //               <h3 className="text-xl mb-2">{f.title}</h3>
// //               <p className="text-gray-400 text-sm">{f.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* REVIEWS */}
// //       <section id="reviews" className="py-20 px-6 max-w-6xl mx-auto">
// //         <h2 className="text-4xl text-center mb-10">Reviews</h2>

// //         <div className="flex gap-6 overflow-x-auto">
// //           {reviews.map((review, i) => (
// //             <motion.div key={i} whileHover={{ scale: 1.05 }} className="min-w-[260px] bg-white/5 p-4 rounded-xl border border-white/10">
              
// //               <video 
// //                 autoPlay 
// //                 muted 
// //                 loop 
// //                 playsInline 
// //                 className="w-full h-40 object-cover rounded-lg mb-3"
// //                 src={review.vid}
// //               />

// //               <p className="text-sm italic">"{review.text}"</p>
// //               <h4 className="mt-2 font-bold">{review.name}</h4>
// //               <span className="text-emerald-400 text-xs">{review.role}</span>

// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* FOOTER */}
// //       <footer className="py-20 text-center border-t border-white/10">
// //         <p className="text-gray-400 mb-2">EMS PRO</p>
// //         <p className="text-gray-500 text-sm">© 2026 All Rights Reserved</p>
// //       </footer>

// //     </div>
// //   )
// // }

// // export default HomePage


// import React from 'react'
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

// const HomePage = () => {

//   // ✅ 10 Unique Reviewers with Videos
//   const reviews = [
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-business-team-working-together-4265-large.mp4",
//       text: "EMS PRO ne hamare HR processes ko bilkul badal diya. Ab sab kuch ek jagah manage hota hai!",
//       name: "Ali Khan",
//       role: "HR Manager",
//       company: "TechCorp Pvt Ltd",
//       rating: 5
//     },
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-modern-office-4359-large.mp4",
//       text: "Bahut aasaan interface hai. Meri team ne 2 din mein seekh liya. Productivity double ho gayi!",
//       name: "Sara Ahmed",
//       role: "Team Lead",
//       company: "DigitalMinds Agency",
//       rating: 5
//     },
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-young-man-working-on-laptop-4050-large.mp4",
//       text: "Best EMS platform jo maine abhi tak use ki hai. Task tracking feature zabardast hai.",
//       name: "Usman Ali",
//       role: "Senior Developer",
//       company: "SoftNest Solutions",
//       rating: 5
//     },
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-laptop-in-a-coffee-shop-2889-large.mp4",
//       text: "Remote team manage karna ab koi mushkil nahi. Real-time updates bahut helpful hain.",
//       name: "Ayesha Siddiqui",
//       role: "Project Manager",
//       company: "RemoteFirst Inc",
//       rating: 4
//     },
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-businessman-using-a-laptop-in-an-office-3062-large.mp4",
//       text: "Analytics dashboard ne decision making bahut easy kar di. Highly recommend karta hoon!",
//       name: "Bilal Raza",
//       role: "CEO",
//       company: "StartupHub PK",
//       rating: 5
//     },
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-group-of-coworkers-doing-a-meeting-in-an-office-4497-large.mp4",
//       text: "Team meetings aur task assignments ab ek platform pe. Time ki kitni bachat hoti hai!",
//       name: "Fatima Malik",
//       role: "Operations Director",
//       company: "BizFlow Solutions",
//       rating: 5
//     },
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-laptop-in-an-office-3072-large.mp4",
//       text: "Role-based access control feature excellent hai. Security aur privacy dono maintain hoti hai.",
//       name: "Hamza Sheikh",
//       role: "IT Administrator",
//       company: "CyberSafe Pvt Ltd",
//       rating: 4
//     },
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-young-businesswoman-working-at-her-office-desk-3063-large.mp4",
//       text: "Customer support bhi kaafi responsive hai. Koi bhi issue ho turant solve ho jata hai.",
//       name: "Zara Hussain",
//       role: "Customer Success Manager",
//       company: "CloudBase Technologies",
//       rating: 5
//     },
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-colleagues-working-together-at-a-computer-4262-large.mp4",
//       text: "Poori company ka data ek jagah, secure aur organized. Implementation bhi bahut smooth thi.",
//       name: "Tariq Mehmood",
//       role: "CTO",
//       company: "Nexus Digital Group",
//       rating: 5
//     },
//     {
//       vid: "https://assets.mixkit.co/videos/preview/mixkit-woman-using-a-tablet-in-a-modern-office-34875-large.mp4",
//       text: "Mobile se bhi easily access hota hai. Field team ke liye ye feature game changer hai!",
//       name: "Nadia Qureshi",
//       role: "Field Operations Lead",
//       company: "OnGround Services",
//       rating: 4
//     }
//   ];

//   const renderStars = (count) => (
//     <div className="flex gap-0.5 mt-1">
//       {[...Array(5)].map((_, i) => (
//         <span key={i} className={i < count ? "text-emerald-400" : "text-gray-600"}>★</span>
//       ))}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-gray-900 text-white font-sans">

//       {/* NAVBAR */}
//       <nav className="fixed top-0 w-full z-50 px-6 py-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
          
//           <motion.h1 
//             initial={{ opacity: 0, x: -20 }} 
//             animate={{ opacity: 1, x: 0 }}
//             className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//             EMS PRO
//           </motion.h1>

//           <div className="flex gap-8 items-center">
//             <div className="hidden md:flex gap-6 text-sm text-gray-400">
//                <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
//                <a href="#stats" className="hover:text-emerald-400 transition-colors">Stats</a>
//                <a href="#reviews" className="hover:text-emerald-400 transition-colors">Reviews</a>
//             </div>

//             <Link to="/login" className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2 rounded-xl font-bold transition-colors">
//               Sign In
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        
//         {/* Video Background */}
//         <div className="absolute inset-0 z-0">
//           <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
//             <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-with-people-working-4352-large.mp4" type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black"></div>
//         </div>

//         <div className="relative z-10 max-w-4xl">
//           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            
//             <h1 className="text-5xl md:text-7xl font-black mb-6">
//               Manage Your Team <br />
//               <span className="text-emerald-400 italic">Like a Pro</span>
//             </h1>

//             <p className="text-gray-300 mb-10">
//               Smart Employee Management System for modern teams.
//             </p>

//             <Link to="/login" className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
//               Get Started
//             </Link>

//           </motion.div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section id="stats" className="py-20 text-center">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
//           {[
//             { val: "10k+", label: "Tasks Done" },
//             { val: "500+", label: "Teams" },
//             { val: "15+", label: "Countries" },
//             { val: "99.9%", label: "Uptime" }
//           ].map((stat, i) => (
//             <div key={i}>
//               <h3 className="text-4xl text-emerald-400 font-black">{stat.val}</h3>
//               <p className="text-gray-400">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section id="features" className="py-20 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl mb-10 font-bold">Features</h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             { title: "Task Tracking", desc: "Track tasks in real time" },
//             { title: "Secure Access", desc: "Role-based dashboards" },
//             { title: "Analytics", desc: "Performance insights" }
//           ].map((f, i) => (
//             <div key={i} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
//               <h3 className="text-xl mb-2 font-semibold">{f.title}</h3>
//               <p className="text-gray-400 text-sm">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* REVIEWS - 10 People */}
//       <section id="reviews" className="py-20 px-6 max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-3">Customer Reviews</h2>
//           <p className="text-gray-400">10,000+ satisfied users worldwide — yeh unhi ki awaazein hain</p>
//         </div>

//         {/* Scrollable Reviews Row */}
//         <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-500/30 scrollbar-track-transparent">
//           {reviews.map((review, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.03, y: -4 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="min-w-[280px] max-w-[280px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-emerald-500/40 transition-all"
//             >
//               {/* Video */}
//               <div className="relative">
//                 <video 
//                   autoPlay 
//                   muted 
//                   loop 
//                   playsInline 
//                   className="w-full h-44 object-cover"
//                   src={review.vid}
//                 />
//                 {/* Gradient overlay on video */}
//                 <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d0d0d] to-transparent"></div>
//               </div>

//               {/* Content */}
//               <div className="p-4">
//                 {renderStars(review.rating)}

//                 <p className="text-sm text-gray-300 italic mt-3 leading-relaxed">
//                   "{review.text}"
//                 </p>

//                 <div className="mt-4 pt-3 border-t border-white/10">
//                   <h4 className="font-bold text-white">{review.name}</h4>
//                   <span className="text-emerald-400 text-xs font-medium">{review.role}</span>
//                   <p className="text-gray-500 text-xs mt-0.5">{review.company}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Review count badge */}
//         <div className="text-center mt-8">
//           <span className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm px-4 py-2 rounded-full">
//             ⭐ 4.9/5 average — 10,000+ reviews
//           </span>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-20 text-center border-t border-white/10">
//         <p className="text-gray-400 mb-2 font-semibold">EMS PRO</p>
//         <p className="text-gray-500 text-sm">© 2026 All Rights Reserved</p>
//       </footer>

//     </div>
//   )
// }

// export default HomePage

// import React from 'react'
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

// const ReviewCard = ({ r }) => (
//   <div
//     style={{
//       background: 'rgba(255,255,255,0.04)',
//       border: '1px solid rgba(255,255,255,0.08)',
//       borderRadius: '14px', padding: '18px',
//       display: 'flex', flexDirection: 'column', gap: '12px',
//       transition: 'border-color 0.2s, transform 0.2s', cursor: 'default'
//     }}
//     onMouseEnter={e => {
//       e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'
//       e.currentTarget.style.transform = 'translateY(-4px)'
//     }}
//     onMouseLeave={e => {
//       e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
//       e.currentTarget.style.transform = 'translateY(0)'
//     }}
//   >
//     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//       <div style={{
//         width: '42px', height: '42px', borderRadius: '50%',
//         background: r.color + '22', border: `2px solid ${r.color}55`,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         color: r.color, fontWeight: '800', fontSize: '13px', flexShrink: 0
//       }}>{r.avatar}</div>
//       <div style={{ display: 'flex', gap: '2px' }}>
//         {[...Array(5)].map((_, i) => (
//           <span key={i} style={{ color: i < r.rating ? '#10b981' : '#374151', fontSize: '12px' }}>★</span>
//         ))}
//       </div>
//     </div>

//     <p style={{
//       color: '#9ca3af', fontSize: '12px', lineHeight: 1.75,
//       fontStyle: 'italic', margin: 0, flexGrow: 1
//     }}>"{r.text}"</p>

//     <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '10px' }}>
//       <div style={{ fontWeight: '800', fontSize: '13px', color: 'white' }}>{r.name}</div>
//       <div style={{ color: '#10b981', fontSize: '11px', marginTop: '2px' }}>{r.role}</div>
//       <div style={{ color: '#4b5563', fontSize: '11px', marginTop: '1px' }}>{r.company}</div>
//     </div>
//   </div>
// )

// const HomePage = () => {

//   const reviews = [
//     { avatar:'AK', color:'#10b981', rating:5, name:'Ali Khan', role:'HR Manager', company:'TechCorp Pvt Ltd',
//       text:'EMS PRO ne hamare HR processes ko bilkul badal diya. Ab sab kuch ek jagah manage hota hai aur time ki bahut bachat hoti hai!' },
//     { avatar:'SA', color:'#06b6d4', rating:5, name:'Sara Ahmed', role:'Team Lead', company:'DigitalMinds Agency',
//       text:'Bahut aasaan interface hai. Meri team ne 2 din mein seekh liya. Productivity double ho gayi aur errors bhi kam ho gaye!' },
//     { avatar:'UA', color:'#8b5cf6', rating:5, name:'Usman Ali', role:'Senior Developer', company:'SoftNest Solutions',
//       text:'Best EMS platform jo maine abhi tak use ki hai. Task tracking feature zabardast hai aur API integration bhi smooth hai.' },
//     { avatar:'AS', color:'#f59e0b', rating:4, name:'Ayesha Siddiqui', role:'Project Manager', company:'RemoteFirst Inc',
//       text:'Remote team manage karna ab mushkil nahi raha. Real-time updates bahut helpful hain, especially distributed teams ke liye.' },
//     { avatar:'BR', color:'#ef4444', rating:5, name:'Bilal Raza', role:'CEO', company:'StartupHub PK',
//       text:'Analytics dashboard ne decision making bahut easy kar di. ROI track karna ab 10 minute ka kaam hai!' },
//     { avatar:'FM', color:'#10b981', rating:5, name:'Fatima Malik', role:'Operations Director', company:'BizFlow Solutions',
//       text:'Team meetings aur task assignments ab ek platform pe. Sab ka workload clearly dikh raha hai, koi confusion nahi.' },
//     { avatar:'HS', color:'#3b82f6', rating:4, name:'Hamza Sheikh', role:'IT Administrator', company:'CyberSafe Pvt Ltd',
//       text:'Role-based access control feature excellent hai. Security aur privacy dono maintain hoti hai bina IT time waste kiye.' },
//     { avatar:'ZH', color:'#ec4899', rating:5, name:'Zara Hussain', role:'Customer Success', company:'CloudBase Technologies',
//       text:'Customer support bhi kaafi responsive hai. Koi bhi issue ho turant solve ho jata hai. Excellent service!' },
//     { avatar:'TM', color:'#f97316', rating:5, name:'Tariq Mehmood', role:'CTO', company:'Nexus Digital Group',
//       text:'Poori company ka data ek jagah, secure aur organized. Implementation bhi bahut smooth thi, downtime zero tha.' },
//     { avatar:'NQ', color:'#06b6d4', rating:4, name:'Nadia Qureshi', role:'Field Operations Lead', company:'OnGround Services',
//       text:'Mobile se bhi easily access hota hai. Field team ke liye ye feature game changer hai. Offline mode bhi amazing hai!' }
//   ]

//   const features = [
//     { icon:'📊', title:'Real-Time Task Tracking', badge:'Most Used',
//       desc:'Har task ka status live dekho. Priority set karo, deadlines manage karo, aur bottlenecks instantly identify karo.' },
//     { icon:'🔐', title:'Role-Based Access', badge:'Secure',
//       desc:'Admin, Manager, Employee — har role ka alag dashboard. Data security aur privacy 100% guaranteed.' },
//     { icon:'📈', title:'Advanced Analytics', badge:'AI Powered',
//       desc:'Team performance, attendance trends, aur productivity insights — sab kuch beautiful charts mein.' },
//     { icon:'📱', title:'Mobile Ready', badge:'Cross Platform',
//       desc:'iOS aur Android dono pe seamless experience. Field team bhi connected rahe 24/7.' },
//     { icon:'🔔', title:'Smart Notifications', badge:'Automated',
//       desc:'Deadline reminders, task updates, aur approvals — Slack, Email, aur SMS pe instant alerts.' },
//     { icon:'☁️', title:'Cloud Backup', badge:'Always On',
//       desc:'Data har second automatically backup hota hai. 99.99% uptime guarantee ke sath.' }
//   ]

//   return (
//     <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,#000 0%,#0a0a0a 50%,#0f172a 100%)', color:'white', fontFamily:"'Segoe UI',system-ui,sans-serif" }}>

//       {/* ── NAVBAR ── */}
//       <nav style={{ position:'fixed', top:0, width:'100%', zIndex:50, padding:'14px 24px', boxSizing:'border-box' }}>
//         <div style={{
//           maxWidth:'1200px', margin:'0 auto',
//           display:'flex', justifyContent:'space-between', alignItems:'center',
//           background:'rgba(0,0,0,0.55)', backdropFilter:'blur(24px)',
//           border:'1px solid rgba(255,255,255,0.08)', padding:'12px 28px', borderRadius:'16px'
//         }}>
//           <div style={{ fontSize:'22px', fontWeight:'900', background:'linear-gradient(90deg,#10b981,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
//             EMS PRO
//           </div>
//           <div style={{ display:'flex', gap:'28px', alignItems:'center' }}>
//             {['features','stats','reviews'].map(s => (
//               <a key={s} href={`#${s}`}
//                 style={{ color:'#9ca3af', textDecoration:'none', fontSize:'14px', transition:'color 0.2s' }}
//                 onMouseEnter={e => e.target.style.color='#10b981'}
//                 onMouseLeave={e => e.target.style.color='#9ca3af'}>
//                 {s.charAt(0).toUpperCase()+s.slice(1)}
//               </a>
//             ))}
//             <Link to="/login" style={{
//               background:'linear-gradient(90deg,#10b981,#059669)',
//               color:'white', padding:'10px 22px', borderRadius:'10px',
//               fontWeight:'700', textDecoration:'none', fontSize:'14px',
//               boxShadow:'0 4px 18px rgba(16,185,129,0.3)'
//             }}>Sign In →</Link>
//           </div>
//         </div>
//       </nav>

//       {/* ── HERO ── */}
//       <section style={{ position:'relative', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', overflow:'hidden', padding:'0 24px' }}>

//         <div style={{ position:'absolute', inset:0, zIndex:0, overflow:'hidden' }}>
//           <iframe
//             src="https://www.youtube.com/embed/ZJthWmvUzzc?autoplay=1&mute=1&loop=1&playlist=ZJthWmvUzzc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
//             allow="autoplay; encrypted-media"
//             style={{
//               position:'absolute', top:'50%', left:'50%',
//               width:'160vw', height:'90vh',
//               transform:'translate(-50%,-50%)',
//               border:'none', opacity:0.4, pointerEvents:'none'
//             }}
//           />
//           <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 60%, #000 100%)' }} />
//         </div>

//         <div style={{ position:'relative', zIndex:10, maxWidth:'860px' }}>
//           <div style={{
//             display:'inline-block', marginBottom:'28px',
//             background:'rgba(16,185,129,0.12)', border:'1px solid rgba(16,185,129,0.3)',
//             color:'#10b981', padding:'6px 20px', borderRadius:'50px', fontSize:'13px', fontWeight:'600'
//           }}>🚀 Pakistan ka #1 Employee Management System</div>

//           <h1 style={{ fontSize:'clamp(40px,7vw,78px)', fontWeight:'900', lineHeight:1.1, margin:'0 0 22px' }}>
//             Manage Your Team{' '}
//             <span style={{ background:'linear-gradient(90deg,#10b981,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontStyle:'italic' }}>
//               Like a Pro
//             </span>
//           </h1>

//           <p style={{ color:'#9ca3af', fontSize:'18px', maxWidth:'520px', margin:'0 auto 40px', lineHeight:1.75 }}>
//             Smart Employee Management System jo aapki team ko ek platform pe connected aur productive rakhta hai.
//           </p>

//           <div style={{ display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap' }}>
//             <Link to="/login" style={{
//               background:'linear-gradient(90deg,#10b981,#059669)',
//               color:'white', padding:'15px 34px', borderRadius:'14px',
//               fontWeight:'800', textDecoration:'none', fontSize:'16px',
//               boxShadow:'0 8px 30px rgba(16,185,129,0.35)'
//             }}>Get Started Free →</Link>
//             <a href="#features" style={{
//               background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.14)',
//               color:'white', padding:'15px 34px', borderRadius:'14px',
//               fontWeight:'700', textDecoration:'none', fontSize:'16px'
//             }}>See Features</a>
//           </div>
//         </div>
//       </section>

//       {/* ── STATS ── */}
//       <section id="stats" style={{ padding:'80px 24px' }}>
//         <div style={{ maxWidth:'900px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'24px', textAlign:'center' }}>
//           {[
//             { val:'10k+', label:'Tasks Done', icon:'✅' },
//             { val:'500+', label:'Happy Teams', icon:'👥' },
//             { val:'15+', label:'Countries', icon:'🌍' },
//             { val:'99.9%', label:'Uptime', icon:'⚡' }
//           ].map((s,i) => (
//             <div key={i} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'28px 16px' }}>
//               <div style={{ fontSize:'26px', marginBottom:'8px' }}>{s.icon}</div>
//               <div style={{ fontSize:'34px', fontWeight:'900', color:'#10b981', marginBottom:'6px' }}>{s.val}</div>
//               <div style={{ color:'#6b7280', fontSize:'14px' }}>{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── FEATURES ── */}
//       <section id="features" style={{ padding:'80px 24px' }}>
//         <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:'52px' }}>
//             <h2 style={{ fontSize:'40px', fontWeight:'900', margin:'0 0 10px' }}>Sab Kuch Ek Jagah</h2>
//             <p style={{ color:'#6b7280', fontSize:'16px', margin:0 }}>Jo features aapko chahiye the — wo sab EMS PRO mein hain</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'18px' }}>
//             {features.map((f,i) => (
//               <div key={i} style={{
//                 background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
//                 borderRadius:'16px', padding:'26px', transition:'border-color 0.2s,background 0.2s'
//               }}
//               onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(16,185,129,0.4)'; e.currentTarget.style.background='rgba(16,185,129,0.05)' }}
//               onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.background='rgba(255,255,255,0.04)' }}>
//                 <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'14px' }}>
//                   <span style={{ fontSize:'30px' }}>{f.icon}</span>
//                   <span style={{ background:'rgba(16,185,129,0.15)', color:'#10b981', fontSize:'10px', fontWeight:'700', padding:'3px 10px', borderRadius:'50px', border:'1px solid rgba(16,185,129,0.2)' }}>{f.badge}</span>
//                 </div>
//                 <h3 style={{ fontSize:'16px', fontWeight:'700', marginBottom:'8px' }}>{f.title}</h3>
//                 <p style={{ color:'#6b7280', fontSize:'13px', lineHeight:1.7, margin:0 }}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── REVIEWS — 5 + 5 ── */}
//       <section id="reviews" style={{ padding:'80px 24px' }}>
//         <div style={{ maxWidth:'1250px', margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:'52px' }}>
//             <h2 style={{ fontSize:'40px', fontWeight:'900', margin:'0 0 10px' }}>Hamare Customers Kehte Hain</h2>
//             <p style={{ color:'#6b7280', fontSize:'16px', margin:'0 0 18px' }}>10,000+ satisfied users — yeh unki real stories hain</p>
//             <span style={{
//               display:'inline-block',
//               background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.25)',
//               color:'#10b981', padding:'7px 20px', borderRadius:'50px', fontSize:'13px', fontWeight:'600'
//             }}>⭐ 4.9/5 Average — 10,000+ Reviews</span>
//           </div>

//           {/* Row 1 */}
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'14px', marginBottom:'14px' }}>
//             {reviews.slice(0,5).map((r,i) => <ReviewCard key={i} r={r} />)}
//           </div>
//           {/* Row 2 */}
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'14px' }}>
//             {reviews.slice(5,10).map((r,i) => <ReviewCard key={i} r={r} />)}
//           </div>
//         </div>
//       </section>

//       {/* ── FOOTER ── */}
//       <footer style={{
//         background:'linear-gradient(180deg,#0a0a0a 0%,#000 100%)',
//         borderTop:'1px solid rgba(255,255,255,0.06)',
//         padding:'72px 24px 32px'
//       }}>
//         <div style={{ maxWidth:'1200px', margin:'0 auto' }}>

//           <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:'48px', marginBottom:'52px' }}>

//             {/* Brand */}
//             <div>
//               <div style={{ fontSize:'24px', fontWeight:'900', marginBottom:'14px', background:'linear-gradient(90deg,#10b981,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>EMS PRO</div>
//               <p style={{ color:'#4b5563', fontSize:'13px', lineHeight:1.85, marginBottom:'20px', maxWidth:'270px' }}>
//                 Pakistan ka #1 Employee Management System. Modern teams ke liye smart, secure, aur scalable solution.
//               </p>
//               <div style={{ display:'flex', gap:'10px' }}>
//                 {['in','𝕏','f'].map((s,i) => (
//                   <div key={i} style={{
//                     width:'34px', height:'34px', borderRadius:'8px',
//                     background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)',
//                     display:'flex', alignItems:'center', justifyContent:'center',
//                     color:'#6b7280', fontSize:'13px', cursor:'pointer',
//                     transition:'background 0.2s, color 0.2s'
//                   }}
//                   onMouseEnter={e => { e.currentTarget.style.background='rgba(16,185,129,0.15)'; e.currentTarget.style.color='#10b981' }}
//                   onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='#6b7280' }}>
//                     {s}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Links */}
//             {[
//               { heading:'Product', links:['Features','Pricing','Integrations','Changelog','Roadmap'] },
//               { heading:'Company', links:['About Us','Blog','Careers','Press Kit','Contact'] },
//               { heading:'Support', links:['Help Center','Documentation','API Docs','Status Page','Privacy Policy'] }
//             ].map(col => (
//               <div key={col.heading}>
//                 <h4 style={{ color:'white', fontWeight:'800', margin:'0 0 16px', fontSize:'14px' }}>{col.heading}</h4>
//                 {col.links.map(l => (
//                   <div key={l} style={{ marginBottom:'10px' }}>
//                     <a href="#" style={{ color:'#4b5563', textDecoration:'none', fontSize:'13px', transition:'color 0.2s' }}
//                       onMouseEnter={e => e.target.style.color='#10b981'}
//                       onMouseLeave={e => e.target.style.color='#4b5563'}>
//                       {l}
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Newsletter */}
//           <div style={{
//             background:'linear-gradient(135deg,rgba(16,185,129,0.08),rgba(6,182,212,0.08))',
//             border:'1px solid rgba(16,185,129,0.15)', borderRadius:'16px', padding:'30px 32px',
//             display:'flex', justifyContent:'space-between', alignItems:'center',
//             marginBottom:'44px', flexWrap:'wrap', gap:'20px'
//           }}>
//             <div>
//               <h3 style={{ margin:'0 0 6px', fontSize:'17px', fontWeight:'800' }}>📬 Updates aur tips ke liye subscribe karo</h3>
//               <p style={{ margin:0, color:'#6b7280', fontSize:'13px' }}>Haftawar HR tips, product updates, aur exclusive offers.</p>
//             </div>
//             <div style={{ display:'flex', gap:'10px' }}>
//               <input type="email" placeholder="aapka@email.com" style={{
//                 background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)',
//                 color:'white', padding:'10px 16px', borderRadius:'10px',
//                 fontSize:'14px', outline:'none', width:'200px'
//               }} />
//               <button style={{
//                 background:'linear-gradient(90deg,#10b981,#059669)',
//                 color:'white', border:'none', padding:'10px 20px',
//                 borderRadius:'10px', fontWeight:'700', cursor:'pointer', fontSize:'14px'
//               }}>Subscribe</button>
//             </div>
//           </div>

//           {/* Bottom bar */}
//           <div style={{
//             display:'flex', justifyContent:'space-between', alignItems:'center',
//             paddingTop:'22px', borderTop:'1px solid rgba(255,255,255,0.05)',
//             flexWrap:'wrap', gap:'12px'
//           }}>
//             <p style={{ color:'#374151', fontSize:'13px', margin:0 }}>
//               © 2026 EMS PRO. All Rights Reserved. Made with ❤️ in Pakistan.
//             </p>
//             <div style={{ display:'flex', gap:'20px' }}>
//               {['Terms','Privacy','Cookies','Sitemap'].map(l => (
//                 <a key={l} href="#" style={{ color:'#374151', textDecoration:'none', fontSize:'12px', transition:'color 0.2s' }}
//                   onMouseEnter={e => e.target.style.color='#10b981'}
//                   onMouseLeave={e => e.target.style.color='#374151'}>
//                   {l}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </footer>

//     </div>
//   )
// }

// export default HomePage



// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

//   * { margin:0; padding:0; box-sizing:border-box; }
//   body { font-family:'DM Sans',sans-serif; }

//   @keyframes blob1 {
//     0%,100% { transform: translate(0,0) scale(1); }
//     33%      { transform: translate(60px,-40px) scale(1.1); }
//     66%      { transform: translate(-30px,30px) scale(0.95); }
//   }
//   @keyframes blob2 {
//     0%,100% { transform: translate(0,0) scale(1); }
//     33%      { transform: translate(-50px,50px) scale(1.08); }
//     66%      { transform: translate(40px,-20px) scale(0.92); }
//   }
//   @keyframes blob3 {
//     0%,100% { transform: translate(0,0) scale(1); }
//     50%      { transform: translate(30px,60px) scale(1.12); }
//   }
//   @keyframes float {
//     0%,100% { transform: translateY(0px); }
//     50%      { transform: translateY(-12px); }
//   }
//   @keyframes fadeUp {
//     from { opacity:0; transform:translateY(30px); }
//     to   { opacity:1; transform:translateY(0); }
//   }

//   .fadeUp { animation: fadeUp 0.7s ease both; }
//   .d1 { animation-delay:0.1s; }
//   .d2 { animation-delay:0.25s; }
//   .d3 { animation-delay:0.4s; }

//   .hero-btn-primary {
//     background: linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899);
//     color:#fff; padding:16px 38px; border-radius:50px;
//     font-family:'DM Sans',sans-serif; font-weight:700; font-size:17px;
//     text-decoration:none; border:none; cursor:pointer;
//     box-shadow: 0 10px 40px rgba(99,102,241,0.45);
//     transition: transform 0.2s, box-shadow 0.2s;
//     display:inline-block;
//   }
//   .hero-btn-primary:hover {
//     transform:translateY(-3px) scale(1.03);
//     box-shadow: 0 18px 50px rgba(99,102,241,0.55);
//   }
//   .hero-btn-secondary {
//     background: rgba(255,255,255,0.12);
//     backdrop-filter: blur(10px);
//     color:#fff; padding:16px 38px; border-radius:50px;
//     font-family:'DM Sans',sans-serif; font-weight:600; font-size:17px;
//     text-decoration:none; border:2px solid rgba(255,255,255,0.25);
//     transition: background 0.2s, transform 0.2s;
//     display:inline-block;
//   }
//   .hero-btn-secondary:hover {
//     background: rgba(255,255,255,0.2);
//     transform:translateY(-3px);
//   }

//   .feat-card {
//     background: #fff;
//     border-radius: 24px;
//     padding: 32px 26px;
//     transition: transform 0.25s, box-shadow 0.25s;
//     position: relative; overflow: hidden;
//     cursor: default;
//   }
//   .feat-card:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 24px 60px rgba(0,0,0,0.13);
//   }

//   .review-card {
//     background: #fff;
//     border-radius: 20px;
//     padding: 24px;
//     display:flex; flex-direction:column; gap:14px;
//     transition: transform 0.25s, box-shadow 0.25s;
//     cursor:default;
//     box-shadow: 0 4px 20px rgba(0,0,0,0.06);
//   }
//   .review-card:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 20px 50px rgba(0,0,0,0.12);
//   }

//   .stat-card {
//     background:#fff; border-radius:24px; padding:32px 20px;
//     text-align:center;
//     transition: transform 0.25s, box-shadow 0.25s;
//     box-shadow: 0 4px 20px rgba(0,0,0,0.06);
//   }
//   .stat-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(0,0,0,0.1); }

//   .nav-link {
//     color:#4b5563; text-decoration:none; font-size:15px;
//     font-weight:500; transition:color 0.2s;
//     font-family:'DM Sans',sans-serif;
//   }
//   .nav-link:hover { color:#6366f1; }

//   .footer-link {
//     color:#9ca3af; text-decoration:none; font-size:13px;
//     transition:color 0.2s; display:block; margin-bottom:10px;
//     font-family:'DM Sans',sans-serif;
//   }
//   .footer-link:hover { color:#6366f1; }

//   .pill-badge {
//     display:inline-flex; align-items:center; gap:6px;
//     padding:5px 14px; border-radius:50px; font-size:11px;
//     font-weight:700; letter-spacing:0.5px; text-transform:uppercase;
//   }
// `

// const REVIEWS = [
//   { initials:'AK', bg:'linear-gradient(135deg,#6366f1,#8b5cf6)', rating:5,
//     name:'Ali Khan', role:'HR Manager', company:'TechCorp International',
//     text:'EMS PRO completely transformed our HR operations. Everything is managed in one place — saving us hours every week.' },
//   { initials:'SA', bg:'linear-gradient(135deg,#f59e0b,#ef4444)', rating:5,
//     name:'Sara Ahmed', role:'Team Lead', company:'DigitalMinds Agency',
//     text:'Incredibly easy to use. Our entire team was onboarded in two days. Productivity has doubled and errors are way down.' },
//   { initials:'UA', bg:'linear-gradient(135deg,#10b981,#06b6d4)', rating:5,
//     name:'Usman Ali', role:'Senior Developer', company:'SoftNest Solutions',
//     text:'The best EMS platform I have worked with. Task tracking is powerful and the API integration is seamless.' },
//   { initials:'AS', bg:'linear-gradient(135deg,#ec4899,#f97316)', rating:4,
//     name:'Ayesha Siddiqui', role:'Project Manager', company:'RemoteFirst Inc',
//     text:'Managing distributed teams has never been easier. Real-time updates keep everyone aligned across time zones.' },
//   { initials:'BR', bg:'linear-gradient(135deg,#3b82f6,#6366f1)', rating:5,
//     name:'Bilal Raza', role:'CEO', company:'StartupHub Group',
//     text:'The analytics dashboard alone was worth every penny. Tracking ROI now takes minutes instead of hours.' },
//   { initials:'FM', bg:'linear-gradient(135deg,#8b5cf6,#ec4899)', rating:5,
//     name:'Fatima Malik', role:'Operations Director', company:'BizFlow Solutions',
//     text:'All meetings, task assignments, and workload visibility in one platform. Team clarity improved overnight.' },
//   { initials:'HS', bg:'linear-gradient(135deg,#06b6d4,#10b981)', rating:4,
//     name:'Hamza Sheikh', role:'IT Administrator', company:'CyberSafe Ltd',
//     text:'Role-based access control is rock solid. Full security and privacy without burdening the IT team.' },
//   { initials:'ZH', bg:'linear-gradient(135deg,#f97316,#f59e0b)', rating:5,
//     name:'Zara Hussain', role:'Customer Success', company:'CloudBase Technologies',
//     text:'Support is incredibly responsive. Every issue has been resolved quickly and professionally. Outstanding!' },
//   { initials:'TM', bg:'linear-gradient(135deg,#ef4444,#ec4899)', rating:5,
//     name:'Tariq Mehmood', role:'CTO', company:'Nexus Digital Group',
//     text:'All company data is centralized, secure, and organized. Implementation was smooth with zero downtime.' },
//   { initials:'NQ', bg:'linear-gradient(135deg,#10b981,#6366f1)', rating:4,
//     name:'Nadia Qureshi', role:'Field Operations Lead', company:'OnGround Services',
//     text:'Mobile access is a game changer for field teams. The offline mode ensures connectivity is never a blocker.' },
// ]

// const FEATURES = [
//   { emoji:'📊', title:'Real-Time Task Tracking', badge:'Most Used',
//     badgeBg:'#ede9fe', badgeColor:'#7c3aed', accent:'#6366f1', lightBg:'#eef2ff',
//     desc:'Monitor every task live. Set priorities, manage deadlines, and instantly spot bottlenecks.' },
//   { emoji:'🔐', title:'Role-Based Access Control', badge:'Secure',
//     badgeBg:'#dcfce7', badgeColor:'#16a34a', accent:'#10b981', lightBg:'#ecfdf5',
//     desc:'Separate dashboards for Admins, Managers, and Employees. Full data security guaranteed.' },
//   { emoji:'📈', title:'Advanced Analytics', badge:'AI Powered',
//     badgeBg:'#fef3c7', badgeColor:'#d97706', accent:'#f59e0b', lightBg:'#fffbeb',
//     desc:'Performance, attendance, and productivity insights visualized in beautiful dashboards.' },
//   { emoji:'📱', title:'Mobile Ready', badge:'Cross Platform',
//     badgeBg:'#fce7f3', badgeColor:'#be185d', accent:'#ec4899', lightBg:'#fdf2f8',
//     desc:'Seamless experience on iOS and Android. Keep field teams productive around the clock.' },
//   { emoji:'🔔', title:'Smart Notifications', badge:'Automated',
//     badgeBg:'#dbeafe', badgeColor:'#1d4ed8', accent:'#3b82f6', lightBg:'#eff6ff',
//     desc:'Deadline reminders and approvals via Slack, Email, and SMS — all automated.' },
//   { emoji:'☁️', title:'Cloud Backup', badge:'Always On',
//     badgeBg:'#ffedd5', badgeColor:'#c2410c', accent:'#f97316', lightBg:'#fff7ed',
//     desc:'Data backed up every second. 99.99% uptime with enterprise-grade reliability.' },
// ]

// const STATS = [
//   { val:'10k+', label:'Tasks Completed', emoji:'✅', color:'#6366f1', bg:'#eef2ff' },
//   { val:'500+', label:'Global Teams',    emoji:'🌐', color:'#10b981', bg:'#ecfdf5' },
//   { val:'15+',  label:'Countries',       emoji:'🌍', color:'#f59e0b', bg:'#fffbeb' },
//   { val:'99.9%',label:'Uptime',          emoji:'⚡', color:'#ec4899', bg:'#fdf2f8' },
// ]

// const ReviewCard = ({ r }) => (
//   <div className="review-card">
//     <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//       <div style={{
//         width:46, height:46, borderRadius:'50%',
//         background:r.bg, display:'flex', alignItems:'center', justifyContent:'center',
//         color:'#fff', fontWeight:800, fontSize:14, flexShrink:0,
//         fontFamily:"'DM Sans',sans-serif",
//         boxShadow:'0 4px 14px rgba(0,0,0,0.18)'
//       }}>{r.initials}</div>
//       <div style={{ display:'flex', gap:2 }}>
//         {[...Array(5)].map((_,i)=>(
//           <span key={i} style={{ color: i<r.rating ? '#f59e0b' : '#e5e7eb', fontSize:14 }}>★</span>
//         ))}
//       </div>
//     </div>
//     <p style={{ color:'#6b7280', fontSize:13, lineHeight:1.75, fontStyle:'italic', margin:0, flexGrow:1, fontFamily:"'DM Sans',sans-serif" }}>
//       "{r.text}"
//     </p>
//     <div style={{ borderTop:'1.5px solid #f3f4f6', paddingTop:12 }}>
//       <div style={{ fontWeight:700, fontSize:14, color:'#111827', fontFamily:"'DM Sans',sans-serif" }}>{r.name}</div>
//       <div style={{ fontSize:12, color:'#6366f1', marginTop:2, fontWeight:600 }}>{r.role}</div>
//       <div style={{ fontSize:11, color:'#9ca3af', marginTop:1 }}>{r.company}</div>
//     </div>
//   </div>
// )

// export default function HomePage() {
//   const [scrolled, setScrolled] = useState(false)
//   useEffect(()=>{
//     const fn = ()=>setScrolled(window.scrollY>40)
//     window.addEventListener('scroll',fn)
//     return ()=>window.removeEventListener('scroll',fn)
//   },[])

//   return (
//     <>
//       <style>{STYLES}</style>

//       {/* ══ NAVBAR ══ */}
//       <nav style={{
//         position:'fixed', top:0, width:'100%', zIndex:100,
//         padding:'12px 24px', boxSizing:'border-box',
//         transition:'background 0.3s, box-shadow 0.3s',
//         background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
//         backdropFilter: scrolled ? 'blur(20px)' : 'none',
//         boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.08)' : 'none',
//       }}>
//         <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//           <div style={{
//             fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800,
//             background:'linear-gradient(135deg,#6366f1,#ec4899)',
//             WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
//           }}>EMS PRO</div>
//           <div style={{ display:'flex', gap:32, alignItems:'center' }}>
//             {['Features','Stats','Reviews'].map(s=>(
//               <a key={s} href={`#${s.toLowerCase()}`} className="nav-link">{s}</a>
//             ))}
//             <Link to="/login" style={{
//               background:'linear-gradient(135deg,#6366f1,#8b5cf6)',
//               color:'#fff', padding:'10px 24px', borderRadius:'50px',
//               fontWeight:700, textDecoration:'none', fontSize:14,
//               fontFamily:"'DM Sans',sans-serif",
//               boxShadow:'0 4px 18px rgba(99,102,241,0.35)',
//               transition:'transform 0.2s, box-shadow 0.2s'
//             }}
//             onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(99,102,241,0.45)' }}
//             onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 4px 18px rgba(99,102,241,0.35)' }}>
//               Sign In →
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* ══ HERO ══ */}
//       <section style={{
//         minHeight:'100vh', position:'relative', overflow:'hidden',
//         display:'flex', alignItems:'center', justifyContent:'center',
//         textAlign:'center', padding:'120px 24px 80px',
//         background:'linear-gradient(160deg, #0f0c29 0%, #302b63 40%, #24243e 100%)',
//       }}>
//         {/* Animated blobs */}
//         <div style={{ position:'absolute', inset:0, overflow:'hidden', zIndex:0 }}>
//           <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(99,102,241,0.55) 0%,transparent 70%)', top:'-150px', left:'-150px', animation:'blob1 10s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(236,72,153,0.5) 0%,transparent 70%)', bottom:'-100px', right:'-100px', animation:'blob2 13s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(16,185,129,0.4) 0%,transparent 70%)', top:'40%', left:'55%', animation:'blob3 9s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(245,158,11,0.35) 0%,transparent 70%)', top:'10%', right:'20%', animation:'blob1 11s ease-in-out infinite reverse' }}/>
//         </div>

//         {/* ✅ PEXELS WORKING VIDEO */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             position:'absolute', top:'50%', left:'50%',
//             width:'100%', height:'100%',
//             objectFit:'cover',
//             transform:'translate(-50%,-50%)',
//             opacity:0.3, pointerEvents:'none', zIndex:1
//           }}
//         >
//           <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
//         </video>

//         {/* Dark overlay */}
//         <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 60%, #0f0c29 100%)', zIndex:2 }}/>

//         {/* Content */}
//         <div style={{ position:'relative', zIndex:10, maxWidth:860 }}>
//           <div className="fadeUp d1" style={{
//             display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
//             background:'rgba(255,255,255,0.12)', backdropFilter:'blur(12px)',
//             border:'1px solid rgba(255,255,255,0.2)',
//             color:'#fff', padding:'8px 22px', borderRadius:'50px', fontSize:13, fontWeight:600,
//             fontFamily:"'DM Sans',sans-serif",
//           }}>
//             <span style={{ fontSize:18 }}>🚀</span>
//             The World's Smartest Employee Management System
//           </div>

//           <h1 className="fadeUp d2" style={{
//             fontFamily:"'Syne',sans-serif", fontSize:'clamp(42px,7vw,82px)',
//             fontWeight:800, lineHeight:1.08, margin:'0 0 24px', color:'#fff',
//           }}>
//             Manage Your Team<br/>
//             <span style={{ background:'linear-gradient(90deg,#f59e0b,#ec4899,#6366f1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
//               Like Never Before
//             </span>
//           </h1>

//           <p className="fadeUp d3" style={{
//             color:'rgba(255,255,255,0.75)', fontSize:19,
//             maxWidth:540, margin:'0 auto 44px', lineHeight:1.8,
//             fontFamily:"'DM Sans',sans-serif"
//           }}>
//             A smart, secure, and scalable Employee Management System built for modern high-performing teams across the globe.
//           </p>

//           <div className="fadeUp d3" style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
//             <Link to="/login" className="hero-btn-primary">Get Started Free →</Link>
//             <a href="#features" className="hero-btn-secondary">Explore Features</a>
//           </div>

//           <div style={{ marginTop:52, display:'flex', justifyContent:'center', gap:32, flexWrap:'wrap' }}>
//             {['✅ No credit card required','⚡ Setup in 5 minutes','🔒 Enterprise-grade security'].map(t=>(
//               <span key={t} style={{ color:'rgba(255,255,255,0.55)', fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>{t}</span>
//             ))}
//           </div>
//         </div>

//         <div style={{ position:'absolute', bottom:0, left:0, right:0, height:100, background:'linear-gradient(to bottom,transparent,#f8faff)', zIndex:5 }}/>
//       </section>

//       {/* ══ STATS ══ */}
//       <section id="stats" style={{ padding:'80px 24px', background:'#f8faff' }}>
//         <div style={{ maxWidth:1000, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:48 }}>
//             <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:38, fontWeight:800, color:'#111827', margin:'0 0 10px' }}>
//               Numbers That{' '}
//               <span style={{ background:'linear-gradient(90deg,#6366f1,#ec4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Speak</span>
//             </h2>
//             <p style={{ color:'#6b7280', fontSize:16, fontFamily:"'DM Sans',sans-serif" }}>Trusted by teams in over 15 countries worldwide</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
//             {STATS.map((s,i)=>(
//               <div key={i} className="stat-card">
//                 <div style={{ width:64, height:64, borderRadius:18, background:s.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, margin:'0 auto 16px' }}>{s.emoji}</div>
//                 <div style={{ fontFamily:"'Syne',sans-serif", fontSize:36, fontWeight:800, color:s.color, marginBottom:6 }}>{s.val}</div>
//                 <div style={{ color:'#6b7280', fontSize:14, fontFamily:"'DM Sans',sans-serif" }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ FEATURES ══ */}
//       <section id="features" style={{ padding:'90px 24px', background:'#fff' }}>
//         <div style={{ maxWidth:1100, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:56 }}>
//             <div style={{ display:'inline-block', background:'#eef2ff', color:'#6366f1', padding:'6px 18px', borderRadius:'50px', fontSize:12, fontWeight:700, marginBottom:16, fontFamily:"'DM Sans',sans-serif", letterSpacing:'0.5px' }}>✦ FEATURES</div>
//             <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:40, fontWeight:800, color:'#111827', margin:'0 0 12px' }}>
//               Everything in{' '}
//               <span style={{ background:'linear-gradient(90deg,#6366f1,#ec4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>One Place</span>
//             </h2>
//             <p style={{ color:'#6b7280', fontSize:16, maxWidth:480, margin:'0 auto', fontFamily:"'DM Sans',sans-serif", lineHeight:1.7 }}>
//               Every feature your team needs — beautifully designed and built right into EMS PRO.
//             </p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:22 }}>
//             {FEATURES.map((f,i)=>(
//               <div key={i} className="feat-card" style={{ boxShadow:'0 4px 24px rgba(0,0,0,0.07)' }}>
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:4, background:`linear-gradient(90deg,${f.accent},${f.accent}88)`, borderRadius:'24px 24px 0 0' }}/>
//                 <div style={{ width:64, height:64, borderRadius:20, background:f.lightBg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:30, marginBottom:18, boxShadow:`0 4px 16px ${f.accent}22` }}>{f.emoji}</div>
//                 <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
//                   <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:17, fontWeight:800, color:'#111827', lineHeight:1.3, maxWidth:180 }}>{f.title}</h3>
//                   <span className="pill-badge" style={{ background:f.badgeBg, color:f.badgeColor, flexShrink:0, marginLeft:8 }}>{f.badge}</span>
//                 </div>
//                 <p style={{ color:'#6b7280', fontSize:14, lineHeight:1.75, margin:0, fontFamily:"'DM Sans',sans-serif" }}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ HOW IT WORKS ══ */}
//       <section style={{
//         padding:'90px 24px',
//         background:'linear-gradient(135deg,#667eea 0%,#764ba2 50%,#f093fb 100%)',
//         position:'relative', overflow:'hidden'
//       }}>
//         <div style={{ position:'absolute', width:300, height:300, borderRadius:'50%', background:'rgba(255,255,255,0.07)', top:-80, right:-80 }}/>
//         <div style={{ position:'absolute', width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', bottom:-50, left:-50 }}/>
//         <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:56 }}>
//             <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:40, fontWeight:800, color:'#fff', margin:'0 0 12px' }}>Up & Running in 3 Steps</h2>
//             <p style={{ color:'rgba(255,255,255,0.75)', fontSize:16, fontFamily:"'DM Sans',sans-serif" }}>No complicated setup. Just sign up and start managing.</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28 }}>
//             {[
//               { step:'01', emoji:'🎯', title:'Sign Up', desc:'Create your account in under 2 minutes. No credit card needed.' },
//               { step:'02', emoji:'👥', title:'Add Your Team', desc:'Invite employees, assign roles, and set up departments instantly.' },
//               { step:'03', emoji:'🚀', title:'Start Managing', desc:'Track tasks, view analytics, and boost productivity from day one.' },
//             ].map((s,i)=>(
//               <div key={i} style={{
//                 background:'rgba(255,255,255,0.15)', backdropFilter:'blur(16px)',
//                 border:'1px solid rgba(255,255,255,0.25)',
//                 borderRadius:24, padding:'36px 28px', textAlign:'center',
//                 transition:'transform 0.25s',
//               }}
//               onMouseEnter={e=>e.currentTarget.style.transform='translateY(-6px)'}
//               onMouseLeave={e=>e.currentTarget.style.transform='none'}>
//                 <div style={{
//                   width:56, height:56, borderRadius:'50%',
//                   background:'rgba(255,255,255,0.2)', backdropFilter:'blur(10px)',
//                   border:'2px solid rgba(255,255,255,0.3)',
//                   display:'flex', alignItems:'center', justifyContent:'center',
//                   fontSize:24, margin:'0 auto 16px',
//                   animation:'float 3s ease-in-out infinite',
//                   animationDelay:`${i*0.5}s`
//                 }}>{s.emoji}</div>
//                 <div style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:800, color:'rgba(255,255,255,0.5)', marginBottom:6, letterSpacing:2 }}>STEP {s.step}</div>
//                 <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color:'#fff', marginBottom:10 }}>{s.title}</h3>
//                 <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, lineHeight:1.75, margin:0, fontFamily:"'DM Sans',sans-serif" }}>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ REVIEWS ══ */}
//       <section id="reviews" style={{ padding:'90px 24px', background:'#f8faff' }}>
//         <div style={{ maxWidth:1260, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:52 }}>
//             <div style={{ display:'inline-block', background:'#fce7f3', color:'#be185d', padding:'6px 18px', borderRadius:'50px', fontSize:12, fontWeight:700, marginBottom:16, fontFamily:"'DM Sans',sans-serif", letterSpacing:'0.5px' }}>★ REVIEWS</div>
//             <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:40, fontWeight:800, color:'#111827', margin:'0 0 10px' }}>
//               Trusted by Teams{' '}
//               <span style={{ background:'linear-gradient(90deg,#6366f1,#ec4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Worldwide</span>
//             </h2>
//             <p style={{ color:'#6b7280', fontSize:16, margin:'0 0 20px', fontFamily:"'DM Sans',sans-serif" }}>Over 10,000 satisfied users — here are their real stories</p>
//             <div style={{
//               display:'inline-flex', alignItems:'center', gap:8,
//               background:'linear-gradient(135deg,#fef3c7,#fde68a)',
//               border:'1px solid #f59e0b', color:'#92400e',
//               padding:'8px 22px', borderRadius:'50px', fontSize:13, fontWeight:700,
//               fontFamily:"'DM Sans',sans-serif"
//             }}>⭐ 4.9 / 5 Average Rating — 10,000+ Reviews</div>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:16, marginBottom:16 }}>
//             {REVIEWS.slice(0,5).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:16 }}>
//             {REVIEWS.slice(5,10).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//         </div>
//       </section>

//       {/* ══ CTA BANNER ══ */}
//       <section style={{
//         padding:'90px 24px',
//         background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',
//         position:'relative', overflow:'hidden', textAlign:'center'
//       }}>
//         <div style={{ position:'absolute', inset:0 }}>
//           <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(99,102,241,0.4) 0%,transparent 70%)', top:'-100px', left:'-100px', animation:'blob1 10s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(236,72,153,0.4) 0%,transparent 70%)', bottom:'-80px', right:'-80px', animation:'blob2 12s ease-in-out infinite' }}/>
//         </div>
//         <div style={{ position:'relative', zIndex:2, maxWidth:700, margin:'0 auto' }}>
//           <div style={{ fontSize:52, marginBottom:20, animation:'float 3s ease-in-out infinite' }}>🎯</div>
//           <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:44, fontWeight:800, color:'#fff', margin:'0 0 16px', lineHeight:1.15 }}>
//             Ready to Transform<br/>Your Team Management?
//           </h2>
//           <p style={{ color:'rgba(255,255,255,0.7)', fontSize:17, margin:'0 auto 40px', lineHeight:1.75, fontFamily:"'DM Sans',sans-serif", maxWidth:480 }}>
//             Join over 500 teams worldwide already using EMS PRO to work smarter, faster, and better.
//           </p>
//           <Link to="/login" className="hero-btn-primary" style={{ fontSize:18, padding:'18px 48px' }}>
//             Start for Free Today →
//           </Link>
//           <p style={{ color:'rgba(255,255,255,0.4)', fontSize:12, marginTop:18, fontFamily:"'DM Sans',sans-serif" }}>
//             No credit card required · Cancel anytime · Setup in 5 minutes
//           </p>
//         </div>
//       </section>

//       {/* ══ FOOTER ══ */}
//       <footer style={{ background:'#0f0c29', padding:'72px 24px 0' }}>
//         <div style={{ maxWidth:1200, margin:'0 auto' }}>
//           <div style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:48, marginBottom:56 }}>

//             {/* Brand */}
//             <div>
//               <div style={{ fontFamily:"'Syne',sans-serif", fontSize:26, fontWeight:800, marginBottom:14, background:'linear-gradient(135deg,#6366f1,#ec4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>EMS PRO</div>
//               <p style={{ color:'#6b7280', fontSize:14, lineHeight:1.85, marginBottom:24, maxWidth:280, fontFamily:"'DM Sans',sans-serif" }}>
//                 A world-class Employee Management System built for modern, high-performing teams across the globe.
//               </p>
//               <div style={{ display:'flex', gap:10, marginBottom:28 }}>
//                 {[
//                   { icon:'in', bg:'#0077b5' },
//                   { icon:'𝕏',  bg:'#000' },
//                   { icon:'f',  bg:'#1877f2' },
//                   { icon:'▶', bg:'#ff0000' },
//                 ].map((s,i)=>(
//                   <div key={i} style={{
//                     width:38, height:38, borderRadius:10, background:s.bg,
//                     display:'flex', alignItems:'center', justifyContent:'center',
//                     color:'#fff', fontSize:14, cursor:'pointer',
//                     transition:'transform 0.2s, opacity 0.2s', opacity:0.8
//                   }}
//                   onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.opacity='1' }}
//                   onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.opacity='0.8' }}>
//                     {s.icon}
//                   </div>
//                 ))}
//               </div>
//               <div style={{ display:'flex', gap:10 }}>
//                 {['App Store','Google Play'].map(b=>(
//                   <div key={b} style={{
//                     background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)',
//                     borderRadius:10, padding:'8px 14px', cursor:'pointer',
//                     transition:'background 0.2s'
//                   }}
//                   onMouseEnter={e=>e.currentTarget.style.background='rgba(99,102,241,0.2)'}
//                   onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.08)'}>
//                     <div style={{ color:'#9ca3af', fontSize:9, fontFamily:"'DM Sans',sans-serif", marginBottom:2 }}>Download on the</div>
//                     <div style={{ color:'#fff', fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>{b}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Link columns */}
//             {[
//               { heading:'Product', links:['Features','Pricing','Integrations','Changelog','Roadmap'] },
//               { heading:'Company', links:['About Us','Blog','Careers','Press Kit','Contact'] },
//               { heading:'Support', links:['Help Center','Documentation','API Docs','Status Page','Privacy Policy'] },
//             ].map(col=>(
//               <div key={col.heading}>
//                 <h4 style={{ color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:800, margin:'0 0 18px', fontSize:15 }}>{col.heading}</h4>
//                 {col.links.map(l=>(
//                   <a key={l} href="#" className="footer-link">{l}</a>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Newsletter */}
//           <div style={{
//             background:'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(236,72,153,0.15))',
//             border:'1px solid rgba(99,102,241,0.25)', borderRadius:20,
//             padding:'32px 36px', display:'flex', justifyContent:'space-between',
//             alignItems:'center', marginBottom:48, flexWrap:'wrap', gap:20
//           }}>
//             <div>
//               <h3 style={{ fontFamily:"'Syne',sans-serif", color:'#fff', fontWeight:800, fontSize:18, margin:'0 0 6px' }}>📬 Stay in the Loop</h3>
//               <p style={{ color:'#6b7280', fontSize:13, margin:0, fontFamily:"'DM Sans',sans-serif" }}>Weekly HR tips, product updates, and exclusive offers — straight to your inbox.</p>
//             </div>
//             <div style={{ display:'flex', gap:10 }}>
//               <input type="email" placeholder="your@email.com" style={{
//                 background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)',
//                 color:'#fff', padding:'11px 18px', borderRadius:12,
//                 fontSize:14, outline:'none', width:220,
//                 fontFamily:"'DM Sans',sans-serif"
//               }}/>
//               <button style={{
//                 background:'linear-gradient(135deg,#6366f1,#ec4899)',
//                 color:'#fff', border:'none', padding:'11px 22px',
//                 borderRadius:12, fontWeight:700, cursor:'pointer', fontSize:14,
//                 fontFamily:"'DM Sans',sans-serif",
//                 boxShadow:'0 4px 18px rgba(99,102,241,0.35)',
//                 transition:'transform 0.2s'
//               }}
//               onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
//               onMouseLeave={e=>e.currentTarget.style.transform='none'}>
//                 Subscribe
//               </button>
//             </div>
//           </div>

//           {/* Trust badges */}
//           <div style={{ display:'flex', justifyContent:'center', gap:24, marginBottom:36, flexWrap:'wrap' }}>
//             {[
//               { icon:'🏆', text:'Product of the Year 2025' },
//               { icon:'🔒', text:'SOC 2 Certified' },
//               { icon:'⭐', text:'G2 Leader 2025' },
//               { icon:'🌍', text:'GDPR Compliant' },
//             ].map((b,i)=>(
//               <div key={i} style={{
//                 display:'flex', alignItems:'center', gap:8,
//                 background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)',
//                 borderRadius:10, padding:'8px 16px'
//               }}>
//                 <span style={{ fontSize:18 }}>{b.icon}</span>
//                 <span style={{ color:'#9ca3af', fontSize:12, fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>{b.text}</span>
//               </div>
//             ))}
//           </div>

//           {/* Bottom bar */}
//           <div style={{
//             display:'flex', justifyContent:'space-between', alignItems:'center',
//             paddingTop:20, paddingBottom:28,
//             borderTop:'1px solid rgba(255,255,255,0.07)',
//             flexWrap:'wrap', gap:12
//           }}>
//             <p style={{ color:'#374151', fontSize:13, margin:0, fontFamily:"'DM Sans',sans-serif" }}>
//               © 2026 EMS PRO. All Rights Reserved. Built for the world. 🌍
//             </p>
//             <div style={{ display:'flex', gap:20 }}>
//               {['Terms','Privacy','Cookies','Sitemap'].map(l=>(
//                 <a key={l} href="#" style={{ color:'#374151', textDecoration:'none', fontSize:12, fontFamily:"'DM Sans',sans-serif", transition:'color 0.2s' }}
//                   onMouseEnter={e=>e.currentTarget.style.color='#6366f1'}
//                   onMouseLeave={e=>e.currentTarget.style.color='#374151'}>
//                   {l}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </footer>
//     </>
//   )
// }


// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

//   *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

//   :root {
//     --gold:    #c9a84c;
//     --gold2:   #f0d080;
//     --dark:    #0c0c14;
//     --dark2:   #13121f;
//     --purple:  #7c6ef7;
//     --pink:    #e879a0;
//     --teal:    #38bdf8;
//     --green:   #34d399;
//   }

//   body { font-family:'Jost',sans-serif; background:var(--dark); }

//   @keyframes drift1 {
//     0%,100% { transform:translate(0,0) scale(1) rotate(0deg); }
//     33%      { transform:translate(80px,-60px) scale(1.15) rotate(5deg); }
//     66%      { transform:translate(-40px,40px) scale(0.9) rotate(-3deg); }
//   }
//   @keyframes drift2 {
//     0%,100% { transform:translate(0,0) scale(1); }
//     50%      { transform:translate(-70px,80px) scale(1.1); }
//   }
//   @keyframes drift3 {
//     0%,100% { transform:translate(0,0) scale(1); }
//     40%      { transform:translate(50px,-50px) scale(1.08); }
//     80%      { transform:translate(-30px,30px) scale(0.95); }
//   }
//   @keyframes float {
//     0%,100% { transform:translateY(0); }
//     50%      { transform:translateY(-14px); }
//   }
//   @keyframes fadeUp {
//     from { opacity:0; transform:translateY(36px); }
//     to   { opacity:1; transform:translateY(0); }
//   }
//   @keyframes shimmerGold {
//     0%   { background-position: -600px 0; }
//     100% { background-position: 600px 0; }
//   }
//   @keyframes rotateSlow {
//     from { transform:rotate(0deg); }
//     to   { transform:rotate(360deg); }
//   }
//   @keyframes pulseDot {
//     0%,100% { opacity:1; transform:scale(1); }
//     50%      { opacity:0.5; transform:scale(0.8); }
//   }
//   @keyframes gridMove {
//     0%   { transform:translateY(0); }
//     100% { transform:translateY(40px); }
//   }
//   @keyframes starTwinkle {
//     0%,100% { opacity:0.2; }
//     50%      { opacity:1; }
//   }

//   .fadeUp { animation:fadeUp 0.9s cubic-bezier(.22,1,.36,1) both; }
//   .d1 { animation-delay:0.05s; }
//   .d2 { animation-delay:0.2s; }
//   .d3 { animation-delay:0.38s; }
//   .d4 { animation-delay:0.55s; }

//   .gold-shimmer {
//     background: linear-gradient(90deg, #c9a84c 0%, #f0d080 30%, #c9a84c 50%, #f5e49c 70%, #c9a84c 100%);
//     background-size: 600px 100%;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     animation: shimmerGold 3s linear infinite;
//   }

//   .grad-text {
//     background: linear-gradient(135deg, #7c6ef7, #e879a0);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   .nav-link {
//     font-family:'Jost',sans-serif; font-weight:400; font-size:14px;
//     letter-spacing:1.5px; text-transform:uppercase;
//     color:rgba(255,255,255,0.65); text-decoration:none;
//     transition:color 0.3s;
//   }
//   .nav-link:hover { color:#c9a84c; }

//   .btn-gold {
//     display:inline-flex; align-items:center; gap:10px;
//     font-family:'Jost',sans-serif; font-weight:500; font-size:15px;
//     letter-spacing:2px; text-transform:uppercase;
//     text-decoration:none; padding:18px 44px; border-radius:4px;
//     background:linear-gradient(135deg,#c9a84c,#f0d080,#c9a84c);
//     background-size:200% 100%;
//     color:#0c0c14; border:none; cursor:pointer;
//     transition:background-position 0.5s, transform 0.3s, box-shadow 0.3s;
//     box-shadow:0 8px 32px rgba(201,168,76,0.35);
//   }
//   .btn-gold:hover {
//     background-position:100% 0;
//     transform:translateY(-3px);
//     box-shadow:0 16px 48px rgba(201,168,76,0.5);
//   }
//   .btn-outline {
//     display:inline-flex; align-items:center; gap:10px;
//     font-family:'Jost',sans-serif; font-weight:400; font-size:14px;
//     letter-spacing:2px; text-transform:uppercase;
//     text-decoration:none; padding:17px 40px; border-radius:4px;
//     background:transparent; color:rgba(255,255,255,0.8);
//     border:1px solid rgba(201,168,76,0.4);
//     transition:border-color 0.3s, color 0.3s, transform 0.3s;
//   }
//   .btn-outline:hover {
//     border-color:#c9a84c; color:#c9a84c;
//     transform:translateY(-3px);
//   }

//   .feat-card {
//     position:relative; overflow:hidden;
//     background:rgba(255,255,255,0.03);
//     border:1px solid rgba(255,255,255,0.07);
//     border-radius:16px; padding:36px 28px;
//     transition:transform 0.3s, border-color 0.3s, background 0.3s;
//     cursor:default;
//   }
//   .feat-card::before {
//     content:''; position:absolute; inset:0; border-radius:16px;
//     background:linear-gradient(135deg,rgba(201,168,76,0.06),transparent);
//     opacity:0; transition:opacity 0.3s;
//   }
//   .feat-card:hover { transform:translateY(-8px); border-color:rgba(201,168,76,0.3); }
//   .feat-card:hover::before { opacity:1; }

//   .review-card {
//     background:rgba(255,255,255,0.03);
//     border:1px solid rgba(255,255,255,0.07);
//     border-radius:16px; padding:26px;
//     display:flex; flex-direction:column; gap:16px;
//     transition:transform 0.3s, border-color 0.3s;
//     cursor:default;
//   }
//   .review-card:hover { transform:translateY(-6px); border-color:rgba(201,168,76,0.3); }

//   .stat-card {
//     background:rgba(255,255,255,0.03);
//     border:1px solid rgba(255,255,255,0.07);
//     border-radius:16px; padding:36px 20px; text-align:center;
//     transition:transform 0.3s, border-color 0.3s; cursor:default;
//   }
//   .stat-card:hover { transform:translateY(-6px); border-color:rgba(201,168,76,0.3); }

//   .step-card {
//     background:rgba(255,255,255,0.04);
//     border:1px solid rgba(255,255,255,0.08);
//     border-radius:20px; padding:40px 32px;
//     text-align:center; position:relative; overflow:hidden;
//     transition:transform 0.3s, border-color 0.3s; cursor:default;
//   }
//   .step-card:hover { transform:translateY(-8px); border-color:rgba(201,168,76,0.35); }

//   .f-link {
//     display:block; margin-bottom:12px;
//     font-family:'Jost',sans-serif; font-size:13px; font-weight:300;
//     letter-spacing:0.5px; color:rgba(255,255,255,0.4);
//     text-decoration:none; transition:color 0.3s;
//   }
//   .f-link:hover { color:#c9a84c; }

//   .gold-line {
//     width:60px; height:2px;
//     background:linear-gradient(90deg,transparent,#c9a84c,transparent);
//     margin:0 auto;
//   }

//   ::-webkit-scrollbar { width:6px; }
//   ::-webkit-scrollbar-track { background:#0c0c14; }
//   ::-webkit-scrollbar-thumb { background:#c9a84c44; border-radius:3px; }
// `

// const REVIEWS = [
//   { initials:'AK', color:'#7c6ef7', rating:5, name:'Ali Khan', role:'HR Manager', company:'TechCorp International',
//     text:'"EMS PRO completely transformed our HR operations. Everything is managed in one place — saving us hours every week."' },
//   { initials:'SA', color:'#c9a84c', rating:5, name:'Sara Ahmed', role:'Team Lead', company:'DigitalMinds Agency',
//     text:'"Incredibly easy to use. Our entire team was onboarded in two days. Productivity has doubled and errors are way down."' },
//   { initials:'UA', color:'#34d399', rating:5, name:'Usman Ali', role:'Senior Developer', company:'SoftNest Solutions',
//     text:'"The best EMS platform I have worked with. Task tracking is powerful and the API integration is absolutely seamless."' },
//   { initials:'AS', color:'#e879a0', rating:4, name:'Ayesha Siddiqui', role:'Project Manager', company:'RemoteFirst Inc',
//     text:'"Managing distributed teams has never been easier. Real-time updates keep everyone aligned across all time zones."' },
//   { initials:'BR', color:'#38bdf8', rating:5, name:'Bilal Raza', role:'CEO', company:'StartupHub Group',
//     text:'"The analytics dashboard alone was worth every penny. Tracking ROI now takes minutes instead of hours."' },
//   { initials:'FM', color:'#f97316', rating:5, name:'Fatima Malik', role:'Operations Director', company:'BizFlow Solutions',
//     text:'"All meetings, task assignments, and workload visibility in one platform. Team clarity improved overnight."' },
//   { initials:'HS', color:'#7c6ef7', rating:4, name:'Hamza Sheikh', role:'IT Administrator', company:'CyberSafe Ltd',
//     text:'"Role-based access control is rock solid. Full security and privacy without burdening the IT team at all."' },
//   { initials:'ZH', color:'#c9a84c', rating:5, name:'Zara Hussain', role:'Customer Success', company:'CloudBase Technologies',
//     text:'"Support is incredibly responsive. Every issue has been resolved quickly and professionally. Outstanding service!"' },
//   { initials:'TM', color:'#e879a0', rating:5, name:'Tariq Mehmood', role:'CTO', company:'Nexus Digital Group',
//     text:'"All company data is centralized, secure, and organized. The implementation was smooth with zero downtime."' },
//   { initials:'NQ', color:'#34d399', rating:4, name:'Nadia Qureshi', role:'Field Operations Lead', company:'OnGround Services',
//     text:'"Mobile access is a game changer for our field teams. The offline mode ensures connectivity is never a blocker."' },
// ]

// const FEATURES = [
//   { emoji:'📊', title:'Real-Time Task Tracking', badge:'Most Used', color:'#7c6ef7',
//     desc:'Monitor every task live. Set priorities, manage deadlines, and instantly spot bottlenecks before they slow your team.' },
//   { emoji:'🔐', title:'Role-Based Access Control', badge:'Secure', color:'#34d399',
//     desc:'Separate dashboards for Admins, Managers, and Employees. Full data security and privacy guaranteed at every level.' },
//   { emoji:'📈', title:'Advanced Analytics', badge:'AI Powered', color:'#c9a84c',
//     desc:'Team performance, attendance trends, and productivity insights — all visualized in beautiful, intuitive dashboards.' },
//   { emoji:'📱', title:'Mobile Ready', badge:'Cross Platform', color:'#e879a0',
//     desc:'A seamless experience on both iOS and Android. Keep your field teams connected and productive around the clock.' },
//   { emoji:'🔔', title:'Smart Notifications', badge:'Automated', color:'#38bdf8',
//     desc:'Deadline reminders and approvals delivered instantly via Slack, Email, and SMS — all fully automated.' },
//   { emoji:'☁️', title:'Cloud Backup', badge:'Always On', color:'#f97316',
//     desc:'Your data is backed up every second. Enjoy 99.99% uptime with true enterprise-grade reliability.' },
// ]

// const STATS = [
//   { val:'10k+', label:'Tasks Completed', emoji:'✅', color:'#7c6ef7' },
//   { val:'500+', label:'Global Teams',    emoji:'🌐', color:'#c9a84c' },
//   { val:'15+',  label:'Countries',       emoji:'🌍', color:'#34d399' },
//   { val:'99.9%',label:'Uptime',          emoji:'⚡', color:'#e879a0' },
// ]

// const ReviewCard = ({ r }) => (
//   <div className="review-card">
//     <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//       <div style={{
//         width:44, height:44, borderRadius:'50%',
//         background:`${r.color}22`, border:`1.5px solid ${r.color}66`,
//         display:'flex', alignItems:'center', justifyContent:'center',
//         color:r.color, fontWeight:600, fontSize:13, flexShrink:0,
//         fontFamily:"'Jost',sans-serif", letterSpacing:1
//       }}>{r.initials}</div>
//       <div style={{ display:'flex', gap:3 }}>
//         {[...Array(5)].map((_,i)=>(
//           <span key={i} style={{ color:i<r.rating?'#c9a84c':'rgba(255,255,255,0.15)', fontSize:13 }}>★</span>
//         ))}
//       </div>
//     </div>
//     <p style={{
//       color:'rgba(255,255,255,0.55)', fontSize:13, lineHeight:1.85,
//       fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic',
//       margin:0, flexGrow:1, letterSpacing:0.3
//     }}>{r.text}</p>
//     <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:14 }}>
//       <div style={{ fontFamily:"'Jost',sans-serif", fontWeight:600, fontSize:14, color:'rgba(255,255,255,0.9)', letterSpacing:0.5 }}>{r.name}</div>
//       <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:r.color, marginTop:3, letterSpacing:1, textTransform:'uppercase' }}>{r.role}</div>
//       <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:'rgba(255,255,255,0.3)', marginTop:2, letterSpacing:0.5 }}>{r.company}</div>
//     </div>
//   </div>
// )

// const Stars = () => {
//   const stars = Array.from({length:80},()=>({
//     x: Math.random()*100,
//     y: Math.random()*100,
//     size: Math.random()*2+0.5,
//     delay: Math.random()*4,
//     dur: Math.random()*3+2
//   }))
//   return (
//     <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:1, pointerEvents:'none' }}>
//       {stars.map((s,i)=>(
//         <circle key={i} cx={`${s.x}%`} cy={`${s.y}%`} r={s.size}
//           fill="white" opacity={0.3}
//           style={{ animation:`starTwinkle ${s.dur}s ${s.delay}s ease-in-out infinite` }}
//         />
//       ))}
//     </svg>
//   )
// }

// export default function HomePage() {
//   const [scrolled, setScrolled] = useState(false)
//   useEffect(()=>{
//     const fn=()=>setScrolled(window.scrollY>50)
//     window.addEventListener('scroll',fn)
//     return ()=>window.removeEventListener('scroll',fn)
//   },[])

//   return (
//     <>
//       <style>{STYLES}</style>

//       {/* ══ NAVBAR ══ */}
//       <nav style={{
//         position:'fixed', top:0, width:'100%', zIndex:200,
//         padding:'0 40px', height:72, boxSizing:'border-box',
//         display:'flex', alignItems:'center',
//         transition:'background 0.4s, border-color 0.4s',
//         background: scrolled ? 'rgba(12,12,20,0.92)' : 'transparent',
//         backdropFilter: scrolled ? 'blur(24px)' : 'none',
//         borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
//       }}>
//         <div style={{ maxWidth:1200, width:'100%', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//           <div style={{ display:'flex', alignItems:'center', gap:10 }}>
//             <div style={{
//               width:34, height:34, borderRadius:8,
//               background:'linear-gradient(135deg,#c9a84c,#f0d080)',
//               display:'flex', alignItems:'center', justifyContent:'center', fontSize:16
//             }}>⚡</div>
//             <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, letterSpacing:2, color:'white' }}>
//               EMS <span style={{ color:'#c9a84c' }}>PRO</span>
//             </span>
//           </div>
//           <div style={{ display:'flex', gap:40, alignItems:'center' }}>
//             {['Features','Stats','Reviews'].map(s=>(
//               <a key={s} href={`#${s.toLowerCase()}`} className="nav-link">{s}</a>
//             ))}
//             <Link to="/login" className="btn-gold" style={{ padding:'10px 28px', fontSize:12, letterSpacing:1.5 }}>
//               Sign In
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* ══ HERO ══ */}
//       <section style={{
//         minHeight:'100vh', position:'relative', overflow:'hidden',
//         display:'flex', alignItems:'center', justifyContent:'center',
//         textAlign:'center', padding:'120px 24px 100px',
//         background:'radial-gradient(ellipse at 20% 50%, #1a0a2e 0%, #0c0c14 50%, #0d1117 100%)',
//       }}>
//         <Stars />

//         {/* Blobs */}
//         <div style={{ position:'absolute', inset:0, zIndex:2, overflow:'hidden', pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle,rgba(124,110,247,0.22) 0%,transparent 65%)', top:'-200px', left:'-200px', animation:'drift1 14s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(201,168,76,0.16) 0%,transparent 65%)', top:'10%', right:'-100px', animation:'drift2 18s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(232,121,160,0.18) 0%,transparent 65%)', bottom:'-150px', left:'30%', animation:'drift3 12s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)', bottom:'10%', right:'10%', animation:'drift1 16s ease-in-out infinite reverse' }}/>
//         </div>

//         {/* Rotating rings */}
//         <div style={{ position:'absolute', width:600, height:600, border:'1px solid rgba(201,168,76,0.08)', borderRadius:'50%', top:'50%', left:'50%', transform:'translate(-50%,-50%)', animation:'rotateSlow 30s linear infinite', zIndex:2, pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:4, height:4, borderRadius:'50%', background:'#c9a84c', top:-2, left:'50%', boxShadow:'0 0 8px #c9a84c' }}/>
//         </div>
//         <div style={{ position:'absolute', width:400, height:400, border:'1px solid rgba(201,168,76,0.05)', borderRadius:'50%', top:'50%', left:'50%', transform:'translate(-50%,-50%)', animation:'rotateSlow 20s linear infinite reverse', zIndex:2, pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:3, height:3, borderRadius:'50%', background:'#e879a0', bottom:-1, right:'30%', boxShadow:'0 0 6px #e879a0' }}/>
//         </div>

//         {/* Content */}
//         <div style={{ position:'relative', zIndex:10, maxWidth:860 }}>
//           <div className="fadeUp d1" style={{
//             display:'inline-flex', alignItems:'center', gap:10, marginBottom:32,
//             border:'1px solid rgba(201,168,76,0.3)', padding:'8px 24px', borderRadius:4,
//             background:'rgba(201,168,76,0.06)'
//           }}>
//             <span style={{ width:6, height:6, borderRadius:'50%', background:'#c9a84c', display:'inline-block', animation:'pulseDot 2s ease-in-out infinite' }}/>
//             <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:3, textTransform:'uppercase', color:'#c9a84c', fontWeight:500 }}>
//               World's Smartest Employee Management System
//             </span>
//           </div>

//           <h1 className="fadeUp d2" style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(44px,6.5vw,86px)', fontWeight:800, lineHeight:1.07, margin:'0 0 12px', color:'white', letterSpacing:-1 }}>
//             Manage Your Team
//           </h1>
//           <h1 className="fadeUp d2" style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(44px,6.5vw,86px)', fontWeight:700, lineHeight:1.07, fontStyle:'italic', margin:'0 0 32px', letterSpacing:-1 }}>
//             <span className="gold-shimmer">Like Never Before</span>
//           </h1>

//           <div className="fadeUp d3 gold-line" style={{ marginBottom:32 }}/>

//           <p className="fadeUp d3" style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.55)', fontSize:18, maxWidth:520, margin:'0 auto 48px', lineHeight:1.9, letterSpacing:0.3 }}>
//             A smart, secure, and scalable Employee Management System built for modern high-performing teams across the globe.
//           </p>

//           <div className="fadeUp d4" style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
//             <Link to="/login" className="btn-gold">Get Started Free →</Link>
//             <a href="#features" className="btn-outline">Explore Features</a>
//           </div>

//           <div className="fadeUp d4" style={{ marginTop:56, display:'flex', justifyContent:'center', gap:36, flexWrap:'wrap' }}>
//             {[
//               { dot:'#34d399', text:'No credit card required' },
//               { dot:'#c9a84c', text:'Setup in 5 minutes' },
//               { dot:'#7c6ef7', text:'Enterprise-grade security' },
//             ].map(t=>(
//               <span key={t.text} style={{ display:'flex', alignItems:'center', gap:8, fontFamily:"'Jost',sans-serif", fontSize:13, color:'rgba(255,255,255,0.4)', letterSpacing:0.5 }}>
//                 <span style={{ width:6, height:6, borderRadius:'50%', background:t.dot, display:'inline-block' }}/>
//                 {t.text}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div style={{ position:'absolute', bottom:0, left:0, right:0, height:120, background:'linear-gradient(to bottom,transparent,#13121f)', zIndex:5 }}/>
//       </section>

//       {/* ══ STATS ══ */}
//       <section id="stats" style={{ padding:'100px 24px', background:'linear-gradient(135deg,#13121f 0%,#1a1030 50%,#0f1520 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)', backgroundSize:'60px 60px', animation:'gridMove 8s linear infinite', pointerEvents:'none' }}/>
//         <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:60 }}>
//             <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:4, color:'#c9a84c', textTransform:'uppercase', marginBottom:14 }}>By The Numbers</p>
//             <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:700, color:'white', margin:'0 0 16px' }}>
//               Numbers That <span className="grad-text">Speak</span>
//             </h2>
//             <div className="gold-line"/>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
//             {STATS.map((s,i)=>(
//               <div key={i} className="stat-card">
//                 <div style={{ width:64, height:64, borderRadius:16, background:`${s.color}18`, border:`1px solid ${s.color}33`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, margin:'0 auto 20px' }}>{s.emoji}</div>
//                 <div style={{ fontFamily:"'Playfair Display',serif", fontSize:38, fontWeight:700, color:s.color, marginBottom:8 }}>{s.val}</div>
//                 <div style={{ fontFamily:"'Jost',sans-serif", fontSize:12, color:'rgba(255,255,255,0.4)', letterSpacing:1.5, textTransform:'uppercase' }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ FEATURES ══ */}
//       <section id="features" style={{ padding:'100px 24px', background:'linear-gradient(160deg,#0d1117 0%,#130d24 40%,#0c1520 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', width:800, height:800, borderRadius:'50%', background:'radial-gradient(circle,rgba(124,110,247,0.07) 0%,transparent 65%)', top:'-200px', right:'-200px', pointerEvents:'none' }}/>
//         <div style={{ maxWidth:1100, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:64 }}>
//             <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:4, color:'#c9a84c', textTransform:'uppercase', marginBottom:14 }}>Capabilities</p>
//             <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:700, color:'white', margin:'0 0 16px' }}>
//               Everything in <span className="gold-shimmer">One Place</span>
//             </h2>
//             <div className="gold-line" style={{ marginBottom:20 }}/>
//             <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.45)', fontSize:16, maxWidth:460, margin:'0 auto', lineHeight:1.8 }}>
//               Every feature your team needs — elegantly designed and built right into EMS PRO.
//             </p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
//             {FEATURES.map((f,i)=>(
//               <div key={i} className="feat-card">
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${f.color},transparent)`, borderRadius:'16px 16px 0 0' }}/>
//                 <div style={{ width:58, height:58, borderRadius:14, background:`${f.color}15`, border:`1px solid ${f.color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, marginBottom:20 }}>{f.emoji}</div>
//                 <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14 }}>
//                   <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:'white', lineHeight:1.3, maxWidth:180 }}>{f.title}</h3>
//                   <span style={{ fontFamily:"'Jost',sans-serif", fontSize:9, fontWeight:600, letterSpacing:1.5, textTransform:'uppercase', background:`${f.color}18`, color:f.color, border:`1px solid ${f.color}30`, padding:'4px 10px', borderRadius:4, flexShrink:0, marginLeft:8 }}>{f.badge}</span>
//                 </div>
//                 <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.45)', fontSize:14, lineHeight:1.8, margin:0 }}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ HOW IT WORKS ══ */}
//       <section style={{ padding:'100px 24px', background:'linear-gradient(135deg,#1a0a2e 0%,#0f0a1e 40%,#0c1830 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(201,168,76,0.08) 0%,transparent 65%)', bottom:'-200px', left:'-100px', pointerEvents:'none' }}/>
//         <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:64 }}>
//             <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:4, color:'#c9a84c', textTransform:'uppercase', marginBottom:14 }}>Process</p>
//             <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:700, color:'white', margin:'0 0 16px' }}>
//               Up & Running in <span className="gold-shimmer">3 Steps</span>
//             </h2>
//             <div className="gold-line"/>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28 }}>
//             {[
//               { step:'I',   emoji:'🎯', title:'Sign Up',        color:'#7c6ef7', desc:'Create your account in under 2 minutes. No credit card needed to get started.' },
//               { step:'II',  emoji:'👥', title:'Add Your Team',  color:'#c9a84c', desc:'Invite employees, assign roles, and set up departments instantly with ease.' },
//               { step:'III', emoji:'🚀', title:'Start Managing', color:'#34d399', desc:'Track tasks, view analytics, and boost team productivity from day one.' },
//             ].map((s,i)=>(
//               <div key={i} className="step-card"
//                 onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px)'}
//                 onMouseLeave={e=>e.currentTarget.style.transform='none'}>
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${s.color},transparent)` }}/>
//                 <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:48, fontWeight:700, color:`${s.color}22`, marginBottom:16, lineHeight:1 }}>{s.step}</div>
//                 <div style={{ width:64, height:64, borderRadius:16, background:`${s.color}15`, border:`1px solid ${s.color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, margin:'0 auto 20px', animation:'float 3s ease-in-out infinite', animationDelay:`${i*0.6}s` }}>{s.emoji}</div>
//                 <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:'white', marginBottom:12 }}>{s.title}</h3>
//                 <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.45)', fontSize:14, lineHeight:1.85, margin:0 }}>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ REVIEWS ══ */}
//       <section id="reviews" style={{ padding:'100px 24px', background:'linear-gradient(160deg,#0c0c14 0%,#161028 50%,#0d1520 100%)', position:'relative', overflow:'hidden' }}>
//         <Stars />
//         <div style={{ maxWidth:1260, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:56 }}>
//             <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:4, color:'#c9a84c', textTransform:'uppercase', marginBottom:14 }}>Testimonials</p>
//             <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:700, color:'white', margin:'0 0 16px' }}>
//               Trusted by Teams <span className="grad-text">Worldwide</span>
//             </h2>
//             <div className="gold-line" style={{ marginBottom:20 }}/>
//             <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.4)', fontSize:15, marginBottom:24 }}>
//               Over 10,000 satisfied users — here are their real stories
//             </p>
//             <div style={{ display:'inline-flex', alignItems:'center', gap:10, border:'1px solid rgba(201,168,76,0.25)', background:'rgba(201,168,76,0.06)', padding:'8px 22px', borderRadius:4 }}>
//               <span style={{ color:'#c9a84c', fontSize:14 }}>★★★★★</span>
//               <span style={{ fontFamily:"'Jost',sans-serif", fontSize:13, color:'rgba(255,255,255,0.6)', letterSpacing:0.5 }}>4.9 / 5 Average — 10,000+ Reviews</span>
//             </div>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14, marginBottom:14 }}>
//             {REVIEWS.slice(0,5).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14 }}>
//             {REVIEWS.slice(5,10).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//         </div>
//       </section>

//       {/* ══ CTA ══ */}
//       <section style={{ padding:'120px 24px', background:'linear-gradient(135deg,#130820 0%,#1a0d30 50%,#0c1020 100%)', position:'relative', overflow:'hidden', textAlign:'center' }}>
//         <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle,rgba(201,168,76,0.1) 0%,transparent 65%)', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }}/>
//           <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(124,110,247,0.1) 0%,transparent 65%)', top:'-100px', right:'-100px', animation:'drift2 15s ease-in-out infinite' }}/>
//         </div>
//         <div style={{ position:'relative', zIndex:2, maxWidth:680, margin:'0 auto' }}>
//           <div style={{ fontSize:56, marginBottom:24, animation:'float 3s ease-in-out infinite' }}>✦</div>
//           <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:4, color:'#c9a84c', textTransform:'uppercase', marginBottom:20 }}>Get Started Today</p>
//           <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:48, fontWeight:700, color:'white', margin:'0 0 12px', lineHeight:1.15 }}>Ready to Transform</h2>
//           <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:48, fontWeight:700, fontStyle:'italic', margin:'0 0 32px', lineHeight:1.15 }}>
//             <span className="gold-shimmer">Your Team Management?</span>
//           </h2>
//           <div className="gold-line" style={{ marginBottom:32 }}/>
//           <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.5)', fontSize:17, margin:'0 auto 48px', lineHeight:1.9, maxWidth:460 }}>
//             Join over 500 teams worldwide already using EMS PRO to work smarter, faster, and better.
//           </p>
//           <Link to="/login" className="btn-gold" style={{ fontSize:14, padding:'20px 52px' }}>Start for Free Today →</Link>
//           <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.25)', fontSize:12, marginTop:20, letterSpacing:0.5 }}>
//             No credit card required · Cancel anytime · Setup in 5 minutes
//           </p>
//         </div>
//       </section>

//       {/* ══ FOOTER ══ */}
//       <footer style={{ background:'#080810', borderTop:'1px solid rgba(201,168,76,0.1)', padding:'80px 24px 0' }}>
//         <div style={{ maxWidth:1200, margin:'0 auto' }}>
//           <div style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:52, marginBottom:60 }}>

//             {/* Brand */}
//             <div>
//               <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
//                 <div style={{ width:32, height:32, borderRadius:7, background:'linear-gradient(135deg,#c9a84c,#f0d080)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:15 }}>⚡</div>
//                 <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, letterSpacing:2, color:'white' }}>EMS <span style={{ color:'#c9a84c' }}>PRO</span></span>
//               </div>
//               <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.35)', fontSize:14, lineHeight:1.9, marginBottom:28, maxWidth:280 }}>
//                 A world-class Employee Management System built for modern, high-performing teams across the globe.
//               </p>
//               <div style={{ display:'flex', gap:10, marginBottom:28 }}>
//                 {[
//                   { icon:'in', bg:'#0077b5' },
//                   { icon:'𝕏',  bg:'#111' },
//                   { icon:'f',  bg:'#1877f2' },
//                   { icon:'▶', bg:'#ff0000' },
//                 ].map((s,i)=>(
//                   <div key={i} style={{ width:36, height:36, borderRadius:8, background:s.bg, opacity:0.7, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:13, cursor:'pointer', transition:'transform 0.2s, opacity 0.2s' }}
//                     onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.opacity='1' }}
//                     onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.opacity='0.7' }}>
//                     {s.icon}
//                   </div>
//                 ))}
//               </div>
//               <div style={{ display:'flex', gap:10 }}>
//                 {['App Store','Google Play'].map(b=>(
//                   <div key={b} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(201,168,76,0.15)', borderRadius:8, padding:'8px 14px', cursor:'pointer', transition:'border-color 0.3s' }}
//                     onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(201,168,76,0.4)'}
//                     onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(201,168,76,0.15)'}>
//                     <div style={{ fontFamily:"'Jost',sans-serif", color:'rgba(255,255,255,0.3)', fontSize:9, letterSpacing:0.5, marginBottom:2 }}>Download on the</div>
//                     <div style={{ fontFamily:"'Jost',sans-serif", color:'white', fontSize:13, fontWeight:500 }}>{b}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Link columns */}
//             {[
//               { heading:'Product', links:['Features','Pricing','Integrations','Changelog','Roadmap'] },
//               { heading:'Company', links:['About Us','Blog','Careers','Press Kit','Contact'] },
//               { heading:'Support', links:['Help Center','Documentation','API Docs','Status Page','Privacy Policy'] },
//             ].map(col=>(
//               <div key={col.heading}>
//                 <h4 style={{ fontFamily:"'Cormorant Garamond',serif", color:'white', fontWeight:600, fontSize:16, margin:'0 0 20px', letterSpacing:1 }}>{col.heading}</h4>
//                 {col.links.map(l=><a key={l} href="#" className="f-link">{l}</a>)}
//               </div>
//             ))}
//           </div>

//           {/* Newsletter */}
//           <div style={{ background:'linear-gradient(135deg,rgba(201,168,76,0.07),rgba(124,110,247,0.07))', border:'1px solid rgba(201,168,76,0.15)', borderRadius:16, padding:'36px 40px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:52, flexWrap:'wrap', gap:24 }}>
//             <div>
//               <h3 style={{ fontFamily:"'Playfair Display',serif", color:'white', fontWeight:700, fontSize:20, margin:'0 0 6px' }}>📬 Stay in the Loop</h3>
//               <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.4)', fontSize:14, margin:0 }}>Weekly HR tips, product updates, and exclusive offers.</p>
//             </div>
//             <div style={{ display:'flex', gap:10 }}>
//               <input type="email" placeholder="your@email.com" style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(201,168,76,0.2)', color:'white', padding:'12px 18px', borderRadius:6, fontSize:14, outline:'none', width:220, fontFamily:"'Jost',sans-serif", fontWeight:300 }}
//                 onFocus={e=>e.target.style.borderColor='rgba(201,168,76,0.5)'}
//                 onBlur={e=>e.target.style.borderColor='rgba(201,168,76,0.2)'}
//               />
//               <button className="btn-gold" style={{ padding:'12px 22px', fontSize:12, letterSpacing:1 }}>Subscribe</button>
//             </div>
//           </div>

//           {/* Trust badges */}
//           <div style={{ display:'flex', justifyContent:'center', gap:20, marginBottom:40, flexWrap:'wrap' }}>
//             {[
//               { icon:'🏆', text:'Product of the Year 2025' },
//               { icon:'🔒', text:'SOC 2 Certified' },
//               { icon:'⭐', text:'G2 Leader 2025' },
//               { icon:'🌍', text:'GDPR Compliant' },
//             ].map((b,i)=>(
//               <div key={i} style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(201,168,76,0.1)', borderRadius:6, padding:'8px 16px' }}>
//                 <span style={{ fontSize:16 }}>{b.icon}</span>
//                 <span style={{ fontFamily:"'Jost',sans-serif", fontSize:12, color:'rgba(255,255,255,0.35)', letterSpacing:0.5 }}>{b.text}</span>
//               </div>
//             ))}
//           </div>

//           {/* Bottom bar */}
//           <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:24, paddingBottom:32, borderTop:'1px solid rgba(255,255,255,0.05)', flexWrap:'wrap', gap:12 }}>
//             <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.2)', fontSize:13, margin:0, letterSpacing:0.3 }}>
//               © 2026 EMS PRO. All Rights Reserved. Built for the world. 🌍
//             </p>
//             <div style={{ display:'flex', gap:24 }}>
//               {['Terms','Privacy','Cookies','Sitemap'].map(l=>(
//                 <a key={l} href="#" style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, color:'rgba(255,255,255,0.2)', textDecoration:'none', fontSize:12, letterSpacing:0.5, transition:'color 0.3s' }}
//                   onMouseEnter={e=>e.target.style.color='#c9a84c'}
//                   onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.2)'}>
//                   {l}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </footer>
//     </>
//   )
// }






// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Bricolage+Grotesque:wght@400;500;600;700;800&display=swap');

//   *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

//   :root {
//     --blue:    #0ea5e9;
//     --blue2:   #38bdf8;
//     --teal:    #14b8a6;
//     --teal2:   #2dd4bf;
//     --navy:    #0f172a;
//     --navy2:   #1e293b;
//     --slate:   #334155;
//     --light:   #f0f9ff;
//     --light2:  #e0f2fe;
//     --white:   #ffffff;
//     --text:    #0f172a;
//     --muted:   #64748b;
//   }

//   body { font-family:'Plus Jakarta Sans',sans-serif; }

//   @keyframes floatY {
//     0%,100% { transform:translateY(0px) rotate(0deg); }
//     33%      { transform:translateY(-18px) rotate(2deg); }
//     66%      { transform:translateY(-8px) rotate(-1deg); }
//   }
//   @keyframes blob1 {
//     0%,100% { transform:translate(0,0) scale(1); }
//     33%      { transform:translate(50px,-60px) scale(1.1); }
//     66%      { transform:translate(-30px,40px) scale(0.92); }
//   }
//   @keyframes blob2 {
//     0%,100% { transform:translate(0,0) scale(1); }
//     50%      { transform:translate(-60px,70px) scale(1.08); }
//   }
//   @keyframes blob3 {
//     0%,100% { transform:translate(0,0); }
//     40%      { transform:translate(40px,-40px); }
//     80%      { transform:translate(-20px,20px); }
//   }
//   @keyframes fadeUp {
//     from { opacity:0; transform:translateY(32px); }
//     to   { opacity:1; transform:translateY(0); }
//   }
//   @keyframes slideIn {
//     from { opacity:0; transform:translateX(-20px); }
//     to   { opacity:1; transform:translateX(0); }
//   }
//   @keyframes pulseGlow {
//     0%,100% { box-shadow:0 0 0 0 rgba(14,165,233,0.4); }
//     50%      { box-shadow:0 0 0 12px rgba(14,165,233,0); }
//   }
//   @keyframes gradMove {
//     0%   { background-position:0% 50%; }
//     50%  { background-position:100% 50%; }
//     100% { background-position:0% 50%; }
//   }

//   .fadeUp { animation:fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; }
//   .d1 { animation-delay:0.08s; }
//   .d2 { animation-delay:0.18s; }
//   .d3 { animation-delay:0.30s; }
//   .d4 { animation-delay:0.44s; }
//   .d5 { animation-delay:0.58s; }

//   .grad-text {
//     background: linear-gradient(135deg, #0ea5e9, #14b8a6, #0ea5e9);
//     background-size: 200% 200%;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     animation: gradMove 4s ease infinite;
//   }

//   .btn-primary {
//     display:inline-flex; align-items:center; gap:8px;
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-weight:700; font-size:15px; letter-spacing:0.2px;
//     text-decoration:none; padding:16px 36px; border-radius:14px;
//     background:linear-gradient(135deg,#0ea5e9,#14b8a6);
//     color:#fff; border:none; cursor:pointer;
//     box-shadow:0 8px 32px rgba(14,165,233,0.4);
//     transition:transform 0.25s, box-shadow 0.25s;
//   }
//   .btn-primary:hover {
//     transform:translateY(-3px) scale(1.02);
//     box-shadow:0 16px 48px rgba(14,165,233,0.5);
//   }
//   .btn-secondary {
//     display:inline-flex; align-items:center; gap:8px;
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-weight:600; font-size:15px;
//     text-decoration:none; padding:15px 32px; border-radius:14px;
//     background:rgba(255,255,255,0.1); color:#fff;
//     border:1.5px solid rgba(255,255,255,0.25);
//     backdrop-filter:blur(10px);
//     transition:background 0.25s, border-color 0.25s, transform 0.25s;
//   }
//   .btn-secondary:hover {
//     background:rgba(255,255,255,0.18);
//     border-color:rgba(255,255,255,0.5);
//     transform:translateY(-3px);
//   }

//   .nav-a {
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-weight:500; font-size:14px;
//     color:rgba(255,255,255,0.7); text-decoration:none;
//     transition:color 0.2s; letter-spacing:0.2px;
//   }
//   .nav-a:hover { color:#fff; }
//   .nav-a-dark {
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-weight:500; font-size:14px;
//     color:#334155; text-decoration:none;
//     transition:color 0.2s;
//   }
//   .nav-a-dark:hover { color:#0ea5e9; }

//   .feat-card {
//     background:#fff; border:1.5px solid #e2e8f0;
//     border-radius:20px; padding:32px 26px;
//     transition:transform 0.3s, box-shadow 0.3s, border-color 0.3s;
//     cursor:default; position:relative; overflow:hidden;
//   }
//   .feat-card::after {
//     content:''; position:absolute; inset:0;
//     background:linear-gradient(135deg,rgba(14,165,233,0.04),rgba(20,184,166,0.04));
//     opacity:0; transition:opacity 0.3s; border-radius:20px;
//   }
//   .feat-card:hover {
//     transform:translateY(-8px);
//     box-shadow:0 20px 60px rgba(14,165,233,0.15);
//     border-color:#bae6fd;
//   }
//   .feat-card:hover::after { opacity:1; }

//   .review-card {
//     background:#fff; border:1.5px solid #e2e8f0;
//     border-radius:18px; padding:24px;
//     display:flex; flex-direction:column; gap:14px;
//     transition:transform 0.3s, box-shadow 0.3s, border-color 0.3s;
//     cursor:default;
//   }
//   .review-card:hover {
//     transform:translateY(-6px);
//     box-shadow:0 16px 48px rgba(14,165,233,0.12);
//     border-color:#bae6fd;
//   }

//   .stat-card {
//     border-radius:20px; padding:36px 24px; text-align:center;
//     transition:transform 0.3s; cursor:default;
//   }
//   .stat-card:hover { transform:translateY(-6px); }

//   .fl {
//     display:block; margin-bottom:10px;
//     font-family:'Plus Jakarta Sans',sans-serif; font-size:14px;
//     font-weight:400; color:#94a3b8; text-decoration:none; transition:color 0.2s;
//   }
//   .fl:hover { color:#0ea5e9; }

//   .hero-badge {
//     display:inline-flex; align-items:center; gap:8px;
//     background:rgba(255,255,255,0.12); backdrop-filter:blur(16px);
//     border:1px solid rgba(255,255,255,0.2);
//     color:#fff; padding:8px 20px; border-radius:50px;
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-size:13px; font-weight:600; letter-spacing:0.3px;
//     animation:slideIn 0.6s ease both;
//   }

//   ::-webkit-scrollbar { width:5px; }
//   ::-webkit-scrollbar-track { background:#f1f5f9; }
//   ::-webkit-scrollbar-thumb { background:linear-gradient(#0ea5e9,#14b8a6); border-radius:10px; }
// `

// const REVIEWS = [
//   { initials:'AK', grad:'linear-gradient(135deg,#0ea5e9,#14b8a6)', rating:5,
//     name:'Ali Khan', role:'HR Manager', company:'TechCorp International',
//     text:'"EMS PRO completely transformed our HR operations. Everything managed in one place — saving hours every week."' },
//   { initials:'SA', grad:'linear-gradient(135deg,#f59e0b,#f97316)', rating:5,
//     name:'Sara Ahmed', role:'Team Lead', company:'DigitalMinds Agency',
//     text:'"Incredibly easy to use. Our team onboarded in two days. Productivity doubled and errors dropped significantly."' },
//   { initials:'UA', grad:'linear-gradient(135deg,#8b5cf6,#6366f1)', rating:5,
//     name:'Usman Ali', role:'Senior Developer', company:'SoftNest Solutions',
//     text:'"Best EMS platform I have worked with. Task tracking is powerful and API integration is absolutely seamless."' },
//   { initials:'AS', grad:'linear-gradient(135deg,#ec4899,#f43f5e)', rating:4,
//     name:'Ayesha Siddiqui', role:'Project Manager', company:'RemoteFirst Inc',
//     text:'"Managing distributed teams has never been easier. Real-time updates keep everyone aligned across time zones."' },
//   { initials:'BR', grad:'linear-gradient(135deg,#14b8a6,#0ea5e9)', rating:5,
//     name:'Bilal Raza', role:'CEO', company:'StartupHub Group',
//     text:'"The analytics dashboard alone was worth every penny. Tracking ROI now takes minutes instead of hours."' },
//   { initials:'FM', grad:'linear-gradient(135deg,#10b981,#14b8a6)', rating:5,
//     name:'Fatima Malik', role:'Operations Director', company:'BizFlow Solutions',
//     text:'"All meetings, assignments, and workload visibility in one platform. Team clarity improved overnight."' },
//   { initials:'HS', grad:'linear-gradient(135deg,#6366f1,#8b5cf6)', rating:4,
//     name:'Hamza Sheikh', role:'IT Administrator', company:'CyberSafe Ltd',
//     text:'"Role-based access control is rock solid. Full security and privacy without burdening the IT team."' },
//   { initials:'ZH', grad:'linear-gradient(135deg,#f97316,#f59e0b)', rating:5,
//     name:'Zara Hussain', role:'Customer Success', company:'CloudBase Technologies',
//     text:'"Support is incredibly responsive. Every issue resolved quickly and professionally. Outstanding service!"' },
//   { initials:'TM', grad:'linear-gradient(135deg,#ec4899,#8b5cf6)', rating:5,
//     name:'Tariq Mehmood', role:'CTO', company:'Nexus Digital Group',
//     text:'"All company data centralized, secure, and organized. Implementation was smooth with zero downtime."' },
//   { initials:'NQ', grad:'linear-gradient(135deg,#0ea5e9,#6366f1)', rating:4,
//     name:'Nadia Qureshi', role:'Field Operations Lead', company:'OnGround Services',
//     text:'"Mobile access is a game changer for field teams. Offline mode ensures connectivity is never a blocker."' },
// ]

// const FEATURES = [
//   { emoji:'📊', title:'Real-Time Task Tracking', badge:'Most Used', color:'#0ea5e9', bg:'#e0f2fe',
//     desc:'Monitor every task live. Set priorities, manage deadlines, and instantly spot bottlenecks before they slow your team.' },
//   { emoji:'🔐', title:'Role-Based Access Control', badge:'Secure', color:'#14b8a6', bg:'#ccfbf1',
//     desc:'Separate dashboards for Admins, Managers, and Employees. Full data security and privacy at every level.' },
//   { emoji:'📈', title:'Advanced Analytics', badge:'AI Powered', color:'#8b5cf6', bg:'#ede9fe',
//     desc:'Team performance, attendance, and productivity insights — all in beautiful, easy-to-read dashboards.' },
//   { emoji:'📱', title:'Mobile Ready', badge:'Cross Platform', color:'#f59e0b', bg:'#fef3c7',
//     desc:'Seamless experience on iOS and Android. Keep your field teams connected and productive 24/7.' },
//   { emoji:'🔔', title:'Smart Notifications', badge:'Automated', color:'#ec4899', bg:'#fce7f3',
//     desc:'Deadline reminders and approvals via Slack, Email, and SMS — all fully automated.' },
//   { emoji:'☁️', title:'Cloud Backup', badge:'Always On', color:'#10b981', bg:'#d1fae5',
//     desc:'Data backed up every second. 99.99% uptime with true enterprise-grade reliability.' },
// ]

// const ReviewCard = ({ r }) => (
//   <div className="review-card">
//     <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//       <div style={{
//         width:44, height:44, borderRadius:'50%', background:r.grad, color:'#fff',
//         display:'flex', alignItems:'center', justifyContent:'center',
//         fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:13,
//         flexShrink:0, boxShadow:'0 4px 14px rgba(0,0,0,0.15)'
//       }}>{r.initials}</div>
//       <div style={{ display:'flex', gap:2 }}>
//         {[...Array(5)].map((_,i)=>(
//           <span key={i} style={{ color:i<r.rating?'#f59e0b':'#e2e8f0', fontSize:13 }}>★</span>
//         ))}
//       </div>
//     </div>
//     <p style={{ color:'#475569', fontSize:13, lineHeight:1.85, fontFamily:"'Plus Jakarta Sans',sans-serif", fontStyle:'italic', margin:0, flexGrow:1 }}>{r.text}</p>
//     <div style={{ borderTop:'1.5px solid #f1f5f9', paddingTop:12 }}>
//       <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:14, color:'#0f172a' }}>{r.name}</div>
//       <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:600, color:'#0ea5e9', marginTop:2, textTransform:'uppercase', letterSpacing:0.8 }}>{r.role}</div>
//       <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, color:'#94a3b8', marginTop:1 }}>{r.company}</div>
//     </div>
//   </div>
// )

// export default function HomePage() {
//   const [scrolled, setScrolled] = useState(false)
//   useEffect(()=>{
//     const fn=()=>setScrolled(window.scrollY>60)
//     window.addEventListener('scroll',fn)
//     return ()=>window.removeEventListener('scroll',fn)
//   },[])

//   return (
//     <>
//       <style>{STYLES}</style>

//       {/* ══ NAVBAR ══ */}
//       <nav style={{
//         position:'fixed', top:0, width:'100%', zIndex:200,
//         padding:'0 32px', height:70, boxSizing:'border-box',
//         display:'flex', alignItems:'center', transition:'all 0.35s',
//         background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
//         backdropFilter: scrolled ? 'blur(24px)' : 'none',
//         boxShadow: scrolled ? '0 1px 40px rgba(14,165,233,0.1)' : 'none',
//         borderBottom: scrolled ? '1px solid rgba(14,165,233,0.1)' : 'none',
//       }}>
//         <div style={{ maxWidth:1200, width:'100%', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//           <div style={{ display:'flex', alignItems:'center', gap:10 }}>
//             <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, boxShadow:'0 4px 14px rgba(14,165,233,0.4)' }}>⚡</div>
//             <span style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:22, fontWeight:800, color: scrolled ? '#0f172a' : '#fff', transition:'color 0.35s', letterSpacing:-0.5 }}>
//               EMS <span style={{ color:'#0ea5e9' }}>PRO</span>
//             </span>
//           </div>
//           <div style={{ display:'flex', gap:36, alignItems:'center' }}>
//             {['Features','Stats','Reviews'].map(s=>(
//               <a key={s} href={`#${s.toLowerCase()}`} className={scrolled ? 'nav-a-dark' : 'nav-a'}>{s}</a>
//             ))}
//             <Link to="/login" className="btn-primary" style={{ padding:'10px 24px', fontSize:13 }}>Sign In →</Link>
//           </div>
//         </div>
//       </nav>

//       {/* ══ HERO ══ */}
//       <section style={{
//         minHeight:'100vh', position:'relative', overflow:'hidden',
//         display:'flex', alignItems:'center', justifyContent:'center',
//         textAlign:'center', padding:'100px 24px 80px',
//         background:'linear-gradient(145deg,#0c1445 0%,#0a2a4a 30%,#0d3b4f 60%,#0f2d3d 100%)',
//       }}>
//         {/* Blobs */}
//         <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}>
//           <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.25) 0%,transparent 65%)', top:'-200px', left:'-150px', animation:'blob1 14s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(20,184,166,0.2) 0%,transparent 65%)', bottom:'-150px', right:'-100px', animation:'blob2 17s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:450, height:450, borderRadius:'50%', background:'radial-gradient(circle,rgba(99,102,241,0.18) 0%,transparent 65%)', top:'30%', right:'15%', animation:'blob3 11s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(56,189,248,0.15) 0%,transparent 65%)', bottom:'20%', left:'20%', animation:'blob1 9s ease-in-out infinite reverse' }}/>
//         </div>

//         {/* Grid overlay */}
//         <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none', backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'50px 50px' }}/>

//         {/* Floating orbs */}
//         <div style={{ position:'absolute', zIndex:2, pointerEvents:'none', inset:0 }}>
//           {[
//             { size:14, color:'#38bdf8', top:'20%', left:'12%',  delay:'0s',   dur:'4s' },
//             { size:10, color:'#2dd4bf', top:'60%', left:'8%',   delay:'1s',   dur:'5s' },
//             { size:18, color:'#0ea5e9', top:'35%', right:'10%', delay:'0.5s', dur:'6s' },
//             { size:12, color:'#14b8a6', top:'75%', right:'18%', delay:'2s',   dur:'4.5s' },
//             { size:8,  color:'#a5f3fc', top:'15%', right:'30%', delay:'1.5s', dur:'3.5s' },
//           ].map((o,i)=>(
//             <div key={i} style={{
//               position:'absolute', width:o.size, height:o.size, borderRadius:'50%',
//               background:o.color, top:o.top, left:o.left, right:o.right,
//               opacity:0.7, animation:`floatY ${o.dur} ${o.delay} ease-in-out infinite`,
//               boxShadow:`0 0 ${o.size*2}px ${o.color}`
//             }}/>
//           ))}
//         </div>

//         {/* Content */}
//         <div style={{ position:'relative', zIndex:10, maxWidth:880 }}>
//           <div className="hero-badge fadeUp d1" style={{ marginBottom:28 }}>
//             <span style={{ width:8, height:8, borderRadius:'50%', background:'#38bdf8', display:'inline-block', animation:'pulseGlow 2s ease-in-out infinite' }}/>
//             🚀 The World's Smartest Employee Management System
//           </div>

//           <h1 className="fadeUp d2" style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:'clamp(46px,6.8vw,88px)', fontWeight:800, lineHeight:1.06, color:'#fff', margin:'0 0 16px', letterSpacing:-2 }}>
//             Manage Your Team
//           </h1>
//           <h1 className="fadeUp d2" style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:'clamp(46px,6.8vw,88px)', fontWeight:800, lineHeight:1.06, margin:'0 0 28px', letterSpacing:-2 }}>
//             <span className="grad-text">Like Never Before</span>
//           </h1>

//           <div className="fadeUp d3" style={{ width:80, height:3, borderRadius:2, background:'linear-gradient(90deg,#0ea5e9,#14b8a6)', margin:'0 auto 28px', boxShadow:'0 0 16px rgba(14,165,233,0.5)' }}/>

//           <p className="fadeUp d3" style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:400, color:'rgba(255,255,255,0.65)', fontSize:18, maxWidth:520, margin:'0 auto 48px', lineHeight:1.85 }}>
//             A smart, secure, and scalable Employee Management System built for modern high-performing teams across the globe.
//           </p>

//           <div className="fadeUp d4" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
//             <Link to="/login" className="btn-primary">Get Started Free →</Link>
//             <a href="#features" className="btn-secondary">Explore Features</a>
//           </div>

//           <div className="fadeUp d5" style={{ marginTop:52, display:'flex', justifyContent:'center', gap:24, flexWrap:'wrap' }}>
//             {[
//               { icon:'✅', text:'No credit card required' },
//               { icon:'⚡', text:'Setup in 5 minutes' },
//               { icon:'🔒', text:'Enterprise-grade security' },
//             ].map(t=>(
//               <div key={t.text} style={{
//                 display:'flex', alignItems:'center', gap:7,
//                 background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)',
//                 borderRadius:50, padding:'7px 16px',
//                 fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:'rgba(255,255,255,0.7)', fontWeight:500
//               }}>
//                 <span>{t.icon}</span> {t.text}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Wave bottom */}
//         <div style={{ position:'absolute', bottom:0, left:0, right:0, zIndex:5, overflow:'hidden', lineHeight:0 }}>
//           <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width:'100%', height:80 }}>
//             <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc"/>
//           </svg>
//         </div>
//       </section>

//       {/* ══ TRUST BAR ══ */}
//       <section style={{ padding:'40px 24px', background:'#f8fafc', borderBottom:'1px solid #e2e8f0' }}>
//         <div style={{ maxWidth:1000, margin:'0 auto', textAlign:'center' }}>
//           <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:'#94a3b8', letterSpacing:2, textTransform:'uppercase', fontWeight:600, marginBottom:28 }}>
//             Trusted by 500+ teams worldwide
//           </p>
//           <div style={{ display:'flex', justifyContent:'center', gap:40, flexWrap:'wrap', alignItems:'center' }}>
//             {['TechCorp','DigitalMinds','SoftNest','RemoteFirst','BizFlow','CyberSafe'].map(b=>(
//               <span key={b} style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:18, fontWeight:700, color:'#cbd5e1', letterSpacing:-0.5 }}>{b}</span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ STATS ══ */}
//       <section id="stats" style={{ padding:'100px 24px', background:'linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#ccfbf1 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', top:-100, right:-100, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.1) 0%,transparent 65%)', pointerEvents:'none' }}/>
//         <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:64 }}>
//             <span style={{ display:'inline-block', background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', color:'#fff', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>📊 By The Numbers</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#0f172a', margin:'0 0 14px', letterSpacing:-1 }}>
//               Numbers That <span className="grad-text">Speak</span>
//             </h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16 }}>Trusted by teams in over 15 countries worldwide</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
//             {[
//               { val:'10k+', label:'Tasks Completed', emoji:'✅', grad:'linear-gradient(135deg,#0ea5e9,#38bdf8)', shadow:'rgba(14,165,233,0.25)' },
//               { val:'500+', label:'Global Teams',    emoji:'🌐', grad:'linear-gradient(135deg,#14b8a6,#2dd4bf)', shadow:'rgba(20,184,166,0.25)' },
//               { val:'15+',  label:'Countries',       emoji:'🌍', grad:'linear-gradient(135deg,#8b5cf6,#a78bfa)', shadow:'rgba(139,92,246,0.25)' },
//               { val:'99.9%',label:'Uptime',          emoji:'⚡', grad:'linear-gradient(135deg,#f59e0b,#fbbf24)', shadow:'rgba(245,158,11,0.25)' },
//             ].map((s,i)=>(
//               <div key={i} className="stat-card" style={{ background:s.grad, boxShadow:`0 12px 40px ${s.shadow}` }}>
//                 <div style={{ fontSize:32, marginBottom:14, animation:'floatY 4s ease-in-out infinite', animationDelay:`${i*0.4}s` }}>{s.emoji}</div>
//                 <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#fff', marginBottom:8, lineHeight:1 }}>{s.val}</div>
//                 <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:'rgba(255,255,255,0.8)', fontWeight:500, letterSpacing:0.5 }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ FEATURES ══ */}
//       <section id="features" style={{ padding:'100px 24px', background:'#fff' }}>
//         <div style={{ maxWidth:1100, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:64 }}>
//             <span style={{ display:'inline-block', background:'#e0f2fe', color:'#0369a1', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>✦ Features</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#0f172a', margin:'0 0 14px', letterSpacing:-1 }}>
//               Everything in <span className="grad-text">One Place</span>
//             </h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16, maxWidth:460, margin:'0 auto', lineHeight:1.75 }}>
//               Every feature your team needs — beautifully designed and built right into EMS PRO.
//             </p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:22 }}>
//             {FEATURES.map((f,i)=>(
//               <div key={i} className="feat-card">
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${f.color},${f.color}55)`, borderRadius:'20px 20px 0 0' }}/>
//                 <div style={{ width:60, height:60, borderRadius:16, background:f.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, marginBottom:18, boxShadow:`0 4px 16px ${f.color}22` }}>{f.emoji}</div>
//                 <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
//                   <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:17, fontWeight:700, color:'#0f172a', lineHeight:1.3, maxWidth:180 }}>{f.title}</h3>
//                   <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:'uppercase', background:f.bg, color:f.color, padding:'4px 10px', borderRadius:6, flexShrink:0, marginLeft:8 }}>{f.badge}</span>
//                 </div>
//                 <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:14, lineHeight:1.8, margin:0 }}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ HOW IT WORKS ══ */}
//       <section style={{ padding:'100px 24px', background:'linear-gradient(145deg,#0c1445 0%,#0a2a4a 40%,#0d3b4f 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.15) 0%,transparent 65%)', top:'-150px', right:'-150px', animation:'blob1 15s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(20,184,166,0.12) 0%,transparent 65%)', bottom:'-100px', left:'-100px', animation:'blob2 12s ease-in-out infinite' }}/>
//         </div>
//         <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:64 }}>
//             <span style={{ display:'inline-block', background:'rgba(14,165,233,0.15)', border:'1px solid rgba(14,165,233,0.3)', color:'#38bdf8', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>🎯 How It Works</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#fff', margin:'0 0 14px', letterSpacing:-1 }}>
//               Up & Running in <span className="grad-text">3 Steps</span>
//             </h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.55)', fontSize:16 }}>No complicated setup. Just sign up and start managing.</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
//             {[
//               { step:'01', emoji:'🎯', title:'Sign Up',        color:'#38bdf8', desc:'Create your account in under 2 minutes. No credit card needed to get started.' },
//               { step:'02', emoji:'👥', title:'Add Your Team',  color:'#2dd4bf', desc:'Invite employees, assign roles, and set up departments instantly with ease.' },
//               { step:'03', emoji:'🚀', title:'Start Managing', color:'#a78bfa', desc:'Track tasks, view analytics, and boost team productivity from day one.' },
//             ].map((s,i)=>(
//               <div key={i} style={{
//                 background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)',
//                 backdropFilter:'blur(12px)', borderRadius:24, padding:'40px 32px',
//                 textAlign:'center', position:'relative', overflow:'hidden',
//                 transition:'transform 0.3s, border-color 0.3s'
//               }}
//               onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.borderColor=`${s.color}55` }}
//               onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)' }}>
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,transparent,${s.color},transparent)` }}/>
//                 <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:52, fontWeight:800, color:`${s.color}20`, lineHeight:1, marginBottom:16 }}>{s.step}</div>
//                 <div style={{ width:68, height:68, borderRadius:18, background:`${s.color}15`, border:`1.5px solid ${s.color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:30, margin:'0 auto 20px', animation:`floatY 4s ${i*0.5}s ease-in-out infinite` }}>{s.emoji}</div>
//                 <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:22, fontWeight:700, color:'#fff', marginBottom:12 }}>{s.title}</h3>
//                 <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.5)', fontSize:14, lineHeight:1.85, margin:0 }}>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ REVIEWS ══ */}
//       <section id="reviews" style={{ padding:'100px 24px', background:'linear-gradient(180deg,#f8fafc 0%,#f0f9ff 100%)' }}>
//         <div style={{ maxWidth:1260, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:56 }}>
//             <span style={{ display:'inline-block', background:'#fce7f3', color:'#be185d', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>★ Testimonials</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#0f172a', margin:'0 0 12px', letterSpacing:-1 }}>
//               Trusted by Teams <span className="grad-text">Worldwide</span>
//             </h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16, margin:'0 0 22px' }}>Over 10,000 satisfied users — here are their real stories</p>
//             <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'linear-gradient(135deg,#fef9c3,#fde68a)', border:'1px solid #f59e0b', color:'#92400e', padding:'8px 24px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, fontWeight:700 }}>
//               ⭐ 4.9 / 5 Average Rating — 10,000+ Reviews
//             </div>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14, marginBottom:14 }}>
//             {REVIEWS.slice(0,5).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14 }}>
//             {REVIEWS.slice(5,10).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//         </div>
//       </section>

//       {/* ══ CTA ══ */}
//       <section style={{ padding:'110px 24px', background:'linear-gradient(145deg,#0c1445 0%,#0a2a4a 40%,#0d3b4f 100%)', position:'relative', overflow:'hidden', textAlign:'center' }}>
//         <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:800, height:800, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 65%)', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }}/>
//           <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(20,184,166,0.1) 0%,transparent 65%)', top:'-100px', right:'-100px', animation:'blob1 14s ease-in-out infinite' }}/>
//         </div>
//         <div style={{ position:'relative', zIndex:2, maxWidth:680, margin:'0 auto' }}>
//           <div style={{ fontSize:54, marginBottom:20, animation:'floatY 3s ease-in-out infinite' }}>🚀</div>
//           <span style={{ display:'inline-block', marginBottom:20, background:'rgba(14,165,233,0.15)', border:'1px solid rgba(14,165,233,0.3)', color:'#38bdf8', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase' }}>Get Started Today</span>
//           <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:50, fontWeight:800, color:'#fff', margin:'0 0 20px', lineHeight:1.1, letterSpacing:-1.5 }}>
//             Ready to Transform<br/><span className="grad-text">Your Team Management?</span>
//           </h2>
//           <div style={{ width:80, height:3, background:'linear-gradient(90deg,#0ea5e9,#14b8a6)', borderRadius:2, margin:'0 auto 28px', boxShadow:'0 0 16px rgba(14,165,233,0.5)' }}/>
//           <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.55)', fontSize:17, margin:'0 auto 48px', lineHeight:1.85, maxWidth:480 }}>
//             Join over 500 teams worldwide already using EMS PRO to work smarter, faster, and better together.
//           </p>
//           <Link to="/login" className="btn-primary" style={{ fontSize:16, padding:'18px 52px' }}>Start for Free Today →</Link>
//           <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.3)', fontSize:12, marginTop:20 }}>
//             No credit card required · Cancel anytime · Setup in 5 minutes
//           </p>
//         </div>
//       </section>

//       {/* ══ FOOTER ══ */}
//       <footer style={{ background:'#0a0f1e', borderTop:'1px solid rgba(14,165,233,0.1)', padding:'80px 24px 0' }}>
//         <div style={{ maxWidth:1200, margin:'0 auto' }}>
//           <div style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:52, marginBottom:60 }}>

//             {/* Brand */}
//             <div>
//               <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18 }}>
//                 <div style={{ width:34, height:34, borderRadius:9, background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, boxShadow:'0 4px 14px rgba(14,165,233,0.35)' }}>⚡</div>
//                 <span style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:20, fontWeight:800, color:'#fff', letterSpacing:-0.5 }}>EMS <span style={{ color:'#0ea5e9' }}>PRO</span></span>
//               </div>
//               <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:400, color:'#475569', fontSize:14, lineHeight:1.85, marginBottom:26, maxWidth:280 }}>
//                 A world-class Employee Management System built for modern, high-performing teams across the globe.
//               </p>
//               <div style={{ display:'flex', gap:10, marginBottom:26 }}>
//                 {[
//                   { icon:'in', bg:'#0077b5' },
//                   { icon:'𝕏',  bg:'#1a1a2e' },
//                   { icon:'f',  bg:'#1877f2' },
//                   { icon:'▶', bg:'#ff0000' },
//                 ].map((s,i)=>(
//                   <div key={i} style={{ width:36, height:36, borderRadius:9, background:s.bg, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:13, cursor:'pointer', transition:'transform 0.2s, opacity 0.2s', opacity:0.75 }}
//                     onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.opacity='1' }}
//                     onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.opacity='0.75' }}>
//                     {s.icon}
//                   </div>
//                 ))}
//               </div>
//               <div style={{ display:'flex', gap:10 }}>
//                 {['App Store','Google Play'].map(b=>(
//                   <div key={b} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(14,165,233,0.15)', borderRadius:9, padding:'8px 14px', cursor:'pointer', transition:'border-color 0.3s' }}
//                     onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(14,165,233,0.4)'}
//                     onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(14,165,233,0.15)'}>
//                     <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#475569', fontSize:9, marginBottom:2 }}>Download on the</div>
//                     <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#fff', fontSize:13, fontWeight:600 }}>{b}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {[
//               { heading:'Product', links:['Features','Pricing','Integrations','Changelog','Roadmap'] },
//               { heading:'Company', links:['About Us','Blog','Careers','Press Kit','Contact'] },
//               { heading:'Support', links:['Help Center','Documentation','API Docs','Status Page','Privacy Policy'] },
//             ].map(col=>(
//               <div key={col.heading}>
//                 <h4 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", color:'#fff', fontWeight:700, fontSize:15, margin:'0 0 18px', letterSpacing:-0.3 }}>{col.heading}</h4>
//                 {col.links.map(l=><a key={l} href="#" className="fl">{l}</a>)}
//               </div>
//             ))}
//           </div>

//           {/* Newsletter */}
//           <div style={{ background:'linear-gradient(135deg,rgba(14,165,233,0.1),rgba(20,184,166,0.1))', border:'1px solid rgba(14,165,233,0.2)', borderRadius:18, padding:'34px 38px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:50, flexWrap:'wrap', gap:22 }}>
//             <div>
//               <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", color:'#fff', fontWeight:700, fontSize:20, margin:'0 0 6px', letterSpacing:-0.5 }}>📬 Stay in the Loop</h3>
//               <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#475569', fontSize:14, margin:0 }}>Weekly HR tips, product updates, and exclusive offers.</p>
//             </div>
//             <div style={{ display:'flex', gap:10 }}>
//               <input type="email" placeholder="your@email.com" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(14,165,233,0.2)', color:'#fff', padding:'12px 18px', borderRadius:10, fontSize:14, outline:'none', width:220, fontFamily:"'Plus Jakarta Sans',sans-serif" }}
//                 onFocus={e=>e.target.style.borderColor='rgba(14,165,233,0.5)'}
//                 onBlur={e=>e.target.style.borderColor='rgba(14,165,233,0.2)'}
//               />
//               <button className="btn-primary" style={{ padding:'12px 22px', fontSize:13 }}>Subscribe</button>
//             </div>
//           </div>

//           {/* Trust badges */}
//           <div style={{ display:'flex', justifyContent:'center', gap:18, marginBottom:40, flexWrap:'wrap' }}>
//             {[
//               { icon:'🏆', text:'Product of the Year 2025' },
//               { icon:'🔒', text:'SOC 2 Certified' },
//               { icon:'⭐', text:'G2 Leader 2025' },
//               { icon:'🌍', text:'GDPR Compliant' },
//             ].map((b,i)=>(
//               <div key={i} style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(14,165,233,0.1)', borderRadius:8, padding:'8px 16px' }}>
//                 <span style={{ fontSize:16 }}>{b.icon}</span>
//                 <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:'#475569', fontWeight:500 }}>{b.text}</span>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Bottom bar */}
// //           <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:22, paddingBottom:30, borderTop:'1px solid rgba(255,255,255,0.05)', flexWrap:'wrap', gap:12 }}>
// //             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#334155', fontSize:13, margin:0 }}>
// //               © 2026 EMS PRO. All Rights Reserved. Built for the world. 🌍
// //             </p>
// //             <div style={{ display:'flex', gap:22 }}>
// //               {['Terms','Privacy','Cookies','Sitemap'].map(l=>(
// //                 <a key={l} href="#" style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#334155', textDecoration:'none', fontSize:12, transition:'color 0.2s' }}
// //                   onMouseEnter={e=>e.target.style.color='#0ea5e9'}
// //                   onMouseLeave={e=>e.target.style.color='#334155'}>
// //                   {l}
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //         </div>
// //       </footer>
// //     </>
// //   )
// // }


// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Bricolage+Grotesque:wght@400;500;600;700;800&display=swap');

//   *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

//   :root {
//     --blue:    #0ea5e9;
//     --blue2:   #38bdf8;
//     --teal:    #14b8a6;
//     --teal2:   #2dd4bf;
//     --navy:    #0f172a;
//     --navy2:   #1e293b;
//     --slate:   #334155;
//     --light:   #f0f9ff;
//     --light2:  #e0f2fe;
//     --white:   #ffffff;
//     --text:    #0f172a;
//     --muted:   #64748b;
//   }

//   body { font-family:'Plus Jakarta Sans',sans-serif; }

//   @keyframes floatY {
//     0%,100% { transform:translateY(0px) rotate(0deg); }
//     33%      { transform:translateY(-18px) rotate(2deg); }
//     66%      { transform:translateY(-8px) rotate(-1deg); }
//   }
//   @keyframes blob1 {
//     0%,100% { transform:translate(0,0) scale(1); }
//     33%      { transform:translate(50px,-60px) scale(1.1); }
//     66%      { transform:translate(-30px,40px) scale(0.92); }
//   }
//   @keyframes blob2 {
//     0%,100% { transform:translate(0,0) scale(1); }
//     50%      { transform:translate(-60px,70px) scale(1.08); }
//   }
//   @keyframes blob3 {
//     0%,100% { transform:translate(0,0); }
//     40%      { transform:translate(40px,-40px); }
//     80%      { transform:translate(-20px,20px); }
//   }
//   @keyframes fadeUp {
//     from { opacity:0; transform:translateY(32px); }
//     to   { opacity:1; transform:translateY(0); }
//   }
//   @keyframes slideIn {
//     from { opacity:0; transform:translateX(-20px); }
//     to   { opacity:1; transform:translateX(0); }
//   }
//   @keyframes pulseGlow {
//     0%,100% { box-shadow:0 0 0 0 rgba(14,165,233,0.4); }
//     50%      { box-shadow:0 0 0 12px rgba(14,165,233,0); }
//   }
//   @keyframes gradMove {
//     0%   { background-position:0% 50%; }
//     50%  { background-position:100% 50%; }
//     100% { background-position:0% 50%; }
//   }

//   .fadeUp { animation:fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; }
//   .d1 { animation-delay:0.08s; }
//   .d2 { animation-delay:0.18s; }
//   .d3 { animation-delay:0.30s; }
//   .d4 { animation-delay:0.44s; }
//   .d5 { animation-delay:0.58s; }

//   .grad-text {
//     background: linear-gradient(135deg, #0ea5e9, #14b8a6, #0ea5e9);
//     background-size: 200% 200%;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     animation: gradMove 4s ease infinite;
//   }

//   .btn-primary {
//     display:inline-flex; align-items:center; gap:8px;
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-weight:700; font-size:15px; letter-spacing:0.2px;
//     text-decoration:none; padding:16px 36px; border-radius:14px;
//     background:linear-gradient(135deg,#0ea5e9,#14b8a6);
//     color:#fff; border:none; cursor:pointer;
//     box-shadow:0 8px 32px rgba(14,165,233,0.4);
//     transition:transform 0.25s, box-shadow 0.25s;
//   }
//   .btn-primary:hover {
//     transform:translateY(-3px) scale(1.02);
//     box-shadow:0 16px 48px rgba(14,165,233,0.5);
//   }
//   .btn-secondary {
//     display:inline-flex; align-items:center; gap:8px;
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-weight:600; font-size:15px;
//     text-decoration:none; padding:15px 32px; border-radius:14px;
//     background:rgba(255,255,255,0.1); color:#fff;
//     border:1.5px solid rgba(255,255,255,0.25);
//     backdrop-filter:blur(10px);
//     transition:background 0.25s, border-color 0.25s, transform 0.25s;
//   }
//   .btn-secondary:hover {
//     background:rgba(255,255,255,0.18);
//     border-color:rgba(255,255,255,0.5);
//     transform:translateY(-3px);
//   }

//   .nav-a {
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-weight:500; font-size:14px;
//     color:rgba(255,255,255,0.7); text-decoration:none;
//     transition:color 0.2s; letter-spacing:0.2px;
//   }
//   .nav-a:hover { color:#fff; }
//   .nav-a-dark {
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-weight:500; font-size:14px;
//     color:#334155; text-decoration:none;
//     transition:color 0.2s;
//   }
//   .nav-a-dark:hover { color:#0ea5e9; }

//   .feat-card {
//     background:#fff; border:1.5px solid #e2e8f0;
//     border-radius:20px; padding:32px 26px;
//     transition:transform 0.3s, box-shadow 0.3s, border-color 0.3s;
//     cursor:default; position:relative; overflow:hidden;
//   }
//   .feat-card::after {
//     content:''; position:absolute; inset:0;
//     background:linear-gradient(135deg,rgba(14,165,233,0.04),rgba(20,184,166,0.04));
//     opacity:0; transition:opacity 0.3s; border-radius:20px;
//   }
//   .feat-card:hover {
//     transform:translateY(-8px);
//     box-shadow:0 20px 60px rgba(14,165,233,0.15);
//     border-color:#bae6fd;
//   }
//   .feat-card:hover::after { opacity:1; }

//   .review-card {
//     background:#fff; border:1.5px solid #e2e8f0;
//     border-radius:18px; padding:24px;
//     display:flex; flex-direction:column; gap:14px;
//     transition:transform 0.3s, box-shadow 0.3s, border-color 0.3s;
//     cursor:default;
//   }
//   .review-card:hover {
//     transform:translateY(-6px);
//     box-shadow:0 16px 48px rgba(14,165,233,0.12);
//     border-color:#bae6fd;
//   }

//   .stat-card {
//     border-radius:20px; padding:36px 24px; text-align:center;
//     transition:transform 0.3s; cursor:default;
//   }
//   .stat-card:hover { transform:translateY(-6px); }

//   .fl {
//     display:block; margin-bottom:10px;
//     font-family:'Plus Jakarta Sans',sans-serif; font-size:14px;
//     font-weight:400; color:#94a3b8; text-decoration:none; transition:color 0.2s;
//   }
//   .fl:hover { color:#0ea5e9; }

//   .hero-badge {
//     display:inline-flex; align-items:center; gap:8px;
//     background:rgba(255,255,255,0.12); backdrop-filter:blur(16px);
//     border:1px solid rgba(255,255,255,0.2);
//     color:#fff; padding:8px 20px; border-radius:50px;
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-size:13px; font-weight:600; letter-spacing:0.3px;
//     animation:slideIn 0.6s ease both;
//   }

//   ::-webkit-scrollbar { width:5px; }
//   ::-webkit-scrollbar-track { background:#f1f5f9; }
//   ::-webkit-scrollbar-thumb { background:linear-gradient(#0ea5e9,#14b8a6); border-radius:10px; }
// `

// const REVIEWS = [
//   { initials:'AK', grad:'linear-gradient(135deg,#0ea5e9,#14b8a6)', rating:5,
//     name:'Ali Khan', role:'HR Manager', company:'TechCorp International',
//     text:'"EMS PRO completely transformed our HR operations. Everything managed in one place — saving hours every week."' },
//   { initials:'SA', grad:'linear-gradient(135deg,#f59e0b,#f97316)', rating:5,
//     name:'Sara Ahmed', role:'Team Lead', company:'DigitalMinds Agency',
//     text:'"Incredibly easy to use. Our team onboarded in two days. Productivity doubled and errors dropped significantly."' },
//   { initials:'UA', grad:'linear-gradient(135deg,#8b5cf6,#6366f1)', rating:5,
//     name:'Usman Ali', role:'Senior Developer', company:'SoftNest Solutions',
//     text:'"Best EMS platform I have worked with. Task tracking is powerful and API integration is absolutely seamless."' },
//   { initials:'AS', grad:'linear-gradient(135deg,#ec4899,#f43f5e)', rating:4,
//     name:'Ayesha Siddiqui', role:'Project Manager', company:'RemoteFirst Inc',
//     text:'"Managing distributed teams has never been easier. Real-time updates keep everyone aligned across time zones."' },
//   { initials:'BR', grad:'linear-gradient(135deg,#14b8a6,#0ea5e9)', rating:5,
//     name:'Bilal Raza', role:'CEO', company:'StartupHub Group',
//     text:'"The analytics dashboard alone was worth every penny. Tracking ROI now takes minutes instead of hours."' },
//   { initials:'FM', grad:'linear-gradient(135deg,#10b981,#14b8a6)', rating:5,
//     name:'Fatima Malik', role:'Operations Director', company:'BizFlow Solutions',
//     text:'"All meetings, assignments, and workload visibility in one platform. Team clarity improved overnight."' },
//   { initials:'HS', grad:'linear-gradient(135deg,#6366f1,#8b5cf6)', rating:4,
//     name:'Hamza Sheikh', role:'IT Administrator', company:'CyberSafe Ltd',
//     text:'"Role-based access control is rock solid. Full security and privacy without burdening the IT team."' },
//   { initials:'ZH', grad:'linear-gradient(135deg,#f97316,#f59e0b)', rating:5,
//     name:'Zara Hussain', role:'Customer Success', company:'CloudBase Technologies',
//     text:'"Support is incredibly responsive. Every issue resolved quickly and professionally. Outstanding service!"' },
//   { initials:'TM', grad:'linear-gradient(135deg,#ec4899,#8b5cf6)', rating:5,
//     name:'Tariq Mehmood', role:'CTO', company:'Nexus Digital Group',
//     text:'"All company data centralized, secure, and organized. Implementation was smooth with zero downtime."' },
//   { initials:'NQ', grad:'linear-gradient(135deg,#0ea5e9,#6366f1)', rating:4,
//     name:'Nadia Qureshi', role:'Field Operations Lead', company:'OnGround Services',
//     text:'"Mobile access is a game changer for field teams. Offline mode ensures connectivity is never a blocker."' },
// ]

// const FEATURES = [
//   { emoji:'📊', title:'Real-Time Task Tracking', badge:'Most Used', color:'#0ea5e9', bg:'#e0f2fe',
//     desc:'Monitor every task live. Set priorities, manage deadlines, and instantly spot bottlenecks before they slow your team.' },
//   { emoji:'🔐', title:'Role-Based Access Control', badge:'Secure', color:'#14b8a6', bg:'#ccfbf1',
//     desc:'Separate dashboards for Admins, Managers, and Employees. Full data security and privacy at every level.' },
//   { emoji:'📈', title:'Advanced Analytics', badge:'AI Powered', color:'#8b5cf6', bg:'#ede9fe',
//     desc:'Team performance, attendance, and productivity insights — all in beautiful, easy-to-read dashboards.' },
//   { emoji:'📱', title:'Mobile Ready', badge:'Cross Platform', color:'#f59e0b', bg:'#fef3c7',
//     desc:'Seamless experience on iOS and Android. Keep your field teams connected and productive 24/7.' },
//   { emoji:'🔔', title:'Smart Notifications', badge:'Automated', color:'#ec4899', bg:'#fce7f3',
//     desc:'Deadline reminders and approvals via Slack, Email, and SMS — all fully automated.' },
//   { emoji:'☁️', title:'Cloud Backup', badge:'Always On', color:'#10b981', bg:'#d1fae5',
//     desc:'Data backed up every second. 99.99% uptime with true enterprise-grade reliability.' },
// ]

// const ReviewCard = ({ r }) => (
//   <div className="review-card">
//     <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//       <div style={{
//         width:44, height:44, borderRadius:'50%', background:r.grad, color:'#fff',
//         display:'flex', alignItems:'center', justifyContent:'center',
//         fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:13,
//         flexShrink:0, boxShadow:'0 4px 14px rgba(0,0,0,0.15)'
//       }}>{r.initials}</div>
//       <div style={{ display:'flex', gap:2 }}>
//         {[...Array(5)].map((_,i)=>(
//           <span key={i} style={{ color:i<r.rating?'#f59e0b':'#e2e8f0', fontSize:13 }}>★</span>
//         ))}
//       </div>
//     </div>
//     <p style={{ color:'#475569', fontSize:13, lineHeight:1.85, fontFamily:"'Plus Jakarta Sans',sans-serif", fontStyle:'italic', margin:0, flexGrow:1 }}>{r.text}</p>
//     <div style={{ borderTop:'1.5px solid #f1f5f9', paddingTop:12 }}>
//       <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:14, color:'#0f172a' }}>{r.name}</div>
//       <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:600, color:'#0ea5e9', marginTop:2, textTransform:'uppercase', letterSpacing:0.8 }}>{r.role}</div>
//       <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, color:'#94a3b8', marginTop:1 }}>{r.company}</div>
//     </div>
//   </div>
// )

// export default function HomePage() {
//   const [scrolled, setScrolled] = useState(false)
//   useEffect(()=>{
//     const fn=()=>setScrolled(window.scrollY>60)
//     window.addEventListener('scroll',fn)
//     return ()=>window.removeEventListener('scroll',fn)
//   },[])

//   return (
//     <>
//       <style>{STYLES}</style>

//       {/* ══ NAVBAR ══ */}
//       <nav style={{
//         position:'fixed', top:0, width:'100%', zIndex:200,
//         padding:'0 32px', height:70, boxSizing:'border-box',
//         display:'flex', alignItems:'center', transition:'all 0.35s',
//         background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
//         backdropFilter: scrolled ? 'blur(24px)' : 'none',
//         boxShadow: scrolled ? '0 1px 40px rgba(14,165,233,0.1)' : 'none',
//         borderBottom: scrolled ? '1px solid rgba(14,165,233,0.1)' : 'none',
//       }}>
//         <div style={{ maxWidth:1200, width:'100%', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//           <div style={{ display:'flex', alignItems:'center', gap:10 }}>
//             <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, boxShadow:'0 4px 14px rgba(14,165,233,0.4)' }}>⚡</div>
//             <span style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:22, fontWeight:800, color: scrolled ? '#0f172a' : '#fff', transition:'color 0.35s', letterSpacing:-0.5 }}>
//               EMS <span style={{ color:'#0ea5e9' }}>PRO</span>
//             </span>
//           </div>
//           <div style={{ display:'flex', gap:36, alignItems:'center' }}>
//             {['Features','Stats','Reviews'].map(s=>(
//               <a key={s} href={`#${s.toLowerCase()}`} className={scrolled ? 'nav-a-dark' : 'nav-a'}>{s}</a>
//             ))}
//             <Link to="/login" className="btn-primary" style={{ padding:'10px 24px', fontSize:13 }}>Sign In →</Link>
//           </div>
//         </div>
//       </nav>

//       {/* ══ HERO ══ */}
//       <section style={{
//         minHeight:'100vh', position:'relative', overflow:'hidden',
//         display:'flex', alignItems:'center', justifyContent:'center',
//         textAlign:'center', padding:'100px 24px 80px',
//         background:'linear-gradient(145deg,#0c1445 0%,#0a2a4a 30%,#0d3b4f 60%,#0f2d3d 100%)',
//       }}>
//         {/* Blobs */}
//         <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}>
//           <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.25) 0%,transparent 65%)', top:'-200px', left:'-150px', animation:'blob1 14s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(20,184,166,0.2) 0%,transparent 65%)', bottom:'-150px', right:'-100px', animation:'blob2 17s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:450, height:450, borderRadius:'50%', background:'radial-gradient(circle,rgba(99,102,241,0.18) 0%,transparent 65%)', top:'30%', right:'15%', animation:'blob3 11s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(56,189,248,0.15) 0%,transparent 65%)', bottom:'20%', left:'20%', animation:'blob1 9s ease-in-out infinite reverse' }}/>
//         </div>

//         {/* Grid overlay */}
//         <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none', backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'50px 50px' }}/>

//         {/* Floating orbs */}
//         <div style={{ position:'absolute', zIndex:2, pointerEvents:'none', inset:0 }}>
//           {[
//             { size:14, color:'#38bdf8', top:'20%', left:'12%',  delay:'0s',   dur:'4s' },
//             { size:10, color:'#2dd4bf', top:'60%', left:'8%',   delay:'1s',   dur:'5s' },
//             { size:18, color:'#0ea5e9', top:'35%', right:'10%', delay:'0.5s', dur:'6s' },
//             { size:12, color:'#14b8a6', top:'75%', right:'18%', delay:'2s',   dur:'4.5s' },
//             { size:8,  color:'#a5f3fc', top:'15%', right:'30%', delay:'1.5s', dur:'3.5s' },
//           ].map((o,i)=>(
//             <div key={i} style={{
//               position:'absolute', width:o.size, height:o.size, borderRadius:'50%',
//               background:o.color, top:o.top, left:o.left, right:o.right,
//               opacity:0.7, animation:`floatY ${o.dur} ${o.delay} ease-in-out infinite`,
//               boxShadow:`0 0 ${o.size*2}px ${o.color}`
//             }}/>
//           ))}
//         </div>

//         {/* Content */}
//         <div style={{ position:'relative', zIndex:10, maxWidth:880 }}>
//           <div className="hero-badge fadeUp d1" style={{ marginBottom:28 }}>
//             <span style={{ width:8, height:8, borderRadius:'50%', background:'#38bdf8', display:'inline-block', animation:'pulseGlow 2s ease-in-out infinite' }}/>
//             🚀 The World's Smartest Employee Management System
//           </div>

//           <h1 className="fadeUp d2" style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:'clamp(46px,6.8vw,88px)', fontWeight:800, lineHeight:1.06, color:'#fff', margin:'0 0 16px', letterSpacing:-2 }}>
//             Manage Your Team
//           </h1>
//           <h1 className="fadeUp d2" style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:'clamp(46px,6.8vw,88px)', fontWeight:800, lineHeight:1.06, margin:'0 0 28px', letterSpacing:-2 }}>
//             <span className="grad-text">Like Never Before</span>
//           </h1>

//           <div className="fadeUp d3" style={{ width:80, height:3, borderRadius:2, background:'linear-gradient(90deg,#0ea5e9,#14b8a6)', margin:'0 auto 28px', boxShadow:'0 0 16px rgba(14,165,233,0.5)' }}/>

//           <p className="fadeUp d3" style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:400, color:'rgba(255,255,255,0.65)', fontSize:18, maxWidth:520, margin:'0 auto 48px', lineHeight:1.85 }}>
//             A smart, secure, and scalable Employee Management System built for modern high-performing teams across the globe.
//           </p>

//           <div className="fadeUp d4" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
//             <Link to="/login" className="btn-primary">Get Started Free →</Link>
//             <a href="#features" className="btn-secondary">Explore Features</a>
//           </div>

//           <div className="fadeUp d5" style={{ marginTop:52, display:'flex', justifyContent:'center', gap:24, flexWrap:'wrap' }}>
//             {[
//               { icon:'✅', text:'No credit card required' },
//               { icon:'⚡', text:'Setup in 5 minutes' },
//               { icon:'🔒', text:'Enterprise-grade security' },
//             ].map(t=>(
//               <div key={t.text} style={{
//                 display:'flex', alignItems:'center', gap:7,
//                 background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)',
//                 borderRadius:50, padding:'7px 16px',
//                 fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:'rgba(255,255,255,0.7)', fontWeight:500
//               }}>
//                 <span>{t.icon}</span> {t.text}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Wave bottom */}
//         <div style={{ position:'absolute', bottom:0, left:0, right:0, zIndex:5, overflow:'hidden', lineHeight:0 }}>
//           <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width:'100%', height:80 }}>
//             <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc"/>
//           </svg>
//         </div>
//       </section>

//       {/* ══ TRUST BAR ══ */}
//       <section style={{ padding:'40px 24px', background:'#f8fafc', borderBottom:'1px solid #e2e8f0' }}>
//         <div style={{ maxWidth:1000, margin:'0 auto', textAlign:'center' }}>
//           <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:'#94a3b8', letterSpacing:2, textTransform:'uppercase', fontWeight:600, marginBottom:28 }}>
//             Trusted by 500+ teams worldwide
//           </p>
//           <div style={{ display:'flex', justifyContent:'center', gap:40, flexWrap:'wrap', alignItems:'center' }}>
//             {['TechCorp','DigitalMinds','SoftNest','RemoteFirst','BizFlow','CyberSafe'].map(b=>(
//               <span key={b} style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:18, fontWeight:700, color:'#cbd5e1', letterSpacing:-0.5 }}>{b}</span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ STATS ══ */}
//       <section id="stats" style={{ padding:'100px 24px', background:'linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#ccfbf1 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', top:-100, right:-100, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.1) 0%,transparent 65%)', pointerEvents:'none' }}/>
//         <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:64 }}>
//             <span style={{ display:'inline-block', background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', color:'#fff', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>📊 By The Numbers</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#0f172a', margin:'0 0 14px', letterSpacing:-1 }}>
//               Numbers That <span className="grad-text">Speak</span>
//             </h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16 }}>Trusted by teams in over 15 countries worldwide</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
//             {[
//               { val:'10k+', label:'Tasks Completed', emoji:'✅', grad:'linear-gradient(135deg,#0ea5e9,#38bdf8)', shadow:'rgba(14,165,233,0.25)' },
//               { val:'500+', label:'Global Teams',    emoji:'🌐', grad:'linear-gradient(135deg,#14b8a6,#2dd4bf)', shadow:'rgba(20,184,166,0.25)' },
//               { val:'15+',  label:'Countries',       emoji:'🌍', grad:'linear-gradient(135deg,#8b5cf6,#a78bfa)', shadow:'rgba(139,92,246,0.25)' },
//               { val:'99.9%',label:'Uptime',          emoji:'⚡', grad:'linear-gradient(135deg,#f59e0b,#fbbf24)', shadow:'rgba(245,158,11,0.25)' },
//             ].map((s,i)=>(
//               <div key={i} className="stat-card" style={{ background:s.grad, boxShadow:`0 12px 40px ${s.shadow}` }}>
//                 <div style={{ fontSize:32, marginBottom:14, animation:'floatY 4s ease-in-out infinite', animationDelay:`${i*0.4}s` }}>{s.emoji}</div>
//                 <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#fff', marginBottom:8, lineHeight:1 }}>{s.val}</div>
//                 <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:'rgba(255,255,255,0.8)', fontWeight:500, letterSpacing:0.5 }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ FEATURES ══ */}
//       <section id="features" style={{ padding:'100px 24px', background:'#fff' }}>
//         <div style={{ maxWidth:1100, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:64 }}>
//             <span style={{ display:'inline-block', background:'#e0f2fe', color:'#0369a1', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>✦ Features</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#0f172a', margin:'0 0 14px', letterSpacing:-1 }}>
//               Everything in <span className="grad-text">One Place</span>
//             </h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16, maxWidth:460, margin:'0 auto', lineHeight:1.75 }}>
//               Every feature your team needs — beautifully designed and built right into EMS PRO.
//             </p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:22 }}>
//             {FEATURES.map((f,i)=>(
//               <div key={i} className="feat-card">
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${f.color},${f.color}55)`, borderRadius:'20px 20px 0 0' }}/>
//                 <div style={{ width:60, height:60, borderRadius:16, background:f.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, marginBottom:18, boxShadow:`0 4px 16px ${f.color}22` }}>{f.emoji}</div>
//                 <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
//                   <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:17, fontWeight:700, color:'#0f172a', lineHeight:1.3, maxWidth:180 }}>{f.title}</h3>
//                   <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:'uppercase', background:f.bg, color:f.color, padding:'4px 10px', borderRadius:6, flexShrink:0, marginLeft:8 }}>{f.badge}</span>
//                 </div>
//                 <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:14, lineHeight:1.8, margin:0 }}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ HOW IT WORKS ══ */}
//       <section style={{ padding:'100px 24px', background:'linear-gradient(145deg,#0c1445 0%,#0a2a4a 40%,#0d3b4f 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.15) 0%,transparent 65%)', top:'-150px', right:'-150px', animation:'blob1 15s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(20,184,166,0.12) 0%,transparent 65%)', bottom:'-100px', left:'-100px', animation:'blob2 12s ease-in-out infinite' }}/>
//         </div>
//         <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:64 }}>
//             <span style={{ display:'inline-block', background:'rgba(14,165,233,0.15)', border:'1px solid rgba(14,165,233,0.3)', color:'#38bdf8', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>🎯 How It Works</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#fff', margin:'0 0 14px', letterSpacing:-1 }}>
//               Up & Running in <span className="grad-text">3 Steps</span>
//             </h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.55)', fontSize:16 }}>No complicated setup. Just sign up and start managing.</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
//             {[
//               { step:'01', emoji:'🎯', title:'Sign Up',        color:'#38bdf8', desc:'Create your account in under 2 minutes. No credit card needed to get started.' },
//               { step:'02', emoji:'👥', title:'Add Your Team',  color:'#2dd4bf', desc:'Invite employees, assign roles, and set up departments instantly with ease.' },
//               { step:'03', emoji:'🚀', title:'Start Managing', color:'#a78bfa', desc:'Track tasks, view analytics, and boost team productivity from day one.' },
//             ].map((s,i)=>(
//               <div key={i} style={{
//                 background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)',
//                 backdropFilter:'blur(12px)', borderRadius:24, padding:'40px 32px',
//                 textAlign:'center', position:'relative', overflow:'hidden',
//                 transition:'transform 0.3s, border-color 0.3s'
//               }}
//               onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.borderColor=`${s.color}55` }}
//               onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)' }}>
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,transparent,${s.color},transparent)` }}/>
//                 <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:52, fontWeight:800, color:`${s.color}20`, lineHeight:1, marginBottom:16 }}>{s.step}</div>
//                 <div style={{ width:68, height:68, borderRadius:18, background:`${s.color}15`, border:`1.5px solid ${s.color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:30, margin:'0 auto 20px', animation:`floatY 4s ${i*0.5}s ease-in-out infinite` }}>{s.emoji}</div>
//                 <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:22, fontWeight:700, color:'#fff', marginBottom:12 }}>{s.title}</h3>
//                 <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.5)', fontSize:14, lineHeight:1.85, margin:0 }}>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ REVIEWS ══ */}
//       <section id="reviews" style={{ padding:'100px 24px', background:'linear-gradient(180deg,#f8fafc 0%,#f0f9ff 100%)' }}>
//         <div style={{ maxWidth:1260, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:56 }}>
//             <span style={{ display:'inline-block', background:'#fce7f3', color:'#be185d', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>★ Testimonials</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:42, fontWeight:800, color:'#0f172a', margin:'0 0 12px', letterSpacing:-1 }}>
//               Trusted by Teams <span className="grad-text">Worldwide</span>
//             </h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16, margin:'0 0 22px' }}>Over 10,000 satisfied users — here are their real stories</p>
//             <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'linear-gradient(135deg,#fef9c3,#fde68a)', border:'1px solid #f59e0b', color:'#92400e', padding:'8px 24px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, fontWeight:700 }}>
//               ⭐ 4.9 / 5 Average Rating — 10,000+ Reviews
//             </div>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14, marginBottom:14 }}>
//             {REVIEWS.slice(0,5).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14 }}>
//             {REVIEWS.slice(5,10).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//         </div>
//       </section>

//       {/* ══ CTA ══ */}
//       <section style={{ padding:'110px 24px', background:'linear-gradient(145deg,#0c1445 0%,#0a2a4a 40%,#0d3b4f 100%)', position:'relative', overflow:'hidden', textAlign:'center' }}>
//         <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:800, height:800, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 65%)', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }}/>
//           <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(20,184,166,0.1) 0%,transparent 65%)', top:'-100px', right:'-100px', animation:'blob1 14s ease-in-out infinite' }}/>
//         </div>
//         <div style={{ position:'relative', zIndex:2, maxWidth:680, margin:'0 auto' }}>
//           <div style={{ fontSize:54, marginBottom:20, animation:'floatY 3s ease-in-out infinite' }}>🚀</div>
//           <span style={{ display:'inline-block', marginBottom:20, background:'rgba(14,165,233,0.15)', border:'1px solid rgba(14,165,233,0.3)', color:'#38bdf8', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase' }}>Get Started Today</span>
//           <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:50, fontWeight:800, color:'#fff', margin:'0 0 20px', lineHeight:1.1, letterSpacing:-1.5 }}>
//             Ready to Transform<br/><span className="grad-text">Your Team Management?</span>
//           </h2>
//           <div style={{ width:80, height:3, background:'linear-gradient(90deg,#0ea5e9,#14b8a6)', borderRadius:2, margin:'0 auto 28px', boxShadow:'0 0 16px rgba(14,165,233,0.5)' }}/>
//           <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.55)', fontSize:17, margin:'0 auto 48px', lineHeight:1.85, maxWidth:480 }}>
//             Join over 500 teams worldwide already using EMS PRO to work smarter, faster, and better together.
//           </p>
//           <Link to="/login" className="btn-primary" style={{ fontSize:16, padding:'18px 52px' }}>Start for Free Today →</Link>
//           <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.3)', fontSize:12, marginTop:20 }}>
//             No credit card required · Cancel anytime · Setup in 5 minutes
//           </p>
//         </div>
//       </section>

//       {/* ══ FOOTER ══ */}
//       <footer style={{ background:'#0a0f1e', borderTop:'1px solid rgba(14,165,233,0.1)', padding:'80px 24px 0' }}>
//         <div style={{ maxWidth:1200, margin:'0 auto' }}>
//           <div style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:52, marginBottom:60 }}>

//             {/* Brand */}
//             <div>
//               <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18 }}>
//                 <div style={{ width:34, height:34, borderRadius:9, background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, boxShadow:'0 4px 14px rgba(14,165,233,0.35)' }}>⚡</div>
//                 <span style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:20, fontWeight:800, color:'#fff', letterSpacing:-0.5 }}>EMS <span style={{ color:'#0ea5e9' }}>PRO</span></span>
//               </div>
//               <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:400, color:'#475569', fontSize:14, lineHeight:1.85, marginBottom:26, maxWidth:280 }}>
//                 A world-class Employee Management System built for modern, high-performing teams across the globe.
//               </p>
//               <div style={{ display:'flex', gap:10, marginBottom:26 }}>
//                 {[
//                   { icon:'in', bg:'#0077b5' },
//                   { icon:'𝕏',  bg:'#1a1a2e' },
//                   { icon:'f',  bg:'#1877f2' },
//                   { icon:'▶', bg:'#ff0000' },
//                 ].map((s,i)=>(
//                   <div key={i} style={{ width:36, height:36, borderRadius:9, background:s.bg, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:13, cursor:'pointer', transition:'transform 0.2s, opacity 0.2s', opacity:0.75 }}
//                     onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.opacity='1' }}
//                     onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.opacity='0.75' }}>
//                     {s.icon}
//                   </div>
//                 ))}
//               </div>
//               <div style={{ display:'flex', gap:10 }}>
//                 {['App Store','Google Play'].map(b=>(
//                   <div key={b} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(14,165,233,0.15)', borderRadius:9, padding:'8px 14px', cursor:'pointer', transition:'border-color 0.3s' }}
//                     onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(14,165,233,0.4)'}
//                     onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(14,165,233,0.15)'}>
//                     <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#475569', fontSize:9, marginBottom:2 }}>Download on the</div>
//                     <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#fff', fontSize:13, fontWeight:600 }}>{b}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {[
//               { heading:'Product', links:['Features','Pricing','Integrations','Changelog','Roadmap'] },
//               { heading:'Company', links:['About Us','Blog','Careers','Press Kit','Contact'] },
//               { heading:'Support', links:['Help Center','Documentation','API Docs','Status Page','Privacy Policy'] },
//             ].map(col=>(
//               <div key={col.heading}>
//                 <h4 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", color:'#fff', fontWeight:700, fontSize:15, margin:'0 0 18px', letterSpacing:-0.3 }}>{col.heading}</h4>
//                 {col.links.map(l=><a key={l} href="#" className="fl">{l}</a>)}
//               </div>
//             ))}
//           </div>

//           {/* Newsletter */}
//           <div style={{ background:'linear-gradient(135deg,rgba(14,165,233,0.1),rgba(20,184,166,0.1))', border:'1px solid rgba(14,165,233,0.2)', borderRadius:18, padding:'34px 38px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:50, flexWrap:'wrap', gap:22 }}>
//             <div>
//               <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", color:'#fff', fontWeight:700, fontSize:20, margin:'0 0 6px', letterSpacing:-0.5 }}>📬 Stay in the Loop</h3>
//               <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#475569', fontSize:14, margin:0 }}>Weekly HR tips, product updates, and exclusive offers.</p>
//             </div>
//             <div style={{ display:'flex', gap:10 }}>
//               <input type="email" placeholder="your@email.com" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(14,165,233,0.2)', color:'#fff', padding:'12px 18px', borderRadius:10, fontSize:14, outline:'none', width:220, fontFamily:"'Plus Jakarta Sans',sans-serif" }}
//                 onFocus={e=>e.target.style.borderColor='rgba(14,165,233,0.5)'}
//                 onBlur={e=>e.target.style.borderColor='rgba(14,165,233,0.2)'}
//               />
//               <button className="btn-primary" style={{ padding:'12px 22px', fontSize:13 }}>Subscribe</button>
//             </div>
//           </div>

//           {/* Trust badges */}
//           <div style={{ display:'flex', justifyContent:'center', gap:18, marginBottom:40, flexWrap:'wrap' }}>
//             {[
//               { icon:'🏆', text:'Product of the Year 2025' },
//               { icon:'🔒', text:'SOC 2 Certified' },
//               { icon:'⭐', text:'G2 Leader 2025' },
//               { icon:'🌍', text:'GDPR Compliant' },
//             ].map((b,i)=>(
//               <div key={i} style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(14,165,233,0.1)', borderRadius:8, padding:'8px 16px' }}>
//                 <span style={{ fontSize:16 }}>{b.icon}</span>
//                 <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:'#475569', fontWeight:500 }}>{b.text}</span>
//               </div>
//             ))}
//           </div>

//           {/* Bottom bar */}
//           <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:22, paddingBottom:30, borderTop:'1px solid rgba(255,255,255,0.05)', flexWrap:'wrap', gap:12 }}>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#334155', fontSize:13, margin:0 }}>
//               © 2026 EMS PRO. All Rights Reserved. Built for the world. 🌍
//             </p>
//             <div style={{ display:'flex', gap:22 }}>
//               {['Terms','Privacy','Cookies','Sitemap'].map(l=>(
//                 <a key={l} href="#" style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#334155', textDecoration:'none', fontSize:12, transition:'color 0.2s' }}
//                   onMouseEnter={e=>e.target.style.color='#0ea5e9'}
//                   onMouseLeave={e=>e.target.style.color='#334155'}>
//                   {l}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </footer>
//     </>
//   )
// }




// import React, { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Bricolage+Grotesque:wght@400;500;600;700;800&display=swap');

//   *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
//   body { font-family:'Plus Jakarta Sans',sans-serif; }

//   @keyframes floatY {
//     0%,100% { transform:translateY(0px); }
//     50%      { transform:translateY(-12px); }
//   }
//   @keyframes blob1 {
//     0%,100% { transform:translate(0,0) scale(1); }
//     33%      { transform:translate(50px,-60px) scale(1.1); }
//     66%      { transform:translate(-30px,40px) scale(0.92); }
//   }
//   @keyframes blob2 {
//     0%,100% { transform:translate(0,0) scale(1); }
//     50%      { transform:translate(-60px,70px) scale(1.08); }
//   }
//   @keyframes blob3 {
//     0%,100% { transform:translate(0,0); }
//     40%      { transform:translate(40px,-40px); }
//     80%      { transform:translate(-20px,20px); }
//   }
//   @keyframes fadeUp {
//     from { opacity:0; transform:translateY(32px); }
//     to   { opacity:1; transform:translateY(0); }
//   }
//   @keyframes slideIn {
//     from { opacity:0; transform:translateX(-20px); }
//     to   { opacity:1; transform:translateX(0); }
//   }
//   @keyframes pulseGlow {
//     0%,100% { box-shadow:0 0 0 0 rgba(14,165,233,0.5); }
//     50%      { box-shadow:0 0 0 14px rgba(14,165,233,0); }
//   }
//   @keyframes gradMove {
//     0%   { background-position:0% 50%; }
//     50%  { background-position:100% 50%; }
//     100% { background-position:0% 50%; }
//   }
//   @keyframes floatCard {
//     0%,100% { transform:translateY(0) rotate(-1deg); }
//     50%      { transform:translateY(-10px) rotate(0.5deg); }
//   }
//   @keyframes floatCard2 {
//     0%,100% { transform:translateY(0) rotate(1deg); }
//     50%      { transform:translateY(-14px) rotate(-0.5deg); }
//   }

//   .fadeUp { animation:fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; }
//   .d1 { animation-delay:0.08s; }
//   .d2 { animation-delay:0.18s; }
//   .d3 { animation-delay:0.30s; }
//   .d4 { animation-delay:0.44s; }
//   .d5 { animation-delay:0.58s; }

//   .grad-text {
//     background: linear-gradient(135deg, #0ea5e9, #14b8a6, #0ea5e9);
//     background-size: 200% 200%;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     animation: gradMove 4s ease infinite;
//   }

//   .btn-primary {
//     display:inline-flex; align-items:center; gap:8px;
//     font-family:'Plus Jakarta Sans',sans-serif;
//     font-weight:700; font-size:15px;
//     text-decoration:none; padding:16px 36px; border-radius:14px;
//     background:linear-gradient(135deg,#0ea5e9,#14b8a6);
//     color:#fff; border:none; cursor:pointer;
//     box-shadow:0 8px 32px rgba(14,165,233,0.4);
//     transition:transform 0.25s, box-shadow 0.25s;
//   }
//   .btn-primary:hover { transform:translateY(-3px) scale(1.02); box-shadow:0 16px 48px rgba(14,165,233,0.5); }

//   .btn-secondary {
//     display:inline-flex; align-items:center; gap:8px;
//     font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:15px;
//     text-decoration:none; padding:15px 32px; border-radius:14px;
//     background:rgba(255,255,255,0.1); color:#fff;
//     border:1.5px solid rgba(255,255,255,0.25); backdrop-filter:blur(10px);
//     transition:background 0.25s, border-color 0.25s, transform 0.25s;
//   }
//   .btn-secondary:hover { background:rgba(255,255,255,0.18); border-color:rgba(255,255,255,0.5); transform:translateY(-3px); }

//   .nav-a { font-family:'Plus Jakarta Sans',sans-serif; font-weight:500; font-size:14px; color:rgba(255,255,255,0.7); text-decoration:none; transition:color 0.2s; }
//   .nav-a:hover { color:#fff; }
//   .nav-a-dark { font-family:'Plus Jakarta Sans',sans-serif; font-weight:500; font-size:14px; color:#334155; text-decoration:none; transition:color 0.2s; }
//   .nav-a-dark:hover { color:#0ea5e9; }

//   .feat-card {
//     background:#fff; border:1.5px solid #e2e8f0; border-radius:20px; padding:32px 26px;
//     transition:transform 0.3s, box-shadow 0.3s, border-color 0.3s;
//     cursor:default; position:relative; overflow:hidden;
//   }
//   .feat-card:hover { transform:translateY(-8px); box-shadow:0 20px 60px rgba(14,165,233,0.15); border-color:#bae6fd; }

//   .review-card {
//     background:#fff; border:1.5px solid #e2e8f0; border-radius:18px; padding:24px;
//     display:flex; flex-direction:column; gap:14px;
//     transition:transform 0.3s, box-shadow 0.3s, border-color 0.3s; cursor:default;
//   }
//   .review-card:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(14,165,233,0.12); border-color:#bae6fd; }

//   .stat-card { border-radius:20px; padding:36px 24px; text-align:center; transition:transform 0.3s; cursor:default; }
//   .stat-card:hover { transform:translateY(-6px); }

//   .price-card {
//     background:#fff; border:2px solid #e2e8f0; border-radius:24px; padding:36px 32px;
//     position:relative; overflow:hidden;
//     transition:transform 0.3s, box-shadow 0.3s, border-color 0.3s;
//     cursor:default;
//   }
//   .price-card:hover { transform:translateY(-8px); box-shadow:0 24px 64px rgba(14,165,233,0.15); }
//   .price-card.popular { border-color:#0ea5e9; box-shadow:0 12px 48px rgba(14,165,233,0.2); }

//   .fl { display:block; margin-bottom:10px; font-family:'Plus Jakarta Sans',sans-serif; font-size:14px; font-weight:400; color:#94a3b8; text-decoration:none; transition:color 0.2s; }
//   .fl:hover { color:#0ea5e9; }

//   .float-widget {
//     position:absolute; background:rgba(255,255,255,0.95);
//     backdrop-filter:blur(20px); border-radius:14px;
//     padding:12px 16px; box-shadow:0 8px 32px rgba(0,0,0,0.18);
//     border:1px solid rgba(255,255,255,0.6);
//     font-family:'Plus Jakarta Sans',sans-serif;
//     z-index:20; min-width:160px;
//   }

//   ::-webkit-scrollbar { width:5px; }
//   ::-webkit-scrollbar-track { background:#f1f5f9; }
//   ::-webkit-scrollbar-thumb { background:linear-gradient(#0ea5e9,#14b8a6); border-radius:10px; }
// `

// const SLIDES = [
//   { url:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80', label:'Analytics Dashboard', tag:'📊 Live Analytics' },
//   { url:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80', label:'Team Performance', tag:'👥 Team Overview' },
//   { url:'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80', label:'Task Management', tag:'✅ Task Tracker' },
//   { url:'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&q=80', label:'Reports & Insights', tag:'📈 Reports' },
//   { url:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80', label:'Employee Management', tag:'🏢 HR Module' },
// ]

// const REVIEWS = [
//   { initials:'AK', grad:'linear-gradient(135deg,#0ea5e9,#14b8a6)', rating:5, name:'Ali Khan', role:'HR Manager', company:'TechCorp International', text:'"EMS PRO completely transformed our HR operations. Everything managed in one place — saving hours every week."' },
//   { initials:'SA', grad:'linear-gradient(135deg,#f59e0b,#f97316)', rating:5, name:'Sara Ahmed', role:'Team Lead', company:'DigitalMinds Agency', text:'"Incredibly easy to use. Our team onboarded in two days. Productivity doubled and errors dropped significantly."' },
//   { initials:'UA', grad:'linear-gradient(135deg,#8b5cf6,#6366f1)', rating:5, name:'Usman Ali', role:'Senior Developer', company:'SoftNest Solutions', text:'"Best EMS platform I have worked with. Task tracking is powerful and API integration is absolutely seamless."' },
//   { initials:'AS', grad:'linear-gradient(135deg,#ec4899,#f43f5e)', rating:4, name:'Ayesha Siddiqui', role:'Project Manager', company:'RemoteFirst Inc', text:'"Managing distributed teams has never been easier. Real-time updates keep everyone aligned across time zones."' },
//   { initials:'BR', grad:'linear-gradient(135deg,#14b8a6,#0ea5e9)', rating:5, name:'Bilal Raza', role:'CEO', company:'StartupHub Group', text:'"The analytics dashboard alone was worth every penny. Tracking ROI now takes minutes instead of hours."' },
//   { initials:'FM', grad:'linear-gradient(135deg,#10b981,#14b8a6)', rating:5, name:'Fatima Malik', role:'Operations Director', company:'BizFlow Solutions', text:'"All meetings, assignments, and workload visibility in one platform. Team clarity improved overnight."' },
//   { initials:'HS', grad:'linear-gradient(135deg,#6366f1,#8b5cf6)', rating:4, name:'Hamza Sheikh', role:'IT Administrator', company:'CyberSafe Ltd', text:'"Role-based access control is rock solid. Full security and privacy without burdening the IT team."' },
//   { initials:'ZH', grad:'linear-gradient(135deg,#f97316,#f59e0b)', rating:5, name:'Zara Hussain', role:'Customer Success', company:'CloudBase Technologies', text:'"Support is incredibly responsive. Every issue resolved quickly and professionally. Outstanding service!"' },
//   { initials:'TM', grad:'linear-gradient(135deg,#ec4899,#8b5cf6)', rating:5, name:'Tariq Mehmood', role:'CTO', company:'Nexus Digital Group', text:'"All company data centralized, secure, and organized. Implementation was smooth with zero downtime."' },
//   { initials:'NQ', grad:'linear-gradient(135deg,#0ea5e9,#6366f1)', rating:4, name:'Nadia Qureshi', role:'Field Operations Lead', company:'OnGround Services', text:'"Mobile access is a game changer for field teams. Offline mode ensures connectivity is never a blocker."' },
// ]

// const FEATURES = [
//   { emoji:'📊', title:'Real-Time Task Tracking', badge:'Most Used', color:'#0ea5e9', bg:'#e0f2fe', desc:'Monitor every task live. Set priorities, manage deadlines, and instantly spot bottlenecks.' },
//   { emoji:'🔐', title:'Role-Based Access Control', badge:'Secure', color:'#14b8a6', bg:'#ccfbf1', desc:'Separate dashboards for Admins, Managers, and Employees. Full data security at every level.' },
//   { emoji:'📈', title:'Advanced Analytics', badge:'AI Powered', color:'#8b5cf6', bg:'#ede9fe', desc:'Team performance, attendance, and productivity insights in beautiful dashboards.' },
//   { emoji:'📱', title:'Mobile Ready', badge:'Cross Platform', color:'#f59e0b', bg:'#fef3c7', desc:'Seamless experience on iOS and Android. Keep field teams productive 24/7.' },
//   { emoji:'🔔', title:'Smart Notifications', badge:'Automated', color:'#ec4899', bg:'#fce7f3', desc:'Deadline reminders and approvals via Slack, Email, and SMS — all automated.' },
//   { emoji:'☁️', title:'Cloud Backup', badge:'Always On', color:'#10b981', bg:'#d1fae5', desc:'Data backed up every second. 99.99% uptime with enterprise-grade reliability.' },
// ]

// const PRICING = [
//   {
//     name:'Starter', price:'$9', period:'/mo', popular:false,
//     color:'#64748b', grad:'linear-gradient(135deg,#64748b,#94a3b8)',
//     desc:'Perfect for small teams just getting started.',
//     features:['Up to 10 employees','Basic task tracking','Email notifications','Mobile app access','5GB cloud storage','Email support'],
//     btn:'Get Started', btnStyle:'border'
//   },
//   {
//     name:'Professional', price:'$29', period:'/mo', popular:true,
//     color:'#0ea5e9', grad:'linear-gradient(135deg,#0ea5e9,#14b8a6)',
//     desc:'The most popular choice for growing teams.',
//     features:['Up to 50 employees','Advanced analytics','All notification channels','Role-based access control','50GB cloud storage','Priority support','API access','Custom reports'],
//     btn:'Start Free Trial', btnStyle:'primary'
//   },
//   {
//     name:'Enterprise', price:'$79', period:'/mo', popular:false,
//     color:'#8b5cf6', grad:'linear-gradient(135deg,#8b5cf6,#6366f1)',
//     desc:'Full power for large organizations.',
//     features:['Unlimited employees','AI-powered insights','Dedicated account manager','SSO & advanced security','Unlimited storage','24/7 phone support','Custom integrations','White-label option','SLA guarantee'],
//     btn:'Contact Sales', btnStyle:'border'
//   },
// ]

// const ReviewCard = ({ r }) => (
//   <div className="review-card">
//     <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//       <div style={{ width:44, height:44, borderRadius:'50%', background:r.grad, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:13, flexShrink:0, boxShadow:'0 4px 14px rgba(0,0,0,0.15)' }}>{r.initials}</div>
//       <div style={{ display:'flex', gap:2 }}>
//         {[...Array(5)].map((_,i)=>(<span key={i} style={{ color:i<r.rating?'#f59e0b':'#e2e8f0', fontSize:13 }}>★</span>))}
//       </div>
//     </div>
//     <p style={{ color:'#475569', fontSize:13, lineHeight:1.85, fontFamily:"'Plus Jakarta Sans',sans-serif", fontStyle:'italic', margin:0, flexGrow:1 }}>{r.text}</p>
//     <div style={{ borderTop:'1.5px solid #f1f5f9', paddingTop:12 }}>
//       <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:14, color:'#0f172a' }}>{r.name}</div>
//       <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:600, color:'#0ea5e9', marginTop:2, textTransform:'uppercase', letterSpacing:0.8 }}>{r.role}</div>
//       <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, color:'#94a3b8', marginTop:1 }}>{r.company}</div>
//     </div>
//   </div>
// )

// export default function HomePage() {
//   const [scrolled, setScrolled] = useState(false)
//   const [current, setCurrent]   = useState(0)
//   const [progress, setProgress] = useState(0)
//   const [billing, setBilling]   = useState('monthly')
//   const intervalRef             = useRef(null)
//   const progressRef             = useRef(null)
//   const DURATION                = 4000

//   useEffect(()=>{
//     const fn=()=>setScrolled(window.scrollY>60)
//     window.addEventListener('scroll',fn)
//     return ()=>window.removeEventListener('scroll',fn)
//   },[])

//   useEffect(()=>{
//     setProgress(0)
//     clearInterval(intervalRef.current)
//     clearInterval(progressRef.current)
//     intervalRef.current = setInterval(()=>{ setCurrent(c=>(c+1)%SLIDES.length) }, DURATION)
//     let p=0
//     progressRef.current = setInterval(()=>{ p+=100/(DURATION/50); setProgress(Math.min(p,100)) }, 50)
//     return ()=>{ clearInterval(intervalRef.current); clearInterval(progressRef.current) }
//   },[current])

//   const getPrice = (base) => {
//     if(billing==='yearly') {
//       const num = parseInt(base.replace('$',''))
//       return '$'+ Math.round(num*0.8)
//     }
//     return base
//   }

//   return (
//     <>
//       <style>{STYLES}</style>

//       {/* ══ NAVBAR ══ */}
//       <nav style={{
//         position:'fixed', top:0, width:'100%', zIndex:200,
//         padding:'0 32px', height:70, boxSizing:'border-box',
//         display:'flex', alignItems:'center', transition:'all 0.35s',
//         background: scrolled?'rgba(255,255,255,0.95)':'transparent',
//         backdropFilter: scrolled?'blur(24px)':'none',
//         boxShadow: scrolled?'0 1px 40px rgba(14,165,233,0.1)':'none',
//         borderBottom: scrolled?'1px solid rgba(14,165,233,0.1)':'none',
//       }}>
//         <div style={{ maxWidth:1200, width:'100%', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//           <div style={{ display:'flex', alignItems:'center', gap:10 }}>
//             <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, boxShadow:'0 4px 14px rgba(14,165,233,0.4)' }}>⚡</div>
//             <span style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:22, fontWeight:800, color:scrolled?'#0f172a':'#fff', transition:'color 0.35s', letterSpacing:-0.5 }}>
//               EMS <span style={{ color:'#0ea5e9' }}>PRO</span>
//             </span>
//           </div>
//           <div style={{ display:'flex', gap:32, alignItems:'center' }}>
//             {['Features','Stats','Pricing','Reviews'].map(s=>(
//               <a key={s} href={`#${s.toLowerCase()}`} className={scrolled?'nav-a-dark':'nav-a'}>{s}</a>
//             ))}
//             <Link to="/login" className="btn-primary" style={{ padding:'10px 24px', fontSize:13 }}>Sign In →</Link>
//           </div>
//         </div>
//       </nav>

//       {/* ══ HERO ══ */}
//       <section style={{
//         minHeight:'100vh', position:'relative', overflow:'hidden',
//         display:'flex', alignItems:'center',
//         padding:'100px 48px 80px',
//         background:'linear-gradient(145deg,#0c1445 0%,#0a2a4a 30%,#0d3b4f 60%,#0f2d3d 100%)',
//       }}>
//         <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}>
//           <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.2) 0%,transparent 65%)', top:'-200px', left:'-150px', animation:'blob1 14s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(20,184,166,0.18) 0%,transparent 65%)', bottom:'-150px', right:'-100px', animation:'blob2 17s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 65%)', top:'30%', left:'40%', animation:'blob3 11s ease-in-out infinite' }}/>
//         </div>
//         <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none', backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'50px 50px' }}/>

//         {/* Orbs */}
//         <div style={{ position:'absolute', zIndex:2, pointerEvents:'none', inset:0 }}>
//           {[
//             { size:14, color:'#38bdf8', top:'20%', left:'12%',  delay:'0s',   dur:'4s' },
//             { size:10, color:'#2dd4bf', top:'60%', left:'8%',   delay:'1s',   dur:'5s' },
//             { size:18, color:'#0ea5e9', top:'35%', right:'10%', delay:'0.5s', dur:'6s' },
//             { size:12, color:'#14b8a6', top:'75%', right:'18%', delay:'2s',   dur:'4.5s' },
//           ].map((o,i)=>(
//             <div key={i} style={{ position:'absolute', width:o.size, height:o.size, borderRadius:'50%', background:o.color, top:o.top, left:o.left, right:o.right, opacity:0.7, animation:`floatY ${o.dur} ${o.delay} ease-in-out infinite`, boxShadow:`0 0 ${o.size*2}px ${o.color}` }}/>
//           ))}
//         </div>

//         {/* Left */}
//         <div style={{ position:'relative', zIndex:10, flex:'1', maxWidth:520, paddingRight:40 }}>
//           <div className="fadeUp d1" style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:28, background:'rgba(255,255,255,0.1)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.18)', color:'#fff', padding:'8px 20px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, fontWeight:600 }}>
//             <span style={{ width:8, height:8, borderRadius:'50%', background:'#38bdf8', display:'inline-block', animation:'pulseGlow 2s ease-in-out infinite' }}/>
//             🚀 World's Smartest EMS Platform
//           </div>
//           <h1 className="fadeUp d2" style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:'clamp(38px,4.5vw,62px)', fontWeight:800, lineHeight:1.08, color:'#fff', margin:'0 0 14px', letterSpacing:-1.5 }}>Manage Your Team</h1>
//           <h1 className="fadeUp d2" style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:'clamp(38px,4.5vw,62px)', fontWeight:800, lineHeight:1.08, margin:'0 0 24px', letterSpacing:-1.5 }}>
//             <span className="grad-text">Like Never Before</span>
//           </h1>
//           <div className="fadeUp d3" style={{ width:70, height:3, borderRadius:2, background:'linear-gradient(90deg,#0ea5e9,#14b8a6)', marginBottom:24, boxShadow:'0 0 14px rgba(14,165,233,0.5)' }}/>
//           <p className="fadeUp d3" style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:400, color:'rgba(255,255,255,0.6)', fontSize:17, marginBottom:40, lineHeight:1.85 }}>
//             A smart, secure, and scalable Employee Management System built for modern high-performing teams across the globe.
//           </p>
//           <div className="fadeUp d4" style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:44 }}>
//             <Link to="/login" className="btn-primary">Get Started Free →</Link>
//             <a href="#pricing" className="btn-secondary">View Pricing</a>
//           </div>
//           <div className="fadeUp d5" style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
//             {[{icon:'✅',text:'No credit card'},{icon:'⚡',text:'5 min setup'},{icon:'🔒',text:'Enterprise security'}].map(t=>(
//               <div key={t.text} style={{ display:'flex', alignItems:'center', gap:6, background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:50, padding:'6px 14px', fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:'rgba(255,255,255,0.65)', fontWeight:500 }}>
//                 <span>{t.icon}</span> {t.text}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right — Slideshow */}
//         <div className="fadeUp d3" style={{ position:'relative', zIndex:10, flex:'1', maxWidth:600 }}>
//           <div style={{ position:'relative', width:'100%', aspectRatio:'16/10', borderRadius:20, overflow:'hidden', boxShadow:'0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)', animation:'floatCard 6s ease-in-out infinite' }}>
//             {SLIDES.map((s,i)=>(
//               <div key={i} style={{ position:'absolute', inset:0, opacity:i===current?1:0, transition:'opacity 0.9s ease', zIndex:i===current?2:1 }}>
//                 <img src={s.url} alt={s.label} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
//                 <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(10,20,50,0.6) 0%,transparent 60%)' }}/>
//               </div>
//             ))}
//             <div style={{ position:'absolute', top:0, left:0, right:0, height:36, background:'rgba(15,23,42,0.85)', backdropFilter:'blur(10px)', display:'flex', alignItems:'center', padding:'0 14px', gap:8, zIndex:10, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
//               <div style={{ display:'flex', gap:6 }}>
//                 {['#ff5f57','#febc2e','#28c840'].map((c,i)=>(<div key={i} style={{ width:10, height:10, borderRadius:'50%', background:c }}/>))}
//               </div>
//               <div style={{ flex:1, height:20, borderRadius:6, background:'rgba(255,255,255,0.08)', display:'flex', alignItems:'center', padding:'0 10px', fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:10, color:'rgba(255,255,255,0.4)' }}>
//                 🔒 app.emspro.io/dashboard
//               </div>
//             </div>
//             <div style={{ position:'absolute', bottom:14, left:14, zIndex:10, background:'rgba(14,165,233,0.85)', backdropFilter:'blur(10px)', borderRadius:8, padding:'5px 12px', fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, color:'#fff', letterSpacing:0.5 }}>
//               {SLIDES[current].tag}
//             </div>
//             <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'rgba(255,255,255,0.15)', zIndex:10 }}>
//               <div style={{ height:'100%', background:'linear-gradient(90deg,#0ea5e9,#14b8a6)', width:`${progress}%`, transition:'width 0.05s linear', boxShadow:'0 0 8px rgba(14,165,233,0.7)' }}/>
//             </div>
//           </div>

//           {/* Dots */}
//           <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:16 }}>
//             {SLIDES.map((_,i)=>(
//               <div key={i} onClick={()=>setCurrent(i)} style={{ width:i===current?24:8, height:8, borderRadius:4, cursor:'pointer', background:i===current?'linear-gradient(90deg,#0ea5e9,#14b8a6)':'rgba(255,255,255,0.25)', transition:'all 0.35s', boxShadow:i===current?'0 0 10px rgba(14,165,233,0.6)':'none' }}/>
//             ))}
//           </div>

//           {/* Floating widgets */}
//           <div className="float-widget" style={{ top:-18, left:-28, animation:'floatCard2 5s ease-in-out infinite' }}>
//             <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
//               <div style={{ width:28, height:28, borderRadius:8, background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14 }}>📊</div>
//               <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:13, color:'#0f172a' }}>Tasks Done</span>
//             </div>
//             <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:28, fontWeight:800, color:'#0ea5e9', lineHeight:1 }}>10,482</div>
//             <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, color:'#10b981', marginTop:3, fontWeight:600 }}>↑ 12% this week</div>
//           </div>

//           <div className="float-widget" style={{ bottom:-16, right:-24, animation:'floatCard 7s 1s ease-in-out infinite' }}>
//             <div style={{ display:'flex', alignItems:'center', gap:8 }}>
//               {['#0ea5e9','#14b8a6','#8b5cf6','#f59e0b'].map((c,i)=>(
//                 <div key={i} style={{ width:28, height:28, borderRadius:'50%', background:c, border:'2px solid #fff', marginLeft:i?-10:0, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:11, fontWeight:700 }}>
//                   {['A','S','U','F'][i]}
//                 </div>
//               ))}
//               <div style={{ marginLeft:4 }}>
//                 <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:12, color:'#0f172a' }}>Active Team</div>
//                 <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, color:'#64748b' }}>24 online now</div>
//               </div>
//             </div>
//           </div>

//           <div className="float-widget" style={{ top:60, right:-32, minWidth:180, animation:'floatCard2 4s 0.5s ease-in-out infinite' }}>
//             <div style={{ display:'flex', alignItems:'center', gap:8 }}>
//               <div style={{ width:10, height:10, borderRadius:'50%', background:'#10b981', flexShrink:0, animation:'pulseGlow 2s ease-in-out infinite' }}/>
//               <div>
//                 <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:12, color:'#0f172a' }}>Task Completed ✅</div>
//                 <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, color:'#64748b' }}>Q4 Report — just now</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Wave */}
//         <div style={{ position:'absolute', bottom:0, left:0, right:0, zIndex:5, overflow:'hidden', lineHeight:0 }}>
//           <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width:'100%', height:80 }}>
//             <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc"/>
//           </svg>
//         </div>
//       </section>

//       {/* ══ TRUST BAR ══ */}
//       <section style={{ padding:'36px 24px', background:'#f8fafc', borderBottom:'1px solid #e2e8f0' }}>
//         <div style={{ maxWidth:1000, margin:'0 auto', textAlign:'center' }}>
//           <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:'#94a3b8', letterSpacing:2, textTransform:'uppercase', fontWeight:600, marginBottom:24 }}>Trusted by 500+ teams worldwide</p>
//           <div style={{ display:'flex', justifyContent:'center', gap:40, flexWrap:'wrap', alignItems:'center' }}>
//             {['TechCorp','DigitalMinds','SoftNest','RemoteFirst','BizFlow','CyberSafe'].map(b=>(
//               <span key={b} style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:17, fontWeight:700, color:'#cbd5e1', letterSpacing:-0.5 }}>{b}</span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ STATS ══ */}
//       <section id="stats" style={{ padding:'90px 24px', background:'linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#ccfbf1 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ maxWidth:1000, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:56 }}>
//             <span style={{ display:'inline-block', background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', color:'#fff', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>📊 By The Numbers</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:40, fontWeight:800, color:'#0f172a', margin:'0 0 12px', letterSpacing:-1 }}>Numbers That <span className="grad-text">Speak</span></h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16 }}>Trusted by teams in over 15 countries worldwide</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
//             {[
//               { val:'10k+', label:'Tasks Completed', emoji:'✅', grad:'linear-gradient(135deg,#0ea5e9,#38bdf8)', shadow:'rgba(14,165,233,0.25)' },
//               { val:'500+', label:'Global Teams',    emoji:'🌐', grad:'linear-gradient(135deg,#14b8a6,#2dd4bf)', shadow:'rgba(20,184,166,0.25)' },
//               { val:'15+',  label:'Countries',       emoji:'🌍', grad:'linear-gradient(135deg,#8b5cf6,#a78bfa)', shadow:'rgba(139,92,246,0.25)' },
//               { val:'99.9%',label:'Uptime',          emoji:'⚡', grad:'linear-gradient(135deg,#f59e0b,#fbbf24)', shadow:'rgba(245,158,11,0.25)' },
//             ].map((s,i)=>(
//               <div key={i} className="stat-card" style={{ background:s.grad, boxShadow:`0 12px 40px ${s.shadow}` }}>
//                 <div style={{ fontSize:30, marginBottom:12, animation:`floatY 4s ${i*0.4}s ease-in-out infinite` }}>{s.emoji}</div>
//                 <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:40, fontWeight:800, color:'#fff', marginBottom:6, lineHeight:1 }}>{s.val}</div>
//                 <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:'rgba(255,255,255,0.8)', fontWeight:500 }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ FEATURES ══ */}
//       <section id="features" style={{ padding:'90px 24px', background:'#fff' }}>
//         <div style={{ maxWidth:1100, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:56 }}>
//             <span style={{ display:'inline-block', background:'#e0f2fe', color:'#0369a1', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>✦ Features</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:40, fontWeight:800, color:'#0f172a', margin:'0 0 12px', letterSpacing:-1 }}>Everything in <span className="grad-text">One Place</span></h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16, maxWidth:460, margin:'0 auto', lineHeight:1.75 }}>Every feature your team needs — beautifully designed and built right into EMS PRO.</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:22 }}>
//             {FEATURES.map((f,i)=>(
//               <div key={i} className="feat-card">
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${f.color},${f.color}55)`, borderRadius:'20px 20px 0 0' }}/>
//                 <div style={{ width:60, height:60, borderRadius:16, background:f.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, marginBottom:18 }}>{f.emoji}</div>
//                 <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
//                   <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:17, fontWeight:700, color:'#0f172a', lineHeight:1.3, maxWidth:180 }}>{f.title}</h3>
//                   <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:'uppercase', background:f.bg, color:f.color, padding:'4px 10px', borderRadius:6, flexShrink:0, marginLeft:8 }}>{f.badge}</span>
//                 </div>
//                 <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:14, lineHeight:1.8, margin:0 }}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ PRICING ══ */}
//       <section id="pricing" style={{ padding:'100px 24px', background:'linear-gradient(180deg,#f8fafc 0%,#f0f9ff 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', top:-100, right:-100, width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.07) 0%,transparent 65%)', pointerEvents:'none' }}/>
//         <div style={{ position:'absolute', bottom:-100, left:-100, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(20,184,166,0.07) 0%,transparent 65%)', pointerEvents:'none' }}/>

//         <div style={{ maxWidth:1100, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:52 }}>
//             <span style={{ display:'inline-block', background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', color:'#fff', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>💰 Pricing</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:40, fontWeight:800, color:'#0f172a', margin:'0 0 12px', letterSpacing:-1 }}>
//               Simple, <span className="grad-text">Transparent Pricing</span>
//             </h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16, margin:'0 0 32px' }}>
//               No hidden fees. No surprises. Cancel anytime.
//             </p>

//             {/* Billing toggle */}
//             <div style={{ display:'inline-flex', alignItems:'center', gap:0, background:'#e2e8f0', borderRadius:50, padding:4 }}>
//               {['monthly','yearly'].map(b=>(
//                 <button key={b} onClick={()=>setBilling(b)} style={{
//                   padding:'8px 24px', borderRadius:50, border:'none', cursor:'pointer',
//                   fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, fontWeight:600,
//                   background: billing===b ? 'linear-gradient(135deg,#0ea5e9,#14b8a6)' : 'transparent',
//                   color: billing===b ? '#fff' : '#64748b',
//                   transition:'all 0.25s',
//                   boxShadow: billing===b ? '0 4px 14px rgba(14,165,233,0.35)' : 'none'
//                 }}>
//                   {b==='monthly' ? 'Monthly' : 'Yearly'} {b==='yearly' && <span style={{ background:'rgba(255,255,255,0.25)', padding:'1px 7px', borderRadius:50, fontSize:10, marginLeft:4 }}>-20%</span>}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Pricing cards */}
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
//             {PRICING.map((p,i)=>(
//               <div key={i} className={`price-card${p.popular?' popular':''}`} style={{ marginTop: p.popular ? 0 : 20 }}>

//                 {/* Popular badge */}
//                 {p.popular && (
//                   <div style={{ position:'absolute', top:-1, left:'50%', transform:'translateX(-50%)', background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', color:'#fff', padding:'6px 20px', borderRadius:'0 0 14px 14px', fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1, textTransform:'uppercase', whiteSpace:'nowrap', boxShadow:'0 4px 14px rgba(14,165,233,0.4)' }}>
//                     ⭐ Most Popular
//                   </div>
//                 )}

//                 {/* Top gradient line */}
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:p.grad, borderRadius:'24px 24px 0 0' }}/>

//                 <div style={{ paddingTop: p.popular ? 28 : 8 }}>
//                   {/* Plan name */}
//                   <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
//                     <div style={{ width:40, height:40, borderRadius:10, background:p.grad, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, boxShadow:`0 4px 14px ${p.color}33` }}>
//                       {i===0?'🌱':i===1?'⚡':'🏢'}
//                     </div>
//                     <div>
//                       <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:18, fontWeight:800, color:'#0f172a', letterSpacing:-0.5 }}>{p.name}</div>
//                     </div>
//                   </div>

//                   <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:13, lineHeight:1.7, marginBottom:20 }}>{p.desc}</p>

//                   {/* Price */}
//                   <div style={{ display:'flex', alignItems:'baseline', gap:4, marginBottom:6 }}>
//                     <span style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:52, fontWeight:800, color: p.popular ? '#0ea5e9' : '#0f172a', letterSpacing:-2, lineHeight:1 }}>{getPrice(p.price)}</span>
//                     <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#94a3b8', fontSize:15 }}>{p.period}</span>
//                   </div>
//                   {billing==='yearly' && (
//                     <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:'#10b981', fontWeight:600, marginBottom:20 }}>
//                       💰 Save ${Math.round(parseInt(p.price.replace('$',''))*12*0.2)}/year
//                     </div>
//                   )}
//                   {billing==='monthly' && <div style={{ marginBottom:20 }}/>}

//                   {/* CTA Button */}
//                   <Link to="/login" style={{
//                     display:'block', textAlign:'center', padding:'14px', borderRadius:12,
//                     fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:14,
//                     textDecoration:'none', marginBottom:24, transition:'transform 0.2s, box-shadow 0.2s',
//                     ...(p.btnStyle==='primary' ? {
//                       background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', color:'#fff',
//                       boxShadow:'0 8px 28px rgba(14,165,233,0.35)'
//                     } : {
//                       background:'transparent', color:p.color,
//                       border:`2px solid ${p.color}33`
//                     })
//                   }}
//                   onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; if(p.btnStyle==='primary') e.currentTarget.style.boxShadow='0 12px 36px rgba(14,165,233,0.45)' }}
//                   onMouseLeave={e=>{ e.currentTarget.style.transform='none'; if(p.btnStyle==='primary') e.currentTarget.style.boxShadow='0 8px 28px rgba(14,165,233,0.35)' }}>
//                     {p.btn} →
//                   </Link>

//                   {/* Divider */}
//                   <div style={{ height:1, background:'#f1f5f9', marginBottom:20 }}/>

//                   {/* Features list */}
//                   <div>
//                     {p.features.map((f,j)=>(
//                       <div key={j} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
//                         <div style={{ width:20, height:20, borderRadius:'50%', background: p.popular ? 'linear-gradient(135deg,#0ea5e9,#14b8a6)' : `${p.color}18`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
//                           <span style={{ color: p.popular ? '#fff' : p.color, fontSize:10, fontWeight:800 }}>✓</span>
//                         </div>
//                         <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:'#475569' }}>{f}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom note */}
//           <div style={{ textAlign:'center', marginTop:44 }}>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#94a3b8', fontSize:14 }}>
//               All plans include a <strong style={{ color:'#0ea5e9' }}>14-day free trial</strong>. No credit card required. Cancel anytime.
//             </p>
//             <div style={{ display:'flex', justifyContent:'center', gap:32, marginTop:20, flexWrap:'wrap' }}>
//               {['🔒 256-bit SSL encryption','💳 No hidden fees','🔄 Cancel anytime','📞 24/7 Support'].map(t=>(
//                 <span key={t} style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:'#64748b' }}>{t}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══ HOW IT WORKS ══ */}
//       <section style={{ padding:'90px 24px', background:'linear-gradient(145deg,#0c1445 0%,#0a2a4a 40%,#0d3b4f 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.15) 0%,transparent 65%)', top:'-150px', right:'-150px', animation:'blob1 15s ease-in-out infinite' }}/>
//           <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(20,184,166,0.12) 0%,transparent 65%)', bottom:'-100px', left:'-100px', animation:'blob2 12s ease-in-out infinite' }}/>
//         </div>
//         <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:2 }}>
//           <div style={{ textAlign:'center', marginBottom:56 }}>
//             <span style={{ display:'inline-block', background:'rgba(14,165,233,0.15)', border:'1px solid rgba(14,165,233,0.3)', color:'#38bdf8', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>🎯 How It Works</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:40, fontWeight:800, color:'#fff', margin:'0 0 12px', letterSpacing:-1 }}>Up & Running in <span className="grad-text">3 Steps</span></h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.55)', fontSize:16 }}>No complicated setup. Just sign up and start managing.</p>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
//             {[
//               { step:'01', emoji:'🎯', title:'Sign Up',        color:'#38bdf8', desc:'Create your account in under 2 minutes. No credit card needed.' },
//               { step:'02', emoji:'👥', title:'Add Your Team',  color:'#2dd4bf', desc:'Invite employees, assign roles, and set up departments instantly.' },
//               { step:'03', emoji:'🚀', title:'Start Managing', color:'#a78bfa', desc:'Track tasks, view analytics, and boost productivity from day one.' },
//             ].map((s,i)=>(
//               <div key={i} style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', backdropFilter:'blur(12px)', borderRadius:24, padding:'40px 32px', textAlign:'center', position:'relative', overflow:'hidden', transition:'transform 0.3s, border-color 0.3s' }}
//               onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.borderColor=`${s.color}55` }}
//               onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)' }}>
//                 <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,transparent,${s.color},transparent)` }}/>
//                 <div style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:52, fontWeight:800, color:`${s.color}20`, lineHeight:1, marginBottom:14 }}>{s.step}</div>
//                 <div style={{ width:66, height:66, borderRadius:18, background:`${s.color}15`, border:`1.5px solid ${s.color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, margin:'0 auto 18px', animation:`floatY 4s ${i*0.5}s ease-in-out infinite` }}>{s.emoji}</div>
//                 <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:21, fontWeight:700, color:'#fff', marginBottom:10 }}>{s.title}</h3>
//                 <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.5)', fontSize:14, lineHeight:1.85, margin:0 }}>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ REVIEWS ══ */}
//       <section id="reviews" style={{ padding:'90px 24px', background:'linear-gradient(180deg,#f8fafc 0%,#f0f9ff 100%)' }}>
//         <div style={{ maxWidth:1260, margin:'0 auto' }}>
//           <div style={{ textAlign:'center', marginBottom:52 }}>
//             <span style={{ display:'inline-block', background:'#fce7f3', color:'#be185d', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', marginBottom:16 }}>★ Testimonials</span>
//             <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:40, fontWeight:800, color:'#0f172a', margin:'0 0 12px', letterSpacing:-1 }}>Trusted by Teams <span className="grad-text">Worldwide</span></h2>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#64748b', fontSize:16, margin:'0 0 20px' }}>Over 10,000 satisfied users — here are their real stories</p>
//             <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'linear-gradient(135deg,#fef9c3,#fde68a)', border:'1px solid #f59e0b', color:'#92400e', padding:'8px 24px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, fontWeight:700 }}>
//               ⭐ 4.9 / 5 Average Rating — 10,000+ Reviews
//             </div>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14, marginBottom:14 }}>
//             {REVIEWS.slice(0,5).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14 }}>
//             {REVIEWS.slice(5,10).map((r,i)=><ReviewCard key={i} r={r}/>)}
//           </div>
//         </div>
//       </section>

//       {/* ══ CTA ══ */}
//       <section style={{ padding:'100px 24px', background:'linear-gradient(145deg,#0c1445 0%,#0a2a4a 40%,#0d3b4f 100%)', position:'relative', overflow:'hidden', textAlign:'center' }}>
//         <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
//           <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 65%)', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }}/>
//         </div>
//         <div style={{ position:'relative', zIndex:2, maxWidth:680, margin:'0 auto' }}>
//           <div style={{ fontSize:52, marginBottom:18, animation:'floatY 3s ease-in-out infinite' }}>🚀</div>
//           <span style={{ display:'inline-block', marginBottom:18, background:'rgba(14,165,233,0.15)', border:'1px solid rgba(14,165,233,0.3)', color:'#38bdf8', padding:'6px 18px', borderRadius:50, fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase' }}>Get Started Today</span>
//           <h2 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:48, fontWeight:800, color:'#fff', margin:'0 0 18px', lineHeight:1.1, letterSpacing:-1.5 }}>
//             Ready to Transform<br/><span className="grad-text">Your Team Management?</span>
//           </h2>
//           <div style={{ width:80, height:3, background:'linear-gradient(90deg,#0ea5e9,#14b8a6)', borderRadius:2, margin:'0 auto 26px', boxShadow:'0 0 16px rgba(14,165,233,0.5)' }}/>
//           <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.5)', fontSize:17, margin:'0 auto 44px', lineHeight:1.85, maxWidth:480 }}>
//             Join over 500 teams worldwide already using EMS PRO to work smarter, faster, and better.
//           </p>
//           <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
//             <Link to="/login" className="btn-primary" style={{ fontSize:16, padding:'18px 48px' }}>Start for Free Today →</Link>
//             <a href="#pricing" className="btn-secondary" style={{ fontSize:16, padding:'18px 40px' }}>View Pricing</a>
//           </div>
//           <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'rgba(255,255,255,0.3)', fontSize:12, marginTop:18 }}>No credit card required · Cancel anytime · Setup in 5 minutes</p>
//         </div>
//       </section>

//       {/* ══ FOOTER ══ */}
//       <footer style={{ background:'#0a0f1e', borderTop:'1px solid rgba(14,165,233,0.1)', padding:'72px 24px 0' }}>
//         <div style={{ maxWidth:1200, margin:'0 auto' }}>
//           <div style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:48, marginBottom:52 }}>
//             <div>
//               <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
//                 <div style={{ width:34, height:34, borderRadius:9, background:'linear-gradient(135deg,#0ea5e9,#14b8a6)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>⚡</div>
//                 <span style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontSize:20, fontWeight:800, color:'#fff', letterSpacing:-0.5 }}>EMS <span style={{ color:'#0ea5e9' }}>PRO</span></span>
//               </div>
//               <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#475569', fontSize:14, lineHeight:1.85, marginBottom:22, maxWidth:280 }}>A world-class Employee Management System built for modern, high-performing teams across the globe.</p>
//               <div style={{ display:'flex', gap:10, marginBottom:22 }}>
//                 {[{icon:'in',bg:'#0077b5'},{icon:'𝕏',bg:'#1a1a2e'},{icon:'f',bg:'#1877f2'},{icon:'▶',bg:'#ff0000'}].map((s,i)=>(
//                   <div key={i} style={{ width:36, height:36, borderRadius:9, background:s.bg, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:13, cursor:'pointer', transition:'transform 0.2s, opacity 0.2s', opacity:0.75 }}
//                     onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.opacity='1' }}
//                     onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.opacity='0.75' }}>
//                     {s.icon}
//                   </div>
//                 ))}
//               </div>
//               <div style={{ display:'flex', gap:10 }}>
//                 {['App Store','Google Play'].map(b=>(
//                   <div key={b} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(14,165,233,0.15)', borderRadius:9, padding:'8px 14px', cursor:'pointer', transition:'border-color 0.3s' }}
//                     onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(14,165,233,0.4)'}
//                     onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(14,165,233,0.15)'}>
//                     <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#475569', fontSize:9, marginBottom:2 }}>Download on the</div>
//                     <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#fff', fontSize:13, fontWeight:600 }}>{b}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {[
//               { heading:'Product', links:['Features','Pricing','Integrations','Changelog','Roadmap'] },
//               { heading:'Company', links:['About Us','Blog','Careers','Press Kit','Contact'] },
//               { heading:'Support', links:['Help Center','Documentation','API Docs','Status Page','Privacy Policy'] },
//             ].map(col=>(
//               <div key={col.heading}>
//                 <h4 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", color:'#fff', fontWeight:700, fontSize:15, margin:'0 0 16px', letterSpacing:-0.3 }}>{col.heading}</h4>
//                 {col.links.map(l=><a key={l} href="#" className="fl">{l}</a>)}
//               </div>
//             ))}
//           </div>

//           <div style={{ background:'linear-gradient(135deg,rgba(14,165,233,0.1),rgba(20,184,166,0.1))', border:'1px solid rgba(14,165,233,0.2)', borderRadius:16, padding:'30px 36px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:44, flexWrap:'wrap', gap:20 }}>
//             <div>
//               <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", color:'#fff', fontWeight:700, fontSize:19, margin:'0 0 5px', letterSpacing:-0.5 }}>📬 Stay in the Loop</h3>
//               <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#475569', fontSize:14, margin:0 }}>Weekly HR tips, product updates, and exclusive offers.</p>
//             </div>
//             <div style={{ display:'flex', gap:10 }}>
//               <input type="email" placeholder="your@email.com" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(14,165,233,0.2)', color:'#fff', padding:'12px 18px', borderRadius:10, fontSize:14, outline:'none', width:210, fontFamily:"'Plus Jakarta Sans',sans-serif" }}
//                 onFocus={e=>e.target.style.borderColor='rgba(14,165,233,0.5)'}
//                 onBlur={e=>e.target.style.borderColor='rgba(14,165,233,0.2)'}
//               />
//               <button className="btn-primary" style={{ padding:'12px 20px', fontSize:13 }}>Subscribe</button>
//             </div>
//           </div>

//           <div style={{ display:'flex', justifyContent:'center', gap:16, marginBottom:36, flexWrap:'wrap' }}>
//             {[{icon:'🏆',text:'Product of the Year 2025'},{icon:'🔒',text:'SOC 2 Certified'},{icon:'⭐',text:'G2 Leader 2025'},{icon:'🌍',text:'GDPR Compliant'}].map((b,i)=>(
//               <div key={i} style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(14,165,233,0.1)', borderRadius:8, padding:'8px 14px' }}>
//                 <span style={{ fontSize:15 }}>{b.icon}</span>
//                 <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, color:'#475569', fontWeight:500 }}>{b.text}</span>
//               </div>
//             ))}
//           </div>

//           <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:20, paddingBottom:28, borderTop:'1px solid rgba(255,255,255,0.05)', flexWrap:'wrap', gap:12 }}>
//             <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#334155', fontSize:13, margin:0 }}>© 2026 EMS PRO. All Rights Reserved. Built for the world. 🌍</p>
//             <div style={{ display:'flex', gap:20 }}>
//               {['Terms','Privacy','Cookies','Sitemap'].map(l=>(
//                 <a key={l} href="#" style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", color:'#334155', textDecoration:'none', fontSize:12, transition:'color 0.2s' }}
//                   onMouseEnter={e=>e.target.style.color='#0ea5e9'}
//                   onMouseLeave={e=>e.target.style.color='#334155'}>{l}</a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   )
// }


import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Bricolage+Grotesque:wght@400;500;600;700;800&display=swap');

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { font-family:'Plus Jakarta Sans',sans-serif; transition:background 0.4s,color 0.4s; overflow-x:hidden; }
  body.dark  { background:#0f172a; color:#e2e8f0; }
  body.light { background:#ffffff; color:#0f172a; }

  @keyframes floatY {
    0%,100% { transform:translateY(0px); }
    50%      { transform:translateY(-10px); }
  }
  @keyframes blob1 {
    0%,100% { transform:translate(0,0) scale(1); }
    33%      { transform:translate(50px,-60px) scale(1.1); }
    66%      { transform:translate(-30px,40px) scale(0.92); }
  }
  @keyframes blob2 {
    0%,100% { transform:translate(0,0) scale(1); }
    50%      { transform:translate(-60px,70px) scale(1.08); }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes pulseGlow {
    0%,100% { box-shadow:0 0 0 0 rgba(14,165,233,0.5); }
    50%      { box-shadow:0 0 0 12px rgba(14,165,233,0); }
  }
  @keyframes gradMove {
    0%   { background-position:0% 50%; }
    50%  { background-position:100% 50%; }
    100% { background-position:0% 50%; }
  }
  @keyframes bounce {
    0%,100% { transform:translateY(0); }
    50%      { transform:translateY(-8px); }
  }
  @keyframes scaleIn {
    from { opacity:0; transform:scale(0.8); }
    to   { opacity:1; transform:scale(1); }
  }

  .fadeUp { animation:fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; }
  .d1{animation-delay:0.08s} .d2{animation-delay:0.18s}
  .d3{animation-delay:0.30s} .d4{animation-delay:0.44s} .d5{animation-delay:0.58s}

  .grad-text {
    background:linear-gradient(135deg,#0ea5e9,#14b8a6,#0ea5e9);
    background-size:200% 200%;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    animation:gradMove 4s ease infinite;
  }

  /* ── Buttons ── */
  .btn-primary {
    display:inline-flex; align-items:center; gap:8px;
    font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:15px;
    text-decoration:none; padding:14px 32px; border-radius:12px;
    background:linear-gradient(135deg,#0ea5e9,#14b8a6); color:#fff;
    border:none; cursor:pointer;
    box-shadow:0 8px 28px rgba(14,165,233,0.4);
    transition:transform 0.25s,box-shadow 0.25s;
  }
  .btn-primary:hover { transform:translateY(-3px); box-shadow:0 14px 40px rgba(14,165,233,0.5); }

  .btn-ghost {
    display:inline-flex; align-items:center; gap:8px;
    font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:15px;
    text-decoration:none; padding:13px 28px; border-radius:12px;
    background:rgba(255,255,255,0.12); color:#fff;
    border:1.5px solid rgba(255,255,255,0.3); backdrop-filter:blur(10px);
    transition:all 0.25s;
  }
  .btn-ghost:hover { background:rgba(255,255,255,0.22); transform:translateY(-3px); }

  /* ── Nav links ── */
  .nav-a       { font-family:'Plus Jakarta Sans',sans-serif; font-weight:500; font-size:14px; color:rgba(255,255,255,0.8); text-decoration:none; transition:color 0.2s; }
  .nav-a:hover { color:#fff; }
  .nav-a-lt    { font-family:'Plus Jakarta Sans',sans-serif; font-weight:500; font-size:14px; color:#475569; text-decoration:none; transition:color 0.2s; }
  .nav-a-lt:hover { color:#0ea5e9; }
  .nav-a-dk    { font-family:'Plus Jakarta Sans',sans-serif; font-weight:500; font-size:14px; color:#94a3b8; text-decoration:none; transition:color 0.2s; }
  .nav-a-dk:hover { color:#38bdf8; }

  /* ── Cards ── */
  .feat-card   { border-radius:20px; padding:26px 22px; position:relative; overflow:hidden; cursor:default; transition:transform 0.3s,box-shadow 0.3s; }
  .feat-card:hover { transform:translateY(-6px); }
  .review-card { border-radius:16px; padding:18px; display:flex; flex-direction:column; gap:11px; cursor:default; transition:transform 0.3s; }
  .review-card:hover { transform:translateY(-4px); }
  .price-card  { border-radius:20px; padding:26px 22px; position:relative; overflow:hidden; cursor:default; transition:transform 0.3s,box-shadow 0.3s; }
  .price-card:hover { transform:translateY(-6px); }
  .stat-card   { border-radius:18px; padding:26px 14px; text-align:center; transition:transform 0.3s; cursor:default; }
  .stat-card:hover { transform:translateY(-5px); }
  .step-card   { border-radius:20px; padding:26px 22px; text-align:center; cursor:default; transition:transform 0.3s; }
  .step-card:hover { transform:translateY(-5px); }

  .fl { display:block; margin-bottom:9px; font-family:'Plus Jakarta Sans',sans-serif; font-size:13px; color:#64748b; text-decoration:none; transition:color 0.2s; }
  .fl:hover { color:#0ea5e9; }

  /* ── Responsive ── */

  /* Tablet */
  @media(max-width:1024px) {
    .hero-inner  { flex-direction:column !important; padding:100px 32px 60px !important; text-align:center; }
    .hero-text   { max-width:100% !important; padding-right:0 !important; align-items:center; display:flex; flex-direction:column; }
    .hero-trust  { justify-content:center !important; }
    .hero-btns   { justify-content:center !important; }
    .grid-4      { grid-template-columns:repeat(2,1fr) !important; }
    .grid-3      { grid-template-columns:repeat(2,1fr) !important; }
    .grid-5      { grid-template-columns:repeat(2,1fr) !important; }
    .grid-footer { grid-template-columns:1fr 1fr !important; }
    .footer-brand{ grid-column:1/-1; }
    .hero-slide-wrap { max-width:100% !important; width:100%; }
    .nav-links   { gap:18px !important; }
  }

  /* Mobile */
  @media(max-width:640px) {
    .hero-inner  { padding:90px 20px 50px !important; }
    .hero-h1     { font-size:clamp(32px,8vw,48px) !important; }
    .section-h2  { font-size:28px !important; }
    .grid-4      { grid-template-columns:repeat(2,1fr) !important; gap:12px !important; }
    .grid-3      { grid-template-columns:1fr !important; }
    .grid-5      { grid-template-columns:1fr 1fr !important; gap:10px !important; }
    .grid-footer { grid-template-columns:1fr !important; }
    .pricing-grid{ grid-template-columns:1fr !important; }
    .steps-grid  { grid-template-columns:1fr !important; }
    .nav-links   { display:none !important; }
    .nav-mobile-btn { display:flex !important; }
    .trust-logos { gap:18px !important; }
    .newsletter-inner { flex-direction:column !important; align-items:flex-start !important; }
    .newsletter-inputs { flex-direction:column !important; width:100% !important; }
    .newsletter-inputs input { width:100% !important; }
    .footer-bottom { flex-direction:column !important; align-items:flex-start !important; }
    .footer-links-row { flex-wrap:wrap !important; gap:14px !important; }
    .cta-btns    { flex-direction:column !important; align-items:center !important; }
    .review-row  { grid-template-columns:1fr 1fr !important; gap:10px !important; }
    .stat-val    { font-size:30px !important; }
  }

  @media(max-width:400px) {
    .grid-5      { grid-template-columns:1fr !important; }
    .review-row  { grid-template-columns:1fr !important; }
    .grid-4      { grid-template-columns:1fr !important; }
  }

  ::-webkit-scrollbar { width:0px; }
`

/* ── SLIDES — background hero images ── */
const SLIDES = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&q=80',
  'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1400&q=80',
  'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80',
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1400&q=80',
  'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1400&q=80',
]

/* ── REVIEWS with photos ── */
const REVIEWS = [
  { photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', grad:'linear-gradient(135deg,#0ea5e9,#14b8a6)', rating:5, name:'Ali Khan', role:'HR Manager', company:'TechCorp International', text:'"EMS PRO completely transformed our HR operations. Everything managed in one place — saving hours every week."' },
  { photo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80', grad:'linear-gradient(135deg,#f59e0b,#f97316)', rating:5, name:'Sara Ahmed', role:'Team Lead', company:'DigitalMinds Agency', text:'"Incredibly easy to use. Our team onboarded in two days. Productivity doubled and errors dropped significantly."' },
  { photo:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80', grad:'linear-gradient(135deg,#8b5cf6,#6366f1)', rating:5, name:'Usman Ali', role:'Senior Developer', company:'SoftNest Solutions', text:'"Best EMS platform I have worked with. Task tracking is powerful and API integration is absolutely seamless."' },
  { photo:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80', grad:'linear-gradient(135deg,#ec4899,#f43f5e)', rating:4, name:'Ayesha Siddiqui', role:'Project Manager', company:'RemoteFirst Inc', text:'"Managing distributed teams has never been easier. Real-time updates keep everyone aligned across time zones."' },
  { photo:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80', grad:'linear-gradient(135deg,#14b8a6,#0ea5e9)', rating:5, name:'Bilal Raza', role:'CEO', company:'StartupHub Group', text:'"The analytics dashboard alone was worth every penny. Tracking ROI now takes minutes instead of hours."' },
  { photo:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80', grad:'linear-gradient(135deg,#10b981,#14b8a6)', rating:5, name:'Fatima Malik', role:'Operations Director', company:'BizFlow Solutions', text:'"All meetings, assignments, and workload visibility in one platform. Team clarity improved overnight."' },
  { photo:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80', grad:'linear-gradient(135deg,#6366f1,#8b5cf6)', rating:4, name:'Hamza Sheikh', role:'IT Administrator', company:'CyberSafe Ltd', text:'"Role-based access control is rock solid. Full security and privacy without burdening the IT team."' },
  { photo:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80', grad:'linear-gradient(135deg,#f97316,#f59e0b)', rating:5, name:'Zara Hussain', role:'Customer Success', company:'CloudBase Technologies', text:'"Support is incredibly responsive. Every issue resolved quickly and professionally. Outstanding service!"' },
  { photo:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&q=80', grad:'linear-gradient(135deg,#ec4899,#8b5cf6)', rating:5, name:'Tariq Mehmood', role:'CTO', company:'Nexus Digital Group', text:'"All company data centralized, secure, and organized. Implementation was smooth with zero downtime."' },
  { photo:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80', grad:'linear-gradient(135deg,#0ea5e9,#6366f1)', rating:4, name:'Nadia Qureshi', role:'Field Operations Lead', company:'OnGround Services', text:'"Mobile access is a game changer for field teams. Offline mode ensures connectivity is never a blocker."' },
]

const FEATURES = [
  { emoji:'📊', title:'Real-Time Task Tracking', badge:'Most Used', color:'#0ea5e9', bg:'#e0f2fe', dbg:'rgba(14,165,233,0.12)', desc:'Monitor every task live. Set priorities, manage deadlines, and instantly spot bottlenecks.' },
  { emoji:'🔐', title:'Role-Based Access Control', badge:'Secure', color:'#14b8a6', bg:'#ccfbf1', dbg:'rgba(20,184,166,0.12)', desc:'Separate dashboards for Admins, Managers, and Employees. Full data security at every level.' },
  { emoji:'📈', title:'Advanced Analytics', badge:'AI Powered', color:'#8b5cf6', bg:'#ede9fe', dbg:'rgba(139,92,246,0.12)', desc:'Team performance and productivity insights in beautiful, easy-to-read dashboards.' },
  { emoji:'📱', title:'Mobile Ready', badge:'Cross Platform', color:'#f59e0b', bg:'#fef3c7', dbg:'rgba(245,158,11,0.12)', desc:'Seamless experience on iOS and Android. Keep field teams productive 24/7.' },
  { emoji:'🔔', title:'Smart Notifications', badge:'Automated', color:'#ec4899', bg:'#fce7f3', dbg:'rgba(236,72,153,0.12)', desc:'Deadline reminders and approvals via Slack, Email, and SMS — all automated.' },
  { emoji:'☁️', title:'Cloud Backup', badge:'Always On', color:'#10b981', bg:'#d1fae5', dbg:'rgba(16,185,129,0.12)', desc:'Data backed up every second. 99.99% uptime with enterprise-grade reliability.' },
]

const PRICING = [
  { name:'Starter', price:'$9', popular:false, color:'#64748b', grad:'linear-gradient(135deg,#64748b,#94a3b8)', icon:'🌱', desc:'Perfect for small teams.',
    features:['Up to 10 employees','Basic task tracking','Email notifications','Mobile app','5GB storage','Email support'] },
  { name:'Professional', price:'$29', popular:true, color:'#0ea5e9', grad:'linear-gradient(135deg,#0ea5e9,#14b8a6)', icon:'⚡', desc:'Most popular for growing teams.',
    features:['Up to 50 employees','Advanced analytics','All notifications','Role-based access','50GB storage','Priority support','API access','Custom reports'] },
  { name:'Enterprise', price:'$79', popular:false, color:'#8b5cf6', grad:'linear-gradient(135deg,#8b5cf6,#6366f1)', icon:'🏢', desc:'Full power for large orgs.',
    features:['Unlimited employees','AI insights','Account manager','SSO & security','Unlimited storage','24/7 support','Custom integrations','White-label','SLA guarantee'] },
]

/* ── Animated SVG Step Illustrations ── */
const StepIllustration = ({ step, color }) => {
  if(step===0) return (
    <svg width="76" height="76" viewBox="0 0 80 80" fill="none" style={{animation:'scaleIn 0.6s ease both'}}>
      <circle cx="40" cy="40" r="36" fill={`${color}18`} stroke={`${color}40`} strokeWidth="1.5"/>
      <rect x="22" y="27" width="36" height="27" rx="4" fill={`${color}28`} stroke={color} strokeWidth="1.5"/>
      <rect x="27" y="32" width="10" height="10" rx="2" fill={color} opacity="0.65" style={{animation:'bounce 2s ease-in-out infinite'}}/>
      <rect x="41" y="32" width="12" height="3" rx="1.5" fill={color} opacity="0.5"/>
      <rect x="41" y="37" width="9" height="3" rx="1.5" fill={color} opacity="0.38"/>
      <rect x="27" y="46" width="26" height="3" rx="1.5" fill={color} opacity="0.28"/>
      <circle cx="55" cy="55" r="8" fill={color} style={{animation:'pulseGlow 2s ease-in-out infinite'}}/>
      <path d="M52 55 L54.5 57.5 L58 52" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  if(step===1) return (
    <svg width="76" height="76" viewBox="0 0 80 80" fill="none" style={{animation:'scaleIn 0.6s 0.2s ease both'}}>
      <circle cx="40" cy="40" r="36" fill={`${color}18`} stroke={`${color}40`} strokeWidth="1.5"/>
      <circle cx="40" cy="29" r="8" fill={`${color}38`} stroke={color} strokeWidth="1.5" style={{animation:'bounce 2.5s ease-in-out infinite'}}/>
      <path d="M25 52 C25 43 55 43 55 52" fill={`${color}22`} stroke={color} strokeWidth="1.5"/>
      <circle cx="26" cy="35" r="5" fill={`${color}28`} stroke={color} strokeWidth="1" style={{animation:'bounce 2s 0.3s ease-in-out infinite'}}/>
      <circle cx="54" cy="35" r="5" fill={`${color}28`} stroke={color} strokeWidth="1" style={{animation:'bounce 2s 0.6s ease-in-out infinite'}}/>
      <path d="M56 29 L61 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="63" cy="22" r="4" fill={color} opacity="0.85"/>
      <path d="M61 22 L62.5 23.5 L65 20" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  return (
    <svg width="76" height="76" viewBox="0 0 80 80" fill="none" style={{animation:'scaleIn 0.6s 0.4s ease both'}}>
      <circle cx="40" cy="40" r="36" fill={`${color}18`} stroke={`${color}40`} strokeWidth="1.5"/>
      <rect x="20" y="23" width="40" height="33" rx="4" fill={`${color}18`} stroke={color} strokeWidth="1.5"/>
      <rect x="25" y="28" width="18" height="4" rx="2" fill={color} opacity="0.48"/>
      <rect x="25" y="34" width="10" height="3" rx="1.5" fill={color} opacity="0.32"/>
      <rect x="39" y="28" width="16" height="4" rx="2" fill={color} opacity="0.28" style={{animation:'bounce 2s 0.2s ease-in-out infinite'}}/>
      <rect x="39" y="34" width="11" height="3" rx="1.5" fill={color} opacity="0.22"/>
      <rect x="25" y="40" width="30" height="10" rx="2" fill={`${color}28`} stroke={color} strokeWidth="1" opacity="0.8"/>
      <path d="M30 45 L32.5 47.5 L36 43" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="39" y="43" width="12" height="3" rx="1.5" fill={color} opacity="0.5"/>
      <circle cx="58" cy="58" r="8" fill={color} style={{animation:'bounce 1.8s ease-in-out infinite'}}/>
      <path d="M55 58 L57.5 60.5 L62 55" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── Review Card ── */
const ReviewCard = ({ r, dark }) => (
  <div className="review-card" style={{
    background: dark ? 'rgba(255,255,255,0.04)' : '#fff',
    border: dark ? '1px solid rgba(255,255,255,0.07)' : '1.5px solid #e2e8f0',
    boxShadow: dark ? 'none' : '0 2px 14px rgba(0,0,0,0.05)'
  }}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
      <div style={{display:'flex',alignItems:'center',gap:9}}>
        <img src={r.photo} alt={r.name} onError={e=>{e.target.style.display='none'}}
          style={{width:40,height:40,borderRadius:'50%',objectFit:'cover',flexShrink:0,
            border:`2.5px solid ${r.color||'#0ea5e9'}`}}/>
        <div>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:12,color:dark?'#e2e8f0':'#0f172a'}}>{r.name}</div>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:9,color:'#0ea5e9',fontWeight:600,textTransform:'uppercase',letterSpacing:0.5}}>{r.role}</div>
        </div>
      </div>
      <div style={{display:'flex',gap:1}}>
        {[...Array(5)].map((_,i)=>(<span key={i} style={{color:i<r.rating?'#f59e0b':'#e2e8f0',fontSize:10}}>★</span>))}
      </div>
    </div>
    <p style={{color:dark?'rgba(255,255,255,0.52)':'#64748b',fontSize:11,lineHeight:1.78,fontStyle:'italic',margin:0,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>{r.text}</p>
    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:10,color:dark?'rgba(255,255,255,0.28)':'#94a3b8'}}>{r.company}</div>
  </div>
)

/* ══════════ MAIN ══════════ */
export default function HomePage() {
  const [dark,setDark]         = useState(true)
  const [scrolled,setScrolled] = useState(false)
  const [current,setCurrent]   = useState(0)
  const [progress,setProgress] = useState(0)
  const [billing,setBilling]   = useState('monthly')
  const intRef = useRef(null)
  const proRef = useRef(null)
  const DUR    = 4000

  useEffect(()=>{ document.body.className=dark?'dark':'light' },[dark])

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>60)
    window.addEventListener('scroll',fn)
    return ()=>window.removeEventListener('scroll',fn)
  },[])

  useEffect(()=>{
    setProgress(0)
    clearInterval(intRef.current); clearInterval(proRef.current)
    intRef.current=setInterval(()=>setCurrent(c=>(c+1)%SLIDES.length),DUR)
    let p=0
    proRef.current=setInterval(()=>{p+=100/(DUR/40);setProgress(Math.min(p,100))},40)
    return ()=>{clearInterval(intRef.current);clearInterval(proRef.current)}
  },[current])

  const bg   = dark?'#0f172a':'#ffffff'
  const bg2  = dark?'#1e293b':'#f8fafc'
  const txt  = dark?'#e2e8f0':'#0f172a'
  const txt2 = dark?'#94a3b8':'#64748b'
  const card = dark?'rgba(255,255,255,0.04)':'#ffffff'
  const bdr  = dark?'rgba(255,255,255,0.08)':'#e2e8f0'

  const getP = b=>{ const n=parseInt(b.replace('$','')); return billing==='yearly'?'$'+Math.round(n*0.8):b }

  return (
    <>
      <style>{STYLES}</style>

      {/* ══ NAVBAR ══ */}
      <nav style={{
        position:'fixed',top:0,width:'100%',zIndex:200,
        padding:'0 24px',height:66,boxSizing:'border-box',
        display:'flex',alignItems:'center',transition:'all 0.35s',
        background:scrolled?(dark?'rgba(15,23,42,0.96)':'rgba(255,255,255,0.96)'):'transparent',
        backdropFilter:scrolled?'blur(24px)':'none',
        boxShadow:scrolled?(dark?'0 1px 28px rgba(0,0,0,0.4)':'0 1px 24px rgba(14,165,233,0.08)'):'none',
        borderBottom:scrolled?`1px solid ${bdr}`:'none',
      }}>
        <div style={{maxWidth:1200,width:'100%',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}>

          {/* Logo — text only, no icon */}
          <span style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:22,fontWeight:800,
            color:scrolled?(dark?'#e2e8f0':'#0f172a'):'#fff',transition:'color 0.3s',letterSpacing:-0.5}}>
            EMS <span style={{color:'#0ea5e9'}}>PRO</span>
          </span>

          {/* Nav links */}
          <div className="nav-links" style={{display:'flex',gap:28,alignItems:'center'}}>
            {['Features','Stats','Pricing','Reviews'].map(s=>(
              <a key={s} href={`#${s.toLowerCase()}`}
                className={!scrolled?'nav-a':dark?'nav-a-dk':'nav-a-lt'}>{s}</a>
            ))}

            {/* Dark/Light toggle */}
            <button onClick={()=>setDark(!dark)} style={{
              width:42,height:23,borderRadius:12,border:'none',cursor:'pointer',
              background:dark?'linear-gradient(135deg,#0ea5e9,#14b8a6)':'#e2e8f0',
              position:'relative',transition:'background 0.3s',flexShrink:0
            }}>
              <div style={{
                position:'absolute',top:3.5,width:16,height:16,borderRadius:'50%',
                background:'#fff',transition:'left 0.3s',
                left:dark?22:3,
                boxShadow:'0 1px 4px rgba(0,0,0,0.25)',
                display:'flex',alignItems:'center',justifyContent:'center',fontSize:9
              }}>{dark?'🌙':'☀️'}</div>
            </button>

            <Link to="/login" className="btn-primary" style={{padding:'9px 22px',fontSize:13}}>Sign In →</Link>
          </div>

          {/* Mobile sign in */}
          <div className="nav-mobile-btn" style={{display:'none',alignItems:'center',gap:10}}>
            <button onClick={()=>setDark(!dark)} style={{
              width:38,height:21,borderRadius:11,border:'none',cursor:'pointer',
              background:dark?'linear-gradient(135deg,#0ea5e9,#14b8a6)':'#e2e8f0',
              position:'relative',transition:'background 0.3s'
            }}>
              <div style={{position:'absolute',top:3,width:15,height:15,borderRadius:'50%',background:'#fff',transition:'left 0.3s',left:dark?20:3,display:'flex',alignItems:'center',justifyContent:'center',fontSize:8}}>{dark?'🌙':'☀️'}</div>
            </button>
            <Link to="/login" className="btn-primary" style={{padding:'8px 18px',fontSize:12}}>Sign In →</Link>
          </div>
        </div>
      </nav>

      {/* ══ HERO — full bg slideshow ══ */}
      <section style={{minHeight:'100vh',position:'relative',overflow:'hidden',display:'flex',alignItems:'center'}}>

        {/* Background slides */}
        {SLIDES.map((s,i)=>(
          <div key={i} style={{
            position:'absolute',inset:0,zIndex:0,
            opacity:i===current?1:0,
            transition:'opacity 1.2s ease',
          }}>
            <img src={s} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
          </div>
        ))}

        {/* Dark overlay so text is readable */}
        <div style={{position:'absolute',inset:0,zIndex:1,
          background:'linear-gradient(145deg,rgba(10,18,50,0.88) 0%,rgba(8,28,52,0.82) 40%,rgba(10,30,40,0.78) 100%)'}}/>

        {/* Subtle grid */}
        <div style={{position:'absolute',inset:0,zIndex:2,pointerEvents:'none',
          backgroundImage:'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)',
          backgroundSize:'48px 48px'}}/>

        {/* Progress bar top */}
        <div style={{position:'absolute',top:0,left:0,right:0,height:3,zIndex:10,background:'rgba(255,255,255,0.1)'}}>
          <div style={{height:'100%',background:'linear-gradient(90deg,#0ea5e9,#14b8a6)',width:`${progress}%`,transition:'width 0.04s linear',boxShadow:'0 0 8px rgba(14,165,233,0.7)'}}/>
        </div>

        {/* Slide dots bottom center */}
        <div style={{position:'absolute',bottom:80,left:'50%',transform:'translateX(-50%)',zIndex:10,display:'flex',gap:6}}>
          {SLIDES.map((_,i)=>(
            <div key={i} onClick={()=>setCurrent(i)} style={{
              width:i===current?22:7,height:7,borderRadius:3.5,cursor:'pointer',
              background:i===current?'linear-gradient(90deg,#0ea5e9,#14b8a6)':'rgba(255,255,255,0.3)',
              transition:'all 0.3s',
              boxShadow:i===current?'0 0 8px rgba(14,165,233,0.7)':'none'
            }}/>
          ))}
        </div>

        {/* Content */}
        <div className="hero-inner" style={{position:'relative',zIndex:10,width:'100%',maxWidth:1200,margin:'0 auto',padding:'100px 48px 80px',display:'flex',alignItems:'center',gap:40}}>

          {/* Text */}
          <div className="hero-text" style={{flex:1,maxWidth:580}}>
            <div className="fadeUp d1" style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:22,
              background:'rgba(255,255,255,0.1)',backdropFilter:'blur(14px)',
              border:'1px solid rgba(255,255,255,0.18)',color:'#fff',
              padding:'7px 18px',borderRadius:50,
              fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:600}}>
              <span style={{width:7,height:7,borderRadius:'50%',background:'#38bdf8',display:'inline-block',animation:'pulseGlow 2s ease-in-out infinite'}}/>
              🚀 World's Smartest EMS Platform
            </div>

            <h1 className="fadeUp d2 hero-h1" style={{fontFamily:"'Bricolage Grotesque',sans-serif",
              fontSize:'clamp(36px,4.5vw,64px)',fontWeight:800,lineHeight:1.08,
              color:'#fff',margin:'0 0 12px',letterSpacing:-1.5}}>
              Manage Your Team
            </h1>
            <h1 className="fadeUp d2 hero-h1" style={{fontFamily:"'Bricolage Grotesque',sans-serif",
              fontSize:'clamp(36px,4.5vw,64px)',fontWeight:800,lineHeight:1.08,
              margin:'0 0 20px',letterSpacing:-1.5}}>
              <span className="grad-text">Like Never Before</span>
            </h1>

            <div className="fadeUp d3" style={{width:64,height:3,borderRadius:2,
              background:'linear-gradient(90deg,#0ea5e9,#14b8a6)',marginBottom:20,
              boxShadow:'0 0 12px rgba(14,165,233,0.5)'}}/>

            <p className="fadeUp d3" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",
              color:'rgba(255,255,255,0.65)',fontSize:17,marginBottom:36,lineHeight:1.8,maxWidth:500}}>
              A smart, secure, and scalable Employee Management System built for modern high-performing teams worldwide.
            </p>

            <div className="fadeUp d4 hero-btns" style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:32}}>
              <Link to="/login" className="btn-primary">Get Started Free →</Link>
              <a href="#pricing" className="btn-ghost">View Pricing</a>
            </div>

            <div className="fadeUp d5 hero-trust" style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              {[{icon:'✅',text:'No credit card'},{icon:'⚡',text:'5 min setup'},{icon:'🔒',text:'Enterprise security'}].map(t=>(
                <div key={t.text} style={{display:'flex',alignItems:'center',gap:6,
                  background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.14)',
                  borderRadius:50,padding:'5px 12px',
                  fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:'rgba(255,255,255,0.7)',fontWeight:500}}>
                  <span>{t.icon}</span> {t.text}
                </div>
              ))}
            </div>
          </div>

          {/* Stats mini on right side */}
          <div className="hero-slide-wrap" style={{flex:'0 0 auto',maxWidth:280,display:'flex',flexDirection:'column',gap:14}}>
            {[
              {val:'10,000+',label:'Tasks Completed',color:'#38bdf8'},
              {val:'500+ Teams',label:'Worldwide',color:'#2dd4bf'},
              {val:'99.9%',label:'Uptime Guarantee',color:'#a78bfa'},
            ].map((s,i)=>(
              <div key={i} style={{
                background:'rgba(255,255,255,0.1)',backdropFilter:'blur(16px)',
                border:'1px solid rgba(255,255,255,0.15)',borderRadius:14,
                padding:'16px 20px',
                animation:`fadeUp 0.8s ${0.3+i*0.15}s both`
              }}>
                <div style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:26,fontWeight:800,color:s.color,letterSpacing:-0.5}}>{s.val}</div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:'rgba(255,255,255,0.6)',marginTop:2}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{position:'absolute',bottom:0,left:0,right:0,zIndex:5,lineHeight:0}}>
          <svg viewBox="0 0 1440 55" preserveAspectRatio="none" style={{width:'100%',height:55}}>
            <path d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z" fill={bg}/>
          </svg>
        </div>
      </section>

      {/* ══ TRUST BAR ══ */}
      <section style={{padding:'26px 24px',background:bg,borderBottom:`1px solid ${bdr}`}}>
        <div style={{maxWidth:960,margin:'0 auto',textAlign:'center'}}>
          <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:txt2,letterSpacing:2,textTransform:'uppercase',fontWeight:600,marginBottom:18}}>Trusted by 500+ teams worldwide</p>
          <div className="trust-logos" style={{display:'flex',justifyContent:'center',gap:32,flexWrap:'wrap',alignItems:'center'}}>
            {['TechCorp','DigitalMinds','SoftNest','RemoteFirst','BizFlow','CyberSafe'].map(b=>(
              <span key={b} style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:15,fontWeight:700,color:dark?'rgba(255,255,255,0.14)':'#cbd5e1',letterSpacing:-0.3}}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section id="stats" style={{padding:'72px 24px',background:dark?'linear-gradient(135deg,#0f1729,#162035,#0f1f2e)':'linear-gradient(135deg,#f0f9ff,#e0f2fe,#ccfbf1)'}}>
        <div style={{maxWidth:960,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:44}}>
            <span style={{display:'inline-block',background:'linear-gradient(135deg,#0ea5e9,#14b8a6)',color:'#fff',padding:'5px 16px',borderRadius:50,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:'uppercase',marginBottom:14}}>📊 By The Numbers</span>
            <h2 className="section-h2" style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:34,fontWeight:800,color:txt,margin:'0 0 8px',letterSpacing:-1}}>Numbers That <span className="grad-text">Speak</span></h2>
          </div>
          <div className="grid-4" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
            {[
              {val:'10k+',label:'Tasks Completed',emoji:'✅',grad:'linear-gradient(135deg,#0ea5e9,#38bdf8)',shadow:'rgba(14,165,233,0.28)'},
              {val:'500+',label:'Global Teams',emoji:'🌐',grad:'linear-gradient(135deg,#14b8a6,#2dd4bf)',shadow:'rgba(20,184,166,0.28)'},
              {val:'15+',label:'Countries',emoji:'🌍',grad:'linear-gradient(135deg,#8b5cf6,#a78bfa)',shadow:'rgba(139,92,246,0.28)'},
              {val:'99.9%',label:'Uptime',emoji:'⚡',grad:'linear-gradient(135deg,#f59e0b,#fbbf24)',shadow:'rgba(245,158,11,0.28)'},
            ].map((s,i)=>(
              <div key={i} className="stat-card" style={{background:s.grad,boxShadow:`0 10px 32px ${s.shadow}`}}>
                <div style={{fontSize:26,marginBottom:10,animation:`floatY 4s ${i*0.4}s ease-in-out infinite`}}>{s.emoji}</div>
                <div className="stat-val" style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:34,fontWeight:800,color:'#fff',marginBottom:5,lineHeight:1}}>{s.val}</div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:'rgba(255,255,255,0.82)',fontWeight:500}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="features" style={{padding:'72px 24px',background:bg}}>
        <div style={{maxWidth:1080,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:44}}>
            <span style={{display:'inline-block',background:dark?'rgba(14,165,233,0.14)':'#e0f2fe',color:'#0ea5e9',padding:'5px 16px',borderRadius:50,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:'uppercase',marginBottom:14,border:dark?'1px solid rgba(14,165,233,0.28)':'none'}}>✦ Features</span>
            <h2 className="section-h2" style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:34,fontWeight:800,color:txt,margin:'0 0 10px',letterSpacing:-1}}>Everything in <span className="grad-text">One Place</span></h2>
            <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:txt2,fontSize:15,maxWidth:420,margin:'0 auto'}}>Every feature your team needs — beautifully designed and built into EMS PRO.</p>
          </div>
          <div className="grid-3" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
            {FEATURES.map((f,i)=>(
              <div key={i} className="feat-card" style={{background:card,border:`1.5px solid ${bdr}`,boxShadow:dark?'none':'0 2px 14px rgba(0,0,0,0.05)'}}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${f.color},${f.color}44)`,borderRadius:'20px 20px 0 0'}}/>
                <div style={{width:50,height:50,borderRadius:13,background:dark?f.dbg:f.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,marginBottom:14}}>{f.emoji}</div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:9}}>
                  <h3 style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:15,fontWeight:700,color:txt,lineHeight:1.3,maxWidth:170}}>{f.title}</h3>
                  <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:9,fontWeight:700,letterSpacing:1,textTransform:'uppercase',background:dark?f.dbg:f.bg,color:f.color,padding:'3px 7px',borderRadius:5,flexShrink:0,marginLeft:7}}>{f.badge}</span>
                </div>
                <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:txt2,fontSize:13,lineHeight:1.75,margin:0}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{padding:'72px 24px',background:'linear-gradient(145deg,#0c1445,#0a2a4a,#0d3b4f)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none'}}>
          <div style={{position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(14,165,233,0.14) 0%,transparent 65%)',top:'-120px',right:'-120px',animation:'blob1 15s ease-in-out infinite'}}/>
          <div style={{position:'absolute',width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(20,184,166,0.12) 0%,transparent 65%)',bottom:'-80px',left:'-80px',animation:'blob2 12s ease-in-out infinite'}}/>
        </div>
        <div style={{maxWidth:960,margin:'0 auto',position:'relative',zIndex:2}}>
          <div style={{textAlign:'center',marginBottom:44}}>
            <span style={{display:'inline-block',background:'rgba(14,165,233,0.14)',border:'1px solid rgba(14,165,233,0.28)',color:'#38bdf8',padding:'5px 16px',borderRadius:50,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:'uppercase',marginBottom:14}}>🎯 How It Works</span>
            <h2 className="section-h2" style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:34,fontWeight:800,color:'#fff',margin:'0 0 10px',letterSpacing:-1}}>Up & Running in <span className="grad-text">3 Steps</span></h2>
            <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'rgba(255,255,255,0.5)',fontSize:15}}>No complicated setup. Just sign up and start managing.</p>
          </div>
          <div className="steps-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
            {[
              {step:0,title:'Sign Up',color:'#38bdf8',desc:'Create your account in under 2 minutes. No credit card needed.'},
              {step:1,title:'Add Your Team',color:'#2dd4bf',desc:'Invite employees, assign roles, and set up departments instantly.'},
              {step:2,title:'Start Managing',color:'#a78bfa',desc:'Track tasks, view analytics, and boost team productivity from day one.'},
            ].map((s,i)=>(
              <div key={i} className="step-card" style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.09)',backdropFilter:'blur(10px)',position:'relative',overflow:'hidden',transition:'transform 0.3s,border-color 0.3s'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.borderColor=`${s.color}44`}}
              onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.borderColor='rgba(255,255,255,0.09)'}}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,transparent,${s.color},transparent)`}}/>
                <div style={{display:'flex',justifyContent:'center',marginBottom:14}}>
                  <StepIllustration step={s.step} color={s.color}/>
                </div>
                <div style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:10,fontWeight:800,color:`${s.color}88`,marginBottom:7,letterSpacing:2,textTransform:'uppercase'}}>STEP 0{i+1}</div>
                <h3 style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:19,fontWeight:700,color:'#fff',marginBottom:8}}>{s.title}</h3>
                <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'rgba(255,255,255,0.48)',fontSize:13,lineHeight:1.8,margin:0}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section id="pricing" style={{padding:'72px 24px',background:bg2}}>
        <div style={{maxWidth:980,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:36}}>
            <span style={{display:'inline-block',background:'linear-gradient(135deg,#0ea5e9,#14b8a6)',color:'#fff',padding:'5px 16px',borderRadius:50,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:'uppercase',marginBottom:14}}>💰 Pricing</span>
            <h2 className="section-h2" style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:34,fontWeight:800,color:txt,margin:'0 0 8px',letterSpacing:-1}}>Simple, <span className="grad-text">Transparent Pricing</span></h2>
            <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:txt2,fontSize:15,margin:'0 0 22px'}}>No hidden fees. Cancel anytime.</p>
            <div style={{display:'inline-flex',alignItems:'center',gap:0,background:dark?'rgba(255,255,255,0.08)':'#e2e8f0',borderRadius:50,padding:3}}>
              {['monthly','yearly'].map(b=>(
                <button key={b} onClick={()=>setBilling(b)} style={{
                  padding:'7px 20px',borderRadius:50,border:'none',cursor:'pointer',
                  fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:600,
                  background:billing===b?'linear-gradient(135deg,#0ea5e9,#14b8a6)':'transparent',
                  color:billing===b?'#fff':txt2,
                  transition:'all 0.25s',
                  boxShadow:billing===b?'0 3px 12px rgba(14,165,233,0.35)':'none'
                }}>
                  {b==='monthly'?'Monthly':<>Yearly <span style={{background:'rgba(255,255,255,0.2)',padding:'1px 6px',borderRadius:50,fontSize:9}}>-20%</span></>}
                </button>
              ))}
            </div>
          </div>
          <div className="pricing-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,alignItems:'start'}}>
            {PRICING.map((p,i)=>(
              <div key={i} className="price-card" style={{
                background:p.popular?'linear-gradient(145deg,#0ea5e9,#14b8a6)':card,
                border:p.popular?'none':`1.5px solid ${bdr}`,
                boxShadow:p.popular?'0 16px 44px rgba(14,165,233,0.35)':(dark?'none':'0 2px 14px rgba(0,0,0,0.05)'),
                marginTop:p.popular?0:10
              }}>
                {p.popular&&(
                  <div style={{position:'absolute',top:-1,left:'50%',transform:'translateX(-50%)',background:'rgba(255,255,255,0.22)',color:'#fff',padding:'4px 14px',borderRadius:'0 0 10px 10px',fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:0.8,textTransform:'uppercase',whiteSpace:'nowrap'}}>⭐ Most Popular</div>
                )}
                <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:p.popular?'rgba(255,255,255,0.28)':p.grad,borderRadius:'20px 20px 0 0'}}/>
                <div style={{paddingTop:p.popular?22:4}}>
                  <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
                    <div style={{width:32,height:32,borderRadius:8,background:p.popular?'rgba(255,255,255,0.18)':p.grad,display:'flex',alignItems:'center',justifyContent:'center',fontSize:15}}>{p.icon}</div>
                    <span style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:16,fontWeight:800,color:p.popular?'#fff':txt,letterSpacing:-0.3}}>{p.name}</span>
                  </div>
                  <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:p.popular?'rgba(255,255,255,0.72)':txt2,fontSize:12,marginBottom:12,lineHeight:1.55}}>{p.desc}</p>
                  <div style={{display:'flex',alignItems:'baseline',gap:2,marginBottom:billing==='yearly'?3:14}}>
                    <span style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:38,fontWeight:800,color:p.popular?'#fff':p.color,letterSpacing:-1.5,lineHeight:1}}>{getP(p.price)}</span>
                    <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:p.popular?'rgba(255,255,255,0.58)':txt2,fontSize:12}}>/mo</span>
                  </div>
                  {billing==='yearly'&&(
                    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:p.popular?'rgba(255,255,255,0.78)':'#10b981',fontWeight:600,marginBottom:12}}>
                      💰 Save ${Math.round(parseInt(p.price.replace('$',''))*12*0.2)}/yr
                    </div>
                  )}
                  <Link to="/login" style={{
                    display:'block',textAlign:'center',padding:'10px',borderRadius:10,
                    fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:13,
                    textDecoration:'none',marginBottom:16,transition:'all 0.2s',
                    background:p.popular?'rgba(255,255,255,0.18)':'linear-gradient(135deg,'+p.color+','+p.color+'cc)',
                    color:'#fff',border:p.popular?'1.5px solid rgba(255,255,255,0.32)':'none',
                    boxShadow:p.popular?'none':`0 4px 14px ${p.color}44`
                  }}>
                    {i===0?'Get Started':i===1?'Start Free Trial →':'Contact Sales'}
                  </Link>
                  <div style={{height:1,background:p.popular?'rgba(255,255,255,0.16)':bdr,marginBottom:14}}/>
                  {p.features.map((f,j)=>(
                    <div key={j} style={{display:'flex',alignItems:'center',gap:7,marginBottom:7}}>
                      <div style={{width:16,height:16,borderRadius:'50%',background:p.popular?'rgba(255,255,255,0.18)':`${p.color}18`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <span style={{color:p.popular?'#fff':p.color,fontSize:8,fontWeight:800}}>✓</span>
                      </div>
                      <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:p.popular?'rgba(255,255,255,0.82)':txt2}}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:26}}>
            <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:txt2,fontSize:13}}>
              All plans include a <strong style={{color:'#0ea5e9'}}>14-day free trial</strong> · No credit card · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section id="reviews" style={{padding:'72px 24px',background:bg}}>
        <div style={{maxWidth:1260,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:40}}>
            <span style={{display:'inline-block',background:dark?'rgba(236,72,153,0.14)':'#fce7f3',color:'#ec4899',padding:'5px 16px',borderRadius:50,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:'uppercase',marginBottom:14,border:dark?'1px solid rgba(236,72,153,0.28)':'none'}}>★ Testimonials</span>
            <h2 className="section-h2" style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:34,fontWeight:800,color:txt,margin:'0 0 10px',letterSpacing:-1}}>Trusted by Teams <span className="grad-text">Worldwide</span></h2>
            <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:txt2,fontSize:15,margin:'0 0 16px'}}>Over 10,000 satisfied users — here are their real stories</p>
            <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'linear-gradient(135deg,#fef9c3,#fde68a)',border:'1px solid #f59e0b',color:'#92400e',padding:'6px 18px',borderRadius:50,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,fontWeight:700}}>
              ⭐ 4.9 / 5 Average Rating — 10,000+ Reviews
            </div>
          </div>
          <div className="review-row grid-5" style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:11,marginBottom:11}}>
            {REVIEWS.slice(0,5).map((r,i)=><ReviewCard key={i} r={r} dark={dark}/>)}
          </div>
          <div className="review-row grid-5" style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:11}}>
            {REVIEWS.slice(5,10).map((r,i)=><ReviewCard key={i} r={r} dark={dark}/>)}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{padding:'88px 24px',background:'linear-gradient(145deg,#0c1445,#0a2a4a,#0d3b4f)',position:'relative',overflow:'hidden',textAlign:'center'}}>
        <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none'}}>
          <div style={{position:'absolute',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 65%)',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}/>
        </div>
        <div style={{position:'relative',zIndex:2,maxWidth:620,margin:'0 auto'}}>
          <div style={{fontSize:46,marginBottom:14,animation:'floatY 3s ease-in-out infinite'}}>🚀</div>
          <h2 className="section-h2" style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:40,fontWeight:800,color:'#fff',margin:'0 0 14px',lineHeight:1.12,letterSpacing:-1.5}}>
            Ready to Transform<br/><span className="grad-text">Your Team Management?</span>
          </h2>
          <div style={{width:70,height:3,background:'linear-gradient(90deg,#0ea5e9,#14b8a6)',borderRadius:2,margin:'0 auto 20px',boxShadow:'0 0 12px rgba(14,165,233,0.5)'}}/>
          <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'rgba(255,255,255,0.52)',fontSize:16,margin:'0 auto 38px',lineHeight:1.85,maxWidth:440}}>
            Join over 500 teams worldwide already using EMS PRO to work smarter, faster, and better.
          </p>
          <div className="cta-btns" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/login" className="btn-primary" style={{fontSize:15,padding:'14px 42px'}}>Start for Free Today →</Link>
            <a href="#pricing" className="btn-ghost" style={{fontSize:15,padding:'13px 34px'}}>View Pricing</a>
          </div>
          <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'rgba(255,255,255,0.28)',fontSize:12,marginTop:16}}>No credit card required · Cancel anytime · Setup in 5 minutes</p>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{background:dark?'#080d1a':'#0a0f1e',borderTop:`1px solid ${dark?'rgba(14,165,233,0.1)':'rgba(14,165,233,0.14)'}`,padding:'60px 24px 0'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="grid-footer" style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:40,marginBottom:44}}>

            <div className="footer-brand">
              <span style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:20,fontWeight:800,color:'#fff',letterSpacing:-0.5,display:'block',marginBottom:12}}>
                EMS <span style={{color:'#0ea5e9'}}>PRO</span>
              </span>
              <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'#475569',fontSize:13,lineHeight:1.85,marginBottom:18,maxWidth:260}}>
                A world-class Employee Management System built for modern, high-performing teams across the globe.
              </p>
              <div style={{display:'flex',gap:9,marginBottom:18,flexWrap:'wrap'}}>
                {[{icon:'in',bg:'#0077b5'},{icon:'𝕏',bg:'#1a1a2e'},{icon:'f',bg:'#1877f2'},{icon:'▶',bg:'#ff0000'}].map((s,i)=>(
                  <div key={i} style={{width:34,height:34,borderRadius:8,background:s.bg,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:12,cursor:'pointer',transition:'transform 0.2s,opacity 0.2s',opacity:0.72}}
                    onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.opacity='1'}}
                    onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.opacity='0.72'}}>
                    {s.icon}
                  </div>
                ))}
              </div>
              <div style={{display:'flex',gap:9,flexWrap:'wrap'}}>
                {['App Store','Google Play'].map(b=>(
                  <div key={b} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(14,165,233,0.15)',borderRadius:8,padding:'7px 12px',cursor:'pointer',transition:'border-color 0.3s'}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(14,165,233,0.4)'}
                    onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(14,165,233,0.15)'}>
                    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'#475569',fontSize:8,marginBottom:1}}>Download on the</div>
                    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'#fff',fontSize:12,fontWeight:600}}>{b}</div>
                  </div>
                ))}
              </div>
            </div>

            {[
              {heading:'Product',links:['Features','Pricing','Integrations','Changelog','Roadmap']},
              {heading:'Company',links:['About Us','Blog','Careers','Press Kit','Contact']},
              {heading:'Support',links:['Help Center','Documentation','API Docs','Status Page','Privacy Policy']},
            ].map(col=>(
              <div key={col.heading}>
                <h4 style={{fontFamily:"'Bricolage Grotesque',sans-serif",color:'#fff',fontWeight:700,fontSize:14,margin:'0 0 14px',letterSpacing:-0.2}}>{col.heading}</h4>
                {col.links.map(l=><a key={l} href="#" className="fl">{l}</a>)}
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="newsletter-inner" style={{background:'linear-gradient(135deg,rgba(14,165,233,0.09),rgba(20,184,166,0.09))',border:'1px solid rgba(14,165,233,0.17)',borderRadius:14,padding:'24px 28px',display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:36,flexWrap:'wrap',gap:16}}>
            <div>
              <h3 style={{fontFamily:"'Bricolage Grotesque',sans-serif",color:'#fff',fontWeight:700,fontSize:16,margin:'0 0 4px',letterSpacing:-0.3}}>📬 Stay in the Loop</h3>
              <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'#475569',fontSize:13,margin:0}}>Weekly HR tips, product updates, and exclusive offers.</p>
            </div>
            <div className="newsletter-inputs" style={{display:'flex',gap:8}}>
              <input type="email" placeholder="your@email.com" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(14,165,233,0.2)',color:'#fff',padding:'10px 15px',borderRadius:9,fontSize:13,outline:'none',width:200,fontFamily:"'Plus Jakarta Sans',sans-serif"}}
                onFocus={e=>e.target.style.borderColor='rgba(14,165,233,0.5)'}
                onBlur={e=>e.target.style.borderColor='rgba(14,165,233,0.2)'}
              />
              <button className="btn-primary" style={{padding:'10px 18px',fontSize:12}}>Subscribe</button>
            </div>
          </div>

          {/* Trust badges */}
          <div style={{display:'flex',justifyContent:'center',gap:12,marginBottom:28,flexWrap:'wrap'}}>
            {[{icon:'🏆',text:'Product of the Year 2025'},{icon:'🔒',text:'SOC 2 Certified'},{icon:'⭐',text:'G2 Leader 2025'},{icon:'🌍',text:'GDPR Compliant'}].map((b,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:7,background:'rgba(255,255,255,0.03)',border:'1px solid rgba(14,165,233,0.1)',borderRadius:7,padding:'6px 12px'}}>
                <span style={{fontSize:13}}>{b.icon}</span>
                <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:11,color:'#475569',fontWeight:500}}>{b.text}</span>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="footer-bottom" style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:16,paddingBottom:24,borderTop:'1px solid rgba(255,255,255,0.05)',flexWrap:'wrap',gap:10}}>
            <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'#334155',fontSize:12,margin:0}}>© 2026 EMS PRO. All Rights Reserved. Built for the world. 🌍</p>
            <div className="footer-links-row" style={{display:'flex',gap:18}}>
              {['Terms','Privacy','Cookies','Sitemap'].map(l=>(
                <a key={l} href="#" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",color:'#334155',textDecoration:'none',fontSize:11,transition:'color 0.2s'}}
                  onMouseEnter={e=>e.target.style.color='#0ea5e9'}
                  onMouseLeave={e=>e.target.style.color='#334155'}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}




