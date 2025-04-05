import { lazy, Suspense } from "react";

const LazyBlog = lazy(() => import("./Blog"));

export const Blog = (props) => (
  <Suspense fallback={<>Loading</>}>
    <LazyBlog {...props} />
  </Suspense>
);
