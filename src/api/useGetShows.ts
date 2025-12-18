import { useEffect, useState } from "react";
import axios from "axios";
import { ShowRaw } from "../types/ShowRaw";

interface UseGetShowsModel {
  data: ShowRaw[] | undefined;
  loading: boolean;
  error: boolean;
}

const useGetShows = (): UseGetShowsModel => {
  const [data, setData] = useState<ShowRaw[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const apiURL = `https://api.wrbbradio.org/getShows`;

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        const allShowsData: ShowRaw[] = response.data.map((show: any) => ({
          name: show.title,
          id: show.id,
        }));

        if (allShowsData.length === 0) {
          console.error("No shows found.")
          setError(true);
        } else {
          setData(allShowsData);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching shows: ", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useGetShows;