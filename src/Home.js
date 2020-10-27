import React from 'react';
import Canvas from 'react-canvas-draw';

const Home = () =>{
    return (
        <div className="container">
            <p>Hacktoberfest <a href="https://github.com/imyjimmy/hacktoberfest-app">Repo</a>. I will approve all PR's*.</p>
            <div>* as long as they don't break deployment</div>
            <Canvas
                hideGrid={true}
                hideInterface={true}
                canvasWidth="100%"
            />
      </div>
    );
}

export default(Home);