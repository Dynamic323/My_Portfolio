import React from "react";
import Navbar from "../components/Navbar";
import Pagebg from "../components/Pagebg";

function Resume() {
  return (
    <>
      <Navbar />
      <Pagebg title="Resume">
        <section class="timeline">
          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            {/* <li className="timeline-item">
              <h4 className="h4 timeline-item-title">University of Delsul</h4>
              <span>2025 —</span>
              <p className="timeline-text">
                Enrolled as a student, ready to embark on a journey of higher
                education and skill development.
              </p>
            </li> */}

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

        <section class="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Tutor at Code Academy Sarutech
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
                I have taught many students and helped them develop their skills
                in web development, programming, and more. I have also built
                several live projects that students can interact with and learn
                from.
              </p>
              <p className="timeline-text">
                <a
                  href="https://github.com/Dynamic323" // Replace with your live project link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See my work
                </a>
                and explore some of the projects I have worked on.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Full-Stack Web Developer
              </h4>
              <span>2022 — Present</span>
              <p className="timeline-text">
                Worked as a freelance web developer, building various websites
                and applications for clients. Proficient in HTML, CSS,
                JavaScript, and various frameworks like React and Laravel.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Senior Web Developer</h4>
              <span>2023 — Present</span>
              <p className="timeline-text">
                Gained valuable experience as a senior developer, working on
                both front-end and back-end tasks, implementing UI designs, and
                integrating APIs for dynamic content.
              </p>
            </li>
          </ol>
        </section>
      </Pagebg>
    </>
  );
}

export default Resume;
