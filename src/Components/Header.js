export const Title = () => {
  return (
    <div>
      <span className='logo'>Food Nation</span>
    </div>
  );
};

 const Header = () => {
  return (
    <header>
      <Title />
      <div className='side-items'>
        <nav>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </nav>

        <div className='cart'>
          <img
            src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-shopping-cart-icon-png-image_5060874.jpg'
            alt='cart'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
