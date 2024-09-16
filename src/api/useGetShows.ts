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
      .then((data) => {
        const showsData: ShowRaw[] = data.data.result.map((show: any) => {
          return { name: show.name, id: show.id };
        });

        if (showsData.length == 0) {
          console.error("No shows found.")
          setError(true);
        } else {
          setData(showsData);
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
