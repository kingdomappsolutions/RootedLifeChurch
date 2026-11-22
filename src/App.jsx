import React, { useState } from "react"
import {
    Coffee,
    Home,
    Heart,
    MapPin,
    ArrowRight,
    CheckCircle2,
    BookOpen,
    Users,
    Calendar,
    Send,
    Menu,
    X,
} from "lucide-react"
import "./App.css"

// ============================================================================
// EDITABLE CHURCH DATA CONFIGURATION
// Edit any text or details here in VS Code and push to GitHub Pages.
// ============================================================================
const CHURCH_DATA = {
    name: "Rooted Life Church",
    location: "Ennis, Texas",
    contactEmail: "rootedlifechurchtx@gmail.com",
    logoPath: `${import.meta.env.BASE_URL}logo.png`,
    themeVerse: {
        reference: "Colossians 2:6–7",
        text: "Therefore, as you received Christ Jesus the Lord, so walk in him, rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving.",
    },
    mission:
        "Helping people root their lives in Jesus through honest conversations, shared meals, and authentic community across Ennis.",
    values: [
        {
            title: "True Community",
            description:
                "Sharing meals, carrying one another’s burdens, and doing real life side-by-side.",
        },
        {
            title: "Disciple Making & Strong Families",
            description:
                "Investing in marriages, kids, and everyday people growing into followers of Jesus.",
        },
        {
            title: "Growing Through Groups",
            description:
                "Trading rows in a big auditorium for circles in local coffee shops and living rooms.",
        },
        {
            title: "Compassion for People",
            description:
                "Listening well, meeting practical needs, and welcoming everyone with grace—no masks required.",
        },
        {
            title: "Every Member a Minister",
            description:
                "Equipping everyday people to love their neighbors and bring hope to Ennis.",
        },
    ],
    groups: [
        {
            id: "rooted",
            badge: "Start Here • Public Spaces",
            title: "Rooted Groups",
            schedule: "Weekly • 1–2 Hours (Local Coffee Shops)",
            size: "3–4 People",
            description:
                "A casual, 7-week conversation exploring the fundamentals of Christianity and honest questions about life and faith. No church background needed—and your first coffee is on us.",
            perks: [
                "Free coffee for first-time guests",
                "7-week guided look at the life of Jesus in Mark",
                "Zero pressure to pray out loud or have all the answers",
            ],
            cta: "Join a Rooted Group",
        },
        {
            id: "branches",
            badge: "Grow Deeper • Host Homes",
            title: "Branches",
            schedule: "Sundays • 1–2 Hours in Host Homes",
            size: "8–12 People",
            description:
                "Our weekly home-based church communities. We share a meal, open the Bible together, pray for one another, and serve our neighborhoods like family.",
            perks: [
                "Shared meals and genuine, family-style friendships",
                "Interactive, conversational Bible study",
                "Monthly collective Sunday gathering for worship & communion",
            ],
            cta: "Find a Branch",
        },
    ],
}

export default function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        interest: "Rooted Groups",
        message: "",
    })
    const [status, setStatus] = useState("idle") // 'idle' | 'submitting' | 'success' | 'error'

    const scrollToSection = (id) => {
        setMobileMenuOpen(false)
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleSelectGroup = (groupTitle) => {
        setFormState((prev) => ({ ...prev, interest: groupTitle }))
        scrollToSection("connect")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("submitting")

        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${CHURCH_DATA.contactEmail}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        _subject: `Rooted Life Ennis Website: ${formState.interest}`,
                        Name: formState.name,
                        Email: formState.email,
                        Interest: formState.interest,
                        Message: formState.message || "(No message provided)",
                    }),
                },
            )

            if (response.ok) {
                setStatus("success")
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    return (
        <div className="app-shell">
            {/* Header */}
            <header className="site-header">
                <div className="container header-inner">
                    <a
                        href="#top"
                        className="brand-link"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                    >
                        <img
                            src={CHURCH_DATA.logoPath}
                            alt="Rooted Life Church Logo"
                            className="brand-logo-img"
                        />
                        <div className="brand-text">
                            <span className="brand-title">
                                Rooted Life Church
                            </span>
                        </div>
                    </a>

                    <nav className="desktop-nav" aria-label="Primary">
                        <button
                            type="button"
                            onClick={() => scrollToSection("who-we-are")}
                        >
                            Who We Are
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection("groups")}
                        >
                            Rooted & Branches
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => scrollToSection("connect")}
                        >
                            Grab Coffee With Us
                        </button>
                    </nav>

                    <button
                        type="button"
                        className="mobile-menu-toggle"
                        aria-label="Toggle Menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="mobile-nav">
                        <button
                            type="button"
                            onClick={() => scrollToSection("who-we-are")}
                        >
                            Who We Are
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection("groups")}
                        >
                            Rooted & Branches
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => scrollToSection("connect")}
                        >
                            Grab Coffee With Us
                        </button>
                    </div>
                )}
            </header>

            <main id="top">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container hero-grid">
                        <div className="hero-copy">
                            <div className="location-pill">
                                <MapPin size={14} />
                                <span>{CHURCH_DATA.location}</span>
                            </div>
                            <h1>
                                A safe place to plant deep roots and experience
                                real life.
                            </h1>
                            <p className="hero-lead">
                                Whether you’ve never been part of a church, feel
                                burned out by institutional religion, or are
                                carrying a heavy load, you belong here. No hype.
                                No pressure. Just honest conversations, shared
                                meals, and the grace of Jesus.
                            </p>
                            <div className="hero-actions">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => scrollToSection("groups")}
                                >
                                    Explore Groups <ArrowRight size={18} />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => scrollToSection("connect")}
                                >
                                    Say Hello
                                </button>
                            </div>
                        </div>

                        <div className="verse-card">
                            <div className="verse-badge">
                                <BookOpen size={16} />
                                <span>{CHURCH_DATA.themeVerse.reference}</span>
                            </div>
                            <blockquote>
                                “{CHURCH_DATA.themeVerse.text}”
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Who We Are & Core Values */}
                <section id="who-we-are" className="section section-white">
                    <div className="container">
                        <div className="section-header center">
                            <span className="eyebrow">Who We Are</span>
                            <h2>Simple Church. Real Relationships.</h2>
                            <p>{CHURCH_DATA.mission}</p>
                        </div>

                        <div className="values-grid">
                            {CHURCH_DATA.values.map((val) => (
                                <div key={val.title} className="value-card">
                                    <Heart size={20} className="value-icon" />
                                    <h3>{val.title}</h3>
                                    <p>{val.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Two Main Groups: Rooted & Branches */}
                <section id="groups" className="section section-sage">
                    <div className="container">
                        <div className="section-header center">
                            <span className="eyebrow">How We Gather</span>
                            <h2>Two Ways to Get Connected</h2>
                            <p>
                                We don’t start with a big building. We grow
                                through small, welcoming gatherings right here
                                in Ennis.
                            </p>
                        </div>

                        <div className="groups-grid">
                            {CHURCH_DATA.groups.map((group) => (
                                <div key={group.id} className="group-card">
                                    <span className="badge">{group.badge}</span>
                                    <h3>{group.title}</h3>

                                    <div className="group-meta">
                                        <span>
                                            <Calendar size={15} />{" "}
                                            {group.schedule}
                                        </span>
                                        <span>
                                            <Users size={15} /> {group.size}
                                        </span>
                                    </div>

                                    <p className="group-desc">
                                        {group.description}
                                    </p>

                                    <ul className="perks-list">
                                        {group.perks.map((perk) => (
                                            <li key={perk}>
                                                <CheckCircle2
                                                    size={17}
                                                    className="check-icon"
                                                />
                                                <span>{perk}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        type="button"
                                        className="btn btn-primary btn-full"
                                        onClick={() =>
                                            handleSelectGroup(group.title)
                                        }
                                    >
                                        {group.cta} <ArrowRight size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="connect" className="section section-white">
                    <div className="container connect-grid">
                        <div className="connect-copy">
                            <span className="eyebrow">Get In Touch</span>
                            <h2>Let’s Grab a Cup of Coffee</h2>
                            <p>
                                Have a question about Rooted Life Church, want
                                to join an upcoming Rooted Group, or looking for
                                a Sunday Branch in Ennis? Send us a quick note
                                and we’ll reply personally.
                            </p>

                            <div className="contact-perks">
                                <div className="contact-perk-item">
                                    <Coffee size={20} />
                                    <div>
                                        <strong>First Coffee Is On Us</strong>
                                        <span>
                                            Meet at a local Ennis coffee shop—no
                                            strings attached.
                                        </span>
                                    </div>
                                </div>
                                <div className="contact-perk-item">
                                    <Home size={20} />
                                    <div>
                                        <strong>Neighborhood Branches</strong>
                                        <span>
                                            Weekly home gatherings right here in
                                            Ennis.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-card">
                            {status === "success" ? (
                                <div className="form-feedback">
                                    <CheckCircle2
                                        size={44}
                                        className="success-icon"
                                    />
                                    <h3>Message Sent!</h3>
                                    <p>
                                        Thanks for reaching out,{" "}
                                        <b>{formState.name}</b>. Your message
                                        has been sent to our leadership, and
                                        we’ll get in touch with you soon!
                                    </p>
                                    <br />
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setStatus("idle")
                                            setFormState({
                                                name: "",
                                                email: "",
                                                interest: "Rooted Groups",
                                                message: "",
                                            })
                                        }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="contact-form"
                                >
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            value={formState.name}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            value={formState.email}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="interest">
                                            Interested In
                                        </label>
                                        <select
                                            id="interest"
                                            value={formState.interest}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    interest: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="Rooted Groups">
                                                Rooted Group (Coffee Shop)
                                            </option>
                                            <option value="Branches">
                                                Branches (Sunday Home Group)
                                            </option>
                                            <option value="Just Saying Hello">
                                                Just Saying Hello
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="3"
                                            placeholder="Questions, best days to meet, or anything you'd like to share..."
                                            value={formState.message}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    message: e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="error-text">
                                            Something went wrong sending your
                                            message. You can also email us
                                            directly at{" "}
                                            <a
                                                href={`mailto:${CHURCH_DATA.contactEmail}`}
                                            >
                                                {CHURCH_DATA.contactEmail}
                                            </a>
                                            .
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-full"
                                        disabled={status === "submitting"}
                                    >
                                        {status === "submitting"
                                            ? "Sending..."
                                            : "Send Message"}{" "}
                                        <Send size={16} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="site-footer">
                <div className="container footer-inner">
                    <div className="footer-brand">
                        <img
                            src={CHURCH_DATA.logoPath}
                            alt="Rooted Life Church Logo"
                            className="footer-logo-img"
                        />
                        <div>
                            <strong>Rooted Life Church</strong>
                            <span>
                                Ennis, Texas • {CHURCH_DATA.contactEmail}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <span className="copyright">
                            © {new Date().getFullYear()} Rooted Life Church
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
