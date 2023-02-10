let week = [{
    taskName: "Dog",
    description: "Take the dog for a walk",
    importance: 1,
    pic: "https://cdn.pixabay.com/photo/2021/05/26/10/56/walk-6284873__340.jpg"
}, {
    taskName: "Shopping",
    description: "Go to Naschmarkt ",
    importance: 2,
    pic: "https://cdn.pixabay.com/photo/2015/12/07/14/11/shopping-cart-1080840__340.jpg"
}, {
    taskName: "Kid",
    description: "Go to the playground",
    importance: 3,
    pic: "https://cdn.pixabay.com/photo/2016/11/28/10/48/child-1864718__340.jpg"

}, {
    taskName: "Cinema",
    description: "Select the movie for the weekly cinema evening",
    importance: 0,
    pic: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645__340.jpg"
}, {
    taskName: "Football",
    description: "Go to the training",
    importance: 5,
    pic: "https://cdn.pixabay.com/photo/2016/09/18/20/47/football-1678992__340.jpg"
}, {
    taskName: "Partytime",
    description: "Select the location to meet your folks",
    importance: 6,
    pic: "https://media.istockphoto.com/id/684007168/de/foto/drei-m%C3%A4nnlichen-freunden-karten-spielen-und-lachen-zu-hause.jpg?b=1&s=170667a&w=0&k=20&c=3kp6bE3zxlECSewbgn0Y-Suc_8AHuKFH8mkjvzFSwk8="
}, {
    taskName: "Familytime",
    description: "Go to the grandparents and look after them",
    importance: 0,
    pic: "https://media.istockphoto.com/id/144965031/de/foto/familientreffen.jpg?b=1&s=170667a&w=0&k=20&c=lDKfZi1uBqOv8a4kri-s_RbLAHF9bbDq6GF0tDDPCrg="
}, {
    taskName: "Coding",
    description: "Learn for the Codereview",
    importance: 8,
    pic: "https://cdn.pixabay.com/photo/2017/06/29/01/02/home-office-2452806__340.jpg"
}, {
    taskName: "Fitness",
    description: "Go to the Gym",
    importance: 9,
    pic: "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg"
}];

for (let val of week) {
    document.getElementById("result").innerHTML += `
    <div>
    <div class="card" style="width: 18rem;">
    <img src="${val.pic}" class="card-img-top" alt="${val.taskName}">
    <div class="card-body">
      <h5 class="card-title">${val.taskName}</h5>
      <p> ${val.description} </p>
      <hr>
      
      <p> <i class="bi bi-arrow-right-square-fill"></i> <a href="#" class="btn btn-success importanceBtn">Priority Level </a><p class="increase">${val.importance}</p>
      
    </div>
    </div>
    </div>`;
}

let btns = document.getElementsByClassName("importanceBtn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        week[i].importance++;
        document.getElementsByClassName("increase")[i].innerHTML = week[i].importance;
    })

}

function printPrio() {
    let importance = document.getElementsByClassName("numbers").value;

    document.getElementById("color").innerHTML = "<span id='color'>" + importance + "</span> ";


    if (importance >= 1) {
        document.getElementById("color").style.backgroundColor = "green";
    } else {
        document.getElementById("color").style.backgroundColor = "red";
    }
}