export default function Spacer({ size }) {
  return (
    <div
      style={{
        width: `${size}em`,
        height: `${size}em`,
        flexShrink: 0,
      }}
    />
  )
}
