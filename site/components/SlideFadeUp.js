import styled from '@emotion/styled'

const SlideFadeUp = styled.div`
  opacity: 0;
  @keyframes slide-fade-up {
    from {
      opacity: 0;
      transform: translateY(1em);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: slide-fade-up 100ms ease-out forwards;
`

export default SlideFadeUp
