import "./MyService.css";
import Service from "./Service";
import services from "/src/ServiceData.json";

const Services = () => {
  return (
    <div>
      {services.map((service) => (
        <Service service={service} key={service.id} />
      ))}
    </div>
  );
};
export default Services;
