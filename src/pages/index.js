import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Text, SimpleGrid, Box, Center, Button } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.index}>
      <Navbar />
      <SimpleGrid minChildWidth="330px" spacing="40px" gap={4}>
        <Box>
          <div className="col-md-8 p-2">
            <div>
              <Center>
                <Text className={styles.text1Home} >
                 
                  <br />
                  Hola soy Leonardo
                </Text>{" "}
              </Center>{" "}
              <Center>
                {" "}
                <Text className={styles.text2Home} > Desarrollador Fullstack</Text>{" "}
              </Center>{" "}
              <Center>
                {" "}


                <Link to={`/about`}>
                  <Button>Leer Más</Button>
                </Link>
              </Center>{" "}
            </div>
          </div>
        </Box>
        <br />

        {/* <ImageProfile /> */}
      </SimpleGrid>
    </div>
  );
}
