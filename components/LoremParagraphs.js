import { VStack } from './Stack'
import theme from './theme'

const LoremParagraphs = ({ count = 3 }) => (
  <VStack space={2}>
    {[...new Array(count)].map((_, i) => (
      <p
        key={i}
        style={{
          lineHeight: theme.lineHeights[0],
        }}
      >
        Irure dolor ipsum pariatur culpa. Quis cillum esse culpa aute eiusmod
        eiusmod fugiat sunt do eiusmod. Eu excepteur cupidatat ipsum nulla sunt
        dolor consectetur enim esse occaecat occaecat fugiat mollit ad.
        Adipisicing amet non aliquip Lorem sit consequat ea. Dolor irure esse ad
        ullamco ad esse eiusmod duis nisi minim sunt aliquip.
      </p>
    ))}
  </VStack>
)

export default LoremParagraphs
