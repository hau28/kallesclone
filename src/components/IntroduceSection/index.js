import { StyledBlackButton } from "../Button/style";
import {
  StyledCollectionText,
  StyledContainer,
  StyledIntroduceSection,
  StyledSeasonText,
} from "./style";

export function IntroduceSection({
  show,
  rightAlign,
  season,
  collection,
  bgUrl,
}) {
  return (
    <StyledIntroduceSection bgUrl={bgUrl} show={show}>
      <StyledContainer show={show} rightAlign={rightAlign}>
        <StyledSeasonText>{season}</StyledSeasonText>
        <StyledCollectionText>{collection}</StyledCollectionText>
        <StyledBlackButton>Explore Now</StyledBlackButton>
      </StyledContainer>
    </StyledIntroduceSection>
  );
}
