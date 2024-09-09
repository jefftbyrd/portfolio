import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Hey, I'm Jeff! I compose soundtrack music and play in a band. I
              like swimming, films, music, coincidences, surprises, traveling
              light, eccentric people, outsiders and weirdos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
