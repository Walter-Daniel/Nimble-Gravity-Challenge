import { useState } from 'react';
import { ENV } from '../config/env';

interface JobInterface {
  id: string;
  title: string;
}

type NotificationState = {
  message: string;
  type: 'success' | 'error';
} | null;

export const Form = ({ id, title }: JobInterface) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [notification, setNotification] = useState<NotificationState>(null);

  async function handleSubmit(formData: FormData) {
    setNotification(null);
    try {
      const jobId = formData.get('jobId') as string;
      const jobTitle = formData.get('title') as string;
      const candidateRepository = formData.get('repository') as string;

      const body = {
        jobId: jobId,
        title: jobTitle,
        repoUrl: candidateRepository,
        applicationId: ENV.APP_ID,
        candidateId: ENV.CANDIDATE_ID,
        uuid: ENV.UUID,
      };

      const response = await fetch(
        `${ENV.BASE_URL}/api/candidate/apply-to-job`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        },
      );

      if (response.ok) {
        setNotification({
          message: `Te postulaste a "${jobTitle}" correctamente.`,
          type: 'success',
        });
        setRepoUrl('');
      } else {
        setNotification({
          message: 'No se pudo enviar la postulación. Intenta nuevamente.',
          type: 'error',
        });
      }
    } catch {
      setNotification({
        message: 'No se pudo conectar con el servidor. Revisá tu conexión.',
        type: 'error',
      });
    }

    setTimeout(() => setNotification(null), 4000);
  }
  return (
    <form className='apply-form' action={handleSubmit}>
      <input type='hidden' name='jobId' value={id} readOnly />
      <input
        className='input-readonly'
        type='text'
        value={title}
        name='title'
        readOnly
      />
      <section className='form-group'>
        <label className='form-label' htmlFor='repository'>
          URL del repositorio
        </label>
        <input
          className='form-input'
          type='text'
          id='repository'
          name='repository'
          placeholder='https://github.com/usuario/repositorio'
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
        />
      </section>
      <button
        className='btn-submit'
        type='submit'
        disabled={repoUrl.trim() === ''}
      >
        Postularme
      </button>
      {notification && (
        <p
          className={`form-notification form-notification--${notification.type}`}
        >
          {notification.message}
        </p>
      )}
    </form>
  );
};
