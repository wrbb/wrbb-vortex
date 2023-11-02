import { Container, Divider, Flex, Image, Text } from "theme-ui";
import OldLogo from "../assets/oldlogo.svg";
import Search from "../components/search";
import shows from "../data/shows.json";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleSelect = (showID: number) => {
    navigate(`/show/${showID}`);
  };

  const options = shows.map((show) => {
    return { label: show.name, value: show.id };
  });

  return (
    <Container sx={{ height: "100vh" }}>
      <Flex
        sx={{
          height: "100%",
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
  );
}

export default Home;
