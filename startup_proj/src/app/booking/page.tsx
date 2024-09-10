import React from "react";
import BookingStyle from "./booking.module.css";

const Booking = () => {
    // Get the block props for the RteBlock for the Booking page

    return (
        <div className={BookingStyle.container}>
            <div className={BookingStyle.title}>
                <h1>Book Tid</h1>
            </div>   


            <div className={BookingStyle.bookingForm}>
                <form>
                    <label htmlFor="name">Navn:</label>
                    <input type="text" id="name" name="name" required></input>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                    <label htmlFor="phone">Telefon:</label>
                    <input type="tel" id="phone" name="phone" required></input>
                    <label htmlFor="date">Dato:</label>
                    <input type="date" id="date" name="date" required></input>
                    <label htmlFor="time">Tidspunkt:</label>
                    <input type="time" id="time" name="time" required></input>
                    <button type="submit">Book</button>
                </form>
            </div>  
        </div>    
    );
}

export default Booking;