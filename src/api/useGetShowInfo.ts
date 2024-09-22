import { useEffect, useState } from "react";
import { Show } from "../types/Show";
import axios from "axios";

const useGetShowInfo = (showId: number) => {
  const [data, setData] = useState<Show>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const apiURL = `https://api.wrbbradio.org/getShowInfo?showID=${showId}`;

  useEffect(() => {
    axios
      .get(apiURL)
      .then(({ data }) => {
        const showData: Show = {
          title: data.title,
          description: data.description.replace(/<[^>]*>/g, ""),
          since: data.since,
          image: data.image,
        };
        setData(showData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useGetShowInfo;
