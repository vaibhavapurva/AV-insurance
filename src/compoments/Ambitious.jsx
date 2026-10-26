import { useEffect, useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
// import p10 from "../assets/p10.jpg";
import './ambitious.css'

const Ambitious = () => {

  const [index, setIndex] = useState(0);

  const images = [
    p1,p2,p3,p4,p5,p6,p7,p8,p9
  ];
 useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex + 1 >= images.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const visibleImages = images
    .slice(index, index + 7)
    .concat(images.slice(0, Math.max(0, index + 7 - images.length)));

  return (
    <section className="abitions-block">
      <h1>Trusted by over 15+ Ambitious Brands Across the India</h1>
      <div className="slider-container">
        <div className="slider" id="slider">
           {visibleImages.map((src, i) => (
          <img key={i} src={src} alt={`Partner ${i}`} />
        ))}
          
        </div>
      </div>
    </section>
  );
};

export default Ambitious;
