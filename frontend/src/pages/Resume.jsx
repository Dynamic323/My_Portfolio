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
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Co-founder & Frontend Engineer — CocoBase
              </h4>
              <span>Aug 2025 — Present</span>
              <p className="timeline-text">
                Connecting front-end to back-end, building stunning visuals, and
                shaping the UI/UX direction of the Backend-as-a-Service (BaaS)
                platform.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Frontend Engineer — Instantly Analytics Dashboard
              </h4>
              <span>2025 — Present</span>
              <p className="timeline-text">
                Built and integrated React-based analytics dashboards with a
                Node.js backend to visualize and analyze user data effectively.
              </p>
            </li>

          

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Collaborator — X-payee (Crypto Investment Platform)
              </h4>
              <span>2024 — 2025</span>
              <p className="timeline-text">
                Collaborated with senior backend developer Ace to build a
                functional UI, integrate backend APIs, and fix production bugs
                on a crypto investment platform with complex investment logic.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Full-Stack Developer — DyshareX, Replico, Movieo, Theograph, Emi Aluge Investment
              </h4>
              <span>2023 — Present</span>
              <p className="timeline-text">
                Worked on multiple full-stack projects including:
                DyshareX (file/code sharing platform), Replico (website
                downloader), Movieo (React + Laravel movie site), Theograph
                (GitHub graph automation), and Emi Aluge Investment website
                (<a
                  href="https://emialugeinvestment.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://emialugeinvestment.com/
                </a>).
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Tutor — Code Academy Sarutech
              </h4>
              <span>2023 — Present</span>
              <p className="timeline-text">
                As a tutor at{" "}
                <a
                  href="https://codeacademy.sarutech.com/schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code Academy Sarutech
                </a>
                , taught students front-end and React development using a custom
                React Roadmap, mentoring multiple classes and building live
                interactive projects.
              </p>
            </li>
  <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Lead Developer — Seasonal Greetings</h4>
              <span>2024 — 2025</span>
              <p className="timeline-text">
                Led the development of a festival scheduling platform that lets
                users send personalized greetings that unlock on specific
                festival dates.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Full-Stack Web Developer</h4>
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
