import { useEffect, useState } from "react";
import axios from "axios";

const moviesURL = import.meta.env.VITE_API;

export const useMoviesAndSeries = (list_id, number_page) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        method: "GET",
        url: `${moviesURL + list_id}`,
        params: { language: "pt-BR", page: number_page },
        headers: {
          accept: "application/json",
          Authorization:
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RmNWE0OTAwOWU5YzUwN2RlYzAwYmVmODRhMDg3YiIsInN1YiI6IjY2NWYwMGM5YjhkMjEzOTE5YjFjMzRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WkAUIMr-VzAiCNYxQfqpj8mXdm800L0yqz8RNFp4ShU`
        },
      };

      try {
        const response = await axios.request(options);
        setDataList(response.data.items);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getMovies();
  }, [list_id, number_page]);

  return { dataList, loading, error };
};