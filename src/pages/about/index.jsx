import { lazy, Suspense } from "react";

const LazyAboutUs = lazy(() => import("./AboutUs"));

export const AboutUs = (props) => (
  <Suspense fallback={<>Loading</>}>
    <LazyAboutUs {...props} />
  </Suspense>
);
