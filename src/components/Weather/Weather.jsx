import Container from "../Container/Container";
import Header from "../Header/Header";
import InfoToday from "../InfoToday/InfoToday";
import ListDays from "../ListDays/ListDays";
import SearchBox from "../SearchBox/SearchBox";
import SmallTitle from "../SmallTitle/SmallTitle";
import Wrapper from "../Wrapper/Wrapper";

const Weather = () => {
  return (
    <Container>
      <Wrapper>
        <SearchBox />
        <SmallTitle />
        <InfoToday />
        <Header />
        <ListDays />
      </Wrapper>
    </Container>
  );
};

export default Weather;
