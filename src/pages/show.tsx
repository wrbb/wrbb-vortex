import { useNavigate, useParams } from "react-router-dom";
import { Box, Container } from "theme-ui";
import useGetRecordings from "../api/useGetRecordings";
import shows from "../data/shows.json";
import { theme } from "../theme";
import Recordings from "../components/recordings";
import useGetShowInfo from "../api/useGetShowInfo";
import ShowInfo from "../components/showinfo";
import Topbar from "../components/topbar";
import BottomBar from "../components/bottombar";
import { useEffect, useState } from "react";
import { ModalContext } from "../contexts/modalcontext";
import PasswordModal from "../components/passwordmodal";

const Show: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [onModalSubmit, setOnModalSubmit] = useState<() => void>(
    () => () => {}
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const showIDNo = parseInt(id ?? "");

  const {
    data: recordingsData,
    loading: recordingsLoading,
    error: recordingsError,
  } = useGetRecordings(showIDNo);
  const {
    data: showData,
    loading: showLoading,
    error: showError,
  } = useGetShowInfo(showIDNo);

  const showObj = shows.find((show) => show.id == showIDNo);

  // redirect user to home page if the show is not found
  if (!showObj) {
    navigate("/");
    return;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        setOpen: setModalOpen,
        isOpen: modalOpen,
        onSubmit: onModalSubmit,
        setOnSubmit: setOnModalSubmit,
      }}
    >
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <PasswordModal />
        <Topbar />
        <Container sx={{ backgroundColor: theme.colors?.background }}>
          <ShowInfo
            data={showData!}
            loading={showLoading}
            error={showError}
            fallbackTitle={showObj.name}
          />

          <Recordings
            data={recordingsData}
            loading={recordingsLoading}
            error={recordingsError}
          />
        </Container>
        <BottomBar />
      </Box>
    </ModalContext.Provider>
  );
};

export default Show;
