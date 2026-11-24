
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [profile, setProfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setProfile({
      name: name,
      bio: bio,
      image_url: imageUrl
    });
  };

  return (
    <div className="app">
      <header>
        <h1>Profile Card Generator</h1>
        <p>Create your own professional profile card</p>
      </header>

      <main className="container">

        <section className="form-section">
          <h2>Enter Your Details</h2>

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Bio</label>
            <textarea
              placeholder="Write something about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />

            <label>Profile Image URL</label>
            <input
              type="url"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />

            <button type="submit">
              Generate Profile
            </button>

          </form>
        </section>

        <section className="preview-section">
          <h2>Profile Preview</h2>

          {profile ? (
            <div className="profile-card">

              <img
                src={profile.image_url}
                alt={profile.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/150x150?text=Profile";
                }}
              />

              <h2>{profile.name}</h2>
              <p>{profile.bio}</p>

              <span>Profile Created Successfully!</span>

            </div>
          ) : (
            <div className="empty-preview">
              <h3>No Profile Yet</h3>
              <p>Enter your details to generate your profile card.</p>
            </div>
          )}

        </section>

      </main>
    </div>
  );
}

export default App;

