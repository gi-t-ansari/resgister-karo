import { lazy, Suspense } from "react";

const LazyContactUs = lazy(() => import("./ContactUs"));

export const ContactUs = (props) => (
  <Suspense fallback={<>Loading</>}>
    <LazyContactUs {...props} />
  </Suspense>
);
