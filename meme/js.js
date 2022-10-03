
const urls = [
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/skeleton-dancing.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/cuddle.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/cute-baby-mochi.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/cute-sunshine.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/dance-family.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/gross-bleh.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/gross-disgust.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/pog-frog-frog.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/schitts-creek-ew.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/swing-dance-swing-your-hips.gif",
    "https://erikrex007yimmy.github.io/RImg/meme/imgs/the-simpsons-pathetic.gif"
]

random_number = Math.floor(Math.random() * h.length);

output = urls[random_number];

document.getElementById("p1").innerHTML = output;