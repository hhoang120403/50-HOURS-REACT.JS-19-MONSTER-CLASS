import ProductCard from './components/ProductCard';
import Sidebar from './components/Sidebar';
import { data } from './db/data';
import { useFilterStore } from './store/useStore';

interface Product {
  id: string;
  country: string;
  img: Record<string, string | undefined>;
  price: number;
}

const App = () => {
  const { selectedCountries, selectedColors, selectedPriceRange } =
    useFilterStore();

  const filteredData = data.filter((item: Product) => {
    const matchesCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesColor =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesCountry && matchesColor && matchesPrice;
  });

  return (
    <>
      <Sidebar />
      <div className='p-4 flex flex-wrap justify-center items-center'>
        {filteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default App;
