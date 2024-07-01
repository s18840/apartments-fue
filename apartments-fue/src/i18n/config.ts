import i18n from "i18next";                      
import { initReactI18next } from "react-i18next";


const userLocale = navigator.language;

i18n
  .use(initReactI18next)
  .init({
    // Config options

    // Specifies the default language (locale) used
    // when a user visits our site for the first time.
    // We use English here, but feel free to use
    // whichever locale you want.                   
    lng: `${userLocale}`,

    // Fallback locale used when a translation is
    // missing in the active locale. Again, use your
    // preferred locale here. 
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },

    // Translation messages. Add any languages
    // you want here.
    resources: {
      en: {
        translation: {
            car: "car",
            Contact_us: "Contact us",
            Mail: "Mail",
            Telephone: "Telephone",
            header: "header",
            About_us: "About us",
            Our_offer: "Our offer",
            Furnishings: "Furnishings",
            Back: "Back",
            Shared_Swimming_pool: "Shared swimming pool",
            Free_Parking: "Free parking",
            No_Smoking_Allowed: "No smoking allowed",
            No_Pets_Allowed: "No pets allowed",
            Washing_Machine_And_Dryer: "Washing machine and dryer",
            Soap_Shampoo: "Soap, shampoo",
            Towels_Linen_Toilet_Paper: "Towels, linen, toilet paper",
            Wardrobe_With_Hangers: "Wardrobe with hangers",
            Iron: "Iron",
            Tv_With_Smart_Tv: "Tv with Smart TV",
            Wi_Fi: "Wi-Fi",
            Crib_Chair_Toys_For_The_Little_Ones: "Crib, chair, toys for the little ones",
            Microwave_Kettle_Cooktop_Toaster: "Microwave, kettle, cooktop, toaster",
            Crockery_And_Cutlery: "Crockery and cutlery",
            Refrigerator_And_Freezer: "Refrigerator and freezer",
            Coffee_Machine: "Coffee machine",
            Terrace_Or_Balcony_Furniture: "Terrace or balcony, furniture",
            Garden_View: "Garden view",
            About_Costa_Calma: "About Costa Calma",
            Apartment_Info1: "We offer 2 fully furnished apartments with a terrace, sleeping space for 4 people in each.",
            Apartment_Info2: "The apartments are located in a gated community with access to the swimming pool and a shop located 20 meters from the entrance.",
            Apartment_1_description: "The comfortable Colores de Fuerteventura 1 apartment in boho style, completely renovated in March 2023, is equipped with all the amenities that ensure a comfortable stay for guests. The well-equipped modern kitchen has a ceramic hob, microwave with grill, dishwasher, large fridge with freezer, toaster, coffee maker, electric kettle, a complete set of pots and tableware, making it convenient to prepare and enjoy meals. The adjacent dining area and elegant lounge, equipped with a comfortable sofa bed, SMART TV, and a work corner with fast wireless internet, offer a full range of possibilities for various activities during the stay. The spacious bedroom with comfortable mattresses and a large wardrobe ensures a comfortable and restful sleep. The large bathroom is another convenient and stylish space for our guests. A spacious shower cabin with a comfortable shower, a large cabinet with a sink above which is an illuminated mirror, and necessary accessories including bath and hand towels. Completing the picture is a modern washing machine with a dryer, ensuring you can feel fully comfortable. Another very important space is the terrace in the shade of majestic palms, equipped with a dining set for al fresco meals. The complex where the apartment is located additionally ensures that guests feel great – lush palms, peace, quiet, and the privacy of the place are just some of the advantages of this exceptional location. The nearby shopping center with a supermarket, bars, restaurants, and exotic bazaar, and the beautiful Sotavento beach, located just about 650 meters away, make staying here a truly wonderful experience.",
            Apartment_2_description: "The comfortable Colores de Fuerteventura 2 apartment in boho style, completely renovated in March 2023, is equipped with all the amenities that ensure a comfortable stay for guests. The well-equipped modern kitchen has a ceramic hob, microwave with grill, dishwasher, large fridge with freezer, toaster, coffee maker, electric kettle, a complete set of pots and tableware, making it convenient to prepare and enjoy meals. The adjacent dining area and elegant lounge, equipped with a comfortable sofa bed, SMART TV, and a work corner with fast wireless internet, offer a full range of possibilities for various activities during the stay. The spacious bedroom with comfortable mattresses and a large wardrobe ensures a comfortable and restful sleep. The large bathroom is another convenient and stylish space for our guests. A spacious shower cabin with a comfortable shower, a large cabinet with a sink above which is an illuminated mirror, and necessary accessories including bath and hand towels. Completing the picture is a modern washing machine with a dryer, ensuring you can feel fully comfortable. Another very important space is the terrace in the shade of majestic palms, equipped with a dining set for al fresco meals. The complex where the apartment is located additionally ensures that guests feel great – lush palms, peace, quiet, and the privacy of the place are just some of the advantages of this exceptional location. The nearby shopping center with a supermarket, bars, restaurants, and exotic bazaar, and the beautiful Sotavento beach, located just about 650 meters away, make staying here a truly wonderful experience.",
            Costa_Calma_Info: "A small and quiet town on the southwestern coast of the island, with plenty of greenery and palm trees. A beautiful palm-lined avenue runs through the middle of the town, making it an excellent spot for walks and jogging at any time of day and in any weather. Costa Calma is an ideal place for those seeking peace and quiet, especially families with children due to its beaches, calm waters and waves (swimming areas with lifeguards), and water sports enthusiasts. The town has 3 supermarkets, numerous shops and boutiques, a gas station, post office, pharmacies, and emergency medical care. If you don't want to cook, there are many affordable bars and restaurants on site. Costa Calma is a very good base for exploring the island, but a car is necessary – there are several car rental agencies available locally.",

        },
      },
      pl: {
        translation: {
            car: "samochód",
            Contact_us: "Skontaktuj się z nami",
            Mail: "Mail",
            Telephone: "Telefon",
            header: "nagłówek",
            About_us: "O nas",
            Our_offer: "Nasza oferta",
            Furnishings: "Wyposażenie",
            Back: "Powrót",
            Shared_Swimming_pool: "Wspólny basen",
            Free_Parking: "Darmowy parking",
            No_Smoking_Allowed: "Zakaz palenia",
            No_Pets_Allowed: "Zakaz wprowadzania zwierząt",
            Washing_Machine_And_Dryer: "Pralka i suszarka",
            Soap_Shampoo: "Mydło, szampon",
            Towels_Linen_Toilet_Paper: "Ręczniki, pościel, papier toaletowy",
            Wardrobe_With_Hangers: "Szafa z wieszakami",
            Iron: "Żelazko",
            Tv_With_Smart_Tv: "Telewizor z funkcją Smart TV",
            Wi_Fi: "Wi-Fi",
            Crib_Chair_Toys_For_The_Little_Ones: "Łóżeczko, krzesło, zabawki dla dzieci",
            Microwave_Kettle_Cooktop_Toaster: "Mikrofalówka, czajnik, kuchenka, toster",
            Crockery_And_Cutlery: "Naczynia i sztućce",
            Refrigerator_And_Freezer: "Lodówka i zamrażarka",
            Coffee_Machine: "Ekspres do kawy",
            Terrace_Or_Balcony_Furniture: "Taras lub balkon, meble",
            Garden_View: "Widok na ogród",
            About_Costa_Calma: "O Costa Calma",
            Apartment_Info1: "Oferujemy 2 w pełni urządzone apartamenty z tarasem, z miejscem do spania dla 4 osób w każdym.",
            Apartment_Info2: "Apartamenty znajdują się na zamkniętym osiedlu z dostępem do basenu oraz sklepem znajdującym się 20 metrów od wejścia.",
            Apartment_1_description: "Komfortowy apartament Colores de Fuerteventura 1 w stylu boho po kapitalnym remoncie w marcu 2023 roku zostal wyposazony we wszystkie udogodnienia, ktore zapewniaja Gościom wygodny pobyt. Doskonale wyposażona nowoczesna kuchnia posiada płytę ceramiczna, kuchenkę mikrofalowa z grillem, zmywarkę, duża lodówka z zamrażarka ,toster, ekspres do kawy czajnik elektryczny, komplet garnków i zastawę stołowa co pozwala na wygodne przygotowywanie i degustacje posilkow. Znajdująca się obok przestrzeń jadalna i elegancka strefa wypoczynku wyposażona w wygodna rozkładana sofę , telewizor SMART TV oraz kącik do pracy w połączeniu szybkim bezprzewodowym internetem oferuje pelna gamę możliwości dla różnych form aktywności w trakcie pobytu.Przestronna sypialnia z łóżkami o wygodnych materacach i obszerna szafa zapewni możliwość wygodnego i komfortowego snu. Dużą łazienka to kolejna wygodna i stylowa przestrzeń dla naszych Gości. Obszerna kabina prysznicowa z komfortowym natryskiem, dużą szafka z umywalka nad która znajduje się podświetlane lustro i niezbędne dodatki wyposażenia w tym ręczniki toaletowe i kąpielowe. Calosc dopełnia nowoczesna pralka z suszarka sprawia ze będziecie się mogli czuć w pełni komfortowo. Kolejna bardzo ważna przestrzenią jest taras w cieniu okazałych palm na którym nie mogło zabraknąć zestawu jadalnego umożliwiającego posiłki na świeżym powietrzu. Kompleks, w którym znajduje sie apartament dodatkowo sprawia, ze goscie czuja sie w nim wspaniale - dorodne palmy, spokoj, cisza, intymnosc miejsca- to tylko niektore atuty tej wyjatkowej lokalizacji. Znajdujace sie w nieopodal centrum handlowe z marketem, barami, restauracjami i egzotyczny bazar oraz znajdująca zaledwie w odleglosci zaledwie około 650 metrów piekna plaza Sotavento sprawiaja, ze wypoczynek tutaj to naprawde wspaniale przeżycie.",
            Apartment_2_description: "Komfortowy apartament Colores de Fuerteventura 2 w stylu boho po kapitalnym remoncie w marcu 2023 roku zostal wyposazony we wszystkie udogodnienia, ktore zapewniaja Gościom wygodny pobyt. Doskonale wyposażona nowoczesna kuchnia posiada płytę ceramiczna, kuchenkę mikrofalowa z grillem, zmywarkę, duża lodówka z zamrażarka ,toster, ekspres do kawy czajnik elektryczny, komplet garnków i zastawę stołowa co pozwala na wygodne przygotowywanie i degustacje posilkow. Znajdująca się obok przestrzeń jadalna i elegancka strefa wypoczynku wyposażona w wygodna rozkładana sofę , telewizor SMART TV oraz kącik do pracy w połączeniu szybkim bezprzewodowym internetem oferuje pelna gamę możliwości dla różnych form aktywności w trakcie pobytu.Przestronna sypialnia z łóżkami o wygodnych materacach i obszerna szafa zapewni możliwość wygodnego i komfortowego snu. Dużą łazienka to kolejna wygodna i stylowa przestrzeń dla naszych Gości. Obszerna kabina prysznicowa z komfortowym natryskiem, dużą szafka z umywalka nad która znajduje się podświetlane lustro i niezbędne dodatki wyposażenia w tym ręczniki toaletowe i kąpielowe. Calosc dopełnia nowoczesna pralka z suszarka sprawia ze będziecie się mogli czuć w pełni komfortowo. Kolejna bardzo ważna przestrzenią jest taras w cieniu okazałych palm na którym nie mogło zabraknąć zestawu jadalnego umożliwiającego posiłki na świeżym powietrzu. Kompleks, w którym znajduje sie apartament dodatkowo sprawia, ze goscie czuja sie w nim wspaniale - dorodne palmy, spokoj, cisza, intymnosc miejsca- to tylko niektore atuty tej wyjatkowej lokalizacji. Znajdujace sie w nieopodal centrum handlowe z marketem, barami, restauracjami i egzotyczny bazar oraz znajdująca zaledwie w odleglosci zaledwie około 650 metrów piekna plaza Sotavento sprawiaja, ze wypoczynek tutaj to naprawde wspaniale przeżycie.",
            Costa_Calma_Info: "Małe i ciche miasteczko na południowo-zachodnim wybrzeżu wyspy, z dużą ilością zieleni i palm. Przez środek miejscowości prowadzi piękna palmowa aleja będąca także miejscem spacerów oraz znakomitego joggingu bez względu na porę dnia i słońce. Costa Calma to idealne miejsce dla osób szukających ciszy i spokoju, szczególnie dla rodzin z dziećmi ze względu na plaże, spokojne wody i fale (kąpieliska z ratownikami) oraz amatorów sportów wodnych. W miasteczku 3 supermarkety, liczne sklepy i butiki, stacja benzynowa, poczta, apteki oraz doraźna pomoc medyczna. Jeżeli nie chcemy zajmować się gotowaniem to na miejsce jest duża ilość barów i restauracji przystępnych cenowo. Costa Calma to bardzo dobra baza wypadowa do zwiedzania wyspy jednak potrzebny jest samochód – na miejscu kilka wypożyczalni.",

        },
      },
      de: {
        translation: {
            car: "Auto",
            Contact_us: "Kontaktiere uns",
            Mail: "Post",
            Telephone: "Telefon",
            header: "Überschrift",
            About_us: "Über uns",
            Our_offer: "Unser Angebot",
            Furnishings: "Einrichtung",
            Back: "Zurückkehren",
            Shared_Swimming_pool: "Gemeinschaftspool",
            Free_Parking: "Kostenloses Parken",
            No_Smoking_Allowed: "Rauchen verboten",
            No_Pets_Allowed: "Keine Haustiere erlaubt",
            Washing_Machine_And_Dryer: "Waschmaschine und Trockner",
            Soap_Shampoo: "Seife, Shampoo",
            Towels_Linen_Toilet_Paper: "Handtücher, Bettwäsche, Toilettenpapier",
            Wardrobe_With_Hangers: "Kleiderschrank mit Bügeln",
            Iron: "Bügeleisen",
            Tv_With_Smart_Tv: "Fernseher mit Smart TV",
            Wi_Fi: "Wi-Fi",
            Crib_Chair_Toys_For_The_Little_Ones: "Kinderbett, Stuhl, Spielzeug für die Kleinen",
            Microwave_Kettle_Cooktop_Toaster: "Mikrowelle, Wasserkocher, Kochplatte, Toaster",
            Crockery_And_Cutlery: "Geschirr und Besteck",
            Refrigerator_And_Freezer: "Kühlschrank und Gefrierschrank",
            Coffee_Machine: "Kaffeemaschine",
            Terrace_Or_Balcony_Furniture: "Terrasse oder Balkon, Möbel",
            Garden_View: "Gartenblick",
            About_Costa_Calma: "Um Costa Calma",
            Apartment_Info1: "Wir bieten 2 komplett eingerichtete Apartments mit Terrasse und Schlafmöglichkeiten für jeweils 4 Personen.",
            Apartment_Info2: "Die Apartments befinden sich in einer geschlossenen Wohnanlage mit Zugang zum Schwimmbad und einem Geschäft, das 20 Meter vom Eingang entfernt liegt.",
            Apartment_1_description: "Das komfortable Apartment Colores de Fuerteventura 1 im Boho-Stil, das im März 2023 komplett renoviert wurde, ist mit allen Annehmlichkeiten ausgestattet, die einen komfortablen Aufenthalt der Gäste gewährleisten. Die gut ausgestattete moderne Küche verfügt über ein Keramikkochfeld, eine Mikrowelle mit Grill, eine Spülmaschine, einen großen Kühlschrank mit Gefrierfach, einen Toaster, eine Kaffeemaschine, einen Wasserkocher, ein komplettes Set an Töpfen und Geschirr, was das Zubereiten und Genießen von Mahlzeiten bequem macht. Der angrenzende Essbereich und die elegante Lounge, ausgestattet mit einem bequemen Schlafsofa, einem SMART-TV und einer Arbeitsecke mit schnellem WLAN, bieten eine Vielzahl von Möglichkeiten für verschiedene Aktivitäten während des Aufenthalts. Das geräumige Schlafzimmer mit bequemen Matratzen und einem großen Kleiderschrank sorgt für einen bequemen und erholsamen Schlaf. Das große Badezimmer ist ein weiterer komfortabler und stilvoller Raum für unsere Gäste. Eine geräumige Duschkabine mit komfortabler Dusche, ein großer Schrank mit Waschbecken, darüber ein beleuchteter Spiegel und notwendiges Zubehör, einschließlich Hand- und Badetüchern. Abgerundet wird das Bild durch eine moderne Waschmaschine mit Trockner, die dafür sorgt, dass Sie sich vollständig wohlfühlen können. Ein weiterer sehr wichtiger Raum ist die Terrasse im Schatten majestätischer Palmen, die mit einem Essplatz für Mahlzeiten im Freien ausgestattet ist. Der Komplex, in dem sich das Apartment befindet, sorgt zusätzlich dafür, dass sich die Gäste großartig fühlen – üppige Palmen, Ruhe, Stille und die Privatsphäre des Ortes sind nur einige der Vorteile dieser außergewöhnlichen Lage. Das nahe gelegene Einkaufszentrum mit Supermarkt, Bars, Restaurants und exotischem Basar sowie der nur etwa 650 Meter entfernte schöne Strand Sotavento machen den Aufenthalt hier zu einem wirklich wunderbaren Erlebnis.",
            Apartment_2_description: "Das komfortable Apartment Colores de Fuerteventura 2 im Boho-Stil, das im März 2023 komplett renoviert wurde, ist mit allen Annehmlichkeiten ausgestattet, die einen komfortablen Aufenthalt der Gäste gewährleisten. Die gut ausgestattete moderne Küche verfügt über ein Keramikkochfeld, eine Mikrowelle mit Grill, eine Spülmaschine, einen großen Kühlschrank mit Gefrierfach, einen Toaster, eine Kaffeemaschine, einen Wasserkocher, ein komplettes Set an Töpfen und Geschirr, was das Zubereiten und Genießen von Mahlzeiten bequem macht. Der angrenzende Essbereich und die elegante Lounge, ausgestattet mit einem bequemen Schlafsofa, einem SMART-TV und einer Arbeitsecke mit schnellem WLAN, bieten eine Vielzahl von Möglichkeiten für verschiedene Aktivitäten während des Aufenthalts. Das geräumige Schlafzimmer mit bequemen Matratzen und einem großen Kleiderschrank sorgt für einen bequemen und erholsamen Schlaf. Das große Badezimmer ist ein weiterer komfortabler und stilvoller Raum für unsere Gäste. Eine geräumige Duschkabine mit komfortabler Dusche, ein großer Schrank mit Waschbecken, darüber ein beleuchteter Spiegel und notwendiges Zubehör, einschließlich Hand- und Badetüchern. Abgerundet wird das Bild durch eine moderne Waschmaschine mit Trockner, die dafür sorgt, dass Sie sich vollständig wohlfühlen können. Ein weiterer sehr wichtiger Raum ist die Terrasse im Schatten majestätischer Palmen, die mit einem Essplatz für Mahlzeiten im Freien ausgestattet ist. Der Komplex, in dem sich das Apartment befindet, sorgt zusätzlich dafür, dass sich die Gäste großartig fühlen – üppige Palmen, Ruhe, Stille und die Privatsphäre des Ortes sind nur einige der Vorteile dieser außergewöhnlichen Lage. Das nahe gelegene Einkaufszentrum mit Supermarkt, Bars, Restaurants und exotischem Basar sowie der nur etwa 650 Meter entfernte schöne Strand Sotavento machen den Aufenthalt hier zu einem wirklich wunderbaren Erlebnis.",
            Costa_Calma_Info: "Ein kleines und ruhiges Städtchen an der Südwestküste der Insel, mit viel Grün und Palmen. Eine schöne Palmenallee führt durch die Mitte des Ortes und eignet sich hervorragend zum Spazieren und Joggen, egal zu welcher Tageszeit und bei welchem Wetter. Costa Calma ist ein idealer Ort für Menschen, die Ruhe und Frieden suchen, insbesondere für Familien mit Kindern aufgrund der Strände, ruhigen Gewässer und Wellen (Badestellen mit Rettungsschwimmern) sowie für Wassersportler. Im Städtchen gibt es 3 Supermärkte, zahlreiche Geschäfte und Boutiquen, eine Tankstelle, eine Post, Apotheken und eine Notfallversorgung. Wenn man nicht selbst kochen möchte, gibt es vor Ort viele preiswerte Bars und Restaurants. Costa Calma ist eine sehr gute Ausgangsbasis zur Erkundung der Insel, jedoch ist ein Auto notwendig – es gibt mehrere Autovermietungen vor Ort.",
        },
      },
      es: {
        translation: {
            car: "coche",
            Contact_us: "Contacta con nosotros",
            Mail: "Correo",
            Telephone: "Teléfono",
            header: "encabezado",
            About_us: "Sobre nosotros",
            Our_offer: "Nuestra oferta",
            Furnishings: "Mobiliario",
            Back: "Devolver",
            Shared_Swimming_pool: "Piscina compartida",
            Free_Parking: "Estacionamiento gratuito",
            No_Smoking_Allowed: "No se permite fumar",
            No_Pets_Allowed: "No se permiten mascotas",
            Washing_Machine_And_Dryer: "Lavadora y secadora",
            Soap_Shampoo: "Jabón, champú",
            Towels_Linen_Toilet_Paper: "Toallas, sábanas, papel higiénico",
            Wardrobe_With_Hangers: "Armario con perchas",
            Iron: "Plancha",
            Tv_With_Smart_Tv: "Televisor con Smart TV",
            Wi_Fi: "Wi-Fi",
            Crib_Chair_Toys_For_The_Little_Ones: "Cuna, silla, juguetes para los pequeños",
            Microwave_Kettle_Cooktop_Toaster: "Microondas, hervidor, cocina, tostadora",
            Crockery_And_Cutlery: "Vajilla y cubiertos",
            Refrigerator_And_Freezer: "Refrigerador y congelador",
            Coffee_Machine: "Cafetera",
            Terrace_Or_Balcony_Furniture: "Terraza o balcón, muebles",
            Garden_View: "Vista al jardín",
            About_Costa_Calma: "Acerca de Costa Calma",
            Apartment_Info1: "Ofrecemos 2 apartamentos completamente amueblados con terraza y espacio para dormir para 4 personas en cada uno.",
            Apartment_Info2: "Los apartamentos están ubicados en una urbanización cerrada con acceso a la piscina y un comercio situado a 20 metros de la entrada.",
            Apartment_1_description: "El cómodo apartamento Colores de Fuerteventura 1, de estilo boho y completamente renovado en marzo de 2023, está equipado con todas las comodidades que aseguran una estancia confortable para los huéspedes. La moderna cocina bien equipada cuenta con una placa de cerámica, microondas con grill, lavavajillas, gran nevera con congelador, tostadora, cafetera, hervidor eléctrico, un juego completo de ollas y vajilla, lo que permite preparar y disfrutar de las comidas cómodamente. El área de comedor adyacente y la elegante sala de estar, equipada con un cómodo sofá cama, TV SMART y un rincón de trabajo con internet inalámbrico rápido, ofrecen una gama completa de posibilidades para diversas actividades durante la estancia. El espacioso dormitorio con colchones cómodos y un amplio armario asegura un sueño cómodo y reparador. El gran baño es otro espacio conveniente y elegante para nuestros huéspedes. Una espaciosa cabina de ducha con una ducha cómoda, un gran gabinete con lavabo sobre el cual se encuentra un espejo iluminado y accesorios necesarios, incluidas toallas de baño y de mano. Completando la imagen, una moderna lavadora con secadora asegura que pueda sentirse completamente cómodo. Otro espacio muy importante es la terraza a la sombra de majestuosas palmeras, equipada con un conjunto de comedor para comidas al aire libre. El complejo en el que se encuentra el apartamento adicionalmente asegura que los huéspedes se sientan genial – palmeras frondosas, paz, tranquilidad e intimidad del lugar son solo algunas de las ventajas de esta ubicación excepcional. El cercano centro comercial con supermercado, bares, restaurantes y bazar exótico, y la hermosa playa de Sotavento, ubicada a solo unos 650 metros de distancia, hacen que quedarse aquí sea una experiencia realmente maravillosa.",
            Apartment_2_description: "El cómodo apartamento Colores de Fuerteventura 2, de estilo boho y completamente renovado en marzo de 2023, está equipado con todas las comodidades que aseguran una estancia confortable para los huéspedes. La moderna cocina bien equipada cuenta con una placa de cerámica, microondas con grill, lavavajillas, gran nevera con congelador, tostadora, cafetera, hervidor eléctrico, un juego completo de ollas y vajilla, lo que permite preparar y disfrutar de las comidas cómodamente. El área de comedor adyacente y la elegante sala de estar, equipada con un cómodo sofá cama, TV SMART y un rincón de trabajo con internet inalámbrico rápido, ofrecen una gama completa de posibilidades para diversas actividades durante la estancia. El espacioso dormitorio con colchones cómodos y un amplio armario asegura un sueño cómodo y reparador. El gran baño es otro espacio conveniente y elegante para nuestros huéspedes. Una espaciosa cabina de ducha con una ducha cómoda, un gran gabinete con lavabo sobre el cual se encuentra un espejo iluminado y accesorios necesarios, incluidas toallas de baño y de mano. Completando la imagen, una moderna lavadora con secadora asegura que pueda sentirse completamente cómodo. Otro espacio muy importante es la terraza a la sombra de majestuosas palmeras, equipada con un conjunto de comedor para comidas al aire libre. El complejo en el que se encuentra el apartamento adicionalmente asegura que los huéspedes se sientan genial – palmeras frondosas, paz, tranquilidad e intimidad del lugar son solo algunas de las ventajas de esta ubicación excepcional. El cercano centro comercial con supermercado, bares, restaurantes y bazar exótico, y la hermosa playa de Sotavento, ubicada a solo unos 650 metros de distancia, hacen que quedarse aquí sea una experiencia realmente maravillosa.",
            Costa_Calma_Info: "Un pueblo pequeño y tranquilo en la costa suroeste de la isla, con mucha vegetación y palmeras. Una hermosa avenida de palmeras atraviesa el centro del pueblo, convirtiéndolo en un lugar excelente para pasear y hacer jogging a cualquier hora del día y bajo cualquier clima. Costa Calma es un lugar ideal para aquellos que buscan paz y tranquilidad, especialmente familias con niños debido a sus playas, aguas tranquilas y olas (zonas de baño con salvavidas) y los aficionados a los deportes acuáticos. En el pueblo hay 3 supermercados, numerosas tiendas y boutiques, una gasolinera, una oficina de correos, farmacias y atención médica de urgencia. Si no se quiere cocinar, hay muchos bares y restaurantes asequibles en el lugar. Costa Calma es una muy buena base para explorar la isla, pero es necesario un coche – hay varias agencias de alquiler de coches disponibles localmente.",
        },
      },
    },
  });

export default i18n;