import moviepy.editor as mp

clip = mp.VideoFileClip("data/video/test.mp4")
clip.audio.write_audiofile("mask.mp3")
