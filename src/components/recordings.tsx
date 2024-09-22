import { Box, Flex, Spinner, Text } from "theme-ui";
import RecordingComponent from "./recording";
import { Recording } from "../types/Recording";

interface RecordingsProps {
  data: Recording[];
  loading: boolean;
  error: boolean;
}

const Recordings: React.FC<RecordingsProps> = ({ data, loading, error }) => {
  if (loading || error || data.length == 0) {
    return (
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 286px)",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {loading ? (
          <Spinner />
        ) : error ? (
          <Text variant="heading2">could not load recordings.</Text>
        ) : (
          <Text variant="heading2">no recordings found.</Text>
        )}
      </Flex>
    );
  }

  return (
    <Box sx={{ paddingBottom: 5 }}>
      {data.map((rec) => (
        <RecordingComponent data={rec} key={rec.id} />
      ))}
    </Box>
  );
};

export default Recordings;
