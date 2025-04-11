import React from "react";

const CarDetail = ({ car, isInWishlist, onToggleWishlist, onClose }) => {
  if (!car) return null;

  const specifications = [
    { label: "Brand", value: car.brand },
    { label: "Year", value: car.year },
    { label: "Fuel Type", value: car.fuelType },
    { label: "Transmission", value: car.transmission || "Automatic" },
    { label: "Engine", value: car.engine || "2.0L" },
    { label: "Mileage", value: `${car.mileage} km` },
    { label: "Seating Capacity", value: `${car.seatingCapacity} Seats` },
    { label: "Color", value: car.color || "White" },
  ];

  const features = car.features || [
    "Air Conditioning",
    "Power Steering",
    "Power Windows",
    "Anti-lock Braking System (ABS)",
    "Driver Airbag",
    "Passenger Airbag",
    "Automatic Climate Control",
    "Alloy Wheels",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 z-10"
          aria-label="Close details"
        >
          <svg
            className="h-5 w-5 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        <button
          onClick={onToggleWishlist}
          className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 z-10"
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            className={`h-5 w-5 ${
              isInWishlist
                ? "text-red-500 fill-current"
                : "text-gray-600 dark:text-gray-300"
            }`}
            fill={isInWishlist ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        <img
          src={car.imageUrl || "/placeholder-car.jpg"}
          alt={car.name}
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {car.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {car.description ||
                "This is a beautiful car with excellent performance and comfort features. Perfect for both city driving and long road trips."}
            </p>
          </div>

          <div className="mt-4 md:mt-0 md:ml-8 md:text-right">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              ${car.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Ex-showroom Price
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Specifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specifications.map((spec) => (
              <div
                key={spec.label}
                className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {spec.label}
                </div>
                <div className="text-gray-800 dark:text-white font-medium">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Contact Information
          </h3>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Interested in this car? Contact us to schedule a test drive or for
              more information.
            </p>

            <div className="flex items-center mt-4">
              <svg
                className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                +1 (555) 123-4567
              </span>
            </div>

            <div className="flex items-center mt-2">
              <svg
                className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                contact@carfinder.com
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white rounded-lg transition-colors duration-200"
          >
            Back to Search
          </button>

          <button
            onClick={onToggleWishlist}
            className={`px-4 py-2 ${
              isInWishlist
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white rounded-lg transition-colors duration-200 flex items-center`}
          >
            <svg
              className="h-5 w-5 mr-1"
              fill={isInWishlist ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
