import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
import CryptoDashboard from "./CryptoDashboard";
import TradingViewWidget from "./TradingViewWidget";


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
    </div>
  );
}

export default App;
