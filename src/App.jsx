import './App.css'
import Header from "./Componentes/Header/header.jsx"
import Section from "./Componentes/Section/section"
import Footer from "./Componentes/Footer/footer"
// import {CartContext} from './Context/cartContext'


function App() {

  return (

    <div className="App">

      {/* <CartContext.Provider> */}
        <Header />

        <Section />

        <Footer />
      {/* </CartContext.Provider> */}

      

    </div>

  )
}

export default App

// import './App.css';
// import Header from "./Componentes/Header/header.jsx";
// import Section from "./Componentes/Section/section";
// import Footer from "./Componentes/Footer/footer";
// import { useState } from 'react';

// function App() {
//   const [route, setRoute] = useState('/');

//   const renderComponent = () => {
//     switch (route) {
//       case '/':
//         return <Section />;
//       // Agrega aquí más casos según tus necesidades
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="App">
//       <Header />
//       {renderComponent()}
//       <Footer />
//     </div>
//   );
// }

// export default App;

