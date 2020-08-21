const MyPortrait = ({ width = 200 }) => (
  <img
    src="/markmiro-portrait-1x.jpg"
    srcSet="/markmiro-portrait-2x.jpg 2x"
    style={{
      display: 'block',
      flexShrink: 0,
      width,
      height: (width * 3) / 2,
    }}
  />
)

export default MyPortrait
