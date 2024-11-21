import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Form() {
  const [data, setData] = useState({ name: '', email: '', phone: '', address: '' });
  const location = useLocation();
  const [personId, setPersonId] = useState(location.state?.personId);
  
  useEffect(() => {
    if (personId) getDataById(personId);
  }, [personId]);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function getDataById(id) {
    try {
      const res = await axios.get(`http://localhost:9000/api/getid/${id}`);
      setData(res.data[0] || {});
    } catch (error) {
      console.error("Error fetching data by ID:", error);
    }
  }

  async function editData(data, id) {
    try {
      const res = await axios.put(`http://localhost:9000/api/saveid/${id}`, data);
      alert("Data saved", res.data);
    } catch (error) {
      console.error("Error editing data:", error);
    }
  }

  async function saveNew(data) {
    try {
      const res = await axios.post(`http://localhost:9000/api/savenew`, data);
      alert("Data saved", res.data);
    } catch (error) {
      console.error("Error saving new data:", error);
    }
  }

  function handleClick() {
    if (!personId) {
      saveNew(data);
    } else {
      editData(data, personId);
    }
  }

  return (
    <div className="container">
      <h2>Edit Form</h2>
      <form>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="inputGroup">
          <label>Address:</label>
          <textarea
            id="address"
            name="address"
            value={data.address}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="button" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
