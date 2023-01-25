import React from "react";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    // destructure room / room card
    <div className="group min-h-[500px] bg-white shadow-2xl">
      {/* rom image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt="room image"
          className="w-full transition-all duration-300 group-hover:scale-110"
        />
      </div>

      {/* room info */}
      <div className="mx-auto flex h-[60px] max-w-[300px] -translate-y-1/2 items-center justify-center bg-white font-tertiary text-base font-semibold uppercase tracking-[1px] shadow-lg">
        <div className="flex w-[80%] items-center justify-between">
          {/* room sise */}
          <div className="flex items-center gap-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>

            <div className="flex items-center gap-1">
              <div>size</div>
              <div>{size}m2</div>
            </div>
          </div>

          {/* room capacity */}
          <div className="flex items-center gap-2">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>

            <div className="flex items-center gap-1">
              <div>max people</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>

      {/* room name & description */}
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="mx-auto mb-3 max-w-[300px] lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>

      {/* room button */}
      <Link
        to={`/room/${id}`}
        className="btn btn-secondary btn-sm mx-auto max-w-[240px]"
      >
        Book now from ${price}
      </Link>
    </div>
  );
};

export default Room;
