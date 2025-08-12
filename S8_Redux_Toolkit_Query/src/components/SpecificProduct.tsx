import { useGetProductByIdQuery } from '../state/product/productSlice';

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(2);

  if (isError) {
    return <h1>OOOhNoooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div>
        <h1>{data?.brand}</h1>
        <h2>{data?.category}</h2>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};
export default SpecificProduct;
