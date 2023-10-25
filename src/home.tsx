import { Container, Divider, Flex, Image, Text } from "theme-ui";
import OldLogo from "./assets/oldlogo.svg";
import Search from "./components/search";
import { useState } from "react";

function Home() {
  const [selectedShowID, setSelectedShowID] = useState<number>();

  const options = [
    { label: "Bug Juice", value: 1 },
    { label: "Jug Buice", value: 2 },
    { label: "Space man", value: 3 },
  ];

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
        <Text variant="heading1">wrbb vortex</Text>
        <Divider sx={{ height: 4 }} />
        <Search options={options} onChange={setSelectedShowID} />
      </Flex>
    </Container>
  );
}

export default Home;
