import React, { useState } from "react";
import "./qualifications.css";
import { CoolMode } from "../MagicUI/CoolMode";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <CoolMode>
        <h2 className="section__title">Qualification</h2>
      </CoolMode>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Achievements
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC (83.40%)</h3>
                <span className="qualification__subtitle">
                  Saraswati vidya mandir high school <br /> Mumbai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2018 - 04/2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> HSC (86.00%)</h3>
                <span className="qualification__subtitle">
                  Sanskardham junior college of science and commerce <br />
                  Mumbai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2019 - 04/2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">IIIT Bhagalpur</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title ">
                  3<span className="star_color">★</span> on Codechef
                </h3>
                <span className="qualification__subtitle">
                  (Highest Rating 1611)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 06/2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  450+ Leetcode problems solved
                </h3>
                <span className="qualification__subtitle">
                  (Highest Rating 1562)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  270+ GeeksforGeeks problems solved
                </h3>
                <span className="qualification__subtitle">
                  (Highest Rating 1553)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2025
                </div>
              </div>
            </div>
            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Hackvengers 2023</h3>
                <span className="qualification__subtitle">
                  2nd Runner ups in this national level hackathon
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 03/2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
