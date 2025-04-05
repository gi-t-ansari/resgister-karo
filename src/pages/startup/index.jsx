import { lazy, Suspense } from "react";
import { CircularProgress } from "../../components";

const LazyStartup = lazy(() => import("./Startup"));

export const Startup = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyStartup {...props} />
  </Suspense>
);
