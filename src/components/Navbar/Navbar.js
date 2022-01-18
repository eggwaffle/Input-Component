function Navbar() {
  return (
    <div className="grid grid-rows-2 px-14 pt-10 bg-[#FAFBFD]">
      <div className="font-semibold font-poppins">
        <h2><b className="text-[#F7542E]">Dev</b>challenges.io</h2>
      </div>
      <nav>
        <ul className='list-none'>
          <li className='font-medium text-[#9E9E9E]'>Typography</li>
          <li className='font-medium text-[#9E9E9E]'>Grid</li>
          <li className='font-medium text-[#9E9E9E]'>Buttons</li>
          <li className='font-medium text-[#090F31]'>Inputs</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;