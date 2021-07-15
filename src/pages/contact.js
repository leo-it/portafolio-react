import Navbar from "../components/Navbar";
import { Text, SimpleGrid, Box, Center, Image, Button } from "@chakra-ui/react";
import ImageProfile from "../components/imageProfile/ImageProfile";
import FormContact from "../components/formContact/FormContact";
import styles from '../styles/Home.module.css'
import ContactAcordion from "../components/ContactAcpordion";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Navbar />
      <br />
      <br />
      <SimpleGrid minChildWidth="350px" spacing="40px" gap={4}>
        <Box>
          <Center>
            <Text fontSize="5xl"> </Text>{" "}
          </Center>{" "}
          
          <Box className={styles.form} boxShadow="2xl" p="6" rounded="md" bg="white" height="445px" >
            
            <ContactAcordion />
          </Box>{" "}
        </Box>
      <br />
      </SimpleGrid>{" "}
    </div>
  );
}
