"use client";

import { useState } from "react";

const memories = [
  {
    number: "01",
    caption: "Your joy lights up every room",
    src: "/photos/IMG_6134.PNG",
    alt: "Mom smiling and twirling in a flowing golden dress",
  },
  {
    number: "02",
    caption: "Beautiful, bold, and always full of life",
    src: "/photos/IMG_6139.PNG",
    alt: "Mom laughing in a beautiful pink dress",
  },
  {
    number: "03",
    caption: "Your love is our favourite place to be",
    src: "/photos/IMG_6145.PNG",
    alt: "Mom sharing a loving portrait with her daughter",
  },
];

const gallery = [
  { src: "/photos/IMG_6133.PNG", alt: "Mom posing in a flowing golden dress" },
  { src: "/photos/IMG_6138.PNG", alt: "Mom smiling in an elegant pink dress" },
  { src: "/photos/IMG_6142.PNG", alt: "Mom in a stylish layered outfit" },
  { src: "/photos/IMG_6143.PNG", alt: "A close portrait of Mom smiling" },
];

export default function Home() {
  const [noteOpen, setNoteOpen] = useState(false);

  return (
    <main>
      <section className="hero" aria-labelledby="birthday-title">
        <nav className="nav" aria-label="Birthday page navigation">
          <a className="brand" href="#top" aria-label="Back to the top">
            <span>from your</span>
            <strong>children.</strong>
          </a>
          <a className="nav-link" href="#memories">
            Mom’s moments <span aria-hidden="true">↓</span>
          </a>
        </nav>

        <div className="confetti confetti-one" aria-hidden="true" />
        <div className="confetti confetti-two" aria-hidden="true" />
        <div className="confetti confetti-three" aria-hidden="true" />

        <div className="hero-copy" id="top">
          <p className="eyebrow">A birthday surprise from your kids</p>
          <h1 id="birthday-title">
            Happy
            <span>Birthday!</span>
          </h1>
          <p className="intro">
            Mom, you are our biggest cheerleader, our safest place, and the
            heart of our home. Today, we celebrate you.
          </p>
          <button className="primary-button" onClick={() => setNoteOpen(true)}>
            Open our birthday message <span aria-hidden="true">✦</span>
          </button>
        </div>

        <div className="hero-photo">
          <div className="photo-placeholder">
            <img
              src="/photos/IMG_6131.PNG"
              alt="Mom smiling brightly in a flowing golden dress"
            />
          </div>
          <div className="tape" aria-hidden="true" />
          <p>our real-life superhero</p>
        </div>

        <p className="scroll-note" aria-hidden="true">keep scrolling · there’s more</p>
      </section>

      <section className="love-note" aria-label="Birthday wishes">
        <p className="section-label">A note from your children</p>
        <blockquote>
          “Our coding teacher shows us how to build things on a screen — but you
          teach us how to build our lives with kindness, courage, and love.”
        </blockquote>
        <div className="little-wishes" aria-label="Birthday wishes">
          <span>endless Mom hugs</span>
          <span>proud little coders</span>
          <span>one amazing Mom</span>
        </div>
      </section>

      <section className="memories" id="memories" aria-labelledby="memory-title">
        <div className="section-heading">
          <div>
            <p className="section-label">Our favourite person</p>
            <h2 id="memory-title">Beautiful moments with Mom</h2>
          </div>
          <p>
            Every smile tells a story of your warmth, your strength, and all
            the love you bring to our family.
          </p>
        </div>

        <div className="memory-grid">
          {memories.map((memory, index) => (
            <article className={`memory-card card-${index + 1}`} key={memory.number}>
              <div className="memory-photo">
                <img src={memory.src} alt={memory.alt} />
              </div>
              <p>{memory.caption}</p>
            </article>
          ))}
        </div>

        <div className="extra-gallery" aria-label="More beautiful photos of Mom">
          {gallery.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="wish-section" aria-labelledby="wish-title">
        <div className="cake" aria-hidden="true">
          <div className="flame" />
          <div className="candle" />
          <div className="cake-top" />
          <div className="cake-base" />
        </div>
        <p className="section-label">One last thing</p>
        <h2 id="wish-title">May your year overflow with joy.</h2>
        <p>
          Thank you for cheering us on through every big idea, every challenge,
          and every new thing we learn. Your love gives us the confidence to
          keep growing.
        </p>
        <button className="secondary-button" onClick={() => setNoteOpen(true)}>
          Make our birthday wish
        </button>
      </section>

      <footer>
        <span>From your children · brought to life by their coding teacher</span>
        <span>Happy birthday to the best Mom ♥</span>
      </footer>

      {noteOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setNoteOpen(false)}>
          <section
            className="birthday-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="note-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setNoteOpen(false)}
              aria-label="Close birthday note"
            >
              ×
            </button>
            <span className="modal-sparkle" aria-hidden="true">✦</span>
            <p className="section-label">From all of us</p>
            <h2 id="note-title">Our favourite person.</h2>
            <p>
              Mom, thank you for every hug, every word of encouragement, and
              every way you help us believe we can do hard things. You make our
              home happier and our dreams bigger. We are so lucky to be your kids.
            </p>
            <strong>Happy birthday. We love you forever! ♥</strong>
          </section>
        </div>
      )}
    </main>
  );
}
