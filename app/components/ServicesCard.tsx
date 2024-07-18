const services = [
    { title: 'Team', icon: '👥' },
    { title: 'Development of mobile applications', icon: '📱' },
    { title: 'Development and implementation ERP systems', icon: '🖧' },
    { title: 'User interface, User experience design', icon: '🎨' },
    { title: 'Optimization IT consulting infrastructure', icon: '⚙️' },
    { title: 'IT consulting', icon: '💻' },
  ];
  
  const ServicesCard = () => {
    return (
      <section className="text-start">
        <h1 className="title text-blue-600 p-5 mb-8">Our services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 shadow-md rounded p-6">
              <div className="text-2xl p-4 pl-0 mb-4 cursor-default">{service.icon}</div>
              <h3 className="text-xl font-semibold cursor-default">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesCard;
  