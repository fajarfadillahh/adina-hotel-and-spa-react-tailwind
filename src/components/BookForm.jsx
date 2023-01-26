import React, { useContext } from "react";

// import components
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import { RoomContext } from "../context/RoomContext";

const BookForm = () => {
  const { handleClick } = useContext(RoomContext);

  return (
    <section className="bookform">
      <div className="container relative mx-auto">
        <div className="mt-4 bg-accent/20 p-4 lg:absolute lg:inset-x-0 lg:-top-12 lg:z-30 lg:p-0 lg:shadow-xl">
          <form className="h-[300px] w-full lg:h-[70px]">
            <div className="flex h-full w-full flex-col lg:flex-row">
              {/* book form input */}
              <div className="flex-1 border-r">
                <CheckIn />
              </div>
              <div className="flex-1 border-r">
                <CheckOut />
              </div>
              <div className="flex-1 border-r">
                <AdultsDropdown />
              </div>
              <div className="flex-1 border-r">
                <KidsDropdown />
              </div>

              {/* book form button */}
              <button
                type="submit"
                onClick={(e) => handleClick(e)}
                className="btn btn-primary"
              >
                Check now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookForm;
