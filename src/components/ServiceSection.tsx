import { useEffect, useReducer } from "react";

import completeBodyCar from "../assets/complete-body-car.mp4";
import completeBodyCarImg from "../assets/complete-body-car-img.png";
import frontVideo from "../assets/front-car-video.mp4";
import cabinVideo from "../assets/cabin-video.mp4";
import trunkVideo from "../assets/trunk-video.mp4";
import exteriorVideo from "../assets/exterior-video.mp4";
import frontCar from "../assets/front-car.png";
import trunkCar from "../assets/trunk-car.png";
import exteriorCar from "../assets/exterior-car.png";
import cabinCar from "../assets/cabin-car.png";
import CommercialVehicle from "../assets/CommercialVehicle.mp4";

// Define the shape of the state
interface State {
  activeIndex: number;
  isPaused: boolean;
  activeSection: string;
}

// Define the shape of the action
type Action =
  | { type: "SET_ACTIVE_INDEX"; payload: number }
  | { type: "TOGGLE_PAUSE" }
  | { type: "SET_ACTIVE_SECTION"; payload: string };

// Reducer function with explicit types
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_ACTIVE_INDEX":
      return { ...state, activeIndex: action.payload };
    case "TOGGLE_PAUSE":
      return { ...state, isPaused: !state.isPaused };
    case "SET_ACTIVE_SECTION":
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
}

const initialState: State = {
  activeIndex: 0,
  isPaused: false,
  activeSection: "passenger",
};

const ServiceSection = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { activeIndex, isPaused, activeSection } = state;

  // Scroll logic to handle section switching
  useEffect(() => {
    const handleScroll = () => {
      const passengerSection = document.getElementById("passenger-section");
      const commercialSection = document.getElementById("commercial-section");

      if (passengerSection && commercialSection) {
        const passengerRect = passengerSection.getBoundingClientRect();
        const commercialRect = commercialSection.getBoundingClientRect();

        // Calculate the middle of the viewport
        const viewportMiddle = window.innerHeight / 2;

        // Add a buffer (e.g., 100px) to prevent abrupt switching
        const buffer = 100;

        // Check if the Passenger section is in the viewport
        if (
          passengerRect.top <= viewportMiddle + buffer &&
          passengerRect.bottom >= viewportMiddle - buffer
        ) {
          dispatch({ type: "SET_ACTIVE_SECTION", payload: "passenger" });
        }
        // Check if the Commercial section is in the viewport
        else if (
          commercialRect.top <= viewportMiddle + buffer &&
          commercialRect.bottom >= viewportMiddle - buffer
        ) {
          dispatch({ type: "SET_ACTIVE_SECTION", payload: "commercial" });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data arrays 
  const passengerVehicles = [
    {
      id: 1,
      name: "Complete Body vehicles",
      desc: "Revving up Nonwoven innovation from interior to exterior.",
      video: completeBodyCar,
      thumbnail: completeBodyCarImg,
    },
    {
      id: 2,
      name: "Front vehicles",
      thumbnail: frontCar,
      video: frontVideo,
      desc: "Advanced solutions for heavy-duty applications.",
    },
    {
      id: 3,
      name: "Cabin vehicles",
      thumbnail: cabinCar,
      video: cabinVideo,
      desc: "Advanced solutions for heavy-duty applications.",
    },
    {
      id: 4,
      name: "Trunk vehicles",
      thumbnail: trunkCar,
      video: trunkVideo,
      desc: "Advanced solutions for heavy-duty applications.",
    },
    {
      id: 5,
      name: "Exterior vehicles",
      thumbnail: exteriorCar,
      video: exteriorVideo,
      desc: "Advanced solutions for heavy-duty applications.",
    },
  ];

  const commercialVehicles = [
    {
      id: 1,
      name: "Commercial vehicles",
      video: CommercialVehicle,
      desc: "Advanced solutions for heavy-duty applications.",
    },
  ];

  const handleCategoryClick = (idx: number) => {
    dispatch({ type: "SET_ACTIVE_INDEX", payload: idx });

    // Smooth scrolling for mobile
    const videoElement = document.getElementById("vehicle-video");
    if (videoElement && window.innerWidth < 768) {
      videoElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-black min-h-screen relative">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center pt-8 md:pt-12 lg:pt-16 pb-10 md:pb-16 lg:pb-20">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            <span className="block">
              Evolving the drive with{" "}
              <span className="font-normal">360-degree</span>
            </span>
            <span className="block mt-2">comprehensive solutions</span>
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row w-full gap-8">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div
              id="passenger-section"
              className={`pl-8 border-l border-white/20 transition-opacity duration-300 ${
                activeSection === "commercial" ? "opacity-50" : "opacity-100"
              }`}
            >
              <h2 className="text-white text-2xl md:text-3xl font-light mb-2">
                Passenger vehicles
              </h2>
              <p className="text-white/60 text-sm md:text-base">
                Revving up innovation from interior to exterior.
              </p>
            </div>

            <div
              id="commercial-section"
              className={`pl-8 border-l border-white/20 transition-opacity duration-300 ${
                activeSection === "passenger" ? "opacity-50" : "opacity-100"
              }`}
            >
              <h2 className="text-white text-2xl md:text-3xl font-light mb-2">
                Commercial vehicles
              </h2>
              <p className="text-white/60 text-sm md:text-base">
                Advancing engineering for heavy-duty vehicles.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-2/3">
            {/* Video Container */}
            <div id="vehicle-video" className="w-full mb-8">
              {activeSection === "passenger"
                ? passengerVehicles.map((vehicle, index) => (
                    <div
                      key={vehicle.id}
                      className={`${
                        index === activeIndex ? "block" : "hidden"
                      }`}
                    >
                      <video
                        src={vehicle.video}
                        width="100%"
                        height="auto"
                        autoPlay
                        loop
                        muted={isPaused}
                        className="rounded-lg"
                      />
                    </div>
                  ))
                : commercialVehicles.map((vehicle, index) => (
                    <div
                      key={vehicle.id}
                      className={`${
                        index === activeIndex ? "block" : "hidden"
                      }`}
                    >
                      <video
                        src={vehicle.video}
                        width="100%"
                        height="auto"
                        autoPlay
                        loop
                        muted={isPaused}
                        className="rounded-lg"
                      />
                    </div>
                  ))}
            </div>

            {/* Category Icons */}
            <div className="flex justify-center space-x-6 lg:space-x-12">
              {activeSection === "passenger" &&
                passengerVehicles.map((vehicle, idx) => (
                  <div
                    key={vehicle.id}
                    className={`group flex flex-col items-center cursor-pointer transition-opacity duration-300 ${
                      idx === activeIndex
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                    onClick={() => handleCategoryClick(idx)}
                  >
                    <div className="bg-transparent w-12 h-12 lg:w-16 lg:h-16 mb-2 flex items-center justify-center">
                      <img
                        src={vehicle.thumbnail}
                        alt={vehicle.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white text-xs md:text-sm text-center">
                      {vehicle.name.split(" ")[0]}{" "}
                      {/* Display first word only */}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ServiceSection;
