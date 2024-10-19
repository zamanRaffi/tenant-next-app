"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../component/pagination';

export default function DisplayPagination() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchItems = async (page) => {
    try {
      const response = await axios.get(`../api/items`, {
        params: {
          page,
          limit: 10
        }
      });
      const data = response.data;
      setItems(data.items);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
