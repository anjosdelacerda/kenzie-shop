import "./App.css";
// import BookCase from "./components/bookcase";
import BookCase from "./components/bookCase";
import Cart from "./components/cart";
// import { GlobalStyle } from "./Styles/globalStyle/global";
import { GlobalStyle } from "./styles/globalStyle/global";
// import { Container } from "./Styles/containers";
import { Container } from "./styles/containers";
// import Menu from "./components/menu";
import Menu from "./components/menu/index";
// import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />

      <Container>
        <BookCase />

        <Cart />
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      </Container>
    </>
  );
}

export default App;
