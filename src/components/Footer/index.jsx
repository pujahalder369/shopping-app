import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#212121] text-center py-4 text-white w-full">
        © {new Date().getFullYear()} ShopEasy. All rights reserved.
      </footer>
    </>
  )
}

export default Footer;