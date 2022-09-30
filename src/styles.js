import styled from "styled-components";

export const CookiesContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ $containerBackgroundColor }) =>
    $containerBackgroundColor ?? "#efefef "};
  box-shadow: 0 0 12px -2px rgb(0 0 0 / 54%);
  z-index: 10;

  .cookie-container {
    display: flex;
    align-items: center;
    width: 100%;

    padding: 24px 48px;

    margin-right: auto;
    margin-left: auto;

    p {
      font-family: ${({ $paragraphFontFamily }) =>
        $paragraphFontFamily ?? "inherit"};
      flex: 0.85;
      font-size: 14px;
      line-height: 1.2rem;
      margin-right: 20px;
      color: ${({ paragraphColor }) => paragraphColor ?? "#333333"};
      a {
        color: ${({ $linkColor }) => $linkColor ?? "#007bff"};
        transition: all 0.2s ease 0s;

        &:hover {
          color: ${({ $linkColor }) => $linkColor ?? "#007bff"};
          text-decoration: underline;
        }
      }
    }

    button {
      flex: 0.15;
      font-family: ${({ $buttonFontFamily }) => $buttonFontFamily ?? "inherit"};
      border-radius: 5px;
      font-size: 14px;
      padding: 8px 5px;
      background-color: ${({ $buttonBackgroundColor }) =>
        $buttonBackgroundColor ?? "#FFBC14"};
      color: ${({ $buttonTextColor }) => $buttonTextColor ?? "white"};
      outline: none;
      border: none;
      cursor: pointer;
      transition: 0.3s;
    }

    @media (max-width: 1999px) {
      max-width: 1140px;
    }

    @media (max-width: 991px) {
      max-width: 960px;
    }

    @media (max-width: 767px) {
      max-width: 720px;
      flex-direction: column;

      p {
        text-align: center;
        margin-right: 0;
      }

      button {
        width: 100%;
      }
    }

    @media (max-width: 576px) {
      max-width: 540px;
      padding: 24px 24px;
      p {
        font-size: 13px;
        line-height: 1rem;
      }
    }
  }
`;
