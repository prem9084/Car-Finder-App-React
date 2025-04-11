import React from "react";

const Wishlist = ({ wishlist, onRemove, onCarSelect, onClose }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-red-500 mr-2"
            fill="currentColor"
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
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Your Wishlist
          </h2>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close wishlist"
        >
          <svg
            className="h-6 w-6 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-8">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600"
            fill="none"
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
          <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">
            Your wishlist is empty
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Start adding some cars to your wishlist!
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            Browse Cars
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {wishlist.map((car) => (
              <div
                key={car.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between transition-colors duration-300"
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={car.imageUrl || "/placeholder-car.jpg"}
                    alt={car.name}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {car.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {car.brand} • {car.year}
                    </p>
                    <div className="mt-1 text-blue-600 dark:text-blue-400 font-medium">
                      ${car.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 w-full md:w-auto">
                  <button
                    onClick={() => onCarSelect(car.id)}
                    className="flex-1 md:flex-none px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onRemove(car)}
                    className="flex-1 md:flex-none px-4 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-700 dark:text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white rounded-lg transition-colors duration-200"
            >
              Continue Browsing
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
