import React, { useState, useRef, useEffect } from "react";
import "../../body/about/about.css";
import "./skills.css";
import 'antd/dist/antd.css';
import { Row, Col, Card, Divider} from 'antd';

const DESIGN_AT_LARGE_PLAYLIST = [
  { id: "F6y1TtrTh0Y", title: "Design@Large: Translational ethics for responsible AI - A Talk by David Danks", url: "https://www.youtube.com/watch?v=F6y1TtrTh0Y&list=PLoWuaQlGD1dnRv82i71aSmYQgsZUp73fB&index=94" },
  { id: "dwtfvOpHjIQ", title: "Design@Large: AI and the Future of Creative Writing - A Talk by S.B. Divya and James Yu", url: "https://www.youtube.com/watch?v=dwtfvOpHjIQ&list=PLoWuaQlGD1dnRv82i71aSmYQgsZUp73fB&index=129" },
  { id: "0BDwwtWRiKk", title: "Design@Large: Communing With Creative AI - A Talk by Robert Twomey", url: "https://www.youtube.com/watch?v=0BDwwtWRiKk&list=PLoWuaQlGD1dnRv82i71aSmYQgsZUp73fB&index=139" },
  { id: "TicjyrVOFfo", title: "Design@Large: Re-Imagining How We Create and Consume Video - A Talk by Mira Dontcheva", url: "https://www.youtube.com/watch?v=TicjyrVOFfo&list=PLoWuaQlGD1dnRv82i71aSmYQgsZUp73fB&index=125" },
  { id: "qDma1se90NY", title: "Design@Large: Prompt Prototyping - A Talk by Michael Terry", url: "https://www.youtube.com/watch?v=qDma1se90NY&list=PLoWuaQlGD1dnRv82i71aSmYQgsZUp73fB&index=119" },
  { id: "7pr4No2rKpw", title: "Design@Large: Distributed Consciousness - A Talk by Memo Akten", url: "https://www.youtube.com/watch?v=7pr4No2rKpw&list=PLoWuaQlGD1dnRv82i71aSmYQgsZUp73fB&index=47" },
  { id: "JThig-cK_7U", title: "Design@Large: The Last Mile of AI for Creativity - A Talk by Haijun Xia", url: "https://www.youtube.com/watch?v=JThig-cK_7U&list=PLoWuaQlGD1dnRv82i71aSmYQgsZUp73fB&index=46" },
];
const VIDS_PER_PAGE = 3;
const PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLoWuaQlGD1dnRv82i71aSmYQgsZUp73fB";

function Skills() {
  const [playlistPage, setPlaylistPage] = useState(0);
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(DESIGN_AT_LARGE_PLAYLIST.length / VIDS_PER_PAGE);

  const scrollToPage = (page) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector(".playlist-video-card");
    const cardWidth = (card?.offsetWidth || 0) + 16;
    el.scrollTo({ left: page * cardWidth * VIDS_PER_PAGE, behavior: "smooth" });
    setPlaylistPage(page);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector(".playlist-video-card");
      const cardWidth = (card?.offsetWidth || 0) + 16;
      const page = Math.round(el.scrollLeft / (cardWidth * VIDS_PER_PAGE));
      setPlaylistPage(Math.min(page, totalPages - 1));
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [totalPages]);

  return (
    <div className="teaching">
    <Divider />
    <span className="info-name"> <strong>Teaching</strong> </span>
    <Row className="teaching-cards-row" gutter={[20, 20]}>
    <Col xs={24} xl={12}>
    <Card className="teaching-card" hoverable={true} size="small" bordered={true} cover={
      <div className="teaching-card-cover">
        <img src={require("../../../assets/GenAICourse.png")} alt="Design@Large Seminar" />
      </div>
    } style={{ borderRadius: '14px' }}>
    <h4><strong><a href="https://designlab.ucsd.edu/events-all/design-at-large/">Seminar: Designing Human-AI Systems for Creativity and Beyond</a></strong></h4>
    <h5><strong>Organizer, Jan–March 2023</strong></h5>
   <p style={{fontSize: '12px'}}>This speaker series invites you to engage in the promise and perils of the next big thing in machine intelligence -- Generative AI. We invite speakers from the worlds of art, design, technology and policy to discuss these impressive new capabilities, its limitations and how we, as designers and students, could harness it to reach new heights in art, music, dance, architecture, fashion, creative writing and programming. </p>
   <div className="playlist-section">
     <h4>Playlist</h4>
     <div className="playlist-carousel-wrap">
       <div className="playlist-carousel" ref={carouselRef}>
         {DESIGN_AT_LARGE_PLAYLIST.map((v) => (
           <div key={v.id} className="playlist-video-card">
             <a href={v.url} target="_blank" rel="noreferrer">
               <div className="playlist-thumb-wrap">
                 <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} />
               </div>
               <div className="playlist-card-body">
                 <p className="playlist-card-title">{v.title}</p>
               </div>
             </a>
           </div>
         ))}
       </div>
       {totalPages > 1 && (
         <>
           <button type="button" className="playlist-carousel-nav prev" onClick={() => scrollToPage(playlistPage - 1)} aria-label="Previous" disabled={playlistPage === 0}>&#10094;</button>
           <button type="button" className="playlist-carousel-nav" onClick={() => scrollToPage(playlistPage + 1)} aria-label="Next" disabled={playlistPage >= totalPages - 1}>&#10095;</button>
         </>
       )}
     </div>
     <p className="playlist-full-link"><a href={PLAYLIST_URL} target="_blank" rel="noreferrer">View full playlist on YouTube</a></p>
   </div>
   </Card>
    </Col>

    <Col xs={24} xl={12}>
    <Card className="teaching-card" hoverable={true} size="small" bordered={true} cover={
      <div className="teaching-card-cover">
        <img src={require("../../../assets/prototyping.jpg")} alt="DSGN100 Prototyping" />
      </div>
    } style={{ borderRadius: '14px' }}>
    <h4><strong><a href="https://design100.ucsd.edu">DSGN100 : Prototyping</a></strong></h4>
    <h5><strong>Instructor of Record, Summer 2023</strong></h5>
    <p style={{fontSize: '12px'}}> Introduction to the basic practices of interaction design through a focus on visual, physical, and digital prototyping. We follow a human-centered design process that includes research, concept generation, prototyping, testing, and refinement. Students must work effectively as individuals and in small teams to create visual designs, information systems, physical devices, and other interactive experiences. Required for Design Minor and Major.</p>
      </Card>
    </Col>
  </Row>
  </div>
 );
}

export default Skills;