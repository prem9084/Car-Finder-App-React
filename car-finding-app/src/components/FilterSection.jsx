// components/FilterSection.jsx
import React, { useState, useEffect, useContext } from "react";
import {
  getAllBrands,
  getAllFuelTypes,
  getMinPrice,
  getMaxPrice,
} from "../services/api";
import ThemeContext from "../context/ThemeContext";

const FilterSection = ({ onFilter, onSort }) => {
  const { darkMode } = useContext(ThemeContext);
  const [brands, setBrands] = useState(["All"]);
  const [fuelTypes, setFuelTypes] = useState(["All"]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [filters, setFilters] = useState({
    brand: "All",
    fuel_type: "All",
    seating_capacity: "All",
    minPrice: 0,
    maxPrice: 100000,
    search: "",
  });
  const [sortOption, setSortOption] = useState("");

  // Load filter options
  useEffect(() => {
    setBrands(getAllBrands());
    setFuelTypes(getAllFuelTypes());
    setMinPrice(getMinPrice());
    setMaxPrice(getMaxPrice());

    // Set initial max price in filters
    setFilters((prev) => ({
      ...prev,
      maxPrice: getMaxPrice(),
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSort(value);
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleClearFilters = () => {
    setFilters({
      brand: "All",
      fuel_type: "All",
      seating_capacity: "All",
      minPrice: minPrice,
      maxPrice: maxPrice,
      search: "",
    });
    setSortOption("");
    onFilter({
      brand: "All",
      fuel_type: "All",
      seating_capacity: "All",
      minPrice: minPrice,
      maxPrice: maxPrice,
      search: "",
    });
    onSort("");
  };

  return (
    <div className={`card mb-4 ${darkMode ? "bg-dark text-light" : ""}`}>
      <div className="card-body">
        <h5 className="card-title">Find Your Perfect Car</h5>
        <form onSubmit={handleApplyFilters}>
          <div className="row g-3">
            {/* Search */}
            <div className="col-md-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by brand or model..."
                  name="search"
                  value={filters.search}
                  onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit">
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="col-md-3">
              <label className="form-label">Brand</label>
              <select
                className="form-select"
                name="brand"
                value={filters.brand}
                onChange={handleInputChange}
              >
                {brands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Fuel Type Filter */}
            <div className="col-md-3">
              <label className="form-label">Fuel Type</label>
              <select
                className="form-select"
                name="fuel_type"
                value={filters.fuel_type}
                onChange={handleInputChange}
              >
                {fuelTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Seating Capacity Filter */}
            <div className="col-md-3">
              <label className="form-label">Seating Capacity</label>
              <select
                className="form-select"
                name="seating_capacity"
                value={filters.seating_capacity}
                onChange={handleInputChange}
              >
                <option value="All">All</option>
                <option value="2">2+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
                <option value="6">6+</option>
                <option value="7">7+</option>
                <option value="8">8+</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="col-md-3">
              <label className="form-label">Sort By</label>
              <select
                className="form-select"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="">Default</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="col-md-6">
              <label className="form-label">
                Price Range: ${filters.minPrice} - ${filters.maxPrice}
              </label>
              <div className="d-flex gap-2">
                <input
                  type="range"
                  className="form-range"
                  min={minPrice}
                  max={maxPrice}
                  step="1000"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleInputChange}
                />
                <input
                  type="range"
                  className="form-range"
                  min={minPrice}
                  max={maxPrice}
                  step="1000"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Filter Actions */}
            <div className="col-md-6 d-flex align-items-end">
              <div className="d-grid gap-2 d-md-flex w-100">
                <button type="submit" className="btn btn-primary flex-fill">
                  Apply Filters
                </button>
                <button
                  type="button"
                  className="btn btn-secondary flex-fill"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterSection;
