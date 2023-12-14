import React, { Fragment } from "react";
export default function TypesFiltrage(){
    return(
        <Fragment>
            <div className="types-filtrage">
                <table className="table-types">
                    <tr>
                        <td className="td-types" >
                            <div className="section-type">
                                <div className="text-type">
                                <h4 className="h4-text-types">NEW DROPS</h4>
                                <p>Nouveau concept : Nous dévoilons des nouveaux designs chaque Dimanche!</p>
                                <div className="btn-achetez-div">
                                <button className="btn-achetez">Achetez</button>
                                </div>
                                </div>
                                <div className="img-type">
                                    <img src="./iphone.png" alt="" className='img-type-src'/>
                                </div>
                            </div>
                        </td>
                        <td className="td-types">
                            <div className="section-type">
                                <div className="text-type">
                                <h4 className="h4-text-types">Football</h4>
                                <p>Fan de football? Cette collection est pour vous! Personnalisez le maillot</p>
                                <div className="btn-achetez-div">
                                <button className="btn-achetez">Achetez</button>
                                </div>
                                </div>
                                <div className="img-type">
                                    <img src="./iphone.png" alt="" className='img-type-src'/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-types">
                            <div className="section-type">
                                <div className="text-type">
                                <h4 className="h4-text-types">Personnalisation</h4>
                                <p >Personnalisez votre coque à votre goût! Personnalisez votre coque </p>
                                <div className="btn-achetez-div">
                                <button className="btn-achetez">Achetez</button>
                                </div>
                                </div>
                                <div className="img-type">
                                    <img src="./iphone.png" alt="" className='img-type-src'/>
                                </div>
                            </div>
                        </td>
                        <td className="td-types">
                            <div className="section-type">
                                <div className="text-type">
                                <h4 className="h4-text-types">Moroccan B</h4>
                                <p>Découvrez notre nouvelle collection Boarding Pass avec des villes Marocaines</p>
                                <div className="btn-achetez-div">
                                <button className="btn-achetez">Achetez</button>
                                </div>
                                </div>
                                <div className="img-type">
                                    <img src="./iphone.png" alt="" className='img-type-src'/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-types">
                            <div className="section-type">
                                <div className="text-type">
                                <h4 className="h4-text-types">Case with Art</h4>
                                <p>Par cette collection, WE CASE IT contribue à la promotion de l'art, </p>
                                <div className="btn-achetez-div">
                                <button className="btn-achetez">Achetez</button>
                                </div>
                                </div>
                                <div className="img-type">
                                    <img src="./iphone.png" alt="" className='img-type-src'/>
                                </div>
                            </div>
                        </td>
                        <td className="td-types">
                            <div className="section-type">
                                <div className="text-type">
                                <h4 className="h4-text-types">Straps</h4>
                                <p>Upgrade our phone case style with our newest accessory</p>
                                <div className="btn-achetez-div">
                                <button className="btn-achetez">Achetez</button>
                                </div>
                                </div>
                                <div className="img-type">
                                    <img src="./iphone.png" alt="" className='img-type-src'/>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </Fragment>
    )
}