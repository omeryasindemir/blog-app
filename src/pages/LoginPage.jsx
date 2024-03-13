import React, { useEffect, useState } from "react";
import "../firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") == 1) {
        navigate("/admin");

    } else {
        console.log("not login!")
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Başarılı giriş
        const user = userCredential.user;
        localStorage.setItem("token", 1);
        navigate("/admin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage); // Hata mesajını ayarla
      });
  };

  return (
    <React.Fragment>
      <div className="login_wrapper">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
            value={email} // Email değeri
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
            value={password} // Şifre değeri
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button> {/* type="submit" ekleyin */}
        </form>
        {error && <p>{error}</p>} {/* Hata mesajını görüntüle */}
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
