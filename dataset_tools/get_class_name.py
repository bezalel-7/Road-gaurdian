import os
import random
import collections

# path = '/Volumes/Expansion/Deep Learning/completed_data_20'
path = '<path>'

folders = os.listdir (path)

class_link = dict ()

for folder in folders:
    if os.path.isdir(folder): 
        with open (f'{folder}/{folder}/{folder}{random.randint (0, 699)}.txt', 'r') as f:
            for line in f:
                cid = int(line[0:2])
        class_link[cid] = folder

ordered_map = collections.OrderedDict (sorted (class_link.items ()))
with open ('classes.txt', 'w') as cls:
    for K, V in ordered_map.items ():
        cls.write (f'{K}: {V}\n')
