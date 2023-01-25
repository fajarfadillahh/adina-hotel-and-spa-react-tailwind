import React, { useContext } from "react";

// import room context
import { RoomContext } from "../context/RoomContext";

// import room
import Room from "../components/Room";

const Rooms = () => {
  const { rooms } = useContext(RoomContext);

  return (
    <section className="rooms py-24">
      <div className="container mx-auto">
        {/* grid */}
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
