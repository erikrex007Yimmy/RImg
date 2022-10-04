from urllib.request import urlopen

with urlopen( 'https://erikrex007yimmy.github.io/RImg/meme/meme_api.html' ) as webpage:
    content = webpage.read().decode()
    print(content)
    if "https://erikrex007yimmy.github.io/RImg/meme" in content:
        print("true")
