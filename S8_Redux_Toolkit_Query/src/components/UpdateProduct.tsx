import { useUpdateProductMutation } from '../state/product/productSlice';

interface UpdateProductProps {
  productId: Number;
}

const UpdateProduct = ({ productId }: UpdateProductProps) => {
  const [updateProduct, { data, error, isLoading }] = useUpdateProductMutation(
    {}
  );

  if (error) {
    return <h1>ERROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: 'Title updated 🤝',
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.error('Error updating product:', err);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>

      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};
export default UpdateProduct;
