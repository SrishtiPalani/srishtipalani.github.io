import React from "react";
import "../publications/publications.css";
import "./impact.css";
import { Row, Col } from "antd";
import { LinkOutlined, ArrowRightOutlined, PlayCircleOutlined } from "@ant-design/icons";

import chatgptPluginImg from "../../../assets/tableau-chatgpt-plugin.png";
import lexaraKeynoteImg from "../../../assets/lexara-keynote.jpg";

const linkIcons = {
  link: <LinkOutlined />,
  video: <PlayCircleOutlined />,
};

const impact = [
  {
    id: "chatgpt-plugin",
    research: "Interactive conversational analytics",
    product: "Tableau plugin for ChatGPT",
    description:
      "Research on how people explore data through conversation shaped Tableau's plugin for ChatGPT. Presented at Tableau Keynotes at Dreamforce 2025 and Dreamforce 2026.",
    image: chatgptPluginImg,
    imageAlt:
      "Tableau prompt suggestions in ChatGPT, such as \"Show me the Commission Model dashboard\"",
    links: [
      {
        label: "Dreamforce 2025 Keynote",
        type: "video",
        url: "https://www.tableau.com/events/dreamforce-2025-keynote",
      },
      {
        label: "ChatGPT Plugin",
        type: "link",
        url: "https://openai.com/business/plugins/tableau/",
      },
    ],
  },
  {
    id: "tableau-agent-eval",
    research: "Lexara: Evaluation Framework for Conversational Analytics",
    product: "AI Model Evaluation Tool for Tableau Agent",
    description:
      "Research on evaluating conversational analytics became the AI Model Evaluation Tool for Tableau Agent. Announced at Tableau Conference 2026.",
    image: lexaraKeynoteImg,
    imageAlt:
      "Introducing Lexara on stage at Tableau Conference 2026",
    links: [
      {
        label: "Tableau Conference 2026",
        type: "video",
        url: "https://www.salesforce.com/plus/experience/tableau_conference_2026/series/salesforce_unified_platform_at_tableau_conference_2026/episode/episode-s1e1",
      },
    ],
  },
];

function Impact() {
  return (
    <section className="publications-section">
      <h2 className="publications-heading">
        Featured <span className="info-name">Product Impact</span>
      </h2>
      <p className="publications-subtitle">
        Research that shipped into products people use every day.
      </p>
      <Row gutter={[24, 24]} className="publications-grid">
        {impact.map((item) => (
          <Col key={item.id} xs={24} sm={12} lg={6}>
            <div className="impact-card">
              {item.image && (
                <a
                  href={item.links[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="impact-img-link"
                >
                  <div className="impact-img-wrap">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="impact-img"
                    />
                  </div>
                </a>
              )}
              <div className="impact-flow">
                <div className="impact-stage">
                  <span className="impact-stage-label">Research</span>
                  <p className="impact-stage-text">{item.research}</p>
                </div>
                <span className="impact-arrow" aria-hidden="true">
                  <ArrowRightOutlined />
                </span>
                <div className="impact-stage impact-stage-product">
                  <span className="impact-stage-label">Product</span>
                  <p className="impact-stage-text">{item.product}</p>
                </div>
              </div>
              <p className="impact-description">{item.description}</p>
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
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Impact;
