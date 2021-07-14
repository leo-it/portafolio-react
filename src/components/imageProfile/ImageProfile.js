import React from "react";
import { Box, Center, Image } from "@chakra-ui/react";
const ImageProfile = () => {
  return (
    <Box mt={2}>
      {" "}
      <Center>
        {" "}
        <Image
          boxSize="550px"
          src="https://avatars.githubusercontent.com/u/67551770?v=4"
          alt="Programador"
        />
      </Center>{" "}
    </Box>
  );
};

export default ImageProfile;
