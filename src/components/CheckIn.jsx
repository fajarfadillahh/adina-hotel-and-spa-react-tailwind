import React, { useState } from "react";

// import icon
import { BsCalendar } from "react-icons/bs";

// import datepicker
import DataPicker from "react-datepicker";

// import datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../assets/styles/_datepicker.css";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);

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
        selected={startDate}
        placeholderText="Check in"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
