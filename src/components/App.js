import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
import CryptoDashboard from "./CryptoDashboard";
import ScrollSpy from "./ScrollSpy";


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
    </div>
  );
}

export default App;
