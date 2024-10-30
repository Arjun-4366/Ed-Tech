import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
// import Hero from "./components/Hero";
import Login from "./pages/Login";
import Details from "./components/Details";
import { useEffect, useState, lazy,Suspense } from "react";
import Register from "./pages/Register";
import Loading from "./components/Loading";
import SuccessPage from "./components/SuccessPage";
import FailedPage from "./components/FailedPage";
import AdminPanel from "./components/AdminPanel";
const Hero = lazy(() => import("./components/Hero"));
function App() {
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
   const timer =  setTimeout(()=>{
      setLoading(false)
    },1000)
   return ()=>clearTimeout(timer)
  })
  return (
    <div className="p-app md:p-app-md">
    
      <Layout>
        <Routes>
          <Route path="/" element={ <Suspense fallback={<Loading /> }>
                <Hero />
              </Suspense>} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failed" element={<FailedPage />} />
          <Route path="/register" element = {<Register/>}/>
          <Route path="/details/:id" element={<Details loading={loading}/>} />
        </Routes>
      </Layout>
  
  </div>
  );
}

export default App;
