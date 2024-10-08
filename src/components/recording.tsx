import { Flex, Text } from "theme-ui";
import type { Recording } from "../types/Recording";
import { theme } from "../theme";
import moment from "moment";
import CopyButton from "./copybutton";
import PlayButton from "./playbutton";

interface RecordingProps {
  data: Recording;
}

const Recording: React.FC<RecordingProps> = ({ data }) => {
  const formattedDate = moment(data.start).format("MMMM D, Y");

  return (
    <Flex
      sx={{
        borderBottom: `1px solid ${theme.colors?.primary}`,
        py: 2,
        px: [24, 3],
        justifyContent: "space-between",
        height: 96,
      }}
    >
      <Text variant="heading2" sx={{ alignSelf: "flex-start" }}>
        {formattedDate}
      </Text>
      <Flex sx={{ alignSelf: "flex-end", gap: 1 }}>
        <CopyButton url={data.url} />
        <PlayButton url={data.url} />
      </Flex>
    </Flex>
  );
};

export default Recording;
