import { useEffect, useState } from 'react';
import { Form } from './Form';

interface JobInterface {
  id: string;
  title: string;
}

export const CandidatesList = () => {
  const [data, setData] = useState<JobInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/jobs/get-list`,
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError('No se pudo cargar la lista de candidatos.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className='candidates-list'>
      {data.map((item) => (
        <div key={item.id} className='job-card'>
          <p className='job-name'>{item.title}</p>
          <Form id={item.id} title={item.title} />
        </div>
      ))}
    </div>
  );
};
