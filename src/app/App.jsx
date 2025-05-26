import {
  Routes,
  Route
} from "react-router";

import useLocalizeDocumentAttributes from "../utils/useLocalizeDocumentAttribute";

import ScrollToTop from "../utils/resetScrolling";

import SiteHeader from "./components/siteHeader/siteHeader";
import SiteFooter from "./components/siteFooter/siteFooter";
import Home from "./routes/Home";
import SagnseCollection from "./routes/SagnseCollection";
import SagnseCouture from "./routes/SagnseCouture";
import SagnseXMissJah from "./routes/SagnseXMissJah";
import WhoAreWe from "./routes/WhoAreWe";
import ContactUs from "./routes/ContactUs";
import WhatsappFab from "./components/whatsappFab/whatsappFab";

import './App.css';


const App = () => {

  //Fn used to add translation on the HTLM page title
  useLocalizeDocumentAttributes();

  // Reset scrolling position after leaving a page
  ScrollToTop();


  return (
    <>

      <SiteHeader />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/sbs" >

          <Route path="sagnseCollection" element={<SagnseCollection />} />
          <Route path="sagnseXMissJah" element={<SagnseXMissJah />} />
          <Route path="sagnseCouture" element={<SagnseCouture />} />

        </Route>

        <Route path="/whoAreWe" element={<WhoAreWe />} />
        <Route path="/contactUs" element={<ContactUs />} />

      </Routes>
      <SiteFooter />
      <WhatsappFab />
    </>
  )
}

export default App;