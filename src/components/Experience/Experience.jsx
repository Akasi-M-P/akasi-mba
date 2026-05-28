import "./Experience.css";
import { FiBriefcase, FiBook, FiAward } from "react-icons/fi";

const workExperience = [
  {
    role: "AWS re/Start Cloud Trainee",
    company: "AmaliTech",
    period: "Feb 2026 – May 2026",
    location: "Greater Accra, Ghana",
    points: [
      "Completed the AWS re/Start intensive cloud training programme, earning the AWS Certified Cloud Practitioner certification.",
      "Gained hands-on experience with core AWS services: EC2, S3, IAM, VPC, RDS, and Lambda.",
      "Developed practical skills in Linux, Python scripting, networking fundamentals, and cloud security.",
      "Applied knowledge through real-world labs and scenario-based projects aligned with industry standards.",
    ],
  },
  {
    role: "Adjunct Lecturer",
    company: "University of Professional Studies, Accra (UPSA)",
    period: "Feb 2026 – Apr 2026",
    location: "Greater Accra, Ghana",
    points: [
      "Appointed to teach Introduction to IT to undergraduate students at an ACBSP-accredited institution.",
      "Delivered a 9-credit hour weekly course covering core IT concepts, responsible for teaching, examining, marking, and grading.",
      "Fostered an engaging learning environment and maintained high professional academic standards.",
    ],
  },
  {
    role: "Personal Assistant to the Ambassador",
    company: "Private",
    period: "Feb 2019 – Aug 2024",
    location: "Greater Accra, Ghana",
    points: [
      "Facilitated communication channels between clients and stakeholders, resulting in a 40% increase in client satisfaction.",
      "Prepared official documents, briefings, and correspondence with strict confidentiality and accuracy.",
      "Supported high-profile event planning, diplomatic functions, and protocol compliance.",
      "Coordinated with 3+ medical practitioners monthly to uphold a conducive environment for the client.",
    ],
  },
];

const education = [
  {
    degree: "Master of Science — Information Systems",
    school: "University of Professional Studies, Accra",
    period: "Oct 2024 – Aug 2025",
  },
  {
    degree: "Bachelor of Science — Information Technology Management",
    school: "University of Professional Studies, Accra",
    period: "Aug 2022 – Aug 2024",
  },
  {
    degree: "Diploma — Information Technology Management",
    school: "University of Professional Studies, Accra",
    period: "Aug 2020 – Aug 2022",
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Front-End Web Development", issuer: "Professional Certification" },
  {
    name: "The Complete Node.js Developer Course",
    issuer: "Jonas Schmedtmann",
  },
  { name: "Complete Web Development Bootcamp", issuer: "Dr. Angela Yu" },
];

const Experience = () => {
  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="experience-inner">
        <span className="section-label">Background</span>
        <h2 className="experience-heading" id="experience-heading">
          Experience &amp; Education
        </h2>

        <div className="experience-layout">
          {/* ── Work Experience ── */}
          <div className="exp-column">
            <div className="exp-column-header">
              <FiBriefcase aria-hidden="true" />
              <h3>Work Experience</h3>
            </div>
            <div className="timeline">
              {workExperience.map((job, i) => (
                <div
                  className="timeline-item"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-card">
                    <p className="timeline-period">{job.period}</p>
                    <h4 className="timeline-role">{job.role}</h4>
                    <p className="timeline-company">
                      {job.company} · {job.location}
                    </p>
                    <ul className="timeline-points">
                      {job.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Education + Certifications ── */}
          <div className="exp-column">
            <div className="exp-column-header">
              <FiBook aria-hidden="true" />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((edu, i) => (
                <div
                  className="timeline-item"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-card">
                    <p className="timeline-period">{edu.period}</p>
                    <h4 className="timeline-role">{edu.degree}</h4>
                    <p className="timeline-company">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="exp-column-header exp-column-header--spaced">
              <FiAward aria-hidden="true" />
              <h3>Certifications</h3>
            </div>
            <ul className="cert-list">
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className="cert-item"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
