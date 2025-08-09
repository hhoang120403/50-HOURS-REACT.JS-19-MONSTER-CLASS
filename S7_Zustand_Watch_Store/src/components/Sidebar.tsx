import { useState } from 'react';
import Navigation from './Navigation';
import { useFilterStore } from '../store/useStore';
import { FiChevronUp, FiX } from 'react-icons/fi';
import { data } from '../db/data';

interface Product {
  country: string;
  img: Record<string, string | undefined>;
  price: number;
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryDropdown, setCountryDropdown] = useState(false);
  const [colorDropdown, setColorDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);

  const {
    selectedColors,
    selectedCountries,
    selectedPriceRange,
    setSelectedColors,
    setSelectedCountries,
    setSelectedPriceRange,
    clearFilters,
  } = useFilterStore();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleCountryDropdown = () => setCountryDropdown(!countryDropdown);
  const toggleColorDropdown = () => setColorDropdown(!colorDropdown);
  const togglePriceDropdown = () => setPriceDropdown(!priceDropdown);

  const handleCountrySelection = (country: string) => {
    setSelectedCountries(
      selectedCountries.includes(country)
        ? selectedCountries.filter((c) => c !== country)
        : [...selectedCountries, country]
    );
  };

  const handleColorSelection = (color: string) => {
    setSelectedColors(
      selectedColors.includes(color)
        ? selectedColors.filter((c) => c !== color)
        : [...selectedColors, color]
    );
  };

  const handlePriceRangeSelection = (
    range: { min: number; max: number; label: string } | null
  ) => {
    setSelectedPriceRange(range);
  };

  // Extract unique countries from the data
  const uniqueCountries: string[] = Array.from(
    new Set(data.map((item: Product) => item.country))
  );

  return (
    <div>
      <Navigation toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header with close button */}
        <div className='flex justify-between items-center p-4 border-b'>
          <h2 className='text-lg font-semibold'>Filters</h2>
          <button className='text-xl' onClick={toggleSidebar}>
            <FiX />
          </button>
        </div>

        {/* Filters */}
        <div className='p-4 space-y-6'>
          {/* Country Filter */}
          <div>
            <button
              className='flex justify-between items-center w-full text-left'
              onClick={toggleCountryDropdown}
            >
              <span className='font-medium'>Country</span>
              <FiChevronUp
                className={`transform ${countryDropdown ? 'rotate-180' : ''}`}
              />
            </button>
            {countryDropdown && (
              <div className='mt-2 space-y-2'>
                {uniqueCountries.map((country, index) => (
                  <div
                    key={index}
                    className='flex items-center'
                    onClick={() => handleCountrySelection(country)}
                  >
                    <input
                      type='checkbox'
                      checked={selectedCountries.includes(country)}
                      onChange={() => handleCountrySelection(country)}
                      className='mr-2'
                    />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Colors Filters */}
          <div>
            <button
              className='flex justify-between items-center
               w-full text-left'
              onClick={toggleColorDropdown}
            >
              <span className='font-medium'>Color</span>
              <FiChevronUp
                className={`transform ${colorDropdown ? 'rotate-180' : ''}`}
              />
            </button>
            {colorDropdown && (
              <div className='mt-2 space-y-2'>
                {['black', 'brown', 'red', 'white', 'golden'].map((color) => (
                  <div
                    key={color}
                    className='flex items-center'
                    onClick={() => handleColorSelection(color)}
                  >
                    <input
                      type='checkbox'
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorSelection(color)}
                      className='mr-2'
                    />
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div>
            <button
              className='flex justify-between items-center 
              w-full text-left'
              onClick={togglePriceDropdown}
            >
              <span className='font-medium'>Price</span>
              <FiChevronUp
                className={`transform ${priceDropdown ? 'rotate-180' : ''}`}
              />
            </button>
            {priceDropdown && (
              <div className='mt-2 space-y-2'>
                {[
                  { label: 'Below $300', min: 0, max: 300 },
                  { label: '$300 - $600', min: 300, max: 600 },
                  { label: 'Above $600', min: 600, max: Infinity },
                ].map((range) => (
                  <div
                    key={range.label}
                    className='flex items-center'
                    onClick={() => handlePriceRangeSelection(range)}
                  >
                    <input
                      type='radio'
                      checked={selectedPriceRange?.label === range.label}
                      onChange={() => handlePriceRangeSelection(range)}
                      className='mr-2'
                    />
                    <span>{range.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className='p-4 border-t flex justify-between'>
            <button
              onClick={clearFilters}
              className='bg-black text-white px-4 py-2 rounded ml-2'
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-40'
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};
export default Sidebar;
