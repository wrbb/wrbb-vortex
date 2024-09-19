import { Box, Container } from "theme-ui";
import { theme } from "../theme";
import Recordings from "../components/recordings";
import ShowInfo from "../components/showinfo";
import Topbar from "../components/topbar";
import BottomBar from "../components/bottombar";
import { ModalContext } from "../contexts/modalcontext";
import PasswordModal from "../components/passwordmodal";
import { useShowPageModel } from "../hooks/models/useShowPageModel";

const Show: React.FC = () => {
  const {
    setModalOpen,
    modalOpen,
    onModalSubmit,
    setOnModalSubmit,
    showData,
    showLoading,
    fallbackTitle,
    recordingsData,
    recordingsLoading,
    recordingsError,
  } = useShowPageModel();

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
            data={showData}
            loading={showLoading}
            fallbackTitle={fallbackTitle}
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
