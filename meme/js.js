
const h = [
    "url1",
]

random_number = Math.floor(Math.random() * h.length);

output = h[random_number];

document.getElementById("p1").innerHTML = output;