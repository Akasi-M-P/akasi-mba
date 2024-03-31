/* eslint-disable react/prop-types */
const Service = ({ service }) => {
  return (
    <>
      <div className="service" data-aos="fade-up" data-aos-duration="3000">
        <div className="service-icon-des flex">
          <div className="service-icon">
            <img src={service.img} alt="" />
          </div>
          <h1 className="service-title text-xl font-bold">{service.title}</h1>
        </div>
        <div className="service-des">{service.description}</div>
      </div>
    </>
  );
};
export default Service;
