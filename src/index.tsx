import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import LoadingScreen from './Common/LoadingScreen/LoadingScreen';

//Lazy load w/ artificial time added
const AppLazy = React.lazy(() => {
  return Promise.all([
    import("./App"),
    new Promise(resolve => setTimeout(resolve, 1500))
  ])
  .then(([moduleExports]) => moduleExports);
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Suspense fallback={<LoadingScreen/>}>
      <AppLazy/>
    </Suspense>
  // </React.StrictMode> 
);

