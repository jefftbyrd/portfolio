import Head from 'next/head';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">Here's some stuff I made!</p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img
                  src="http://jefftbyrd.com/images/nighty-night.jpg"
                  className="portfolio-image"
                  alt=""
                />
                <h4 className="portfolio-name">Nighty Night</h4>
                <div className="portfolio-category">Solo release</div>
              </div>

              <div className="portfolio-item">
                <img
                  src="https://budokanboys.club/images/are-you-sick-cover.jpg"
                  className="portfolio-image"
                  alt=""
                />
                <h4 className="portfolio-name">Are You Sick?</h4>
                <div className="portfolio-category">Budokan Boys</div>
              </div>

              <div className="portfolio-item">
                <img
                  src="https://jefftbyrd.com/images/lamb-alley.jpg"
                  className="portfolio-image"
                  alt=""
                />
                <h4 className="portfolio-name">Lamb Alley</h4>
                <div className="portfolio-category">Solo Release</div>
              </div>

              <div className="portfolio-item">
                <img
                  src="https://jefftbyrd.com/images/sbuayd.jpg"
                  className="portfolio-image"
                  alt=""
                />
                <h4 className="portfolio-name">So Broken Up About You Dying</h4>
                <div className="portfolio-category">Solo Release</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
