import { Flex, Spinner, Text, Image } from "theme-ui";
import { Show } from "../types/show";
import { theme } from "../theme";

interface ShowDataProps {
  data: Show | undefined;
  loading: boolean;
  error: boolean;
}

const ShowInfo: React.FC<ShowDataProps> = ({ data, loading, error }) => {
  if (loading || !data) {
    return (
      <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
        <Spinner />
      </Flex>
    );
  }

  if (error) {
    return <Text>error</Text>;
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
