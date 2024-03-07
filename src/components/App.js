import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
import CryptoDashboard from "./CryptoDashboard";
import ScrollSpy from "./ScrollSpy";
import Perfomance from "./Perfomance";
import Sentiment from "./Sentiment";
import About from "./About";
import Team from "./Team";


function App() {
  const breadcrumbItems = [
    { label: 'Cryptocurrencies', link: '/cryptocurrencies' },
    { label: 'Bitcoin', link: '/cryptocurrencies/bitcoin' },
  ];

  return (
    <div className="App">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      <CryptoDashboard />
      <ScrollSpy />
      <Perfomance />
      <Sentiment />
      <About />
      <Team />
    </div>
  );
}

export default App;
