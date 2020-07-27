from moviepy.editor import *
videoclip = VideoFileClip("new_kang.avi")
audioclip = AudioFileClip("new_kang.mp3")
new_audioclip = CompositeAudioClip([audioclip])
videoclip.audio = new_audioclip
videoclip.write_videofile("new_kang_final.mp4")
