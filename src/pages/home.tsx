import { Box, Container, Divider, Flex, Image, Text } from "theme-ui";
import OldLogo from "../assets/oldlogo.svg";
import Search from "../components/search";
import shows from "../data/shows.json";
import { useNavigate } from "react-router-dom";
import BottomBar from "../components/bottombar";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  const handleSelect = (showID: number) => {
    navigate(`/show/${showID}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = shows
    .map((show) => {
      return { label: show.name, value: show.id };
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Container sx={{ height: "100vh" }}>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            pt: 80,
          }}
        >
          <Image src={OldLogo} height={180} width={180} />
          <Divider sx={{ height: 8 }} />
          <Text variant="heading1">vortex</Text>
          <Divider sx={{ height: 4 }} />
          <Search options={options} onChange={handleSelect} />
        </Flex>
      </Container>
      <BottomBar />
    </Box>
  );
}

export default Home;
