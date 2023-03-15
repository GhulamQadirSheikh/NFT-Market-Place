import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import {NFTMarketPlaceProvider} from "../context/NFTMarketPlaceContext";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketPlaceProvider>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </NFTMarketPlaceProvider>
  </div>
);

export default MyApp;