import os
import random
import shutil

if __name__ == '__main__':
    TRAINPATH = r'./train/'
    VALPATH = r'./val/'

    seen = set()

    numberTrain = len(os.listdir(TRAINPATH))
    valFiles = int(numberTrain * (30 / 100))

    for i in range(valFiles):
        random_file = random.choice(os.listdir(TRAINPATH))
        # print(random_file)

        seen.add(random_file.replace(".jpg", ""))

        source_file = "%s/%s"%(TRAINPATH,random_file)
        dest_file = VALPATH
        shutil.copy (source_file,dest_file)

    for file in seen:
        filename = '../labels/train/' + file + '.txt'
        shutil.copy(filename, '../labels/val/' + file + '.txt')
