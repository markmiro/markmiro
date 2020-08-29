const MyPortrait = ({ width = 200, style, ...props }) => (
  <img
    {...props}
    src="/markmiro-portrait-1x.jpg"
    srcSet="/markmiro-portrait-2x.jpg 2x"
    style={{
      display: 'block',
      flexShrink: 0,
      maxWidth: 200,
      maxHeight: 300,
      width,
      height: `calc((${width} * 3) / 2)`,
      ...style,
    }}
  />
)

export default MyPortrait
