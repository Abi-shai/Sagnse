import {
  Routes,
  Route
} from "react-router";

import useLocalizeDocumentAttributes from "../utils/useLocalizeDocumentAttribute";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./routes/Home";
import SagnseCollection from "./routes/SagnseCollection";
import SagnseCouture from "./routes/SagnseCouture";
import SagnseXMissJah from "./routes/SagnseXMissJah";
import WhoAreWe from "./routes/WhoAreWe";
import ContactUs from "./routes/ContactUs";

import './App.css';


function App() {

  //Fn used to add translation on the HTLM page title
  useLocalizeDocumentAttributes();


  return (
    <>

      <Header />
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
      <Footer />
    </>
  )
}

export default App;