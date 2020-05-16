f = open('log','r')
lines = f.readlines()
for line in lines:
	tmp = line.split('id=')[1].split('stroke')[0]
	print tmp
