import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContentHeader from "./components/Content-Header/ContentHeader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <ContentHeader />
      <ContactForm />
    </>
  );
}

export default App;
