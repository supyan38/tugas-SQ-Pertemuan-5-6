function cancelForm() {
    if (confirm("Yakin ingin membatalkan?")) {
      window.location.href = "login.html"; // balik ke login
    }
  }
  
  // Validasi Registrasi
  document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const verify = document.getElementById("verifyPassword").value;
  
    if (!email.includes("@")) {
      alert("Email tidak valid.");
      return;
    }
  
    if (password.length !== 8) {
      alert("Password harus tepat 8 karakter.");
      return;
    }
  
    if (password !== verify) {
      alert("Password tidak sama.");
      return;
    }
  
    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "login.html";
  });
  
  // Validasi Login
  document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email.includes("@")) {
      alert("Email tidak valid.");
      return;
    }
  
    if (password.length !== 8) {
      alert("Password harus tepat 8 karakter.");
      return;
    }
  
    alert("Login sukses (simulasi).");
  });
  