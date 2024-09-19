import { SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetRecordings from "../../api/useGetRecordings";
import useGetShowInfo from "../../api/useGetShowInfo";
import { Show } from "../../types/Show";
import { Recording } from "../../types/Recording";
import useGetShows from "../../api/useGetShows";

interface ShowPageModel {
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
  modalOpen: boolean;
  onModalSubmit: () => void;
  setOnModalSubmit: React.Dispatch<SetStateAction<() => void>>;
  showData: Show | undefined;
  showLoading: boolean;
  recordingsData: Recording[];
  recordingsLoading: boolean;
  recordingsError: boolean;
  fallbackTitle: string | undefined;
}

export const useShowPageModel = (): ShowPageModel => {
  const { id } = useParams();
  const showID = parseInt(id ?? "");
  const [fallbackTitle, setFallbackTitle] = useState<string>();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [onModalSubmit, setOnModalSubmit] = useState<() => void>(
    () => () => {}
  );

  const navigate = useNavigate();

  const {
    data: recordingsData,
    loading: recordingsLoading,
    error: recordingsError,
  } = useGetRecordings(showID);
  const {
    data: showData,
    loading: showLoading,
    error: showError,
  } = useGetShowInfo(showID);
  const {
    data: showsData,
    loading: showsLoading,
    error: showsError,
  } = useGetShows();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // if there is an error fetching the show. this happens if the show is archived
    if (showError && !showsLoading) {
      const showObj = showsData?.find((show) => show.id === showID);

      if (!showObj || showsError) {
        // if the show with the ID does not exist,
        navigate("/");
      } else {
        setFallbackTitle(showObj.name);
      }
    }
  }, [showsLoading]);

  const showInfoLoading =
    showLoading ||
    (showError && showsLoading) ||
    (showError && fallbackTitle === undefined);

  return {
    setModalOpen,
    modalOpen,
    setOnModalSubmit,
    onModalSubmit,
    recordingsData,
    recordingsLoading,
    recordingsError,
    showData,
    showLoading: showInfoLoading,
    fallbackTitle,
  };
};
