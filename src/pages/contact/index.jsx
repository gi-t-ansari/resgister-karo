import { lazy, Suspense } from "react";
import { CircularProgress } from "../../components";

const LazyContactUs = lazy(() => import("./ContactUs"));

export const ContactUs = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyContactUs {...props} />
  </Suspense>
);
