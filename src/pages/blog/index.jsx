import { lazy, Suspense } from "react";
import { CircularProgress } from "../../components";

const LazyBlog = lazy(() => import("./Blog"));

export const Blog = (props) => (
  <Suspense fallback={<CircularProgress />}>
    <LazyBlog {...props} />
  </Suspense>
);
