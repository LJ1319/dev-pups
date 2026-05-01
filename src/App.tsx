import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { PageWrapper } from "./components/PageWrapper";
import { PuppiesList } from "./components/PuppiesList";
import { Search } from "./components/Search";
import { Shortlist } from "./components/ShortList";

function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
}

function Main() {
  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search />
        <Shortlist />
      </div>
      <PuppiesList />
      <NewPuppyForm />
    </main>
  );
}

export default App;
