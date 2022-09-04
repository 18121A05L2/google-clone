import React from 'react'

export default function Footer() {
  return (
    <footer className="flex flex-col bg-gray-100 w-full text-sm divide-y-2 divide-gray-400 ">
      <div className="mr-auto px-4">India</div>
      <div className="flex flex-col items-center lg:flex-row lg:gap-6 justify-around lg:p-3 ">
        <div>Carbon neutral since 2007</div>
        <div className="flex gap-4 lg:gap-6 lg:order-first">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="flex gap-4 lg:gap-6 lg:order-last">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}
