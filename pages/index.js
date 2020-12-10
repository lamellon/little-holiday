import React from 'react';
const doAsyncWork = () => Promise.reject(new Error('Client Test 1'));
doAsyncWork();
function HomePage() {
  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
