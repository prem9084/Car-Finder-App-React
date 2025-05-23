// services/api.js
const cars = [
  {
    id: 1,
    name: "Model 3",
    brand: "Tesla",
    price: 45000,
    year: 2023,
    fuelType: "Electric",
    seatingCapacity: 5,
    mileage: 32,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-3/5251/1693556345148/side-view-(left)-90.jpg",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",
      "Wireless Charging",
      "Premium Audio System",
      "Heated Seats",
      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Electric Motor",
    color: "Red",
  },

  {
    id: 2,
    name: "Audi 4",
    brand: "Audi",
    price: 35000,
    year: 2025,
    fuelType: "Petrol",
    seatingCapacity: 4,
    mileage: 35,
    imageUrl:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/28379/q3-exterior-right-front-three-quarter-93481.jpeg?isig=0&q=80",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",
      "Wireless Charging",
      "Premium Audio System",
      "Heated Seats",
      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Petrol Engine",
    color: "Brown",
  },
  {
    id: 3,
    name: "Maruti Ertiga ZXI Plus AT",
    brand: "Maruti",
    price: 15000,
    year: 2024,
    fuelType: "Petrol",
    seatingCapacity: 7,
    mileage: 23.3,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg?impolicy=resize&imwidth=280",
    features: [
      "Self Drive",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Wireless Charging",
      "Premium Audio System",
      '15" Touchscreen',
    ],
    transmission: "Not",
    engine: "Petrol Engine",
    color: "Red",
  },
  {
    id: 4,
    name: "Mahindra Thar",
    brand: "Mahindra",
    price: 12000,
    year: 2022,
    fuelType: "Petrol",
    seatingCapacity: 4,
    mileage: 20,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg?tr=w-664",
    features: [
      "Full Self-Driving Capability",
      "360° Cameras",

      "Wireless Charging",
      "Premium Audio System",

      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Electric Motor",
    color: "Red",
  },
  {
    id: 5,
    name: "Defender",
    brand: "Land Rover",
    price: 120000,
    year: 2025,
    fuelType: "Petrol",
    seatingCapacity: 4,
    mileage: 25,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/12294/1736235204503/front-left-side-47.jpg?tr=w-664",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",
      "Wireless Charging",
      "Premium Audio System",
      "Heated Seats",
      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Petrol Engin   ",
    color: "Brown",
  },
  {
    id: 6,
    name: "Mahindra Scorpio N",
    brand: "Mahindra",
    price: 15000,
    year: 2025,
    fuelType: "Petrole",
    seatingCapacity: 7,
    mileage: 25,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1740050844896/front-left-side-47.jpg?tr=w-664",
    features: [
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",

      "Premium Audio System",

      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Petrol Engin",
    color: "Gray",
  },
  {
    id: 7,
    name: "TATA PUNCH",
    brand: "TATA",
    price: 16000,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 4,
    mileage: 0,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-664",
    features: [
      "Full Self-Driving Capability",
      "360° Cameras",

      "Premium Audio System",

      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Petrol Engin",
    color: "Blue",
  },

  {
    id: 8,
    name: "Maruti Dzire",
    brand: "Maruti",
    price: 11000,
    year: 2020,
    fuelType: "Petrole",
    seatingCapacity: 5,
    mileage: 25,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/11387/1731318279714/front-left-side-47.jpg?tr=w-664",
    features: [
      "Full Self-Driving Capability",
      "360° Cameras",

      "Premium Audio System",

      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Electric Motor",
    color: "Red",
  },
  {
    id: 9,
    name: "Mahindra BE 6",
    brand: "Mahindra",
    price: 12000,
    year: 2025,
    fuelType: "Electric",
    seatingCapacity: 5,
    mileage: 15,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1739189295831/front-left-side-47.jpg?tr=w-664",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",
      "Wireless Charging",
      "Premium Audio System",
      "Heated Seats",
      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Electric Motor",
    color: "White",
  },
  {
    id: 10,
    name: "Mahindra Thar ROXX",
    brand: "Mahindra",
    price: 9000,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    mileage: 15,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg?tr=w-664",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",
      "Wireless Charging",
      "Premium Audio System",
      "Heated Seats",
      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Petrol",
    color: "Red",
  },
  {
    id: 11,
    name: "Renault KWID",
    brand: "Renaul",
    price: 16000,
    year: 2025,
    fuelType: "Petrol",
    seatingCapacity: 5,
    mileage: 19,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10076/1739594964186/front-left-side-47.jpg?tr=w-664",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",
      "Wireless Charging",
      "Premium Audio System",
      "Heated Seats",
      '15" Touchscreen',
    ],
    transmission: "Automatic/Menual",
    engine: "Petrol Engin",
    color: "White",
  },
  {
    id: 12,
    name: "Range Rover",
    brand: "Range Rover",
    price: 116000,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    mileage: 12,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover/11540/1719037980777/front-left-side-47.jpg?tr=w-664",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",
      "Wireless Charging",
      "Premium Audio System",
      "Heated Seats",
      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Petrol Engin",
    color: "Cream Color",
  },
  {
    id: 13,
    name: "Hyundai Creta",
    brand: "Hyundai",
    price: 22000,
    year: 2024,
    fuelType: "Petrol",
    seatingCapacity: 5,
    mileage: 17,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1705465218824/front-left-side-47.jpg?tr=w-664",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",
      "Wireless Charging",
      "Premium Audio System",
      "Heated Seats",
      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Petrol Engin",
    color: "Black",
  },
  {
    id: 14,
    name: "Mahindra Scorpio",
    brand: "Mahindra",
    price: 25000,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    mileage: 17,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio/10764/1708522826716/front-left-side-47.jpg?imwidth=420&impolicy=resize",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "360° Cameras",
      "Glass Roof",
      "Wireless Charging",
      "Premium Audio System",
      "Heated Seats",
      '15" Touchscreen',
    ],
    transmission: "Automatic",
    engine: "Petrol",
    color: "Black",
  },
];

// Fetch all cars
export const fetchCars = () => {
  return Promise.resolve(cars); // Mocking API with static data
};

// Fetch car by ID
export const fetchCarById = (id) => {
  const car = cars.find((c) => c.id === parseInt(id));
  return Promise.resolve(car);
};
