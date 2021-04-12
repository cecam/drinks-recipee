import Header from './components/Header'
import Form from './components/Form'
import RecipeeList from './components/RecipeeList'

import CategoryProvider from './context/CategoriasContext'
import RecipeeProvider from './context/RecipeeContext'
import ModalProvider from './context/ModalContext'

function App() {
  return (
    <CategoryProvider>
      <RecipeeProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipeeList />
          </div>
        </ModalProvider>
      </RecipeeProvider>
    </CategoryProvider>
  );
}

export default App;
