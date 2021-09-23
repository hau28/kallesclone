import { Drawer } from "@mui/material";
import { DrawerContainer, DrawerContent, DrawerHeaderContainer } from "./style";
import { IconButton } from "../Button/style";
import { GrClose } from "react-icons/gr";

export default function AppDrawer({ open, setOpen, title, children }) {
  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <DrawerContainer>
        <DrawerHeaderContainer>
          <h6>{title}</h6>
          <IconButton fontSize="1.1rem" rotate onClick={() => setOpen(false)}>
            <GrClose />
          </IconButton>
        </DrawerHeaderContainer>
        {children}
      </DrawerContainer>
    </Drawer>
  );
}
