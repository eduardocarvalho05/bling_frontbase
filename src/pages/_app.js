// pages/_app.js
import { GlobalStyle } from '../styles/Global.styled';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
