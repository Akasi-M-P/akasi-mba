import "./About.css";

const About = () => {
  return (
    <section className="about" id="about-me" aria-labelledby="about-heading">
      <div className="about-inner">
        <span className="section-label">About Me</span>
        <h2 className="about-heading" id="about-heading">
          Full-stack web developer. Cloud practitioner. Lifelong learner.
        </h2>

        <div className="about-grid">
          {/* ── Bio ── */}
          <div className="about-text">
            <p>
              I'm a Full-Stack Web Developer and AWS Certified Cloud
              Practitioner based in Accra, Ghana. I build scalable web
              applications using the MERN stack — MongoDB, MySQL, Express,
              React, and Node.js — backed by cloud infrastructure on AWS.
            </p>
            <p>
              What makes my approach different is that I bring both engineering
              depth and business clarity to every project. I hold a Master's
              degree in Information Systems, a Bachelor's in Information
              Technology Management and a Diploma in Information Technology from
              the University of Professional Studies, Accra — so I don't just
              write code, I understand how technology fits into organisations,
              governance, and real-world operations.
            </p>
            <p>
              I am an AWS Certified Cloud Practitioner with hands-on experience
              in EC2, S3, IAM, VPC, RDS, and Lambda. I also have working
              knowledge of Python, AI, and data analysis, which I apply to build
              smarter and more efficient solutions.
            </p>
            <p>
              I'm open to opportunities in Full-Stack Web Development, Cloud
              Computing, IT Systems, and IT Management. If you're looking for
              someone who can own a feature from database to deployment,{" "}
              <a href="#contact" className="about-inline-link">
                let's talk
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
