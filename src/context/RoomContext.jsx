import React, { createContext, useState, useEffect } from "react";

// import data
import { roomData } from "../data";

// export & create room context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // amount person
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });

  const handleClick = (e) => {
    e.preventDefault();

    // loading data
    setLoading(true);

    // filter rooms based on total (person)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });

    // delay loading data
    setTimeout(() => {
      setRooms(newRooms);

      setLoading(false);
    }, 3000);
  };

  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, handleClick, loading }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
