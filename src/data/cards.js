import blueIcon from '../images/cards/blue-icon.png'
import redIcon from '../images/cards/red-icon.png'
import yellowIcon from '../images/cards/yellow-icon.png'
import bluePin from '../images/cards/blue-pin.png'
import redPin from '../images/cards/red-pin.png'
import yellowPin from '../images/cards/yellow-pin.png'
import orangeIcon from '../images/cards/orange-icon.png'
import greenIcon from '../images/cards/green-icon.png'
import santaIcon from '../images/cards/santa-icon.png'
import redBg from '../images/cards/red-bg.png'
import blueBg from '../images/cards/blue-bg.png'
import yellowBg from '../images/cards/yellow-bg.png'
import orangeBg from '../images/cards/orange-bg.png'
import greenBg from '../images/cards/green-bg.png'

const cards = [
    {
        iconBg: redBg,
        icon: redIcon,
        bg: redBg,
        pin: redPin,
        altText: 'Paczki z prezentami urodzinowymi',
        title: 'Animacje na urodzinach',
        text: 'Chcesz uczynić urodziny Twojego dziecka niezapomnianymi? Oferujemy profesjonalne usługi animacyjne, które dostarczą mnóstwo radości i uśmiechów na twarzach maluchów oraz dorosłych! Personalizujemy animacje, aby sprawić, że dziecko poczuje się wyjątkowo.',
        priceOne: '1 animator do 10 dzieci 1h/200zł',
        priceTwo: '2 animatorów 1h/250zł',
        className:
            'font-love grow text-center text-2xl text-cardpink sm:text-4xl',
    },
    {
        iconBg: blueBg,
        icon: blueIcon,
        bg: blueBg,
        pin: bluePin,
        altText: 'Tort urodziniowy',
        title: 'Animacje na weselu',
        text: 'Wasze wesele to wyjątkowy dzień, który chcecie podzielić z najbliższymi, w tym z najmłodszymi gośćmi. Nasza oferta animacji dla dzieci na weselu pozwoli rodzicom i dorosłym bawić się na parkiecie, wiedząc, że ich dzieci mają zapewnioną dobrą zabawę i opiekę.',
        priceOne: '2 animatorów 2h/ 600zł',
        priceTwo: 'Każda kolejna godzina 200zł',
        className:
            'font-love grow text-center text-2xl text-[#07a0c7] sm:text-4xl',
    },
    {
        iconBg: yellowBg,
        icon: yellowIcon,
        bg: yellowBg,
        pin: yellowPin,
        altText: 'Kościelny kielich z krzyżem',
        title: 'Chrzciny i Komunie',
        text: 'Chrzty i Pierwsze Komunie to wyjątkowe chwile w życiu dziecka i całej rodziny. Nasza oferta animacji na te uroczystości jest stworzona, aby uczynić te dni jeszcze bardziej radosnymi i niezapomnianymi. Oferujemy różnorodne rozrywki i atrakcje dla dzieci i dorosłych.',
        priceOne: '1 animator do 10 dzieci 1h/200zł',
        priceTwo: '2 animatorów 1h/250zł',
        className:
            'font-love grow text-center text-2xl text-cardyellow sm:text-4xl',
    },
    {
        iconBg: orangeBg,
        icon: orangeIcon,
        bg: orangeBg,
        pin: yellowPin,
        altText: 'Maska karnawałowa',
        title: 'Animacje na balu Karnawałowym ',
        text: 'Bal karnawałowy dla dzieci to czas, gdy marzenia stają się rzeczywistością, a wyobraźnia nie zna granic. Nasza oferta animacji na balu karnawałowym zapewni Waszym dzieciom niezapomnianą przygodę w świecie kolorów, bajek i uśmiechu.',
        priceOne: 'Cena: 1 animator 800 zł/2h',
        className:
            'font-love grow text-center text-2xl text-cardorange sm:text-4xl',
    },
    {
        iconBg: greenBg,
        icon: greenIcon,
        bg: greenBg,
        pin: bluePin,
        altText: 'Kociołek na ognisku',
        title: 'Animacje na pikniku',
        text: 'Chcecie uczynić Wasz piknik niezapomnianym wydarzeniem pełnym zabawy i relaksu? Nasza oferta animacji na pikniku jest idealnym rozwiązaniem, aby dostarczyć Wam i Waszym gościom mnóstwo radości i rozrywki na świeżym powietrzu!',
        className:
            'font-love grow text-center text-2xl text-mygreyblue sm:text-4xl',
        more: false,
    },
    {
        iconBg: redBg,
        icon: santaIcon,
        bg: redBg,
        pin: redPin,
        altText: 'Ikona z twarzą świętego mikołaja',
        title: 'Wizyta Świętego Mikołaja',
        text: 'Czy marzysz o tym, aby Święty Mikołaj odwiedził Twoje dzieci podczas świąt? Nasza oferta wizyty Świętego Mikołaja dostarczy niezapomnianych chwil radości i magii w okresie bożonarodzeniowym.',
        priceOne: '03. 12 – 07.12 – 250 zł; ',
        priceTwo: '01.12,   07.12- 11.12 – 200zł',
        className:
            'font-love grow text-center text-2xl text-cardred sm:text-4xl',
    },
]
export default cards
