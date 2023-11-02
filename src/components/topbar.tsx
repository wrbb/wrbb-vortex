import { Flex, Link, Text } from "theme-ui";
import { theme } from "../theme";
import BackButton from "./backbutton";
import { useNavigate } from "react-router-dom";

const TopBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex
      sx={{
        borderBottom: `2px solid ${theme.colors?.primary}`,
        alignItems: "center",
        py: 2,
        px: 3,
        width: "100vw",
      }}
    >
      <BackButton
        onClick={() => navigate("/")}
        sx={{
          textDecoration: "none",
          float: "left",
          position: "absolute",
          display: "flex",
          alignItems: "center",
        }}
      />
      <Link
        href="/"
        sx={{ textDecoration: "none", float: "right", margin: "0 auto" }}
      >
        <Text
          variant="heading2"
          sx={{ color: theme.colors?.text, textAlign: "center" }}
        >
          vortex
        </Text>
      </Link>
    </Flex>
  );
};

export default TopBar;
