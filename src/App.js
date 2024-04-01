import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    mobileno: '',
    address: ''
  });
  const [showNewButton, setShowNewButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewButton(true);
    }, 1200);
    return
  }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname" className="form-label">
            FirstName
          </label>
          <input
            className="form-control"
            name="firstname"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileno" className="form-label">
            Mobile No
          </label>
          <input
            className="form-control"
            name="mobileno"
            value={formData.mobileno}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
        {showNewButton && (
          <div className="form-group">
            <button className="btn new-button">
              New Button
            </button>
          </div>
        )}
      </form>
    </div>
    </>
  );

}


export default App;

