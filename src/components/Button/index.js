import { ItemActionButton, ItemActionContent, ItemActionIcon } from "./style";

export function HoverItemButton({
  hoverState,
  IconComponent,
  children,
  ...props
}) {
  const [hover, setHover] = hoverState;
  return (
    <ItemActionButton
      {...props}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      hover={hover}
    >
      <ItemActionContent hover={hover}>{children}</ItemActionContent>
      <ItemActionIcon hover={hover}>
        <IconComponent style={{ marginTop: -7 }} />
      </ItemActionIcon>
    </ItemActionButton>
  );
}
