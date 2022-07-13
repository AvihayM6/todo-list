import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AddTodo from './components/AddTodo'
import SearchTodo from './components/SearchTodo'
import './App.css'


function App() {
  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} >
              <Route path='/AddTodo' element={<AddTodo />} />
              <Route path='/SearchTodo' element={<SearchTodo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
