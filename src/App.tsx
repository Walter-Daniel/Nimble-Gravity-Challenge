import { useEffect } from 'react';
import './App.css';
import { CandidatesList } from './components';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/candidate/get-by-email?email=walterdcarrizo.19@gmail.com`,
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <main>
        <h1 className='candidates-title'>Lista de Candidatos</h1>
        <CandidatesList />
      </main>
    </div>
  );
};

export default App;
