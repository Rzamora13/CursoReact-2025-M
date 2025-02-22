import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Toaster } from 'sonner';
import { PokemonProvider } from './context/PokemonContext';

function App() {
  return (
    <>
      <PokemonProvider>
        <Toaster position="top-right" duration={1000} />
        <RouterProvider router={router} />
      </PokemonProvider>
    </>
  )
}

export default App
