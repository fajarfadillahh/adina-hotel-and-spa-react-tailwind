import React, { useContext } from "react";

// import icons
import { BsChevronDown } from "react-icons/bs";

// import room context
import { RoomContext } from "../context/RoomContext";

// import headless ui menu
import { Menu } from "@headlessui/react";

const list = [
  { name: "0 Kids" },
  { name: "1 Kid" },
  { name: "2 Kids" },
  { name: "3 Kids" },
  { name: "4 Kids" },
];

const KidsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext);

  return (
    <Menu as="div" className="relative h-full w-full bg-white">
      {/* dropdown button */}
      <Menu.Button className="flex h-full w-full items-center justify-between px-8">
        {kids === "0 Kids" ? "No Kids" : kids}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>

      {/* dropdown items */}
      <Menu.Items
        as="ul"
        className="absolute z-40 flex w-full flex-col bg-white"
      >
        {list.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setKids(li.name)}
              as="li"
              key={index}
              className="flex h-12 w-full cursor-pointer items-center justify-center border-b last-of-type:border-b-0 hover:bg-accent hover:text-white"
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
