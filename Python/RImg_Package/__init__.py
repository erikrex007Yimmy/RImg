url = 'http://winterolympicsmedals.com/medals.csv'
output = requests.get(url).text
print(output)