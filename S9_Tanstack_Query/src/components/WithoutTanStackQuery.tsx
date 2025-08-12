import { useEffect, useState } from 'react';

const WithoutTanStackQuery = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        if (!res.ok) throw new Error(`Error fetching data: ${res.statusText}`);

        const data = await res.json();
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();
  }, [id]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <h1>{JSON.stringify(data)}</h1>}
      <button
        className='p-[2rem] bg-black text-white'
        onClick={() => setId((prevId) => prevId + 1)}
      >
        Next
      </button>
    </div>
  );
};
export default WithoutTanStackQuery;
