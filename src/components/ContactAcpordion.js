import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import BuildIcon from '@material-ui/icons/Build';
const Acpordion = ({ posts }) => {
  return (
    <div>
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Contacto
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {/* aca va el contacto */}

           
       {/*      <a
              Target="_blank"
              href="https://www.linkedin.com/in/leonardo-sainz/"
            >
              {" "}
              <LinkedInIcon />
            </a>

            <a Target="_blank" href="https://github.com/leo-it">
              {" "}
              <GitHubIcon />
            </a>

            <a
              Target="_blank"
              href="https://www.youtube.com/channel/UCiwM0VjMs12WceWJjabaSAw"
            >
              {" "}
              <YouTubeIcon />{" "}
            </a>
           
              <a href="mailto:lsainzveron@gmail.com">
                <MailOutlineIcon /> lsainzveron@gmail.com
              </a>
             */}
              <Text>
              
              <a href="mailto:lsainzveron@gmail.com"><MailOutlineIcon /> lsainzveron@gmail.com</a>
            </Text>
            <Text>
             <a Target="_blank" href="https://www.linkedin.com/in/leonardo-sainz/"> <LinkedInIcon  /> /leonardo-sainz/</a>
            </Text>
            <Text>
             <a Target="_blank" href="https://github.com/leo-it"> <GitHubIcon  /> /leo-it</a>
            </Text>
            <Text>
             <a Target="_blank" href="https://www.youtube.com/channel/UCiwM0VjMs12WceWJjabaSAw"> <YouTubeIcon  /> /leo-sainz</a>
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton >
              <Box flex="1" textAlign="left">
                Enviame un mensaje{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize="2xl"> En proceso <BuildIcon/> </Text> 
          {/*   <FormContact /> */}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Acpordion;
