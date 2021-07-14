import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  List,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { HamburgerIcon, BellIcon } from "@chakra-ui/icons";
import styles from '../styles/Home.module.css'

export default function Navbar() {
  const [notify, setNotify] = useState(true);
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuItems = [
    {
      title: "Inicio",
      /*  icon: <MailIcon />, */
      route: "",
    },
    {
      title: "Sobre Mi",
      /*   icon: <MailIcon />, */
      route: "about",
    },

    {
      title: "Proyectos",
      /*     icon: <MailIcon />, */
      route: "projects",
    },
    {
      title: "Contacto",
      /*     icon: <MailIcon />, */
      route: "contact",
    },
  ];

  const handleClick = () => {
    setNotify(false);
  };

  return (
    < >
      <Button opacity="0.5"	 ref={btnRef} onClick={onOpen}>
        <HamburgerIcon boxSize={8} />
      </Button>

      {/* popover */}
      <Popover>
        <PopoverTrigger>
          <Button opacity="0.7" onClick={handleClick}>
            {" "}
            <BellIcon boxSize={8} />{" "}
            {notify ? (
              <FavoriteIcon color="secondary" fontSize="small" />
            ) : (
              <></>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Hola!</PopoverHeader>
          <PopoverBody>
            Haz click en el boton de la izquierda para ver el menu.
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {/*  */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <List>
              {menuItems.map((item, index) => (
                <ListItem m={5} button key={item.title}>
                  <Link to={`/${item.route}`}>
                    {item.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

