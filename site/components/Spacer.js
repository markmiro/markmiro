import theme from './theme'

export default function Spacer({ size }) {
  return (
    <div
      style={{
        width: theme.space[size],
        height: theme.space[size],
        flexShrink: 0,
      }}
    />
  )
}
