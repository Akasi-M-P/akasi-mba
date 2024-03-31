import "./MyService.css";
import Service from "./Service";
import services from "/src/ServiceData.json";

const Services = () => {
  return (
    <div>
      <div>
        <h1 className="service-header text-center pt-8">Services</h1>
      </div>
      {services.map((service) => (
        <Service service={service} key={service.id} />
      ))}
    </div>
  );
};
export default Services;
