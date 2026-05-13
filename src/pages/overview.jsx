import React from "react";
import "./overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <p className="desc">SMASH is a collaborative initiative between the departments of Astronomy/Astrophysics and Physics, and the Data Science, AI, and Supercomputer Centers on the UCSD campus. It was started to help researchers at UCSD initiate novel interdisciplinary research collaborations, and strengthen their skills, knowledge, and experience in AI, Machine Learning, and Data Science.
      <br></br>
      <br></br>
      The goal of this initiative is to provide the tools and environment to <b><i>SMASH</i></b> records in the Big Data era of Astronomy & Physics!</p>
      <h2>Next Up</h2>
      <p>
        {/* <b>What: </b>The next SMASH meeting will be a <bi>review of NeurIPS 2025</bi>, which is being help at the San Diego Convention Center from Nov. 30th to Dec. 5th.
        <br></br> */}
        <b>Who: </b><a href="https://www.sdsc.edu/research/experts/nguyen_mai.html" target="_blank" rel="noopener noreferrer">Dr. Mai Nguyen</a>, Computational Scientist at the San Diego Supercomputer Center
        <br></br>
        <b>Where: </b>SDSC Auditorium.
        <br></br>
        <b>When: </b>Tuesday, May 26, 2026.
      </p>
      <h2>Join the SMASH Community!
      </h2>
      <p>You can learn more and participate in SMASH activities by:
      <ul className='comms'>
        <li>Joining our <a href="https://join.slack.com/t/ucsd-smash/shared_invite/zt-3kxa3ekbo-GuLL0ZJ_4ZemB_dAKdLtVg" target='_blank' rel='noopener noreferrer'>Slack workspace</a></li>
        <li>Subscribing to the <a href="https://groups.google.com/g/smash-list/" target="_blank" rel="noopener noreferrer">email list</a></li>
        </ul>
      </p>
    </div>
  )
}