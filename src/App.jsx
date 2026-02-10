import { useState } from "react";
import "./App.css"; 


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Navbar */}
      {/* This JSX defines a header layout with nested containers for styling and flexbox alignment.  */}
      <header className="header">
        <div className="container">
          <div className="nav-flex">
            {/* Logo */}
            <div className="logo">
              <div className="logo-circle">TBT</div>
              <span>TheBroToots</span>
            </div>

            {/* Desktop Menu */}
            <nav className="desktop-nav">
              <a
                href="https://www.youtube.com/@thebrotoots"
                // controls opening a new tab and prevents newly open tab from controlling
                // the original page
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/turei.milner.3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FaceBook
              </a>
              <a
                href="https://www.tiktok.com/@thebrotoots"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </nav>

            {/* The Hamburger menu is the 3 horizontal lines next to the log in  */}
            <div className="right-nav">
              <a href="#" className="login-link">
                Login
              </a>
              <button
                className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  width="42"
                  height="42"
                  fill="none"
                  stroke="#000000"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <a
                href="https://www.youtube.com/@thebrotoots"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/turei.milner.3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FaceBook
              </a>
              <a
                href="https://www.tiktok.com/@thebrotoots"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              <a href="#" className="login-link">
                Login
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-flex">
            <div className="hero-text">
              <h1>
                ComeHolla@Me
                <br />
                Enquire Today!
              </h1>
              {/* added link to mission ready to search button and placeholder */}
              <form
                className="search-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="https://www.missionreadyhq.com/"
                  className="search-input"
                />
                <a
                  href="https://www.missionreadyhq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="search-btn"
                >
                  SEARCH
                </a>
              </form>
            </div>

            <div className="hero-image">
              <img
                src="/TheBroToots.png"
                alt="The Bro Toots logo or hero image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="listings">
        <div className="container">
          <h2>Featured Styles</h2>
          <div className="cards-flex">
            {[
              {
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
                title: "Modern Style",
                desc: "Attract attention",
              },
              {
                img: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg",
                title: "Natural Flow",
                desc: "Beautiful landscapes",
              },
              {
                img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
                title: "Clean Structure",
                desc: "Flexible layout",
              },
            ].map((listing, idx) => (
              <div key={idx} className="card">
                <img
                  src={listing.img}
                  alt={listing.title}
                  className="card-img"
                />
                <div className="card-content">
                  <h3>{listing.title}</h3>
                  <p>{listing.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
