  import React, { useState, useEffect } from 'react';
  import './App.css';
  
  import { FaPhoneAlt, FaEnvelope, FaGlobe, FaHeart, FaEdit, FaTrash } from 'react-icons/fa';
  

  function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingUserId, setEditingUserId] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', website: '' });

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data);
          setLoading(false);
        });
    }, []);

    const generateAvatarUrl = (username) => {
      return `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
    };

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      const updatedUsers = users.map(user => {
        if (user.id === editingUserId) {
          return { ...user, ...formData };
        }
        return user;
      });
      setUsers(updatedUsers);
      setEditingUserId(null);
      setFormData({ name: '', email: '', phone: '', website: '' });
    };

    const handleCancel = () => {
      setEditingUserId(null);
      setFormData({ name: '', email: '', phone: '', website: '' });
    };

    if (loading) {
      return (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      );
    }

    return (
      <div className="container">
        <h1>User Profiles</h1>
        <div className="user-list">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <img src={generateAvatarUrl(user.username)} alt={user.name} />
              <h2>{user.name}</h2>
              <p><FaEnvelope /> {user.email}</p>
              <p><FaPhoneAlt /> {user.phone}</p>
              <p>{user.address.street}, {user.address.suite}, {user.address.city}</p>
              <p><FaGlobe /> {user.website}</p>
              <p>{user.company.name}</p>

              <div className="user-actions">
                <FaHeart />
                <button onClick={() => setEditingUserId(user.id)}><FaEdit /></button>
                <FaTrash />
              </div>

                {editingUserId === user.id &&
                  <div className="popup">
                    <form onSubmit={handleFormSubmit}>
                      <label htmlFor="name">Name:</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

                      <label htmlFor="email">Email:</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

                      <label htmlFor="phone">Phone:</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />

                      <label htmlFor="website">Website:</label>
                      <input type="url" name="website" value={formData.website} onChange={handleInputChange} required />
                      <button type="submit">Save</button>
                  <button type="button" onClick={handleCancel}>Cancel</button>
                </form>
              </div>
            }
          </div>
        ))}
      </div>
  </div>
  );
  }

  export default App;
