import './App.css';
import React from 'react';
import UserCard from './components/UserCards/UserCard';
import responseData from './data';
import './index.css';

function App() {

  const userData = responseData;

  const userCardItem = userData.map(({ firstName, lastName, profilePicture, description }, index) => {
    const getFullName = `${firstName.trim()} ${lastName.trim()}`.trim() || 'Person';

    const getInitials = (str) => {
      const wordsArr = str.split(' ');
      const initialsArr = wordsArr.map((word) => word[0]);
      const initialsStr = initialsArr.join(' ');
      return initialsStr;
    };

    return (
        <UserCard
          key={index}
          fullName={getFullName}
          src={profilePicture}
          alt={`${getFullName} photo`}
          initials={getInitials(getFullName)}
          description={description}
        />
    )

  }


  );

  return (
    <>
      <main>
        <div className="container">
          <ul className="userCardsContainer">
            {userCardItem}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
