import { useEffect, useState } from 'react'
import {
  BIRCOM_IN_URL,
  CIN,
  SAR_URL,
  SUPPORT_EMAIL,
  URN_80G,
  bankDetails,
  feedbackParagraph,
  foreignDonorParagraph,
  indiaDonorParagraph,
  introParagraphs,
  menuLinks,
  page,
  preparationNotice,
  taxBenefitParagraph,
} from './content/siteContent'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = 'donate'
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="app-shell">
      <header className="site-header">
        <button
          aria-controls="site-menu"
          aria-expanded={menuOpen}
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
          Menu
        </button>

        <div className="header-logos" aria-label="Bircom Foundation and community">
          <a href={SAR_URL} rel="noopener noreferrer">
            <img src="/Bircom_SAR_F_Logo.png" alt="Bircom Search and Rescue Foundation" />
          </a>
          <a href={BIRCOM_IN_URL} rel="noopener noreferrer">
            <img
              src="/Paragliding_Community_Logo.png"
              alt="Paragliding Community — Bircom.in"
            />
          </a>
        </div>
      </header>

      <div
        className={menuOpen ? 'menu-scrim open' : 'menu-scrim'}
        onClick={() => setMenuOpen(false)}
        role="presentation"
      ></div>

      <aside
        aria-hidden={!menuOpen}
        className={menuOpen ? 'menu-drawer open' : 'menu-drawer'}
        id="site-menu"
      >
        <div className="drawer-heading">
          <p>Site menu</p>
          <button onClick={() => setMenuOpen(false)} type="button">
            Close
          </button>
        </div>

        <nav aria-label="Primary navigation">
          {menuLinks.map((item) =>
            item.separator ? (
              <hr className="menu-separator" key="separator" />
            ) : item.current ? (
              <span aria-current="page" className="menu-current" key={item.label}>
                <span>{item.label}</span>
                <small>{item.eyebrow}</small>
              </span>
            ) : (
              <a href={item.url} key={item.label} rel="noopener noreferrer">
                <span>{item.label}</span>
                <small>{item.eyebrow}</small>
              </a>
            ),
          )}
        </nav>
      </aside>

      <main id="donate">
        <article className="info-card notice-card">
          <p>
            {preparationNotice} Full Foundation information:{' '}
            <a href={SAR_URL} rel="noopener noreferrer">
              sar.bircom.in
            </a>
            .
          </p>
        </article>

        <section className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.summary}</p>
          </div>
        </section>

        <section className="content-stack">
          {introParagraphs.map((paragraph) => (
            <p className="lead-text" key={paragraph}>
              {paragraph}
            </p>
          ))}

          <article className="info-card bank-card">
            <h2>Bank account</h2>
            <dl className="bank-details">
              <div>
                <dt>Account name</dt>
                <dd>{bankDetails.accountName}</dd>
              </div>
              <div>
                <dt>Account number</dt>
                <dd>{bankDetails.accountNumber}</dd>
              </div>
              <div>
                <dt>IFSC</dt>
                <dd>{bankDetails.ifsc}</dd>
              </div>
              <div>
                <dt>Bank</dt>
                <dd>{bankDetails.bank}</dd>
              </div>
              <div>
                <dt>Branch</dt>
                <dd>{bankDetails.branch}</dd>
              </div>
            </dl>
          </article>

          <article className="info-card">
            <h2>Section 80G tax benefit</h2>
            <p>{taxBenefitParagraph}</p>
            <p className="urn-line">
              <strong>URN:</strong> {URN_80G}
            </p>
          </article>

          <article className="info-card">
            <h2>Donors in India</h2>
            <p>{indiaDonorParagraph}</p>
          </article>

          <article className="info-card warning">
            <h2>Donors outside India</h2>
            <p>{foreignDonorParagraph}</p>
          </article>

          <article className="info-card">
            <h2>Contact</h2>
            <p>{feedbackParagraph}</p>
            <p>
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
          </article>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Bircom Search and Rescue Foundation</p>
        <p>CIN {CIN}</p>
        <p>
          <a href={SAR_URL} rel="noopener noreferrer">
            Foundation site
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
