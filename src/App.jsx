import './App.css'
import IdCard from './IdCard/IdCard.jsx'
import InputForm from './InputForm/InputForm.jsx'
import { useState , useEffect} from 'react'
import PcOnly from './PcOnly/PcOnly.jsx'
import loader from './assets/Loader.gif'

function App() {

  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const ua = navigator.userAgent.toLowerCase();
      const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua);
      const isSmallScreen = window.innerWidth < 1000;

      if (isMobileUA || isSmallScreen) {
        setBlocked(true);
      } else {
        setBlocked(false);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const [formData, setFormData] = useState({
    fname: "",
    rollNo: "",
    dob: "",
    bloodGroup: "",
    department: "B.E.AGRI",
    enrolledYear: "",
    relation: "S/O",
    fatherName: "",
    address: "",
    mobile: "",
    altMobile: "",
    photo: null,
  });
  
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(false);

  if (blocked) {
    return (
      <PcOnly />
    );
  }
  else{
      if (loading) {
        return (
          <div className='spinner-box'>
            <img src={loader} alt="loader" />
            <h1>Loading</h1>
          </div>
        )
      }

      return (
        <div className="App">
          {!showCard ? (
            <InputForm formData={formData} setFormData={setFormData} setShowCard={setShowCard} setLoading={setLoading} />
          ) : (
            <IdCard data={formData} setShowCard={setShowCard} setLoading={setLoading} />
          )}
        </div>
      )
    }
  }

export default App
