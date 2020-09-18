import { css } from '@emotion/core'

import theme from './theme'
import P from './P'
import ConvertKitSubscribeForm from './ConvertKitSubscribeForm'
import { VStack } from './Stack'

const SubscribeForm = () => (
  <div
    css={css`
      background: ${theme.colors.c1};
      padding: ${theme.space[2]};
      max-width: ${theme.measure[0]};
    `}
  >
    <div
      css={css`
        font-size: ${theme.fontSizes[-1]};
      `}
    >
      <VStack>
        <P>Get notified when I write new posts.</P>
        <ConvertKitSubscribeForm />
        <P
          css={css`
              /* color: ${theme.colors.c6}; */
              font-size: ${theme.fontSizes[-1]};
            `}
        >
          Alternatively, follow me on{' '}
          <a href="https://twitter.com/markmiro">Twitter</a>
        </P>
      </VStack>
    </div>
  </div>
)

export default SubscribeForm
