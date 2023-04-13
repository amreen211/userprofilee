import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
              {likedUserIds.includes(user.id)
                ? <FaHeart className="heart-icon red" onClick={() => handleUnlikeUser(user.id)} />
                : <FaHeart className="heart-icon" onClick={() => handleLikeUser(user.id)} />}
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
