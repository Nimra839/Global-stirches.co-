import React from "react";
import "./ClothingLogos.css";

const ClothingLogos = () => {
  return (
    <section className="clothing-page">
      {/* Hero Section */}
      <div className="clothing-hero">
        <h1> Custom Clothing Logos</h1>
        <p>
          At <span>Global Stitches.co</span>, we transform your brand identity
          into <strong>professional embroidered clothing logos</strong>.  
          Perfect for uniforms, fashion brands, and corporate wear.
        </p>
      </div>

      {/* Why Clothing Logos Section */}
      <div className="clothing-section">
        <div className="clothing-text">
          <h2> Why Clothing Logos Matter?</h2>
          <p>
            Clothing logos aren’t just decoration — they’re your{" "}
            <strong>brand signature</strong>.  
            Every piece of clothing with your logo represents your
            professionalism, quality, and identity.
          </p>
          <ul>
            <li>✔️ Creates a strong brand identity</li>
            <li>✔️ Enhances professionalism & trust</li>
            <li>✔️ Ideal for uniforms, jackets, caps & fashion wear</li>
          </ul>
        </div>
        <div className="clothing-image">
          <img src="/gallery/clothing-logo-sample.jpg" alt="Clothing Logo Example" />
        </div>
      </div>

      {/* Process Section */}
      <div className="clothing-section reverse">
        <div className="clothing-image">
          <img src="/gallery/clothing-machine.jpg" alt="Embroidery Machine Process" />
        </div>
        <div className="clothing-text">
          <h2> From Digital Design to Fabric</h2>
          <p>
            Our process starts with <strong>professional logo digitization</strong> —  
            ensuring your design is converted into precise embroidery stitches.  
            Then, our <strong>high-speed industrial machines</strong> bring your logo to life.
          </p>
          <p className="highlight">
             The result? Long-lasting, stylish logos that withstand
            everyday wear and washing.
          </p>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="clothing-section">
        <div className="clothing-text">
          <h2> Our Quality Standards</h2>
          <p>
            Every clothing logo we create goes through strict quality checks:
          </p>
          <ul>
            <li>✔️ Strong and durable stitching</li>
            <li>✔️ Vibrant color matching</li>
            <li>✔️ Smooth edges & professional finishing</li>
            <li>✔️ Wash-resistant & long-lasting logos</li>
          </ul>
        </div>
        <div className="clothing-image">
          <img src="/gallery/logo-quality.jpg" alt="Logo Quality" />
        </div>
      </div>

      {/* Closing Section */}
      <div className="clothing-closing">
        <h2>Elevate Your Brand with Clothing Logos</h2>
        <p>
          Whether you need custom uniforms, fashion branding, or promotional
          wear — <strong>we’ve got you covered</strong>.  
          Stand out with embroidery that speaks for your brand!
        </p>
        <button
          className="explore-btn"
          onClick={() => (window.location.href = "#order-form")}
        >
           Order Your Clothing Logos
        </button>
      </div>
    </section>
  );
};

export default ClothingLogos;
