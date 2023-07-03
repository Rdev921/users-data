function calculateAverageAge(users) {
    const totalUsers = users.length;
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return Math.round(totalAge / totalUsers);
  }
  
  // Function to display event reports
  function displayEventReports(users) {
    const totalGuests = users.length;
    const students = users.filter(user => user.profession === "Student").length;
    const professionals = users.filter(user => user.profession !== "Student").length;
    const averageAge = calculateAverageAge(users);
  
    document.getElementById("totalGuests").textContent = totalGuests;
    document.getElementById("totalStudents").textContent = students;
    document.getElementById("totalProfessionals").textContent = professionals;
    document.getElementById("averageAge").textContent = averageAge;
  }
  
  // Function to fetch user data from JSON Server and display event reports
  function fetchUserDataForReports() {
    fetch("https://user-data-eaw5.onrender.com/users")
      .then(response => response.json())
      .then(users => {
        // Display event reports
        displayEventReports(users);
      })
      .catch(error => console.error(error));
  }
  
  // Call the fetchUserDataForReports function when the Reports page is loaded
  window.addEventListener("DOMContentLoaded", fetchUserDataForReports);