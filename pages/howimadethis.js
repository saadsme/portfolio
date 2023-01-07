import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function HowIMadeThis(){
    return(
        <div className='flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16'>
            <NavBar/>
            <div className="text-5xl font-bold justify-center">THIS PAGE IS UNDER CONSTRUCTION. THANK YOU!</div>
            <div className='mt-96'><Footer/></div>
        </div>
        
    )
}