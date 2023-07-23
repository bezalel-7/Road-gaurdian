from mtcnn import MTCNN
from PIL import Image
import cv2
import os
import sys

def toYOLO (x, y, w, h, img_height, img_width):
    x_center = x / img_width
    y_center = y / img_height

    box_width = w / img_width
    box_height = h / img_height

    x_center += box_width / 2
    y_center += box_height / 2

    return (x_center, y_center, box_width, box_height)

cid = int (input ('enter the class id: '))
folder_name = input ('enter the name: ')

print (f'labelling started for {folder_name}!')

idx = int (input ('enter the stating index: '))
os.chdir(folder_name)
detector = MTCNN()

fx = f'<path>\\{folder_name}\\{folder_name}{idx}.jpg'
fakeImage = Image.open(fx)
fxHeight = fakeImage.height
fxWidth = fakeImage.width

entry_list = os.listdir (f'<path>\\{folder_name}')
files = len (entry_list) - 1

for i in range (files):
    print (f'processing file of {i} / {files}')

    filepath = f'<path>\\{folder_name}\\{folder_name}{idx}.jpg'

    try:
        image = cv2.cvtColor(cv2.imread(filepath), cv2.COLOR_BGR2RGB)
    except:
        print('The given path is incorrect!')
        idx += 1
        continue

    data = detector.detect_faces(image)

    try: bounding_box = data[0]['box']
    except: 
        idx += 1
        continue

    print(bounding_box)

    filename = folder_name + str(idx) + '.txt'
    with open(filename, 'w') as f:
        yoloC = toYOLO(bounding_box[0], bounding_box[1], bounding_box[2], bounding_box[3], fxHeight, fxWidth)
        f.write(f'{cid} {yoloC[0]} {yoloC[1]} {yoloC[2]} {yoloC[3]}')
    idx += 1
os.chdir ('<path>')
print (f'completed labelling for {folder_name}!')
cid += 1
