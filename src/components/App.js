import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";


function App() {
  const breadcrumbItems = [
    { label: 'Cryptocurrencies', link: '/cryptocurrencies' },
    { label: 'Bitcoin', link: '/cryptocurrencies/bitcoin' },
  ];
  
  return (
    <div className="App">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}

export default App;
