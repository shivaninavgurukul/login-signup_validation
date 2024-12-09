
"use client";

import { useEffect, useState } from "react";
import Signup from "./signup/page";
import Login from "./login/page";

export default function Page() {
  const [showSignup, setShowSignup] = useState(true); // Determines whether to show Signup or Login
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal opens by default when the page loads

  useEffect(() => {
    // Automatically opens modal when the page loads
    setIsModalOpen(true);
  }, []);

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Welcome!</h2>
            <p>
              If you already signed up, please login. Otherwise, sign up first.
            </p>
            <button onClick={() => setShowSignup(false)}>Go to Login</button>
            <button onClick={() => setShowSignup(true)}>Go to Signup</button>
            <br />
            <br />
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {!isModalOpen && (
        <div>
          {showSignup ? <Signup /> : <Login />}
        </div>
      )}
    </div>
  );
}
