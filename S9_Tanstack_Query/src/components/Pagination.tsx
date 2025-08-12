import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const fetchTodos = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const { data, error, isLoading } = useQuery({
    queryKey: ['todos', currentPage],
    queryFn: () => fetchTodos(currentPage, pageSize),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1>Todos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='bg-cyan-300 p-3'
        >
          Previous Page
        </button>
        <button onClick={handleNextPage} className='bg-purple-300 p-3'>
          Next Page
        </button>
      </div>
    </div>
  );
};
export default Pagination;
