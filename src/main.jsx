import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Menu,X,ArrowDown,Sparkles,ArrowUpRight} from 'lucide-react';
import './styles.css';

const projects=[
 {title:'Aurora Identity',category:'Branding',year:'2026',image:'/projects/aurora-identity.svg',desc:'A premium visual identity study built around contrast, restraint and a luminous monogram.'},
 {title:'Glow Campaign',category:'Social Media',year:'2026',image:'/projects/glow-campaign.svg',desc:'A social campaign concept combining editorial typography, product storytelling and scroll-stopping composition.'},
 {title:'Serene Spaces',category:'Graphic Design',year:'2026',image:'/projects/serene-spaces.svg',desc:'An interior-design presentation concept turning architecture, material and light into a visual story.'},
 {title:'Moments in Motion',category:'Video',year:'2026',image:'/projects/moments-in-motion.svg',desc:'A cinematic edit direction focused on rhythm, atmosphere, framing and emotional pacing.'},
 {title:'Elemental Motion',category:'Motion',year:'2026',image:'/projects/elemental-motion.svg',desc:'An abstract motion study where particles, rings and light become a visual language.'},
 {title:'Digital Dreams',category:'AI Creative',year:'2026',image:'/projects/digital-dreams.svg',desc:'An AI-assisted visual experiment exploring surreal portraiture and controlled art direction.'},
 {title:'Care Beyond',category:'Graphic Design',year:'2026',image:'/projects/care-beyond.svg',desc:'A healthcare communication concept balancing trust, warmth and contemporary editorial design.'},
 {title:'Visual Stories',category:'Graphic Design',year:'2026',image:'/projects/visual-stories.svg',desc:'A publication-style art direction study for portfolios, brochures and brand storytelling.'}
];
const cats=['All','Branding','Graphic Design','Social Media','Video','Motion','AI Creative'];

function App(){
 const [loading,setLoading]=useState(true),[menu,setMenu]=useState(false),[filter,setFilter]=useState('All'),[magic,setMagic]=useState(false);
 useEffect(()=>{const t=setTimeout(()=>setLoading(false),1800);return()=>clearTimeout(t)},[]);
 const go=id=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
 if(loading)return <div className="loader"><div className="orbit">KC</div><b>CREATIVE ALCHEMIST</b><small>Design. Motion. Story. Magic.</small></div>;
 const shown=filter==='All'?projects:projects.filter(p=>p.category===filter);
 return <div className={magic?'app magic':'app'}>
  <nav>
   <button className="brand" onClick={()=>go('home')}><strong>KC</strong><small>CREATIVE ALCHEMIST</small></button>
   <div className={menu?'links open':'links'}>{['home','about','work','services','experience','skills','contact'].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}</div>
   <div className="tools"><button className="magic-btn" onClick={()=>setMagic(!magic)}><Sparkles size={15}/> MAGIC MODE</button><button className="hamb" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
  </nav>
  <section id="home" className="hero"><div className="hero-bg"/><div className="hero-copy"><p className="eyebrow">KC — CREATIVE ALCHEMIST</p><h1>KRUNAL <i>CHAUHAN</i></h1><h2>I Turn Ideas Into <span>Visual Experiences.</span></h2><p className="hero-meta">Graphic Designer · Content Creator · Video Editor · AI Prompt Maker</p><div className="actions"><button className="gold" onClick={()=>go('work')}>ENTER MY PORTFOLIO <ArrowDown size={15}/></button><button className="outline" onClick={()=>go('contact')}>CONTACT ME</button></div><p className="tagline">“Where Creativity Becomes Magic.”</p></div></section>
  <Section id="about" eyebrow="THE WIZARD BEHIND THE WORK" title={<>Creative thinking,<br/><i>visual alchemy.</i></>}><div className="about"><div className="portrait"><span>KC</span><small>CREATIVE ALCHEMIST</small></div><div><p className="lead">I'm Krunal Chauhan — a creative professional working across graphic design, social media, video editing, branding, and AI-powered creative workflows.</p><p className="muted">I combine design thinking, visual storytelling, and emerging AI tools to turn ideas into engaging digital experiences.</p><div className="chips"><span>Creative Designer</span><span>Content Creator</span><span>Video Editor</span><span>AI Prompt Maker</span></div></div></div></Section>
  <Section id="work" eyebrow="THE ARCHIVES" title={<>Selected <i>work.</i></>}><div className="archive-head"><p className="muted">Temporary concept projects are installed for now. We can replace every cover with your real work later without changing the structure.</p><div className="filters">{cats.map(x=><button className={filter===x?'active':''} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div></div><div className="grid">{shown.map((p,i)=><article className="card" key={p.title}><div className="art"><img src={p.image} alt={p.title}/><span>0{projects.indexOf(p)+1}</span><b>{p.category}</b></div><div className="card-copy"><div><h3>{p.title}</h3><p>{p.desc}</p></div><button aria-label={'Open '+p.title}><ArrowUpRight size={18}/></button></div><small className="year">{p.year}</small></article>)}</div></Section>
  <Section id="services" eyebrow="THE SPELLBOOK" title={<>Creative <i>services.</i></>}><div className="grid services">{['Graphic Design','Branding','Social Media','Video Editing','Motion Graphics','AI Creative'].map((x,i)=><article className="service" key={x}><small>0{i+1}</small><h3>{x}</h3><p className="muted">Creative services for brands that want to stand out through strong visual communication.</p></article>)}</div></Section>
  <Section id="experience" eyebrow="THE JOURNEY" title={<>Experience & <i>evolution.</i></>}><div className="timeline"><div><p>2025 — PRESENT</p><h3>Social Media / Creative — Welcare Hospital</h3><span>Design · Content · Campaigns · Visual Communication</span></div><div><p>PREVIOUS EXPERIENCE</p><h3>Creative / Design — PB Distributor</h3><span>Graphic Design · Visual Content · Brand Support</span></div></div></Section>
  <Section id="skills" eyebrow="THE ARSENAL" title={<>Tools of the <i>craft.</i></>}><div className="skills">{['Adobe Illustrator','Adobe Premiere Pro','Adobe InDesign','Video Editing','Graphic Design','Branding','Social Media Marketing','Content Creation','AI Creative Tools','Prompt Engineering','Campaign Design','Visual Storytelling'].map(x=><div key={x}>✦ {x}</div>)}</div></Section>
  <Section id="contact" eyebrow="SEND A MESSAGE" title={<>LET'S CREATE<br/><i>SOMETHING MAGICAL.</i></>}><div className="contact"><div><p className="lead">Have an idea, campaign, or project in mind? Let's turn it into something people remember.</p><p className="muted">Contact integration will be connected once your preferred email/backend is selected.</p></div><div className="form"><input placeholder="Name"/><input placeholder="Email"/><input placeholder="Phone"/><input placeholder="Project Type"/><input placeholder="Budget"/><textarea placeholder="Tell me about your project..."/><button className="gold" onClick={()=>alert('Contact integration is not configured yet. No message was sent.')}>SEND MESSAGE</button></div></div></Section>
  <footer><strong>KC</strong><span>Where Creativity Becomes Magic.</span><small>© 2026 Krunal Chauhan · Creative Alchemist</small></footer>
 </div>
}
function Section({id,eyebrow,title,children}){return <section id={id} className="section"><p className="eyebrow">{eyebrow}</p><h2 className="title">{title}</h2>{children}</section>}
createRoot(document.getElementById('root')).render(<App/>);