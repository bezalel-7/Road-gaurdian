import cv2
import os

get_name = input('enter name : ')
firstname = get_name.split()
name = firstname[0].lower()

try:
	os.mkdir(name)
except OSError:
	print("Failed to create folder.")
os.chdir(name)

vid = cv2.VideoCapture(0)

i = 0
while(True):
	ret, frame = vid.read()
	cv2.imwrite(f'{name}{str(i)}.jpg', frame)
	if i == 999: break
	i += 1

vid.release()
cv2.destroyAllWindows()