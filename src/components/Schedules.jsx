import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Schedules = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/appointments/`);
        console.log('Fetched appointments:', response.data);
        setAppointments(response.data);
        setFilteredAppointments(response.data);
      } catch (err) {
        console.error('Error fetching appointments:', err);
        setError('Failed to fetch appointments.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const filtered = appointments.filter((appointment) =>
      appointment.doctor_display_name.toLowerCase().includes(query) ||
      appointment.status.toLowerCase().includes(query) ||
      appointment.formatted_date.toLowerCase().includes(query)
    );

    setFilteredAppointments(filtered);
  };

  if (loading) return <div className="text-center mt-10">Loading appointments...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointments Schedule</h1>

      <div className="mb-6">
        <input
          type="text"
          className="w-full p-2 border rounded-md shadow-sm"
          placeholder="Search appointments by details..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-blue-600">Patient Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-blue-600">Doctor</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-blue-600">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-blue-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredAppointments.map((appt) => (
              <tr key={appt.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700">{appt.patient_name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{appt.doctor_display_name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{appt.formatted_date}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      appt.status === 'Scheduled'
                        ? 'bg-yellow-100 text-yellow-800'
                        : appt.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {appt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredAppointments.length === 0 && (
          <div className="text-center py-6 text-gray-500">No appointments found.</div>
        )}
      </div>
    </div>
  );
};

export default Schedules;
