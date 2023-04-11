import { lazy, Suspense } from "react";

export function lazyLoadRoutes(path= "pages", name) {
  const pageName = name.charAt(0).toUpperCase() + name.slice(1);
  const LazyPages = lazy(() => import(`../${path}/${pageName}`));

  return (
    <Suspense fallback={<h1>Loader...</h1>}>
      <LazyPages />
    </Suspense>
  );
}
