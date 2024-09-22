import { Flex, Link, Text } from "theme-ui";
import { theme } from "../theme";

const BottomBar: React.FC = () => {
  return (
    <Flex
      sx={{
        px: 3,
        py: 2,
        justifyContent: "center",
        gap: 2,
        position: "absolute",
        bottom: 0,
        width: "100vw",
      }}
    >
      <Text>
        © 2024{" "}
        <Link href="https://wrbbradio.org" sx={{ color: theme.colors?.text }}>
          WRBB
        </Link>
        .
      </Text>
      <Text>
        made by{" "}
        <Link
          href="https://github.com/z-roth"
          sx={{ color: theme.colors?.text }}
        >
          zack roth
        </Link>
      </Text>
    </Flex>
  );
};

export default BottomBar;
