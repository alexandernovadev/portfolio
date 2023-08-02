import styled from 'styled-components'

export const BannerProjectStyled = styled.div`
  padding: 100;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 1024px;

  .contentCarousel {
    width: 55%;
  }

  .contentDescription {
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    .micardso {
      flex-direction: column;

      .contentCarousel {
        width: 100%;
        height: 320px;
      }

      .contentDescription {
        width: 100%;
      }
    }
  }
`
