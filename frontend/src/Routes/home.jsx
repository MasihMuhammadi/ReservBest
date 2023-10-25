import  { useEffect } from 'react';
import {Link} from 'react-router-dom'
import TypingAnimation from '../typingAnimation';

const Home = () => {
  
  useEffect(() => {
    
    startAnimation();
  }, []);

  const startAnimation = () => {

    setTimeout(() => {
      
      console.log('Animation completed');
    }, 4000);
  };

  return (
    <div className="home">
      <TypingAnimation />
        {/* <img src="/HotelBooking-mockup.svg" className="mockup d-none d-lg-block" />   */}
        <img src="/Hotel Booking-cuate.svg" className="mockup d-none d-lg-block" />  
        {/* <img src="/Hotel Booking-pana.svg" className="mockup d-none d-lg-block" />   */}
        {/* <img src="/Hotel Booking.gif" className="mockup d-none d-lg-block" />   */}
        <Link to="./hotels" className="get-started">Get started</Link>
    </div>
    
  );
};

export default Home;
