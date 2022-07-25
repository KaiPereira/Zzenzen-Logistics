import './App.scss';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from './components/Footer';
import React from "react"

function App() {
  const [dropdown, changeDropdown] = React.useState(false)

  function changeDropdownState() {
    changeDropdown(!dropdown)
  }

  dropdown ? document.body.style.overflow = "hidden" : document.body.style.overflow = "initial"
  
  return (
    <>
      <Nav
        changeDropdownState={changeDropdownState}
        dropdown={dropdown}
      />
      <Main />
      <Footer />
    </>
  );
}

export default App;
