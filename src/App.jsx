import React, { useState } from "react"
import {
    Coffee,
    Home,
    Users,
    Heart,
    Calendar,
    MapPin,
    ArrowRight,
    CheckCircle2,
    BookOpen,
    Sparkles,
    Menu,
    X,
    ChevronDown,
    Send,
    Compass,
    ShieldCheck,
} from "lucide-react"
import "./App.css"

// ============================================================================
// EDITABLE CHURCH DATA CONFIGURATION
// Update any text, schedules, or details here in VS Code and push to GitHub.
// ============================================================================
const CHURCH_DATA = {
    name: "Rooted Life Church",
    shortName: "Rooted Life",
    location: "Ennis & Ellis County, Texas",
    logoPath: `${import.meta.env.BASE_URL}logo.png`,
    themeVerse: {
        reference: "Colossians 2:6–7",
        text: "Therefore, as you received Christ Jesus the Lord, so walk in him, rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving.",
    },
    mission:
        "Our mission is to help people root their lives in Jesus. We INVITE people into genuine belonging, INVEST in their spiritual development through life-on-life discipleship, and IGNITE a movement of hope that multiplies across Ellis County.",
    vision: "Our vision is to see a growing network of relational communities across Ellis County where those who are religiously unaffiliated, weary of institutional religion, or struggling with the hardships of life find a place to belong, a family to share life with, and a soul renewed by the grace of Jesus.",
    pillars: [
        {
            title: "INVITE",
            subtitle: "Magnifying the Savior",
            description:
                "We invite the weary and searching to see a real, unpolished picture of Jesus—stripping away religious performance, consumerism, and institutional noise in an environment of raw authenticity and safety.",
        },
        {
            title: "INVEST",
            subtitle: "Mobilizing the Members",
            description:
                "No one is meant to be a bystander. From day one, we invite people out of isolation and into a spiritual family—healing hurts, developing faith, and mobilizing unique, God-given gifts to serve our neighbors.",
        },
        {
            title: "IGNITE",
            subtitle: "Multiplying Disciples",
            description:
                "We measure health not by how large a room gets, but by how many healthy disciples are raised up. We equip everyday people to lead and multiply relational communities of hope across every neighborhood in Ellis County.",
        },
    ],
    pathways: [
        {
            id: "rooted",
            badge: "Step 1 • Public Spaces",
            title: "Rooted Groups",
            schedule: "Weekly • 1–2 Hours (Saturdays at Local Coffee Shops)",
            size: "3–4 People",
            summary:
                "Our main entry point and open conversation space. Meet at a local business or coffee shop to explore the fundamentals of Christianity and honest questions about life and faith—no church background required.",
            highlights: [
                "Free coffee for first-time guests",
                "7-week guided conversations through the Gospel of Mark",
                "Safe, low-pressure space for honest questions and doubts",
                "Designed for seekers, skeptics, and anyone exploring faith",
            ],
            ctaText: "Join a Rooted Group",
        },
        {
            id: "branches",
            badge: "Step 2 • Host Homes",
            title: "Branches",
            schedule: "Sundays • 1–2 Hours in Host Homes",
            size: "8–12 People",
            summary:
                "Our primary home-based discipleship communities modeled after Acts 2:42–47. Share meals, build deep friendships, study Scripture together, pray for one another, and serve our local community side-by-side.",
            highlights: [
                "Shared meals, genuine fellowship, and life-on-life care",
                "Interactive, inductive Bible study (no heavy workbooks)",
                "Confidential, supportive environment for real-life accountability",
                "Monthly collective Sunday gatherings of Branches for worship & communion",
            ],
            ctaText: "Find a Branch",
        },
        {
            id: "cultivate",
            badge: "Step 3 • Leadership & Multiplication",
            title: "Cultivate Groups",
            schedule: "Weekly • 1–2 Hours (By Invitation)",
            size: "Up to 3 People",
            summary:
                "Intimate leadership and disciple-making groups designed to equip emerging leaders to facilitate new Rooted Groups, host Branches, and help plant new relational churches across Ellis County.",
            highlights: [
                "High-trust accountability and rotating facilitation practice",
                "Focused on spiritual maturity and caring for people well",
                "Equips everyday believers to multiply healthy groups",
            ],
            ctaText: "Learn About Leadership",
        },
    ],
    values: [
        {
            title: "True Community",
            scripture: "Acts 2:42–47 • Galatians 6:2",
            description:
                "Gathering together, sharing meals, carrying one another’s burdens, and doing real life side-by-side.",
        },
        {
            title: "Disciple Making & Strong Families",
            scripture: "2 Timothy 2:2 • Ephesians 5:22–33",
            description:
                "Leading by example, investing in spouses and children, and helping everyday people grow into mature followers of Jesus.",
        },
        {
            title: "Growing Through Groups",
            scripture: "Colossians 1:28–29 • Acts 2:42–47",
            description:
                "Prioritizing intimate, reproducible home and coffee-shop gatherings over massive institutional programs.",
        },
        {
            title: "Compassion for People",
            scripture: "Matthew 9:35–38 • John 4:1–30",
            description:
                "Listening well, meeting practical needs, and treating every neighbor with dignity and grace because people matter to God.",
        },
        {
            title: "Every Member a Minister",
            scripture: "Ephesians 4:11–16 • 2 Timothy 4:2",
            description:
                "Empowering every believer to use their gifts, bless their neighbors, and share the hope of Jesus in everyday life.",
        },
    ],
    outreachProjects: [
        {
            title: "New Mom & Crisis Pregnancy Care",
            detail: "Providing first-week meals, baby gift baskets, and compassionate support for new mothers and women facing unplanned pregnancies.",
        },
        {
            title: "Homeless & Shelter Support",
            detail: "Supplying sacked lunches, hygiene kits, blankets, hats, and volunteer hours at local shelters and food pantries.",
        },
        {
            title: "Local School Partnerships",
            detail: "Adopting local classrooms in Ellis County, providing teacher supplies, and distributing backpacks filled with school gear.",
        },
        {
            title: "Neighbors, Widows & Single Moms",
            detail: "Practical home repairs for widows and low-income families, Mother’s Day dinners, and community park cookouts.",
        },
    ],
    annualCalendar: [
        {
            month: "January",
            focus: "Shelter support & winter blankets/hats drive",
        },
        {
            month: "March / April",
            focus: "Easter Impact Week & neighborhood service",
        },
        { month: "May", focus: "Mother’s Day honor dinner for moms & widows" },
        {
            month: "August",
            focus: "Back-to-School Impact Week & backpack giveaway",
        },
        {
            month: "September",
            focus: "Local Food Pantry volunteer & supply drive",
        },
        {
            month: "October",
            focus: "Fall neighborhood cleanups & homeless meal outreach",
        },
        { month: "November", focus: "Community Thanksgiving celebration" },
        {
            month: "December",
            focus: "Christmas toy drive for children in need",
        },
    ],
    faqs: [
        {
            question:
                "Do I need a church background or Bible knowledge to attend?",
            answer: "Not at all. Rooted Groups are built specifically for people who are exploring faith, asking tough questions, or returning after stepping away from church. You will never be put on the spot to pray out loud or read if you prefer just to listen.",
        },
        {
            question:
                "What is the difference between a Rooted Group and a Branch?",
            answer: "Rooted Groups are short, 7-week conversational gatherings in local coffee shops focused on exploring the core message of Jesus. Branches are ongoing weekly gatherings in host homes (8–12 people) where we share a meal, study Scripture together, and support each other like family.",
        },
        {
            question: "Do you meet in a traditional church building?",
            answer: "We are a simple, relational church network. Most of our life happens in local coffee shops and host homes across Ennis and Ellis County, with all Branches coming together once a month on Sunday for collective worship, communion, and celebration.",
        },
        {
            question: "What about kids and families?",
            answer: "Strong families are one of our core values. Many of our Branches are family-friendly and grouped around shared life stages and neighborhoods so kids and parents can grow together.",
        },
    ],
}

export default function App() {
    const [activeTab, setActiveTab] = useState("home")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openFaq, setOpenFaq] = useState(0)
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        city: "Ennis",
        interest: "Rooted Group (Coffee Shop)",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const navigateTo = (tab) => {
        setActiveTab(tab)
        setMobileMenuOpen(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "Who We Are" },
        { id: "groups", label: "Groups & Branches" },
        { id: "outreach", label: "Serve Ellis County" },
        { id: "connect", label: "Get Connected" },
    ]

    return (
        <div className="app-shell">
            {/* Top Navigation */}
            <header className="site-header">
                <div className="container header-inner">
                    <button
                        type="button"
                        className="brand-button"
                        onClick={() => navigateTo("home")}
                    >
                        <img
                            src={CHURCH_DATA.logoPath}
                            alt="Rooted Life Church Logo"
                            className="brand-logo-img"
                        />
                        <div className="brand-text">
                            <span className="brand-title">Rooted Life</span>
                            <span className="brand-subtitle">
                                CHURCH • ELLIS COUNTY
                            </span>
                        </div>
                    </button>

                    <nav className="desktop-nav" aria-label="Main Navigation">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`nav-link ${activeTab === item.id ? "active" : ""}`}
                                onClick={() => navigateTo(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => navigateTo("connect")}
                        >
                            Grab Coffee With Us
                        </button>
                    </nav>

                    <button
                        type="button"
                        className="mobile-menu-toggle"
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="mobile-nav">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`mobile-nav-link ${activeTab === item.id ? "active" : ""}`}
                                onClick={() => navigateTo(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            type="button"
                            className="btn btn-primary mobile-cta"
                            onClick={() => navigateTo("connect")}
                        >
                            Grab Coffee With Us
                        </button>
                    </div>
                )}
            </header>

            {/* Main Content Area */}
            <main className="main-content">
                {/* ================= HOME VIEW ================= */}
                {activeTab === "home" && (
                    <>
                        <section className="hero-section">
                            <div className="container hero-grid">
                                <div className="hero-copy">
                                    <div className="location-pill">
                                        <MapPin size={15} />
                                        <span>
                                            Planting in Ennis & Ellis County,
                                            Texas
                                        </span>
                                    </div>
                                    <h1>
                                        A safe place to plant deep roots and
                                        experience real life.
                                    </h1>
                                    <p className="hero-lead">
                                        Whether you have never been part of a
                                        church, feel burned out by institutional
                                        religion, or are walking through a hard
                                        season, you belong here. No hype. No
                                        pressure. Just honest conversations,
                                        shared meals, and the grace of Jesus.
                                    </p>
                                    <div className="hero-actions">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => navigateTo("groups")}
                                        >
                                            Explore Rooted Groups{" "}
                                            <ArrowRight size={18} />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() => navigateTo("about")}
                                        >
                                            Our Story & Vision
                                        </button>
                                    </div>
                                </div>

                                <div className="hero-card">
                                    <div className="verse-badge">
                                        <BookOpen size={16} />
                                        <span>
                                            {CHURCH_DATA.themeVerse.reference}
                                        </span>
                                    </div>
                                    <blockquote>
                                        “{CHURCH_DATA.themeVerse.text}”
                                    </blockquote>
                                    <div className="hero-card-divider" />
                                    <div className="hero-card-stats">
                                        <div>
                                            <strong>Coffee Shops</strong>
                                            <span>7-Week Rooted Groups</span>
                                        </div>
                                        <div>
                                            <strong>Host Homes</strong>
                                            <span>Weekly Sunday Branches</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Who This Is For */}
                        <section className="section section-alt">
                            <div className="container">
                                <div className="section-header center">
                                    <span className="eyebrow">
                                        A Different Kind of Church
                                    </span>
                                    <h2>
                                        Built for Real People, Not Religious
                                        Performance
                                    </h2>
                                    <p>
                                        We are intentionally forming a simple,
                                        relational church family in Ellis County
                                        for neighbors from every background.
                                    </p>
                                </div>

                                <div className="cards-grid three-col">
                                    <div className="info-card">
                                        <div className="icon-box sage">
                                            <Compass size={22} />
                                        </div>
                                        <h3>Curious & Unaffiliated</h3>
                                        <p>
                                            Never grew up in church or have
                                            honest doubts about Christianity?
                                            Ask real questions over free coffee
                                            with zero awkward pressure.
                                        </p>
                                    </div>

                                    <div className="info-card">
                                        <div className="icon-box slate">
                                            <ShieldCheck size={22} />
                                        </div>
                                        <h3>Weary of Church Culture</h3>
                                        <p>
                                            Tired of stages, smoke machines, and
                                            consumer religion? Rediscover
                                            authentic faith centered around
                                            living-room gatherings and real
                                            friendships.
                                        </p>
                                    </div>

                                    <div className="info-card">
                                        <div className="icon-box warm">
                                            <Heart size={22} />
                                        </div>
                                        <h3>Carrying Heavy Burdens</h3>
                                        <p>
                                            Walking through stress, grief, or
                                            life transitions? You don’t have to
                                            pretend to have it all together to
                                            be welcomed and loved here.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3 Pillars Preview */}
                        <section className="section">
                            <div className="container">
                                <div className="section-header center">
                                    <span className="eyebrow">Our Rhythm</span>
                                    <h2>Invite. Invest. Ignite.</h2>
                                    <p>{CHURCH_DATA.mission}</p>
                                </div>

                                <div className="cards-grid three-col">
                                    {CHURCH_DATA.pillars.map((pillar, idx) => (
                                        <div
                                            key={pillar.title}
                                            className="pillar-card"
                                        >
                                            <span className="pillar-number">
                                                0{idx + 1}
                                            </span>
                                            <h3>{pillar.title}</h3>
                                            <h4>{pillar.subtitle}</h4>
                                            <p>{pillar.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Pathway Snapshot */}
                        <section className="section section-sage-tint">
                            <div className="container">
                                <div className="section-header center">
                                    <span className="eyebrow">
                                        How We Gather
                                    </span>
                                    <h2>Three Simple Environments</h2>
                                    <p>
                                        We trade rows in a giant auditorium for
                                        circles in coffee shops and living rooms
                                        across Ellis County.
                                    </p>
                                </div>

                                <div className="cards-grid three-col">
                                    {CHURCH_DATA.pathways.map((step) => (
                                        <div
                                            key={step.id}
                                            className="pathway-card"
                                        >
                                            <span className="badge">
                                                {step.badge}
                                            </span>
                                            <h3>{step.title}</h3>
                                            <p className="pathway-meta">
                                                {step.schedule}
                                            </p>
                                            <p>{step.summary}</p>
                                            <button
                                                type="button"
                                                className="text-link"
                                                onClick={() =>
                                                    navigateTo("groups")
                                                }
                                            >
                                                See how it works{" "}
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= ABOUT / WHO WE ARE VIEW ================= */}
                {activeTab === "about" && (
                    <section className="section">
                        <div className="container">
                            <div className="section-header">
                                <span className="eyebrow">Who We Are</span>
                                <h1>Rooted in Jesus. Growing in Community.</h1>
                                <p className="lead-text">
                                    {CHURCH_DATA.vision}
                                </p>
                            </div>

                            <div className="mission-banner">
                                <div>
                                    <span className="eyebrow light">
                                        Our Core Mission
                                    </span>
                                    <p>{CHURCH_DATA.mission}</p>
                                </div>
                            </div>

                            <div className="section-subblock">
                                <h2>Our Core Values</h2>
                                <p className="sub-desc">
                                    These five convictions shape how we treat
                                    one another, raise our families, and love
                                    our neighbors in Ennis and across Ellis
                                    County.
                                </p>

                                <div className="values-list">
                                    {CHURCH_DATA.values.map((val) => (
                                        <div
                                            key={val.title}
                                            className="value-row"
                                        >
                                            <div className="value-title-col">
                                                <h3>{val.title}</h3>
                                                <span className="scripture-tag">
                                                    {val.scripture}
                                                </span>
                                            </div>
                                            <p>{val.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cta-box">
                                <div>
                                    <h3>Want to learn more over coffee?</h3>
                                    <p>
                                        We’d love to hear your story and answer
                                        any questions you have about Rooted Life
                                        Church.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => navigateTo("connect")}
                                >
                                    Connect With Us
                                </button>
                            </div>
                        </div>
                    </section>
                )}

                {/* ================= GROUPS & BRANCHES VIEW ================= */}
                {activeTab === "groups" && (
                    <section className="section">
                        <div className="container">
                            <div className="section-header">
                                <span className="eyebrow">
                                    Discipleship & Community
                                </span>
                                <h1>
                                    From Coffee Shop Conversations to Home
                                    Family
                                </h1>
                                <p className="lead-text">
                                    Instead of building a large institutional
                                    building first, we grow organically through
                                    small, welcoming gatherings where everyone
                                    is known by name.
                                </p>
                            </div>

                            <div className="pathway-detail-stack">
                                {CHURCH_DATA.pathways.map((item) => (
                                    <div key={item.id} className="detail-panel">
                                        <div className="detail-header">
                                            <div>
                                                <span className="badge">
                                                    {item.badge}
                                                </span>
                                                <h2>{item.title}</h2>
                                            </div>
                                            <div className="detail-pills">
                                                <span>
                                                    <Calendar size={15} />{" "}
                                                    {item.schedule}
                                                </span>
                                                <span>
                                                    <Users size={15} />{" "}
                                                    {item.size}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="detail-summary">
                                            {item.summary}
                                        </p>

                                        <div className="highlights-grid">
                                            {item.highlights.map((point) => (
                                                <div
                                                    key={point}
                                                    className="highlight-item"
                                                >
                                                    <CheckCircle2
                                                        size={18}
                                                        className="check-icon"
                                                    />
                                                    <span>{point}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="detail-footer">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    setFormState((prev) => ({
                                                        ...prev,
                                                        interest: item.title,
                                                    }))
                                                    navigateTo("connect")
                                                }}
                                            >
                                                {item.ctaText}{" "}
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Monthly Gathering Callout */}
                            <div className="monthly-callout">
                                <Sparkles size={28} className="callout-icon" />
                                <div>
                                    <h3>
                                        Monthly Collective Sunday Gatherings
                                    </h3>
                                    <p>
                                        Once a month on Sunday, all of our home
                                        Branches come together in one room to
                                        share a meal, worship together,
                                        celebrate baptisms, take communion, and
                                        hear stories of what God is doing across
                                        Ellis County.
                                    </p>
                                </div>
                            </div>

                            {/* FAQ Accordion */}
                            <div className="faq-section">
                                <h2>Frequently Asked Questions</h2>
                                <div className="faq-list">
                                    {CHURCH_DATA.faqs.map((faq, idx) => {
                                        const isOpen = openFaq === idx
                                        return (
                                            <div
                                                key={faq.question}
                                                className="faq-item"
                                            >
                                                <button
                                                    type="button"
                                                    className="faq-question"
                                                    onClick={() =>
                                                        setOpenFaq(
                                                            isOpen ? -1 : idx,
                                                        )
                                                    }
                                                    aria-expanded={isOpen}
                                                >
                                                    <span>{faq.question}</span>
                                                    <ChevronDown
                                                        size={20}
                                                        className={`chevron ${isOpen ? "rotated" : ""}`}
                                                    />
                                                </button>
                                                {isOpen && (
                                                    <div className="faq-answer">
                                                        {faq.answer}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ================= OUTREACH / SERVE VIEW ================= */}
                {activeTab === "outreach" && (
                    <section className="section">
                        <div className="container">
                            <div className="section-header">
                                <span className="eyebrow">
                                    Love Our Neighbors
                                </span>
                                <h1>Serving Ennis & Ellis County Together</h1>
                                <p className="lead-text">
                                    We believe the church exists to bless its
                                    city. Every Branch and Rooted Group actively
                                    looks for practical ways to care for
                                    families, schools, and neighbors in need.
                                </p>
                            </div>

                            <div className="cards-grid two-col">
                                {CHURCH_DATA.outreachProjects.map((project) => (
                                    <div
                                        key={project.title}
                                        className="info-card"
                                    >
                                        <h3>{project.title}</h3>
                                        <p>{project.detail}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="section-subblock">
                                <h2>Annual Service Rhythm</h2>
                                <p className="sub-desc">
                                    Throughout the year, our Branches rally
                                    around seasonal service opportunities across
                                    Ellis County:
                                </p>
                                <div className="calendar-grid">
                                    {CHURCH_DATA.annualCalendar.map((entry) => (
                                        <div
                                            key={entry.month}
                                            className="calendar-card"
                                        >
                                            <strong>{entry.month}</strong>
                                            <span>{entry.focus}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ================= CONNECT / CONTACT VIEW ================= */}
                {activeTab === "connect" && (
                    <section className="section">
                        <div className="container connect-grid">
                            <div className="connect-info">
                                <span className="eyebrow">
                                    Take a Next Step
                                </span>
                                <h1>Let’s Grab a Cup of Coffee</h1>
                                <p>
                                    Have questions about Rooted Life Church,
                                    want to join an upcoming 7-week Rooted Group
                                    in Ennis, or looking for a Sunday Branch?
                                    Fill out the form and we’ll reach out
                                    personally—no spam and no pressure.
                                </p>

                                <div className="contact-highlights">
                                    <div className="contact-item">
                                        <Coffee size={20} />
                                        <div>
                                            <strong>
                                                First Coffee Is On Us
                                            </strong>
                                            <span>
                                                Join a Rooted Group at a local
                                                coffee shop.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <Home size={20} />
                                        <div>
                                            <strong>
                                                Neighborhood Branches
                                            </strong>
                                            <span>
                                                Find a welcoming home group near
                                                your family.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <MapPin size={20} />
                                        <div>
                                            <strong>
                                                Rooted in Ellis County
                                            </strong>
                                            <span>
                                                Launching in Ennis and expanding
                                                across the county.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-card">
                                {submitted ? (
                                    <div className="form-success">
                                        <CheckCircle2
                                            size={48}
                                            className="success-icon"
                                        />
                                        <h2>
                                            Thanks for Reaching Out,{" "}
                                            {formState.name || "Friend"}!
                                        </h2>
                                        <p>
                                            We’ve received your note regarding{" "}
                                            <strong>
                                                {formState.interest}
                                            </strong>{" "}
                                            in <strong>{formState.city}</strong>
                                            . Someone from our team will follow
                                            up with you soon.
                                        </p>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() => {
                                                setSubmitted(false)
                                                setFormState({
                                                    name: "",
                                                    email: "",
                                                    city: "Ennis",
                                                    interest:
                                                        "Rooted Group (Coffee Shop)",
                                                    message: "",
                                                })
                                            }}
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleFormSubmit}
                                        className="connect-form"
                                    >
                                        <h2>Connect With Rooted Life</h2>
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Your Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                placeholder="Jane Doe"
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
                                            <label htmlFor="email">
                                                Email Address
                                            </label>
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

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="city">
                                                    Your Area
                                                </label>
                                                <select
                                                    id="city"
                                                    value={formState.city}
                                                    onChange={(e) =>
                                                        setFormState({
                                                            ...formState,
                                                            city: e.target
                                                                .value,
                                                        })
                                                    }
                                                >
                                                    <option value="Ennis">
                                                        Ennis
                                                    </option>
                                                    <option value="Waxahachie">
                                                        Waxahachie
                                                    </option>
                                                    <option value="Midlothian">
                                                        Midlothian
                                                    </option>
                                                    <option value="Red Oak">
                                                        Red Oak
                                                    </option>
                                                    <option value="Other Ellis County">
                                                        Other Ellis County
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="interest">
                                                    I’m Interested In...
                                                </label>
                                                <select
                                                    id="interest"
                                                    value={formState.interest}
                                                    onChange={(e) =>
                                                        setFormState({
                                                            ...formState,
                                                            interest:
                                                                e.target.value,
                                                        })
                                                    }
                                                >
                                                    <option value="Rooted Group (Coffee Shop)">
                                                        Rooted Group (Coffee
                                                        Shop)
                                                    </option>
                                                    <option value="Branches (Sunday Home Group)">
                                                        Branches (Sunday Home
                                                        Group)
                                                    </option>
                                                    <option value="Serving / Outreach">
                                                        Serving / Outreach
                                                    </option>
                                                    <option value="Just Asking Questions">
                                                        Just Asking Questions
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">
                                                Questions or Note (Optional)
                                            </label>
                                            <textarea
                                                id="message"
                                                rows="4"
                                                placeholder="Tell us a little about yourself or any questions you have..."
                                                value={formState.message}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        message: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-full"
                                        >
                                            Send Message <Send size={16} />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            {/* Footer */}
            <footer className="site-footer">
                <div className="container footer-inner">
                    <div className="footer-brand">
                        <div className="footer-logo-row">
                            <img
                                src={CHURCH_DATA.logoPath}
                                alt="Rooted Life Church Logo"
                                className="footer-logo-img"
                            />
                            <span>Rooted Life Church</span>
                        </div>
                        <p>
                            Helping people root their lives in Jesus through
                            authentic community and discipleship across Ennis
                            and Ellis County, Texas.
                        </p>
                    </div>

                    <div className="footer-links">
                        <strong>Explore</strong>
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => navigateTo(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="footer-verse">
                        <strong>{CHURCH_DATA.themeVerse.reference}</strong>
                        <p>
                            “Rooted and built up in him and established in the
                            faith... abounding in thanksgiving.”
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <span>
                            © {new Date().getFullYear()} Rooted Life Church •
                            Ellis County, Texas
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
