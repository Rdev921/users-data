let url = "https://events-6sz0.onrender.com/events"
let eventcard = document.querySelector('.card');
let output = '';
function displayData(events){
    events.forEach(event=>{
      output+= 
      `
      <div class="card-container">
      <img src=${event.poster} alt="poster">
      <h3>${event.name}</h3>
      <p>${event.description}</p>
      <h4>Date:${event.date}</h4>
      <h4>Location:${event.location}</h4>
      <h4>Category:${event.category}</h4>
      <h4>Price:${event.price}</h4>
      </div>
      `  
    })
    eventcard.innerHTML = output;
}

fetch(url)
.then(res=>res.json())
.then(data=>displayData(data));

