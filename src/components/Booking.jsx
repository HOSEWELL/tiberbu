import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

const Bookings = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const patientId = localStorage.getItem('patientId');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/doctors/`);
        setDoctors(res.data);
      } catch (error) {
        toast.error('Failed to fetch doctors.');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleDateChange = (doctorId, date) => {
    setSelectedDates((prev) => ({ ...prev, [doctorId]: date }));
  };

  const handleBook = async (doctor) => {
    const selectedDate = selectedDates[doctor.id];

    if (!selectedDate) {
      toast.error('Please select an appointment date.');
      return;
    }

    if (!patientId) {
      toast.error('Patient not logged in.');
      return;
    }

    const payload = {
      appointment_date: selectedDate,
      patient: Number(patientId),
      doctor_name: doctor.first_name,
      doctor_specialization: doctor.specialization,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/appointments/`, payload);
      toast.success(`Appointment booked with Dr. ${doctor.first_name}`);
    } catch (err) {
      toast.error('Booking failed. Please try again.');
    }
  };

  return (
    <div className="p-4  max-w-7xl mx-auto">
      <div className="relative bg-gray-50 border shadow-xl rounded-2xl p-6">
        <button
          onClick={() => navigate('/home')}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Book an Appointment</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading doctors...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="border p-5 rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Dr. {doc.first_name} {doc.last_name}
                </h3>
                <p className="text-gray-600 mb-2">Specialization: {doc.specialization}</p>

                <div className="mb-3">
                  <p className="text-gray-700 font-medium">Available Time:</p>
                  <ul className="text-sm text-gray-600 ml-4 list-disc">
                    {Array.isArray(doc.availability) && doc.availability.length > 0 ? (
                      doc.availability.map((dayObj, index) => {
                        const [day, time] = Object.entries(dayObj)[0];
                        return (
                          <li key={index}>
                            <strong className="capitalize">{day}:</strong> {time}
                          </li>
                        );
                      })
                    ) : (
                      <li>Not specified</li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Date:</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDates[doc.id] || ''}
                    onChange={(e) => handleDateChange(doc.id, e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={() => handleBook(doc)}
                  className="mt-2 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
