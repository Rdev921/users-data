// function displayUserData(users) {
//     const userContainer = document.getElementById("userContainer");
//     userContainer.innerHTML = "";
  
//     users.forEach(user => {
//       const card = document.createElement("div");
//       card.classList.add("card");
  
//       const image = document.createElement("img");
//       image.src = "images/dummy-image.jpg"; // Replace with actual image URL
//       image.alt = user.name;
//       card.appendChild(image);
  
//       const name = document.createElement("h2");
//       name.textContent = user.name;
//       card.appendChild(name);
  
//       const age = document.createElement("p");
//       age.textContent = Age: ${user.age};
//       card.appendChild(age);
  
//       const place = document.createElement("p");
//       place.textContent = Place: ${user.place};
//       card.appendChild(place);
  
//       const batchName = document.createElement("p");
//       batchName.textContent = Batch Name: ${user.batch_name};
//       card.appendChild(batchName);
  
//       const profession = document.createElement("p");
//       profession.textContent = Profession: ${user.profession};
//       card.appendChild(profession);
  
//       const editIcon = document.createElement("i");
//       editIcon.classList.add("fas", "fa-edit");
//       editIcon.addEventListener("click", () => editUser(user.id));
//       card.appendChild(editIcon);
  
//       const deleteIcon = document.createElement("i");
//       deleteIcon.classList.add("fas", "fa-trash-alt");
//       deleteIcon.addEventListener("click", () => deleteUser(user.id));
//       card.appendChild(deleteIcon);
  
//       userContainer.appendChild(card);
//     });
//   }
  
//   // Function to sort user data by age
//   function sortDataByAge(users) {
//     return users.sort((a, b) => a.age - b.age);
//   }
  
//   // Function to filter user data by profession
//   function filterDataByProfession(users, profession) {
//     return users.filter(user => user.profession === profession);
//   }
  
//   // Function to search user data by name
//   function searchUserByName(users, name) {
//     return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
//   }
  
//   // Function to handle user deletion
//   function deleteUser(userId) {
//     // Send DELETE request to JSON Server
//     fetch(http://localhost:3000/users/${userId}, {
//       method: "DELETE"
//     })
//       .then(response => response.json())
//       .then(() => {
//         // Refresh user data after deletion
//         fetchUserData();
//       })
//       .catch(error => console.error(error));
//   }
  
//   // Function to handle user editing
//   function editUser(userId) {
//     // Get user data from JSON Server
//     fetch(http://localhost:3000/users/${userId})
//       .then(response => response.json())
//       .then(user => {
//         // TODO: Implement modal or form to edit user details
//         console.log("Edit User:", user);
//       })
//       .catch(error => console.error(error))
//   }
  
//   // Function to fetch user data from JSON Server
//   function fetchUserData() {
//     fetch("http://localhost:3000/users")
//       .then(response => response.json())
//       .then(users => {
//         // Display user data
//         displayUserData(users);
//       })
//       .catch(error => console.error(error));
//   }
  
//   // Call the fetchUserData function when the Data page is loaded
//   window.addEventListener("DOMContentLoaded", fetchUserData);