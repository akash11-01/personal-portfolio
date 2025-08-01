import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-link about__icon"></i>
        <h3 className="about__title">Profiles</h3>
        {/* <span className="about__subtitle">1.5 years and counting</span> */}
        <div className="profiles about__subtitle">
          <a className="text_color" href="https://leetcode.com/u/NGPHHB/">
            Leetcode
          </a>
          <a
            className="text_color"
            href="https://www.geeksforgeeks.org/user/akashjair8vg/"
          >
            GeeksforGeeks
          </a>
          <a
            className="text_color"
            href="https://codeforces.com/profile/AJ_220"
          >
            Codeforces
          </a>
          <a
            className="text_color"
            href="https://www.codechef.com/users/worm_bell_18"
          >
            Codechef
          </a>
        </div>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">6 + Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">
          Everytime
          <br />
          (Excluding College hours)
        </span>
      </div>
    </div>
  );
};

export default Info;
