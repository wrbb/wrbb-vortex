import { Flex, Link, Text } from "theme-ui";
import { theme } from "../theme";

const TopBar: React.FC = () => {
  return (
    <Flex
      sx={{
        borderBottom: `1px solid ${theme.colors?.primary}`,
        justifyContent: "center",
        py: 2,
      }}
    >
      <Link href="/" sx={{ textDecoration: "none" }}>
        <Text variant="heading2" sx={{ color: theme.colors?.text }}>
          vortex
        </Text>
      </Link>
    </Flex>
  );
};

export default TopBar;
