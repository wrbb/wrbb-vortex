import { Box, Flex, Spinner, Text } from "theme-ui";
import RecordingComponent from "./recording";
import { Recording } from "../types/recording";

interface RecordingsProps {
  data: Recording[];
  loading: boolean;
  error: boolean;
}

const Recordings: React.FC<RecordingsProps> = ({ data, loading, error }) => {
  if (loading) {
    return (
      <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
        <Spinner />
      </Flex>
    );
  }

  if (error) {
    return <Text>error</Text>;
  }

  return (
    <Box>
      {data.length == 0 ? (
        <Text>no recordings found</Text>
      ) : (
        data.map((rec) => <RecordingComponent data={rec} key={rec.id} />)
      )}
    </Box>
  );
};

export default Recordings;
