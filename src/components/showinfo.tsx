import { Flex, Spinner, Text, Image } from "theme-ui";
import { Show } from "../types/Show";
import { theme } from "../theme";

interface ShowDataProps {
  data: Show | undefined;
  loading: boolean;
  fallbackTitle: string | undefined;
}

const ShowInfo: React.FC<ShowDataProps> = ({
  data,
  loading,
  fallbackTitle,
}) => {
  if (loading) {
    return (
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: 246,
          borderBottom: `2px solid ${theme.colors?.primary}`,
        }}
      >
        <Spinner />
      </Flex>
    );
  }

  if (data) {
    return (
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          borderBottom: `2px solid ${theme.colors?.primary}`,
          gap: 3,
          py: [16, 4],
          px: [24, 3],
          alignItems: "center",
        }}
      >
        <Image
          src={data.image}
          height={180}
          width={180}
          sx={{
            border: `1px solid ${theme.colors?.primary}`,
            minHeight: 180,
            minWidth: 180,
          }}
        />
        <Flex
          sx={{
            flexDirection: "column",
            maxWidth: 500,
            gap: 2,
            textAlign: ["left"],
          }}
        >
          <Text variant="heading1">{data.title}</Text>
          <Text>{data.description}</Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      sx={{
        px: [24, 3],
        py: 4,
        borderBottom: `2px solid ${theme.colors?.primary}`,
        flexDirection: "column",
      }}
    >
      <Text variant="heading3">recordings archive for </Text>
      <Text variant="heading1">{fallbackTitle}</Text>
    </Flex>
  );
};

export default ShowInfo;
