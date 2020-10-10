import React from 'react';

function Home(){
    return (
        <div className="container">
            <p>Hacktoberfest <a href="https://github.com/imyjimmy/hacktoberfest-app">Repo</a>. I will approve all PR's*.</p>
          <div>* as long as they don't break deployment</div>
      </div>
    );
}

export default(Home);