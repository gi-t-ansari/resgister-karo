import { lazy, Suspense } from "react";
import { CircularProgress } from "../../components";

const LazyAboutUs = lazy(() => import("./AboutUs"));

export const AboutUs = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyAboutUs {...props} />
  </Suspense>
);
