import React, { useState } from "react";

// import icon
import { BsCalendar } from "react-icons/bs";

// import datepicker
import DataPicker from "react-datepicker";

// import datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../assets/styles/_datepicker.css";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);

  return (
    <div className="relative flex h-full items-center justify-end">
      {/* date icons */}
      <div className="absolute z-30 pr-8">
        <div>
          <BsCalendar className="text-base text-accent" />
        </div>
      </div>

      {/* date calendar */}
      <DataPicker
        className="h-full w-full"
        selected={endDate}
        placeholderText="Check out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
