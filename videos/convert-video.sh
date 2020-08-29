# Takes a video from the input dir and converts it into various formats
# Example: `./convert-video.sh brutalist-toggle`

# `-y` used to overwrite file if exists
# `-vf "fps=10,scale=600:-1:flags=lanczos"` meaning described here: https://superuser.com/a/556031

# `-vframes 1` means only get one frame
# ffmpeg -i src/$1.mov -y -vf "scale=600:-1:flags=lanczos" -vframes 1 build/$1.jpg

# Make a gif
ffmpeg -i src/$1.mov -y -vf "fps=10,scale=600:-1:flags=lanczos" build/$1.gif

# Convert to basic mp4 which is a good format for web
# ffmpeg -i src/$1.mov -y -vf "fps=14,scale=600:-1:flags=lanczos" build/$1.mp4
