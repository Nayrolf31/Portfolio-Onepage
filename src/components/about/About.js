import React from 'react';
import '../../styles/About.css'
import image from '../../images/photo_profil.webp'
import imageparcour from '../../images/pacour.webp'

function About() {

    return (
        <div className='presentation_contain'>
            <div className='presentation right' >
                <div className='presentation_card left'>
                    <h1>Qui suis-je?</h1>
                    <p >
                        Je m'appelle Florian Maugan et j'ai actuellement 27ans, je suis actuellement en reconversion professionnel grace à le formation
                        Devloppeur Web de OpenClassrooms, après quelques années dans le monde du Tatouage, je suis revenue à ma première passion,
                        l'informatique. Après recherches et discutions avec mes contacts, je me suis pris d'intêret pour le développement web, plus particulièrement Front-end.
                    </p>
                </div>
                <div>
                    <img src={image} alt='photo-profil'></img>
                </div>
            </div>
            <div className='presentation left row-reverse'>
                <div className='presentation_card left'>
                    <h1>Mon pacours</h1>
                    <p>
                        Après mon Bac Électrotechnique, Energie, Equipements communicants (ELEEC) je me suis plongé dans le monde du tatouage durant 5ans, par la suite, j'ai eu quelques expériences professionnelles dont une en tant que vendeur conseil,
                        à la suite de cette expérience je me suis lancer dans une reconversion pour devenir Développeur-Web front-end.
                    </p>
                </div>
                <div>
                    <img src={imageparcour} alt='photo-parcour'></img>
                </div>
            </div>
        </div>
    )
}


export default About