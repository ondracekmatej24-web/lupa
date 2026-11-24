{
const W=16,H=12;
const logo='<svg class="logo" viewBox="0 0 64 64" aria-hidden="true"><circle cx="26" cy="26" r="18" fill="#cfeff5" stroke="#ffd23f" stroke-width="6"/><circle cx="20" cy="20" r="5" fill="#fff" opacity=".8"/><rect x="38" y="38" width="10" height="24" rx="4" transform="rotate(-45 43 50)" fill="#6b4423"/><circle cx="21" cy="27" r="2.6" fill="#1b1b1b"/><circle cx="31" cy="27" r="2.6" fill="#1b1b1b"/><path d="M21 33q5 4 10 0" stroke="#1b1b1b" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>';
const OPT={
skin:["#ffe0bd","#f6d2b8","#f1c27d","#c68642","#8d5524"],
hs:[["short","Krátké"],["long","Dlouhé"],["pony","Culík"],["spiky","Ježek"],["cap","Kšiltovka"]],
hair:["#1b1b1b","#3b2a1a","#6b4423","#c0392b","#e8b923","#f1f1f1","#2b7de9","#e84a5f"],
shirt:["#2b7de9","#e84a5f","#2f9e44","#9b4dca","#ffd23f","#e07a1f","#1b1b1b","#12b886"],
pants:["#2d3142","#34495e","#6b4423","#3d3d3d","#1971c2","#868e96"],
cap:["#ffd23f","#d7263d","#2b7de9","#2f9e44","#1b1b1b"]};
const CASES=[
{t:"Zmizelý dort",place:"Základní škola, školní kuchyně",d:"Lehký případ",
th:{f:"tiles",a:"#e4e8eb",wall:"#d8d2c4",cap:"#3f4a54",rug:"#9c4a2a"},
map:["################","#KKKKK....SSSS.#","#..............#","#..............#","#...TTTT.......#","#...TTTT...rrr.#","#..........rrr.#","#..............#","#..............#","#.SS........PP.#","#..............#","#######..#######"],
start:[7,10],
intro:"Paní kuchařka upekla na ředitelovy narozeniny čokoládový dort. O velké přestávce (10:00–10:20) dort zmizel! Vyslechni tři žáky, prohledej kuchyni a zjisti, kdo lže.",
sus:[{n:"Tonda",r:"7.B, sportovec",v:220,hi:"Čau, detektive {jm}!",s:"Celou přestávku jsem byl v tělocvičně, pan učitel mě viděl.",shirt:"#12b886",hair:"#1b1b1b",hs:"cap",cap:"#d7263d",x:9,y:3,
  q:[["Viděl jsi někoho u kuchyně?","Jen Marka. Šel kolem kuchyně v dresu s devítkou."],["Máš rád čokoládový dort?","Jasně! Ale trenér říká, že sladké zpomaluje, tak se držím."]]},
{n:"Ema",r:"7.A, čtenářka",v:380,hi:"Ahoj, {jm}. Já jsem nic neudělala!",s:"Byla jsem v knihovně. Vracela jsem knížku o delfínech.",shirt:"#9b4dca",hair:"#1b1b1b",hs:"long",x:3,y:10,
  q:[["Viděla jsi z knihovny něco divného?","Z okna jsem viděla, že leje jako z konve. Hřiště bylo úplně prázdné."],["Jakou knížku jsi vracela?","O delfínech! Věděl jsi, že spí jen s polovinou mozku?"]]},
{n:"Marek",r:"7.B, fotbalista",v:180,hi:"Co chceš? Spěchám na trénink.",s:"Hrál jsem venku na hřišti fotbal. Bylo krásně, svítilo sluníčko!",shirt:"#e07a1f",hair:"#d4a017",hs:"short",x:10,y:8,
  q:[["S kým jsi hrál?","Ehm… sám. Trénoval jsem kopy na bránu."],["Jaké číslo máš na dresu?","Devítku. Jako nejlepší útočníci!"]],
  cf:[0,"Kronika říká, že v 10:00 hustě pršelo!","Pršelo? No… možná trochu. Já… já jsem si nevšiml!"]}],
items:[{n:"Školní kronika počasí",c:"V 10:00 hustě pršelo, venkovní přestávka byla zrušena.",sh:"book",x:14,y:4},
{n:"Výpůjčky z knihovny",c:"Ema vrátila knihu o delfínech v 10:05.",sh:"paper",x:2,y:8},
{n:"Drobečky na podlaze",c:"Čokoládové drobečky vedou ke dveřím třídy 7.B.",sh:"crumbs",x:6,y:2}],
puz:{n:"Zamčená skříňka",sh:"locker",x:1,y:6,q:"Na zámku je lísteček: „Kód = počet nohou pavouka + počet dní v týdnu.“ Jaký je kód?",a:["15"],r:"Ve skříňce je krabice od dortu a na ní kus fotbalového dresu s číslem 9!"},
cul:2,hint:"Porovnej, co kdo říká, s tím, jaké bylo opravdu počasí. A kdo nosí číslo 9?",
why:"Marek tvrdil, že hrál venku na sluníčku, ale podle kroniky hustě pršelo a hřiště bylo prázdné. A na krabici od dortu byl kus jeho dresu s číslem 9."},
{t:"Ukradený obraz",place:"Městské muzeum, 1. patro",d:"Střední případ",
th:{f:"wood",tint:"#b98a62",a:"#9a6a40",wall:"#6e4a5c",cap:"#2e2229",rug:"#7a1f2b"},
map:["################","#.FF..FF..FF...#","#..............#","#..............#","#...rrrrrrrr...#","#...rVVrrVVr...#","#...rrrrrrrr...#","#..............#","#.CC...........#","#..........PP..#","#..............#","#######..#######"],
start:[7,10],
intro:"Z muzea zmizel vzácný obraz „Kočka v klobouku“. Kamery byly mezi 14:00 a 14:30 vypnuté. Ve 14:30 už obraz na stěně nevisel. Ředitelka tě prosí o pomoc!",
sus:[{n:"Jana",adult:1,r:"průvodkyně",v:360,hi:"Dobrý den, detektive {jm}. To je hrozné!",s:"Od 14:00 do 14:45 jsem prováděla školní výpravu po přízemí.",shirt:"#d6336c",hair:"#6b4423",hs:"pony",x:2,y:4,
  q:[["Viděla jste někoho jít nahoru?","Kolem 14:10 jel někdo s úklidovým vozíkem výtahem do 1. patra."],["Kolik dětí jste prováděla?","Dvacet! A všechny chtěly vidět dinosaury."]]},
{n:"Pavel",adult:1,r:"uklízeč",v:160,hi:"Hm? Já tu jen uklízím.",s:"Celé odpoledne jsem uklízel ve 2. patře. Do prvního jsem vůbec nešel.",shirt:"#2f9e44",hair:"#888",hs:"cap",cap:"#1971c2",x:13,y:6,
  q:[["Kdo má klíč od skladu?","Jen paní ředitelka… a já. Ale to nic neznamená!"],["Jezdil jste výtahem?","Výtahem? Ne. Teda… možná. Nevím."]],
  cf:[1,"Podle rozpisu jste ve 14:00 uklízel 1. patro!","To… to je asi chyba v rozpisu. Nebo jsem se spletl. Nechte mě být!"]},
{n:"Pan Novák",adult:1,long:1,beard:1,r:"návštěvník",v:200,hi:"Dobrý den, mladý detektive.",s:"Přišel jsem se jen podívat na dinosaury, nic nevím.",shirt:"#5c7cfa",hair:"#1b1b1b",hs:"short",glasses:1,x:7,y:8,
  q:[["Kdy jste přišel do muzea?","Před chvílí, autobus měl zpoždění. Účtenku mám z pokladny."],["Líbí se vám obrazy?","Mě zajímají jen dinosauři. Obrazy jsou nuda."]]}],
items:[{n:"Pokladna",c:"Účtenka: pan Novák si koupil vstupenku až ve 14:40.",sh:"register",x:2,y:9},
{n:"Rozpis úklidu",c:"2. patro bylo uklizené už ve 13:00. Ve 14:00 měl Pavel uklízet 1. patro!",sh:"paper",x:14,y:8},
{n:"Fotka od učitelky",c:"Jana s 20 dětmi v přízemí, čas na fotce 14:15.",sh:"photo",x:8,y:2}],
puz:{n:"Prázdný rám",sh:"frame",x:12,y:2,q:"V prázdném rámu je zašifrovaný vzkaz: TLMBE. Každé písmeno je posunuté o jedno dál v abecedě (A→B). Kde je obraz?",a:["sklad"],r:"Obraz je ve SKLADU! Klíč od skladu má jen ředitelka… a uklízeč."},
cul:1,hint:"Kdo z nich mohl být v 1. patře mezi 14:00 a 14:30? Ověř všechna alibi.",
why:"Pan Novák přišel až ve 14:40 a Jana byla na fotce v přízemí s dětmi. Pavel lhal: podle rozpisu byl právě v 1. patře, jel výtahem s vozíkem a klíč od skladu má jen on."},
{t:"Rozbitý robot",place:"Gymnázium, laboratoř robotiky",d:"Těžký případ",
th:{f:"lino",a:"#cdd4da",wall:"#e3e7ea",cap:"#2f3b45",rug:"#2f5d7c"},
map:["################","#SSS......SSSS.#","#..............#","#.TTT....TTT...#","#..............#","#......rr......#","#......rr......#","#.TTT....TTT...#","#..............#","#..............#","#..............#","#######..#######"],
start:[7,10],
intro:"Den před soutěží někdo rozbil robota Rexe. Čtyři členové kroužku byli v laboratoři naposledy. Každý ti řekne jednu větu. Zjisti, kdo to udělal!",
sus:[{n:"Klára",r:"programátorka",v:400,hi:"Ahoj. Vím, kdo to byl!",s:"Byl to Filip.",shirt:"#e8590c",hair:"#3b2a1a",hs:"long",x:2,y:5,
  q:[["Proč si myslíš, že to byl Filip?","Protože… byl u Rexe poslední. Asi."],["Kdo nosí oranžový lak na nehty?","Já… a občas Sofie."]],
  cf:[0,"Na šroubováku je oranžový lak. Stejný máš ty.","To je náhoda! Takový lak má spousta lidí!"]},
{n:"Filip",r:"konstruktér",v:210,hi:"Čau {jm}. Rex byl můj nejlepší robot…",s:"Já to nebyl.",shirt:"#1971c2",hair:"#d4a017",hs:"spiky",x:12,y:5,
  q:[["Co jsi dělal v laboratoři?","Šrouboval jsem Rexovi kola. Pak jsem šel domů."],["Kdo odešel poslední?","Myslím, že Klára. Říkala, že si ještě něco zkontroluje."]]},
{n:"Sofie",r:"elektrikářka",v:340,hi:"Ahoj! Ptej se, co chceš.",s:"Klára lže.",shirt:"#ae3ec9",hair:"#1b1b1b",hs:"pony",x:5,y:9,
  q:[["Proč říkáš, že Klára lže?","Filip odešel přede mnou a Rex byl v pořádku. Viděla jsem ho."],["Nosíš oranžový lak?","Dneska ne, mám modrý. Podívej."]]},
{n:"David",r:"vedoucí týmu",v:190,hi:"Zdravím, detektive {jm}.",s:"Já ani Sofie jsme to nebyli.",shirt:"#2b8a3e",hair:"#6b4423",hs:"short",glasses:1,x:10,y:9,
  q:[["Kde jsi byl po 16:00?","Se Sofií jsme spolu zamykali skříň s nářadím."],["Kdo by chtěl Rexe rozbít?","Klára se s Filipem pohádala, kdo bude Rexe na soutěži ovládat."]]}],
items:[{n:"Šroubovák",c:"Na šroubováku je oranžový lak na nehty. Ten nosí jen holky z kroužku.",sh:"screw",x:5,y:6},
{n:"Robot Rex",c:"Rex si uložil poslední zvuk: „Promiň, Rexi…“ Hlas se nedá poznat.",sh:"robot",x:7,y:5},
{n:"Docházka",c:"Všichni čtyři odešli mezi 16:00 a 16:10.",sh:"paper",x:1,y:10}],
puz:{n:"Učitelův stůl",sh:"desk",x:13,y:9,q:"Šuplík je zamčený. Kód je číslo, které je dvakrát větší než 12 a zároveň o 3 menší než 27. Jaký je kód?",a:["24"],r:"V šuplíku je vzkaz od učitele: „Vím jistě, že ze čtyř vět je pravdivá každá kromě JEDNÉ. Lže jen jeden!“"},
cul:0,hint:"Zkus předpokládat, že viníkem je každý z nich postupně. Spočítej, kolik vět by pak bylo lživých. Správně je to jen tehdy, když lže jen jeden.",
why:"Kdyby to byl Filip, lhali by Filip i Sofie. Kdyby Sofie nebo David, lhali by Klára i David. Jen když je viník Klára, lže jediná osoba: Klára sama. Oranžový lak to potvrzuje."},
{t:"Zmizelé housle",place:"Hudební škola, koncertní sál",d:"Spis Stínu 1",
th:{f:"wood",tint:"#c49a6c",wall:"#7a2e3a",cap:"#2e1a1f",rug:"#7a1f2b"},
map:["################","#FF..SSSS....FF#","#..............#","#..CCCCCCCC....#","#..............#","#..TT..TT..TT..#","#..............#","#..TT..TT..TT..#","#..............#","#.P..........P.#","#..............#","#######..#######"],
start:[7,10],
intro:"Z koncertního sálu zmizely vzácné školní housle! Stalo se to o přestávce zkoušky mezi 17:00 a 17:15, kdy na chvíli zhasla světla. Na místě činu někdo nechal záhadnou černou kartu. Kdo housle vzal?",
sus:[{n:"Lucie",r:"houslistka",v:390,hi:"Ahoj, detektive {jm}. To je hrozné, ty housle jsou nejlepší ve škole!",s:"Celou přestávku jsem cvičila ve zkušebně číslo 2.",shirt:"#e84a5f",hair:"#3b2a1a",hs:"long",x:2,y:2,
  q:[["Kdo by ty housle chtěl?","Na soutěž by je chtěl každý. Já taky... ale já mám svoje."],["Slyšela jsi něco, když zhasla světla?","Ne, ve zkušebně je ticho. Cvičila jsem."]],
  cf:[1,"Zkušebna 2 byla od 17:00 do 17:20 zamčená kvůli malování!","Zamčená? Aha... tak jsem asi cvičila na chodbě. Nevím přesně!"]},
{n:"Pan Dvořák",r:"správce budovy",adult:1,v:160,hi:"Dobrý den. Tolik práce a teď ještě tohle.",s:"Když zhasla světla, šel jsem do sklepa opravit pojistky.",shirt:"#4a5a6a",hair:"#888888",hs:"cap",cap:"#2f3b45",beard:1,x:13,y:4,
  q:[["Jak dlouho vám oprava trvala?","Asi deset minut. Všechno jsem zapsal do knihy údržby."],["Kdo má klíč od sálu?","Já a všichni učitelé. Ale o přestávce byl sál otevřený."]]},
{n:"Ondra",r:"bubeník",v:210,hi:"Čau! Já jsem byl úplně jinde.",s:"O přestávce jsem byl v bufetu v druhé budově a kupoval jsem si limonádu.",shirt:"#2b7de9",hair:"#d4a017",hs:"spiky",x:6,y:8,
  q:[["Jak daleko je bufet?","V druhé budově, pěšky asi deset minut."],["Viděl jsi Lucii?","Jo, šla po chodbě směrem k sálu, když jsem odcházel."]]}],
items:[{n:"Kniha údržby",c:"Pan Dvořák opravil pojistky ve sklepě v 17:11. Podepsal to i elektrikář.",sh:"book",x:1,y:6},
{n:"Rozpis zkušeben",c:"Zkušebna 2: od 17:00 do 17:20 ZAMČENO – malování.",sh:"paper",x:14,y:2},
{n:"Účtenka z bufetu",c:"Limonáda, zaplaceno v 17:09. Bufet je v druhé budově, deset minut chůze.",sh:"paper",x:10,y:9}],
puz:{n:"Skříň na noty",sh:"locker",x:14,y:7,q:"Na skříni je lísteček: „Kód = počet strun na houslích krát počet nohou u stolu.“ Jaký je kód?",a:["16"],r:"Ve skříni jsou ukradené housle! A na nich černá karta s písmenem M a vzkazem: „Díky za pomoc. – Stín“."},
cul:0,hint:"Kdo tvrdí, že byl na místě, které bylo ve skutečnosti zamčené?",
why:"Lucie tvrdila, že cvičila ve zkušebně 2, ale ta byla zamčená kvůli malování. Ondra byl v bufetu v jiné budově a pan Dvořák opravoval pojistky. Lucie schovala housle do skříně, protože jí někdo, kdo si říká Stín, slíbil výhru v soutěži. Stín nám nechal první písmeno: M."},
{t:"Vykradená cukrárna",place:"Cukrárna U Zlatého rohlíku",d:"Spis Stínu 2",
th:{f:"tiles",wall:"#f1e3c8",cap:"#5a3e2b",rug:"#c4762b"},
map:["################","#KKKKKK...SSSS.#","#..............#","#..............#","#.TTT.....CCC..#","#..............#","#..............#","#....rrrrrr....#","#....rrrrrr....#","#.P.........P..#","#..............#","#######..#######"],
start:[7,10],
intro:"Z cukrárny zmizela pokladna s penězi za celý týden! Stalo se to ráno mezi 7:00 a 7:30, ještě než se otevřelo. Na místě po pokladně ležela další černá karta. Stín je zpátky!",
sus:[{n:"Jirka",r:"pekař",adult:1,v:170,hi:"Dobrý den, detektive. Celé ráno jsem u pece!",s:"Od pěti ráno peču vzadu u pece. Pec hučí, nic jsem neslyšel.",shirt:"#f1f1f1",hair:"#3b2a1a",hs:"short",beard:1,x:3,y:2,
  q:[["Jakou máte velikost bot?","Pětačtyřicítky! Obří pekařské boty."],["Kdo dneska ráno přišel?","Tomáš pro rohlíky. A myslím, že někdo vešel zadními dveřmi."]]},
{n:"Šárka",r:"prodavačka",adult:1,v:360,hi:"Dobrý den. Já jsem přišla až po tom všem.",s:"Přišla jsem až v 7:40, jako každý den. To už byla pokladna pryč.",shirt:"#e84a5f",hair:"#c0392b",hs:"pony",x:12,y:5,
  q:[["Jakou máš velikost bot?","To je moje věc... No dobře, osmatřicítky."],["Čím jezdíš do práce?","Autobusem. Zastávka U Cukrárny je hned před vchodem."]],
  cf:[2,"Tahle jízdenka je označená v 7:05 na zastávce U Cukrárny!","To... to nemusí být moje jízdenka! Tu mohl ztratit kdokoli!"]},
{n:"Tomáš",r:"rozvozce",adult:1,v:200,hi:"Ahoj! Musím rychle rozvážet, tak se ptej.",s:"V 7:15 jsem tu vyzvedl rohlíky a odvezl je do školy.",shirt:"#2f9e44",hair:"#1b1b1b",hs:"cap",cap:"#ffd23f",x:8,y:5,
  q:[["Jakou máš velikost bot?","Dvaačtyřicítky."],["Viděl jsi někoho u cukrárny?","Kolem sedmé vystupovala z autobusu holka s červenými vlasy."]]}],
items:[{n:"Moučné stopy",c:"Bílé stopy od mouky vedou od pokladny k zadním dveřím. Velikost bot: 38.",sh:"prints",x:7,y:3},
{n:"Rozpis směn",c:"Jirka: od 5:00. Tomáš: rozvoz v 7:15. Šárka: od 7:40.",sh:"paper",x:14,y:2},
{n:"Jízdenka na zemi",c:"Jízdenka na autobus označená v 7:05 na zastávce U Cukrárny.",sh:"paper",x:2,y:7}],
puz:{n:"Pokladní šuplík",sh:"register",x:13,y:3,q:"Šuplík na drobné má zámek a vzkaz: „Kód = kolik minut má půl hodiny + v kolik hodin ráno otevíráme (v 7).“ Jaký je kód?",a:["37"],r:"V šuplíku leží černá karta s písmenem L a vzkazem: „Sladké díky. – Stín“."},
cul:1,hint:"Porovnej velikost bot ze stop s odpověďmi podezřelých. A kdo opravdu přijel kolem sedmé?",
why:"Stopy od mouky měly velikost 38 a tu má jen Šárka. Tvrdila, že přišla až v 7:40, ale Tomáš viděl holku s červenými vlasy vystupovat z autobusu kolem sedmé a jízdenka byla označená v 7:05. Šárka odnesla pokladnu zadními dveřmi pro Stína. Druhé písmeno: L."},
{t:"Ztracený atlas",place:"Městská knihovna",d:"Spis Stínu 3",
th:{f:"wood",tint:"#8a6040",wall:"#3f5a4a",cap:"#1f2b24",rug:"#6b2a2a"},
map:["################","#SSSS.SSSS.SSSS#","#..............#","#.SS..SS..SS...#","#..............#","#.SS..SS..SS...#","#..............#","#...TTTT.......#","#...TTTT...CC..#","#..........P...#","#..............#","#######..#######"],
start:[7,10],
intro:"Z trezoru v knihovně zmizel 300 let starý atlas světa! V 18:00 na pět minut vypadl proud. Elektronický zámek zaznamenal, že se trezor otevřel v 18:02 kartou číslo 2. A v trezoru ležela černá karta Stína.",
sus:[{n:"Paní Horáková",r:"knihovnice",adult:1,v:340,hi:"Dobrý den. Ten atlas je náš největší poklad!",s:"Když vypadl proud, stála jsem u pultu a volala elektrikáři.",shirt:"#9b4dca",hair:"#c9c9c9",hs:"long",glasses:1,x:12,y:7,
  q:[["Kdo má karty od trezoru?","Kartu číslo 1 mám já. Kartu číslo 2 má Matyáš, pomáhá nám tady jako dobrovolník."],["Kdo tu dnes byl?","Matyáš a pan Kos. Ten tu čte každý den v čítárně."]]},
{n:"Matyáš",r:"dobrovolník",v:230,hi:"Ahoj! Já jsem to nebyl, přísahám!",s:"Svoji kartu číslo 2 jsem včera ztratil. Hned jsem to nahlásil.",shirt:"#12b886",hair:"#6b4423",hs:"short",glasses:1,x:2,y:9,
  q:[["Kde jsi kartu ztratil?","Asi v čítárně. Seděl jsem vedle pana Kose."],["Kde jsi byl v 18:02?","Řadil jsem knížky tady vzadu. Ve tmě jsem se nemohl ani hnout."]]},
{n:"Pan Kos",r:"čtenář",adult:1,long:1,v:150,hi:"Hm? Rušíte mě při čtení.",s:"Celý večer jsem seděl v čítárně a vůbec jsem ji neopustil.",shirt:"#3b3b3b",hair:"#1b1b1b",hs:"short",x:9,y:8,
  q:[["Co jste četl?","Knihu o mapách. Staré mapy jsou moje vášeň."],["Neviděl jste kartu od trezoru?","Kartu? Žádnou kartu jsem neviděl. Proč se ptáte?"]],
  cf:[1,"Kamera v čítárně ukazuje, že v 18:01 byla vaše židle prázdná!","Já... já jsem si jen došel pro vodu. Ve tmě!"]}],
items:[{n:"Kniha ztrát a nálezů",c:"Matyáš nahlásil ztrátu karty číslo 2 včera v 16:00, v čítárně.",sh:"book",x:5,y:2},
{n:"Záznam z kamery",c:"Čítárna, 18:01: židle pana Kose je prázdná, visí na ní jen jeho deštník.",sh:"photo",x:14,y:4},
{n:"Výpis z telefonu",c:"Telefon u pultu: hovor s elektrikářem od 17:59 do 18:06.",sh:"paper",x:13,y:10}],
puz:{n:"Trezor",sh:"locker",x:8,y:4,q:"Na trezoru je vzkaz z čísel: 19 – 20 – 9 – 14. Každé číslo je pořadí písmene v abecedě (A=1, B=2…). Jaké slovo to je?",a:["stin","stín"],r:"Slovo je STÍN! V trezoru leží černá karta s písmenem H. Stín si s námi hraje."},
cul:2,hint:"Kdo mohl mít kartu číslo 2? A kdo lže o tom, kde byl v 18:02?",
why:"Pan Kos tvrdil, že čítárnu neopustil, ale kamera ukázala jeho prázdnou židli v 18:01. Matyáš kartu ztratil včera v čítárně, kde seděl vedle pana Kose, a ten si ji nechal. Paní Horáková celou dobu telefonovala. Pan Kos otevřel trezor ztracenou kartou pro Stína. Třetí písmeno: H."},
{t:"Ukradený pohár",place:"Sportovní hala",d:"Spis Stínu 4",
th:{f:"lino",wall:"#dfe6ec",cap:"#2f3b45",rug:"#d9783a"},
map:["################","#SS...VVV....PP#","#..............#","#..............#","#..rrrrrrrrrr..#","#..rrrrrrrrrr..#","#..rrrrrrrrrr..#","#..............#","#.TTT......TTT.#","#..............#","#..............#","#######..#######"],
start:[7,10],
intro:"Před finálovým zápasem zmizel z vitríny zlatý pohár! Alarm vitríny zaznamenal otevření v 15:20. Kdo má na tu dobu alibi a kdo lže? A ano, ve vitríně ležela černá karta.",
sus:[{n:"Nikola",r:"kapitánka týmu",v:370,hi:"Ahoj. Bez poháru nemůžeme ani slavit!",s:"V 15:20 jsem byla v dívčí šatně a převlékala se na zápas.",shirt:"#d7263d",hair:"#e8b923",hs:"pony",x:5,y:3,
  q:[["Viděla jsi v šatně někoho?","Ne, byla jsem tam úplně sama."],["Chceš vyhrát finále?","Jasně! Někdo mi slíbil, že vyhrajeme... teda, že budeme mít štěstí."]],
  cf:[2,"Uklízečka v 15:20 uklízela dívčí šatnu a nikdo tam nebyl!","No... možná jsem byla na chodbě. Nebo na záchodě. Nepamatuju si to!"]},
{n:"Trenér Holub",r:"trenér",adult:1,v:170,hi:"Zdravím, detektive. Tohle je ostuda!",s:"Od 15:00 do 15:30 jsem měl poradu s panem ředitelem.",shirt:"#1971c2",hair:"#6b4423",hs:"short",x:12,y:3,
  q:[["O čem byla porada?","O finále. Ředitel všechno zapisuje, můžeš si to přečíst."],["Kdo má klíč od vitríny?","Já. A náhradní klíč je zamčený ve skříňce u zdi."]]},
{n:"Jakub",r:"maskot týmu",v:240,hi:"Čauky! Já jsem ten medvěd, co tancuje!",s:"V 15:20 jsem v kostýmu medvěda tancoval na hřišti pro diváky.",shirt:"#8a5a2b",hair:"#3b2a1a",hs:"short",x:7,y:7,
  q:[["Viděl tě někdo?","Všichni! Fanoušci si mě fotili."],["Neviděl jsi u vitríny někoho?","Z kostýmu toho moc nevidím. Ale někdo se tam mihl s blond culíkem."]]}],
items:[{n:"Fotka od fanoušků",c:"Fotka z 15:20: medvěd Jakub tancuje uprostřed hřiště.",sh:"photo",x:2,y:7},
{n:"Zápis z porady",c:"Porada 15:00–15:30: ředitel a trenér Holub. Podepsáno oběma.",sh:"paper",x:14,y:9},
{n:"Kniha úklidu",c:"15:15–15:30 úklid dívčí šatny. Nikdo tam nebyl.",sh:"book",x:8,y:2}],
puz:{n:"Skříňka s náhradním klíčem",sh:"locker",x:1,y:5,q:"Zámek skříňky má vzkaz: „Kód = počet hráčů jednoho fotbalového týmu na hřišti krát 2.“ Jaký je kód?",a:["22"],r:"Náhradní klíč od vitríny chybí! Místo něj ve skříňce leží černá karta s písmenem A."},
cul:0,hint:"Ověř si alibi všech tří. Kdo byl v 15:20 na místě, kde ho nikdo neviděl?",
why:"Trenér Holub měl poradu s ředitelem a medvěda Jakuba fotili fanoušci na hřišti. Nikola tvrdila, že byla v šatně, ale tu v tu dobu uklízela uklízečka a nikdo tam nebyl. Jakub navíc viděl u vitríny blond culík. Nikola vzala náhradní klíč a pohár pro Stína, protože jí slíbil výhru. Čtvrté písmeno: A."},
{t:"Stínova skrýš",place:"Stará továrna na okraji města",d:"Velké finále",
th:{f:"lino",wall:"#8a8f94",cap:"#2b2f33",rug:"#5a4a3a",brick:1},
map:["################","#XX..KKKK...XXX#","#X.............#","#....XX...XX...#","#..............#","#..TTT.....TT..#","#..............#","#.XX.....XX....#","#..............#","#....rrrr......#","#..............#","#######..#######"],
start:[7,10],
intro:"Stín poslal inspektoru Lupovi dopis: „Chyťte mě, jestli to dokážete. Čekám ve staré továrně.“ Máš všechny černé karty, které Stín nechal: M, L, H a A. V továrně jsou čtyři lidé a jeden z nich je Stín v přestrojení!",
sus:[{n:"Rudolf",r:"hlídač",adult:1,v:150,hi:"Hlídám tu dvacet let. Cizí sem nesmí!",s:"Znám tu každý šroubek. Celý den jsem byl na vrátnici.",shirt:"#4a5a6a",hair:"#c9c9c9",hs:"cap",cap:"#1b1b1b",beard:1,x:2,y:4,
  q:[["Kdo sem v poslední době chodí?","Paní Zora krmí kočky a od minulého týdne tu fotí nějaký Erik."],["Znáte jméno Mlha?","Mlhu? Tu tady máme každé ráno, ha ha."]]},
{n:"Erik",r:"fotograf",adult:1,long:1,v:190,hi:"Dobrý den, mladý detektive. Jsem tu jen kvůli fotkám.",s:"Fotím starou továrnu do knihy. Jsem tu teprve týden.",shirt:"#2f9e44",hair:"#3b2a1a",hs:"short",glasses:1,x:8,y:4,
  q:[["Jakou rukou fotíte?","Pravou, jako každý."],["Máte rád bonbony?","Ne, sladké vůbec nejím."]],
  cf:[1,"Na zaprášeném stole vedle vašeho foťáku je otisk LEVÉ ruky!","...Bystré. Velmi bystré. Lupa si vybral dobře."]},
{n:"Paní Zora",r:"sousedka",adult:1,v:330,hi:"Ahoj, zlatíčko. Hledáš moje kočičky?",s:"Chodím sem každý den krmit toulavé kočky.",shirt:"#ae3ec9",hair:"#9a9a9a",hs:"long",x:13,y:6,
  q:[["Viděla jste tu něco divného?","Ten fotograf pořád cucá mátové bonbony. Kočky ten pach nesnáší."],["Jak dlouho sem chodíte?","Už pět let. Kočky mě znají."]]},
{n:"Leo",r:"pošťák",adult:1,v:210,hi:"Čau! Nemáš tu náhodou pana Mlhu?",s:"Nesu dopis pro pana Roberta Mlhu, ale nikdo takový tu nebydlí.",shirt:"#1971c2",hair:"#d4a017",hs:"cap",cap:"#d7263d",x:5,y:8,
  q:[["Komu je ten dopis?","Robertu Mlhovi, Stará továrna. Zvláštní adresa."],["Odkud ten dopis je?","Z policejního archivu. Asi nějaký starý spis."]]}],
items:[{n:"Obal od bonbonů",c:"Prázdný obal od mátových bonbonů. Leží hned vedle Erikovy brašny na foťák.",sh:"paper",x:10,y:6},
{n:"Zaprášený stůl",c:"V prachu na stole je čerstvý otisk LEVÉ ruky. Vedle leží Erikův foťák.",sh:"desk",x:12,y:8},
{n:"Seznam návštěv",c:"Erik: první návštěva před týdnem. Ve stejném týdnu začala zmizení s černými kartami.",sh:"book",x:14,y:4}],
puz:{n:"Zamčené dveře kanceláře",sh:"locker",x:14,y:9,q:"Na dveřích je písmenkový zámek a vzkaz: „Moje jméno složíš z karet, které jsem ti nechával.“ Jaké je to slovo?",a:["mlha"],r:"Dveře se otevřely! Uvnitř je starý spis: Robert Mlha, bývalý parťák inspektora Lupy. Poznávací znamení: je levák, nosí něco zeleného a miluje mátové bonbony."},
cul:1,hint:"Co víš o Robertu Mlhovi ze spisu za zamčenými dveřmi? Kdo z podezřelých má stejná znamení?",
why:"Erik je ve skutečnosti Robert Mlha, tajemný Stín! Je levák (otisk levé ruky), nosí zelené tričko a jeho obal od mátových bonbonů ležel vedle brašny, i když tvrdil, že sladké nejí. Do továrny začal chodit přesně v týdnu, kdy začala zmizení. Všechny ukradené věci se vrátí majitelům a Stín je dopadený!"}
];
/* zvuky */
let AC=null;
function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){AC=null}}if(AC&&AC.state==='suspended')AC.resume().catch(()=>{});return AC}
addEventListener('pointerdown',ac,true);addEventListener('keydown',ac,true);
function tone(f,d,type,v,when,slide){if(muted||!AC)return;try{const t=AC.currentTime+(when||0),o=AC.createOscillator(),g=AC.createGain();o.type=type||'square';o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+d);g.gain.setValueAtTime(v||.05,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+d+.03)}catch(e){}}
const SFX={
step:()=>tone(110+Math.random()*40,.045,'triangle',.06),
talk:(len,base)=>{const n=Math.min(9,Math.max(3,Math.round(len/10)));for(let i=0;i<n;i++)tone(base*(.85+Math.random()*.5),.055,'square',.035,i*.075)},
clue:()=>[523,659,784,1047].forEach((f,i)=>tone(f,.14,'triangle',.08,i*.08)),
wrong:()=>{tone(200,.25,'sawtooth',.05);tone(140,.35,'sawtooth',.05,.18)},
win:()=>[523,659,784,659,784,1047].forEach((f,i)=>tone(f,.2,'square',.045,i*.13)),
click:()=>tone(700,.04,'square',.03),
open:()=>tone(320,.09,'triangle',.07,0,640),
drama:()=>{tone(392,.2,'sawtooth',.04);tone(370,.2,'sawtooth',.04,.2);tone(330,.45,'sawtooth',.05,.4)},
pick:()=>tone(880,.06,'triangle',.06,0,1200)};

const EXTRA=[
{key:['i0','q'],add:{n:"Obal od čokolády",c:"Na lavici u kuchyně leží obal od čokolády s fixou napsaným jménem TONDA.",sh:"paper",x:12,y:2},
 cf:{0:[3,"U kuchyně ležel obal od čokolády s tvým jménem!","To je od včerejška! Dneska jsem byl celou přestávku v tělocvičně, pan učitel to potvrdí."],
     1:[1,"Knihovna potvrzuje, že jsi v 10:05 vracela knihu.","No vidíš! Říkala jsem to."]}},
{key:['i1','q'],add:{n:"Kapesník pod rámem",c:"Pod prázdným rámem leží kapesník s vyšitým písmenem J.",sh:"paper",x:5,y:10},
 cf:{0:[3,"Pod prázdným rámem ležel kapesník s písmenem J!","Ten mi vypadl ráno při prohlídce s jinou skupinou. Ve 14:15 jsem byla s dětmi v přízemí, je to na fotce."],
     2:[0,"Podle pokladny jste přišel až ve 14:40.","Přesně tak, autobus měl zpoždění. Obrazy mě stejně nezajímají."]}},
{key:['q','i0'],add:{n:"Pracovní rukavice",c:"U stolu leží pracovní rukavice s vyšitým písmenem F.",sh:"paper",x:12,y:8},
 cf:{1:[3,"U stolu ležela tvoje rukavice!","Jasně, v ní jsem šrouboval Rexovi kola. Když jsem odcházel, byl Rex ještě celý."],
     2:[0,"Na šroubováku je oranžový lak. Nosíš lak na nehty?","Dneska mám modrý, podívej. Oranžový nosím jen na diskotéky."],
     3:[2,"Všichni jste odešli mezi 16:00 a 16:10. Kdy jsi šel ty?","Se Sofií jsme zamykali skříň s nářadím a odcházeli jsme spolu v 16:10."]}},
{key:['i1'],add:{n:"Palička od bubnu",c:"U skříně s notami leží bubenická palička.",sh:"screw",x:12,y:9},
 cf:{1:[0,"Podle knihy údržby jste opravoval pojistky v 17:11.","Ano, a elektrikář to podepsal. Ve sklepě není sál vidět."],
     2:[3,"U skříně s notami ležela tvoje palička!","Tu jsem tam nechal ráno při zkoušce. O přestávce jsem byl v bufetu, mám účtenku."]}},
{key:['i0','i2'],add:{n:"Drobky u pokladny",c:"Kolem místa po pokladně jsou drobky od rohlíků.",sh:"crumbs",x:10,y:2},
 cf:{0:[0,"Stopy jsou od mouky a vy jste pekař!","Mouku mám všude. Ale ty stopy mají velikost 38 a já mám pětačtyřicítky."],
     2:[3,"U pokladny jsou drobky od rohlíků, které rozvážíš!","Rohlíky jsou tu všude, je to pekárna! A já chodím jen předními dveřmi, stopy vedou k zadním."]}},
{key:['i1','i0'],add:{n:"Batoh u trezoru",c:"Kousek od trezoru leží batoh se jmenovkou MATYÁŠ.",sh:"paper",x:5,y:6},
 cf:{0:[2,"Telefon potvrzuje, že jste do 18:06 mluvila s elektrikářem.","Ano. Elektrikář vám to může potvrdit."],
     1:[3,"Tvůj batoh ležel kousek od trezoru!","Nechávám ho tam vždycky, když řadím knížky. Kartu jsem včera ztratil, je to zapsané."]}},
{key:['i2'],add:{n:"Chlupy u vitríny",c:"U vitríny leží hnědé chlupy z kostýmu medvěda.",sh:"crumbs",x:10,y:2},
 puz:{q:"Zámek skříňky má tři číslice a vzkaz: „První číslice je počet hráčů jednoho volejbalového týmu na hřišti. Druhá je o 3 menší než první. Třetí je součet prvních dvou.“ Jaký je kód?",a:["639"]},
 cf:{1:[1,"Zápis z porady potvrzuje, že jste byl u ředitele.","Ředitel to podepsal. Od 15:00 do 15:30 jsem z kanceláře nevyšel."],
     2:[3,"U vitríny jsou chlupy z tvého kostýmu!","Ve dvě jsem se tam fotil s pohárem. V 15:20 jsem tancoval na hřišti, je to na fotce."]}},
{key:['i1','i0','q'],add:{n:"Zelená bunda",c:"Na bedně u vrátnice visí zelená pracovní bunda.",sh:"paper",x:3,y:2},
 intro:"Stín poslal inspektoru Lupovi dopis: „Chyťte mě, jestli to dokážete. Čekám ve staré továrně.“ Máš všechny černé karty, které Stín nechal na místech činu (najdeš je v seznamu spisů). V továrně jsou čtyři lidé a jeden z nich je Stín v přestrojení!",
 cf:{0:[3,"Na bedně visí zelená bunda. Je vaše?","Je, nosím ji jen v zimě. A jsem pravák, podívej, jak píšu."],
     2:[0,"Našla jsem obal od mátových bonbonů. Nejsou vaše?","Mátu nesnáším. Ale ten fotograf je cucá pořád."],
     3:[2,"V seznamu návštěv nejste. Jak jste se sem dostal?","Pošťák do seznamu nepíše. Rudolf mě pustil, nesu jen dopis."]}}];
EXTRA.forEach((e,i)=>{const c=CASES[i];c.items.push(e.add);Object.entries(e.cf).forEach(([k,v])=>{c.sus[k].cf=v});c.key=e.key;if(e.puz)Object.assign(c.puz,e.puz);if(e.intro)c.intro=e.intro});
const BADGES=[
 {id:'first',n:'První případ',d:'Vyřeš svůj první případ.'},
 {id:'nohint',n:'Bez nápovědy',d:'Vyřeš případ bez nápovědy.'},
 {id:'clean',n:'Napoprvé správně',d:'Obviň správného viníka hned napoprvé.'},
 {id:'ask',n:'Mistr výslechu',d:'Polož v jednom případu všechny otázky všem podezřelým.'},
 {id:'eye',n:'Bystré oko',d:'Najdi v případu všechny stopy dřív, než někoho obviníš.'},
 {id:'puz',n:'Luštitel',d:'Vyřeš hádanku napoprvé.'},
 {id:'perfect',n:'Tři hvězdy',d:'Získej v jednom případu všechny tři hvězdy.'},
 {id:'stin',n:'Lovec Stína',d:'Dopadni tajemného Stína.'},
 {id:'all',n:'Legenda kanceláře',d:'Získej ve všech případech tři hvězdy.'}];
const RANKS=[[0,'Nováček'],[6,'Pomocník detektiva'],[12,'Detektiv'],[18,'Vrchní detektiv'],[23,'Inspektor']];
const rankOf=t=>RANKS.filter(r=>t>=r[0]).pop()[1];
let badges=new Set();try{const b=JSON.parse(localStorage.getItem('lupa-badges'));if(Array.isArray(b))badges=new Set(b.filter(x=>BADGES.some(y=>y.id===x)))}catch(e){}
const saveBadges=()=>{try{localStorage.setItem('lupa-badges',JSON.stringify([...badges]))}catch(e){}};
const OFFICE={t:"Kancelář Lupa",th:{f:"wood",tint:"#a8774f",wall:"#d9d0c2",cap:"#3b2f2a",rug:"#2f4a3a",brick:1},
map:["################","#SSS.........PP#","#..............#","#.....DDD......#","#..............#","#...rrrrrr.....#","#...rrrrrr...CC#","#...rrrrrr.....#","#..............#","#.TT...........#","#..............#","#######..#######"],
start:[7,10],
boss:{n:"Inspektor Lupa",r:"šéf kanceláře",v:150,shirt:"#4a3b2f",pants:"#2b2b2b",hair:"#c9c9c9",hs:"short",glasses:1,beard:1,long:1,adult:1,skin:"#f1c27d",x:7,y:4},
board:{x:11,y:1}};
const SKIN=OPT.skin;
const $=s=>document.querySelector(s);
const app=$('#app'),modal=$('#modal'),box=$('#box');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let stars=CASES.map(()=>0),ME=null,G=null,muted=false,voiceOn=true,camMode='fp',greeted=false;
const okCol=v=>typeof v==='string'&&/^#[0-9a-f]{6}$/i.test(v);
try{const v=JSON.parse(localStorage.getItem('lupa-stars'));if(Array.isArray(v))stars=CASES.map((_,i)=>+v[i]||0);
  const h=JSON.parse(localStorage.getItem('lupa-hero'));
  if(h&&typeof h.n==='string'&&h.n.trim()&&['skin','hair','shirt','pants','cap'].every(k=>okCol(h[k]))&&OPT.hs.some(o=>o[0]===h.hs))ME={n:h.n.slice(0,14),skin:h.skin,hair:h.hair,hs:h.hs,shirt:h.shirt,pants:h.pants,cap:h.cap,glasses:!!h.glasses};
  muted=localStorage.getItem('lupa-mute')==='1';voiceOn=localStorage.getItem('lupa-voice')!=='0';camMode=localStorage.getItem('lupa-cam')==='tp'?'tp':'fp'}catch(e){}
const save=()=>{try{localStorage.setItem('lupa-stars',JSON.stringify(stars));if(ME)localStorage.setItem('lupa-hero',JSON.stringify(ME));localStorage.setItem('lupa-mute',muted?'1':'0');localStorage.setItem('lupa-voice',voiceOn?'1':'0');localStorage.setItem('lupa-cam',camMode)}catch(e){}};
const starStr=n=>'★'.repeat(n)+'☆'.repeat(3-n);

/* hlas */
const hasTTS='speechSynthesis' in window;let VOICE=null,ttsOk=false;
function pickVoice(){if(!hasTTS)return;try{const vs=speechSynthesis.getVoices();VOICE=vs.find(v=>/^cs/i.test(v.lang))||null}catch(e){}}
if(hasTTS){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice}catch(e){}}
addEventListener('pointerdown',()=>{if(hasTTS&&!ttsOk){ttsOk=true;try{const u=new SpeechSynthesisUtterance(' ');u.volume=0;u.lang='cs-CZ';speechSynthesis.speak(u)}catch(e){}}},true);
let talkUntil=0;
function speak(text,pitch){if(!hasTTS||!voiceOn||!text)return false;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='cs-CZ';if(VOICE)u.voice=VOICE;u.pitch=Math.max(.3,Math.min(2,pitch||1));u.rate=1.02;
  talkUntil=performance.now()+text.length*70;u.onend=()=>{talkUntil=0};speechSynthesis.speak(u);return true}catch(e){return false}}
function hush(){talkUntil=0;if(hasTTS)try{speechSynthesis.cancel()}catch(e){}}
const pitchOf=s=>Math.min(1.7,Math.max(.55,s.v/250));

/* pomocníci */
function shade(h,a){const n=parseInt(h.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const f=a<0?0:255,p=Math.abs(a);r=Math.round((f-r)*p+r);g=Math.round((f-g)*p+g);b=Math.round((f-b)*p+b);return '#'+((1<<24)|(r<<16)|(g<<8)|b).toString(16).slice(1)}
function rr(c,x,y,w,h,r){c.beginPath();c.roundRect?c.roundRect(x,y,w,h,r):c.rect(x,y,w,h);c.fill()}
function lg(c,x0,y0,x1,y1,s){const g=c.createLinearGradient(x0,y0,x1,y1);s.forEach((v,i)=>g.addColorStop(i/(s.length-1),v));return g}
let seed=1;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
const BOOKS=['#7d2e2e','#2f4f6f','#a68a3d','#3f6b4a','#5b4a6b','#8a5a2b','#1f3a4d','#b8a98a','#2b2b2b','#9c3d1f'];
function comps(map,ch){const seen=new Set(),out=[];for(let y=0;y<H;y++)for(let x=0;x<W;x++){if(map[y][x]!==ch||seen.has(y*W+x))continue;
  let x2=x;while(x2+1<W&&map[y][x2+1]===ch)x2++;let y2=y;while(y2+1<H&&[...Array(x2-x+1)].every((_,i)=>map[y2+1][x+i]===ch))y2++;
  for(let yy=y;yy<=y2;yy++)for(let xx=x;xx<=x2;xx++)seen.add(yy*W+xx);out.push([x,y,x2-x+1,y2-y+1])}return out}

/* renderer (jeden pro celou hru) */
let REN=null,ENV=null,TICK=null,RAF=0;
function R(){if(REN)return REN;REN=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});REN.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
  REN.outputEncoding=THREE.sRGBEncoding;REN.shadowMap.enabled=true;REN.shadowMap.type=THREE.PCFSoftShadowMap;REN.toneMapping=THREE.ACESFilmicToneMapping;REN.toneMappingExposure=1.05;
  const pm=new THREE.PMREMGenerator(REN);ENV=pm.fromScene(new THREE.RoomEnvironment(),.04).texture;pm.dispose();
  let last=performance.now();const loop=now=>{const dt=Math.min(.05,(now-last)/1000);last=now;if(TICK)TICK(dt,now);RAF=requestAnimationFrame(loop)};RAF=requestAnimationFrame(loop);return REN}
let RO=null;
function mount(el,tick){const r=R();el.appendChild(r.domElement);r.domElement.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none';TICK=tick;
  if(RO)RO.disconnect();RO=new ResizeObserver(()=>{const w=el.clientWidth,h=el.clientHeight;if(w&&h)r.setSize(w,h,false);if(G&&G.onResize)G.onResize(w,h)});RO.observe(el)}
function unmount(){TICK=null;if(RO){RO.disconnect();RO=null}if(REN&&REN.domElement.parentNode)REN.domElement.parentNode.removeChild(REN.domElement)}

/* textury a materiály */
const TL=new THREE.TextureLoader(),TX={},MAT={};
function img(name,rx,ry,srgb){const k=name+rx+'x'+ry;if(TX[k])return TX[k];const t=TL.load(name);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(rx,ry);if(srgb!==false)t.encoding=THREE.sRGBEncoding;t.anisotropy=8;return TX[k]=t}
function ctex(w,h,f,srgb){const cv=document.createElement('canvas');cv.width=w;cv.height=h;f(cv.getContext('2d'),w,h);const t=new THREE.CanvasTexture(cv);if(srgb!==false)t.encoding=THREE.sRGBEncoding;t.anisotropy=8;return t}
const once=(k,f)=>TX[k]||(TX[k]=f());
const weave=()=>once('weave',()=>{const t=ctex(128,128,(c,w,h)=>{seed=21;c.fillStyle='#f4f4f4';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=2){c.fillStyle=`rgba(0,0,0,${.03+rnd()*.05})`;c.fillRect(0,y,w,1)}for(let x=0;x<w;x+=2){c.fillStyle=`rgba(255,255,255,${rnd()*.08})`;c.fillRect(x,0,1,h)}for(let i=0;i<300;i++){c.fillStyle=`rgba(0,0,0,${rnd()*.06})`;c.fillRect(rnd()*w,rnd()*h,2,2)}});t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(3,3);return t});
const hairT=()=>once('hair',()=>{const t=ctex(256,256,(c,w,h)=>{seed=31;c.fillStyle='#dcdcdc';c.fillRect(0,0,w,h);for(let i=0;i<900;i++){const x=rnd()*w;c.strokeStyle=rnd()<.5?`rgba(0,0,0,${.08+rnd()*.18})`:`rgba(255,255,255,${.1+rnd()*.25})`;c.lineWidth=.6+rnd()*1.2;c.beginPath();c.moveTo(x,0);c.bezierCurveTo(x+rnd()*10-5,h*.3,x+rnd()*10-5,h*.7,x+rnd()*8-4,h);c.stroke()}});t.wrapS=t.wrapT=THREE.RepeatWrapping;return t});
const fabric=col=>MAT['f'+col]||(MAT['f'+col]=new THREE.MeshStandardMaterial({color:col,map:weave(),roughness:.92,envMapIntensity:.35}));
const skinM=col=>MAT['s'+col]||(MAT['s'+col]=new THREE.MeshStandardMaterial({color:new THREE.Color(col).offsetHSL(0,.12,-.04),roughness:.72,envMapIntensity:.12,emissive:new THREE.Color(col).multiplyScalar(.07)}));
const hairM=col=>MAT['h'+col]||(MAT['h'+col]=new THREE.MeshStandardMaterial({color:col,map:hairT(),roughness:.55,envMapIntensity:.3}));
const solid=(col,r,m)=>{const k='c'+col+r+m;return MAT[k]||(MAT[k]=new THREE.MeshStandardMaterial({color:col,roughness:r==null?.6:r,metalness:m||0}))};

/* hlava */
let HEADG=null;
function headGeo(){if(HEADG)return HEADG;const g=new THREE.SphereGeometry(.11,48,36),p=g.attributes.position,v=new THREE.Vector3();
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const yn=v.y/.11;
    if(yn<0){const k=1-.3*Math.pow(-yn,1.5);v.x*=k;v.z*=1-.1*Math.pow(-yn,2);if(v.z>0)v.z+=.01*(-yn)*(v.z/.11)}
    if(yn>.25&&v.z>0)v.z*=1-.07*(yn-.25);if(v.z<0&&yn>-.3)v.z*=1.06;
    v.x*=.88;v.y*=1.16;p.setXYZ(i,v.x,v.y,v.z)}g.computeVertexNormals();return HEADG=g}
function shell(scale,keep){const src=headGeo(),p=src.attributes.position,idx=src.index.array,out=[],v=new THREE.Vector3();const ok=[];
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);ok.push(keep(v.x,v.y,v.z))}
  for(let i=0;i<idx.length;i+=3)if(ok[idx[i]]&&ok[idx[i+1]]&&ok[idx[i+2]])out.push(idx[i],idx[i+1],idx[i+2]);
  const g=src.clone();g.setIndex(out);g.scale(scale[0],scale[1],scale[2]);g.computeVertexNormals();return g}
const HAIR={
  short:(x,y,z)=>z>.04?y>.058-.03*(x/.1)**2:z>-.03?y>.012:y>-.085,
  long:(x,y,z)=>z>.04?y>.058-.03*(x/.1)**2:z>-.03?y>-.02||Math.abs(x)>.085:y>-.13,
  pony:(x,y,z)=>z>.04?y>.06-.03*(x/.1)**2:z>-.03?y>.014:y>-.07,
  spiky:(x,y,z)=>z>.04?y>.064-.03*(x/.1)**2:z>-.03?y>.02:y>-.075,
  cap:(x,y,z)=>z>-.03?y>.012&&z<.06:y>-.08};

/* postava */
function person3(L){
  const g=new THREE.Group(),sk=skinM(L.skin),sh=fabric(L.shirt),pa=fabric(L.pants||'#2d3142'),shoe=solid('#2a2622',.45),sole=solid('#efefea',.7),hm=hairM(L.hair);
  const P={g,legs:[],knees:[],arms:[],elbows:[],blink:2+Math.random()*3};
  const add=(geo,mat,x,y,z,par,sx,sy,sz)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);if(sx)m.scale.set(sx,sy,sz);m.castShadow=true;m.receiveShadow=true;(par||g).add(m);return m};
  const cyl=(a,b,h,n)=>new THREE.CylinderGeometry(a,b,h,n||16),sph=(r,a,b)=>new THREE.SphereGeometry(r,a||16,b||12);
  [-1,1].forEach(s=>{const th=new THREE.Group();th.position.set(s*.088,.93,0);g.add(th);add(cyl(.074,.058,.45),pa,0,-.225,0,th);
    const kn=new THREE.Group();kn.position.y=-.45;th.add(kn);add(sph(.058),pa,0,0,0,kn);add(cyl(.056,.044,.42),pa,0,-.21,0,kn);
    const an=new THREE.Group();an.position.y=-.42;kn.add(an);add(sph(.052,18,12),shoe,0,-.03,.045,an,1,.62,2.15);add(new THREE.BoxGeometry(.1,.018,.24),sole,0,-.058,.04,an);
    P.legs.push(th);P.knees.push(kn)});
  add(sph(.155,24,16),pa,0,.95,0,null,1,.55,.68);
  add(cyl(.151,.151,.035,24),solid('#2b2420',.5),0,1.0,0).scale.z=.69;
  const torso=new THREE.Group();torso.position.y=.98;g.add(torso);P.torso=torso;
  const prof=[[.142,0],[.146,.06],[.15,.15],[.165,.27],[.18,.36],[.178,.42],[.15,.47],[.09,.505],[.05,.515]].map(a=>new THREE.Vector2(a[0],a[1]));
  add(new THREE.LatheGeometry(prof,32),sh,0,0,0,torso).scale.z=.64;
  add(new THREE.TorusGeometry(.05,.013,8,24),fabric(shade(L.shirt,-.15)),0,.5,0,torso).rotation.x=Math.PI/2;
  [-1,1].forEach(s=>{add(sph(.056,18,14),sh,s*.165,.415,0,torso,1,.85,.85);
    const ar=new THREE.Group();ar.position.set(s*.19,.43,0);ar.rotation.z=s*.1;torso.add(ar);
    if(L.long){add(cyl(.054,.044,.3),sh,0,-.15,0,ar)}else{add(cyl(.06,.054,.16),sh,0,-.08,0,ar);add(cyl(.045,.04,.2),sk,0,-.19,0,ar)}
    const el=new THREE.Group();el.position.y=-.29;ar.add(el);add(sph(.041),L.long?sh:sk,0,0,0,el);add(cyl(.04,.032,.25),L.long?sh:sk,0,-.125,0,el);
    if(L.long)add(cyl(.036,.036,.03),fabric(shade(L.shirt,-.2)),0,-.24,0,el);
    const wr=new THREE.Group();wr.position.y=-.25;el.add(wr);add(sph(.036,16,12),sk,0,-.045,0,wr,.78,1.45,.45);add(sph(.015,10,8),sk,-s*.024,-.03,.014,wr,1,1.8,1);
    el.rotation.x=-.22;P.arms.push(ar);P.elbows.push(el)});
  add(cyl(.05,.056,.11),sk,0,1.535,0);
  const hd=new THREE.Group();hd.position.y=1.665;g.add(hd);P.head=hd;
  add(headGeo(),sk,0,0,0,hd);
  const eyeW=solid('#f5f2ec',.15),iris=solid(L.eye||['#5a3a22','#3b6e8f','#4a6b3a'][Math.floor(Math.random()*3)],.25),pup=solid('#050505',.1),lid=sk;
  P.lids=[];
  [-1,1].forEach(s=>{add(sph(.0172,20,16),eyeW,s*.036,.004,.084,hd);add(sph(.0092,16,12),iris,s*.036,.004,.0985,hd,1,1,.45);add(sph(.0046,10,8),pup,s*.036,.004,.1028,hd,1,1,.4);
    const lg=new THREE.Group();lg.position.set(s*.036,.004,.084);hd.add(lg);add(new THREE.SphereGeometry(.0185,20,10,0,Math.PI*2,0,Math.PI/2),lid,0,0,0,lg);lg.rotation.x=-.45;P.lids.push(lg);
    const br=add(new THREE.BoxGeometry(.036,.0065,.012),hairM(shade(L.hair,-.25)),s*.037,.031,.097,hd);br.rotation.z=-s*.12;br.rotation.x=-.2;
    add(sph(.026,12,10),sk,s*.094,-.008,-.006,hd,.42,1,.78)});
  add(sph(.012,14,12),sk,0,-.016,.101,hd,.7,1.9,1).rotation.x=-.3;add(sph(.0115,14,12),sk,0,-.038,.108,hd);[-1,1].forEach(s=>add(sph(.0085,10,8),sk,s*.01,-.042,.101,hd));
  const lip=solid('#'+new THREE.Color(L.skin).lerp(new THREE.Color('#a8504a'),.5).getHexString(),.4);
  add(cyl(.0045,.0045,.03,10),lip,0,-.063,.099,hd,1,1,.8).rotation.z=Math.PI/2;
  P.mouth=add(sph(.01,12,8),solid('#3a1414',.8),0,-.068,.094,hd,1.3,.3,.4);
  P.low=add(cyl(.0055,.0055,.027,10),lip,0,-.0715,.097,hd,1,1,.8);P.low.rotation.z=Math.PI/2;P.lowY=-.0715;
  const hs=L.hs;
  if(hs!=='cap'||true)add(shell([1.07,1.06,1.07],HAIR[hs]||HAIR.short),hm,0,.004,-.002,hd);
  if(hs==='long'){add(new THREE.BoxGeometry(.2,.26,.04),hm,0,-.17,-.085,hd).rotation.x=.12;[-1,1].forEach(s=>add(cyl(.022,.012,.2,8),hm,s*.095,-.1,.02,hd))}
  if(hs==='pony'){add(sph(.04),hm,0,.02,-.122,hd);const pt=add(cyl(.034,.01,.24,10),hm,0,-.09,-.14,hd);pt.rotation.x=.22}
  if(hs==='spiky'){seed=7;for(let i=0;i<16;i++){const a=rnd()*Math.PI*2,r=.03+rnd()*.06,cn=add(new THREE.ConeGeometry(.022,.07,6),hm,Math.cos(a)*r,.12-r*.3,Math.sin(a)*r-.01,hd);cn.rotation.set(Math.sin(a)*r*9,0,-Math.cos(a)*r*9)}}
  if(hs==='cap'){const cm=fabric(L.cap||'#ffd23f');add(new THREE.SphereGeometry(.122,32,14,0,Math.PI*2,0,Math.PI*.42),cm,0,.03,-.004,hd,.92,1.05,1);
    const brm=add(new THREE.CylinderGeometry(.1,.1,.008,24,1,false,0,Math.PI),cm,0,.052,.055,hd);brm.rotation.y=-Math.PI/2;brm.rotation.x=.12;add(sph(.01),cm,0,.157,0,hd)}
  if(L.beard){add(shell([1.04,1.03,1.04],(x,y,z)=>z>-.02&&y<-.045&&!(Math.abs(x)<.022&&y>-.082&&y<-.055&&z>.06)),hm,0,0,0,hd);add(new THREE.BoxGeometry(.044,.008,.01),hm,0,-.055,.103,hd)}
  if(L.glasses){const gm=solid('#151515',.3,.3);[-1,1].forEach(s=>{add(new THREE.TorusGeometry(.021,.0025,6,24),gm,s*.036,.004,.112,hd);add(new THREE.BoxGeometry(.003,.003,.1),gm,s*.058,.008,.065,hd)});add(new THREE.BoxGeometry(.03,.003,.003),gm,0,.01,.112,hd)}
  const sc=L.adult?1:.9;g.scale.setScalar(sc);
  const bl=new THREE.Mesh(new THREE.PlaneGeometry(.9,.9),blobM());bl.rotation.x=-Math.PI/2;bl.position.y=.004;g.add(bl);
  return P;
}
const blobM=()=>MAT.blob||(MAT.blob=new THREE.MeshBasicMaterial({map:ctex(128,128,c=>{const g=c.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'rgba(0,0,0,.55)');g.addColorStop(.5,'rgba(0,0,0,.25)');g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(0,0,128,128)}),transparent:true,depthWrite:false}));
function animP(P,t,dt,mv,talk,look){
  const ph=t*8.5,s=Math.sin(ph);
  if(mv){P.legs[0].rotation.x=-s*.45;P.legs[1].rotation.x=s*.45;P.knees[0].rotation.x=.08+Math.max(0,Math.sin(ph-1.4))*.8;P.knees[1].rotation.x=.08+Math.max(0,Math.sin(ph+Math.PI-1.4))*.8;
    P.arms[0].rotation.x=s*.38;P.arms[1].rotation.x=-s*.38;P.torso.rotation.y=s*.06;P.g.position.y=Math.abs(Math.cos(ph))*.018}
  else{const k=Math.min(1,dt*8);P.legs.forEach(l=>l.rotation.x*=1-k);P.knees.forEach(l=>l.rotation.x+=(.04-l.rotation.x)*k);P.arms.forEach((a,i)=>a.rotation.x+=(Math.sin(t*1.1+i)*.03-a.rotation.x)*k);P.torso.rotation.y*=1-k;P.g.position.y=0;
    P.torso.scale.y=1+Math.sin(t*1.8)*.006}
  let ty=0,tx=0;if(look){ty=Math.max(-.7,Math.min(.7,look));}if(talk){tx=Math.sin(t*5.5)*.05}
  P.head.rotation.y+=(ty-P.head.rotation.y)*Math.min(1,dt*5);P.head.rotation.x+=(tx-P.head.rotation.x)*Math.min(1,dt*8);
  const open=talk?Math.abs(Math.sin(t*14))*.007+Math.abs(Math.sin(t*9))*.003:0;P.low.position.y=P.lowY-open;P.mouth.scale.y=.35+open*60;
  P.blink-=dt;const cl=P.blink<0;if(P.blink<-.13)P.blink=2+Math.random()*4;P.lids.forEach(l=>l.rotation.x=cl?1.15:-.45);
}

/* prostředí */
const RB=(w,h,d,r)=>new THREE.RoundedBoxGeometry(w,h,d,3,Math.min(r||.02,Math.min(w,h,d)/2-.001));
function floorMat(th){if(th.f==='wood')return new THREE.MeshStandardMaterial({map:img('wood.jpg',W/1.1,H/1.1),roughnessMap:img('wood_r.jpg',W/1.1,H/1.1,false),color:th.tint||'#ffffff',roughness:.8,envMapIntensity:.45});
  if(th.f==='tiles')return new THREE.MeshStandardMaterial({map:img('tiles.jpg',W/2.4,H/2.4),normalMap:img('tiles_n.jpg',W/2.4,H/2.4,false),normalScale:new THREE.Vector2(.6,.6),roughness:.35,envMapIntensity:.7});
  return new THREE.MeshStandardMaterial({map:once('lino',()=>{const t=ctex(512,512,(c,w,h)=>{seed=3;c.fillStyle='#cfd6dc';c.fillRect(0,0,w,h);for(let i=0;i<9000;i++){c.fillStyle=rnd()<.5?`rgba(60,70,80,${rnd()*.12})`:`rgba(255,255,255,${rnd()*.35})`;c.fillRect(rnd()*w,rnd()*h,2,2)}c.fillStyle='rgba(0,0,0,.12)';c.fillRect(0,0,2,h);c.fillRect(0,0,w,2)});t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(W/2,H/2);return t}),roughness:.45,envMapIntensity:.7})}
function plaster(col){return once('pl'+col,()=>{const t=ctex(512,512,(c,w,h)=>{seed=9;c.fillStyle=col;c.fillRect(0,0,w,h);for(let i=0;i<9000;i++){c.fillStyle=rnd()<.5?`rgba(0,0,0,${rnd()*.05})`:`rgba(255,255,255,${rnd()*.06})`;c.fillRect(rnd()*w,rnd()*h,2,2)}});t.wrapS=t.wrapT=THREE.RepeatWrapping;return t})}
function texT(lines,big,head){return ctex(256,320,(c,w,h)=>{c.fillStyle='#fbfaf6';c.fillRect(0,0,w,h);if(big){c.fillStyle='#b02a2a';c.font='700 56px monospace';c.textAlign='center';c.fillText(big,w/2,h/2+18);return}
  if(head){c.fillStyle='#1b1b1b';c.font='700 26px serif';c.textAlign='center';c.fillText(head,w/2,48)}c.fillStyle='rgba(30,40,80,.55)';for(let i=0;i<lines;i++)c.fillRect(26,(head?80:40)+i*30,i%3===2?120:204,6)})}
function winT(){return once('win',()=>ctex(512,352,(c,w,h)=>{c.fillStyle=lg(c,0,0,0,h,['#7fb7e0','#cfe6f4']);c.fillRect(0,0,w,h);c.fillStyle='rgba(255,255,255,.85)';[[120,90,50],[180,80,36],[360,170,60],[410,160,40]].forEach(p=>{c.beginPath();c.ellipse(p[0],p[1],p[2],p[2]*.42,0,0,7);c.fill()});
  c.fillStyle='#7fa06a';c.beginPath();c.moveTo(0,h);c.quadraticCurveTo(140,h-90,280,h-40);c.quadraticCurveTo(400,h-95,w,h-50);c.lineTo(w,h);c.fill();c.fillStyle='#5d7f4f';for(let i=0;i<14;i++){c.beginPath();c.arc(20+i*38,h-40+Math.sin(i)*12,22,0,7);c.fill()}}))}
function paintT(k){return ctex(512,300,(c,w,h)=>{const hue=['#6a8caf','#c46f3c','#4f7a5a'][k%3];c.fillStyle=lg(c,0,0,0,h,['#efe7d6',hue]);c.fillRect(0,0,w,h);c.fillStyle='#fff3cf';c.beginPath();c.arc(380,80,30,0,7);c.fill();
  c.fillStyle=shade(hue,-.35);c.beginPath();c.moveTo(0,h);c.quadraticCurveTo(120,120,240,220);c.quadraticCurveTo(360,100,w,200);c.lineTo(w,h);c.fill();c.fillStyle=shade(hue,-.55);c.fillRect(0,h-40,w,40);
  for(let i=0;i<2500;i++){c.fillStyle=`rgba(${rnd()<.5?0:255},${rnd()<.5?0:255},${rnd()<.5?0:255},.04)`;c.fillRect(rnd()*w,rnd()*h,3,3)}})}
function rugT(col){return ctex(512,320,(c,w,h)=>{seed=4;c.fillStyle=col;c.fillRect(0,0,w,h);c.strokeStyle=shade(col,.4);c.lineWidth=6;c.strokeRect(16,16,w-32,h-32);c.strokeStyle=shade(col,-.35);c.lineWidth=14;c.strokeRect(40,40,w-80,h-80);
  c.strokeStyle=shade(col,.25);c.lineWidth=3;c.beginPath();c.ellipse(w/2,h/2,90,55,0,0,7);c.stroke();for(let i=0;i<9000;i++){c.fillStyle=rnd()<.5?'rgba(0,0,0,.09)':'rgba(255,255,255,.06)';c.fillRect(rnd()*w,rnd()*h,2,2)}})}
function markT(txt,npc){return once('mk'+txt,()=>ctex(128,128,c=>{const g=c.createRadialGradient(64,64,10,64,64,64);g.addColorStop(0,npc?'rgba(255,255,255,.55)':'rgba(255,210,63,.65)');g.addColorStop(1,'rgba(255,210,63,0)');c.fillStyle=g;c.fillRect(0,0,128,128);
  c.fillStyle=lg(c,0,30,0,98,npc?['#ffffff','#d9dfe4']:['#ffe27a','#e0aa00']);c.beginPath();c.arc(64,64,30,0,7);c.fill();c.lineWidth=4;c.strokeStyle='rgba(0,0,0,.6)';c.stroke();c.fillStyle='#1b1b1b';c.font='800 42px Nunito,sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(txt,64,67)}))}
function nameT(n){return ctex(256,64,c=>{c.font='800 30px Nunito,sans-serif';const w=Math.min(250,c.measureText(n).width+30);c.fillStyle='rgba(15,20,25,.75)';rr(c,128-w/2,8,w,46,23);c.fillStyle='#fff';c.textAlign='center';c.textBaseline='middle';c.fillText(n,128,32)})}
function corkT(){return ctex(1024,640,(c,w,h)=>{seed=12;c.fillStyle='#b58a5a';c.fillRect(0,0,w,h);for(let i=0;i<30000;i++){c.fillStyle=rnd()<.5?`rgba(90,55,25,${rnd()*.35})`:`rgba(230,200,150,${rnd()*.3})`;c.fillRect(rnd()*w,rnd()*h,2+rnd()*2,2+rnd()*2)}
  const pts=[];CASES.forEach((cs,i)=>{const cx=128+(i%4)*256,cy=165+Math.floor(i/4)*260;pts.push([cx,cy-95]);c.save();c.translate(cx,cy);c.rotate(((i*7)%5-2)*.025);c.fillStyle='rgba(0,0,0,.3)';c.fillRect(-100,-100,210,210);c.fillStyle=i>=3?'#e9e2d0':'#f3ecd9';c.fillRect(-105,-105,210,210);
    c.fillStyle='#7a5a2e';c.font='700 18px monospace';c.textAlign='center';c.fillText('SPIS '+(i+1),0,-62);c.fillStyle='#1b1b1b';c.font='700 21px serif';c.fillText(cs.t,0,-25);c.fillStyle='#c99a00';c.font='30px serif';c.fillText(starStr(stars[i]),0,18);
    if(stars[i]){c.strokeStyle='#c0262f';c.lineWidth=4;c.strokeRect(-62,45,124,34);c.fillStyle='#c0262f';c.font='700 20px monospace';c.fillText('VYŘEŠENO',0,70)}c.restore()});
  c.strokeStyle='#c0262f';c.lineWidth=4;c.beginPath();pts.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.stroke();pts.forEach(p=>{c.fillStyle='#d7263d';c.beginPath();c.arc(p[0],p[1],11,0,7);c.fill()});
  c.fillStyle='#fff';c.font='700 30px Nunito,sans-serif';c.textAlign='center';c.fillStyle='#1b1b1b';c.fillText('Ťukni a vyber si případ',w/2,h-18)})}

function buildRoom(def){
  const th=def.th,m=def.map,WH=2.8,sc=new THREE.Scene();sc.background=new THREE.Color('#0f1316');sc.environment=ENV;
  sc.add(new THREE.HemisphereLight('#fff6e6','#5b5048',.35));
  const sun=new THREE.DirectionalLight('#fff0d4',1.15);sun.position.set(W/2-4,11,-6);sun.target.position.set(W/2,0,H/2);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
  Object.assign(sun.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:40});sun.shadow.bias=-.0004;sun.shadow.normalBias=.02;sc.add(sun,sun.target);
  const pl=[[W*.3,H*.45],[W*.7,H*.45],[W*.5,H*.82]];pl.forEach(([x,z])=>{const l=new THREE.PointLight('#ffe2bd',.28,11,2);l.position.set(x,2.5,z);sc.add(l);
    const pn=new THREE.Mesh(RB(1.1,.04,1.1,.01),new THREE.MeshStandardMaterial({color:'#fff',emissive:'#fff6e8',emissiveIntensity:1}));pn.position.set(x,WH-.02,z);sc.add(pn)});
  const box=(geo,mat,x,y,z,cast)=>{const mm=new THREE.Mesh(geo,mat);mm.position.set(x,y,z);mm.castShadow=cast!==false;mm.receiveShadow=true;sc.add(mm);return mm};
  const fl=new THREE.Mesh(new THREE.PlaneGeometry(W,H),floorMat(th));fl.rotation.x=-Math.PI/2;fl.position.set(W/2,0,H/2);fl.receiveShadow=true;sc.add(fl);
  const ce=new THREE.Mesh(new THREE.PlaneGeometry(W,H),solid('#efede7',.95));ce.rotation.x=Math.PI/2;ce.position.set(W/2,WH,H/2);sc.add(ce);
  const pt=plaster(th.wall);const wm=new THREE.MeshStandardMaterial({map:pt,roughness:.92,envMapIntensity:.4});
  for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(m[y][x]==='#')box(new THREE.BoxGeometry(1,WH,1),wm,x+.5,WH/2,y+.5,false);
  if(th.brick){const bm=new THREE.MeshStandardMaterial({map:img('brick.jpg',(W-2)/2.2,WH/2.2),roughness:.9,envMapIntensity:.3});const bw=new THREE.Mesh(new THREE.PlaneGeometry(W-2,WH),bm);bw.position.set(W/2,WH/2,1.003);bw.receiveShadow=true;sc.add(bw)}
  const baseM=solid(shade(th.cap,.12),.5);
  box(new THREE.BoxGeometry(W-2,.12,.025),baseM,W/2,.06,1.0125,false);for(let y=1;y<H-1;y++){box(new THREE.BoxGeometry(.025,.12,1),baseM,1.0125,.06,y+.5,false);box(new THREE.BoxGeometry(.025,.12,1),baseM,W-1.0125,.06,y+.5,false)}
  const dx=m[H-1].indexOf('.');if(dx>0){box(RB(1.9,2.2,.08,.01),solid('#6b4423',.45),dx+1,1.1,H,false);box(new THREE.SphereGeometry(.035,12,8),solid('#d8d8d8',.2,.9),dx+1.7,1.05,H-.06,false);
    box(new THREE.BoxGeometry(2,WH-2.2,.4),wm,dx+1,2.2+(WH-2.2)/2,H,false);[0,2].forEach(o=>box(new THREE.BoxGeometry(.08,2.25,.12),solid('#f2efe8',.5),dx+o,1.12,H-.04,false));box(new THREE.BoxGeometry(2.08,.08,.12),solid('#f2efe8',.5),dx+1,2.24,H-.04,false);
    const mt=new THREE.Mesh(RB(1.6,.015,.8,.006),solid('#4a3d30',1));mt.position.set(dx+1,.008,H-.6);mt.receiveShadow=true;sc.add(mt)}
  const wt=winT(),frame=solid('#f4f2ec',.4);[3,8,12].forEach(wx=>{if(th.brick&&wx===12)return;const wn=new THREE.Mesh(new THREE.PlaneGeometry(1.6,1.1),new THREE.MeshBasicMaterial({map:wt,toneMapped:false}));wn.position.set(wx+.85,1.65,1.004);sc.add(wn);
    [[-.82,0,.06,1.22],[.82,0,.06,1.22],[0,0,.04,1.1]].forEach(([ox,_,w,h])=>box(new THREE.BoxGeometry(w,h,.06),frame,wx+.85+ox,1.65,1.03,false));[[.61],[-.61]].forEach(([oy])=>box(new THREE.BoxGeometry(1.7,.06,.06),frame,wx+.85,1.65+oy,1.03,false));
    box(RB(1.85,.05,.16,.01),frame,wx+.85,1.06,1.08,false)});
  const wood=new THREE.MeshStandardMaterial({map:img('wood.jpg',1,1),color:'#b47a4a',roughness:.55,envMapIntensity:.6}),woodD=new THREE.MeshStandardMaterial({map:img('wood.jpg',1,1),color:'#6e4428',roughness:.6,envMapIntensity:.5});
  const white=solid('#fbfaf6',.9),steel=solid('#cfd4da',.28,.85),gold=solid('#d4a017',.3,.9);
  let bb=[W,H,0,0,0];m.forEach((r,y)=>[...r].forEach((ch,x)=>{if(ch==='r')bb=[Math.min(bb[0],x),Math.min(bb[1],y),Math.max(bb[2],x),Math.max(bb[3],y),1]}));
  if(bb[4]){const rw=bb[2]-bb[0]+1,rh=bb[3]-bb[1]+1,rg=new THREE.Mesh(RB(rw-.1,.012,rh-.1,.005),new THREE.MeshStandardMaterial({map:rugT(th.rug),roughness:1,envMapIntensity:.3}));rg.position.set(bb[0]+rw/2,.006,bb[1]+rh/2);rg.receiveShadow=true;sc.add(rg)}
  comps(m,'T').forEach(([x,z,w,d])=>{box(RB(w-.1,.05,d-.15,.015),wood,x+w/2,.745,z+d/2);[[.1,.12],[w-.1,.12],[.1,d-.12],[w-.1,d-.12]].forEach(([a,b])=>box(RB(.05,.72,.05,.01),woodD,x+a,.36,z+b));
    seed=x*7+z*3+1;for(let k=0;k<w;k++)if(rnd()<.65){const p=new THREE.Mesh(new THREE.PlaneGeometry(.21,.29),new THREE.MeshStandardMaterial({map:texT(8),roughness:.9}));p.rotation.set(-Math.PI/2,0,rnd()-.5);p.position.set(x+.4+k+rnd()*.3,.771,z+.25+rnd()*(d-.5));p.receiveShadow=true;sc.add(p)}
    if(w>=3&&def!==OFFICE){const mug=box(new THREE.CylinderGeometry(.04,.036,.1,18),solid('#2f6fa8',.35),x+w-.4,.82,z+d/2);}});
  comps(m,'K').forEach(([x,z,w])=>{box(RB(w,.88,.62,.015),solid('#e6e8eb',.45),x+w/2,.44,z+.31);box(RB(w+.02,.04,.66,.01),new THREE.MeshStandardMaterial({color:'#bfc6cd',roughness:.22,metalness:.85}),x+w/2,.9,z+.33);
    for(let k=0;k<w;k++){box(new THREE.BoxGeometry(.004,.8,.004),solid('#9aa2ad'),x+k,.45,z+.622,false);box(RB(.2,.018,.02,.006),steel,x+k+.5,.78,z+.64,false)}
    [[1.3,.2],[1.7,.2],[1.3,.45],[1.7,.45]].forEach(([a,b])=>{box(new THREE.CylinderGeometry(.09,.09,.015,24),solid('#181818',.35),x+a,.93,z+b);box(new THREE.TorusGeometry(.06,.006,6,24),solid('#444',.3,.5),x+a,.94,z+b).rotation.x=Math.PI/2});
    if(w>3.5){box(RB(.6,.12,.42,.03),solid('#9aa3ab',.15,.9),x+3.5,.86,z+.33);box(new THREE.CylinderGeometry(.012,.012,.25,8),steel,x+3.5,1.03,z+.12)}});
  comps(m,'S').forEach(([x,z,w])=>{const zz=z+.2;box(RB(w,2.1,.04,.005),woodD,x+w/2,1.05,z+.02);[0,w].forEach(o=>box(RB(.04,2.1,.38,.008),woodD,x+o,1.05,zz));for(let k=0;k<5;k++)box(RB(w,.03,.38,.006),wood,x+w/2,.015+k*.51,zz);
    const n=Math.floor(w*170),im=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshStandardMaterial({roughness:.6,envMapIntensity:.5}),n),o=new THREE.Object3D(),col=new THREE.Color();let idx=0;seed=x*13+3;
    for(let k=0;k<4;k++){let bx=x+.05;while(bx<x+w-.06&&idx<n){const bw=.022+rnd()*.032,bh=.25+rnd()*.17;o.position.set(bx+bw/2,.03+k*.51+bh/2,zz+.02);o.scale.set(bw,bh,.24+rnd()*.07);o.rotation.set(0,0,0);o.updateMatrix();im.setMatrixAt(idx,o.matrix);col.set(BOOKS[Math.floor(rnd()*BOOKS.length)]);im.setColorAt(idx,col);idx++;bx+=bw+.003;if(rnd()<.05)bx+=.12}}
    im.count=idx;im.castShadow=true;im.receiveShadow=true;sc.add(im)});
  comps(m,'C').forEach(([x,z,w,d])=>{box(RB(w,1,d-.25,.02),woodD,x+w/2,.5,z+d/2);box(RB(w+.04,.04,d-.18,.01),wood,x+w/2,1.02,z+d/2);
    if(def===OFFICE){box(RB(.32,.4,.3,.03),solid('#1d1d1d',.3,.4),x+.5,1.24,z+d/2);box(new THREE.CylinderGeometry(.045,.04,.1,18),white,x+.5,1.09,z+d/2+.05);box(RB(.5,.3,.3,.03),solid('#2a6e4e',.5),x+1.4,1.19,z+d/2)}
    else box(RB(.3,.2,.25,.02),solid('#2f3338',.35),x+w-.4,1.14,z+d/2)});
  comps(m,'V').forEach(([x,z,w,d])=>{box(RB(w-.1,.72,d-.2,.02),woodD,x+w/2,.36,z+d/2);box(RB(w-.14,.5,d-.26,.01),new THREE.MeshPhysicalMaterial({color:'#ffffff',transparent:true,opacity:.18,roughness:0,metalness:0,envMapIntensity:1.2}),x+w/2,.97,z+d/2,false);
    const vs=box(new THREE.SphereGeometry(.12,28,20),gold,x+w/2,.9,z+d/2);vs.scale.y=1.4});
  comps(m,'F').forEach(([x,z,w],k)=>{box(RB(.06,1.25,.06,.01),woodD,x+w/2,.62,z+.55);box(RB(.6,.04,.4,.01),woodD,x+w/2,.02,z+.55);box(RB(1.62,1,.07,.02),gold,x+w/2,1.6,z+.5);
    const p=new THREE.Mesh(new THREE.PlaneGeometry(1.44,.84),new THREE.MeshStandardMaterial({map:paintT(k),roughness:.75}));p.position.set(x+w/2,1.6,z+.539);sc.add(p)});
  comps(m,'D').forEach(([x,z,w,d])=>{box(RB(w,.05,d-.1,.02),wood,x+w/2,.76,z+d/2);[.25,w-.25].forEach(o=>box(RB(.42,.73,d-.2,.015),woodD,x+o,.365,z+d/2));box(RB(w-.9,.5,.03,.01),woodD,x+w/2,.48,z+d-.12);
    box(RB(.5,.02,.34,.01),solid('#2a2d31',.3,.6),x+w/2,.795,z+.6);const scr=box(RB(.5,.32,.015,.01),solid('#2a2d31',.3,.6),x+w/2,.95,z+.45);scr.rotation.x=-.2;const sp=new THREE.Mesh(new THREE.PlaneGeometry(.46,.28),new THREE.MeshBasicMaterial({color:'#9cc4e4',toneMapped:false}));sp.position.set(x+w/2,.95,z+.442);sp.rotation.set(-.2,Math.PI,0);sc.add(sp);
    box(new THREE.CylinderGeometry(.07,.08,.02,20),solid('#222',.3,.6),x+.35,.795,z+.35);box(new THREE.CylinderGeometry(.008,.008,.35,8),solid('#222',.3,.6),x+.35,.97,z+.35);const sh=box(new THREE.ConeGeometry(.12,.14,24,1,true),new THREE.MeshStandardMaterial({color:'#1f5c3a',roughness:.4,side:THREE.DoubleSide,emissive:'#ffd89a',emissiveIntensity:.15}),x+.35,1.16,z+.35);
    const lp=new THREE.PointLight('#ffd89a',.35,3,2);lp.position.set(x+.35,1.08,z+.35);sc.add(lp);
    const pa=new THREE.Mesh(new THREE.PlaneGeometry(.21,.29),new THREE.MeshStandardMaterial({map:texT(8,null,'SPIS'),roughness:.9}));pa.rotation.set(-Math.PI/2,0,.2);pa.position.set(x+w-.45,.787,z+.55);sc.add(pa);
    box(new THREE.CylinderGeometry(.04,.035,.1,18),white,x+w-.25,.84,z+.3)});
  for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(m[y][x]==='X'){seed=x*11+y*3;const cm=new THREE.MeshStandardMaterial({map:img('wood.jpg',1,1),color:'#9a7048',roughness:.75});box(RB(.92,.92,.92,.03),cm,x+.5,.46,y+.5);[[.47,0],[-.47,0]].forEach(([o])=>box(new THREE.BoxGeometry(.02,.9,.94),solid('#5a3b22',.7),x+.5+o*.99,.46,y+.5));
    if(rnd()<.6){const t=box(RB(.7,.6,.7,.03),cm,x+.5+(rnd()-.5)*.1,1.22,y+.5+(rnd()-.5)*.1);t.rotation.y=rnd()-.5}}
  for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(m[y][x]==='P'){box(new THREE.CylinderGeometry(.2,.15,.42,24),new THREE.MeshStandardMaterial({color:'#b5652f',roughness:.85}),x+.5,.21,y+.5);box(new THREE.CylinderGeometry(.18,.18,.02,20),solid('#3b2a1e',1),x+.5,.41,y+.5,false);seed=x*5+y;
    for(let i=0;i<22;i++){const a=rnd()*Math.PI*2,r=.05+rnd()*.12,lf=new THREE.Mesh(new THREE.SphereGeometry(.09,10,8),solid(['#2d6a3e','#3d8a52','#4fa865','#2a5a35'][i%4],.6));lf.scale.set(.5,.12,1.6);lf.position.set(x+.5+Math.cos(a)*r*1.6,.5+rnd()*.55,y+.5+Math.sin(a)*r*1.6);lf.rotation.set(rnd()*.8-.4,a,rnd()*1.2-.6);lf.castShadow=true;sc.add(lf)}}
  return {sc,wood,woodD,white,steel,gold};
}
function item3(sh,e,env,def){
  const g=new THREE.Group(),x=e.x+.5,z=e.y+.5;g.position.set(x,0,z);g.rotation.y=sh==='cork'?0:Math.atan2(W/2-x,H/2-z);const {wood,woodD,white,steel,gold}=env;
  const b=(geo,mat,px,py,pz)=>{const mm=new THREE.Mesh(geo,mat);mm.position.set(px,py,pz);mm.castShadow=true;mm.receiveShadow=true;g.add(mm);return mm};
  const flat=(w,h,tex,py,rz)=>{const p=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshStandardMaterial({map:tex,roughness:.9}));p.rotation.set(-Math.PI/2,0,rz||0);p.position.y=py;p.receiveShadow=true;g.add(p);return p};
  const stand=()=>{b(RB(.62,.04,.5,.012),wood,0,.68,0);[[-.26,-.2],[.26,-.2],[-.26,.2],[.26,.2]].forEach(([a,c])=>b(RB(.04,.66,.04,.008),woodD,a,.33,c))};
  if(sh==='book'){stand();const bk=b(RB(.26,.05,.34,.006),solid('#6e2a1f',.5),0,.725,0);bk.rotation.y=.3;const pg=b(new THREE.BoxGeometry(.25,.04,.32),solid('#f1ead6',.9),.008,.725,0);pg.rotation.y=.3;b(new THREE.BoxGeometry(.12,.002,.02),gold,0,.751,.05).rotation.y=.3}
  else if(sh==='paper'){stand();flat(.24,.32,texT(9),.702,-.25)}
  else if(sh==='photo'){stand();flat(.18,.21,ctex(256,300,(c,w,h)=>{c.fillStyle='#fbfaf6';c.fillRect(0,0,w,h);c.fillStyle=lg(c,0,20,0,220,['#9cc7e8','#7a9a6a']);c.fillRect(20,20,216,200);c.fillStyle='#333';for(let i=0;i<9;i++){c.beginPath();c.arc(36+i*23,160,10,0,7);c.fill();c.fillRect(28+i*23,168,16,32)}c.fillStyle='#555';c.font='20px monospace';c.fillText('14:15',150,270)}),.702,.3)}
  else if(sh==='prints'){const pm=new THREE.MeshStandardMaterial({color:'#f4f1ea',roughness:1,transparent:true,opacity:.9});for(let i=0;i<6;i++){const f=new THREE.Mesh(new THREE.CircleGeometry(.05,16),pm);f.scale.set(.8,2.2,1);f.rotation.x=-Math.PI/2;f.position.set((i%2?.08:-.08),.004,-.45+i*.18);g.add(f)}const dust=new THREE.Mesh(new THREE.CircleGeometry(.3,20),new THREE.MeshBasicMaterial({color:'#ffffff',transparent:true,opacity:.25}));dust.rotation.x=-Math.PI/2;dust.position.set(0,.003,-.5);g.add(dust)}
  else if(sh==='crumbs'){seed=5;const cm=solid('#4a2512',.9);for(let i=0;i<22;i++){const s=new THREE.Mesh(new THREE.DodecahedronGeometry(.008+rnd()*.018),cm);s.position.set(rnd()*.6-.3,.01,rnd()*.6-.3);s.castShadow=true;g.add(s)}}
  else if(sh==='locker'){b(RB(.62,1.85,.5,.02),solid('#7d8a96',.42,.55),0,.925,0);for(let i=0;i<5;i++)b(new THREE.BoxGeometry(.36,.012,.01),solid('#4a535c'),0,1.6-i*.05,.252);
    const dl=b(new THREE.CylinderGeometry(.05,.05,.03,24),steel,.18,.95,.26);dl.rotation.x=Math.PI/2;b(new THREE.BoxGeometry(.03,.12,.01),solid('#ffd23f',.4),.18,1.15,.256)}
  else if(sh==='register'){stand();b(RB(.4,.14,.32,.02),solid('#3a3f45',.4,.3),0,.77,0);const s=b(RB(.3,.12,.03,.01),solid('#222',.3),0,.9,-.1);s.rotation.x=-.3;const l=new THREE.Mesh(new THREE.PlaneGeometry(.24,.06),new THREE.MeshBasicMaterial({color:'#7cf29a',toneMapped:false}));l.position.set(0,.91,-.083);l.rotation.x=-.3;g.add(l)}
  else if(sh==='frame'){b(RB(.06,1.25,.06,.01),woodD,0,.62,-.05);b(RB(.5,.04,.4,.01),woodD,0,.02,-.05);b(RB(1.1,.8,.07,.02),gold,0,1.55,0);b(new THREE.BoxGeometry(.95,.65,.02),solid('#1f1a17',.9),0,1.55,.04);
    const nt=new THREE.Mesh(new THREE.PlaneGeometry(.3,.38),new THREE.MeshStandardMaterial({map:texT(0,'TLMBE'),roughness:.9}));nt.position.set(0,1.55,.055);nt.rotation.z=.1;g.add(nt)}
  else if(sh==='screw'){const sw=new THREE.Group();sw.position.y=.03;sw.rotation.set(0,.5,Math.PI/2);g.add(sw);const hd=new THREE.Mesh(new THREE.CylinderGeometry(.03,.028,.13,16),solid('#e8590c',.35));hd.position.y=.06;hd.castShadow=true;sw.add(hd);
    const sf=new THREE.Mesh(new THREE.CylinderGeometry(.007,.007,.16,10),steel);sf.position.y=-.08;sw.add(sf);const nl=new THREE.Mesh(new THREE.SphereGeometry(.012,8,8),solid('#ff7a2a',.2));nl.position.set(0,.13,.02);sw.add(nl)}
  else if(sh==='robot'){const rm=solid('#a3abb3',.3,.7);b(RB(.42,.45,.36,.04),rm,0,.38,0);b(RB(.3,.22,.26,.03),rm,0,.73,0);b(RB(.24,.08,.02,.01),solid('#111',.2),0,.75,.135);const ey=new THREE.Mesh(new THREE.PlaneGeometry(.04,.03),new THREE.MeshBasicMaterial({color:'#ff3b30',toneMapped:false}));ey.position.set(-.06,.75,.147);g.add(ey);
    b(new THREE.CylinderGeometry(.008,.008,.18,8),solid('#444'),.04,.93,0).rotation.z=-.4;[-1,1].forEach(s=>{const wh=b(new THREE.CylinderGeometry(.09,.09,.06,20),solid('#222',.8),s*.24,.09,0);wh.rotation.z=Math.PI/2});b(new THREE.BoxGeometry(.02,.2,.02),solid('#ffcf3f',.4),-.1,.4,.185).rotation.z=.5}
  else if(sh==='desk'){b(RB(.9,.05,.6,.015),wood,0,.76,0);b(RB(.4,.7,.55,.015),woodD,.22,.37,0);b(RB(.36,.15,.01,.004),wood,.22,.55,.28);b(RB(.1,.02,.02,.005),gold,.22,.55,.29);[[-.4,-.25],[-.4,.25]].forEach(([a,c])=>b(RB(.04,.74,.04,.008),woodD,a,.37,c));flat(.2,.26,texT(6),.787,.3)}
  else if(sh==='cork'){[-.75,.75].forEach(o=>b(RB(.06,1.9,.06,.01),woodD,o,.95,.25));b(RB(1.78,1.1,.06,.02),woodD,0,1.45,.25);const ck=new THREE.Mesh(new THREE.PlaneGeometry(1.66,1),new THREE.MeshStandardMaterial({map:corkT(),roughness:.95}));ck.position.set(0,1.45,.282);g.add(ck);g.userData.cork=ck}
  return g;
}

/* tvůrce postavičky */
function maker(){
  endGame();
  const L=ME?{...ME}:{n:"",skin:OPT.skin[2],hair:OPT.hair[1],hs:"short",shirt:OPT.shirt[0],pants:OPT.pants[0],cap:OPT.cap[0],glasses:false};
  const grp=(key,label)=>`<div class="grp"><span>${label}</span><div class="sw" data-k="${key}">${key==='hs'?OPT.hs.map(o=>`<button class="tx" data-v="${o[0]}" aria-pressed="${L.hs===o[0]}">${o[1]}</button>`).join('')
    :OPT[key].map((v,j)=>`<button data-v="${v}" style="background:${v}" aria-label="${label} ${j+1}" aria-pressed="${L[key]===v}"></button>`).join('')}</div></div>`;
  app.innerHTML=`<div class="top">${logo}<div><h1>Vytvoř si detektiva</h1><p>Vymysli jméno a navrhni, jak bude vypadat. Postavičkou otočíš tažením prstu.</p></div></div>
  <div class="maker"><div class="prev"><div class="pv3" id="pv"></div><div class="tag" id="tg"></div></div>
  <div class="grp" style="gap:14px"><label class="nm">Jméno detektiva<input id="nm" maxlength="14" autocomplete="off" placeholder="Např. Kuba Bystrozraký" value="${esc(L.n)}"></label>
  ${grp('skin','Barva pleti')}${grp('hs','Účes')}${grp('hair','Barva vlasů')}${grp('shirt','Tričko')}${grp('pants','Kalhoty')}${grp('cap','Barva kšiltovky')}
  <div class="grp"><span>Brýle</span><div class="sw" data-k="glasses"><button class="tx" data-v="0" aria-pressed="${!L.glasses}">Bez brýlí</button><button class="tx" data-v="1" aria-pressed="${!!L.glasses}">S brýlemi</button></div></div>
  <p class="err" id="er" aria-live="polite"></p>
  <div class="mk-actions"><button class="rnd" id="rd">Náhodně</button><button class="go" id="go">Hotovo, jdu do kanceláře!</button></div></div></div>`;
  const sc=new THREE.Scene();sc.environment=ENV||(R(),ENV);sc.background=new THREE.Color('#e9e1cc');
  const cam=new THREE.PerspectiveCamera(30,1,.05,20);cam.position.set(0,1.0,4.4);cam.lookAt(0,.92,0);
  const kl=new THREE.DirectionalLight('#fff4e0',1.1);kl.position.set(2,4,3);kl.castShadow=true;kl.shadow.mapSize.set(1024,1024);sc.add(kl,new THREE.HemisphereLight('#fff','#a89878',.4));
  const fl=new THREE.Mesh(new THREE.CircleGeometry(1.2,48),new THREE.MeshStandardMaterial({color:'#d8cdb2',roughness:.9}));fl.rotation.x=-Math.PI/2;fl.receiveShadow=true;sc.add(fl);
  let P=null,rot=0.4,drag=null,t=0;const rebuild=()=>{if(P)sc.remove(P.g);P=person3({...L,adult:1});P.g.rotation.y=rot;sc.add(P.g)};rebuild();
  const pv=$('#pv');mount(pv,(dt)=>{t+=dt;if(!drag)rot+=dt*.35;P.g.rotation.y=rot;animP(P,t,dt,false,false,0);const w=pv.clientWidth,h=pv.clientHeight;if(w&&h){cam.aspect=w/h;cam.updateProjectionMatrix()}REN.render(sc,cam)});
  REN.domElement.onpointerdown=e=>{drag=e.clientX;try{REN.domElement.setPointerCapture(e.pointerId)}catch(_){}};REN.domElement.onpointermove=e=>{if(drag!==null){rot+=(e.clientX-drag)*.012;drag=e.clientX}};REN.domElement.onpointerup=REN.domElement.onpointercancel=()=>{drag=null};
  const tag=()=>{$('#tg').textContent=L.n.trim()||'Bezejmenný detektiv'};tag();
  const sync=()=>app.querySelectorAll('.sw').forEach(g=>{const k=g.dataset.k;g.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',k==='glasses'?(b.dataset.v==='1')===!!L.glasses:L[k]===b.dataset.v))});
  app.querySelectorAll('.sw').forEach(g=>g.onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=g.dataset.k;L[k]=k==='glasses'?b.dataset.v==='1':b.dataset.v;
    if(k==='cap'&&L.hs!=='cap')L.hs='cap';SFX.pick();sync();rebuild()});
  $('#nm').oninput=e=>{L.n=e.target.value;tag()};
  $('#rd').onclick=()=>{const r=a=>a[Math.floor(Math.random()*a.length)];L.skin=r(OPT.skin);L.hs=r(OPT.hs)[0];L.hair=r(OPT.hair);L.shirt=r(OPT.shirt);L.pants=r(OPT.pants);L.cap=r(OPT.cap);L.glasses=Math.random()<.3;SFX.pick();sync();rebuild()};
  $('#go').onclick=()=>{const n=L.n.trim();if(!n){$('#er').textContent='Napiš jméno svého detektiva.';$('#nm').focus();SFX.wrong();return}
    L.n=n.slice(0,14);ME={...L};save();SFX.win();office()};
  window.scrollTo(0,0);
}

/* hra */
function endGame(){if(G&&G.cleanup)G.cleanup();G=null;unmount();hush();modal.hidden=true}
function office(solved){start(OFFICE,-1,solved)}
function play(i){start(CASES[i],i)}
function start(def,i,solved){
  endGame();const isOff=i<0;
  const ents=isOff?[{ty:'boss',x:def.boss.x,y:def.boss.y,done:greeted,asked:new Set(),L:def.boss},{ty:'board',x:def.board.x,y:def.board.y,done:true}]
    :[...def.sus.map((s,k)=>({ty:'n',k,x:s.x,y:s.y,done:false,asked:new Set(),L:{skin:SKIN[(k*2+i)%5],pants:'#2d3142',...s}})),...def.items.map((it,k)=>({ty:'i',k,x:it.x,y:it.y,done:false})),{ty:'q',x:def.puz.x,y:def.puz.y,done:false}];
  const touch=matchMedia('(pointer:coarse)').matches,total=stars.reduce((a,b)=>a+b,0);
  app.innerHTML=`<div class="bar">${isOff?'<button class="pill w" id="chg">Postavička</button>':'<button class="pill w" id="bk">← Kancelář</button>'}<h2>${isOff?'Kancelář Lupa':def.t}</h2><button class="pill" id="nb">${isOff?'Spisy ★ '+total+'/'+CASES.length*3:'Zápisník'}</button></div>
  <div class="game" id="game"><div id="three"></div><canvas id="mini" width="160" height="120" aria-hidden="true"></canvas><div class="cross" id="cross"></div>
  <div class="joy" id="joy" hidden><div class="knob" id="knob"></div></div>${touch?'<div class="joyhint">Táhni prstem<br>a choď</div>':''}<div class="toast" id="toast" hidden></div><div class="dlg" id="dlg" hidden></div></div>
  <button class="act" id="act" disabled>${isOff?'Jdi za inspektorem Lupou':'Najdi osobu s ! nebo věc s ?'}</button>
  <div class="tools"><button class="pill s" id="vw"></button><button class="pill s" id="vo"></button><button class="pill s" id="snd"></button>${isOff?'<button class="pill s" id="bdg">Odznaky</button><button class="pill s" id="rst">Začít znovu</button>':''}</div>`;
  R();const env=buildRoom(def),sc=env.sc,cam=new THREE.PerspectiveCamera(66,1,.03,60);cam.rotation.order='YXZ';
  const picks=[];
  ents.forEach(e=>{let obj;
    if(e.L){const p=person3(e.L);p.g.position.set(e.x+.5,0,e.y+.5);p.g.rotation.y=Math.atan2(W/2-e.x,H/2-e.y);sc.add(p.g);e.p3=p;obj=p.g}
    else{obj=item3(e.ty==='board'?'cork':e.ty==='q'?def.puz.sh:def.items[e.k].sh,e,env,def);sc.add(obj)}
    obj.userData.ent=e;picks.push(obj);
    const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:markT(e.L?'!':'?',!!e.L),depthWrite:false}));sp.scale.set(.42,.42,1);sp.position.set(e.x+.5,e.L?(e.L.adult?2.0:1.85):(e.ty==='q'&&def.puz.sh!=='desk'?2.15:1.2),e.y+.5);sc.add(sp);e.sp=sp;e.spy=sp.position.y});
  const ring=new THREE.Mesh(new THREE.TorusGeometry(.45,.02,8,48),new THREE.MeshBasicMaterial({color:'#ffd23f',transparent:true,opacity:.85}));ring.rotation.x=-Math.PI/2;ring.position.y=.02;ring.visible=false;sc.add(ring);
  const me=person3(ME);sc.add(me.g);const tag=new THREE.Sprite(new THREE.SpriteMaterial({map:nameT(ME.n),depthWrite:false}));tag.scale.set(.6,.15,1);sc.add(tag);
  const S={sc,cam,picks,ring,me,tag};
  G={i,c:def,isOff,ents,S,hint:false,wrong:0,t:0,dlg:false,near:undefined,pos:{x:def.start[0]+.5,z:def.start[1]+.5},yaw:0,pitch:-.1,keys:{},joy:{x:0,y:0},stepT:0,alive:true,touch,talker:null};
  G.onResize=(w,h)=>{cam.aspect=w/h;cam.fov=w<h?76:64;cam.updateProjectionMatrix()};
  const wrap=$('#three');mount(wrap,(dt)=>{if(!G||!G.alive)return;update(dt);REN.render(sc,cam);mini()});
  const el=REN.domElement;el.onpointerdown=el.onpointermove=el.onpointerup=el.onpointercancel=null;
  const labels=()=>{$('#vw').textContent=camMode==='fp'?'Pohled: z očí':'Pohled: zezadu';$('#vo').textContent=voiceOn?'Hlas: zap.':'Hlas: vyp.';$('#snd').textContent=muted?'Zvuky: vyp.':'Zvuky: zap.';$('#cross').hidden=camMode!=='fp'};labels();
  $('#vw').onclick=()=>{camMode=camMode==='fp'?'tp':'fp';save();labels();SFX.click()};
  $('#vo').onclick=()=>{voiceOn=!voiceOn;save();labels();if(!voiceOn)hush();else speak('Hlas je zapnutý.',1)};
  $('#snd').onclick=()=>{muted=!muted;save();labels()};
  if(isOff){$('#chg').onclick=maker;$('#bdg').onclick=()=>{SFX.open();badgeView()};$('#nb').onclick=()=>{SFX.open();cases()};$('#rst').onclick=()=>{box.innerHTML='<h2>Začít znovu?</h2><p>Smažou se všechny hvězdy i odznaky a případy budou zase zamčené. Tvoje postavička zůstane.</p><div class="end" style="gap:8px"><button class="btn" id="no">Ne</button><button class="btn" id="yes" style="background:var(--red);color:#fff">Ano, smazat</button></div>';modal.hidden=false;G.dlg=true;
    $('#no').onclick=()=>{modal.hidden=true;G.dlg=false};$('#yes').onclick=()=>{stars=CASES.map(()=>0);badges=new Set();saveBadges();greeted=false;save();office()}}}
  else{$('#bk').onclick=()=>office();$('#nb').onclick=()=>{SFX.open();notebook()}}
  $('#act').onclick=()=>{if(G.near)interact(G.near)};
  /* ovládání */
  const ptr=new Map(),joy=$('#joy'),knob=$('#knob'),gm=$('#game');
  el.onpointerdown=e=>{if(G.dlg)return;try{el.setPointerCapture(e.pointerId)}catch(_){}const r=el.getBoundingClientRect(),lx=e.clientX-r.left,ly=e.clientY-r.top,left=e.pointerType!=='mouse'&&lx<r.width*.45;
    ptr.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:performance.now(),joy:left,mv:0});
    if(left){joy.hidden=false;joy.style.left=(lx-55)+'px';joy.style.top=(ly-55)+'px';knob.style.transform='translate(0,0)';const jh=gm.querySelector('.joyhint');if(jh)jh.remove()}};
  el.onpointermove=e=>{const p=ptr.get(e.pointerId);if(!p||G.dlg)return;p.mv=Math.max(p.mv,Math.hypot(e.clientX-p.sx,e.clientY-p.sy));
    if(p.joy){let dx=e.clientX-p.sx,dy=e.clientY-p.sy;const d=Math.hypot(dx,dy);if(d>50){dx*=50/d;dy*=50/d}G.joy={x:dx/50,y:dy/50};knob.style.transform=`translate(${dx}px,${dy}px)`}
    else{G.yaw-=(e.clientX-p.x)*.0055;G.pitch=Math.max(-.75,Math.min(.6,G.pitch-(e.clientY-p.y)*.0045));p.x=e.clientX;p.y=e.clientY}};
  el.onpointerup=el.onpointercancel=e=>{const p=ptr.get(e.pointerId);if(!p)return;ptr.delete(e.pointerId);if(p.joy){G.joy={x:0,y:0};joy.hidden=true}else if(p.mv<9&&performance.now()-p.t<400&&!G.dlg)tap(e)};
  const ray=new THREE.Raycaster();
  function tap(e){const r=el.getBoundingClientRect();ray.setFromCamera({x:(e.clientX-r.left)/r.width*2-1,y:-(e.clientY-r.top)/r.height*2+1},cam);
    const hit=ray.intersectObjects(picks,true)[0];if(!hit)return;let o=hit.object;while(o&&!o.userData.ent)o=o.parent;if(!o)return;const en=o.userData.ent;
    const d=Math.hypot(en.x+.5-G.pos.x,en.y+.5-G.pos.z);if(d<2.5)interact(en);else toast('Přijď blíž!')}
  G.cleanup=()=>{G.alive=false;sc.traverse(o=>{if(o.geometry&&o.geometry!==HEADG)o.geometry.dispose()})};
  const hint=touch?'Prstem na levé straně obrazovky choď: nahoru jdeš dopředu, doleva a doprava se otáčíš. Pravou stranou se můžeš rozhlížet. Na osobu nebo věc ťukni, až budeš blízko.':'Šipka nahoru (nebo W) = dopředu, šipka dolů (S) = dozadu, šipky doleva a doprava (A, D) = otáčení. Na osobu nebo věc klikni, až budeš blízko (nebo zmáčkni E).';
  if(isOff){const b=def.boss;
    if(solved!=null){const last=solved===CASES.length-1;say(b.n,last?`Dokázal jsi to, <b>${esc(ME.n)}</b>! Chytil jsi Stína. Robert Mlha býval kdysi můj parťák. Nikdy jsem nevěřil, že ho někdo dopadne. Jsi nejlepší detektiv, jakého jsem kdy měl!`:solved===2?`Výborná práce, <b>${esc(ME.n)}</b>! Ale mám špatnou zprávu. Ve městě začal řádit zloděj, který si říká Stín. Na místě činu nechává černé karty s písmeny. Nové spisy už visí na nástěnce.`:solved>=3?`Skvělé, <b>${esc(ME.n)}</b>! Další černá karta je v našich rukou. Stín je nám čím dál blíž. Další spis čeká na nástěnce.`:`Výborná práce, <b>${esc(ME.n)}</b>! Případ „${CASES[solved].t}“ je uzavřený. Na nástěnce už na tebe čeká další spis.`,[{t:'Díky, šéfe!'}],pitchOf(b),b.v);G.talker=ents[0]}
    else if(!greeted)say('Kancelář Lupa',`Vítej v detektivní kanceláři Lupa, <b>${esc(ME.n)}</b>! Jdi za inspektorem Lupou, má pro tebe práci. <small><br><br>${hint}</small>`,[{t:'Jdu na to!'}],1)}
  else say('Spis č. '+(i+1),`Detektive <b>${esc(ME.n)}</b>, jsme na místě! ${def.intro} <small><br><br>${hint}</small>`,[{t:'Jdu na to!'}],1);
  updBar();window.scrollTo(0,0);
}
let toastT=0;function toast(t){const el=$('#toast');if(!el)return;el.textContent=t;el.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>{el.hidden=true},1400)}
const entAt=(x,y)=>G.ents.find(e=>e.x===x&&e.y===y);
const walk=(x,y)=>x>=0&&y>=0&&x<W&&y<H&&'.r'.includes(G.c.map[y][x]);
const free=(x,y)=>walk(x,y)&&!entAt(x,y);
function can(x,z){const r=.24;for(const a of [-r,r])for(const b of [-r,r])if(!free(Math.floor(x+a),Math.floor(z+b)))return false;return true}
function update(dt){
  const g=G,S=g.S,k=g.keys;g.t+=dt;
  let fw=0,st=0,tr=0;
  if(!g.dlg){if(k.KeyW||k.ArrowUp)fw++;if(k.KeyS||k.ArrowDown)fw--;if(k.KeyA||k.ArrowLeft)tr++;if(k.KeyD||k.ArrowRight)tr--;fw-=g.joy.y;tr-=g.joy.x*1.1}
  g.yaw+=tr*2.4*dt;
  const fx=-Math.sin(g.yaw),fz=-Math.cos(g.yaw),rx=Math.cos(g.yaw),rz=-Math.sin(g.yaw);
  let vx=fx*fw+rx*st,vz=fz*fw+rz*st;const len=Math.hypot(vx,vz);if(len>1){vx/=len;vz/=len}
  const mv=len>.08;
  if(mv){const sp=2.4*dt,nx=g.pos.x+vx*sp,nz=g.pos.z+vz*sp;if(can(nx,g.pos.z))g.pos.x=nx;if(can(g.pos.x,nz))g.pos.z=nz;g.stepT-=dt;if(g.stepT<=0){SFX.step();g.stepT=.4}}
  const bob=mv&&camMode==='fp'?Math.abs(Math.sin(g.t*8.5))*.03:0;
  if(camMode==='fp'){S.cam.position.set(g.pos.x,1.45+bob,g.pos.z);S.cam.rotation.set(g.pitch,g.yaw,0);S.me.g.visible=false;S.tag.visible=false}
  else{let d=2.4;while(d>.6&&!walk(Math.floor(g.pos.x-fx*d),Math.floor(g.pos.z-fz*d)))d-=.15;S.cam.position.set(g.pos.x-fx*d,2.0,g.pos.z-fz*d);S.cam.lookAt(g.pos.x+fx*.9,1.1+g.pitch*.8,g.pos.z+fz*.9);
    S.me.g.visible=true;S.me.g.position.x=g.pos.x;S.me.g.position.z=g.pos.z;S.me.g.rotation.y=g.yaw+Math.PI;S.tag.visible=true;S.tag.position.set(g.pos.x,1.88,g.pos.z)}
  animP(S.me,g.t,dt,mv,false,0);
  const speaking=performance.now()<talkUntil;
  g.ents.forEach(e=>{if(e.p3){const dx=g.pos.x-(e.x+.5),dz=g.pos.z-(e.y+.5),d=Math.hypot(dx,dz);let look=0;
      if(d<5){const tgt=Math.atan2(dx,dz);let cur=e.p3.g.rotation.y,df=((tgt-cur+Math.PI*3)%(Math.PI*2))-Math.PI;if(Math.abs(df)>.6)e.p3.g.rotation.y=cur+df*Math.min(1,dt*2.5);else look=df}
      animP(e.p3,g.t+e.x,dt,false,speaking&&g.talker===e&&g.dlg,look)}
    e.sp.visible=!e.done&&Math.hypot(g.pos.x-e.x-.5,g.pos.z-e.y-.5)>1.4;e.sp.position.y=e.spy+Math.sin(g.t*3+e.x)*.05});
  let best=null,bs=9;if(!g.dlg)g.ents.forEach(e=>{const dx=e.x+.5-g.pos.x,dz=e.y+.5-g.pos.z,d=Math.hypot(dx,dz);if(d>1.8)return;const dot=(dx*fx+dz*fz)/d;if(d>1.1&&dot<.45)return;const s=d-dot*.6;if(s<bs){bs=s;best=e}});
  if(best!==g.near){g.near=best;const b=$('#act');if(b){if(best){b.disabled=false;b.textContent=best.ty==='n'?'Mluvit s: '+g.c.sus[best.k].n:best.ty==='boss'?'Mluvit s: '+g.c.boss.n:best.ty==='board'?'Vybrat případ':best.ty==='i'?'Prozkoumat: '+g.c.items[best.k].n:'Prozkoumat: '+g.c.puz.n}
    else{b.disabled=true;b.textContent=g.isOff?'Jdi za inspektorem Lupou nebo k nástěnce':'Najdi osobu s ! nebo věc s ?'}}}
  S.ring.visible=!!g.near;if(g.near){S.ring.position.x=g.near.x+.5;S.ring.position.z=g.near.y+.5;S.ring.scale.setScalar(1+Math.sin(g.t*5)*.05)}
}
function mini(){const cv=$('#mini');if(!cv)return;const c=cv.getContext('2d'),s=10,g=G;c.clearRect(0,0,160,120);c.globalAlpha=.85;
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const ch=g.c.map[y][x];c.fillStyle=ch==='#'?'#1d2328':'.r'.includes(ch)?'#e9e4d8':'#a58a6a';c.fillRect(x*s,y*s,s,s)}c.globalAlpha=1;
  g.ents.forEach(e=>{c.fillStyle=e.ty==='board'?'#d7263d':e.done?'#9aa3ab':e.L?'#ffffff':'#ffc400';c.beginPath();c.arc(e.x*s+5,e.y*s+5,3.6,0,7);c.fill();c.strokeStyle='#000';c.lineWidth=1;c.stroke()});
  c.save();c.translate(g.pos.x*s,g.pos.z*s);c.rotate(-g.yaw);c.fillStyle='#d7263d';c.beginPath();c.moveTo(0,-7);c.lineTo(5,5);c.lineTo(0,2.5);c.lineTo(-5,5);c.closePath();c.fill();c.strokeStyle='#fff';c.lineWidth=1.2;c.stroke();c.restore()}
const found=k=>G.ents.find(e=>e.ty==='i'&&e.k===k).done;
function bossTalk(e){
  const b=G.c.boss;G.talker=e;const first=!greeted;greeted=true;e.done=true;
  const next=stars.findIndex(s=>!s),qs=[];
  if(next>=0)qs.push({t:'Jaký mám další případ?',q:1,f:()=>{const cs=CASES[next];say(b.n,`Spis číslo ${next+1}: ${cs.t}. ${cs.intro}`,[{t:'Beru ten případ!',f:()=>play(next)},{t:'Ještě počkám'}],pitchOf(b),b.v)}});
  qs.push({t:'Jak mám pátrat?',q:1,f:()=>say(b.n,'Vyslechni všechny podezřelé a ptej se jich. Prohledej místo činu a hledej věci s otazníkem. Všechno se ti zapíše do zápisníku. Když najdeš stopu, která nesedí s něčí výpovědí, zkus ho konfrontovat. A nakonec v zápisníku obviň viníka.',[{t:'Rozumím',f:()=>bossTalk(e)}],pitchOf(b),b.v)});
  if(stars.some(s=>s>0))qs.push({t:'Jak si vedu?',q:1,f:()=>{const tot=stars.reduce((a,c)=>a+c,0);say(b.n,`Tvoje hodnost je ${rankOf(tot)}. Máš ${tot} hvězd z ${CASES.length*3} a ${badges.size} odznaků z ${BADGES.length}. ${tot>=CASES.length*3-2?'Jsi opravdový mistr!':'Vedeš si dobře, ale zkus to bez nápověd a bez špatných obvinění, ať máš plný počet.'}`,[{t:'Díky',f:()=>bossTalk(e)}],pitchOf(b),b.v)}});
  say(b.n+' · '+b.r,first?`Á, tady jsi, ${esc(ME.n)}! Jsem inspektor Lupa. Ve městě se dějí podivné věci a potřebuju bystrou hlavu. Spisy najdeš na nástěnce.`:'Co potřebuješ, detektive?'+(stars[2]>0&&!stars[CASES.length-1]?' Pozor, Stín pořád řádí ve městě. Sbírej jeho černé karty, z písmen složíme jeho jméno.':''),[...qs,{t:'Na shledanou'}],pitchOf(b),b.v);
}
function cases(){
  hush();box.innerHTML=`<h2>Spisy na nástěnce</h2>${stars[2]>0?`<p><b>Černé karty Stína:</b> <span style="font:700 22px monospace;letter-spacing:6px">${['M','L','H','A'].map((l,j)=>stars[3+j]?l:'_').join('')}</span></p>`:''}<div class="cases-m">${CASES.map((c,i)=>{const op=i===0||stars[i-1]>0;return `<button class="file" data-i="${i}" ${op?'':'disabled'}>${op?'':'<span class="lock">Zamčeno</span>'}<div class="n">Spis č. ${i+1} · ${c.d}</div><h2>${c.t}</h2><p class="d">${c.place}</p><div class="st">${starStr(stars[i])}</div>${stars[i]?'<span class="stamp">VYŘEŠENO</span>':''}</button>`}).join('')}</div><div class="end"><button class="btn" id="cl">Zavřít</button></div>`;
  modal.hidden=false;G.dlg=true;box.querySelectorAll('.file').forEach(b=>b.onclick=()=>{SFX.open();play(+b.dataset.i)});$('#cl').onclick=()=>{modal.hidden=true;G.dlg=!$('#dlg').hidden}}
function talk(e){
  const s=G.c.sus[e.k],first=!e.done;e.done=true;G.talker=e;updBar();
  const qs=s.q.map((qa,j)=>({t:qa[0],q:1,dn:e.asked.has(j),f:()=>answer(e,j)}));
  if(s.cf&&found(s.cf[0]))qs.push({t:'Konfrontace: '+s.cf[1],q:1,hot:1,dn:e.asked.has('c'),f:()=>answer(e,'c')});
  const txt=first?`${esc(s.hi.replace('{jm}',ME.n))} „${s.s}“`:'Ještě něco, detektive?';
  say(s.n+' · '+s.r,txt,[...qs,{t:'Na shledanou'}],pitchOf(s),s.v);
}
function answer(e,j){
  const s=G.c.sus[e.k],qa=j==='c'?[s.cf[1],s.cf[2]]:s.q[j];e.asked.add(j);G.talker=e;
  if(j==='c')SFX.drama();
  say(s.n,`<span class="me">${esc(ME.n)}: ${qa[0]}</span><br>„${qa[1]}“`,[{t:'Zeptat se na něco jiného',f:()=>talk(e)},{t:'Na shledanou'}],pitchOf(s),j==='c'?0:s.v);
}
function interact(e){
  const c=G.c;SFX.click();G.talker=null;
  if(e.ty==='boss')bossTalk(e);
  else if(e.ty==='board'){SFX.open();cases()}
  else if(e.ty==='n')talk(e);
  else if(e.ty==='i'){const it=c.items[e.k],nw=!e.done;e.done=true;updBar();if(nw)SFX.clue();say(it.n,(nw?'<b>Nová stopa!</b> ':'')+it.c+(nw?'<small><br>Zapsáno do zápisníku.</small>':''),null,1)}
  else if(e.done)say(c.puz.n,c.puz.r,null,1);
  else{SFX.open();say(c.puz.n,c.puz.q+'<form class="row" id="pf" style="margin-top:10px"><input id="pa" autocomplete="off" aria-label="Tvoje odpověď" placeholder="Tvoje odpověď"><button class="btn">Ověřit</button></form><div class="msg" id="pm" aria-live="polite"></div>',[{t:'Zavřít'}],1);
    $('#pf').onsubmit=ev=>{ev.preventDefault();const v=$('#pa').value.trim().toLowerCase();
      if(c.puz.a.includes(v)){e.done=true;updBar();SFX.clue();say(c.puz.n,'<b>Správně!</b> '+c.puz.r+'<small><br>Zapsáno do zápisníku.</small>',null,1)}
      else{SFX.wrong();G.puzFail=(G.puzFail||0)+(v?1:0);$('#pm').textContent=v?'To není ono. Zkus to znovu!':'Napiš odpověď.';speak(v?'To není ono. Zkus to znovu!':'Napiš odpověď.',1)}};
    setTimeout(()=>{const a=$('#pa');if(a)a.focus()},50)}
}
function say(title,html,btns,pitch,blip){
  const d=$('#dlg');G.dlg=true;G.joy={x:0,y:0};const jy=$('#joy');if(jy)jy.hidden=true;btns=btns||[{t:'OK'}];
  const qs=btns.filter(b=>b.q),rest=btns.filter(b=>!b.q);
  d.innerHTML=`<b class="h">${esc(title)}</b><p>${html}</p>${qs.length?`<div class="qs">${qs.map(b=>`<button class="qb ${b.dn?'done':''} ${b.hot?'hot':''}" data-k="${btns.indexOf(b)}">${b.dn?'✓ ':''}${b.t}</button>`).join('')}</div>`:''}<div class="btns">${rest.map(b=>`<button class="btn" data-k="${btns.indexOf(b)}">${b.t}</button>`).join('')}</div>`;
  d.hidden=false;d.scrollTop=0;
  const tmp=d.querySelector('p').cloneNode(true);tmp.querySelectorAll('.me,small,form,.msg').forEach(n=>n.remove());const txt=tmp.textContent.replace(/\s+/g,' ').trim();
  const spoke=pitch?speak(txt,pitch):false;
  if(!spoke){talkUntil=performance.now()+Math.min(4000,txt.length*45);if(blip)SFX.talk(txt.length,blip)}
  d.querySelectorAll('button[data-k]').forEach(b=>b.onclick=()=>{SFX.click();hush();d.hidden=true;G.dlg=false;const f=btns[+b.dataset.k].f;if(f)f()});
  if(!d.querySelector('input'))d.querySelector('button[data-k]').focus({preventScroll:true});
}
function updBar(){const g=G;if(g.isOff)return;const cl=g.ents.filter(e=>e.ty!=='n'&&e.done).length,tot=g.ents.filter(e=>e.ty!=='n').length;$('#nb').textContent=`Zápisník ${cl}/${tot}`}
const score=()=>Math.max(1,3-(G.hint?1:0)-G.wrong);
function notebook(sel){
  const g=G,c=g.c,talked=g.ents.filter(e=>e.ty==='n'&&e.done),all=talked.length===c.sus.length;hush();sel=sel||{};
  const ev=[...g.ents.filter(e=>e.ty==='i'&&e.done).map(e=>({id:'i'+e.k,t:c.items[e.k].c,n:c.items[e.k].n})),...(g.ents.find(e=>e.ty==='q').done?[{id:'q',t:c.puz.r,n:c.puz.n}]:[])];
  const qa=(e,j)=>{const s=c.sus[e.k],x=j==='c'?[s.cf[1],s.cf[2]]:s.q[j];return `<li>${x[0]} → „${x[1]}“</li>`};
  box.innerHTML=`<h2>Zápisník detektiva ${esc(ME.n)}</h2>
  <h3>Výpovědi a rozhovory</h3>${talked.length?'<ul>'+talked.map(e=>`<li><b>${c.sus[e.k].n}:</b> „${c.sus[e.k].s}“${e.asked.size?'<ul>'+[...e.asked].map(j=>qa(e,j)).join('')+'</ul>':''}</li>`).join('')+'</ul>':'<p class="empty">Zatím jsi s nikým nemluvil. Najdi osoby s vykřičníkem.</p>'}
  <h3>Stopy</h3>${ev.length?'<ul>'+ev.map(x=>`<li><b>${x.n}:</b> ${x.t}</li>`).join('')+'</ul>':'<p class="empty">Zatím žádné stopy. Hledej věci s otazníkem.</p>'}
  <h3>Nápověda</h3>${g.hint?`<p>${c.hint}</p>`:'<button class="hintb" id="hb">Ukázat nápovědu (−1 hvězda)</button>'}
  <h3>Nástěnka důkazů</h3>${all?'<p class="empty">Vyber podezřelého a potom důkaz, který ho usvědčí. Pozor, některé stopy jsou falešné!</p>':'<p class="empty">Nejdřív promluv se všemi podezřelými.</p>'}
  <div class="acc">${c.sus.map((s,k)=>`<button class="pick" data-a="${k}" aria-pressed="${sel.k===k}" ${all?'':'disabled'}>${s.n}</button>`).join('')}</div>
  ${all?`<div class="evs">${ev.length?ev.map(x=>`<button class="ev" data-e="${x.id}" aria-pressed="${sel.e===x.id}"><b>${x.n}</b><br>${x.t}</button>`).join(''):'<p class="empty">Zatím nemáš žádný důkaz. Prohledej místo činu.</p>'}</div>
  <p class="sum">${sel.k!=null&&sel.e?`Obviněný: <b>${c.sus[sel.k].n}</b> · Důkaz: <b>${ev.find(x=>x.id===sel.e).n}</b>`:''}</p>`:''}
  <p class="empty">Za vyřešení teď dostaneš ${starStr(score())}</p>
  <div class="end" style="gap:8px">${all?`<button class="btn red" id="ga" ${sel.k!=null&&sel.e?'':'disabled'}>Obvinit</button>`:''}<button class="btn" id="cl">Zpět do hry</button></div>`;
  modal.hidden=false;g.dlg=true;
  $('#cl').onclick=()=>{SFX.click();hush();modal.hidden=true;g.dlg=!$('#dlg').hidden};
  const hb=$('#hb');if(hb)hb.onclick=()=>{g.hint=true;SFX.open();notebook(sel);speak(c.hint,1)};
  box.querySelectorAll('.pick').forEach(b=>b.onclick=()=>{SFX.pick();const st=box.scrollTop;notebook({...sel,k:+b.dataset.a});box.scrollTop=st});
  box.querySelectorAll('.ev').forEach(b=>b.onclick=()=>{SFX.pick();const st=box.scrollTop;notebook({...sel,e:b.dataset.e});box.scrollTop=st});
  const ga=$('#ga');if(ga)ga.onclick=()=>accuse(sel.k,sel.e);
}
function accuse(k,evid){
  const g=G,c=g.c;
  if(k===c.cul&&c.key.includes(evid)){const sc=score();stars[g.i]=Math.max(stars[g.i],sc);save();SFX.win();
    const nb=[],earn=id=>{if(!badges.has(id)){badges.add(id);nb.push(BADGES.find(b=>b.id===id).n)}};
    earn('first');if(!g.hint)earn('nohint');if(!g.wrong)earn('clean');if(sc===3)earn('perfect');
    if(g.ents.filter(e=>e.ty==='n').every(e=>c.sus[e.k].q.every((_,j)=>e.asked.has(j))))earn('ask');
    if(g.ents.filter(e=>e.ty!=='n').every(e=>e.done))earn('eye');
    if(g.ents.find(e=>e.ty==='q').done&&!g.puzFail)earn('puz');
    if(g.i===CASES.length-1)earn('stin');if(stars.every(s=>s===3))earn('all');saveBadges();
    box.innerHTML=`<h2>Případ vyřešen!</h2><div class="big">${starStr(sc)}</div><p>Skvělá práce, detektive <b>${esc(ME.n)}</b>!</p><p><b>Viník: ${c.sus[k].n}.</b> ${c.why}</p>${nb.length?`<div class="newb">${nb.map(n=>`<span class="badge on">🏅 ${n}</span>`).join('')}</div>`:''}<div class="end"><button class="btn" id="ok">Zpět do kanceláře</button></div>`;
    setTimeout(()=>speak('Případ vyřešen! Viník je '+c.sus[k].n+'. '+c.why+(nb.length?' Získal jsi nový odznak: '+nb.join(', ')+'.':''),1),900);
    $('#ok').onclick=()=>{hush();modal.hidden=true;office(g.i)}}
  else if(k===c.cul){g.wrong++;SFX.wrong();const t=`Podezřelý ${c.sus[k].n}: dobré tušení, ale tenhle důkaz nestačí. Najdi stopu, která přímo ukazuje, že lže.`;
    box.innerHTML=`<h2>Důkaz nestačí</h2><p>${t}</p><div class="end"><button class="btn" id="ok">Hledat lepší důkaz</button></div>`;speak(t,1);
    $('#ok').onclick=()=>{hush();notebook({k})}}
  else{g.wrong++;SFX.wrong();const t=`${c.sus[k].n} má dobré vysvětlení. Projdi znovu stopy a rozhovory. Některé stopy jsou falešné a vedou na nevinné.`;
    box.innerHTML=`<h2>Tohle nesedí…</h2><p>${t} Zkus konfrontovat podezřelé.</p><div class="end"><button class="btn" id="ok">Pátrám dál</button></div>`;speak(t,1);
    $('#ok').onclick=()=>{hush();modal.hidden=true;g.dlg=!$('#dlg').hidden}}
  $('#ok').focus();
}
function badgeView(){
  const tot=stars.reduce((a,b)=>a+b,0),r=rankOf(tot),nx=RANKS.find(x=>x[0]>tot);
  box.innerHTML=`<h2>Odznaky a hodnost</h2><p>Hodnost: <b>${r}</b> · hvězdy ${tot}/${CASES.length*3}${nx?` · do hodnosti „${nx[1]}“ chybí ${nx[0]-tot} ★`:''}</p>
  <div class="bgrid">${BADGES.map(b=>`<div class="badge ${badges.has(b.id)?'on':''}"><b>${badges.has(b.id)?'🏅':'🔒'} ${b.n}</b><small>${b.d}</small></div>`).join('')}</div>
  <div class="end"><button class="btn" id="cl">Zavřít</button></div>`;
  modal.hidden=false;G.dlg=true;$('#cl').onclick=()=>{modal.hidden=true;G.dlg=!$('#dlg').hidden};
}
addEventListener('keydown',e=>{if(!G||e.target.tagName==='INPUT')return;
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD'].includes(e.code)){G.keys[e.code]=true;if(!G.dlg)e.preventDefault()}
  else if(!G.dlg&&(e.code==='KeyE'||((e.code==='Space'||e.code==='Enter')&&e.target===document.body))&&G.near){e.preventDefault();interact(G.near)}});
addEventListener('keyup',e=>{if(G)G.keys[e.code]=false});
addEventListener('blur',()=>{if(G)G.keys={}});
if(!window.THREE||!THREE.RoundedBoxGeometry){app.innerHTML='<div class="sheetmsg"><h2>Hra se nenačetla</h2><p>Zkus stránku načíst znovu.</p></div>'}else{try{R()}catch(err){app.innerHTML='<div class="sheetmsg"><h2>Tohle zařízení neumí 3D</h2><p>Prohlížeč nepodporuje WebGL.</p></div>'}if(REN)ME?office():maker()}

}
