import { VStack } from './Stack'
import P from './P'

const LoremParagraphs = ({ count = 3 }) => (
  <VStack space={2}>
    {[...new Array(count)].map((_, i) => (
      <P key={i}>
        Irure dolor ipsum pariatur culpa. Quis cillum esse culpa aute eiusmod
        eiusmod fugiat sunt do eiusmod. Eu excepteur cupidatat ipsum nulla sunt
        dolor consectetur enim esse occaecat occaecat fugiat mollit ad.
        Adipisicing amet non aliquip Lorem sit consequat ea. Dolor irure esse ad
        ullamco ad esse eiusmod duis nisi minim sunt aliquip.
      </P>
    ))}
  </VStack>
)

export default LoremParagraphs
