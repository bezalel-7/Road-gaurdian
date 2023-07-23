import os

name = input ('enter the name: ')
cid = int (input ('enter new class id: '))

path = f'<path>\\{name}\\{name}'

os.chdir (path)

idx = 0

while (idx < 700):
    try:
        with open (f'{name}{idx}.txt', 'r') as filex:
            os.chdir ('labels')
            with open (f'{name}{idx}.txt', 'w') as filey:
                for line in filex:
                    filey.write (f'{cid}{line[1:]}')
            os.chdir (path)
            idx += 1
    except: 
        idx += 1
        continue
