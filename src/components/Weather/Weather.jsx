import Container from "../Container/Container";
import Header from "../Header/Header";
import InfoToday from "../InfoToday/InfoToday";
import ListDays from "../ListDays/ListDays";
import SmallTitle from "../SmallTitle/SmallTitle";
import Wrapper from "../Wrapper/Wrapper";

const Weather = () => {
  return (
    <Container>
      <Wrapper>
        <SmallTitle />
        <InfoToday />
        <Header />
        <ListDays />
      </Wrapper>
    </Container>
  );
};

export default Weather;
