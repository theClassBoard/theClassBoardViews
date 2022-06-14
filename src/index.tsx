import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import LoadingScreen from './Common/LoadingScreen/LoadingScreen';

//Lazy load
const AppLazy = React.lazy(() => import('./App'))

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

