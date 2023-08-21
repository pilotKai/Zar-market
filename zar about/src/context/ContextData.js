import React from "react";
import { useState } from "react";

export const ContexData = React.createContext();

function ContextFunc({ children }) {
    const [forboss, setForboss] = useState([
        {
            img: "./img/Без названия.jpg", nik: "Akbarov Azizhon", lavozim: "raxbar"
        }
    ])
    const [formanagers, setFormanagers] = useState([
        {
            img: "./img/ishchilar.jpg", nik: "Akbarova Sadoqat", lavozim: "bosh hisobchi"
        },
        {
            img: "./img/ishchilar.jpg", nik: "Nuriddinov Doston", lavozim: "birja"
        },
        {
            img: "./img/ishchilar.jpg", nik: "Baratova Nargiza", lavozim: "HR manager"
        },
    ])
    const [ishchilar, setIshchilar] = useState([
        {
            img: "./img/ishchi.jpg", nik: "Nuriddinov Rustam ", lavozim: "kichik hisobchi"
        },
        {
            img: "./img/ishchi.jpg", nik: "Najmiddinov Kamoliddin", lavozim: "IT bo'lim hodimi"
        },
        {
            img: "./img/ishchi.jpg", nik: "Maxmudova Kamola", lavozim: "sotuv bo'lim manager"
        },
        {
            img: "./img/ishchi.jpg", nik: "Turg'unova Dildora", lavozim: "sotuvchi"
        },
        {
            img: "./img/ishchi.jpg", nik: "Mutillixanova Shodiya", lavozim: "sotuvchi"
        },
        {
            img: "./img/ishchi.jpg", nik: "Jo'rayeva Kibriyo", lavozim: "sotuvchi"
        },
        {
            img: "./img/ishchi.jpg", nik: "Turg'unov Ulig'bek", lavozim: "sotuvchi-servis hizmati"
        },
        {
            img: "./img/ishchi.jpg", nik: "Tursunov Fayzulloh", lavozim: "sotuvchi (yordamchi)"
        },
        {
            img: "./img/ishchi.jpg", nik: "G'aniboyev Jamshid", lavozim: "yordamchi"
        },
        {
            img: "./img/ishchi.jpg", nik: "No'monjonov Muxammad", lavozim: "yordamchi"
        },
        {
            img: "./img/ishchi.jpg", nik: "Alimova Lobar", lavozim: "oshpaz"
        },
    ])
    return (
        <ContexData.Provider value={{
            ishchilar,
            forboss,
            formanagers
        }}>
            {children}
        </ContexData.Provider>
    )
}
export default ContextFunc