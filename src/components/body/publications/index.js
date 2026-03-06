import React from "react";
import "./publications.css";
import { Row, Col } from "antd";
import { LinkOutlined, FilePdfOutlined, RocketOutlined } from "@ant-design/icons";

import lexaraImg from "../../../assets/lexara.png";
import syncsenseImg from "../../../assets/SyncSense.png";
import criticalityImg from "../../../assets/criticality.png";

const linkIcons = {
  Project: <LinkOutlined />,
  PDF: <FilePdfOutlined />,
  Prototype: <RocketOutlined />,
};

const publications = [
  {
    id: "lexara",
    title: "Lexara",
    description:
      "A user-centered toolkit for evaluating LLMs for conversational visual analytics",
    venue: "ACM CHI",
    venueUrl: "https://chi2026.acm.org/",
    year: 2026,
    image: lexaraImg,
    links: [
      {
        label: "Project",
        url: "https://www.tableau.com/research/publications/lexara",
      },
      {
        label: "Prototype",
        url: "https://lexara-6b38293fcdac.herokuapp.com/",
      },
      {
        label: "PDF",
        url: "https://www.tableau.com/sites/default/files/2026-03/chi26-466--1-.pdf",
      },
    ],
  },
  {
    id: "syncsense",
    title: "SyncSense",
    description:
      "How data workers navigate, make sense of, and communicate analytical conversations",
    venue: "ACM CHI",
    venueUrl: "https://chi2026.acm.org/",
    year: 2026,
    image: syncsenseImg,
    links: [
      {
        label: "Project",
        url: "https://www.tableau.com/research/publications/syncsense",
      },
      {
        label: "PDF",
        url: "https://www.tableau.com/sites/default/files/2026-02/Syncsense_CHI2026.pdf",
      },
    ],
  },
  {
    id: "criticality",
    title: "Criticality",
    description:
      "Scaffolding decision-making with interactive critical thinking and evidence-based reasoning traces",
    venue: "ACM IUI",
    venueUrl: "https://iui.acm.org/2026/",
    year: 2026,
    image: criticalityImg,
    links: [
      {
        label: "Project",
        url: "https://www.tableau.com/research/publications/criticality",
      },
      {
        label: "Prototype",
        url: "https://iui26-criticality.up.railway.app/",
      },
      {
        label: "PDF",
        url: "https://www.tableau.com/sites/default/files/2026-02/iui-criticality.pdf",
      },
    ],
  },
];

function Publications() {
  return (
    <section className="publications-section">
      <h2 className="publications-heading">
        Featured <span className="info-name">Research Publications</span>
      </h2>
      <p className="publications-subtitle">
        Some of my recent research. Check out a full list of{" "}
        <a href="https://scholar.google.com/citations?user=VQV7AYUAAAAJ&hl=en" target="_blank" rel="noreferrer">publications here</a>.
      </p>
      <Row gutter={[24, 24]} className="publications-grid">
        {publications.map((pub) => (
          <Col key={pub.id} xs={24} sm={12} lg={8}>
            <div className="pub-card">
              <a
                href={pub.links.find((l) => l.label === "Project")?.url || "#"}
                target="_blank"
                rel="noreferrer"
                className="pub-card-img-link"
              >
                <div className="pub-card-img-wrap">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="pub-card-img"
                  />
                </div>
              </a>
              <h3 className="pub-card-title">{pub.title}</h3>
              <p className="pub-card-description">{pub.description}</p>
              <p className="pub-card-venue">
                <a href={pub.venueUrl} target="_blank" rel="noreferrer" className="pub-card-venue-link">{pub.venue} {pub.year}</a>
              </p>
              <div className="pub-card-links">
                {pub.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="pub-card-link"
                  >
                    {linkIcons[link.label]} {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Publications;
