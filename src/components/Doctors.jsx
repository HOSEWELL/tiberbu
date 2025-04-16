import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Form fields
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Availability state
  const [availability, setAvailability] = useState([]);
  const [day, setDay] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/doctors/`);
      setDoctors(response.data);
    } catch (error) {
      console.error('Failed to fetch doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleAddAvailability = () => {
    if (day && fromTime && toTime) {
      setAvailability([...availability, { [day.toLowerCase()]: `${fromTime}-${toTime}` }]);
      setDay('');
      setFromTime('');
      setToTime('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/doctors/`, {
        first_name,
        last_name,
        specialization,
        phone,
        password,
        email,
        availability,
      });
  
      // Reset form
      setFirstName('');
      setLastName('');
      setSpecialization('');
      setPhone('');
      setEmail('');
      setPassword('');
      setAvailability([]);
      setShowForm(false);
  
      fetchDoctors(); 
    } catch (error) {
      console.error('Failed to add doctor:', error);
    }
  };
  

  return (
    <div className="min-h-screen bg-blue-50 p-6 relative">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Meet Our Specialists</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading doctors...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${doc.first_name}-${doc.last_name}`}
                  alt={`${doc.first_name} ${doc.last_name}`}
                  className="w-16 h-16 rounded-full border border-gray-300 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {doc.first_name} {doc.last_name}
                  </h3>
                  <p className="text-sm text-gray-500">{doc.specialization}</p>
                </div>
              </div>

              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <span className="font-medium text-lg text-gray-600">Email: </span> {doc.email}
                </p>
                <p>
                  <span className="font-medium text-lg text-gray-600">Phone: </span> {doc.phone}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-blue-600 font-semibold text-lg mb-1">Availability:</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  {doc.availability.map((slot, index) => {
                    const [day, hours] = Object.entries(slot)[0];
                    return (
                      <li key={index}>
                        {day.charAt(0).toUpperCase() + day.slice(1)}: {hours}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg text-lg"
      >
        + Add New Doctor
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Add Doctor</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Specialization</label>
                <input
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Availability</label>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                  >
                    <option value="">Select Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                  <input
                    type="time"
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                  />
                  <span>to</span>
                  <input
                    type="time"
                    value={toTime}
                    onChange={(e) => setToTime(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                  />
                  <button
                    type="button"
                    onClick={handleAddAvailability}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                  >
                    Add Slot
                  </button>
                </div>

                <ul className="mt-2 list-disc ml-6 text-sm text-gray-600">
                  {availability.map((slot, index) => {
                    const [day, time] = Object.entries(slot)[0];
                    return (
                      <li key={index}>
                        {day.charAt(0).toUpperCase() + day.slice(1)}: {time}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex justify-end gap-[19em] mt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-200 px-4 py-2 rounded text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
