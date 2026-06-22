import React from 'react'

export default function Footer() {
  return (
    <div className="text-center p-4 mt-10 text-gray-500 text-sm">
        Copyright © 2026 Your Company. All rights reserved.
        <br />
        Made with ❤️ by{" "}
        <a
          href="https://github.com/Fedom47"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 cursor-pointer hover:text-blue-800 hover:underline transition-colors duration-200"
        >
          Donpisit DTI SAU
        </a>
        .
    </div>
  )
}
