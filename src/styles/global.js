import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    transition-duration: 0.3s;
  }

  body {
    background: #eee;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, textarea {
    color:#333;
    font-size:16px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  @-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @-moz-keyframes fadeIn {
  0% { opacity: 0;}
  100% { opacity: 1; }
  }
  @-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }

  .fadeIn {
  -webkit-animation: fadeIn 1s ease-in-out;
  -moz-animation: fadeIn 1s ease-in-out;
  -o-animation: fadeIn 1s ease-in-out;
  animation: fadeIn 1s ease-in-out;
}

@-webkit-keyframes fadeInMenu {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @-moz-keyframes fadeInMenu {
  0% { opacity: 0;}
  100% { opacity: 1; }
  }
  @-o-keyframes fadeInMenu {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @keyframes fadeInMenu {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }

  .fadeInMenu {
  -webkit-animation: fadeIn 0.5s ease-in-out;
  -moz-animation: fadeIn 0.5s ease-in-out;
  -o-animation: fadeIn 0.5s ease-in-out;
  animation: fadeIn 0.5s ease-in-out;
}

  h6 {
    font-size: 24px;
    line-height: 22px;
    font-weight: 200;
  }

  h5 {
    font-size: 26px;
    line-height: 24px;
  }

  h4 {
    font-size: 32px;
    line-height: 30px;
  }

  h3 {
    font-size: 48px;
    line-height: 46px;
  }

  h2 {
    font-size: 58px;
    line-height: 56px;
  }

  .content {
    max-width: 1100px;
    margin: 0 auto;
  }

  .nav {
    display: flex;
    justify-content: space-between;

    img {
      width: 130px;
      margin-top: 6px;
    }
  }

  .section-40 {
    padding: 40px 0;
  }

  .section-60 {
    padding: 60px 0;
  }

  .section-90 {
    padding: 90px 0;
  }

  .btn {
    width: fit-content;
    padding: 16px 36px;
    background: #2ABCFE;
    margin-top: 14px;
    text-align: center;
    display: block;
    color: #fff;

    &:hover {
      background: #069;
      color: #fff;
    }
  }

  .footer {
    background: #25293A;
    color: #4C5261;

    .content-footer {
      display: flex;
      justify-content: space-between;
    }
  }
`;
