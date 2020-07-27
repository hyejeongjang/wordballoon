from google.cloud import speech_v1
from google.cloud.speech_v1 import enums
import io
import os

#GOOGLE_APPLICATION_CREDENTIALS

path = 'C:/Users/JANG/Desktop/WB_prac/STT/video_eng1.mp3'


def sample_long_running_recognize(local_file_path):
    """
    Transcribe a long audio file using asynchronous speech recognition

    Args:
      local_file_path Path to local audio file, e.g. /path/audio.wav
    """

    client = speech_v1.SpeechClient()

    # local_file_path = 'resources/brooklyn_bridge.raw'

    # The language of the supplied audio
    language_code = "en-US"

    # Sample rate in Hertz of the audio data sent
    sample_rate_hertz = 16000

    # Encoding of audio data sent. This sample sets this explicitly.
    # This field is optional for FLAC and WAV audio formats.
    encoding = enums.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED
    config = {
        "language_code": language_code,
        "sample_rate_hertz": sample_rate_hertz,
        "encoding": encoding,
        enable_automatic_punctuation=True
    }
    with io.open(local_file_path, "rb") as f:
        content = f.read()
    audio = {"content": content}

    operation = client.long_running_recognize(config, audio)

    print("Waiting for operation to complete...")
    response = operation.result()

    abc = []
    for result in response.results:
        # First alternative is the most probable result
        alternative = result.alternatives[0]
        print("Transcript: {}".format(alternative.transcript))
        abc.append(format(alternative.transcript))

    f = open("C:/Users/JANG/Desktop/WB_prac/STT/newfile.txt", 'a')
    f.writelines(abc)
    f.close()


sample_long_running_recognize(path)
