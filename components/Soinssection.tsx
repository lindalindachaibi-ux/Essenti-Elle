"use client";

import { useRef, CSSProperties } from "react";
import Image from "next/image";

type Soin = {
  id: string;
  image: string;
  badge: string;
  title: string;
  description: string;
  price: string;
  duration: string;
};

const soins: Soin[] = [
  {
    id: "nutrition",
    image: "/jus detox.png",
    badge: "Rééquilibrage",
    title: "Nutrition & detox",
    description:
      "• Consultation nutrition personnalisée\n• Suivi nutrition",
    price: "90 DT",
    duration: "Personnalisé",
  },
  {
    id: "naturopathie",
    image: "/Natrupathie.png",
    badge: "Conseils naturels",
    title: "Consultation Naturopathie & Hygiène de Vie",
    description:
      "Un accompagnement personnalisé pour améliorer votre équilibre et votre bien-être au quotidien : alimentation, sommeil, stress, digestion, énergie et habitudes de vie.",
    price: "110 DT",
    duration: "1h",
  },
  
  {
    id: "kinesiologie",
    image: "/kiné.jpg",
    badge: "Équilibre corporel",
    title: "Kinésiologie",
    description:
      "Un accompagnement doux pour repérer les tensions musculaire, les blocages et rétablir un équilibre physique et émotionnel.",
    price: "90 DT",
    duration: "60 min",
  },
  {
    id: "reflexologie",
    image: "/reflexologie.jpg",
    badge: "Apaisement & énergie",
    title: "Réflexologie",
    description:
      "Une technique de relaxation profonde qui aide à soulager le stress, les tensions et rétablir l'équilibre global.",
    price: "70 DT",
    duration: "45 min",
  },
  {
    id: "osteopathie",
    image: "/ostèo.jpg",
    badge: "Soulagement global",
    title: "Ostéopathie",
    description:
      "Une approche manuelle douce pour retrouver une articulation , confort et équilibre dans le corps et dans les gestes du quotidien.",
    price: "120 DT",
    duration: "60 min",
  },
  {
    id: "massage",
    image: "/massage2.jpg",
    badge: "Détente & drainage",
    title: "Massages",
    description:
  "• Massage lymphatique\n• Massage anti-cellulite\n• Massage relaxation & détente\n• Kobido (lifting visage)",
    price: "90 DT",
    duration: "60 min",
  },
  {
    id: "hijama",
    image: "/hijama2.jpg",
    badge: "Soin purifiant",
    title: "Hijama",
    description:
      "• Séance curative + 10 min massage\n• Séance préventive + 10 min massage\n• Séance basique",
    price: "60 DT",
    duration: "45 min",
  },
  
  
  {
    id: "infirmier",
    image: "/soins infirmiers.jpeg",
    badge: "Pansements",
    title: "Soins infirmiers",
    description:
      "• Changement de pansement simple & complexe \n• Bilan des paramètres corporels et physiologiques \n• Injections \n• Prélèvements sanguins \n• Perfusion ",
    price: "30 -150 DT",
    duration: "30 min",
  },
];

const CALENDLY_URL = "https://calendly.com/essentielleformationbienetre/60min";

const sectionStyle: CSSProperties = { backgroundColor: "#F6F2EA", padding: "64px 0" };
const containerStyle: CSSProperties = { maxWidth: "1152px", margin: "0 auto", padding: "0 24px" };
const headerRowStyle: CSSProperties = { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "40px" };
const kickerStyle: CSSProperties = { fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "15px", color: "#9C8B4E", margin: "0 0 4px", letterSpacing: "0.5px" };
const titleStyle: CSSProperties = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "32px", color: "#2E2A22", margin: 0 };
const arrowBtnStyle: CSSProperties = { width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #8C6D1F", background: "transparent", color: "#8C6D1F", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };
const trackStyle: CSSProperties = { display: "flex", gap: "20px", overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: "8px" };
const cardStyle: CSSProperties = { flex: "0 0 240px", scrollSnapAlign: "start", background: "#FFFFFF", border: "0.5px solid #E4DCC8", borderRadius: "4px", overflow: "hidden" };
const imageWrapStyle: CSSProperties = { position: "relative", height: "170px", width: "100%" };
const badgeStyle: CSSProperties = { position: "absolute", left: "12px", top: "12px", background: "#2E2A22", color: "#F6F2EA", fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px", padding: "5px 10px" };
const cardBodyStyle: CSSProperties = { padding: "18px" };
const cardTitleStyle: CSSProperties = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "22px", color: "#2E2A22", margin: "0 0 8px" };
const cardDescStyle: CSSProperties = { fontSize: "12.5px", lineHeight: 1.6, color: "#6B6455", margin: "0 0 16px", whiteSpace: "pre-line" };
const priceRowStyle: CSSProperties = { display: "flex", alignItems: "baseline", justifyContent: "space-between", borderTop: "0.5px solid #E4DCC8", paddingTop: "12px", marginBottom: "14px" };
const priceStyle: CSSProperties = { fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#8C6D1F", fontWeight: 600 };
const durationStyle: CSSProperties = { fontSize: "11px", color: "#9C9484", letterSpacing: "0.5px" };
const reserveBtnStyle: CSSProperties = { display: "block", width: "100%", border: "1px solid #8C6D1F", color: "#8C6D1F", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", padding: "11px 0", textAlign: "center", textDecoration: "none" };

export default function SoinsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 260, behavior: "smooth" });
  };

  return (
    <section id="soins" style={sectionStyle}>
      <style>{`
        #soins-track::-webkit-scrollbar { display: none; }
        #soins-track { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <div style={containerStyle}>
        <div style={headerRowStyle}>
          <div>
            <p style={kickerStyle}>L&apos;expérience client</p>
            <h2 style={titleStyle}>Nos soins</h2>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button type="button" onClick={() => scrollByCard(-1)} aria-label="Soin précédent" style={arrowBtnStyle}>←</button>
            <button type="button" onClick={() => scrollByCard(1)} aria-label="Soin suivant" style={arrowBtnStyle}>→</button>
          </div>
        </div>

        <div id="soins-track" ref={trackRef} style={trackStyle}>
          {soins.map((soin) => (
            <article key={soin.id} style={cardStyle}>
              <div style={imageWrapStyle}>
                <Image src={soin.image} alt={soin.title} fill sizes="240px" style={{ objectFit: "cover" }} />
                <span style={badgeStyle}>{soin.badge}</span>
              </div>

              <div style={cardBodyStyle}>
                <h3 style={cardTitleStyle}>{soin.title}</h3>
                <p style={cardDescStyle}>{soin.description}</p>

                <div style={priceRowStyle}>
                  <span style={priceStyle}>{soin.price}</span>
                  <span style={durationStyle}>{soin.duration}</span>
                </div>

                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={reserveBtnStyle}>
                  Réserver
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}