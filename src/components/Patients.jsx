import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [visibleInsurance, setVisibleInsurance] = useState({});

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // Make sure to use import.meta.env for the API base URL
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/patients/`);
        console.log("Fetched patients data:", response.data); 
        setPatients(response.data);
        setFilteredPatients(response.data); 
      } catch (err) {
        setError('Failed to fetch patients.');
        console.error("Error fetching patients:", err); 
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);

    // Filter patients based on search query
    const filtered = patients.filter((patient) => {
      const fullName = `${patient.first_name} ${patient.last_name}`.toLowerCase();
      const gender = patient.gender.toLowerCase();
      const insuranceProvider = patient.insurance_provider.toLowerCase();
      const phone = patient.phone.toLowerCase();
      const email = patient.email.toLowerCase();

      return (
        fullName.includes(query.toLowerCase()) ||
        gender.includes(query.toLowerCase()) ||
        insuranceProvider.includes(query.toLowerCase()) ||
        phone.includes(query.toLowerCase()) ||
        email.includes(query.toLowerCase())
      );
    });

    setFilteredPatients(filtered);
  };

  // Toggle insurance number visibility
  const toggleInsuranceVisibility = (id) => {
    setVisibleInsurance((prevState) => ({
      ...prevState,
      [id]: !prevState[id], 
    }));
  };

  if (loading) return <div className="text-center mt-10">Loading patients...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  // Ensure filteredPatients is an array before calling .map()
  const patientsToDisplay = Array.isArray(filteredPatients) ? filteredPatients : [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Registered Patients</h1>

      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          className="w-full p-2 border rounded-md shadow-sm"
          placeholder="Search patients details..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Gender</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Insurance Provider</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Insurance Number</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {patientsToDisplay.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {patient.first_name} {patient.last_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{patient.gender}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{patient.insurance_provider}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{patient.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{patient.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <button
                    className="text-blue-500"
                    onClick={() => toggleInsuranceVisibility(patient.id)}
                  >
                    {visibleInsurance[patient.id] ? 'Hide' : 'Show'} Insurance Number
                  </button>

                  {visibleInsurance[patient.id] && (
                    <div className="mt-2 text-gray-600">{patient.insurance_number}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
