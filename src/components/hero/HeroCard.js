import { Link } from "react-router-dom";

// Obtener imagenes directo de src
// const heroImages = require.context('../../assets/', true);
import { heroImages } from "../../helpers/heroImages";

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    // Se utiliza este path cuando los assets esta en /public
    // const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img 
                        // src={ imagePath } 
                        src={ heroImages(`./${id}.jpg`) } 
                        className="card-img"
                        alt={ superhero } />
                </div>

                <div className="col-8">

                    <div className="card-body">

                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>

                        {
                            (alter_ego !== characters) &&
                                <p className="text-muted">{ characters }</p>
                        }

                        <p className="card-text">
                            <span className="text-muted">{ first_appearance }</span>
                        </p>

                        <Link to={ `/hero/${id}` }>
                            Más...
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};