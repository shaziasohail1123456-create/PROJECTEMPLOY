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




