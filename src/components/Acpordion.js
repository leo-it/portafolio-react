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
            equipo y me apasiona la tecnologia.<br/> Desarrollo de APIs con NodeJS,
            MySQL Firebase y MongoDB.<br/> Tengo experiencia de trabajo en equipo con
            Git, bitbucket, Jira, Trello y Slack.<br/> Se maquetar con HTML, CSS,
            Bootstrap,<br/> Chakra y MaterialUI.<br/> Estoy aprendiendo POO con JAVA y
            TypeScript.<br/> Tengo un manejo del Ingles A1.
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
              <ListItem>Trabajo en equipo</ListItem>
              <ListItem>
                Buena comunicación
              </ListItem>
              <ListItem>Responsable</ListItem>
              <ListItem>Capacidad de adaptación</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Acpordion;
