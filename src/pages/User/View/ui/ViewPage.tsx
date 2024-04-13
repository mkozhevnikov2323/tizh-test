import { useParams } from 'react-router-dom';

export const ViewPage = () => {
  const { id } = useParams();

  return (
    <div
      className=""
      style={{ backgroundColor: 'red' }}
    >
      {id}
    </div>
  );
};
