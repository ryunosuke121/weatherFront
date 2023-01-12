import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-blue-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span className="ml-3 text-xl">お天気アプリ</span>
        </div>
    </header>
  )
}

export default Header