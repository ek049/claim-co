import React from 'react';

function comingSoon() {
  let url = window.location.pathname.substring(1);
  return (
    <><h1>Coming Soon!</h1>
    <p>{url}</p>
    </>
  );
}

export default comingSoon;