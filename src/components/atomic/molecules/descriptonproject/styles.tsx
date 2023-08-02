import styled from "styled-components";

export const DescProjStyle = styled.div`
  h1{
    margin-top: ${({theme }) => theme.spacing.x2};
    margin-bottom: ${({theme }) => theme.spacing.x2};
  }

  h6 {
    margin-top: ${({theme }) => theme.spacing.x3};
    margin-bottom: ${({theme }) => theme.spacing.x3};
  }

  p {
    margin-bottom: ${({theme }) => theme.spacing.x4};
  }

`
