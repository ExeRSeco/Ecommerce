import { Toaster } from "sonner";
import { Hero, About, CategoriesMainSection, FormContact} from "../index";

export const Home = () => {


    
    return (
        <main className="main-container">
            <Hero />
            <Toaster />
            <About />
            <CategoriesMainSection />
            <FormContact />
        </main>
    )
}
