import { Container, Divider, Image, Text } from "theme-ui";
import OldLogo from "../assets/oldlogo.svg";
import Search from "../components/search";
import { useNavigate } from "react-router-dom";
import BottomBar from "../components/bottombar";
import { useEffect } from "react";
import useGetShows from "../api/useGetShows";

function Home() {
  const navigate = useNavigate();
  const { data: showsData, loading, error } = useGetShows();

  const handleSelect = (showID: number) => {
    navigate(`/show/${showID}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = showsData
    ? showsData
        .map((show) => {
          return { label: show.name, value: show.id };
        })
        .sort((a, b) => a.label.localeCompare(b.label))
    : [];

  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
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
      <Search
        options={options}
        onChange={handleSelect}
        loading={loading}
        error={error}
      />
      <BottomBar />
    </Container>
  );
}

export default Home;
