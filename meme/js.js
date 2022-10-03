
const h = [
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/skeleton-dancing.gif"
]

random_number = Math.floor(Math.random() * h.length);

output = h[random_number];

document.getElementById("p1").innerHTML = output;