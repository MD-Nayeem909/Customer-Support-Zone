import "./App.css";
import Footer from "./Component/Footer";
import Progress from "./Component/Progress";
import Navbar from "./Component/Navbar";
import Customer from "./Component/Customer";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import Container from "./Component/Container";

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar></Navbar>
      <Progress resolved={resolved} inProgress={inProgress}></Progress>
      <Container classPro="flex justify-center items-center min-h-[50vh]">
      <Suspense
        fallback={<span className="loading loading-infinity w-20 opacity-30"></span>}
      >
        <Customer
          fetchPromise={fetchPromise}
          setInProgress={setInProgress}
          setResolved={setResolved}
        ></Customer>
      </Suspense>
      </Container>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
