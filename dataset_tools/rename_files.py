import os

name = input ('enter the name of the folder: ')
path = f'<path>{name}'

os.chdir (path)
files = os.listdir ('.')

fileid = 0
for file in files:
    old = f'{path}\{file}'
    new = f'{name}{fileid}.jpg'
    fileid += 1

    os.rename (old, new)
