import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// import icons
import { FaCheck } from "react-icons/fa";

// import room context
import { RoomContext } from "../context/RoomContext";

// import components
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import ScrollToTop from "../components/ScrollToTop";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  // destructure room
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop />

      {/* room banner */}
      <div className="relative flex h-[560px] items-center justify-center bg-room bg-cover bg-center">
        {/* room overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/50" />

        {/* room title */}
        <h1 className="z-20 text-center font-primary text-6xl text-white">
          {name} Details
        </h1>
      </div>

      {/* room data */}
      <div className="container mx-auto">
        <div className="flex h-full flex-col py-24 lg:flex-row">
          {/* data left */}
          <div className="h-full w-full px-6 lg:w-[60%]">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img src={imageLg} alt="room details image" className="mb-8" />

            {/* room facilities */}
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
                adipisci aspernatur, nisi dolores iste perferendis similique
                praesentium ullam tempore porro incidunt, facere commodi. Porro
                voluptatem voluptatibus sit, culpa saepe nostrum.
              </p>

              <div className="mb-12 grid grid-cols-3 gap-6">
                {facilities.map((item, index) => {
                  // destructure item
                  const { icon, name } = item;

                  return (
                    <div
                      key={index}
                      className="flex flex-1 items-center gap-x-3"
                    >
                      <div className="text-2xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* data right */}
          <div className="h-full w-full lg:w-[40%]">
            {/* data reservation */}
            <div className="mb-12 bg-accent/20 py-8 px-6">
              <div className="mb-4 flex flex-col space-y-4">
                <h3>Your Reservation</h3>

                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
              </div>

              <button className="btn btn-lg btn-primary w-full">
                Book noe from ${price}
              </button>
            </div>

            {/* data hotel rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente, aliquid modi. Sed laudantium unde distinctio quas,
                repudiandae fuga veniam tempora, quae nobis quo dicta a.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
