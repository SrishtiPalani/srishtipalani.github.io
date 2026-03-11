import React, { useRef } from "react";
import "../publications/publications.css";
import "./workshops.css";
import { Row, Col } from "antd";
import { LinkOutlined, FilePdfOutlined, LeftOutlined, RightOutlined, PlayCircleFilled } from "@ant-design/icons";

import prototypingImg from "../../../assets/prototyping.jpg";
import tftImg from "../../../assets/image.png";
import tftProposalPdf from "../../../assets/Tools_for_Thought_with_Generative_AI_2026.pdf";

const linkIcons = {
  link: <LinkOutlined />,
  pdf: <FilePdfOutlined />,
};

const dalVideos = [
  { id: "qDma1se90NY", speaker: "Michael Terry", title: "Prompt Prototyping" },
  { id: "TicjyrVOFfo", speaker: "Mira Dontcheva", title: "Re-Imagining How We Create and Consume Video" },
  { id: "dwtfvOpHjIQ", speaker: "S.B. Divya & James Yu", title: "AI and the Future of Creative Writing" },
  { id: "F6y1TtrTh0Y", speaker: "David Danks", title: "Translational Ethics for Responsible AI" },
  { id: "7pr4No2rKpw", speaker: "Memo Akten", title: "Distributed Consciousness" },
  { id: "0BDwwtWRiKk", speaker: "Robert Twomey", title: "Communing With Creative AI" },
  { id: "JThig-cK_7U", speaker: "Haijun Xia", title: "The Last Mile of AI for Creativity" },
];

function VideoCarousel() {
  const stripRef = useRef(null);

  const scroll = (dir) => {
    if (stripRef.current) {
      const amount = stripRef.current.offsetWidth * 0.6;
      stripRef.current.scrollBy({ left: dir * amount, behavior: "smooth" });
    }
  };

  return (
    <div className="video-carousel">
      <div className="video-carousel-inner">
        <button className="video-carousel-btn" onClick={() => scroll(-1)} aria-label="Scroll left">
          <LeftOutlined />
        </button>
        <div className="video-strip" ref={stripRef}>
          {dalVideos.map((v) => (
            <div
              key={v.id}
              className="video-strip-item"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${v.id}`, "_blank")}
            >
              <div className="video-strip-frame">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={`${v.speaker}: ${v.title}`}
                  className="video-strip-thumb"
                />
                <span className="video-strip-play"><PlayCircleFilled /></span>
              </div>
            </div>
          ))}
        </div>
        <button className="video-carousel-btn" onClick={() => scroll(1)} aria-label="Scroll right">
          <RightOutlined />
        </button>
      </div>
    </div>
  );
}

const workshops = [
  {
    id: "tft",
    title: (<><a href="https://chi2026.acm.org/" target="_blank" rel="noreferrer" className="pub-card-title-link">ACM CHI</a> Workshops on AI as Tools for Thought</>),
    role: "Co-Organizer, 2025, 2026",
    description:
      "A workshop series at ACM CHI bringing together researchers and practitioners to explore how generative AI can understand, protect, and augment human cognition. The workshop examines the design, evaluation, and implications of AI-powered tools for thought across diverse cognitive tasks.",
    image: tftImg,
    imageUrl: "https://ai-tools-for-thought.github.io/workshop/",
    links: [
      {
        label: "CHI 2026",
        type: "link",
        url: "https://ai-tools-for-thought.github.io/workshop/",
      },
      {
        label: "CHI 2026 Proposal",
        type: "pdf",
        url: tftProposalPdf,
      },
      {
        label: "CHI 2025",
        type: "link",
        url: "https://ai-tools-for-thought.github.io/workshop/2025",
      },
      {
        label: "CHI 2025 Synthesis",
        type: "pdf",
        url: "https://www.microsoft.com/en-us/research/publication/understanding-protecting-and-augmenting-human-cognition-with-generative-ai-a-synthesis-of-the-chi-2025-tools-for-thought-workshop/",
      },
    ],
  },
  {
    id: "design-at-large",
    title: (<><a href="https://ucsd.edu" target="_blank" rel="noreferrer" className="pub-card-title-link">UCSD</a> Seminar: Designing Human-AI Systems for Creativity and Beyond</>),
    role: (<>Co-Instructor with <a href="https://spdow.ucsd.edu/" target="_blank" rel="noreferrer">Dr. Steven Dow</a>, Winter 2023</>),
    description:
      "A speaker series engaging in the promise and perils of Generative AI, inviting speakers from art, design, technology and policy to discuss new capabilities, limitations, and how designers and students can harness it for creative pursuits.",
    crossListed: "Cross-listed across Department of Computer Science and Department of Cognitive Science.",
    hasVideoCarousel: true,
    links: [],
  },
  {
    id: "dsgn100",
    title: (<><a href="https://ucsd.edu" target="_blank" rel="noreferrer" className="pub-card-title-link">UCSD</a> <a href="https://design100.ucsd.edu" target="_blank" rel="noreferrer" className="pub-card-title-link">DSGN100</a>: Prototyping</>),
    role: "Instructor of Record, Summer 2023",
    description:
      "Introduction to the basic practices of interaction design through visual, physical, and digital prototyping. Following a human-centered design process including research, concept generation, prototyping, testing, and refinement.",
    crossListed: "Cross-listed across Department of Computer Science and Department of Cognitive Science.",
    image: prototypingImg,
    imageUrl: "https://design100.ucsd.edu",
    links: [
      {
        label: "Website",
        type: "link",
        url: "https://design100.ucsd.edu",
      },
    ],
  },
];

function Workshops() {
  return (
    <section className="publications-section">
      <h2 className="publications-heading">
        Featured <span className="info-name">Workshops & Teaching</span>
      </h2>
      <Row gutter={[24, 24]} className="publications-grid">
        {workshops.map((item) => (
          <Col key={item.id} xs={24} sm={24} lg={8}>
            <div className="pub-card workshop-card">
              {item.hasVideoCarousel && <VideoCarousel />}
              {item.image && (
                <a
                  href={item.imageUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="pub-card-img-link"
                >
                  <div className="pub-card-img-wrap workshop-img-wrap">
                    <img
                      src={item.image}
                      alt={typeof item.title === "string" ? item.title : ""}
                      className="pub-card-img workshop-img"
                    />
                  </div>
                </a>
              )}
              <h3 className="pub-card-title">{item.title}</h3>
              <p className="pub-card-venue workshop-role">{item.role}</p>
              <p className="pub-card-description">{item.description}</p>
              {item.crossListed && <p className="pub-card-description workshop-cross-listed">{item.crossListed}</p>}
              {item.links.length > 0 && (
                <div className="pub-card-links">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="pub-card-link"
                    >
                      {linkIcons[link.type]} {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Workshops;
