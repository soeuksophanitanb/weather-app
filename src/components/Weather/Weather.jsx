import Container from "../Container/Container";
import Details from "../Details/Details";
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
        <Details />
        <Header />
        <ListDays />
      </Wrapper>
    </Container>
  );
};

export default Weather;
