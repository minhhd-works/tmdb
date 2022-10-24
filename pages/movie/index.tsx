import { NextPage } from 'next';
import { Navigation } from '../../components/Navigation';
import { DefaultLayout } from '../../layouts';

const Movies: NextPage = () => {
  return (
      <DefaultLayout>
        <Navigation/>
      </DefaultLayout>
  );
};

export default Movies;
