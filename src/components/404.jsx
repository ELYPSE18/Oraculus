import { Link } from "react-router-dom"
import '../styles/404.css'



function Page404() {
    return (
        <>
     
            <section id="notFound">
                <h1> 404 </h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retour àla page d'accueil</Link>
            </section>
        
        </>
    )
}

export default Page404