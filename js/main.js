var apt = document.getElementById('apt');
apt.addEventListener("click", addApt);

var building = document.getElementById('building');
building.addEventListener('click', addBuilding);

var neighborhood = document.getElementById('neighborhood'
);
neighborhood.addEventListener('click', addNeighborhood);

building.style.display = 'none';
neighborhood.style.display = 'none';

function addApt() {
  hideDetail();
  apt.style.display = 'block';
}

function addBuilding() {
  hideDetail();
  building.style.display = 'block';
}

function addNeighborhood() {
  hideDetail();
  neighborhood.style.display = 'block';
}

function hideDetail() {
  apt.style.display = 'none';
  building.style.display = 'none';
  neighborhood.style.display = 'none';
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
