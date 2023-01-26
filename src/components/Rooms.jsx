import React, { useContext } from "react";

// import room context
import { RoomContext } from "../context/RoomContext";

// import room
import Room from "../components/Room";

// import react loader
import { SpinnerDotted } from "spinners-react";

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);

  return (
    <section className="rooms py-24">
      {/* overlay & spinner loader */}
      {loading && (
        <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/90">
          <SpinnerDotted color="white" />
        </div>
      )}

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
