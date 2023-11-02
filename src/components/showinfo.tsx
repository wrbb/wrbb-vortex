import { Flex, Spinner, Text, Image } from "theme-ui";
import { Show } from "../types/show";
import { theme } from "../theme";

interface ShowDataProps {
  data: Show;
  loading: boolean;
  error: boolean;
  fallbackTitle: string;
}

const ShowInfo: React.FC<ShowDataProps> = ({
  data,
  loading,
  error,
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

  if (error) {
    return (
      <Flex
        sx={{
          px: 3,
          py: 3,
          borderBottom: `2px solid ${theme.colors?.primary}`,
        }}
      >
        <Text variant="heading1">Recordings for {fallbackTitle}</Text>
      </Flex>
    );
  }

  return (
    <Flex
      sx={{
        flexDirection: ["column", "row"],
        borderBottom: `2px solid ${theme.colors?.primary}`,
        gap: 3,
        py: 4,
        px: 3,
        alignItems: "center",
      }}
    >
      <Image
        src={data.image}
        height={180}
        width={180}
        sx={{ border: `1px solid ${theme.colors?.primary}` }}
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
};

export default ShowInfo;
