function Navbar() {
  return (
    <div className="bg-[#FAFBFD]">
      <div className="text-semibold">
        <h2><b className="text-[#F7542E]">Dev</b>challenges.io</h2>
      </div>
      <nav>
        <ul className='list-none'>
          <li className='text-medium text-[#9E9E9E]'>Typography</li>
          <li className='text-medium text-[#9E9E9E]'>Grid</li>
          <li className='text-medium text-[#9E9E9E]'>Buttons</li>
          <li className='text-medium text-[#090F31]'>Inputs</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;