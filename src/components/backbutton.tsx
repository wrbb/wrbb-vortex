import { Flex, IconButton, SxProp, Text } from "theme-ui";
import { theme } from "../theme";
import useBreakpoints from "../hooks/useBreakpoints";

interface BackButtonProps extends SxProp {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, sx }) => {
  const breakpoint = useBreakpoints();
  const isMobile = breakpoint < 1;
  return (
    <Flex
      sx={{
        cursor: "pointer",
        ...(isMobile && {
          borderRadius: "50%",
          ":hover": {
            backgroundColor: "rgba(19, 18, 19, 0.05)",
          },
          ":active": {
            backgroundColor: "rgba(19, 18, 19, 0.1)",
          },
          marginLeft: -1,
        }),
        ...sx,
      }}
      onClick={onClick}
    >
      <IconButton aria-label="back" sx={{ cursor: "pointer" }}>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={`${theme.colors?.text}`}
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          />
          <path
            fill={`${theme.colors?.text}`}
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          />
        </svg>
      </IconButton>
      {!isMobile && (
        <Text
          variant="heading3"
          sx={{ color: theme.colors?.text, paddingRight: 2 }}
        >
          return to search
        </Text>
      )}
    </Flex>
  );
};

export default BackButton;
