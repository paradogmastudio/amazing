import React, { useEffect, useState } from "react";

function HomeScreen() {

  const [isClicked, setIsClicked]= useState(false)
  const [texte, setTexte] = useState("")
  

  const ternaryCondition = () =>{
    
    setIsClicked(true)
    
  }
  useEffect(()=>{
    
    isClicked && setTexte("Bonne lecture!")

  },[isClicked])



  return (
    <main>
      <h1>Amazing!</h1>

      <section id="presentation">
        <p>
          L'application "Amazing!" est une application uniquement front-end.
          Elle constitue une mise en pratique de la première partie de la
          Roadmap React
        </p>
      </section>
      <h3>Points abordés:</h3>
      <section className="grid-container">
        
        <div className="grid-item">
          <h5>Fondamentaux</h5>
          <div>
            <h6>HTML</h6>
            <ul>
              <li>Imbrication des balises</li>
            </ul>
          </div>
          <div>
            <h6>CSS</h6>
            <ul>
              <li>Flex-box</li>
              <li>Grid</li>
            </ul>
          </div>
          <div>
            <h6>Javascript</h6>
            <ul>
              <li>Spread-operator</li>
              <li>Destructuration</li>
              <li>Asynchronisme</li>
              <li>Conditions ternaires</li>
            </ul>
          </div>
        </div>
        <div className="grid-item">
          <h5>Concepts</h5>
          <ul>
            <li>JSX</li>
            <li>Components</li>
            <li>Cycle de vie</li>
          </ul>
        </div>
        <div className="grid-item">
          <h5>Performances</h5>
          <ul>
            <li>Initialisation classique</li>
          </ul>
        </div>
        <div className="grid-item">
          <h5>Navigation</h5>
          <ul>
            <li>react-router-dom</li>
          </ul>
        </div>
        <div className="grid-item">
          <h5>Hooks</h5>
          <ul>
            <li>useState</li>
            <li>useEffect</li>
          </ul>
        </div>
        <div className="grid-item">
          <h5>State Management</h5>
          <ul>
            <li>props</li>
            <li>lifting state up</li>
          </ul>
        </div>
        <div className="grid-item">
          <h5>DOM</h5>
          <ul>
            <li>Button</li>
            <li>Formulaire</li>
          </ul>
        </div>
        <div className="grid-item">
          <h5>Data from API</h5>
          <ul>
            <li>fetch</li>
          </ul>
        </div>
        <div className="grid-item">
          <h5>Design</h5>
          <ul>
            <li>Rendu conditionnel</li>
          </ul>
        </div>


      </section>

      <section id="documentation">
      <h3>Téléchargements:      {texte}</h3>
      <div className="grid-container">
      <div className="grid-item">
          <h5>git</h5>
          <ul>
            <li>Lien</li>
          </ul>
      </div>
      <div className="grid-item">
          <h5>Cours</h5>
          <ul>
            <li><button onClick={ternaryCondition}>Cours entier</button></li>
            <li><button onClick={ternaryCondition}>Fondamentaux</button></li>
            <li><button onClick={ternaryCondition}>Concepts</button></li>
            <li><button onClick={ternaryCondition}>Performances</button></li>
            <li><button onClick={ternaryCondition}>Navigation</button></li>
            <li><button onClick={ternaryCondition}>Hooks</button></li>
            <li><button onClick={ternaryCondition}>State Management</button></li>
            <li><button onClick={ternaryCondition}>DOM</button></li>
            <li><button onClick={ternaryCondition}>Data from API</button></li>
            <li><button onClick={ternaryCondition}>Design</button></li>
          </ul>
      </div>

      </div>
      </section>
    </main>
  );
}

export default HomeScreen;
