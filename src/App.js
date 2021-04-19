import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ImageCover from './components/ImageCover'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import FourthPage from './components/FourthPage'
import FifthPage from './components/FifthPage'
import SixthPage from './components/SixthPage'
import SeventhPage from './components/SeventhPage'
import EighthPage from './components/EighthPage'
import NinethPage from './components/NinethPage'
import TenthPage from './components/TenthPage'



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Switch>
          <Route exact path='/'>
            <ImageCover/>
          </Route>

          <Route path='/second_page'>
            <SecondPage/>
          </Route>

          <Route path='/third_page'>
            <ThirdPage/>
          </Route>

          <Route path='/fourth_page'>
            <FourthPage/>
          </Route>

          <Route path='/fifth_page'>
            <FifthPage/>
          </Route>

          <Route path='/sixth_page'>
            <SixthPage/>
          </Route>

          <Route path='/seventh_page'>
            <SeventhPage/>
          </Route>

          <Route path='/eighth_page'>
            <EighthPage/>
          </Route>

          <Route path='/nineth_page'>
            <NinethPage/>
          </Route>

          <Route path='/tenth_page'>
            <TenthPage/>
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
