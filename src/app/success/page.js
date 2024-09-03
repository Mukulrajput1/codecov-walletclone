import React, { useEffect } from 'react';

function Success() {
  const url = 'https://wallet-clone-j324.vercel.app/success';

  useEffect(() => {
    // Redirect to the specified URL after 200 milliseconds
    setTimeout(() => {
      window.location.href = url;
    }, 200);
  }, []);

  return <div>page</div>;
}

export default Success;