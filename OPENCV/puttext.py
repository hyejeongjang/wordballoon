import cv2
import numpy as np
import moviepy.editor as mp
from moviepy.editor import *

clip = mp.VideoFileClip('test_video1.mp4')
clip.audio.write_audiofile("audiotest1.mp3")

face_cascade = cv2.CascadeClassifier(
    'cascade_files/haarcascade_frontalface_alt.xml')

face_mask = cv2.imread('wordballoon.PNG')
h_mask, w_mask = face_mask.shape[:2]

if face_cascade.empty():
    raise IOError('Unable to load the face cascade classifier xml file')

cap = cv2.VideoCapture('test_video1.mp4')
scaling_factor = 0.5
width = cap.get(cv2.CAP_PROP_FRAME_WIDTH)
height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)

print("재생할 파일 넓이, 높이 : %d, %d"%(width, height))

fourcc = cv2.VideoWriter_fourcc(*'DIVX')

filename = 'video/novoice_test1.mp4'
fps = cap.get(cv2.CAP_PROP_FPS)
out = cv2.VideoWriter(filename, fourcc, fps,(int(width), int(height)))

while True:
    ret, frame = cap.read()
    if not ret:
        break
#    frame = cv2.resize(frame, None, fx=scaling_factor, fy=scaling_factor, interpolation=cv2.INTER_AREA)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    face_rects = face_cascade.detectMultiScale(gray, 1.3, 5)
    for (x, y, w, h) in face_rects:
        if h > 0 and w > 0:
            x = int(x + 0.6*w)
            y = int(y - 0.2*h)
            w = int(0.8 * 2.5*w)
            h = int(0.7 * 2*h)

            # frame 얼굴에 맞춰서 자르기
            frame_roi = frame[y:y+h, x:x+w]
            # 마스크의 크기 조절
            face_mask_small = cv2.resize(
                face_mask, (w, h), interpolation=cv2.INTER_AREA)
            # 그레이마스크
            gray_mask = cv2.cvtColor(face_mask_small, cv2.COLOR_BGR2GRAY)

             ###############말풍선 속 자막 넣기################
            text = 'test'
            cv2.putText(frame, text=text, org=(int(x+w/2), int(y+h/2)), fontFace=cv2.FONT_HERSHEY_SIMPLEX, fontScale=1, color=(255, 255, 255), thickness=2)

            # 바탕이 검은색인 마스크를 만듦
            ret, mask = cv2.threshold(
                gray_mask, 240, 255, cv2.THRESH_BINARY_INV)
            mask_inv = cv2.bitwise_not(mask)
            masked_face = cv2.bitwise_and(
                face_mask_small, face_mask_small, mask=mask)
            masked_frame = cv2.bitwise_and(frame_roi, frame_roi, mask=mask_inv)

            frame[y:y+h, x:x+w] = cv2.add(masked_face, masked_frame)
            cv2.imshow('Face mask_inv', mask_inv)
            cv2.imshow(' masked_face', masked_face)

    cv2.imshow('Face Detector', frame)
    out.write(frame)

    c = cv2.waitKey(1)
    if c == 27:
        break
    #out.write(frame)
cap.release()
out.release()
cv2.destroyAllWindows()

#videoclip = VideoFileClip("video/novoice_test1.mp4")
#audioclip = AudioFileClip("audiotest1.mp3")

#videoclip.audio = audioclip
#videoclip.write_videofile("new_video1.mp4")
