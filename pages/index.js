import React from 'react';
import 'tailwindcss/tailwind.css';

function HomePage() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden text-center">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">
            Coming Soon
          </div>

          <p className="mt-2 text-gray-500">
            A new way to book a holiday with your WANDER KIDS!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
