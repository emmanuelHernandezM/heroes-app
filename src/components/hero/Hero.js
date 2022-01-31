import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

// Obtener imagenes directo de src
// const heroImages = require.context('../../assets/', true);
import { heroImages } from "../../helpers/heroImages";

export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate =  useNavigate();

    const hero = useMemo( () => getHeroById(heroeId), [heroeId] ); 

    const handleReturn = () =>{
        navigate(-1);
    }

    if(!hero) {
        return <Navigate to="/" />
    }

    const {
        id, 
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    // Se utiliza este path cuando los assets esta en /public
    // const imagePath = `/assets/${ id }.jpg`;

    return (
        <div>
            <div className="row mt-5">
                <div className="col-4">
                    <img 
                        // src= { imagePath }
                        src={ heroImages(`./${id}.jpg`) }
                        alt={ superhero }
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>

                <div className="col-8 animate__animated animate__fadeIn">
                    <h3>{ superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong>Alter ego:</strong> { alter_ego }
                        </li>
                        <li className="list-group-item">
                            <strong>Publisher:</strong> { publisher }
                        </li>
                        <li className="list-group-item">
                            <strong>First Appearance:</strong> { first_appearance }
                        </li>
                    </ul>

                    <h5 className="mt-3">
                        Characters
                    </h5>
                    <p>{characters}</p>

                    <button  
                        className="btn btn-outline-info"
                        onClick={ handleReturn }
                    >
                        Regresar
                    </button>

                </div>  
            </div>
        </div>
    );
};