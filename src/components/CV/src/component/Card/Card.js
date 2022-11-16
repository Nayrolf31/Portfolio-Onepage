import { FaStar, FaRegStar } from 'react-icons/fa';

const Card = () => {
    return (
        <div className='page_cv'>
            <div className='header_cv'>
                <div className="header">
                    <div className="header_name">
                        <p>Maugan<br />Florian</p>
                    </div>
                    <h1 className='header_title'>Développeur-Web Front-end</h1>
                    <div className='header_infos'>
                        <p>06.69.91.02.73 | florian.maugan@gmail.com </p>
                        <p>2 rue de l'Ousseau - Plaisance Du Touch</p>
                    </div>
                </div>
            </div>
            <div className='Card_container'>
                <div className='Card' id='Compétences'>
                    <h1 className='Card_title'>Compétences</h1>
                    <div className='Card_Description'>
                        <ul>
                            <li>Utilisation de logiciels de traitement de texte</li>
                            <li>Logiciels graphiques (Procreate)</li>
                            <li>Compétences en maintenance informatique</li>
                            <li>Utilisation d'éditeur de code (Vscode)</li>
                        </ul>
                    </div>
                </div>
                <div className='Card' id='Skills'>
                    <h1 className='Card_title'>Skills</h1>
                    <div className='Card_Description'>
                        <ul>
                            <li>HTML
                                <div className='Rating'>
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaRegStar className="icon-reviews" />
                                </div>
                            </li>
                            <li>CSS
                                <div className='Rating'>
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaRegStar className="icon-reviews" />
                                </div>
                            </li>
                            <li>Javascript
                                <div className='Rating'>
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaRegStar className="icon-reviews" />
                                    <FaRegStar className="icon-reviews" />
                                </div>
                            </li>
                            <li>React
                                <div className='Rating'>
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaRegStar className="icon-reviews" />
                                    <FaRegStar className="icon-reviews" />
                                </div>
                            </li>
                            <li>Nodejs
                                <div className='Rating'>
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaRegStar className="icon-reviews" />
                                    <FaRegStar className="icon-reviews" />
                                </div>
                            </li>
                            <li>Procreate
                                <div className='Rating'>
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaStar className="icon-reviews" />
                                    <FaRegStar className="icon-reviews" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='Card' id='Expériences professionnelles'>
                    <h1 className='Card_title'>Expériences professionnelles</h1>
                    <div className='Card_Description'>
                        <ul>
                            <li>2020 - Vendeur conseil</li>
                            <li>2015/2020 - Tatoueur</li>
                            <li>2013/2015 - Électricien industriel (stage)</li>
                            <li>2013 - Dépanneur en électricité et mécanique sur avions (stage)</li>
                            <li>2012 - Électricien domestique (stage)</li>
                        </ul>
                    </div>
                </div>
                <div className='Card' id='Formations'>
                    <h1 className='Card_title'>Formations</h1>
                    <div className='Card_Description'>
                        <lu>
                            <li>2022 – Formation Développeur Web chez OpenClassrooms</li>
                            <li>2017 – Formation hygiène et risques infectieux tatouages Et piercings</li>
                            <li>2014 – Bac professionnel Electrotechnique Energie Equipements Communicants (ELEEC)</li>
                        </lu>
                    </div>
                </div>
                <div className='Card' id='Langues'>
                    <h1 className='Card_title' >Langues</h1>
                    <div className='Card_Description'>
                        <lu>
                            <li>Français langue maternelle</li>
                            <li>Anglais B2</li>
                        </lu>
                    </div>
                </div>
                <div className='Card' id='Qualités'>
                    <h1 className='Card_title'>Qualités</h1>
                    <p className='Card_Description'>
                        <lu>
                            <li>Sens de l'initiative</li>
                            <li>Esprit d'équipe</li>
                            <li>Autodidacte</li>
                            <li>Curieux</li>
                        </lu>
                    </p>
                </div>
            </div>
        </div>

    )
}


export default Card





// import '../Skills/Skills';
// import '../Card.css'

// // import { FaStar, FaRegStar } from 'react-icons/fa';


// const Card = () => {
//     const contentText = [
//         {
//             title: 'Compétences',
//             desc: [
//                 "Utilisation de logiciels de traitement de texte",
//                 "Logiciels graphiques (Procreate)",
//                 "Compétences en maintenance informatique",
//                 "Utilisation d'éditeur de code (Vscode)"
//             ],

//             title: 'Skills',
//             desc: [
//                 "HTML",
//                 "CSS",
//                 "Javascript",
//                 "React",
//                 "Nodejs",
//                 "Procreate"
//             ],

//             title: 'Expériences professionneles',
//             desc: [
//                 "2020 - Vendeur conseil",
//                 "2015/2020 - Tatoueur",
//                 "2013/2015 - Électricien industriel (stage)",
//                 "2013 - Dépanneur en électricité et mécanique sur avions (stage)",
//                 "2012 - Électricien domestique (stage)"
//             ],

//             title: 'Formations',
//             desc: [
//                 "2022 – Formation Développeur Web chez OpenClassrooms",
//                 "2017 – Formation hygiène et risques infectieux tatouages Et piercings",
//                 "2014 – Bac professionnel Electrotechnique Energie Equipements Communicants (ELEEC)"
//             ],

//             title: 'Langues',
//             desc: [
//                 "Français langue maternelle",
//                 "Anglais B2"
//             ],

//             title: 'Qualités',
//             desc: [
//                 "Sens de l'initiative",
//                 "Esprit d'équipe",
//                 "Autodidacte",
//                 "Curieux"
//             ],

//         },
//     ]


//     return (
//         <main className="container__card">
//             <div className="about__wrappe">
//                 <section className="container__accordeon">
//                     {/* <div>
//                         {contentText.map((content, index) => {
//                             return <Accordeon key={index} content={content} />;
//                         })}
//                     </div> */}
//                     <div>
//                         <h2>{contentText.title}</h2>
//                         <li>{contentText.desc} </li>
//                     </div>
//                 </section>
//             </div>
//         </main>
//     );
// };

// export default Card