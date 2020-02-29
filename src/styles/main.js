import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Header = styled.div`
  display: block;
  background: #fff;
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  .navigation {
    display: flex;
    flex-direction: row;
    align-items: center;

    > ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    > ul li a {
      color: #333333;
      margin-left: 28px;
      font-size: 16px;
      position: relative;

      &:hover {
        color: #00a3d9;
      }
    }

    ul li.active a {
      color: #00a3d9;
    }

    ul.nav__submenu {
      list-style: none;
    }

    .nav__submenu {
      font-weight: 300;
      text-transform: none;
      display: block;
      position: absolute;
      width: auto;
      top: 70px;
      background-color: #00aeef;
    }

    ul.nav__submenu li a {
      color: #fff;
      cursor: pointer;
      margin: 0;
    }

    .nav__submenu-item {
      margin: 0;
      padding: 10px 12px 12px 10px;

      a {
        padding: 10px 12px 12px 10px;

        &:hover {
          color: rgba(0, 0, 0, 0.3);
        }
      }
    }

    span {
      margin-left: 10px;
    }

    img {
      width: 18px;
    }
  }
`;

export const Content = styled.div`
  .bg-texture-light {
    background: url('/static/background.jpg') repeat;
  }

  .bloco-not {
    img {
      width: 100%;
    }

    h3 {
      font-size: 26px;
      margin-bottom: 8px;
    }

    p {
      padding-top: 12px;
    }
  }

  .conteudo {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin-left: -6px;
    margin-right: -6px;

    p {
      margin-top: 10px;
    }
  }

  .bg-white {
    background: #fff;
  }

  .text-white {
    color: #fff;
  }

  .text-center {
    text-align: center;
  }

  .conteudo-center {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      margin: 10px auto 0;
    }
  }

  .bloco-12 {
    flex-basis: 100%;
  }

  .bloco-8 {
    flex-basis: 66.67%;
  }

  .bloco-7 {
    flex-basis: 62.5%;
  }

  .bloco-6 {
    flex-basis: 50%;
  }

  .bloco-5 {
    flex-basis: 37.5%;
  }

  .bloco-4 {
    flex-basis: 33.33%;
  }

  .bloco-3 {
    flex-basis: 25%;
    padding: 0 6px;
  }

  .bg-white-tech {
    background: #fff url('/static/section-bg.png') no-repeat bottom left;
    position: relative;

    h3 {
      color: #555555;

      strong {
        color: #222;
      }
    }
  }

  .card {
    padding: 15px 10px;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    transition: box-shadow 0.4s;

    &:hover {
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 60px;
      margin-bottom: 12px;
    }

    p {
      margin-top: 12px;
      text-align: center;
    }
  }

  .parallax {
    width: 100%;
  }

  .bg-1 {
    background: #000 url('/static/parallax/bg-cta-2.jpg') no-repeat;
    background-size: cover;
  }

  .bg-2 {
    background: #064253 url('/static/parallax/bg-cta-3.jpg') no-repeat;
    background-size: cover;
  }

  .conteudo-parallax {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    p {
      margin-top: 10px;
    }
  }

  .form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 18px;

    input {
      border: 1px solid #ccc;
      height: 56px;
      flex: 1;
      margin: 12px 5px;
      padding: 0 6px;
    }

    textarea {
      flex-basis: 100%;
      border: 1px solid #ccc;
      height: 90px;
      margin: 12px 5px;
      padding: 6px;
    }

    .btn-contato {
      display: flex;
      flex: 1;
      justify-content: space-between;

      h5 {
        font-weight: 100;
        text-align: right;
      }

      button {
        border: 0;
        padding: 0 18px;
        margin-left: 5px;
        background: #00a3d9;
        color: #fff;
        transition: background 0.3s;

        &:hover {
          background: #006699;
        }
      }
    }
  }

  .bg-blue {
    background: #196380;
  }

  .conteudo-emp {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 22px;
    }
  }

  .conteudo-not {
    width: 100%;
    display: grid;
    /* aqui eu determino é são 3 colunas de tamanhos iguas, cada coluna tem uma fração */
    grid-template-columns: repeat(4, 1fr);
    /* esssa é a altura das linhas, se vc quiser pode apaga-la caso não queira uma altura definida */
    grid-auto-rows: auto;
    /* espaço entre um elemento interno e outro */
    grid-gap: 5px 8px;
    /* margem interna que afasta os elementos da borda do grid */
  }

  .bloco-blog {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    li {
      background: #fff;
      padding: 10px;
      display: flex;
      flex-direction: column;
      height: auto;
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
`;

export const CarouselDiv = styled.div`
  display: block;
  margin-top: 28px;

  div {
    height: 100%;
  }

  .bloco-blog {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;

    li {
      background: #fff;
      padding: 10px;
      display: flex;
      flex-direction: column;
      height: auto;
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  .title {
    color: #000;
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const Logos = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled.li`
  flex-basis: 16.66%;

  img {
    width: 100%;
  }
`;

export const PageEmp = styled.div`
  img {
    width: 340px;
    float: right;
  }

  p {
    margin-top: 14px;
  }

  h5 {
    margin-top: 16px;
  }
`;

export const TitleBanner = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/static/bg-empresa.jpg') no-repeat;
  background-size: cover;
  color: #fff;
`;

export const BannerService = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/static/bg-servico.jpg') no-repeat;
  background-size: cover;
  color: #fff;
`;

export const Carregando = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;

  img {
    width: 55px;
    height: 55px;
    animation: ${rotate} 1s linear infinite;
  }
`;

export const Servico = styled.div`
  display: flex;
  justify-content: space-between;

  .bloco-s-8 {
    flex-basis: 66.67%;

    div {
      padding-right: 18px;

      img {
        width: 100%;
        margin-bottom: 12px;
      }
    }
  }

  .bloco-s-4 {
    flex-basis: 33.33%;
    background: #fff;
    padding: 16px;

    h4 {
      font-size: 24px;
    }
  }

  p {
    margin-top: 12px;
  }
`;

export const UlService = styled.ul`
  list-style: none;

  li {
    padding-bottom: 12px;
    padding-top: 12px;
    border-bottom: 1px solid #eee;
  }

  a {
    color: #333;

    &:hover {
      color: #069;
    }
  }

  li.active a {
    color: #069;
  }
`;

export const Dbloco = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;

  span {
    flex-basis: 50%;
    padding-left: 8px;
    padding-right: 8px;
  }

  h5 {
    margin-bottom: 15px;
  }
`;
