import React from 'react';

const founders = [
  {
    name: 'Ketan Mane',
    role: 'Front-end & Back-end', 
  
    image: 'https://i.postimg.cc/mcHhrzww/Whats-App-Image-2025-04-11-at-19-08-03-9ecea172.jpg', // Replace with actual image file
  },
  {
    name: 'Madhukar Reddy',
    role: 'Front-end Team',
    image: 'https://i.postimg.cc/YvVhkf10/madhu.jpg', // Replace with actual image file
  },

];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Me</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

  