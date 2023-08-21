import { useContext, useState } from "react"
import { ContexData } from "../context/ContextData"
// import { ContexData } from "../context/ContextData"

function SectionTwo() {
    // ishchilar haqida ma'lumotlar
    const { ishchilar, forboss, formanagers } = useContext(ContexData)
    return (
        <>

            <section className="TwoA">
                <div className="topInTwo">
                    <div className="textInSTwo">
                        <span>Jamoa bilan tanishing</span>
                        <br />
                        <p>Bizning mutaxassislarimiz bilan tanishing
                            siz uchun onlayn</p>
                    </div>
                </div>
                <div className="bottomInTwo">
                    <div className="InTwotop">
                        
                        <div className="A">
                            {
                                forboss.map(val => (
                                    <div className="ishchilarA">
                                        <figure><img src={val.img} alt={val.img} /></figure>
                                        <div className="text">
                                            <p>{val.nik}</p>
                                            <span>{val.lavozim}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="B">
                            {
                                formanagers.map(val=> (
                                    <div className="ishchilarA">
                                        <figure><img src={val.img} alt={val.img} /></figure>
                                        <div className="text">
                                            <p>{val.nik}</p>
                                            <span>{val.lavozim}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        
                    </div>
                    <hr />
                    <div className="bottom">
                    <div className="C">
                        {
                                ishchilar.map(val=> (
                                    <div className="ishchilarA">
                                        <figure><img src={val.img} alt={val.img} /></figure>
                                        <div className="text">
                                            <p>{val.nik}</p>
                                            <span>{val.lavozim}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default SectionTwo