import { Flex, Text } from "theme-ui";
import { Recording } from "../types/recording";
import { theme } from "../theme";

interface RecordingProps {
  data: Recording;
}

const Recording: React.FC<RecordingProps> = ({ data }) => {
  return (
    <Flex sx={{ borderBottom: `1px solid ${theme.colors?.primary}`, py: 2 }}>
      <Text variant="heading2">{data.start.toLocaleDateString()}</Text>
    </Flex>
  );
};

export default Recording;
