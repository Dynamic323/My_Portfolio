import React from "react";
import Navbar from "../components/Navbar";
import Pagebg from "../components/Pagebg";

function Resume() {
  return (
    <>
      <Navbar />
      <Pagebg title="Resume">
        {/* Education Section */}
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                University of Benin (UNIBEN)
              </h4>
              <span>2025 — Present</span>
              <p className="timeline-text">
                Bachelor of Science (in progress). Currently pursuing a degree
                in Computer Science.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Edokpolor Secondary School
              </h4>
              <span>2018 — 2024</span>
              <p className="timeline-text">
                Attended from JSS 1 through SS3, building a strong academic
                foundation and developing essential skills for future growth.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Payne Primary School</h4>
              <span>2013 — 2018</span>
              <p className="timeline-text">
                Completed primary education, fostering curiosity and a love for
                learning.
              </p>
            </li>
          </ol>
        </section>

        {/* Experience Section */}
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            {/* CocoBase */}
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title flex">
                Frontend Engineer —{" "}
                <a
                  href="https://cocobaselanding.pxxl.click/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h4 link"
                >
                  CocoBase
                </a>
              </h4>
              <span>Aug 2025 — Present</span>
              <p className="timeline-text">
                Connecting front-end to back-end, building stunning visuals, and
                shaping the UI/UX direction of the Backend-as-a-Service (BaaS)
                platform.
              </p>
            </li>

            {/* X-payee */}
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title flex">
                Collaborator —{" "}
                <a
                  href="https://www.x-payee.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link h4"
                >
                  X-payee (Crypto Investment Platform)
                </a>
              </h4>
              <span>2024 — 2025</span>
              <p className="timeline-text">
                Collaborated with senior backend developer Ace to build a
                functional UI, integrate backend APIs, and fix production bugs
                on a crypto investment platform with complex investment logic.
              </p>
            </li>

            {/* Tutor */}
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title flex">
                Tutor —{" "}
                <a
                  href="https://codeacademy.sarutech.com/schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link h4"
                >
                  Code Academy Sarutech
                </a>
              </h4>
              <span>2023 — Present</span>
              <p className="timeline-text">
                Taught students front-end and React development using a custom
                React Roadmap, mentoring multiple classes and building live
                interactive projects.
              </p>
            </li>

            {/* DyshareX, Replico, etc */}
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title flex">
                Full-Stack Developer —{" "}
                <a
                  href="https://dysharex.pxxl.click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h4 link "
                >
                  DyshareX
                </a>
                , Replico, Movieo, Theograph
              </h4>
              <span>2023 — Present</span>
              <p className="timeline-text">
                Worked on multiple full-stack projects including: DyshareX
                (file/code sharing platform), Replico (website downloader),
                Movieo (React + Laravel movie site), Theograph (GitHub graph
                automation)
              </p>
            </li>
            {/* Instantly */}
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title flex">
                Frontend Engineer —
                <a
                  href="https://instantly-analytics-project.vercel.app/dashboard"
                  target="_blank"
                  className="link h4"
                >
                  Instantly Analytics Dashboard
                </a>
              </h4>
              <span>2025 — Present</span>
              <p className="timeline-text">
                Built and integrated React-based analytics dashboards with a
                Node.js backend to visualize and analyze user data effectively.
              </p>
            </li>

            {/* Seasonal Greetings */}
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title flex">
                Lead Developer —{" "}
                <a
                  href="https://seeasonal-wishes-fnd.vercel.app/"
                  className="link h4"
                  target="_blank"
                >
                  Seasonal Greetings
                </a>
              </h4>
              <span>2024 — 2025</span>
              <p className="timeline-text">
                Led the development of a festival scheduling platform that lets
                users send personalized greetings that unlock on specific
                festival dates.
              </p>
            </li>

            {/* Freelance */}
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Full-Stack Web Developer
              </h4>
              <span>2022 — Present</span>
              <p className="timeline-text">
                Freelance developer delivering modern, responsive websites using
                React, Node.js, Laravel, and Firebase. Focused on creating
                user-centered, performant, and maintainable solutions.
              </p>
            </li>
          </ol>
        </section>
      </Pagebg>
    </>
  );
}

export default Resume;
