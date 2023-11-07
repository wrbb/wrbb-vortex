import { useContext, useState } from "react";
import Modal from "react-modal";
import { Button, Flex, Input, Text } from "theme-ui";
import { ModalContext } from "../contexts/modalcontext";
import { theme } from "../theme";
import Cookies from "js-cookie";

Modal.setAppElement("#root");

const style: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: `1px solid ${theme.colors?.primary}`,
    padding: 16,
    width: 255,
    backgroundColor: `${theme.colors!.background}`,
    borderRadius: 0,
  },
};

const PasswordModal: React.FC = () => {
  const modalContext = useContext(ModalContext);
  const [inputText, setInputText] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);

  // to any potential employer: this is not supposed to be super secure
  const recordingsPassword = import.meta.env.VITE_RECORDINGS_PASSWORD;

  if (!modalContext) {
    return null;
  }

  const handleSubmit = () => {
    if (inputText === recordingsPassword) {
      Cookies.set("isAuthenticated", "true", { expires: 120 }); // expires in 120 days/four months, roughly once a semester
      modalContext.onSubmit();
      modalContext.setOpen(false);
    } else {
      setInvalid(true);
    }
  };

  return (
    <Modal
      isOpen={modalContext.isOpen}
      contentLabel="enter password"
      style={style}
      onRequestClose={() => modalContext.setOpen(false)}
    >
      <Flex sx={{ flexDirection: "column", gap: 3 }}>
        <Text variant="heading3">please enter password</Text>
        {invalid && (
          <Text sx={{ color: theme.colors?.primary }}>invalid password</Text>
        )}
        <Input
          sx={{
            border: `1px solid ${theme.colors?.primary}`,
            ":focus": {
              outline: "red",
              border: "2px solid red",
            },
            borderRadius: 0,
          }}
          type="password"
          onChange={(event) => {
            setInvalid(false);
            setInputText(event.target.value);
          }}
          onSubmit={handleSubmit}
        />
        <Flex sx={{ justifyContent: "space-around" }}>
          <Button
            variant="secondary"
            onClick={() => modalContext.setOpen(false)}
          >
            cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            submit
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default PasswordModal;
