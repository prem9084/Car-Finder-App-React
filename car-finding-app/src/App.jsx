import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchFilters from "./components/SearchFilter";
import CarList from "./components/CardList";
import CarDetail from "./Pages/CarDetails";
import Wishlist from "./Pages/WithList";

import { fetchCarById, fetchCars } from "./serveces/api.js";

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCarDetail, setShowCarDetail] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: "",
    maxPrice: "",
    fuelType: "",
    seatingCapacity: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const carsPerPage = 10;

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = localStorage.getItem("carWishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Update localStorage when wishlist changes
  useEffect(() => {
    localStorage.setItem("carWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Fetch cars on initial load
  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      try {
        const result = await fetchCars();
        setCars(result);
        setFilteredCars(result);
        setTotalPages(Math.ceil(result.length / carsPerPage));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  // Apply filters when filters or search query changes
  useEffect(() => {
    let result = [...cars];

    // Apply search query
    if (searchQuery) {
      result = result.filter(
        (car) =>
          car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply brand filter
    if (filters.brand) {
      result = result.filter((car) => car.brand === filters.brand);
    }

    // Apply price range filter
    if (filters.minPrice) {
      result = result.filter((car) => car.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      result = result.filter((car) => car.price <= parseInt(filters.maxPrice));
    }

    // Apply fuel type filter
    if (filters.fuelType) {
      result = result.filter((car) => car.fuelType === filters.fuelType);
    }

    // Apply seating capacity filter
    if (filters.seatingCapacity) {
      result = result.filter(
        (car) => car.seatingCapacity === parseInt(filters.seatingCapacity)
      );
    }

    setFilteredCars(result);
    setTotalPages(Math.ceil(result.length / carsPerPage));
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, searchQuery, cars]);

  // Handle car selection for detailed view
  const handleCarSelect = async (carId) => {
    setLoading(true);
    try {
      const car = await fetchCarById(carId);
      setSelectedCar(car);
      setShowCarDetail(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Toggle car in wishlist
  const toggleWishlist = (car) => {
    if (wishlist.find((item) => item.id === car.id)) {
      setWishlist(wishlist.filter((item) => item.id !== car.id));
    } else {
      setWishlist([...wishlist, car]);
    }
  };

  // Check if a car is in wishlist
  const isInWishlist = (carId) => {
    return wishlist.some((car) => car.id === carId);
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get current page cars
  const getCurrentCars = () => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    return filteredCars.slice(startIndex, endIndex);
  };

  // Handle search input change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Handle sorting by price
  const handleSort = (direction) => {
    const sorted = [...filteredCars].sort((a, b) => {
      if (direction === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilteredCars(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header
        onWishlistClick={() => setShowWishlist(!showWishlist)}
        wishlistCount={wishlist.length}
      />

      <main className="container mx-auto px-4 py-8">
        {showWishlist ? (
          <Wishlist
            wishlist={wishlist}
            onRemove={toggleWishlist}
            onCarSelect={handleCarSelect}
            onClose={() => setShowWishlist(false)}
          />
        ) : showCarDetail && selectedCar ? (
          <CarDetail
            car={selectedCar}
            isInWishlist={isInWishlist(selectedCar.id)}
            onToggleWishlist={() => toggleWishlist(selectedCar)}
            onClose={() => setShowCarDetail(false)}
          />
        ) : (
          <>
            <SearchFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onSearchChange={handleSearchChange}
              searchQuery={searchQuery}
              onSort={handleSort}
            />

            <CarList
              cars={getCurrentCars()}
              loading={loading}
              error={error}
              onCarSelect={handleCarSelect}
              toggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
