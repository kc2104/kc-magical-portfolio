# BUILD PROMPT — KC: Creative Alchemist Portfolio

Build a fully functional, premium, cinematic portfolio website for **Krunal Chauhan (KC)**.

The site should feel like stepping into a mysterious magical academy — think enchanted castle, ancient library, spellbook, candlelit corridor, astronomy tower, parchment and magical particles — reimagined as an **original** fantasy-academy identity, not a copy of any existing franchise.

**Hard constraint:** No Harry Potter/Hogwarts logos, characters, copyrighted artwork, movie footage, house names, or other trademarked assets, in any form. Every visual, name, and symbol must be original.

---

## 1. Brand Identity

| | |
|---|---|
| **Name** | KC — Creative Alchemist |
| **Positioning** | Graphic Designer • Content Creator • Video Editor • AI Prompt Maker |
| **Tagline** | "Where Creativity Becomes Magic." |
| **Micro-tagline** | Design. Motion. Story. Magic. |

**Visual personality:** dark, cinematic, mysterious, premium, elegant, editorial, immersive, slightly gothic — ancient magic meets modern technology.

The site should read as an interactive cinematic experience, not a template.

---

## 2. Color System

| Role | Hex |
|---|---|
| Primary background | `#090B13` |
| Secondary background | `#111522` |
| Deep navy | `#151B2E` |
| Magical purple | `#5B3FA8` |
| Electric violet | `#8A63D2` |
| Antique gold | `#D4AF37` |
| Warm parchment | `#E8D7B5` |
| White | `#F5F3EA` |
| Muted text | `#A9A8B3` |

Reserve gold for key highlights and magical interactions. Keep gradients minimal — the overall feel should stay sophisticated, not busy.

---

## 3. Typography

- **Display / Headings:** a cinematic serif — Cinzel, Cormorant Garamond, or Playfair Display
- **Body / UI:** a clean modern sans — Inter, Manrope, or DM Sans

| Level | Treatment |
|---|---|
| H1 | Large cinematic serif |
| H2 | Elegant serif |
| Body | Clean sans-serif |
| Navigation | Small uppercase, letter-spaced |

---

## 4. Loading Screen

1. Black screen.
2. A single glowing golden particle appears center-screen.
3. Particles gather and form an original magical monogram for "KC."
4. The monogram resolves into wordmark **KC** with subtitle **CREATIVE ALCHEMIST**.
5. After ~2–3 seconds, the screen dissolves into particles and transitions into the homepage.

Include a magical sound toggle — audio must never autoplay without user interaction.

---

## 5. Homepage — "The Great Hall"

**Atmosphere:** dark castle interior, tall arched windows, floating candles, soft fog, moonlight, drifting dust, ancient books, glowing magical particles. Original architecture only — nothing recognizable as Hogwarts.

**Content:**
- Hero name: **KRUNAL CHAUHAN**
- Label: KC — CREATIVE ALCHEMIST
- Statement: **I Turn Ideas Into Visual Experiences.**
- Supporting line: Graphic Designer · Content Creator · Video Editor · AI Prompt Maker
- CTAs: **ENTER MY PORTFOLIO** / **CONTACT ME**

**Mouse interaction:** candles flicker subtly, particles drift toward the cursor, background parallax shifts, light rays and dust react to movement.

**"Enter My Portfolio" transition:** screen darkens → a golden spell-ring appears and expands → particles rush toward the viewer → cut to the portfolio. Smooth and cinematic, not sluggish.

---

## 6. Navigation

**Items:** Home · About · Work · Services · Experience · Skills · Contact, plus a small KC monogram on the left.

- **Desktop:** floating glass/dark nav bar.
- **Mobile:** parchment-styled hamburger menu; opening it dims the background and reveals items one by one with a light particle animation.

---

## 7. About — "The Wizard Behind the Work"

**Bio copy:**
> I'm Krunal Chauhan — a creative professional working across graphic design, social media, video editing, branding, and AI-powered creative workflows. I combine design thinking, visual storytelling, and emerging AI tools to turn ideas into engaging digital experiences.

**Portrait treatment:** cinematic frame with floating particles, soft golden rim light, subtle animated border, gentle parallax.

**Role tags:** Creative Designer · Content Creator · Video Editor · AI Prompt Maker · Social Media Specialist

---

## 8. Portfolio — "The Archives"

**Subtitle:** A collection of visual experiments, campaigns, and creative work.

**Filter categories:** All · Branding · Graphic Design · Social Media · Video · Motion · AI Creative

Present projects as magical archive cards (think ancient tome/artifact styling). Each card shows: image, title, category, short description, year — and links to a full project page.

---

## 9. Project Detail Page

**Structure:** Title → Category → Hero image/video → Overview → Challenge → Creative Direction → Process → Outcome → Gallery → Behind the Scenes → Tools Used → Related Projects → CTA (**Start a Project With Me**).

**Reveal styles (use sparingly, mix across projects):** curtain reveal, blur-to-sharp, mask animation, particle dissolve, horizontal slide.

---

## 10. Services — "The Spellbook"

**Subtitle:** Creative services for brands that want to stand out.

| Service | Description |
|---|---|
| **Graphic Design** | Social creatives, posters, brochures, marketing materials, campaign visuals |
| **Branding** | Visual identity, logo systems, brand guidelines, creative direction |
| **Social Media** | Content strategy, creative planning, campaign design, social management |
| **Video Editing** | Reels, promotional videos, cinematic edits, short-form content |
| **Motion Graphics** | Animated graphics, logo animation, transitions, promotional motion |
| **AI Creative** | AI-assisted concepts, image generation, creative direction, prompt development |

Cards open with an elegant page-turn animation.

---

## 11. Experience — "The Journey"

A vertical timeline styled like an enchanted corridor, with a soft golden connecting line. Entries reveal on scroll and include: Role, Company, Period, Responsibilities, Creative Achievements, Skills Used.

---

## 12. Skills — "The Arsenal"

Present skills as magical object/cards: Adobe Illustrator, Adobe Premiere Pro, Adobe InDesign, Video Editing, Graphic Design, Branding, Social Media Marketing, Content Creation, AI Creative Tools, Prompt Engineering, Campaign Design, Visual Storytelling.

**Hover state:** card glow, subtle particles, short description fade-in.

---

## 13. Social Showcase — "The Social Chronicles"

Display selected campaigns: Instagram posts, carousels, Reels, Stories, campaign concepts, before/after creatives. Include a prominent Instagram button linking to the real profile URL (supplied at implementation — do not fabricate a placeholder link).

---

## 14. Contact — "Send a Message"

**Atmosphere:** ancient study / observatory.

**Heading:** LET'S CREATE SOMETHING MAGICAL.
**Body:** Have an idea, campaign, or project in mind? Let's turn it into something people remember.

**Contact details** (real values supplied at implementation): Instagram, LinkedIn, phone (`tel:` link), email (`mailto:` link), portfolio. All social links open in new tabs.

### Contact Form
- **Fields:** Name, Email, Phone, Project Type, Budget, Message
- **Button:** SEND MESSAGE, with a magical envelope animation on submit
- **Success message:** "Your message has entered the archive."
- **Requirements:** real client- and server-side validation, clear error states, and an actual working backend/email integration. Never simulate a successful send if the integration isn't configured — show an honest error instead.

---

## 15. Page Transitions

Use sparingly, and keep every transition to **500–1000ms** so it never slows navigation down:

- **Portal:** golden circular portal expands
- **Book:** page folds into an ancient book, closes, reopens on the new page
- **Particle:** page dissolves into glowing particles
- **Curtain:** dark curtains close and reopen on the next page
- **Smoke:** a light fog sweep across the screen

---

## 16. Scroll & Micro-interactions

**Scroll:** progressive reveals, subtle image parallax, drifting particles, cards entering with depth. Keep it smooth — avoid heavy scroll-jacking; the site must stay easily navigable.

**Micro-interactions:**
- Buttons: magical glow on hover
- Cursor: small glowing dot by default, expanding into a soft ring over interactive elements
- Portfolio cards: slight 3D tilt
- Images: subtle zoom on hover
- Links: gold underline animation

**Magic Mode (optional):** a wand/star toggle in the nav that adds extra particles, a cursor particle trail, visible background stars, and a stronger gold glow. Must be clearly toggleable off and must respect `prefers-reduced-motion`.

---

## 17. Responsive Design

Build dedicated compositions per breakpoint (desktop, laptop, tablet, mobile) rather than scaling the desktop layout down. On mobile: simplified nav, fewer particles, reduced parallax, faster transitions, optimized images, and large touch targets.

---

## 18. Performance & Accessibility

- Lazy-load portfolio images and videos
- Optimized WebP/AVIF assets, compressed media
- Avoid unnecessarily heavy 3D scenes; prefer CSS transforms over expensive properties
- Target 60fps on modern desktop hardware
- Full `prefers-reduced-motion` support: disable particle trails, intense parallax, 3D tilt, and complex transitions in favor of simple fades

---

## 19. SEO

- **Title:** Krunal Chauhan | Creative Designer & Content Creator
- **Meta description:** Krunal Chauhan is a graphic designer, content creator, video editor, social media specialist, and AI prompt maker creating visual experiences for brands and businesses.
- Include Open Graph metadata, Twitter/X card metadata, a favicon, and structured data where relevant.

---

## 20. Site Structure

```
/
/about
/work
/work/project-name
/services
/experience
/skills
/social
/contact
```

**404 page:** styled as an abandoned magical corridor.
- Heading: THE PAGE HAS VANISHED.
- Button: RETURN TO THE ARCHIVES

---

## 21. Footer

KC logo · "Where Creativity Becomes Magic." · Quick links (Home, About, Work, Services, Contact) · Social links (Instagram, LinkedIn, Email, Phone) · A small ambient particle animation · © 2026 Krunal Chauhan. All rights reserved.

---

## 22. Overall Direction

The guiding image: an ancient creative academy belonging to a modern designer — old library meets digital portfolio, spellbook meets case studies, magical portal meets page transition. The result should read as **a world-class creative portfolio hidden inside a magical universe** — never as a fan site.

---

## 23. Functional Requirements (must all work, no placeholders)

- [ ] Working navigation and routing
- [ ] Working portfolio filtering
- [ ] Working individual project pages
- [ ] Working, validated contact form with real backend/email integration
- [ ] Working email, phone, Instagram, and LinkedIn links
- [ ] Responsive nav and mobile menu
- [ ] Loading screen and page transitions
- [ ] Smooth scrolling
- [ ] Accessibility and reduced-motion support
- [ ] SEO metadata
- [ ] 404 page

No decorative buttons or dead links — every interactive element must do something real.

---

## 24. Content Architecture

Store portfolio projects as structured data (CMS-like objects) so new work can be added without redesigning the site. Each project entry should hold: title, image, category, description, tools, client, year, gallery, video, external link.

---

## 25. End-to-End User Journey

Loading → magical monogram forms → castle atmosphere → "Krunal Chauhan" → "I Turn Ideas Into Visual Experiences." → Enter Portfolio → portal transition → The Archives → explore projects → open a project → cinematic case study → Services → Experience → Skills → Social → Contact → "Let's Create Something Magical." → send message → magical confirmation.

The finished site should feel cinematic, premium, mysterious, and memorable — while staying credible enough for recruiters, agencies, clients, and brands to take seriously.
