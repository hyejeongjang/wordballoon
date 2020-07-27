# moviepy 모듈 설치
#pip install moviepy

# 모듈 로딩 후 오디오 추출
import moviepy.editor as mp

clip = mp.VideoFileClip("sonny.mp4")
clip.audio.write_audiofile("kang.mp3")
