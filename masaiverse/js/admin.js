function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Perform API request for login
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        if (response.ok) {
          location.href = "data.html"; // Redirect to data page on successful login
        } else {
          document.getElementById("errorMessage").textContent = "Invalid email or password";
        }
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("errorMessage").textContent = "An error occurred while logging in";
      });
  }
  
  // Event listener for form submission
  document.getElementById("loginForm").addEventListener("submit", handleLogin);