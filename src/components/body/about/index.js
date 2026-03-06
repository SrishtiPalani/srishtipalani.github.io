import React, { useRef } from "react";
import "./about.css";
import 'antd/dist/antd.css';
import { SoundOutlined } from '@ant-design/icons';
import { Button, Tooltip, Row, Col, Divider } from 'antd';

import namePronunciation from "../../../assets/SrishtiPalaniPronunciation.mp3";
import Publications from "../publications/index";

function About() {
  const audioRef = useRef(null);

  const playPronunciation = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="about">
      <div className="about-top">
      <Row gutter={[16,8]} align="middle">
      <Col xs={24} xl={6} justify="center" align="middle">
        <div className="about-photo">
            <img
              src={require("../../../assets/SrishtiPalani.png")}
              alt="Srishti Palani - Research Scientist, Human-Centered AI"
              className="picture"
            />
        </div>
        </Col>

       <Col xs={24} sm={24} xl={14} justify={{'xs': 'center', 'xl': 'start'}} align={{'xs': 'middle', 'xl': 'top'}}>
        <div className="about-info">
          <p className="about-greeting">Hello World!</p>
          <p className="about-name-line">
            I'm <strong><span className="info-name">Srishti Palani</span></strong>!
            {' '}
            <Tooltip title="Play name pronunciation">
              <span className="about-pronunciation-wrap">
                <Button type="text" icon={<SoundOutlined />} onClick={playPronunciation} aria-label="Play name pronunciation" className="about-pronunciation-btn" />
              </span>
            </Tooltip>
          </p>
          <audio ref={audioRef} src={namePronunciation} preload="metadata" className="about-pronunciation-audio" />
          <p className="about-title">Senior Research Scientist <a href="https://www.tableau.com/research" target="_blank" rel="noreferrer" className="about-org-link">Tableau Research</a>, <a href="https://www.salesforce.com" target="_blank" rel="noreferrer" className="about-org-link">Salesforce</a></p>
          <div className="about-links">
            <a href="https://scholar.google.com/citations?user=VQV7AYUAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
            <span className="about-links-sep">&middot;</span>
            <a href="https://www.linkedin.com/in/srishti-palani/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="about-links-sep">&middot;</span>
            <a href="https://twitter.com/srishtipalani?lang=en" target="_blank" rel="noreferrer">Twitter</a>
            <span className="about-links-sep">&middot;</span>
            <a href="https://github.com/SrishtiPalani" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </Col>
    </Row>
    </div>

    <></>
    <Divider />

    <Row className="about-bio-news-row" justify={{'xs': 'center', 'xl': 'start'}} align="stretch" gutter={[16, 16]}>
      <Col xs={24} xl={16}>
          <div className="about-bio-inner">
          <p style={{ fontSize: '15px'}}>
          I am a computer and cognitive scientist conducting research at the intersection of Human-Computer Interaction, Human-Centered AI, and Information Science. I study, build, and evaluate AI systems that augment human cognition while remaining interpretable, trustworthy, and aligned with human needs. My research connects the design of AI systems that support human cognition with empirical investigations of how these systems reshape people's workflows and practices. Specifically, I investigate human-AI interaction as a set of productive tensions to surface and design for, such as: How do we balance model evaluation at scale against user-centered evaluation methods? What is the right balance between AI automation and user agency? How to optimize performance beyond single interactions, to also consider end-to-end individual and collaborative workflows?
          <br /> <br />
          I received my PhD and Master's from <a href="https://ucsd.edu" target="_blank" rel="noreferrer">University of California, San Diego</a>, and graduated <i>summa cum laude</i> from <a href="https://www.mtholyoke.edu" target="_blank" rel="noreferrer">Mount Holyoke College, MA</a>.{' '}
          I regularly publish my research at top-tier HCI and AI venues and conferences. Check out a full list of <a href="https://scholar.google.com/citations?user=VQV7AYUAAAAJ&hl=en" target="_blank" rel="noreferrer">publications here</a>. My work has been recognized with best paper awards and honors such as <a href="https://research.google/programs-and-events/phd-fellowship/recipients/?filtertab=2021" target="_blank" rel="noreferrer">Google PhD Research Fellowship</a>, Phi Beta Kappa Prize, and <a href="https://cra.org/about/awards/outstanding-undergraduate-researcher-award/#2018" target="_blank" rel="noreferrer"> CRA Outstanding Undergraduate Researcher Award</a>. I have collaborated with top research labs such as <a href="https://www.microsoft.com/en-us/research/" target="_blank" rel="noreferrer">Microsoft Research</a>, <a href="https://www.autodesk.com/research/overview" target="_blank" rel="noreferrer">Autodesk Research</a>, and the <a href="https://allenai.org/about" target="_blank" rel="noreferrer">Allen Institute for AI</a>. Beyond publications and patents, my work also directly informs product roadmaps; most recently, with features announced at the <a href="https://www.tableau.com/events/dreamforce-2025-keynote" target="_blank" rel="noreferrer">Tableau Keynote at Dreamforce 2025</a>.
          <br /><br />
          I'm always interested in discussing research collaborations or potential projects. The best way to reach me is by emailing srishti [dot] palani [at] salesforce [dot] com.
          </p>
          </div>
      </Col>

      <Col xs={24} xl={8}>
        <div className="about-news-col-inner">
        <section className="news-section">
          <h2 className="news-title info-name">News and Upcoming Travel</h2>
          <ul className="news-list">
            <li className="news-item">
              <span className="news-date">04/2026</span>
              <span className="news-text">
                Upcoming travel to <a href="https://chi2026.acm.org/" target="_blank" rel="noreferrer">ACM CHI 2026</a> in Barcelona, Spain to:
                <ul className="news-bullets">
                  <li>Present <a href="https://www.tableau.com/research/publications/lexara" target="_blank" rel="noreferrer"><i>Lexara: A User-Centered Toolkit for Evaluating Large Language Models for Conversational Visual Analytics</i></a></li>
                  <li>Co-organize Workshop on <i><a href="https://ai-tools-for-thought.github.io/workshop/" target="_blank" rel="noreferrer">Tools for Thought: Understanding, Protecting, and Augmenting Human Cognition with Generative AI&#8212;From Vision to Implementation</a></i> </li>
                </ul>
              </span>
            </li>
            <li className="news-item">
              <span className="news-date">04/2026</span>
              <span className="news-text">
                Work with <a href="https://www.kenqgu.com/" target="_blank" rel="noreferrer">Ken Gu</a> (intern) and <a href="https://www.vidyasetlur.com/" target="_blank" rel="noreferrer">Vidya Setlur</a> published at <a href="https://chi2026.acm.org/" target="_blank" rel="noreferrer">ACM CHI 2026</a>: <a href="https://www.tableau.com/research/publications/syncsense" target="_blank" rel="noreferrer"><i>&#8220;I Need to Find That One Chart&#8221;: How Data Workers Navigate, Make Sense of, and Communicate Analytical Conversations</i></a>. Congratulations, team! &#127881;
              </span>
            </li>
            <li className="news-item">
              <span className="news-date">03/2026</span>
              <span className="news-text">
                Work with <a href="https://minsukchang.info/" target="_blank" rel="noreferrer">Minsuk Chang</a> (intern) and <a href="https://arjun010.github.io/" target="_blank" rel="noreferrer">Arjun Srinivasan</a> published at <a href="https://iui.acm.org/2026/" target="_blank" rel="noreferrer">ACM IUI 2026</a>: <a href="https://www.tableau.com/research/publications/criticality" target="_blank" rel="noreferrer"><i>Criticality: Scaffolding Decision-Making with Interactive Critical Thinking and Evidence-Based Reasoning Traces</i></a>. Congratulations, team! &#127881;
              </span>
            </li>
            <li className="news-item">
              <span className="news-date">02/2026</span>
              <span className="news-text">
                Co-Editor, <a href="https://think.taylorandfrancis.com/special_issues/generative-ai-in-tools-for-thought-theory-design-assessment/" target="_blank" rel="noreferrer">Taylor &amp; Francis Journal of Human-Computer Interaction Special Issue on Generative AI in Tools for Thought: Theory, Design, and Assessment</a>.
              </span>
            </li>
          </ul>
        </section>
        </div>
      </Col>
    </Row>

    <Divider />

    <Publications />

    <Divider />
  </div>
  );
}

export default About;
