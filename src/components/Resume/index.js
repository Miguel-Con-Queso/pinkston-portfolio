import React from "react";

function Resume() {
  return (
    <div className="resumeSection mw=100 mh-100">
      <h2>Resume Download:</h2>
      <a
        href="https://github.com/Miguel-Con-Queso/pinkston-portfolio/blob/main/src/assets/files/Resume.pdf"
        target="_blank"
      >
        Resume
      </a>
      <h2>Education & Experience: Quick Glance</h2>
      <h3>Education:</h3>
      <ul>
        <li>Web Development Certificate, Vanderbilt University (2021)</li>
        <li>Master of Divinity, Milligan University (2015-2020)</li>
        <li>Bachelor of Arts, Johnson University (2011-2015)</li>
        <li>High Schhol Diploma, Carter High School (2007-2011)</li>
      </ul>
      <h3>Work History:</h3>
      <ul>
        <li>Exam Proctor, Pearson VUE (2021-present)</li>
        <li>Book Seller, Barnes & Noble (2019-2021)</li>
        <li>Professorial Assistant, Milligan University (2017-2019)</li>
      </ul>
      <h3>Skills:</h3>
      <ul>
        <li>MERN</li>
        <li>TDD</li>
        <li>SPA</li>
        <li>Research</li>
      </ul>
    </div>
  );
}

export default Resume;
