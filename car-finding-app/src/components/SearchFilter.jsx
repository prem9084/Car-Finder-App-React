import React, { useState, useEffect } from "react";

const SearchFilters = ({
  filters,
  onFilterChange,
  onSearchChange,
  searchQuery,
  onSort,
}) => {
  const [brands, setBrands] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [seatingOptions, setSeatingOptions] = useState([]);
  const [localFilters, setLocalFilters] = useState(filters);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  // These would normally come from the API
  useEffect(() => {
    // Simulate fetching brand options from API
    setBrands([
      "Toyota",
      "Honda",
      "Ford",
      "BMW",
      "Mercedes",
      "Audi",
      "Tesla",
      "Hyundai",
      "Kia",
    ]);

    // Simulate fetching fuel type options from API
    setFuelTypes(["Petrol", "Diesel", "Electric", "Hybrid"]);

    // Set seating capacity options
    setSeatingOptions([2, 4, 5, 7, 8]);
  }, []);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearchInputChange = (e) => {
    setLocalSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(localFilters);
    onSearchChange(localSearchQuery);
  };

  const clearFilters = () => {
    const resetFilters = {
      brand: "",
      minPrice: "",
      maxPrice: "",
      fuelType: "",
      seatingCapacity: "",
    };
    setLocalFilters(resetFilters);
    setLocalSearchQuery("");
    onFilterChange(resetFilters);
    onSearchChange("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Find Your Perfect Car
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by car name or brand..."
              className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={localSearchQuery}
              onChange={handleSearchInputChange}
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Brand Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Brand
            </label>
            <select
              name="brand"
              value={localFilters.brand}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filters */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Price Range
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                value={localFilters.minPrice}
                onChange={handleInputChange}
                className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                value={localFilters.maxPrice}
                onChange={handleInputChange}
                className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>
          </div>

          {/* Fuel Type Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Fuel Type
            </label>
            <select
              name="fuelType"
              value={localFilters.fuelType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Fuel Types</option>
              {fuelTypes.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
          </div>

          {/* Seating Capacity Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Seating Capacity
            </label>
            <select
              name="seatingCapacity"
              value={localFilters.seatingCapacity}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any Capacity</option>
              {seatingOptions.map((seats) => (
                <option key={seats} value={seats}>
                  {seats} Seats
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg mr-2 transition-colors duration-200"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={clearFilters}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>

          <div className="flex items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
              Sort by price:
            </span>
            <button
              type="button"
              onClick={() => onSort("asc")}
              className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white rounded-lg mr-1 transition-colors duration-200"
              aria-label="Sort price low to high"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => onSort("desc")}
              className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white rounded-lg transition-colors duration-200"
              aria-label="Sort price high to low"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
