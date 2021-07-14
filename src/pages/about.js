import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import { Text, SimpleGrid, Box, Center, Image, Button } from "@chakra-ui/react";
import Acordion from "../components/Acpordion";
import styles from '../styles/Home.module.css'

export default function About({posts}) {
  return (
    <div className={styles.container}>
      <Navbar />
      <br />
      <br />
      <SimpleGrid minChildWidth="330px" spacing="40px" gap={4}>
        <Box className={styles.form}>
          <Center>
            <Text fontSize="5xl" mb={5}> Sobre Mi </Text>{" "}
          </Center>{" "}
            <Acordion posts={posts}/>
          <Link to={`/contact`}>
            <Button>Contacto</Button>
          </Link>{" "}
          <Link to={`/projects`}>
            <Button>Proyectos</Button>
          </Link>
        </Box>
        <Box><br/></Box>
      </SimpleGrid>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}