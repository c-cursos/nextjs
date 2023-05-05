

// import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client'


// export default function Index( props ) {
//     let [ aluno, setAluno ] = useState( "oi" );

//     function changeName(  ) {
//         setAluno = "nome";
//     }

//     return( <>
//         <h1>Nome: { props.aluno }</h1>
//         <button onClick={ changeName }>Change Name</button>
//     </> );
// }


// ReactDOM.createRoot( document.querySelector( "main" ) ).render(
//     <React.StrictMode>
//         {/* <Index aluno="Sammarco" /> */}
//         {/* <Index aluno="Céo Sammarco" /> */}
//         <Index />
//     </React.StrictMode>
// );

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// export default function App() {
//     const [ aluno, setAluno ] = useState( "" );

//     function changeName( nome ) {
//         setAluno( nome );
//     }

//     return( <>
//         <h1>Nome: { aluno }</h1>
//         <button onClick={ () => changeName( "Céo" ) }>Mudar Nome</button>
//     </> );
// }

// ReactDOM.createRoot( document.querySelector( "main" ) ).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export default function App( props ) {
    const [ aluno, setAluno ] = useState( "" );

    function changeName( nome ) {
        setAluno( nome );
    }

    return( <>
        <h1>Nome: { aluno }</h1>
        <button onClick={ () => changeName( "Céo" ) }>Mudar Nome</button>
    </> );
}

ReactDOM.createRoot( document.querySelector( "main" ) ).render(
    <React.StrictMode>
        <App aluno="io" />
        <App aluno="io" />
        <App aluno="io" />
    </React.StrictMode>
);