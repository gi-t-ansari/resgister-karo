import { lazy, Suspense } from "react";

const LazyStartup = lazy(() => import("./Startup"));

export const Startup = (props) => (
  <Suspense fallback={<>Loading</>}>
    <LazyStartup {...props} />
  </Suspense>
);
