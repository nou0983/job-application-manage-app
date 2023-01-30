import styled from "styled-components";

export const CONSTANTS = {
  // COLORS
  primary50: "#eff6ff",
  primary100: "#dbeafe",
  primary200: "#bfdbfe",
  primary300: "#93c5fd",
  primary400: "#60a5fa",
  primary500: "#3b82f6",
  primary600: "#2563eb",
  primary700: "#1d4ed8",
  primary800: "#1e40af",
  primary900: "#1e3a8a",
  grey50: "#f0f4f8",
  grey100: "#d9e2ec",
  grey200: "#bcccdc",
  grey300: "#9fb3c8",
  grey400: "#829ab1",
  grey500: "#627d98",
  grey600: "#486581",
  grey700: "#334e68",
  grey800: "#243b53",
  grey900: "#102a43",
  black: "#222",
  white: "#fff",
  redLight: "#f8d7da",
  redDark: "#842029",
  greenLight: "#d1e7dd",
  greenDark: "#0f5132",

  // FONTS
  headingFont: `'Roboto Condensed', Sans-Serif`,
  smallText: "1.6rem",
  extraSmallText: "1.4rem",

  // SHADOWS
  shadow1: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  shadow2:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  shadow3:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  shadow4:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",

  // OTHERS
  backgroundColor: "#f0f4f8",
  textColor: "#102a43",
  borderRadius: "0.25rem",
  letterSpacing: "1px",
  transition: "0.3s ease-in-out all",
  maxWidth: "1120px",
  fixedWidth: "500px",
  fluidWidth: "90vw",
  breakpointLg: "992px",
};

const Wrapper = styled.main`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 1.5rem;
    font-family: ${CONSTANTS.headingFont};
    font-weight: 400;
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: ${CONSTANTS.letterSpacing};
  }

  h1 {
    font-size: 5rem;
    font-weight: 700;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 1.5rem;
    max-width: 40em;
  }

  a {
    text-decoration: none;
    letter-spacing: ${CONSTANTS.letterSpacing};
  }

  a,
  button {
    line-height: 1.15;
    text-transform: capitalize;
  }

  button:disabled {
    cursor: not-allowed;
  }

  small,
  .text-small {
    font-size: ${CONSTANTS.smallText};
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .full-page {
    min-height: 90vh;
  }

  .form {
    width: 90vw;
    max-width: ${CONSTANTS.fixedWidth};
    background: ${CONSTANTS.white};
    border-radius: ${CONSTANTS.borderRadius};
    box-shadow: ${CONSTANTS.shadow2};
    padding: 3rem 3.5rem;
    margin: 3rem auto;
    transition: ${CONSTANTS.transition};
  }

  .form:hover {
    box-shadow: ${CONSTANTS.shadow4};
  }

  .form-label {
    display: block;
    font-size: ${CONSTANTS.smallText};
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: ${CONSTANTS.letterSpacing};
  }

  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: 0.9rem 1.2rem;
    border-radius: ${CONSTANTS.borderRadius};
    background: ${CONSTANTS.backgroundColor};
    border: 1px solid ${CONSTANTS.grey200};
  }

  .form-row {
    margin-bottom: 1.5rem;
  }

  .form-textarea {
    height: 7rem;
  }

  ::placeholder {
    font-family: inherit;
    color: ${CONSTANTS.grey400};
  }

  .form-alert {
    color: ${CONSTANTS.redDark};
    letter-spacing: ${CONSTANTS.letterSpacing};
    text-transform: capitalize;
  }

  .btn {
    cursor: pointer;
    color: ${CONSTANTS.white};
    background: ${CONSTANTS.primary500};
    border: transparent;
    border-radius: ${CONSTANTS.borderRadius};
    letter-spacing: ${CONSTANTS.letterSpacing};
    padding: 1.2rem 1.5rem;
    box-shadow: ${CONSTANTS.shadow2};
    transition: ${CONSTANTS.transition};
    text-transform: capitalize;
    display: inline-block;
  }

  .btn-hero {
    font-size: 2rem;
    padding: 1rem 2rem;
  }

  .btn-block {
    width: 100%;
  }

  .btn:hover {
    background: ${CONSTANTS.primary700};
    box-shadow: ${CONSTANTS.shadow3};
  }

  .btn-hipster {
    color: ${CONSTANTS.primary500};
    background: ${CONSTANTS.primary200};
  }

  .btn-hipster:hover {
    color: ${CONSTANTS.primary200};
    background: ${CONSTANTS.primary700};
  }

  .btn-danger {
    background: ${CONSTANTS.redLight};
    color: ${CONSTANTS.redDark};
  }

  .btn-danger:hover {
    background: ${CONSTANTS.redDark};
    color: ${CONSTANTS.white};
  }

  .alert {
    padding: 0.375rem 0.75rem;
    margin-bottom: 1rem;
    border-color: transparent;
    border-radius: ${CONSTANTS.borderRadius};
    text-align: center;
    letter-spacing: ${CONSTANTS.letterSpacing};
    text-transform: capitalize;
  }

  .alert-danger {
    color: ${CONSTANTS.redDark};
    background: ${CONSTANTS.redLight};
  }

  .alert-success {
    color: ${CONSTANTS.greenDark};
    background: ${CONSTANTS.greenLight};
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border: 5px solid ${CONSTANTS.grey400};
    border-radius: 50%;
    border-top-color: ${CONSTANTS.primary500};
    animation: spinner 2s linear infinite;
  }

  .loading-center {
    margin: 0 auto;
  }

  .title {
    text-align: center;
  }

  .title-underline {
    background: ${CONSTANTS.primary500};
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: -1rem;
  }

  .container {
    width: ${CONSTANTS.fluidWidth};
    max-width: ${CONSTANTS.maxWidth};
    margin: 0 auto;
  }

  .coffee-info {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 1rem;
    letter-spacing: ${CONSTANTS.letterSpacing};
  }

  .coffee-info span {
    display: block;
  }

  .coffee-info a {
    color: ${CONSTANTS.primary500};
  }

  @media screen and (min-width: 992px) {
    .coffee-info {
      text-align: left;
    }

    .coffee-info span {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
`;

export default Wrapper;
