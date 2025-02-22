import { FavoritesProvider } from './context/FavoritesContext'
import { LanguageProvider } from './context/LanguageContext'
import { ReviewsProvider } from './context/ReviewsContext'
import { ToastProvider } from './context/ToastContext'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
      <LanguageProvider>
        <ToastProvider>
          <ReviewsProvider>
            <FavoritesProvider>
              <RouterProvider router={router} />
            </FavoritesProvider>
          </ReviewsProvider>
        </ToastProvider>
      </LanguageProvider>
    </>
  )
}

export default App
