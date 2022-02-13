import TourCard from './components/TourCard';
import {Container,Grid} from "@mui/material";

function App() {
  return (
    <div className="App">
        <Container>
          <Grid container spacing={2}>
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />

          </Grid>
        </Container>
    </div>
  );
}

export default App;
