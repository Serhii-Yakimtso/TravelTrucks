import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const TruckDetailsPage = lazy(() =>
  import('../../pages/TruckDetailsPage/TruckDetailsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const TruckFeaures = lazy(() =>
  import('../../components/TruckFeaures/TruckFeaures')
);
const TruckReviews = lazy(() =>
  import('../../components/TruckReviews/TruckReviews')
);

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<TruckDetailsPage />}>
            <Route path="features" element={<TruckFeaures />} />
            <Route path="reviews" element={<TruckReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
