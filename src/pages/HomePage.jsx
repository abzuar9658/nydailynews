import Directory from '../components/directory/directory.component';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component'
import Sections from '../components/sections/sections.component';

const HomePage = ()=>{
    return(
        <div>
            <Sections/>
            <Header/>
            <Directory/>
            <Footer/>
        </div>
    )
}
export default HomePage