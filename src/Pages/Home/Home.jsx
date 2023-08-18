import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {

    const images = [
        
        {
            src: 'https://app.conciergetravel.am/storage/OqYjxr7BQRXby8Gka3DHfs4gBu1olU8afrVuWbGu.jpg',
            text: "ՀԱՂԹԱՆԱԿ ԶԲՈՍԱՅԳԻ",
            href: "երևան"
        },
        {
            src: 'https://app.conciergetravel.am/storage/ykjOx5Gqe46IdtICDxgdRt7SmeRjqhBWp2ar0TIp.jpg',
            text: "ԷՐԵԲՈՒՆԻ ԱՄՐՈՑ",
            href: "երևան"
        },
        {
            src: 'https://app.conciergetravel.am/storage/twbK4OLl9M45foPzwtSj9OYLDNtfAWpB91axVUob.jpg',
            text: "Արամ Խաչատրյանի տուն-թանգարան",
            href: "երևան"
        },
        {
            src: 'https://app.conciergetravel.am/storage/jeQCL0rWHMf8sIr81qSp4wrTTdQJA30m9kcxwnkk.jpg',
            text: "Ararat Երևանի կոնյակի գործարան",
            href: "երևան"
        },
        {
            src: 'https://app.conciergetravel.am/storage/lgOvOK1KjdSFAh3DoE5Cp2vD6SwKXzfFh28FmPsq.jpg',
            text: "ԿԱՍԿԱԴ",
            href: "երևան"
        },
        {
            src: 'https://app.conciergetravel.am/storage/oRST8CUXWxsv3oqbB0t8isRsyoZSQAxGq0JVk0N1.jpg',
            text: "ԾԻԾԵՌՆԱԿԱԲԵՐԴ",
            href: "երևան"
        },
        {
            src: 'https://app.conciergetravel.am/storage/hAqoasgVpUo4tSv8ydJTGUarJWvPGfZCzOpQ8AQR.jpg',
            text: "Հայաստանի պատմության թանգարան",
            href: "երևան"
        },
        {
            src: 'https://app.conciergetravel.am/storage/Z0IDo75LMTYRiAhUfkDnffJ4qlmZJbNf8OsQgIfJ.jpg',
            text: "ԱՐԱԳԱԾ ԼԵՌ",
            href: "արագածոտն"
        },
        {
            src: 'https://app.conciergetravel.am/storage/3peo4FQYaoYOZF6TuWsOe165nlnYXYD3DwP2xQre.jpg',
            text: "ՀԱՅՈՑ ԱՅԲՈՒԲԵՆԻ ՀՈՒՇԱՐՁԱՆ",
            href: "արագածոտն"
        },

        {
            src: 'https://app.conciergetravel.am/storage/pmmGMkV8hBZathgavqvbsYgJqeuhIbcrClOy86Gb.jpg',
            text: "ԱՐԱԼԵՌ",
            href: "արագածոտն"
        },
        {
            src: 'https://app.conciergetravel.am/storage/WyNlkYRzgfiexMIwMZsbOfZ46LPGOApNuUaR3hyw.jpg',
            text: "ԱՄԲԵՐԴ",
            href: "արագածոտն"
        },
        {
            src: 'https://app.conciergetravel.am/storage/whKatZzeE3lvQMyhXlc9ET63kR8KRG2Yw0wnJJqd.jpg',
            text: "ԲՅՈՒՐԱԿԱՆԻ ԱՍՏՂԱԴԻՏԱՐԱՆ ",
            href: "արագածոտն"
        },
        {
            src: 'https://app.conciergetravel.am/storage/9zbLi326InawlOhZBu1I6PlYhTDP2QOAFJyY4yDD.jpg',
            text: "ՔԱՐԻ ԼԻՃ",
            href: "արագածոտն"
        },
        {
            src: 'https://app.conciergetravel.am/storage/nBSmT8WOqI10QKLCZDNd6R7XG4rfRgcJwatw5qB4.jpg',
            text: "ՀԻՆ ԱՐՏԱՇԱՏ",
            href: "արարատ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/oTgYPCHkmETBbWVdCcHyK4DnFCCMgIcdwAazy3eL.jpg',
            text: "ԳԵՎՈՐԳ ՄԱՐԶՊԵՏՈՒՆԻ",
            href: "արարատ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/H0KsHVK1CMEYozWrXN3yz5Z8hufqCoeBGJ0m8dbg.jpg',
            text: "ԽՈՐ ՎԻՐԱՊ",
            href: "արարատ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/e7ci4WvaBKf1o6vQ74QHj2oicU4ZgVcfwSCAib4j.jpg',
            text: "ԽՈՍՐՈՎԻ ԱՆՏԱՌ ԱՐԳԵԼՈՑ",
            href: "արարատ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/2HhguBGKTV9haRsNCgo9XauCuiqrbp78rheU5vfH.png',
            text: 'ԶՎԱՐԹՆՈՑ',
            href: "արմավիր"
        },
        {
            src: 'https://app.conciergetravel.am/storage/noDyHDZuarCZrJmQIKdbIsvtPEKQUFGqloHYQuft.jpg',
            text: 'ՄԵԾԱՄՈՐ',
            href: "արմավիր"
        },
        {
            src: 'https://app.conciergetravel.am/storage/mnGAeqbkOIBIHcnNVKwN0eNfyWyBj9q1Tlpk5Wy7.jpg ',
            text: "ՍԱՐԴԱՐԱՊԱՏ",
            href: "արմավիր"
        },
        {
            src: 'https://app.conciergetravel.am/storage/XveTmKgGM2PBHW1S9weGFqeBBC10t8SdLZL0fnE9.jpg',
            text: "ԷՋՄԻԱԾՆԻ ՄԱՅՐ ՏԱՃԱՐ",
            href: "արմավիր"
        },
        {
            src: 'https://app.conciergetravel.am/storage/qPbzIbkRZjAeI7OfzDRdY5S24VEgZTAFvufRh9W8.jpg',
            text: "ՍԵՎԱՆԱՎԱՆՔ",
            href: "գեղարքունիք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/Kt6KSwBiLz6JhFnO8vhe6UZ0AIp23Y3MftIFnFQi.jpg',
            text: "ԱՐՄԱՂԱՆ ԼԵՌ",
            href: "գեղարքունիք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/VQJ9yDXxpqyYgDLrxBLLPzgpYnLreh1kJErNgUwn.jpg',
            text: "ՆՈՐԱՏՈՒՍ",
            href: "գեղարքունիք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/avmKWG2UghD7CY8u7U0tip6GY8VGKhN49u6PTz6u.jpg',
            text: "ՍԵՎԱՆ",
            href: "գեղարքունիք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/if672roqmZwRREeqoKclutBzaVxpd1h8tecmFm76.jpg',
            text: "ԱԺԴԱՀԱԿ ԼԵՌ",
            href: "գեղարքունիք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/bkQ0jECra7dAnRf11OJVguAJQz30XNeAE3mztPRn.jpg',
            text: "ՔԱՐԵՐԻ ՍԻՄՖՈՆԻԱ",
            href: "կոտայք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/PlU9hyqWjdRhV3WJ1pGQtPxsUER2DGfnTGg1Dhem.jpg',
            text: "ՉԱՐԵՆՑԻ ԿԱՄԱՐ",
            href: "կոտայք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/P8OcMje8M8uUpJGUPmpo4Uv4ByDgyQtfI4eNqtMS.jpg',
            text: "ԳԵՂԱՐԴ",
            href: "կոտայք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/ftabZi0LOT9aJXfahIMaJ4npdJXqZmHiwZfg1Sdp.jpg',
            text: "ԳԱՌՆԻ",
            href: "կոտայք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/tBwBTudWivjG8kDQmZC0lnQEpz830QOsEjGGJ2Uu.jpg',
            text: "ԳԱՌՆՈՒ ՁՈՐ",
            href: "կոտայք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/hZIKPWWycMJfFs9RamUN4BxUGpLgBtfU5tlfUPrR.jpg',
            text: "ԳԵՂԱՄԱ ԼԵՌՆԵՐ",
            href: "կոտայք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/nfPvZblADzTzozWlEUEykmTBTchZK0FW615za1wr.jpg',
            text: "ԱԽԹԱԼԱ",
            href: "լոռի"
        },
        {
            src: 'https://app.conciergetravel.am/storage/AoRDtoRaXLst7N9yYPE70LPOitQa2n48yRzZZDbj.jpg',
            text: "ՀԱՂՊԱՏԱՎԱՆՔ",
            href: "լոռի"
        },
        {
            src: 'https://app.conciergetravel.am/storage/EyXieSwdnkNel7nr44wFY9tcOxqVy2S3782GbVMt.jpg',
            text: "ԼՈՌԻ ԲԵՐԴ",
            href: "լոռի"
        },
        {
            src: 'https://app.conciergetravel.am/storage/Co39IzFcnvME0UJpcA9DlMLzA9lIuFFGsyKuC6FC.jpg',
            text: "ՍՏԵՓԱՆԱՎԱՆԻ ԴԵՆԴՐՈՊԱՐԿ",
            href: "լոռի"
        },
       
        {
            src: 'https://app.conciergetravel.am/storage/7r31P6BO3k1Quiypmg2BfEXQLWs91dkCjAcdTYLU.jpg',
            text: "ԹՌՉԿԱՆԻ ՋՐՎԵԺ",
            href: "շիրակ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/lIYovcBTtWDxlWRJv6uzhtNX2ieelji9pabz9y2u.jpg',
            text: "ԳՅՈՒՄՐՈՒ ՌՈՒՍԱԿԱՆ ԲԵՐԴ",
            href: "շիրակ"
        },
        {
            src: 'https://armenia-tour.am/wp-content/uploads/2016/01/1Armenie.jpg',
            text: "Շիրակի մարզի հնավայր",
            href: "շիրակ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/5df4bA6F819XdX16TmcsqMReagKPF4aZJy2KZnJA.jpg',
            text: "ՀԱՌԻՃԱՎԱՆՔ",
            href: "շիրակ"
        },





        {
            src: 'https://app.conciergetravel.am/storage/hQhaQXnz5g0G96inY3UgS1O7dHqmyZ7RpzK6OWEt.jpg',
            text: "ՈՒՂՏԱՍԱՐ",
            href: "սյունիք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/xp2kcIDeb6kB73He9XjvsO5pIFqrcybCj983dYIV.jpg',
            text: "ՏԱԹԵՎԵՐ ՃՈՊԱՆՈՒՂԻ",
            href: "սյունիք"
        },
        {
            src: 'https://app.conciergetravel.am/storage/oxbeTqLwURlfmHrxotyJMqXB02IiTd3blZeAVSB6.jpg',
            href: "սյունիք",
            text: "ՇԱՔԻԻ ՋՐՎԵԺ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/cWiY1gsii7DR7PlJLLfthCwYuslSuzgYlpNQHSgV.jpg',
            href: "սյունիք",
            text: "ԽՈՒՍՏՈՒՓ ԼԵՌ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/4HvDr0xgW8pbtlebQHXNvuI9kHB2NfzcPxgVPtsO.jpg',
            href: "սյունիք",
            text: "ՍԱՏԱՆԻ ԿԱՄՈՒՐՋ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/Wq5mb7zSm8TMMogUvemxDYK06XgCK1dMt8fmK3Vj.jpg',
            href: "սյունիք",
            text: "ՀԻՆ ԽՆՁՈՐԵՍԿ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/TFhPnkIIxFi8NTJW9gbDVWlIzDstsJ2itUtIZ1xB.jpg',
            href: "սյունիք",
            text: "ՇԻԿԱՀՈՂԻ ԱՐԳԵԼՈՑ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/hnABlvswLdGLksLg9Ionn6j7d3vKhirMCNuXTN5x.jpg',
            href: "սյունիք",
            text: "ՏԱԹԵՒԻ ՎԱՆՔ"
        },

        {
            src: 'https://www.advantour.com/img/armenia/tavush/haghartsin-monastery.jpg',
            text: "Հաղարծին",
            href: "տավուշ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/t8Mcc86d4dE4rEdMVd1VgCThwUer7HKmRf1clBez.jpg',
            text: "ԳՈՇԻ ԼԻՃ",
            href: "տավուշ"
        },
        {
            src: 'https://impoqrik.am/images/2013hunvar/goshavanq1.jpg',
            text: "Գոշավանք",
            href: "տավուշ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/e50wSK1srLiG9rizGvBjh0fmkjQ3XoXBZfAglO8f.jpg',
            text: "ԼԱՍՏԻՎԵՐ",
            href: "տավուշ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/IJ0XaveqEkrosPGXzW5psZKtnZrF8Efy42ZuuKaj.jpg',
            text: "ԴԻԼԻՋԱՆԻ ԱԶԳԱՅԻՆ ՊԱՐԿ",
            href: "տավուշ"
        },
        {
            src: 'https://app.conciergetravel.am/storage/xLAOVFV7d5hEnaD5ep64uL6weFlAnp1rXquPm90R.jpg',
            text: "ՋԵՐՄՈՒԿԻ ՋՐՎԵԺ",
            href: "վայոց ձոր"
        },
        {
            src: 'https://app.conciergetravel.am/storage/hWDFbUXjS6hFdGc7t9LlnBx4jXjwv5ViGx7tmS7t.jpg',
            text: "ԱՐԵՆԻ ՔԱՐԱՆՁԱՎ",
            href: "վայոց ձոր"
        },
        {
            src: 'https://app.conciergetravel.am/storage/OaiF9XYkQxo13b9gbRtPlQrrAO73kK5jOvkcHdWO.jpg',
            text: "ՆՈՐԱՎԱՆՔ",
            href: "վայոց ձոր"
        },
        {
            src: 'https://app.conciergetravel.am/storage/5lWdSlkPhneUQLAlC8d7Pmsg7qEnzhOoLN5V7nXv.png',
            text: "ՍՄԲԱՏԱԲԵՐԴ",
            href: "վայոց ձոր"
        }
    ]

    const [category, setCategory] = useState("բոլորը")

    const [regions, setRegions] = useState([
        {
            name: "բոլորը",
            selected: true,
        },
        {
            name: "երևան",
            selected: false,
        },
        {
            name: "արագածոտն",
            selected: false,
        },
        {
            name: "արարատ",
            selected: false,
        },
        {
            name: "արմավիր",
            selected: false,
        },
        {
            name: "գեղարքունիք",
            selected: false,
        },
        {
            name: "կոտայք",
            selected: false,
        },
        {
            name: "լոռի",
            selected: false,
        },
        {
            name: "շիրակ",
            selected: false,
        },
        {
            name: "սյունիք",
            selected: false,
        },
        {
            name: "տավուշ",
            selected: false,
        },
        {
            name: "վայոց ձոր",
            selected: false,
        },
    ])

    return (
        <>
            <header className={styles.heading}>
                <h1 className={styles.title}>Հայաստանի մարզերը և գեղատեսիլ վայրերը</h1>
            </header>
            <main className={styles.main}>
                <div className={styles.regions}>
                    {
                        regions.map((region, idx) => {
                            return <div key={Math.random()} className={`${styles.region} ${region.selected ? styles.selected : ''}`} onClick={(e) => {
                                let newRegions = [...regions]
                                newRegions.forEach(reg => reg.selected = false)
                                newRegions.find(reg => reg.name === region.name).selected = true
                                setCategory(region.name)
                                setRegions(newRegions)
                            }}>{region.name}</div>
                        })
                    }
                </div>
            </main>
            <section className={styles.images}>
                {

                    images.map((img, idx) => {
                        return img.href === category || category === "բոլորը" ? <Link className={styles.box} key={Math.random()} to={`/${img.href}`}>
                            <div className={styles.img}>
                                <img src={img.src} alt='' />
                            </div>
                            <div className={styles.imgName}>
                                {img.text}
                            </div>
                        </Link> : <></>
                    })
                }
            </section>
        </>
    )
}

export default Home
