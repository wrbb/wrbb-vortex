import axios from "axios";
import { useEffect, useState } from "react";
import { Recording, RecordingRaw } from "../types/recording";

const useGetRecordings = (showId: number) => {
  const [data, setData] = useState<Recording[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const apiUrl = `https://api.wrbbradio.org/getRecordings?id=${showId}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        const recordingsArr = res.data.items;
        const formattedRecordings: Recording[] = recordingsArr.map(
          (rec: RecordingRaw) => {
            return { ...rec, start: new Date(rec.start) };
          }
        );

        setData(formattedRecordings);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useGetRecordings;
