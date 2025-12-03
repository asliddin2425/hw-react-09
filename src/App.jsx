import './App.css'
import { Header } from './components/Courses/header/header'
import { Navbar } from './components/Courses/navbar/Navbar'
import { PageTitle } from './components/Courses/PageTitle/PageTitle'
import { Filter } from './components/Courses/Filter/Filter'
import { Card } from './components/Courses/Card/Card'
import { Banner} from './components/Courses/Banner/Banner'
import { Footer } from './components/Courses/footer/footer'

export  function App() { 
    return (
      <>

            <Header />
            <Navbar />
            <PageTitle />
            <Filter/>
            <Card />
            <Banner/>
            <Footer/>
        </>
    )
}