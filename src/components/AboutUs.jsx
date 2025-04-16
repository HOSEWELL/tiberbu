import React from 'react';

function AboutUs() {
  const testimonials = [
    {
      role: 'Doctor',
      name: 'Dr. Daniel M.',
      message:
        'Tiberbu has revolutionized the way I manage appointments. It keeps my schedule organized and reduces no-shows. I can now focus more on patient care than admin tasks!',
      image: '/prof.png', 
    },
    {
      role: 'Patient',
      name: 'Jane A.',
      message:
        'Using Tiberbu has made booking appointments super easy. I don’t have to call or wait anymore. I just pick a time and show up. It’s fast and reliable!',
      image: '/pat.jpg', 
    },
  ];

  return (
    <section
      id="about"
      className=" bg-blue-50 py-16 px-4 md:px-20 text-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 ">
        How Tiberbu is Changing Lives
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 transition-transform hover:scale-[1.02]"
          >
            <img
              src={testimonial.image}
              alt={testimonial.role}
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-300"
            />
            <div>
              <p className="text-lg italic mb-3">"{testimonial.message}"</p>
              <h4 className="text-xl font-semibold text-blue-600">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
