import "./About.css";

const About = () => {
  return (
    <section className="about" id="about-me" aria-labelledby="about-heading">
      <div className="about-inner">
        <span className="section-label">About Me</span>
        <h2 className="about-heading" id="about-heading">
          Full-stack engineer. Cloud practitioner. Lifelong learner.
        </h2>

        <div className="about-grid">
          {/* ── Bio ── */}
          <div className="about-text">
            <p>
              I'm a Full-Stack Web Developer and AWS Certified Cloud Practitioner
              based in Accra, Ghana. I build scalable web applications using the
              MERN stack — MongoDB, Express, React, and Node.js — backed by cloud
              infrastructure on AWS.
            </p>
            <p>
              What makes my approach different is that I bring both engineering
              depth and business clarity to every project. I hold a Master's
              degree in Information Systems and a Bachelor's in Information
              Technology Management from the University of Professional Studies,
              Accra — so I don't just write code, I understand how technology
              fits into organisations, governance, and real-world operations.
            </p>
            <p>
              I recently completed the AWS re/Start program at AmaliTech, earning
              my AWS Certified Cloud Practitioner certification and gaining
              hands-on experience with EC2, S3, IAM, VPC, RDS, and Lambda. I
              also bring working knowledge of Python, AI fundamentals, and data
              analysis — which I apply to build smarter, more efficient solutions.
            </p>
            <p>
              I'm open to opportunities in Full-Stack Development, Cloud
              Computing, IT Systems, and IT Management. If you're looking for
              someone who can own a feature from database to deployment,{" "}
              <a href="#contact" className="about-inline-link">
                let's talk
              </a>
              .
            </p>
          </div>

          {/* ── Stats ── */}
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">MSc</span>
              <span className="stat-label">Information Systems — UPSA</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">AWS</span>
              <span className="stat-label">Certified Cloud Practitioner</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">MERN</span>
              <span className="stat-label">Full-stack development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;