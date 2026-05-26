import "./MyService.css";
import Service from "./Service";
import services from "/src/ServiceData.json";

const Services = () => {
  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services-inner">
        <span className="section-label">What I offer</span>
        <h2 className="services-heading" id="services-heading">Services</h2>
        <div className="service-container">
          {services.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;