import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="/profile-placeholder.png"
            alt="Profile"
            className="profile-avatar"
          />
          <h2 className="profile-name">John Doe</h2>
          <p className="profile-email">john.doe@example.com</p>
        </div>

        <div className="profile-info">
          <h3>Contact Info</h3>
          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p>
            <strong>Address:</strong> 123 Fashion Street, Mumbai, India
          </p>
        </div>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
