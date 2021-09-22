import {
  SectionTitleContainer,
  SectionTitleText,
  Mask,
  SectionDescText,
} from "./style";

export function SectionTitle({ title, desc }) {
  return (
    <SectionTitleContainer>
      <SectionTitleText>
        <Mask>{title}</Mask>
      </SectionTitleText>
      <SectionDescText>{desc}</SectionDescText>
    </SectionTitleContainer>
  );
}
