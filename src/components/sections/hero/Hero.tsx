import { useState } from 'react';
import './Hero.css';
import SukunaImage from "../../../assets/sukuna-hero.png"
import SukunaVideo from "../../../assets/sukuna-video.mp4"

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section id="hero" className="hero-container">
      <div 
        className="hero-placeholder" 
        style={{ backgroundImage: `url(${SukunaImage})` }} 
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        className={`hero-video ${isVideoLoaded ? 'loaded' : ''}`}
      >
        <source src={SukunaVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <h2 className="hero-title"><i>JUJUTSU KAISEN</i></h2>
        <p className="hero-description">
          Explore o mundo das maldições e feiticeiros. Energia amaldiçoada flui através daqueles destinados a proteger a humanidade das trevas.
        </p>
        <div className="gradient-line"></div>
      </div>
    </section>
  );
}