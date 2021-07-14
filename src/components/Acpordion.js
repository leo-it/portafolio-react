import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const Acpordion = ({ posts }) => {
  return (
    <div>
      {/*   {posts.map((post) => (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      ))} */}

      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Sobre Mi
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Soy una persona responsable y comprometida, disfruto del trabajo en
            equipo y me apasiona la tecnologia. Desarrollo de APIs con NodeJS,
            MySQL Firebase y MongoDB. Tengo experiencia de trabajo en equipo con
            Git, bitbucket, Jira, Trello y Slack. Se maquetar con HTML, CSS,
            Bootstrap, Chakra y MaterialUI. Estoy aprendiendo POO con JAVA y
            TypeScript. Tengo un manejo del Ingles A1.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Hard Skills
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>React Js y NodeJS</ListItem>
              <ListItem>SQL, MongoDB y Firebase</ListItem>
              <ListItem>HTML/CSS/Chakra UI/Material UI</ListItem>
              <ListItem>Git/Jira/Bitbucket/Slack</ListItem>{" "}
              <ListItem>Java y TypeScript Basico</ListItem>{" "}
              <ListItem>Ingles A1</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Hablilidades blandas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>
                Consectetur adipisciFacilisis in pretium nisadasdasdassl
                aliquetFacilisis ng elit
              </ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Acpordion;
