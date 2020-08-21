import { VStack } from './Stack'
import theme from './theme'

const LoremParagraphs = ({ count = 3 }) => (
  <VStack>
    {[...new Array(count)].map((_, i) => (
      <div
        key={i}
        style={{
          // fontWeight: theme.fontWeights[0],
          paddingBottom: theme.space[2],
          lineHeight: theme.lineHeights[0],
        }}
      >
        Irure dolor ipsum pariatur culpa. Quis cillum esse culpa aute eiusmod
        eiusmod fugiat sunt do eiusmod. Eu excepteur cupidatat ipsum nulla sunt
        dolor consectetur enim esse occaecat occaecat fugiat mollit ad.
        Adipisicing amet non aliquip Lorem sit consequat ea. Dolor irure esse ad
        ullamco ad esse eiusmod duis nisi minim sunt aliquip.
      </div>
    ))}
  </VStack>
)

export default LoremParagraphs
