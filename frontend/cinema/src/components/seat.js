// a seat component; every seat has its state
import '../App.css';
import {useState} from "react";


function Seat(props) {
    const [seatClass, setSeatClass] = useState(false);
    const handleSeat = () => {
        setSeatClass(seatClass => !seatClass);
    };
    if (props.status === "taken"){ // check the status of the seat, the main component fetch all seats
        return (
            <div className="seat-taken">
                <h1>Seat</h1>
            </div>
        )
    }else {
        if(seatClass) {
            return (
                <div className={"seat-selected"} onClick={() => handleSeat()}>
                    <h1>Seat</h1>
                </div>
            )
        }else{
            return (
                <div className={"seat"} onClick={() => handleSeat()}>
                    <h1>Seat</h1>
                </div>
            )
        }
    }

}

export default Seat;
