import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">Ask me anything.</p>
            <ul className="contact-links">
              <li className="contact-item">Email: jeff.t.byrd@gmail.com</li>
              <li className="contact-item">Phone: +43 6802382244</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
