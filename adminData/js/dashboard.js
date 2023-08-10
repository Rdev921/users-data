let url = "https://events-6sz0.onrender.com/events"
const info = document.getElementById('info')

let obj = {
    image:info.image.value,
    name:info.name.value,
    desc:info.desc.value,
    location:info.location.value,
    category:info.category.value,
    price:info.price.value
}
info.addEventListener('submit',(e)=>{
    e.preventDefault();

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      console.log(dataArr);
      location.href='event.html';
    });
})