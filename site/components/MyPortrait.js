import theme from './theme'

const MyPortrait = ({ width = 200, style, ...props }) => (
  <img
    {...props}
    src="/figma-export/markmiro-portrait-1x.jpg"
    srcSet="/figma-export/markmiro-portrait-2x.jpg 2x"
    style={{
      background: theme.colors.c1,
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
