# Takes a video from the input dir and converts it into various formats
# Usage: `./convert-video.sh    INPUT_DIR    INPUT_FILE_NAME_WITHOUT_EXTENSION`
# Example: `./convert-video.sh    ../markmiro-videos    brutalist-toggle`

cd $1

# `-y` used to overwrite file if exists
# `-vf "fps=10,scale=600:-1:flags=lanczos"` meaning described here: https://superuser.com/a/556031

# `-vframes 1` means only get one frame
# ffmpeg -i src/$2.mov -y -vf "scale=600:-1:flags=lanczos" -vframes 1 build/$2.jpg

# Make a gif
ffmpeg -i src/$2.mov -y -vf "fps=10,scale=600:-1:flags=lanczos" build/$2.gif

# Convert to basic mp4 which is a good format for web
# ffmpeg -i src/$2.mov -y -vf "fps=14,scale=600:-1:flags=lanczos" build/$2.mp4
