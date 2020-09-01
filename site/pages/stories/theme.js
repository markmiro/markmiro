import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Spacer from '../../components/Spacer'
import theme from '../../components/theme'
import Json from '../../components/Json'
import Heading, { Section } from '../../components/Heading'
import { VStack, HStack } from '../../components/Stack'

const Container = styled.div`
  padding: ${theme.pagePadding};
`

const ColorBox = styled.div`
  width: 100%;
  min-height: ${theme.space[3]};
  padding: ${theme.space[1]};
  background: ${(props) => props.color};
`

const ColorLine = ({ colorKey }) => (
  <VStack>
    <pre>[{colorKey}]</pre>
    <div
      css={css`
        height: 1px;
        width: 100%;
        background: ${theme.colors[colorKey]};
      `}
    ></div>
  </VStack>
)

const TextBox = styled.div`
  width: 100%;
  height: ${theme.space[4]};
  color: ${(props) => props.color};
`

const SizeBox = styled.div`
  height: ${theme.space[4]};
  width: ${(props) => props.size};
  flex-shrink: 0;
  background: ${theme.colors.c8};
`

const TextSize = ({ size }) => (
  <div>
    <pre>[{size}]</pre>
    <Spacer size={0} />
    <div
      css={css`
        font-size: ${theme.fontSizes[size]};
      `}
    >
      Tt
    </div>
  </div>
)

const CodeHeading = ({ children }) => (
  <Heading>
    <pre>{children}</pre>
  </Heading>
)

const Theme = () => (
  <Container>
    <VStack space={4}>
      <Section>
        <CodeHeading>theme.colors</CodeHeading>
        <div
          css={css`
            display: flex;
          `}
        >
          {Object.keys(theme.colors).map((colorKey) => (
            <ColorBox key={colorKey} color={theme.colors[colorKey]}>
              <div
                css={css`
                  font-weight: ${theme.fontWeights[2]};
                  color: black;
                  text-shadow: -1px 0 0 white, 1px 0 0 white, 0 -1px 0 white,
                    0 1px 0 white;
                `}
              >
                <pre>{colorKey}</pre>
              </div>
              <Spacer space={1} />
              {Object.keys(theme.colors).map((colorKey) => (
                <TextBox key={colorKey} color={theme.colors[colorKey]}>
                  Text
                </TextBox>
              ))}
            </ColorBox>
          ))}
        </div>
        <VStack>
          {Object.keys(theme.colors).map((colorKey) => (
            <ColorLine key={colorKey} colorKey={colorKey} />
          ))}
        </VStack>
      </Section>

      <Section>
        <CodeHeading>theme.space</CodeHeading>
        <HStack>
          {theme.space.map((s, i) => (
            <div key={s}>
              <pre>[{i}]</pre>
              <Spacer size={0} />
              <SizeBox size={s} />
            </div>
          ))}
        </HStack>
      </Section>

      <Section>
        <CodeHeading>theme.fontSizes</CodeHeading>
        <HStack>
          {Object.keys(theme.fontSizes)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map((sizeKey) => (
              <TextSize key={sizeKey} size={sizeKey} />
            ))}
        </HStack>
      </Section>
    </VStack>

    <Section>
      <Heading>Settings</Heading>
      <Json json={theme} />
    </Section>
  </Container>
)

export default Theme
