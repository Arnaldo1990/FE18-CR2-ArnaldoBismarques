let week = [{
    taskName: "Take the dog for a walk",
    age: "32",
    like: 199,
    pic: "https://cdn.pixabay.com/photo/2021/05/26/10/56/walk-6284873__340.jpg"
}, {
    taskName: "Shopping",
    age: "1",
    like: 499,
    pic: "https://cdn.pixabay.com/photo/2016/01/27/22/10/shopping-1165437__340.jpg"
}, {
    taskName: "Time with your Child",
    lName: "Bismarques",
    age: "29",
    like: 10,
    pic: "https://cdn.pixabay.com/photo/2016/11/28/10/48/child-1864718__340.jpg"

}, {
    taskName: "Cinema",
    lName: "Lang",
    age: "42",
    like: 55,
    pic: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645__340.jpg"
}, {
    taskName: "football",
    lName: "Holland",
    age: "55",
    like: 235,
    pic: "https://cdn.pixabay.com/photo/2016/09/18/20/47/football-1678992__340.jpg"
}, {
    taskName: "Partytime",
    lName: "Lang",
    age: "42",
    like: 55,
    pic: "https://media.istockphoto.com/id/684007168/de/foto/drei-m%C3%A4nnlichen-freunden-karten-spielen-und-lachen-zu-hause.jpg?b=1&s=170667a&w=0&k=20&c=3kp6bE3zxlECSewbgn0Y-Suc_8AHuKFH8mkjvzFSwk8="
}, {
    taskName: "Familytime",
    lName: "Lang",
    age: "42",
    like: 55,
    pic: "https://media.istockphoto.com/id/144965031/de/foto/familientreffen.jpg?b=1&s=170667a&w=0&k=20&c=lDKfZi1uBqOv8a4kri-s_RbLAHF9bbDq6GF0tDDPCrg="
}, {
    taskName: "Coding",
    lName: "Lang",
    age: "42",
    like: 55,
    pic: "https://cdn.pixabay.com/photo/2017/06/29/01/02/home-office-2452806__340.jpg"
}, {
    taskName: "Fitness",
    lName: "Lang",
    age: "42",
    like: 55,
    pic: "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg"
}];

for (let val of week) {
    document.getElementById("result").innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${val.pic}" class="card-img-top" alt="${val.taskName}">
    <div class="card-body">
      <h5 class="card-title">${val.taskName}</h5>
      <p class="${val.taskName}.</p>
      <a href="#" class="btn btn-primary">More infos</a>
      <a href="#" class="btn btn-secondary">Show more details</a>
    </div>
    </div>`;
}