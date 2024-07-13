import React from 'react';
import UserInfo from './components/UserInfo';
import Card from './components/Card';

const App: React.FC = () => {
  const handleClick = () => {
    alert('THE ONE PIECE IS REAL!');
  };

  return (
    <div className="Application">
      <h1>User Info App:</h1>
      <UserInfo name="Monkey D Luffy" age={19} email="MonkeyLuffy3d2y@gmail.com" />
      <h1>Card Components:</h1>
      <Card>
        <h5>Yo Walter this is a card component yo!</h5>
      </Card>
      <Card>
        <ul>
          <li><h1>Monkey D Luffy</h1></li>
          <li>JOB: pirate</li>
          <li>GOAL: to find the ONE PIECE</li>
        </ul>
      </Card>
      <Card>
        <h2>TOP SECRET</h2>
        <p>CLICK TO SEE A SECRET.</p>
        <button onClick={handleClick}>Click Me</button>
      </Card>
    </div>
  );
};



export default App;