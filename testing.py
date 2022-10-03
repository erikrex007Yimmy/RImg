from urllib.request import urlopen

url = 'http://winterolympicsmedals.com/medals.csv'
output = urlopen(url).read()
print(output.decode('utf-8'))