import Calendar from "./calendar"
// import AllDetails from "./Routes/allDetails";

import { useUser } from "./contexts/userContext";
import {useSelectedDate} from './contexts/calendarContext';
import { useSelectedMenu } from "./contexts/menuContext";
import {  useTotalPrice } from "./contexts/totalPriceContext";

import { useHotelDetail } from "./contexts/hotelContext";

const HotelAdminPanel = () => {

      
      const {userData} = useUser();
      
      const {hotelDetail} = useHotelDetail();
      const {selectedDate} = useSelectedDate();
      const {selectedMenu} = useSelectedMenu();
      const {totalPrice} = useTotalPrice();
      let id = 1;
      
  
    return (
        <>
        <h1 className="text-warning mt-5 pt-5 text-center">This is {hotelDetail} Admin Panel</h1>
            <Calendar />
            
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Customer Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Selected Menu</th>
              <th scope="col">Amount of Guests</th>
              <th scope="col">Status</th>
              <th scope="col">Date of Event</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{id}</th>
              <td>{userData.userName}</td>
              <td>{userData.userPhone}</td>
              <td>{selectedMenu}</td>
              <td>500</td>
              <td>pnding</td>
              <td>{selectedDate}</td>
              <td>{totalPrice}</td>
              
            </tr>
     
          
          </tbody>
        </table>
        </>
    )
}

export default HotelAdminPanel;