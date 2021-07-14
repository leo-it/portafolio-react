import Navbar from "../components/Navbar";
import Carrousel from "../components/Carrousel";
import styles from '../styles/Home.module.css'

import { Center, Text, SimpleGrid, Box} from "@chakra-ui/react";
export default function Projects() {
  return (
    <div className={styles.container}>
      <Navbar />

      <SimpleGrid  minChildWidth="350px" spacing="40px" gap={4}>
       
        <Box >
          <br/>  <br/>
          {" "}
          <Center>
            {" "}
            <Text fontSize="4xl"> Proyectos</Text>{" "}
                
          </Center>{" "}
          <Center>
            <Carrousel />
          </Center>{" "}
          <Center> </Center>{" "}
        </Box>
        <Box><br/></Box>
      </SimpleGrid>
    </div>
  );
}
