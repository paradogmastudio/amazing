import React from 'react'

function HomeScreen() {
  return (
    <main>

        <h1>Amazing!</h1>

        <section id="presentation">
          <p>
            L'application "Amazing!" est une application uniquement front-end. Elle constitue une mise en pratique de la première partie de la Roadmap React
          </p>
        </section>

        <section id="travail">
          <h3>Points abordés</h3>
          <div>
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
          <div>
            <h5>DOM</h5>
              <ul>
                <li>Button</li>
                <li>Formulaire</li>
              </ul>
          </div>
          <div>
            <h5>Hooks</h5>
              <ul>
                <li>useState</li>
                <li>useEffect</li>
              </ul>
          </div>
          <div>
            <h5>Navigation</h5>
              <ul>
                <li>react-router-dom</li>
              </ul>
          </div>
          <div>
            <h5>Data from API</h5>
              <ul>
                <li>fetch</li>
              </ul>
          </div>
          <div>
            <h5>State Management</h5>
              <ul>
                <li>props</li>
                <li>lifting state up</li>
              </ul>
          </div>
          <div>
            <h5>Design</h5>
              <ul>
                <li>Rendu conditionnel</li>
              </ul>
          </div>
          <div>
            <h5>Performances</h5>
              <ul>
                <li>Initilaisation classique</li>
              </ul>
          </div>
          <div>
            <h5>Concepts</h5>
              <ul>
                <li>JSX</li>
                <li>Components</li>
                <li>Cycle de vie</li>
              </ul>
          </div>
        </section>

        <section id="documentation">

        </section>

    </main>
  )
}

export default HomeScreen