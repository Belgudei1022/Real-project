import React, { useState } from "react";
import Layout from "../componets/layout";

const Settings = () => {
  const [settings, setSettings] = useState({
    username: "Jack and Bek",
    email: "javkhaa&Bek@example.com",
    notifications: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <Layout>
      <div className="mt-36 p-[30px] lg:mt-4 lg:absolute lg:right-4 lg:w-5/6">
        <h2>Settings</h2>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={settings.username}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                color: "#BCC0C0",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={settings.email}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                color: "#BCC0C0",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleInputChange}
                style={{ marginRight: "8px" }}
              />
              Enable Notifications
            </label>
          </div>

          <button
            type="button"
            onClick={handleSave}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Save Settings
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Settings;
