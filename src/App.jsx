import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, MousePointer2, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './App.css'

const projects = [
  { number: '01', title: 'School Management System', kind: 'Full-stack platform', description: 'A bilingual academic operations system that replaced spreadsheets with cumulative grading, role-based workflows, parent access, analytics, and bulk PDF report cards.', stack: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'React', 'Puppeteer'], accent: 'violet' },
  { number: '02', title: 'CDS Election Management', kind: 'Civic technology', description: 'A deployed election platform used in an actual NYSC election, built around voter verification, batch restrictions, one-time ballots, and live results.', stack: ['Next.js 14', 'MongoDB Atlas', 'JWT', 'REST API'], accent: 'lime' },
  { number: '03', title: 'InvoiceNaija', kind: 'Product engineering', description: 'A practical invoicing workspace for Nigerian freelancers with authentication, invoice CRUD, PDF generation, password recovery, and a clean client experience.', stack: ['React', 'Vite', 'Tailwind', 'Express', 'PDFKit'], accent: 'orange' },
]

const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Vite', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Three.js']

function Orb() {
  const group = useRef()
  const knot = useRef()
  useFrame((state, delta) => {
    if (!group.current || !knot.current) return
    group.current.rotation.y += delta * 0.16
    knot.current.rotation.x += delta * 0.22
    knot.current.rotation.z += delta * 0.12
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.12
  })
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.55}>
      <group ref={group} scale={1.28}>
        <mesh ref={knot}>
          <torusKnotGeometry args={[1.12, 0.28, 160, 32, 2, 3]} />
          <meshPhysicalMaterial color="#255cff" roughness={0.14} metalness={0.32} clearcoat={1} clearcoatRoughness={0.12} iridescence={0.45} iridescenceIOR={1.4} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.42}>
          <torusGeometry args={[1.18, 0.018, 12, 96]} />
          <meshBasicMaterial color="#ff7657" transparent opacity={0.9} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]} scale={1.58}>
          <torusGeometry args={[1.18, 0.012, 12, 96]} />
          <meshBasicMaterial color="#9bb7ff" transparent opacity={0.65} />
        </mesh>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 38 }} dpr={[1, 1.6]}>
      <ambientLight intensity={1.2} />
      <pointLight position={[3, 3, 4]} intensity={18} color="#9c7cff" />
      <pointLight position={[-3, -2, 2]} intensity={12} color="#c7ff59" />
      <Stars radius={10} depth={8} count={900} factor={2.2} saturation={0} fade speed={0.5} />
      <Orb />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.7} />
    </Canvas>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="site-shell">
      <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <a className="wordmark" href="#top">JL<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">Selected work</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:lihammedjafar@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for focused collaborations</p>
          <h1>Interfaces with <em>intention.</em><br />Systems that <strong>scale.</strong></h1>
          <p className="hero-lede">I&apos;m Jafar Li-Hammed — a frontend and full-stack JavaScript developer building expressive interfaces, dependable APIs, and digital products that make complex work feel simple.</p>
          <div className="hero-actions"><a className="primary-button" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="text-link" href="./Main.pdf" download>Download résumé <ArrowUpRight size={15} /></a></div>
          <div className="hero-meta"><span><MapPin size={14} /> Lagos, Nigeria</span><span>Open to remote</span></div>
        </div>
        <div className="hero-scene" aria-label="Interactive 3D torus knot sculpture"><Scene /><div className="scene-caption"><MousePointer2 size={14} /> Drag to explore</div><div className="scene-label">Three.js / 01</div></div>
        <a className="scroll-cue" href="#about"><span>Scroll to discover</span><ArrowDownRight size={18} /></a>
      </section>

      <section className="intro-section section-wrap" id="about">
        <div className="section-marker">01 / Profile</div>
        <div className="intro-content"><p className="section-kicker">The short version</p><h2>Frontend craft,<br /><span>full-stack thinking.</span></h2><p className="intro-text">From a bilingual school management system to an election platform used by real voters, I turn ambiguous requirements into clear, reliable software. I care about the details people feel: the motion that guides them, the feedback that reassures them, and the architecture that keeps the product healthy after launch.</p><a className="text-link" href="#contact">Work with me <ArrowUpRight size={15} /></a></div>
        <div className="profile-stat"><span>Based in</span><strong>Lagos, NG</strong><span>Experience</span><strong>5+ years</strong><span>Focus</span><strong>Web &amp; data systems</strong></div>
      </section>

      <section className="skills-section section-wrap"><div className="section-marker">02 / Toolkit</div><div className="skills-content"><p className="section-kicker">Built for the modern web</p><h2>Tools I use to make<br /><span>ideas tangible.</span></h2><div className="skill-cloud">{skills.map((skill, index) => <span key={skill} style={{ '--i': index }}>{skill}</span>)}</div></div></section>

      <section className="work-section section-wrap" id="work"><div className="section-marker">03 / Selected work</div><div className="work-content"><div className="work-heading"><div><p className="section-kicker">Proof, not promises</p><h2>Selected <span>projects.</span></h2></div><p>Real products, real constraints, shipped for real people.</p></div><div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><p className="project-kind">{project.kind}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><ArrowUpRight className="project-arrow" size={22} /></article>)}</div></div></section>

      <section className="contact-section section-wrap" id="contact"><div className="section-marker">04 / Contact</div><div className="contact-content"><p className="section-kicker"><Sparkles size={15} /> Have a good brief?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><a className="contact-email" href="mailto:lihammedjafar@gmail.com">lihammedjafar@gmail.com <ArrowUpRight size={22} /></a><div className="socials"><a href="https://github.com/Jafarscript" target="_blank" rel="noreferrer"><FaGithub size={17} /> GitHub</a><a href="https://linkedin.com/in/jafar-li-hammed" target="_blank" rel="noreferrer"><FaLinkedinIn size={17} /> LinkedIn</a><a href="tel:+2347069013967"><Mail size={17} /> +234 706 901 3967</a></div></div></section>
      <footer><span>© 2026 Jafar Li-Hammed</span><span>Designed, developed &amp; animated with care.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

export default App
