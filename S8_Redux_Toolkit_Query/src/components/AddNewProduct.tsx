import { useAddNewProductMutation } from '../state/product/productSlice';

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] = useAddNewProductMutation(
    {}
  );

  if (error) {
    return <h1>ERROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: 'Hydrating Face Cream',
        description:
          'A lightweight face cream that deeply hydrates and nourishes your skin for a radiant look.',
        category: 'skincare',
        price: 19.99,
        discountPercentage: 5.25,
        rating: 4.7,
        stock: 150,
        tags: ['skincare', 'hydrating', 'cream'],
        brand: 'GlowCare',
        sku: 'SKN-GLO-HFC-002',
        weight: 50, // grams
        dimensions: {
          width: 5.5,
          height: 6.2,
          depth: 5.5,
        },
        warrantyInformation: '6 months warranty',
        shippingInformation: 'Ships in 2-4 business days',
        availabilityStatus: 'In Stock',
        reviews: [
          {
            rating: 5,
            comment: 'My skin feels amazing after using this!',
            date: '2025-08-11T10:15:00.000Z',
            reviewerName: 'Sophia Nguyen',
            reviewerEmail: 'sophia.nguyen@example.com',
          },
          {
            rating: 4,
            comment: 'Good cream but a bit pricey.',
            date: '2025-08-10T14:22:00.000Z',
            reviewerName: 'David Tran',
            reviewerEmail: 'david.tran@example.com',
          },
        ],
        returnPolicy: '30-day return policy',
        minimumOrderQuantity: 10,
        meta: {
          createdAt: '2025-08-11T09:00:00.000Z',
          updatedAt: '2025-08-11T09:00:00.000Z',
          barcode: '9876543210123',
          qrCode: 'https://example.com/qr-code.png',
        },
        images: ['https://example.com/images/face-cream-1.webp'],
        thumbnail: 'https://example.com/images/face-cream-thumbnail.webp',
      };

      await addNewProduct(newProductData);
    } catch (error) {
      console.error('Error adding new product:', error);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};
export default AddNewProduct;
