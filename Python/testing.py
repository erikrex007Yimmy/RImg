from urllib.request import urlopen

with urlopen( 'https://erikrex007yimmy.github.io/RImg/meme/meme_api.html' ) as webpage:
    content = webpage.read().decode()
    if "https://erikrex007yimmy.github.io/" in content:
        print("true")

