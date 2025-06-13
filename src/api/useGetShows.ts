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
        // Parse the schedule strings from all years and combine them
        const allShowsData: ShowRaw[] = response.data.result.reduce((shows: ShowRaw[], yearData: any) => {
          try {
            const scheduleData = JSON.parse(yearData.schedule);
            const yearShows = scheduleData.map((show: any) => ({
              name: show.title,
              id: show.show_id,
            }));

            // Filter out shows that already exist in the accumulator
            const uniqueShows = yearShows.filter(
              (show) => !shows.some((existingShow) => existingShow.id === show.id)
            );

            return [...shows, ...uniqueShows];
          } catch (err) {
            console.error(`Error parsing schedule for year ${yearData._id}:`, err);
            return shows;
          }
        }, []);

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