import PropTypes from "prop-types";

const Service = ({ service }) => {
  return (
    <div className="service" data-aos="fade-up" data-aos-duration="500">
      <div className="service-icon-row">
        <div className="service-icon">
          {/* Decorative icon — alt intentionally empty */}
          <img
            src={service.img}
            alt=""
            role="presentation"
            width="32"
            height="32"
          />
        </div>
        <h3 className="service-title">{service.title}</h3>
      </div>
      <p className="service-desc">{service.description}</p>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.shape({
    id:          PropTypes.number.isRequired,
    title:       PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img:         PropTypes.string.isRequired,
  }).isRequired,
};

export default Service;