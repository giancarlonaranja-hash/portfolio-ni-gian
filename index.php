php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Gian Carlo | Portfolio</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Navigation -->
    <nav>
        <div class="logo">Gian<span>Portfolio</span></div>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>


    <!-- Home Section -->
    <section id="home" class="hero">

        <div class="hero-text">
            <p class="eyebrow">Hello, I'm</p>

            <h1>Gian Carlo</h1>

            <h2>Information Systems Graduate</h2>

            <p class="description">
                I am a tech-savvy and motivated individual who is passionate
                about technology, web development, and digital solutions.
            </p>

            <div class="cta-row">
                <a href="#projects" class="btn">View My Projects</a>
                <a href="#contact" class="btn btn-secondary">Let's Connect</a>
            </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
            <div class="tech-panel">
                <div class="panel-header">
                    <span>System Overview</span>
                    <span class="status-pill"><i class="status-dot"></i> Online</span>
                </div>

                <div class="metrics">
                    <div class="metric-box">
                        <strong>6+</strong>
                        <span>Core Skills</span>
                    </div>
                    <div class="metric-box">
                        <strong>3</strong>
                        <span>Key Projects</span>
                    </div>
                </div>

                <div class="signal-box">
                    <div class="signal-header">
                        <span>Performance</span>
                        <span>92%</span>
                    </div>
                    <div class="signal-bar">
                        <span></span>
                    </div>
                </div>

                <div class="mini-grid">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

    </section>


    <!-- About Section -->
    <section id="about">

        <h2 class="section-title">About Me</h2>

        <div class="about-container">

            <p>
                I am a graduate of Bachelor of Science in Information Systems.
                I am interested in technology, website management, data entry,
                and digital solutions.
            </p>

            <p>
                I believe in continuous learning, hard work, and being open
                to feedback. I am always willing to improve my skills and
                explore new opportunities in the technology industry.
            </p>

        </div>

    </section>


    <!-- Skills Section -->
    <section id="skills">

        <h2 class="section-title">My Skills</h2>

        <div class="skills-container">

            <div class="skill-card">HTML</div>
            <div class="skill-card">CSS</div>
            <div class="skill-card">PHP</div>
            <div class="skill-card">MySQL</div>
            <div class="skill-card">Microsoft Excel</div>
            <div class="skill-card">WordPress</div>
            <div class="skill-card">GitHub</div>
            <div class="skill-card">Graphic Design</div>

        </div>

    </section>


    <!-- Process Section -->
    <section id="process">

        <h2 class="section-title">Priority Focus</h2>

        <div class="process-container">

            <div class="step-card">
                <span class="step-number">01</span>
                <h3>Digital Solutions</h3>
                <p>
                    Building reliable, user-friendly systems and websites that support
                    smooth operations and stronger digital performance.
                </p>
            </div>

            <div class="step-card">
                <span class="step-number">02</span>
                <h3>Continuous Improvement</h3>
                <p>
                    Improving skills, adapting to new technologies, and delivering
                    efficient results that create long-term value.
                </p>
            </div>

        </div>

    </section>

    <!-- Projects Section -->
    <section id="projects">

        <h2 class="section-title">My Projects</h2>

        <div class="projects-container">

            <div class="project-card">

                <h3>Secure Inventory Management System</h3>

                <p>
                    A system designed to manage inventory, sales,
                    payments, reports, and user accounts.
                </p>

                <button>View Project</button>

            </div>


            <div class="project-card">

                <h3>Website Content Management</h3>

                <p>
                    Managed and migrated website content while ensuring
                    proper organization and presentation.
                </p>

                <button>View Project</button>

            </div>


            <div class="project-card">

                <h3>Graphic Design Projects</h3>

                <p>
                    Created presentations and social media graphics
                    for different projects and clients.
                </p>

                <button>View Project</button>

            </div>

        </div>

    </section>


    <!-- Contact Section -->
    <section id="contact">

        <h2 class="section-title">Contact Me</h2>

        <div class="contact-container">

            <p>Feel free to contact me!</p>

            <a href="mailto:your@email.com" class="btn">
                Send Me an Email
            </a>

        </div>

    </section>


    <!-- Footer -->
    <footer>

        <p>© 2026 Gian Carlo. All Rights Reserved.</p>

    </footer>


    <script src="script.js"></script>

</body>
</html>
