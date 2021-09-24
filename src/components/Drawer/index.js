import { Drawer } from "@mui/material";
import { DrawerContainer, DrawerHeaderContainer } from "./style";
import { IconButton } from "../Button/style";
import { GrClose } from "react-icons/gr";

export default function AppDrawer({ open, onClose, title, children }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <DrawerContainer>
        <DrawerHeaderContainer>
          <h6>{title}</h6>
          <IconButton fontSize="1.1rem" rotate onClick={onClose}>
            <GrClose />
          </IconButton>
        </DrawerHeaderContainer>
        {children}
      </DrawerContainer>
    </Drawer>
  );
}
