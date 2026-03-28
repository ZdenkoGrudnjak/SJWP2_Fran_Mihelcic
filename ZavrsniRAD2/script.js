
const quizData = {
    znanost: [
        { question: "Koji planet u Sunčevom sustavu je najveći?", options: ["Saturn", "Jupiter", "Neptun", "Uran"], correct: 1, explanation: "Jupiter je najveći planet – toliko velik da bi svi ostali planeti stali unutar njega." },
        { question: "Koji je kemijski simbol za vodu?", options: ["CO2", "O2", "H2O", "NaCl"], correct: 2, explanation: "Voda se sastoji od dva atoma vodika (H) i jednog atoma kisika (O), pa je formula H₂O." },
        { question: "Koliko kromosoma ima ljudska stanica?", options: ["23", "46", "48", "52"], correct: 1, explanation: "Ljudi imaju 46 kromosoma raspoređenih u 23 para. Spolne stanice imaju samo 23." },
        { question: "Tko je izumio žarulju?", options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"], correct: 1, explanation: "Thomas Edison patentirao je praktičnu žarulju sa žarnom niti 1879. godine." },
        { question: "Koji je najtvrdji prirodni materijal na Zemlji?", options: ["Zlato", "Željezo", "Dijamant", "Platina"], correct: 2, explanation: "Dijamant je 10/10 na Mohsovoj ljestvici tvrdoće – najtvrdji poznati prirodni materijal." },
        { question: "Koja je najbrža životinja na svijetu?", options: ["Sokol", "Gepard", "Orao", "Tuna"], correct: 1, explanation: "Gepard može dostići 112 km/h u kratkim sprintovima. Sokol je brži u ronjenju, ali ne u trčanju." },
        { question: "Koji organ u ljudskom tijelu filtrira krv?", options: ["Srce", "Pluća", "Bubreg", "Jetra"], correct: 2, explanation: "Bubrezi filtriraju oko 200 litara krvi dnevno i izbacuju otpadne tvari putem urina." },
        { question: "Koliko planeta ima Sunčev sustav?", options: ["7", "8", "9", "10"], correct: 1, explanation: "Od 2006. Sunčev sustav ima 8 planeta – Pluton je preklasificiran kao patuljasti planet." },
        { question: "Koji je glavni plin u Zemljinoj atmosferi?", options: ["Kisik", "Dušik", "Ugljikov dioksid", "Vodik"], correct: 1, explanation: "Dušik čini oko 78% atmosfere, kisik oko 21%, a ostali plinovi svega 1%." },
        { question: "Što mjeri Richterova ljestvica?", options: ["Brzinu vjetra", "Jačinu potresa", "Količinu oborina", "Temperaturu"], correct: 1, explanation: "Richterova ljestvica mjeri magnitude potresa. Svaki stupanj znači 10× veću amplitudu i ~32× više energije." },
        { question: "Koji je najbliži planet Suncu?", options: ["Venera", "Merkur", "Mars", "Zemlja"], correct: 1, explanation: "Merkur je najbliži Suncu – orbita mu traje samo 88 zemaljskih dana." },
        { question: "Koliko kostiju ima ljudsko tijelo (otprilike)?", options: ["106", "206", "306", "156"], correct: 1, explanation: "Odrasli ima 206 kostiju. Bebe imaju oko 270 – mnoge se spoje do odrasle dobi." },
        { question: "Koja žlijezda proizvodi inzulin?", options: ["Štitnjača", "Gusteraca", "Nadbubrežna žlijezda", "Hipofiza"], correct: 1, explanation: "Gušterača proizvodi inzulin u beta stanicama Langerhansovih otočića. Bez njega stanice ne mogu koristiti šećer." },
        { question: "Koji je najveći organ u ljudskom tijelu?", options: ["Jetra", "Mozak", "Koža", "Srce"], correct: 2, explanation: "Koža je najveći organ – pokriva oko 2 m² površine i teži između 3,5 i 10 kg." },
        { question: "Što je fotosinteza?", options: ["Raspadanje hrane", "Stvaranje hrane od svjetlosti", "Disanje", "Cirkulacija krvi"], correct: 1, explanation: "Fotosinteza je proces kojim biljke koriste sunčevu svjetlost, CO₂ i vodu za stvaranje glukoze i kisika." },
        { question: "Koji element ima simbol Fe?", options: ["Fluor", "Fosfor", "Željezo", "Fermij"], correct: 2, explanation: "Fe dolazi od latinskog 'ferrum' (željezo). Otuda i pojam 'ferozno' za spoje željeza." },
        { question: "Koliko očiju ima pauk (obično)?", options: ["2", "4", "6", "8"], correct: 3, explanation: "Većina pauka ima 8 očiju. Neke vrste ih imaju 6 ili manje, ali 8 je najčešći broj." },
        { question: "Koji je najmanji ptica na svijetu?", options: ["Svrčak", "Kolibrić", "Vrabac", "Sova"], correct: 1, explanation: "Kolibrić (patuljasti kolibrić) je najmanji ptica – teži samo oko 1,6 grama!" },
        { question: "Koja krvna grupa je univerzalni donor?", options: ["A", "B", "AB", "0"], correct: 3, explanation: "Krvna grupa 0- može se dati svim krvnim grupama jer nema A, B ni Rh antigena." },
        { question: "Koliko mozgova ima hobotnica?", options: ["1", "3", "9", "Nema mozak"], correct: 2, explanation: "Hobotnica ima 9 'mozgova': jedan centralni i po jedan u svakoj od 8 krakova koji djeluju samostalno." }
    ],
    povijest: [
        { question: "Kada je Hrvatska postala neovisna država?", options: ["1990.", "1991.", "1992.", "1993."], correct: 1, explanation: "Hrvatska je proglasila neovisnost 25. lipnja 1991., a međunarodno ju je priznata 15. siječnja 1992." },
        { question: "Tko je napisao 'Historiae naturalis'?", options: ["Plinije Stariji", "Julije Cezar", "Herodot", "Tacit"], correct: 0, explanation: "Plinije Stariji napisao je ovu enciklopediju u 37 knjiga – jednu od prvih sustavnih enciklopedija u povijesti." },
        { question: "Koja je godina bila pad Zapadnog Rimskog Carstva?", options: ["476.", "500.", "410.", "1453."], correct: 0, explanation: "Pad Zapadnog Rimskog Carstva je 476. g. kada je Romul Augustul svrgnuti od Odoakra. 1453. je pad Bizanta." },
        { question: "Tko je prvi čovjek na Mjesecu?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], correct: 1, explanation: "Neil Armstrong 20. srpnja 1969. izrekao je čuvenu rečenicu: 'Mali korak za čovjeka, veliki korak za čovječanstvo.'" },
        { question: "Kada je izgrađen Koloseum u Rimu?", options: ["70. godine", "100. godine", "50. godine", "150. godine"], correct: 0, explanation: "Kolosej je gradnji počeo oko 70. g. n.e. za cara Vespazijana i završen 80. g. pod Titom." },
        { question: "Koji je zadnji hrvatski kralj prije ujedinjenja s Mađarskom?", options: ["Zvonimir", "Tomislav", "Krešimir", "Petar"], correct: 0, explanation: "Dmitar Zvonimir, okrunjen 1076., jedan od najpoznatijih. Posljednji je bio Petar Svačić, poginuo 1097." },
        { question: "Kada je započeo Prvi svjetski rat?", options: ["1912.", "1914.", "1916.", "1918."], correct: 1, explanation: "Rat je počeo 28. srpnja 1914. nakon atentata na nadvojvodu Franju Ferdinanda u Sarajevu." },
        { question: "Tko je otkrio Ameriku 1492.?", options: ["Amerigo Vespucci", "Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan"], correct: 1, explanation: "Kolumbo je 12. listopada 1492. iskrcao se na Bahamima. Amerigo Vespucci je shvatio da je to novi kontinent." },
        { question: "Kada je pao Berlinski zid?", options: ["1987.", "1989.", "1991.", "1993."], correct: 1, explanation: "Berlinski zid pao je 9. studenog 1989. – jedan od najvažnijih trenutaka kraja Hladnog rata." },
        { question: "Koji je rimski bog rata?", options: ["Jupiter", "Mars", "Vulcan", "Apollo"], correct: 1, explanation: "Mars je rimski bog rata, ekvivalent grčkog Aresa. Po njemu je imenovan i planet Mars." },
        { question: "Kada je započeo Drugi svjetski rat?", options: ["1938.", "1939.", "1940.", "1941."], correct: 1, explanation: "Drugi svjetski rat počeo je 1. rujna 1939. napadom Njemačke na Poljsku." },
        { question: "Tko je bio prvi predsjednik SAD-a?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], correct: 1, explanation: "George Washington bio je prvi predsjednik SAD-a od 1789. do 1797. – mogao je biti i treći ali je odbio." },
        { question: "Kada je izumljena štamparska mašina?", options: ["1450.", "1500.", "1400.", "1550."], correct: 0, explanation: "Johannes Gutenberg izumio je tiskarsku prešu s pomičnim slovima oko 1450. – revolucija u širenju znanja." },
        { question: "Koji je znameniti zid gradila Kina da se zaštiti od nomada?", options: ["Berlinski zid", "Kineski zid", "Hadrijanov zid", "Zid plača"], correct: 1, explanation: "Kineski zid proteže se na više od 21.000 km. Gradio se u više faza od 7. st. pr.Kr. do 17. st. n.e." },
        { question: "Tko je bio faraon koji je sagradio Veliku piramidu u Gizi?", options: ["Tutankamon", "Keops", "Ramses", "Ehnaton"], correct: 1, explanation: "Keops (Khufu) sagradio je Veliku piramidu oko 2560. pr.Kr. – visoka je bila 146,5 metara." },
        { question: "Kada je Hrvatska ušla u EU?", options: ["2011.", "2013.", "2015.", "2010."], correct: 1, explanation: "Hrvatska je postala 28. članica Europske unije 1. srpnja 2013. godine." },
        { question: "Koji je grad bio prijestolnica Bizantskog Carstva?", options: ["Rim", "Carigrad", "Atina", "Solun"], correct: 1, explanation: "Carigrad (danas Istanbul) bio je prijestolnica Bizanta od 330. do 1453., kada ga je osvojio osmanski sultan Mehmed II." },
        { question: "Tko je napisao 'Božanstvenu komediju'?", options: ["Shakespeare", "Dante Alighieri", "Homer", "Virgil"], correct: 1, explanation: "Dante Alighieri napisao je Božanstvenu komediju između 1308. i 1320. – jedno od temelja talijanske književnosti." },
        { question: "Kada je pala Bastilja (početak Francuske revolucije)?", options: ["1789.", "1799.", "1779.", "1800."], correct: 0, explanation: "Bastilja je pala 14. srpnja 1789. – taj datum Francuska i danas slavi kao nacionalni praznik." },
        { question: "Tko je bio Napoleon Bonaparte?", options: ["Francuski književnik", "Francuski vojskovođa i car", "Engleski kralj", "Pruski general"], correct: 1, explanation: "Napoleon je bio francuski general koji je postao car 1804. i osvojio velik dio Europe prije poraza 1815." }
    ],
    geografija: [
        { question: "Koji je glavni grad Hrvatske?", options: ["Split", "Zagreb", "Rijeka", "Dubrovnik"], correct: 1, explanation: "Zagreb je glavni grad Hrvatske, smješten uz rijeku Savu u sjeverozapadnom dijelu zemlje." },
        { question: "Koja je najdulja rijeka u Hrvatskoj?", options: ["Sava", "Drava", "Dunav", "Neretva"], correct: 0, explanation: "Sava je najdulja rijeka u Hrvatskoj (562 km u RH). Teče kroz Zagreb i utječe u Dunav kod Beograda." },
        { question: "Koliko otoka ima Hrvatska (otprilike)?", options: ["500", "1000", "1500", "2000"], correct: 1, explanation: "Hrvatska ima oko 1244 otoka, hridi i grebena – jedno od najrazvedenijih primorja u Europi." },
        { question: "Koji je najviši vrh Hrvatske?", options: ["Velebit", "Dinara", "Plješevica", "Risnjak"], correct: 1, explanation: "Dinara (1831 m) je najviši vrh Hrvatske, smještena na granici s Bosnom i Hercegovinom." },
        { question: "Koja je najveća pustinja na svijetu?", options: ["Sahara", "Arabska", "Gobi", "Antarktika"], correct: 0, explanation: "Sahara je najveća vruća pustinja (9,2 mil km²). Antarktika je tehnički ledena pustinja i još je veća." },
        { question: "Koji je najveći ocean na svijetu?", options: ["Atlantski", "Indijski", "Tihi", "Arktički"], correct: 2, explanation: "Tihi ocean pokriva više od 165 milijuna km² – više od svih kopnenih površina zajedno." },
        { question: "Koji je glavni grad Japana?", options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"], correct: 2, explanation: "Tokyo je glavni grad Japana i jedno od najvećih gradskih područja na svijetu s oko 37 milijuna stanovnika." },
        { question: "Kroz koji grad teče rijeka Nil?", options: ["Kairo", "Lagos", "Nairobi", "Khartoum"], correct: 0, explanation: "Nil teče kroz Kairo, glavni grad Egipta. Nil je najdulja rijeka na svijetu (6650 km)." },
        { question: "Koja država ima najviše stanovnika?", options: ["Indija", "Kina", "SAD", "Indonezija"], correct: 1, explanation: "Kina ima oko 1,4 milijarde stanovnika, iako Indija brzo sustižu i možda ju je već prestigla." },
        { question: "Koji je najhladniji kontinent?", options: ["Sjeverna Amerika", "Europa", "Antarktika", "Azija"], correct: 2, explanation: "Antarktika je najhladniji kontinent – najniža izmjerena temperatura je -89,2°C (Vostok, 1983.)." },
        { question: "Koji je najveći otok na svijetu?", options: ["Madagaskar", "Grønland", "Nova Gvineja", "Borneo"], correct: 1, explanation: "Grenland je najveći otok s površinom od oko 2,1 milijuna km². Australija se ne broji jer je kontinent." },
        { question: "Koji je najviši vrh na svijetu?", options: ["K2", "Kilimanjaro", "Mount Everest", "Mont Blanc"], correct: 2, explanation: "Mount Everest visok je 8848,86 m (remjerenje 2020.). Nalazi se na granici Nepala i Tibeta." },
        { question: "Koja je najmanja država na svijetu (po površini)?", options: ["Monako", "Vatikan", "San Marino", "Lihtenštajn"], correct: 1, explanation: "Vatikan je najmanji – svega 0,44 km². Monako je najmanji po površini suverenoj državom koja nije enklavna." },
        { question: "Koji je glavni grad Australije?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2, explanation: "Canberra je glavni grad Australije, izgrađena kao kompromis između Sydneyja i Melbournea 1913. godine." },
        { question: "Koja je najveća zemlja po površini?", options: ["Kina", "SAD", "Rusija", "Kanada"], correct: 2, explanation: "Rusija je s 17,1 milijun km² dvostruko veća od Kanade, koja je na drugom mjestu." },
        { question: "Koliko kontinenata ima na Zemlji?", options: ["5", "6", "7", "8"], correct: 2, explanation: "Postoji 7 kontinenata: Afrika, Antarktika, Azija, Australija/Oceanija, Europa, Sjeverna i Južna Amerika." },
        { question: "Koji je najveći slap na svijetu?", options: ["Niagara", "Viktoria", "Angel", "Iguazu"], correct: 2, explanation: "Angel Falls u Venezueli visok je 979 metara – 16 puta viši od Nijagare!" },
        { question: "Koji je najdulji rijeka u Europi?", options: ["Rajna", "Dunav", "Volga", "Loara"], correct: 2, explanation: "Volga (3690 km) je najdulja europska rijeka i teče samo kroz Rusiju, ulivajući se u Kaspijsko more." },
        { question: "Koji je glavni grad Kanade?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 2, explanation: "Ottawa je glavni grad Kanade. Toronto je najveći grad, ali Ottawa je odabrana kao kompromis 1857. godine." },
        { question: "Koji je najveći jezero u Africi?", options: ["Tanganika", "Malawi", "Viktorija", "Albert"], correct: 2, explanation: "Viktorijino jezero je najveće afričko jezero i treće najveće slatkovodno jezero na svijetu." }
    ],
    opce: [
        { question: "Tko je napisao 'Krim i kaznu'?", options: ["Tolstoj", "Dostojevski", "Gogolj", "Čehov"], correct: 1, explanation: "Fjodor Dostojevski napisao je Zločin i kaznu 1866. – psihološki roman o grijehu i iskupljenju." },
        { question: "Koji sport se igra na Wimbledonskom turniru?", options: ["Golf", "Tenis", "Kriket", "Ragbi"], correct: 1, explanation: "Wimbledon je najstariji i najprestižniji teniski turnir – igra se od 1877. na travnjaku u Londonu." },
        { question: "Koja je valuta Japana?", options: ["Yuan", "Won", "Jen", "Rupee"], correct: 2, explanation: "Japanski jen (¥) je valuta Japana. Yuan je kineski, Won korejski, a Rupija indijska valuta." },
        { question: "Koliko tipki ima standardna klavijatura (piano)?", options: ["66", "76", "88", "96"], correct: 2, explanation: "Standardni klavir ima 88 tipki – 52 bijele i 36 crnih, u rasponu od A0 do C8." },
        { question: "Koja boja je napravljena od miješanja plave i žute?", options: ["Narančasta", "Ljubičasta", "Zelena", "Smeđa"], correct: 2, explanation: "Plava + žuta = zelena. Ovo je osnovno pravilo miješanja pigmenata (subtraktivno miješanje boja)." },
        { question: "Koji je najpopularniji sport na svijetu?", options: ["Košarka", "Tenis", "Nogomet", "Odbojka"], correct: 2, explanation: "Nogomet prati oko 4 milijarde navijača globalno – daleko ispred svih ostalih sportova." },
        { question: "Tko je naslikao 'Mona Lisu'?", options: ["Mikelanđelo", "Leonardo da Vinci", "Rafael", "Boticelli"], correct: 1, explanation: "Leonardo da Vinci naslikao je Mona Lisu između 1503. i 1519. Slika se čuva u Louvreu u Parizu." },
        { question: "Koja je najveća životinja na svijetu?", options: ["Slon", "Plavi kit", "Žirafa", "Bijeli medvjed"], correct: 1, explanation: "Plavi kit je najveća životinja ikad – može narasti do 33 metra i težiti 190 tona." },
        { question: "Koliko životinja ima u kineskom horoskopu?", options: ["10", "12", "14", "16"], correct: 1, explanation: "Kineski horoskop ima 12 životinja: štakor, vol, tigar, zec, zmaj, zmija, konj, ovca, majmun, pijetao, pas, svinja." },
        { question: "Koji instrument ima 88 tipki?", options: ["Cembalo", "Klavir", "Orgulje", "Sintisajzer"], correct: 1, explanation: "Standardni klavir ima 88 tipki (52 bijele + 36 crnih). Cembalo obično ima samo 60." },
        { question: "Koliko minuta traje nogometna utakmica (bez produžetaka)?", options: ["80", "90", "100", "120"], correct: 1, explanation: "Standardna nogometna utakmica traje 90 minuta – dva poluvremena od 45 minuta." },
        { question: "Koja je najviša nagrada u filmskoj industriji?", options: ["Zlatni globus", "Oscar", "BAFTA", "Zlatni lav"], correct: 1, explanation: "Oscar (Academy Award) je najprestižnija filmska nagrada, dodjeljuje se od 1929. u Los Angelesu." },
        { question: "Koja životinja je simbol mira?", options: ["Orao", "Golub", "Leptir", "Labud"], correct: 1, explanation: "Golub (bijeli golub s grančicom masline) simbol je mira od biblijskog prikaza Noinog goluba." },
        { question: "Koliko boja ima duga?", options: ["5", "6", "7", "8"], correct: 2, explanation: "Duga ima 7 boja: crvena, narančasta, žuta, zelena, plava, indigo (tamnoplava), ljubičasta." },
        { question: "Koji je najpoznatiji bend svih vremena (po prodaji)?", options: ["The Beatles", "Queen", "Rolling Stones", "Elvis Presley"], correct: 0, explanation: "The Beatles prodali su više od 600 milijuna albuma – više od bilo kojeg drugog glazbenog izvođača." },
        { question: "Koja životinja spava najviše sati dnevno?", options: ["Mačka", "Pas", "Koala", "Sova"], correct: 2, explanation: "Koale spavaju 18-22 sata dnevno! Eukaliptusovo lišće koje jedu je teško probavljivo i daje malo energije." },
        { question: "Koja je najprodavanija knjiga svih vremena (osim Biblije)?", options: ["Harry Potter", "Don Quixote", "Gospodar prstenova", "Mali princ"], correct: 1, explanation: "Don Quijote Miguela de Cervantesa prodao je više od 500 milijuna primjeraka od objave 1605." },
        { question: "Koji je najgledaniji sport na Olimpijskim igrama?", options: ["Atletika", "Plivanje", "Gimnastika", "Košarka"], correct: 0, explanation: "Atletika je najgledaniji olimpijski sport – utrke i skiokovi privlače najveći broj gledalaca." },
        { question: "Tko je izumio telefon?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Marconi"], correct: 2, explanation: "Alexander Graham Bell patentirao je telefon 1876. iako je Elisha Gray sličan patent podnio isti dan." },
        { question: "Koji je najveći glazbeni festival na svijetu?", options: ["Coachella", "Glastonbury", "Summerfest", "Lollapalooza"], correct: 2, explanation: "Summerfest u Milwaukeeju (SAD) je Guinnessom potvrđen kao najveći glazbeni festival – oko 800.000 posjetitelja godišnje." }
    ],
    tehnologija: [
        { question: "Koja kompanija je razvila operacijski sustav Android?", options: ["Apple", "Microsoft", "Google", "Samsung"], correct: 2, explanation: "Google kupio je Android Inc. 2005. i razvio ga u najrašireniji mobilni OS – koristi ga 70%+ smartfona." },
        { question: "Što znači kratica HTML?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Transfer Meta Link"], correct: 0, explanation: "HTML (HyperText Markup Language) je temeljni jezik za izradu web stranica, uveden 1991. od strane Tima Berners-Leeja." },
        { question: "Koji programski jezik koristi Python kao simbol?", options: ["Zmija", "Orao", "Lav", "Pingvin"], correct: 0, explanation: "Python je nazvan po britanskoj komediji Monty Python, a simbol je zmija. Poznat je po čitljivom kodu." },
        { question: "Što je 'bug' u programiranju?", options: ["Nova funkcija", "Greška u kodu", "Vrsta podataka", "Web server"], correct: 1, explanation: "Bug je greška ili defekt u kodu. Naziv dolazi od 1947. kad je Grace Hopper pronašla pravu kornjaču u računalu Harvard Mark II." },
        { question: "Koji je najpopularniji programski jezik prema istraživanjima (2024)?", options: ["Java", "C++", "Python", "JavaScript"], correct: 2, explanation: "Python je konzistentno na vrhu ljestvica popularnosti zbog primjene u AI/ML, znanosti i edukaciji." },
        { question: "Što znači 'CPU' u računarstvu?", options: ["Central Processing Unit", "Computer Power Unit", "Core Program Utility", "Central Program Update"], correct: 0, explanation: "CPU (Central Processing Unit) je 'mozak' računala – izvršava instrukcije i koordinira ostale komponente." },
        { question: "Tko je osnovao Apple?", options: ["Bill Gates", "Steve Jobs i Steve Wozniak", "Elon Musk", "Jeff Bezos"], correct: 1, explanation: "Apple su osnovali Steve Jobs, Steve Wozniak i Ronald Wayne 1976. u garaži u Californiji." },
        { question: "Što je Internet of Things (IoT)?", options: ["Mreža računala", "Mreža fizičkih uređaja spojenih na internet", "Vrsta virusa", "Protokol za e-mail"], correct: 1, explanation: "IoT su fizički uređaji (hladnjaci, auti, žarulje) spojeni na internet koji prikupljaju i razmjenjuju podatke." },
        { question: "Koji je najdulje korišten operacijski sustav za servere?", options: ["Windows Server", "Linux", "macOS Server", "FreeBSD"], correct: 1, explanation: "Linux pokreće više od 96% svjetskih servera, gotovo sve superračunale i Android uređaje." },
        { question: "Što je 'open source' softver?", options: ["Softver koji košta", "Softver čiji je kod javan i slobodan", "Softver samo za poslovne korisnike", "Softver bez ažuriranja"], correct: 1, explanation: "Open source znači da je izvorni kod javan, svima dostupan za pregled, izmjenu i distribuciju." },
        { question: "Što je Wi-Fi?", options: ["Wireless Fidelity", "Wide Field Internet", "Wireless File Interface", "Web Frequency Interface"], correct: 0, explanation: "Wi-Fi (Wireless Fidelity) je tehnologija bežičnog umrežavanja temeljena na IEEE 802.11 standardima." },
        { question: "Koliko bita ima 1 bajt?", options: ["4", "8", "16", "32"], correct: 1, explanation: "1 bajt = 8 bita. Bit je najmanji jedinica podataka (0 ili 1), a bajt je osnovna adresabilna jedinica memorije." },
        { question: "Što je algoritam?", options: ["Vrsta hardware-a", "Niz koraka za rješavanje problema", "Programski jezik", "Vrsta baze podataka"], correct: 1, explanation: "Algoritam je skup preciznih uputa ili koraka za rješavanje nekog problema ili obavljanje zadatka." },
        { question: "Što je URL?", options: ["Uniform Resource Locator", "Universal Runtime Language", "User Resource Link", "Unified Remote Login"], correct: 0, explanation: "URL (Uniform Resource Locator) je adresa web resursa – npr. https://www.google.com je URL." },
        { question: "Koje je ime prvog uspješnog komercijalnog video računalnog igrača?", options: ["Atari Pong", "Space Invaders", "Pac-Man", "Donkey Kong"], correct: 0, explanation: "Atari Pong (1972.) bio je prva komercijalno uspješna video igra. Simulira stolni tenis." },
        { question: "Što je 'phishing' napad?", options: ["Vrsta antivirusa", "Hakiranje hardware-a", "Prijevara za krađu podataka lažnim web stranicama", "Bežična krađa podataka"], correct: 2, explanation: "Phishing je cyberkriminalna tehnika gdje napadači oponašaju legitimne web stranice ili e-mailove da bi ukrali lozinke i podatke." },
        { question: "Što je blockchain?", options: ["Vrsta procesora", "Decentralizirana distribuirana baza podataka", "Vrsta virusa", "Protokol za e-mail"], correct: 1, explanation: "Blockchain je lančana struktura podatkovnih blokova – decentralizirana, nepromjenjiva i transparentna. Temelj je kriptovaluta." },
        { question: "Koji gigant je razvio ChatGPT?", options: ["Google", "Microsoft", "OpenAI", "Meta"], correct: 2, explanation: "ChatGPT je razvio OpenAI, kompanija osnovana 2015. Sam Altman je CEO. Microsoft je velik investitor." },
        { question: "Što je RAM memorija?", options: ["Trajna memorija za OS", "Privremena brza memorija za aktivne programe", "Memorija grafičke kartice", "Vrsta tvrdog diska"], correct: 1, explanation: "RAM (Random Access Memory) je brza, privremena memorija – podatci se brišu kad ugasiš računalo." },
        { question: "Koji protokol se koristi za sigurni prijenos podataka na webu?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], correct: 2, explanation: "HTTPS (HTTP Secure) koristi TLS/SSL enkripciju – prepoznaš ga po lokot ikoni u pregledniku." }
    ]
};


const difficultyConfig = {
    easy:   { label: '😊 Lagano', time: 45, questions: 8,  color: 'bg-green-100 text-green-700' },
    medium: { label: '🤔 Srednje', time: 30, questions: 10, color: 'bg-yellow-100 text-yellow-700' },
    hard:   { label: '🔥 Teško',   time: 15, questions: 15, color: 'bg-red-100 text-red-700' }
};


let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 30;
let correctCount = 0;
let answered = false;
let quizHistory = [];
let currentDifficulty = 'easy';


let currentStreak = 0;
let bestStreak = 0;
let maxCombo = 1;


function setDifficulty(diff) {
    currentDifficulty = diff;
    ['easy', 'medium', 'hard'].forEach(d => {
        const btn = document.getElementById('diff-' + d);
        if (btn) {
            btn.classList.remove('active', 'ring-2', 'ring-offset-1');
            if (d === 'easy')   btn.className = 'diff-btn bg-green-50 border-2 border-green-300 text-green-800 font-bold py-2 px-5 rounded-xl text-sm';
            if (d === 'medium') btn.className = 'diff-btn bg-yellow-50 border-2 border-yellow-300 text-yellow-800 font-bold py-2 px-5 rounded-xl text-sm';
            if (d === 'hard')   btn.className = 'diff-btn bg-red-50 border-2 border-red-300 text-red-800 font-bold py-2 px-5 rounded-xl text-sm';
        }
    });
    const active = document.getElementById('diff-' + diff);
    if (active) {
        active.classList.add('active');
        if (diff === 'easy')   active.className = 'diff-btn active bg-green-200 border-2 border-green-500 text-green-900 font-bold py-2 px-5 rounded-xl text-sm shadow-md';
        if (diff === 'medium') active.className = 'diff-btn active bg-yellow-200 border-2 border-yellow-500 text-yellow-900 font-bold py-2 px-5 rounded-xl text-sm shadow-md';
        if (diff === 'hard')   active.className = 'diff-btn active bg-red-200 border-2 border-red-500 text-red-900 font-bold py-2 px-5 rounded-xl text-sm shadow-md';
    }
}


function loadHistory() {
    try {
        const saved = localStorage.getItem('quizHistory');
        if (saved) quizHistory = JSON.parse(saved);
    } catch (e) {
        console.error('Greška pri učitavanju povijesti:', e);
        quizHistory = [];
    }
}

function saveQuizResult(category, score, correct, total, accuracy) {
    const result = {
        date: new Date().toISOString(),
        category, score, correct, total, accuracy,
        difficulty: currentDifficulty,
        categoryName: getCategoryName(category)
    };
    quizHistory.unshift(result);
    if (quizHistory.length > 50) quizHistory = quizHistory.slice(0, 50);
    try { localStorage.setItem('quizHistory', JSON.stringify(quizHistory)); } catch (e) {}
}

function getCategoryName(category) {
    const names = { 'znanost': 'Znanost', 'povijest': 'Povijest', 'geografija': 'Geografija', 'opce': 'Opća kultura', 'tehnologija': 'Tehnologija' };
    return names[category] || category;
}

function getCategoryEmoji(category) {
    const e = { 'znanost': '🔬', 'povijest': '🏛️', 'geografija': '🌍', 'opce': '💡', 'tehnologija': '💻' };
    return e[category] || '📚';
}

function getStatistics() {
    if (!quizHistory || quizHistory.length === 0) {
        return { totalQuizzes: 0, averageScore: 0, averageAccuracy: 0, bestScore: 0, favoriteCategory: '-', totalQuestions: 0, totalCorrect: 0 };
    }
    const totalQuizzes = quizHistory.length;
    const totalScore = quizHistory.reduce((s, q) => s + (q.score || 0), 0);
    const totalAccuracy = quizHistory.reduce((s, q) => s + (q.accuracy || 0), 0);
    const bestScore = Math.max(...quizHistory.map(q => q.score || 0));
    const totalQuestions = quizHistory.reduce((s, q) => s + (q.total || 0), 0);
    const totalCorrect = quizHistory.reduce((s, q) => s + (q.correct || 0), 0);
    const categoryCounts = {};
    quizHistory.forEach(q => { categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1; });
    const favoriteCategory = Object.keys(categoryCounts).reduce((a, b) => categoryCounts[a] > categoryCounts[b] ? a : b);
    return { totalQuizzes, averageScore: Math.round(totalScore / totalQuizzes), averageAccuracy: Math.round(totalAccuracy / totalQuizzes), bestScore, favoriteCategory: getCategoryName(favoriteCategory), totalQuestions, totalCorrect };
}


function getCategoryStats() {
    const cats = ['znanost', 'povijest', 'geografija', 'opce', 'tehnologija'];
    return cats.map(cat => {
        const games = quizHistory.filter(q => q.category === cat);
        if (games.length === 0) return { cat, accuracy: 0, games: 0 };
        const avg = Math.round(games.reduce((s, g) => s + g.accuracy, 0) / games.length);
        return { cat, accuracy: avg, games: games.length };
    });
}


function updateCategoryProgress() {
    const cats = ['znanost', 'povijest', 'geografija', 'opce', 'tehnologija'];
    cats.forEach(cat => {
        const games = quizHistory.filter(q => q.category === cat);
        const bar = document.getElementById('prog-' + cat);
        const txt = document.getElementById('prog-text-' + cat);
        if (!bar || !txt) return;
        if (games.length === 0) { bar.style.width = '0%'; txt.textContent = 'Još nisi igrao'; return; }
        const avg = Math.round(games.reduce((s, g) => s + g.accuracy, 0) / games.length);
        bar.style.width = avg + '%';
        txt.textContent = `Prosj. točnost: ${avg}% · ${games.length} ${games.length === 1 ? 'kviz' : 'kvizova'}`;
    });
}


function startQuiz(category) {
    currentCategory = category;
    const cfg = difficultyConfig[currentDifficulty];
    timeLeft = cfg.time;

    currentQuestions = [...quizData[category]];
    currentQuestions.sort(() => Math.random() - 0.5);
    currentQuestions = currentQuestions.slice(0, cfg.questions);

    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    currentStreak = 0;
    bestStreak = 0;

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('results-screen').classList.add('hidden');

    const badge = document.getElementById('quiz-diff-badge');
    if (badge) { badge.textContent = cfg.label; badge.className = `text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.color}`; }
    const catBadge = document.getElementById('quiz-category-badge');
    if (catBadge) catBadge.textContent = getCategoryEmoji(category) + ' ' + getCategoryName(category);

    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const cfg = difficultyConfig[currentDifficulty];
    timeLeft = cfg.time;
    const question = currentQuestions[currentQuestionIndex];

    document.getElementById('current-question-num').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentQuestions.length;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('score-display').textContent = score;
    document.getElementById('next-btn').classList.add('hidden');

    const expBox = document.getElementById('explanation-box');
    if (expBox) expBox.classList.add('hidden');

    const timerBar = document.getElementById('timer-bar');
    timerBar.style.width = '100%';
    timerBar.classList.remove('bg-red-500');
    timerBar.classList.add('bg-gradient-to-r', 'from-purple-500', 'to-pink-500');
    document.getElementById('timer-text').textContent = timeLeft + 's';

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn w-full text-left p-4 rounded-xl border-2 border-gray-200 bg-white hover:border-purple-300 font-medium text-gray-700 flex items-center gap-3';
        btn.innerHTML = `
            <span class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-bold flex items-center justify-center text-sm flex-shrink-0">${letters[index]}</span>
            <span>${option}</span>`;
        btn.onclick = () => selectAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });

    updateStreakDisplay();
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    const cfg = difficultyConfig[currentDifficulty];
    const maxTime = cfg.time;
    const timerText = document.getElementById('timer-text');
    const timerBar = document.getElementById('timer-bar');

    timer = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft + 's';
        timerBar.style.width = (timeLeft / maxTime * 100) + '%';
        if (timeLeft <= Math.floor(maxTime * 0.33)) {
            timerBar.classList.remove('from-purple-500', 'to-pink-500');
            timerBar.classList.add('bg-red-500');
        }
        if (timeLeft <= 0) { clearInterval(timer); handleTimeout(); }
    }, 1000);
}

function handleTimeout() {
    if (!answered) {
        answered = true;
        currentStreak = 0;
        updateStreakDisplay();
        const question = currentQuestions[currentQuestionIndex];
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            btn.classList.add('cursor-not-allowed', 'opacity-70');
        });
        document.querySelectorAll('.option-btn')[question.correct].classList.add('correct');
        document.querySelectorAll('.option-btn')[question.correct].classList.remove('opacity-70');
        showExplanation(question);
        document.getElementById('next-btn').classList.remove('hidden');
    }
}

function selectAnswer(selectedIndex, selectedBtn) {
    if (answered) return;
    answered = true;
    clearInterval(timer);

    const question = currentQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => { btn.disabled = true; btn.classList.add('cursor-not-allowed', 'opacity-70'); });

    if (selectedIndex === question.correct) {
        selectedBtn.classList.add('correct');
        selectedBtn.classList.remove('opacity-70');
        correctCount++;
        currentStreak++;
        if (currentStreak > bestStreak) bestStreak = currentStreak;

        const combo = currentStreak >= 5 ? 3 : currentStreak >= 3 ? 2 : 1;
        const timeBonus = timeLeft * 2;
        const earned = (100 + timeBonus) * combo;
        score += earned;

        showScorePopup(selectedBtn, '+' + earned, currentStreak >= 3 ? '#f59e0b' : '#10b981');
        updateStreakDisplay();
        playSound('correct');
    } else {
        selectedBtn.classList.add('wrong');
        selectedBtn.classList.remove('opacity-70');
        buttons[question.correct].classList.add('correct');
        buttons[question.correct].classList.remove('opacity-70');
        currentStreak = 0;
        updateStreakDisplay();
        playSound('wrong');
    }

    document.getElementById('score-display').textContent = score;

    showExplanation(question);
    document.getElementById('next-btn').classList.remove('hidden');
}

function showExplanation(question) {
    if (!question.explanation) return;
    const box = document.getElementById('explanation-box');
    const txt = document.getElementById('explanation-text');
    if (box && txt) {
        txt.textContent = question.explanation;
        box.classList.remove('hidden');
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}

function updateStreakDisplay() {
    const display = document.getElementById('streak-display');
    const count = document.getElementById('streak-count');
    const headerStreak = document.getElementById('header-streak');
    const headerCount = document.getElementById('header-streak-count');

    if (currentStreak >= 2) {
        display.classList.remove('hidden');
        display.classList.add('flex');
        count.textContent = currentStreak;
        if (headerStreak) { headerStreak.classList.remove('hidden'); headerStreak.classList.add('flex'); }
        if (headerCount) headerCount.textContent = currentStreak;
    } else {
        display.classList.add('hidden');
        display.classList.remove('flex');
        if (headerStreak) { headerStreak.classList.add('hidden'); headerStreak.classList.remove('flex'); }
    }

    const comboDisplay = document.getElementById('combo-display');
    const comboMult = document.getElementById('combo-mult');
    if (comboDisplay && comboMult) {
        const combo = currentStreak >= 5 ? 3 : currentStreak >= 3 ? 2 : 1;
        if (combo > 1) {
            comboDisplay.classList.remove('hidden');
            comboMult.textContent = combo;
            comboDisplay.classList.add('combo-flash');
            setTimeout(() => comboDisplay.classList.remove('combo-flash'), 400);
        } else {
            comboDisplay.classList.add('hidden');
        }
    }
}

function showScorePopup(btn, text, color) {
    const rect = btn.getBoundingClientRect();
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.textContent = text;
    popup.style.left = rect.left + rect.width / 2 + 'px';
    popup.style.top = rect.top + window.scrollY + 'px';
    popup.style.color = color;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1300);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');

    const accuracy = Math.round((correctCount / currentQuestions.length) * 100);
    saveQuizResult(currentCategory, score, correctCount, currentQuestions.length, accuracy);
    updateCategoryProgress();

    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-answers').textContent = `${correctCount}/${currentQuestions.length}`;
    document.getElementById('accuracy').textContent = accuracy + '%';

    const streakRow = document.getElementById('result-streak-row');
    const bestStreakEl = document.getElementById('result-best-streak');
    if (bestStreak >= 3 && streakRow && bestStreakEl) {
        streakRow.classList.remove('hidden');
        bestStreakEl.textContent = bestStreak;
    } else if (streakRow) { streakRow.classList.add('hidden'); }

    const message = document.getElementById('result-message');
    const icon = document.getElementById('result-icon');

    if (accuracy >= 80) {
        message.textContent = 'Izvrstan rezultat! Ekspert si! 🌟';
        icon.innerHTML = '<i data-lucide="crown" class="w-16 h-16 text-yellow-600"></i>';
        createConfetti();
        playSound('win');
    } else if (accuracy >= 60) {
        message.textContent = 'Vrlo dobro! Samo nastavi učiti! 👏';
        icon.innerHTML = '<i data-lucide="medal" class="w-16 h-16 text-blue-600"></i>';
        playSound('win');
    } else if (accuracy >= 40) {
        message.textContent = 'Dobar pokušaj! Vježbaj malo više! 💪';
        icon.innerHTML = '<i data-lucide="thumbs-up" class="w-16 h-16 text-green-600"></i>';
    } else {
        message.textContent = 'Nije loše, ali ima prostora za napredak! 📚';
        icon.innerHTML = '<i data-lucide="book-open" class="w-16 h-16 text-orange-600"></i>';
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
}


function showStatistics() {
    ['start-screen', 'results-screen'].forEach(id => document.getElementById(id).classList.add('hidden'));
    document.getElementById('statistics-screen').classList.remove('hidden');

    const stats = getStatistics();
    document.getElementById('stat-total-quizzes').textContent = stats.totalQuizzes;
    document.getElementById('stat-avg-score').textContent = stats.averageScore;
    document.getElementById('stat-best-score').textContent = stats.bestScore;
    document.getElementById('stat-fav-category').textContent = stats.favoriteCategory;
    document.getElementById('stat-accuracy').textContent = stats.averageAccuracy + '%';
    document.getElementById('stat-total-correct').textContent = stats.totalCorrect + '/' + stats.totalQuestions;

    renderCategoryChart();
    renderHistoryList();

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderCategoryChart() {
    const container = document.getElementById('category-chart');
    if (!container) return;
    const catStats = getCategoryStats();
    container.innerHTML = '';
    catStats.forEach(({ cat, accuracy, games }) => {
        const col = document.createElement('div');
        col.className = 'flex flex-col items-center flex-1';
        const barColor = accuracy >= 80 ? '#10b981' : accuracy >= 60 ? '#3b82f6' : accuracy >= 40 ? '#f59e0b' : '#e5e7eb';
        const heightPx = games > 0 ? Math.max(8, Math.round(accuracy * 1.0)) : 4;
        col.innerHTML = `
            <span class="text-xs font-bold mb-1" style="color:${barColor}">${games > 0 ? accuracy + '%' : '-'}</span>
            <div class="w-full rounded-t-lg chart-bar" style="height:${heightPx}px; background:${barColor}; min-height:4px;"></div>
            <div class="text-base mt-1">${getCategoryEmoji(cat)}</div>
            <div class="text-xs text-gray-500">${getCategoryName(cat).split(' ')[0]}</div>`;
        container.appendChild(col);
    });
}

function renderHistoryList() {
    const historyContainer = document.getElementById('history-list');
    historyContainer.innerHTML = '';
    if (quizHistory && quizHistory.length > 0) {
        quizHistory.slice(0, 10).forEach((quiz) => {
            const date = new Date(quiz.date);
            const dateStr = date.toLocaleDateString('hr-HR') + ' ' + date.toLocaleTimeString('hr-HR', { hour: '2-digit', minute: '2-digit' });
            const diffLabel = quiz.difficulty ? difficultyConfig[quiz.difficulty]?.label : '';
            const item = document.createElement('div');
            item.className = 'bg-white rounded-xl p-4 shadow-sm border-l-4 ' +
                (quiz.accuracy >= 80 ? 'border-green-500' : quiz.accuracy >= 60 ? 'border-blue-500' : 'border-orange-500');
            item.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <span class="font-bold text-gray-800">${getCategoryEmoji(quiz.category)} ${quiz.categoryName || getCategoryName(quiz.category)}</span>
                        <span class="text-xs text-gray-400 ml-2">${diffLabel}</span>
                        <span class="text-xs text-gray-500 block">${dateStr}</span>
                    </div>
                    <div class="text-right">
                        <span class="font-bold text-purple-600">${quiz.score} bod</span>
                        <span class="text-xs text-gray-500 block">${quiz.correct}/${quiz.total} točnih</span>
                    </div>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="h-2 rounded-full ${quiz.accuracy >= 80 ? 'bg-green-500' : quiz.accuracy >= 60 ? 'bg-blue-500' : 'bg-orange-500'}" style="width:${quiz.accuracy}%"></div>
                </div>`;
            historyContainer.appendChild(item);
        });
    } else {
        historyContainer.innerHTML = '<p class="text-center text-gray-500 py-8">Još nema riješenih kvizova. Počni igrati! 🎮</p>';
    }
}

function closeStatistics() {
    document.getElementById('statistics-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
    updateCategoryProgress();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function clearHistory() {
    if (confirm('Jeste li sigurni da želite obrisati svu povijest kvizova?')) {
        quizHistory = [];
        try { localStorage.removeItem('quizHistory'); } catch (e) {}
        showStatistics();
        updateCategoryProgress();
    }
}


function createConfetti() {
    const colors = ['#f43f5e', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ec4899'];
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }, i * 40);
    }
}

function playSound(type) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        if (type === 'correct') {
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } else if (type === 'wrong') {
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } else if (type === 'win') {
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((note, index) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.frequency.setValueAtTime(note, audioContext.currentTime + index * 0.1);
                gain.gain.setValueAtTime(0.2, audioContext.currentTime + index * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.1 + 0.2);
                osc.start(audioContext.currentTime + index * 0.1);
                osc.stop(audioContext.currentTime + index * 0.1 + 0.2);
            });
        }
    } catch (e) { }
}


function restartQuiz() { startQuiz(currentCategory); }

function goHome() {
    ['results-screen', 'statistics-screen', 'quiz-screen'].forEach(id => document.getElementById(id).classList.add('hidden'));
    document.getElementById('start-screen').classList.remove('hidden');
    document.getElementById('header-streak').classList.add('hidden');
    updateCategoryProgress();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}


document.addEventListener('DOMContentLoaded', function () {
    loadHistory();
    setDifficulty('easy');
    updateCategoryProgress();
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
