async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

let text = `Capitulo 1

1  No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.
2  Ele estava no princípio com Deus.
3  Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez.
4  Nele estava a vida, e a vida era a luz dos homens.
5  E a luz resplandece nas trevas, e as trevas näo a compreenderam.
6  Houve um homem enviado de Deus, cujo nome era Joäo.
7  Este veio para testemunho, para que testificasse da luz, para que todos cressem por ele.
8  Näo era ele a luz, mas para que testificasse da luz.
9  Ali estava a luz verdadeira, que ilumina a todo o homem que vem ao mundo.
10  Estava no mundo, e o mundo foi feito por ele, e o mundo näo o conheceu.
11  Veio para o que era seu, e os seus näo o receberam.
12  Mas, a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus, aos que crêem no seu nome;
13  Os quais näo nasceram do sangue, nem da vontade da carne, nem da vontade do homem, mas de Deus.
14  E o Verbo se fez carne, e habitou entre nós, e vimos a sua glória, como a glória do unigênito do Pai, cheio de graça e de verdade.
15  Joäo testificou dele, e clamou, dizendo: Este era aquele de quem eu dizia: O que vem após mim é antes de mim, porque foi primeiro do que eu.
16  E todos nós recebemos também da sua plenitude, e graça por graça.
17  Porque a lei foi dada por Moisés; a graça e a verdade vieram por Jesus Cristo.
18  Deus nunca foi visto por alguém. O Filho unigênito, que está no seio do Pai, esse o revelou.
19  E este é o testemunho de Joäo, quando os judeus mandaram de Jerusalém sacerdotes e levitas para que lhe perguntassem: Quem és tu?
20  E confessou, e näo negou; confessou: Eu näo sou o Cristo.
21  E perguntaram-lhe: Entäo quê? És tu Elias? E disse: Näo sou. És tu profeta? E respondeu: Näo.
22  Disseram-lhe pois: Quem és? para que demos resposta àqueles que nos enviaram; que dizes de ti mesmo?
23  Disse: Eu sou a voz do que clama no deserto: Endireitai o caminho do Senhor, como disse o profeta Isaías.
24  E os que tinham sido enviados eram dos fariseus.
25  E perguntaram-lhe, e disseram-lhe: Por que batizas, pois, se tu näo és o Cristo, nem Elias, nem o profeta?
26  Joäo respondeu-lhes, dizendo: Eu batizo com água; mas no meio de vós está um a quem vós näo conheceis.
27  Este é aquele que vem após mim, que é antes de mim, do qual eu näo sou digno de desatar a correia da alparca.
28  Estas coisas aconteceram em Betánia, do outro lado do Jordäo, onde Joäo estava batizando.
29  No dia seguinte Joäo viu a Jesus, que vinha para ele, e disse: Eis o Cordeiro de Deus, que tira o pecado do mundo.
30  Este é aquele do qual eu disse: Após mim vem um homem que é antes de mim, porque foi primeiro do que eu.
31  E eu näo o conhecia; mas, para que ele fosse manifestado a Israel, vim eu, por isso, batizando com água.
32  E Joäo testificou, dizendo: Eu vi o Espírito descer do céu como pomba, e repousar sobre ele.
33  E eu näo o conhecia, mas o que me mandou a batizar com água, esse me disse: Sobre aquele que vires descer o Espírito, e sobre ele repousar, esse é o que batiza com o Espírito Santo.
34  E eu vi, e tenho testificado que este é o Filho de Deus.
35  No dia seguinte Joäo estava outra vez ali, e dois dos seus discípulos;
36  E, vendo passar a Jesus, disse: Eis aqui o Cordeiro de Deus.
37  E os dois discípulos ouviram-no dizer isto, e seguiram a Jesus.
38  E Jesus, voltando-se e vendo que eles o seguiam, disse-lhes: Que buscais? E eles disseram: Rabi (que, traduzido, quer dizer Mestre), onde moras?
39  Ele lhes disse: Vinde, e vede. Foram, e viram onde morava, e ficaram com ele aquele dia; e era já quase a hora décima.
40  Era André, irmäo de Simäo Pedro, um dos dois que ouviram aquilo de Joäo, e o haviam seguido.
41  Este achou primeiro a seu irmäo Simäo, e disse-lhe: Achamos o Messias (que, traduzido, é o Cristo).
42  E levou-o a Jesus. E, olhando Jesus para ele, disse: Tu és Simäo, filho de Jonas; tu serás chamado Cefas (que quer dizer Pedro).
43  No dia seguinte quis Jesus ir à Galiléia, e achou a Filipe, e disse-lhe: Segue-me.
44  E Filipe era de Betsaida, cidade de André e de Pedro.
45  Filipe achou Natanael, e disse-lhe: Havemos achado aquele de quem Moisés escreveu na lei, e os profetas: Jesus de Nazaré, filho de José.
46  Disse-lhe Natanael: Pode vir alguma coisa boa de Nazaré? Disse-lhe Filipe: Vem, e vê.
47  Jesus viu Natanael vir ter com ele, e disse dele: Eis aqui um verdadeiro israelita, em quem näo há dolo.
48  Disse-lhe Natanael: De onde me conheces tu? Jesus respondeu, e disse-lhe: Antes que Filipe te chamasse, te vi eu, estando tu debaixo da figueira.
49  Natanael respondeu, e disse-lhe: Rabi, tu és o Filho de Deus; tu és o Rei de Israel.
50  Jesus respondeu, e disse-lhe: Porque te disse: Vi-te debaixo da figueira, crês? Coisas maiores do que estas verás.
51  E disse-lhe: Na verdade, na verdade vos digo que daqui em diante vereis o céu aberto, e os anjos de Deus subindo e descendo sobre o Filho do homem.

Capitulo 2
1  E, ao terceiro dia, fizeram-se umas bodas em Caná da Galiléia; e estava ali a mäe de Jesus.
2  E foi também convidado Jesus e os seus discípulos para as bodas.
3  E, faltando vinho, a mäe de Jesus lhe disse: Näo têm vinho.
4  Disse-lhe Jesus: Mulher, que tenho eu contigo? Ainda näo é chegada a minha hora.
5  Sua mäe disse aos serventes: Fazei tudo quanto ele vos disser.
6  E estavam ali postas seis talhas de pedra, para as purificaçöes dos judeus, e em cada uma cabiam dois ou três almudes.
7  Disse-lhes Jesus: Enchei de água essas talhas. E encheram-nas até em cima.
8  E disse-lhes: Tirai agora, e levai ao mestre-sala. E levaram.
9  E, logo que o mestre-sala provou a água feita vinho (näo sabendo de onde viera, se bem que o sabiam os serventes que tinham tirado a água), chamou o mestre-sala ao esposo.
10  E disse-lhe: Todo o homem pöe primeiro o vinho bom e, quando já têm bebido bem, entäo o inferior; mas tu guardaste até agora o bom vinho.
11  Jesus principiou assim os seus sinais em Caná da Galiléia, e manifestou a sua glória; e os seus discípulos creram nele.
12  Depois disto desceu a Cafarnaum, ele, e sua mäe, e seus irmäos, e seus discípulos; e ficaram ali näo muitos dias.
13  E estava próxima a páscoa dos judeus, e Jesus subiu a Jerusalém.
14  E achou no templo os que vendiam bois, e ovelhas, e pombos, e os cambiadores assentados.
15  E tendo feito um azorrague de cordéis, lançou todos fora do templo, também os bois e ovelhas; e espalhou o dinheiro dos cambiadores, e derribou as mesas;
16  E disse aos que vendiam pombos: Tirai daqui estes, e näo façais da casa de meu Pai casa de venda.
17  E os seus discípulos lembraram-se do que está escrito: O zelo da tua casa me devorará.
18  Responderam, pois, os judeus, e disseram-lhe: Que sinal nos mostras para fazeres isto?
19  Jesus respondeu, e disse-lhes: Derribai este templo, e em três dias o levantarei.
20  Disseram, pois, os judeus: Em quarenta e seis anos foi edificado este templo, e tu o levantarás em três dias?
21  Mas ele falava do templo do seu corpo.
22  Quando, pois, ressuscitou dentre os mortos, os seus discípulos lembraram-se de que lhes dissera isto; e creram na Escritura, e na palavra que Jesus tinha dito.
23  E, estando ele em Jerusalém pela páscoa, durante a festa, muitos, vendo os sinais que fazia, creram no seu nome.
24  Mas o mesmo Jesus näo confiava neles, porque a todos conhecia;
25  E näo necessitava de que alguém testificasse do homem, porque ele bem sabia o que havia no homem.

Capitulo 3
1  E havia entre os fariseus um homem, chamado Nicodemos, príncipe dos judeus.
2  Este foi ter de noite com Jesus, e disse-lhe: Rabi, bem sabemos que és Mestre, vindo de Deus; porque ninguém pode fazer estes sinais que tu fazes, se Deus näo for com ele.
3  Jesus respondeu, e disse-lhe: Na verdade, na verdade te digo que aquele que näo nascer de novo, näo pode ver o reino de Deus.
4  Disse-lhe Nicodemos: Como pode um homem nascer, sendo velho? Pode, porventura, tornar a entrar no ventre de sua mäe, e nascer?
5  Jesus respondeu: Na verdade, na verdade te digo que aquele que näo nascer da água e do Espírito, näo pode entrar no reino de Deus.
6  O que é nascido da carne é carne, e o que é nascido do Espírito é espírito.
7  Näo te maravilhes de te ter dito: Necessário vos é nascer de novo.
8  O vento assopra onde quer, e ouves a sua voz, mas näo sabes de onde vem, nem para onde vai; assim é todo aquele que é nascido do Espírito.
9  Nicodemos respondeu, e disse-lhe: Como pode ser isso?
10  Jesus respondeu, e disse-lhe: Tu és mestre de Israel, e näo sabes isto?
11  Na verdade, na verdade te digo que nós dizemos o que sabemos, e testificamos o que vimos; e näo aceitais o nosso testemunho.
12  Se vos falei de coisas terrestres, e näo crestes, como crereis, se vos falar das celestiais?
13  Ora, ninguém subiu ao céu, senäo o que desceu do céu, o Filho do homem, que está no céu.
14  E, como Moisés levantou a serpente no deserto, assim importa que o Filho do homem seja levantado;
15  Para que todo aquele que nele crê näo pereça, mas tenha a vida eterna.
16  Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê näo pereça, mas tenha a vida eterna.
17  Porque Deus enviou o seu Filho ao mundo, näo para que condenasse o mundo, mas para que o mundo fosse salvo por ele.
18  Quem crê nele näo é condenado; mas quem näo crê já está condenado, porquanto näo crê no nome do unigênito Filho de Deus.
19  E a condenaçäo é esta: Que a luz veio ao mundo, e os homens amaram mais as trevas do que a luz, porque as suas obras eram más.
20  Porque todo aquele que faz o mal odeia a luz, e näo vem para a luz, para que as suas obras näo sejam reprovadas.
21  Mas quem pratica a verdade vem para a luz, a fim de que as suas obras sejam manifestas, porque säo feitas em Deus.
22  Depois disto foi Jesus com os seus discípulos para a terra da Judéia; e estava ali com eles, e batizava.
23  Ora, Joäo batizava também em Enom, junto a Salim, porque havia ali muitas águas; e vinham ali, e eram batizados.
24  Porque ainda Joäo näo tinha sido lançado na prisäo.
25  Houve entäo uma questäo entre os discípulos de Joäo e os judeus acerca da purificaçäo.
26  E foram ter com Joäo, e disseram-lhe: Rabi, aquele que estava contigo além do Jordäo, do qual tu deste testemunho, ei-lo batizando, e todos väo ter com ele.
27  Joäo respondeu, e disse: O homem näo pode receber coisa alguma, se näo lhe for dada do céu.
28  Vós mesmos me sois testemunhas de que disse: Eu näo sou o Cristo, mas sou enviado adiante dele.
29  Aquele que tem a esposa é o esposo; mas o amigo do esposo, que lhe assiste e o ouve, alegra-se muito com a voz do esposo. Assim, pois, já este meu gozo está cumprido.
30  É necessário que ele cresça e que eu diminua.
31  Aquele que vem de cima é sobre todos; aquele que vem da terra é da terra e fala da terra. Aquele que vem do céu é sobre todos.
32  E aquilo que ele viu e ouviu isso testifica; e ninguém aceita o seu testemunho.
33  Aquele que aceitou o seu testemunho, esse confirmou que Deus é verdadeiro.
34  Porque aquele que Deus enviou fala as palavras de Deus; pois näo lhe dá Deus o Espírito por medida.
35  O Pai ama o Filho, e todas as coisas entregou nas suas mäos.
36  Aquele que crê no Filho tem a vida eterna; mas aquele que näo crê no Filho näo verá a vida, mas a ira de Deus sobre ele permanece.

Capitulo 4
1  E quando o Senhor entendeu que os fariseus tinham ouvido que Jesus fazia e batizava mais discípulos do que Joäo
2  (Ainda que Jesus mesmo näo batizava, mas os seus discípulos),
3  Deixou a Judéia, e foi outra vez para a Galiléia.
4  E era-lhe necessário passar por Samaria.
5  Foi, pois, a uma cidade de Samaria, chamada Sicar, junto da herdade que Jacó tinha dado a seu filho José.
6  E estava ali a fonte de Jacó. Jesus, pois, cansado do caminho, assentou-se assim junto da fonte. Era isto quase à hora sexta.
7  Veio uma mulher de Samaria tirar água. Disse-lhe Jesus: Dá-me de beber.
8  Porque os seus discípulos tinham ido à cidade comprar comida.
9  Disse-lhe, pois, a mulher samaritana: Como, sendo tu judeu, me pedes de beber a mim, que sou mulher samaritana? (porque os judeus näo se comunicam com os samaritanos).
10  Jesus respondeu, e disse-lhe: Se tu conheceras o dom de Deus, e quem é o que te diz: Dá-me de beber, tu lhe pedirias, e ele te daria água viva.
11  Disse-lhe a mulher: Senhor, tu näo tens com que a tirar, e o poço é fundo; onde, pois, tens a água viva?
12  És tu maior do que o nosso pai Jacó, que nos deu o poço, bebendo ele próprio dele, e os seus filhos, e o seu gado?
13  Jesus respondeu, e disse-lhe: Qualquer que beber desta água tornará a ter sede;
14  Mas aquele que beber da água que eu lhe der nunca terá sede, porque a água que eu lhe der se fará nele uma fonte de água que salte para a vida eterna.
15  Disse-lhe a mulher: Senhor, dá-me dessa água, para que näo mais tenha sede, e näo venha aqui tirá-la.
16  Disse-lhe Jesus: Vai, chama o teu marido, e vem cá.
17  A mulher respondeu, e disse: Näo tenho marido. Disse-lhe Jesus: Disseste bem: Näo tenho marido;
18  Porque tiveste cinco maridos, e o que agora tens näo é teu marido; isto disseste com verdade.
19  Disse-lhe a mulher: Senhor, vejo que és profeta.
20  Nossos pais adoraram neste monte, e vós dizeis que é em Jerusalém o lugar onde se deve adorar.
21  Disse-lhe Jesus: Mulher, crê-me que a hora vem, em que nem neste monte nem em Jerusalém adorareis o Pai.
22  Vós adorais o que näo sabeis; nós adoramos o que sabemos porque a salvaçäo vem dos judeus.
23  Mas a hora vem, e agora é, em que os verdadeiros adoradores adoraräo o Pai em espírito e em verdade; porque o Pai procura a tais que assim o adorem.
24  Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade.
25  A mulher disse-lhe: Eu sei que o Messias (que se chama o Cristo) vem; quando ele vier, nos anunciará tudo.
26  Jesus disse-lhe: Eu o sou, eu que falo contigo.
27  E nisto vieram os seus discípulos, e maravilharam-se de que estivesse falando com uma mulher; todavia nenhum lhe disse: Que perguntas? ou: Por que falas com ela?
28  Deixou, pois, a mulher o seu cántaro, e foi à cidade, e disse àqueles homens:
29  Vinde, vede um homem que me disse tudo quanto tenho feito. Porventura näo é este o Cristo?
30  Saíram, pois, da cidade, e foram ter com ele.
31  E entretanto os seus discípulos lhe rogaram, dizendo: Rabi, come.
32  Ele, porém, lhes disse: Uma comida tenho para comer, que vós näo conheceis.
33  Entäo os discípulos diziam uns aos outros: Trouxe-lhe, porventura, alguém algo de comer?
34  Jesus disse-lhes: A minha comida é fazer a vontade daquele que me enviou, e realizar a sua obra.
35  Näo dizeis vós que ainda há quatro meses até que venha a ceifa? Eis que eu vos digo: Levantai os vossos olhos, e vede as terras, que já estäo brancas para a ceifa.
36  E o que ceifa recebe galardäo, e ajunta fruto para a vida eterna; para que, assim o que semeia como o que ceifa, ambos se regozijem.
37  Porque nisto é verdadeiro o ditado, que um é o que semeia, e outro o que ceifa.
38  Eu vos enviei a ceifar onde vós näo trabalhastes; outros trabalharam, e vós entrastes no seu trabalho.
39  E muitos dos samaritanos daquela cidade creram nele, pela palavra da mulher, que testificou: Disse-me tudo quanto tenho feito.
40  Indo, pois, ter com ele os samaritanos, rogaram-lhe que ficasse com eles; e ficou ali dois dias.
41  E muitos mais creram nele, por causa da sua palavra.
42  E diziam à mulher: Já näo é pelo teu dito que nós cremos; porque nós mesmos o temos ouvido, e sabemos que este é verdadeiramente o Cristo, o Salvador do mundo.
43  E dois dias depois partiu dali, e foi para a Galiléia.
44  Porque Jesus mesmo testificou que um profeta näo tem honra na sua própria pátria.
45  Chegando, pois, à Galiléia, os galileus o receberam, vistas todas as coisas que fizera em Jerusalém, no dia da festa; porque também eles tinham ido à festa.
46  Segunda vez foi Jesus a Caná da Galiléia, onde da água fizera vinho. E havia ali um nobre, cujo filho estava enfermo em Cafarnaum.
47  Ouvindo este que Jesus vinha da Judéia para a Galiléia, foi ter com ele, e rogou-lhe que descesse, e curasse o seu filho, porque já estava à morte.
48  Entäo Jesus lhe disse: Se näo virdes sinais e milagres, näo crereis.
49  Disse-lhe o nobre: Senhor, desce, antes que meu filho morra.
50  Disse-lhe Jesus: Vai, o teu filho vive. E o homem creu na palavra que Jesus lhe disse, e partiu.
51  E descendo ele logo, saíram-lhe ao encontro os seus servos, e lhe anunciaram, dizendo: O teu filho vive.
52  Perguntou-lhes, pois, a que hora se achara melhor. E disseram-lhe: Ontem às sete horas a febre o deixou.
53  Entendeu, pois, o pai que era aquela hora a mesma em que Jesus lhe disse: O teu filho vive; e creu ele, e toda a sua casa.
54  Jesus fez este segundo milagre, quando ia da Judéia para a Galiléia.

Capitulo 5
1  Depois disto havia uma festa entre os judeus, e Jesus subiu a Jerusalém.
2  Ora, em Jerusalém há, próximo à porta das ovelhas, um tanque, chamado em hebreu Betesda, o qual tem cinco alpendres.
3  Nestes jazia grande multidäo de enfermos, cegos, mancos e ressicados, esperando o movimento da água.
4  Porquanto um anjo descia em certo tempo ao tanque, e agitava a água; e o primeiro que ali descia, depois do movimento da água, sarava de qualquer enfermidade que tivesse.
5  E estava ali um homem que, havia trinta e oito anos, se achava enfermo.
6  E Jesus, vendo este deitado, e sabendo que estava neste estado havia muito tempo, disse-lhe: Queres ficar säo?
7  O enfermo respondeu-lhe: Senhor, näo tenho homem algum que, quando a água é agitada, me ponha no tanque; mas, enquanto eu vou, desce outro antes de mim.
8  Jesus disse-lhe: Levanta-te, toma o teu leito, e anda.
9  Logo aquele homem ficou säo; e tomou o seu leito, e andava. E aquele dia era sábado.
10  Entäo os judeus disseram àquele que tinha sido curado: É sábado, näo te é lícito levar o leito.
11  Ele respondeu-lhes: Aquele que me curou, ele próprio disse: Toma o teu leito, e anda.
12  Perguntaram-lhe, pois: Quem é o homem que te disse: Toma o teu leito, e anda?
13  E o que fora curado näo sabia quem era; porque Jesus se havia retirado, em razäo de naquele lugar haver grande multidäo.
14  Depois Jesus encontrou-o no templo, e disse-lhe: Eis que já estás säo; näo peques mais, para que näo te suceda alguma coisa pior.
15  E aquele homem foi, e anunciou aos judeus que Jesus era o que o curara.
16  E por esta causa os judeus perseguiram a Jesus, e procuravam matá-lo, porque fazia estas coisas no sábado.
17  E Jesus lhes respondeu: Meu Pai trabalha até agora, e eu trabalho também.
18  Por isso, pois, os judeus ainda mais procuravam matá-lo, porque näo só quebrantava o sábado, mas também dizia que Deus era seu próprio Pai, fazendo-se igual a Deus.
19  Mas Jesus respondeu, e disse-lhes: Na verdade, na verdade vos digo que o Filho por si mesmo näo pode fazer coisa alguma, se o näo vir fazer o Pai; porque tudo quanto ele faz, o Filho o faz igualmente.
20  Porque o Pai ama o Filho, e mostra-lhe tudo o que faz; e ele lhe mostrará maiores obras do que estas, para que vos maravilheis.
21  Pois, assim como o Pai ressuscita os mortos, e os vivifica, assim também o Filho vivifica aqueles que quer.
22  E também o Pai a ninguém julga, mas deu ao Filho todo o juízo;
23  Para que todos honrem o Filho, como honram o Pai. Quem näo honra o Filho, näo honra o Pai que o enviou.
24  Na verdade, na verdade vos digo que quem ouve a minha palavra, e crê naquele que me enviou, tem a vida eterna, e näo entrará em condenaçäo, mas passou da morte para a vida.
25  Em verdade, em verdade vos digo que vem a hora, e agora é, em que os mortos ouviräo a voz do Filho de Deus, e os que a ouvirem viveräo.
26  Porque, como o Pai tem a vida em si mesmo, assim deu também ao Filho ter a vida em si mesmo;
27  E deu-lhe o poder de exercer o juízo, porque é o Filho do homem.
28  Näo vos maravilheis disto; porque vem a hora em que todos os que estäo nos sepulcros ouviräo a sua voz.
29  E os que fizeram o bem sairäo para a ressurreiçäo da vida; e os que fizeram o mal para a ressurreiçäo da condenaçäo.
30  Eu näo posso de mim mesmo fazer coisa alguma. Como ouço, assim julgo; e o meu juízo é justo, porque näo busco a minha vontade, mas a vontade do Pai que me enviou.
31  Se eu testifico de mim mesmo, o meu testemunho näo é verdadeiro.
32  Há outro que testifica de mim, e sei que o testemunho que ele dá de mim é verdadeiro.
33  Vós mandastes mensageiros a Joäo, e ele deu testemunho da verdade.
34  Eu, porém, näo recebo testemunho de homem; mas digo isto, para que vos salveis.
35  Ele era a candeia que ardia e alumiava, e vós quisestes alegrar-vos por um pouco de tempo com a sua luz.
36  Mas eu tenho maior testemunho do que o de Joäo; porque as obras que o Pai me deu para realizar, as mesmas obras que eu faço, testificam de mim, que o Pai me enviou.
37  E o Pai, que me enviou, ele mesmo testificou de mim. Vós nunca ouvistes a sua voz, nem vistes o seu parecer.
38  E a sua palavra näo permanece em vós, porque naquele que ele enviou näo credes vós.
39  Examinais as Escrituras, porque vós cuidais ter nelas a vida eterna, e säo elas que de mim testificam;
40  E näo quereis vir a mim para terdes vida.
41  Eu näo recebo glória dos homens;
42  Mas bem vos conheço, que näo tendes em vós o amor de Deus.
43  Eu vim em nome de meu Pai, e näo me aceitais; se outro vier em seu próprio nome, a esse aceitareis.
44  Como podeis vós crer, recebendo honra uns dos outros, e näo buscando a honra que vem só de Deus?
45  Näo cuideis que eu vos hei de acusar para com o Pai. Há um que vos acusa, Moisés, em quem vós esperais.
46  Porque, se vós crêsseis em Moisés, creríeis em mim; porque de mim escreveu ele.
47  Mas, se näo credes nos seus escritos, como crereis nas minhas palavras?

Capitulo 6
1  Depois disto partiu Jesus para o outro lado do mar da Galiléia, que é o de Tiberíades.
2  E grande multidäo o seguia, porque via os sinais que operava sobre os enfermos.
3  E Jesus subiu ao monte, e assentou-se ali com os seus discípulos.
4  E a páscoa, a festa dos judeus, estava próxima.
5  Entäo Jesus, levantando os olhos, e vendo que uma grande multidäo vinha ter com ele, disse a Filipe: Onde compraremos päo, para estes comerem?
6  Mas dizia isto para o experimentar; porque ele bem sabia o que havia de fazer.
7  Filipe respondeu-lhe: Duzentos dinheiros de päo näo lhes bastaräo, para que cada um deles tome um pouco.
8  E um dos seus discípulos, André, irmäo de Simäo Pedro, disse-lhe:
9  Está aqui um rapaz que tem cinco päes de cevada e dois peixinhos; mas que é isto para tantos?
10  E disse Jesus: Mandai assentar os homens. E havia muita relva naquele lugar. Assentaram-se, pois, os homens em número de quase cinco mil.
11  E Jesus tomou os päes e, havendo dado graças, repartiu-os pelos discípulos, e os discípulos pelos que estavam assentados; e igualmente também dos peixes, quanto eles queriam.
12  E, quando estavam saciados, disse aos seus discípulos: Recolhei os pedaços que sobejaram, para que nada se perca.
13  Recolheram-nos, pois, e encheram doze alcofas de pedaços dos cinco päes de cevada, que sobejaram aos que haviam comido.
14  Vendo, pois, aqueles homens o milagre que Jesus tinha feito, diziam: Este é verdadeiramente o profeta que devia vir ao mundo.
15  Sabendo, pois, Jesus que haviam de vir arrebatá-lo, para o fazerem rei, tornou a retirar-se, ele só, para o monte.
16  E, quando veio a tarde, os seus discípulos desceram para o mar.
17  E, entrando no barco, atravessaram o mar em direçäo a Cafarnaum; e era já escuro, e ainda Jesus näo tinha chegado ao pé deles.
18  E o mar se levantou, porque um grande vento assoprava.
19  E, tendo navegado uns vinte e cinco ou trinta estádios, viram a Jesus, andando sobre o mar e aproximando-se do barco; e temeram.
20  Mas ele lhes disse: Sou eu, näo temais.
21  Entäo eles de boa mente o receberam no barco; e logo o barco chegou à terra para onde iam.
22  No dia seguinte, a multidäo que estava do outro lado do mar, vendo que näo havia ali mais do que um barquinho, a näo ser aquele no qual os discípulos haviam entrado, e que Jesus näo entrara com os seus discípulos naquele barquinho, mas que os seus discípulos tinham ido sozinhos
23  (Contudo, outros barquinhos tinham chegado de Tiberíades, perto do lugar onde comeram o päo, havendo o Senhor dado graças).
24  Vendo, pois, a multidäo que Jesus näo estava ali nem os seus discípulos, entraram eles também nos barcos, e foram a Cafarnaum, em busca de Jesus.
25  E, achando-o no outro lado do mar, disseram-lhe: Rabi, quando chegaste aqui?
26  Jesus respondeu-lhes, e disse: Na verdade, na verdade vos digo que me buscais, näo pelos sinais que vistes, mas porque comestes do päo e vos saciastes.
27  Trabalhai, näo pela comida que perece, mas pela comida que permanece para a vida eterna, a qual o Filho do homem vos dará; porque a este o Pai, Deus, o selou.
28  Disseram-lhe, pois: Que faremos para executarmos as obras de Deus?
29  Jesus respondeu, e disse-lhes: A obra de Deus é esta: Que creiais naquele que ele enviou.
30  Disseram-lhe, pois: Que sinal, pois, fazes tu, para que o vejamos, e creiamos em ti? Que operas tu?
31  Nossos pais comeram o maná no deserto, como está escrito: Deu-lhes a comer o päo do céu.
32  Disse-lhes, pois, Jesus: Na verdade, na verdade vos digo: Moisés näo vos deu o päo do céu; mas meu Pai vos dá o verdadeiro päo do céu.
33  Porque o päo de Deus é aquele que desce do céu e dá vida ao mundo.
34  Disseram-lhe, pois: Senhor, dá-nos sempre desse päo.
35  E Jesus lhes disse: Eu sou o päo da vida; aquele que vem a mim näo terá fome, e quem crê em mim nunca terá sede.
36  Mas já vos disse que também vós me vistes, e contudo näo credes.
37  Todo o que o Pai me dá virá a mim; e o que vem a mim de maneira nenhuma o lançarei fora.
38  Porque eu desci do céu, näo para fazer a minha vontade, mas a vontade daquele que me enviou.
39  E a vontade do Pai que me enviou é esta: Que nenhum de todos aqueles que me deu se perca, mas que o ressuscite no último dia.
40  Porquanto a vontade daquele que me enviou é esta: Que todo aquele que vê o Filho, e crê nele, tenha a vida eterna; e eu o ressuscitarei no último dia.
41  Murmuravam, pois, dele os judeus, porque dissera: Eu sou o päo que desceu do céu.
42  E diziam: Näo é este Jesus, o filho de José, cujo pai e mäe nós conhecemos? Como, pois, diz ele: Desci do céu?
43  Respondeu, pois, Jesus, e disse-lhes: Näo murmureis entre vós.
44  Ninguém pode vir a mim, se o Pai que me enviou o näo trouxer; e eu o ressuscitarei no último dia.
45  Está escrito nos profetas: E seräo todos ensinados por Deus. Portanto, todo aquele que do Pai ouviu e aprendeu vem a mim.
46  Näo que alguém visse ao Pai, a näo ser aquele que é de Deus; este tem visto ao Pai.
47  Na verdade, na verdade vos digo que aquele que crê em mim tem a vida eterna.
48  Eu sou o päo da vida.
49  Vossos pais comeram o maná no deserto, e morreram.
50  Este é o päo que desce do céu, para que o que dele comer näo morra.
51  Eu sou o päo vivo que desceu do céu; se alguém comer deste päo, viverá para sempre; e o päo que eu der é a minha carne, que eu darei pela vida do mundo.
52  Disputavam, pois, os judeus entre si, dizendo: Como nos pode dar este a sua carne a comer?
53  Jesus, pois, lhes disse: Na verdade, na verdade vos digo que, se näo comerdes a carne do Filho do homem, e näo beberdes o seu sangue, näo tereis vida em vós mesmos.
54  Quem come a minha carne e bebe o meu sangue tem a vida eterna, e eu o ressuscitarei no último dia.
55  Porque a minha carne verdadeiramente é comida, e o meu sangue verdadeiramente é bebida.
56  Quem come a minha carne e bebe o meu sangue permanece em mim e eu nele.
57  Assim como o Pai, que vive, me enviou, e eu vivo pelo Pai, assim, quem de mim se alimenta, também viverá por mim.
58  Este é o päo que desceu do céu; näo é o caso de vossos pais, que comeram o maná e morreram; quem comer este päo viverá para sempre.
59  Ele disse estas coisas na sinagoga, ensinando em Cafarnaum.
60  Muitos, pois, dos seus discípulos, ouvindo isto, disseram: Duro é este discurso; quem o pode ouvir?
61  Sabendo, pois, Jesus em si mesmo que os seus discípulos murmuravam disto, disse-lhes: Isto escandaliza-vos?
62  Que seria, pois, se vísseis subir o Filho do homem para onde primeiro estava?
63  O espírito é o que vivifica, a carne para nada aproveita; as palavras que eu vos disse säo espírito e vida.
64  Mas há alguns de vós que näo crêem. Porque bem sabia Jesus, desde o princípio, quem eram os que näo criam, e quem era o que o havia de entregar.
65  E dizia: Por isso eu vos disse que ninguém pode vir a mim, se por meu Pai näo lhe for concedido.
66  Desde entäo muitos dos seus discípulos tornaram para trás, e já näo andavam com ele.
67  Entäo disse Jesus aos doze: Quereis vós também retirar-vos?
68  Respondeu-lhe, pois, Simäo Pedro: Senhor, para quem iremos nós? Tu tens as palavras da vida eterna.
69  E nós temos crido e conhecido que tu és o Cristo, o Filho do Deus vivente.
70  Respondeu-lhe Jesus: Näo vos escolhi a vós os doze? e um de vós é um diabo.
71  E isto dizia ele de Judas Iscariotes, filho de Simäo; porque este o havia de entregar, sendo um dos doze.
Capitulo 7

1  E depois disto Jesus andava pela Galiléia, e já näo queria andar pela Judéia, pois os judeus procuravam matá-lo.
2  E estava próxima a festa dos judeus, a dos tabernáculos.
3  Disseram-lhe, pois, seus irmäos: Sai daqui, e vai para a Judéia, para que também os teus discípulos vejam as obras que fazes.
4  Porque näo há ninguém que procure ser conhecido que faça coisa alguma em oculto. Se fazes estas coisas, manifesta-te ao mundo.
5  Porque nem mesmo seus irmäos criam nele.
6  Disse-lhes, pois, Jesus: Ainda näo é chegado o meu tempo, mas o vosso tempo sempre está pronto.
7  O mundo näo vos pode odiar, mas ele me odeia a mim, porquanto dele testifico que as suas obras säo más.
8  Subi vós a esta festa; eu näo subo ainda a esta festa, porque ainda o meu tempo näo está cumprido.
9  E, havendo-lhes dito isto, ficou na Galiléia.
10  Mas, quando seus irmäos já tinham subido à festa, entäo subiu ele também, näo manifestamente, mas como em oculto.
11  Ora, os judeus procuravam-no na festa, e diziam: Onde está ele?
12  E havia grande murmuraçäo entre a multidäo a respeito dele. Diziam alguns: Ele é bom. E outros diziam: Näo, antes engana o povo.
13  Todavia ninguém falava dele abertamente, por medo dos judeus.
14  Mas, no meio da festa subiu Jesus ao templo, e ensinava.
15  E os judeus maravilhavam-se, dizendo: Como sabe este letras, näo as tendo aprendido?
16  Jesus lhes respondeu, e disse: A minha doutrina näo é minha, mas daquele que me enviou.
17  Se alguém quiser fazer a vontade dele, pela mesma doutrina conhecerá se ela é de Deus, ou se eu falo de mim mesmo.
18  Quem fala de si mesmo busca a sua própria glória; mas o que busca a glória daquele que o enviou, esse é verdadeiro, e näo há nele injustiça.
19  Näo vos deu Moisés a lei? e nenhum de vós observa a lei. Por que procurais matar-me?
20  A multidäo respondeu, e disse: Tens demónio; quem procura matar-te?
21  Respondeu Jesus, e disse-lhes: Fiz uma só obra, e todos vos maravilhais.
22  Pelo motivo de que Moisés vos deu a circuncisäo (näo que fosse de Moisés, mas dos pais), no sábado circuncidais um homem.
23  Se o homem recebe a circuncisäo no sábado, para que a lei de Moisés näo seja quebrantada, indignais-vos contra mim, porque no sábado curei de todo um homem?
24  Näo julgueis segundo a aparência, mas julgai segundo a reta justiça.
25  Entäo alguns dos de Jerusalém diziam: Näo é este o que procuram matar?
26  E ei-lo aí está falando abertamente, e nada lhe dizem. Porventura sabem verdadeiramente os príncipes que de fato este é o Cristo?
27  Todavia bem sabemos de onde este é; mas, quando vier o Cristo, ninguém saberá de onde ele é.
28  Clamava, pois, Jesus no templo, ensinando, e dizendo: Vós conheceis-me, e sabeis de onde sou; e eu näo vim de mim mesmo, mas aquele que me enviou é verdadeiro, o qual vós näo conheceis.
29  Mas eu conheço-o, porque dele sou e ele me enviou.
30  Procuravam, pois, prendê-lo, mas ninguém lançou mäo dele, porque ainda näo era chegada a sua hora.
31  E muitos da multidäo creram nele, e diziam: Quando o Cristo vier, fará ainda mais sinais do que os que este tem feito?
32  Os fariseus ouviram que a multidäo murmurava dele estas coisas; e os fariseus e os principais dos sacerdotes mandaram servidores para o prenderem.
33  Disse-lhes, pois, Jesus: Ainda um pouco de tempo estou convosco, e depois vou para aquele que me enviou.
34  Vós me buscareis, e näo me achareis; e onde eu estou, vós näo podeis vir.
35  Disseram, pois, os judeus uns para os outros: Para onde irá este, que o näo acharemos? Irá porventura para os dispersos entre os gregos, e ensinará os gregos?
36  Que palavra é esta que disse: Buscar-me-eis, e näo me achareis; e: Aonde eu estou vós näo podeis ir?
37  E no último dia, o grande dia da festa, Jesus pós-se em pé, e clamou, dizendo: Se alguém tem sede, venha a mim, e beba.
38  Quem crê em mim, como diz a Escritura, rios de água viva correräo do seu ventre.
39  E isto disse ele do Espírito que haviam de receber os que nele cressem; porque o Espírito Santo ainda näo fora dado, por ainda Jesus näo ter sido glorificado.
40  Entäo muitos da multidäo, ouvindo esta palavra, diziam: Verdadeiramente este é o Profeta.
41  Outros diziam: Este é o Cristo; mas diziam outros: Vem, pois, o Cristo da Galiléia?
42  Näo diz a Escritura que o Cristo vem da descendência de Davi, e de Belém, da aldeia de onde era Davi?
43  Assim entre o povo havia dissensäo por causa dele.
44  E alguns deles queriam prendê-lo, mas ninguém lançou mäo dele.
45  E os servidores foram ter com os principais dos sacerdotes e fariseus; e eles lhes perguntaram: Por que näo o trouxestes?
46  Responderam os servidores: Nunca homem algum falou assim como este homem.
47  Responderam-lhes, pois, os fariseus: Também vós fostes enganados?
48  Creu nele porventura algum dos principais ou dos fariseus?
49  Mas esta multidäo, que näo sabe a lei, é maldita.
50  Nicodemos, que era um deles (o que de noite fora ter com Jesus), disse-lhes:
51  Porventura condena a nossa lei um homem sem primeiro o ouvir e ter conhecimento do que faz?
52  Responderam eles, e disseram-lhe: És tu também da Galiléia? Examina, e verás que da Galiléia nenhum profeta surgiu.
53  E cada um foi para sua casa.

Capitulo 8
1  Jesus, porém, foi para o Monte das Oliveiras.
2  E pela manhä cedo tornou para o templo, e todo o povo vinha ter com ele, e, assentando-se, os ensinava.
3  E os escribas e fariseus trouxeram-lhe uma mulher apanhada em adultério;
4  E, pondo-a no meio, disseram-lhe: Mestre, esta mulher foi apanhada, no próprio ato, adulterando.
5  E na lei nos mandou Moisés que as tais sejam apedrejadas. Tu, pois, que dizes?
6  Isto diziam eles, tentando-o, para que tivessem de que o acusar. Mas Jesus, inclinando-se, escrevia com o dedo na terra.
7  E, como insistissem, perguntando-lhe, endireitou-se, e disse-lhes: Aquele que de entre vós está sem pecado seja o primeiro que atire pedra contra ela.
8  E, tornando a inclinar-se, escrevia na terra.
9  Quando ouviram isto, redargüidos da consciência, saíram um a um, a começar pelos mais velhos até aos últimos; ficou só Jesus e a mulher que estava no meio.
10  E, endireitando-se Jesus, e näo vendo ninguém mais do que a mulher, disse-lhe: Mulher, onde estäo aqueles teus acusadores? Ninguém te condenou?
11  E ela disse: Ninguém, Senhor. E disse-lhe Jesus: Nem eu também te condeno; vai-te, e näo peques mais.
12  Falou-lhes, pois, Jesus outra vez, dizendo: Eu sou a luz do mundo; quem me segue näo andará em trevas, mas terá a luz da vida.
13  Disseram-lhe, pois, os fariseus: Tu testificas de ti mesmo; o teu testemunho näo é verdadeiro.
14  Respondeu Jesus, e disse-lhes: Ainda que eu testifico de mim mesmo, o meu testemunho é verdadeiro, porque sei de onde vim, e para onde vou; mas vós näo sabeis de onde venho, nem para onde vou.
15  Vós julgais segundo a carne; eu a ninguém julgo.
16  E, se na verdade julgo, o meu juízo é verdadeiro, porque näo sou eu só, mas eu e o Pai que me enviou.
17  E na vossa lei está também escrito que o testemunho de dois homens é verdadeiro.
18  Eu sou o que testifico de mim mesmo, e de mim testifica também o Pai que me enviou.
19  Disseram-lhe, pois: Onde está teu Pai? Jesus respondeu: Näo me conheceis a mim, nem a meu Pai; se vós me conhecêsseis a mim, também conheceríeis a meu Pai.
20  Estas palavras disse Jesus no lugar do tesouro, ensinando no templo, e ninguém o prendeu, porque ainda näo era chegada a sua hora.
21  Disse-lhes, pois, Jesus outra vez: Eu retiro-me, e buscar-me-eis, e morrereis no vosso pecado. Para onde eu vou, näo podeis vós vir.
22  Diziam, pois, os judeus: Porventura quererá matar-se a si mesmo, pois diz: Para onde eu vou näo podeis vir?
23  E dizia-lhes: Vós sois de baixo, eu sou de cima; vós sois deste mundo, eu näo sou deste mundo.
24  Por isso vos disse que morrereis em vossos pecados, porque se näo crerdes que eu sou, morrereis em vossos pecados.
25  Disseram-lhe, pois: Quem és tu? Jesus lhes disse: Isso mesmo que já desde o princípio vos disse.
26  Muito tenho que dizer e julgar de vós, mas aquele que me enviou é verdadeiro; e o que dele tenho ouvido, isso falo ao mundo.
27  Mas näo entenderam que ele lhes falava do Pai.
28  Disse-lhes, pois, Jesus: Quando levantardes o Filho do homem, entäo conhecereis quem eu sou, e que nada faço por mim mesmo; mas falo como meu Pai me ensinou.
29  E aquele que me enviou está comigo. O Pai näo me tem deixado só, porque eu faço sempre o que lhe agrada.
30  Dizendo ele estas coisas, muitos creram nele.
31  Jesus dizia, pois, aos judeus que criam nele: Se vós permanecerdes na minha palavra, verdadeiramente sereis meus discípulos;
32  E conhecereis a verdade, e a verdade vos libertará.
33  Responderam-lhe: Somos descendência de Abraäo, e nunca servimos a ninguém; como dizes tu: Sereis livres?
34  Respondeu-lhes Jesus: Em verdade, em verdade vos digo que todo aquele que comete pecado é servo do pecado.
35  Ora o servo näo fica para sempre em casa; o Filho fica para sempre.
36  Se, pois, o Filho vos libertar, verdadeiramente sereis livres.
37  Bem sei que sois descendência de Abraäo; contudo, procurais matar-me, porque a minha palavra näo entra em vós.
38  Eu falo do que vi junto de meu Pai, e vós fazeis o que também vistes junto de vosso pai.
39  Responderam, e disseram-lhe: Nosso pai é Abraäo. Jesus disse-lhes: Se fósseis filhos de Abraäo, faríeis as obras de Abraäo.
40  Mas agora procurais matar-me, a mim, homem que vos tem dito a verdade que de Deus tem ouvido; Abraäo näo fez isto.
41  Vós fazeis as obras de vosso pai. Disseram-lhe, pois: Nós näo somos nascidos de prostituiçäo; temos um Pai, que é Deus.
42  Disse-lhes, pois, Jesus: Se Deus fosse o vosso Pai, certamente me amaríeis, pois que eu saí, e vim de Deus; näo vim de mim mesmo, mas ele me enviou.
43  Por que näo entendeis a minha linguagem? Por näo poderdes ouvir a minha palavra.
44  Vós tendes por pai ao diabo, e quereis satisfazer os desejos de vosso pai. Ele foi homicida desde o princípio, e näo se firmou na verdade, porque näo há verdade nele. Quando ele profere mentira, fala do que lhe é próprio, porque é mentiroso, e pai da mentira.
45  Mas, porque vos digo a verdade, näo me credes.
46  Quem dentre vós me convence de pecado? E se vos digo a verdade, por que näo credes?
47  Quem é de Deus escuta as palavras de Deus; por isso vós näo as escutais, porque näo sois de Deus.
48  Responderam, pois, os judeus, e disseram-lhe: Näo dizemos nós bem que és samaritano, e que tens demónio?
49  Jesus respondeu: Eu näo tenho demónio, antes honro a meu Pai, e vós me desonrais.
50  Eu näo busco a minha glória; há quem a busque, e julgue.
51  Em verdade, em verdade vos digo que, se alguém guardar a minha palavra, nunca verá a morte.
52  Disseram-lhe, pois, os judeus: Agora conhecemos que tens demónio. Morreu Abraäo e os profetas; e tu dizes: Se alguém guardar a minha palavra, nunca provará a morte.
53  És tu maior do que o nosso pai Abraäo, que morreu? E também os profetas morreram. Quem te fazes tu ser?
54  Jesus respondeu: Se eu me glorifico a mim mesmo, a minha glória näo é nada; quem me glorifica é meu Pai, o qual dizeis que é vosso Deus.
55  E vós näo o conheceis, mas eu conheço-o. E, se disser que o näo conheço, serei mentiroso como vós; mas conheço-o e guardo a sua palavra.
56  Abraäo, vosso pai, exultou por ver o meu dia, e viu-o, e alegrou-se.
57  Disseram-lhe, pois, os judeus: Ainda näo tens cinqüenta anos, e viste Abraäo?
58  Disse-lhes Jesus: Em verdade, em verdade vos digo que antes que Abraäo existisse, eu sou.
59  Entäo pegaram em pedras para lhe atirarem; mas Jesus ocultou-se, e saiu do templo, passando pelo meio deles, e assim se retirou.

Capitulo 9
1  E, passando Jesus, viu um homem cego de nascença.
2  E os seus discípulos lhe perguntaram, dizendo: Rabi, quem pecou, este ou seus pais, para que nascesse cego?
3  Jesus respondeu: Nem ele pecou nem seus pais; mas foi assim para que se manifestem nele as obras de Deus.
4  Convém que eu faça as obras daquele que me enviou, enquanto é dia; a noite vem, quando ninguém pode trabalhar.
5  Enquanto estou no mundo, sou a luz do mundo.
6  Tendo dito isto, cuspiu na terra, e com a saliva fez lodo, e untou com o lodo os olhos do cego.
7  E disse-lhe: Vai, lava-te no tanque de Siloé (que significa o Enviado). Foi, pois, e lavou-se, e voltou vendo.
8  Entäo os vizinhos, e aqueles que dantes tinham visto que era cego, diziam: Näo é este aquele que estava assentado e mendigava?
9  Uns diziam: É este. E outros: Parece-se com ele. Ele dizia: Sou eu.
10  Diziam-lhe, pois: Como se te abriram os olhos?
11  Ele respondeu, e disse: O homem, chamado Jesus, fez lodo, e untou-me os olhos, e disse-me: Vai ao tanque de Siloé, e lava-te. Entäo fui, e lavei-me, e vi.
12  Disseram-lhe, pois: Onde está ele? Respondeu: Näo sei.
13  Levaram, pois, aos fariseus o que dantes era cego.
14  E era sábado quando Jesus fez o lodo e lhe abriu os olhos.
15  Tornaram, pois, também os fariseus a perguntar-lhe como vira, e ele lhes disse: Pós-me lodo sobre os olhos, lavei-me, e vejo.
16  Entäo alguns dos fariseus diziam: Este homem näo é de Deus, pois näo guarda o sábado. Diziam outros: Como pode um homem pecador fazer tais sinais? E havia dissensäo entre eles.
17  Tornaram, pois, a dizer ao cego: Tu, que dizes daquele que te abriu os olhos? E ele respondeu: Que é profeta.
18  Os judeus, porém, näo creram que ele tivesse sido cego, e que agora visse, enquanto näo chamaram os pais do que agora via.
19  E perguntaram-lhes, dizendo: É este o vosso filho, que vós dizeis ter nascido cego? Como, pois, vê agora?
20  Seus pais lhes responderam, e disseram: Sabemos que este é o nosso filho, e que nasceu cego;
21  Mas como agora vê, näo sabemos; ou quem lhe tenha aberto os olhos, näo sabemos. Tem idade, perguntai-lho a ele mesmo; e ele falará por si mesmo.
22  Seus pais disseram isto, porque temiam os judeus. Porquanto já os judeus tinham resolvido que, se alguém confessasse ser ele o Cristo, fosse expulso da sinagoga.
23  Por isso é que seus pais disseram: Tem idade, perguntai-lho a ele mesmo.
24  Chamaram, pois, pela segunda vez o homem que tinha sido cego, e disseram-lhe: Dá glória a Deus; nós sabemos que esse homem é pecador.
25  Respondeu ele pois, e disse: Se é pecador, näo sei; uma coisa sei, é que, havendo eu sido cego, agora vejo.
26  E tornaram a dizer-lhe: Que te fez ele? Como te abriu os olhos?
27  Respondeu-lhes: Já vo-lo disse, e näo ouvistes; para que o quereis tornar a ouvir? Quereis vós porventura fazer-vos também seus discípulos?
28  Entäo o injuriaram, e disseram: Discípulo dele sejas tu; nós, porém, somos discípulos de Moisés.
29  Nós bem sabemos que Deus falou a Moisés, mas este näo sabemos de onde é.
30  O homem respondeu, e disse-lhes: Nisto, pois, está a maravilha, que vós näo saibais de onde ele é, e contudo me abrisse os olhos.
31  Ora, nós sabemos que Deus näo ouve a pecadores; mas, se alguém é temente a Deus, e faz a sua vontade, a esse ouve.
32  Desde o princípio do mundo nunca se ouviu que alguém abrisse os olhos a um cego de nascença.
33  Se este näo fosse de Deus, nada poderia fazer.
34  Responderam eles, e disseram-lhe: Tu és nascido todo em pecados, e nos ensinas a nós? E expulsaram-no.
35  Jesus ouviu que o tinham expulsado e, encontrando-o, disse-lhe: Crês tu no Filho de Deus?
36  Ele respondeu, e disse: Quem é ele, Senhor, para que nele creia?
37  E Jesus lhe disse: Tu já o tens visto, e é aquele que fala contigo.
38  Ele disse: Creio, Senhor. E o adorou.
39  E disse-lhe Jesus: Eu vim a este mundo para juízo, a fim de que os que näo vêem vejam, e os que vêem sejam cegos.
40  E aqueles dos fariseus, que estavam com ele, ouvindo isto, disseram-lhe: Também nós somos cegos?
41  Disse-lhes Jesus: Se fósseis cegos, näo teríeis pecado; mas como agora dizeis: Vemos; por isso o vosso pecado permanece.

Capitulo 10
1  Na verdade, na verdade vos digo que aquele que näo entra pela porta no curral das ovelhas, mas sobe por outra parte, é ladräo e salteador.
2  Aquele, porém, que entra pela porta é o pastor das ovelhas.
3  A este o porteiro abre, e as ovelhas ouvem a sua voz, e chama pelo nome às suas ovelhas, e as traz para fora.
4  E, quando tira para fora as suas ovelhas, vai adiante delas, e as ovelhas o seguem, porque conhecem a sua voz.
5  Mas de modo nenhum seguiräo o estranho, antes fugiräo dele, porque näo conhecem a voz dos estranhos.
6  Jesus disse-lhes esta parábola; mas eles näo entenderam o que era que lhes dizia.
7  Tornou, pois, Jesus a dizer-lhes: Em verdade, em verdade vos digo que eu sou a porta das ovelhas.
8  Todos quantos vieram antes de mim säo ladröes e salteadores; mas as ovelhas näo os ouviram.
9  Eu sou a porta; se alguém entrar por mim, salvar-se-á, e entrará, e sairá, e achará pastagens.
10  O ladräo näo vem senäo a roubar, a matar, e a destruir; eu vim para que tenham vida, e a tenham com abundáncia.
11  Eu sou o bom Pastor; o bom Pastor dá a sua vida pelas ovelhas.
12  Mas o mercenário, e o que näo é pastor, de quem näo säo as ovelhas, vê vir o lobo, e deixa as ovelhas, e foge; e o lobo as arrebata e dispersa as ovelhas.
13  Ora, o mercenário foge, porque é mercenário, e näo tem cuidado das ovelhas.
14  Eu sou o bom Pastor, e conheço as minhas ovelhas, e das minhas sou conhecido.
15  Assim como o Pai me conhece a mim, também eu conheço o Pai, e dou a minha vida pelas ovelhas.
16  Ainda tenho outras ovelhas que näo säo deste aprisco; também me convém agregar estas, e elas ouviräo a minha voz, e haverá um rebanho e um Pastor.
17  Por isto o Pai me ama, porque dou a minha vida para tornar a tomá-la.
18  Ninguém ma tira de mim, mas eu de mim mesmo a dou; tenho poder para a dar, e poder para tornar a tomá-la. Este mandamento recebi de meu Pai.
19  Tornou, pois, a haver divisäo entre os judeus por causa destas palavras.
20  E muitos deles diziam: Tem demónio, e está fora de si; por que o ouvis?
21  Diziam outros: Estas palavras näo säo de endemoninhado. Pode, porventura, um demónio abrir os olhos aos cegos?
22  E em Jerusalém havia a festa da dedicaçäo, e era inverno.
23  E Jesus andava passeando no templo, no alpendre de Salomäo.
24  Rodearam-no, pois, os judeus, e disseram-lhe: Até quando terás a nossa alma suspensa? Se tu és o Cristo, dize-no-lo abertamente.
25  Respondeu-lhes Jesus: Já vo-lo tenho dito, e näo o credes. As obras que eu faço, em nome de meu Pai, essas testificam de mim.
26  Mas vós näo credes porque näo sois das minhas ovelhas, como já vo-lo tenho dito.
27  As minhas ovelhas ouvem a minha voz, e eu conheço-as, e elas me seguem;
28  E dou-lhes a vida eterna, e nunca häo de perecer, e ninguém as arrebatará da minha mäo.
29  Meu Pai, que mas deu, é maior do que todos; e ninguém pode arrebatá-las da mäo de meu Pai.
30  Eu e o Pai somos um.
31  Os judeus pegaram entäo outra vez em pedras para o apedrejar.
32  Respondeu-lhes Jesus: Tenho-vos mostrado muitas obras boas procedentes de meu Pai; por qual destas obras me apedrejais?
33  Os judeus responderam, dizendo-lhe: Näo te apedrejamos por alguma obra boa, mas pela blasfêmia; porque, sendo tu homem, te fazes Deus a ti mesmo.
34  Respondeu-lhes Jesus: Näo está escrito na vossa lei: Eu disse: Sois deuses?
35  Pois, se a lei chamou deuses àqueles a quem a palavra de Deus foi dirigida (e a Escritura näo pode ser anulada),
36  Åquele a quem o Pai santificou, e enviou ao mundo, vós dizeis: Blasfemas, porque disse: Sou Filho de Deus?
37  Se näo faço as obras de meu Pai, näo me acrediteis.
38  Mas, se as faço, e näo credes em mim, crede nas obras; para que conheçais e acrediteis que o Pai está em mim e eu nele.
39  Procuravam, pois, prendê-lo outra vez, mas ele escapou-se de suas mäos,
40  E retirou-se outra vez para além do Jordäo, para o lugar onde Joäo tinha primeiramente batizado; e ali ficou.
41  E muitos iam ter com ele, e diziam: Na verdade Joäo näo fez sinal algum, mas tudo quanto Joäo disse deste era verdade.
42  E muitos ali creram nele.

Capitulo 11
1  Estava, porém, enfermo um certo Lázaro, de Betánia, aldeia de Maria e de sua irmä Marta.
2  E Maria era aquela que tinha ungido o Senhor com ungüento, e lhe tinha enxugado os pés com os seus cabelos, cujo irmäo Lázaro estava enfermo.
3  Mandaram-lhe, pois, suas irmäs dizer: Senhor, eis que está enfermo aquele que tu amas.
4  E Jesus, ouvindo isto, disse: Esta enfermidade näo é para morte, mas para glória de Deus, para que o Filho de Deus seja glorificado por ela.
5  Ora, Jesus amava a Marta, e a sua irmä, e a Lázaro.
6  Ouvindo, pois, que estava enfermo, ficou ainda dois dias no lugar onde estava.
7  Depois disto, disse aos seus discípulos: Vamos outra vez para a Judéia.
8  Disseram-lhe os discípulos: Rabi, ainda agora os judeus procuravam apedrejar-te, e tornas para lá?
9  Jesus respondeu: Näo há doze horas no dia? Se alguém andar de dia, näo tropeça, porque vê a luz deste mundo;
10  Mas, se andar de noite, tropeça, porque nele näo há luz.
11  Assim falou; e depois disse-lhes: Lázaro, o nosso amigo, dorme, mas vou despertá-lo do sono.
12  Disseram, pois, os seus discípulos: Senhor, se dorme, estará salvo.
13  Mas Jesus dizia isto da sua morte; eles, porém, cuidavam que falava do repouso do sono.
14  Entäo Jesus disse-lhes claramente: Lázaro está morto;
15  E folgo, por amor de vós, de que eu lá näo estivesse, para que acrediteis; mas vamos ter com ele.
16  Disse, pois, Tomé, chamado Dídimo, aos condiscípulos: Vamos nós também, para morrermos com ele.
17  Chegando, pois, Jesus, achou que já havia quatro dias que estava na sepultura.
18  (Ora Betánia distava de Jerusalém quase quinze estádios.)
19  E muitos dos judeus tinham ido consolar a Marta e a Maria, acerca de seu irmäo.
20  Ouvindo, pois, Marta que Jesus vinha, saiu-lhe ao encontro; Maria, porém, ficou assentada em casa.
21  Disse, pois, Marta a Jesus: Senhor, se tu estivesses aqui, meu irmäo näo teria morrido.
22  Mas também agora sei que tudo quanto pedires a Deus, Deus to concederá.
23  Disse-lhe Jesus: Teu irmäo há de ressuscitar.
24  Disse-lhe Marta: Eu sei que há de ressuscitar na ressurreiçäo do último dia.
25  Disse-lhe Jesus: Eu sou a ressurreiçäo e a vida; quem crê em mim, ainda que esteja morto, viverá;
26  E todo aquele que vive, e crê em mim, nunca morrerá. Crês tu isto?
27  Disse-lhe ela: Sim, Senhor, creio que tu és o Cristo, o Filho de Deus, que havia de vir ao mundo.
28  E, dito isto, partiu, e chamou em segredo a Maria, sua irmä, dizendo: O Mestre está cá, e chama-te.
29  Ela, ouvindo isto, levantou-se logo, e foi ter com ele.
30  (Ainda Jesus näo tinha chegado à aldeia, mas estava no lugar onde Marta o encontrara.)
31  Vendo, pois, os judeus, que estavam com ela em casa e a consolavam, que Maria apressadamente se levantara e saíra, seguiram-na, dizendo: Vai ao sepulcro para chorar ali.
32  Tendo, pois, Maria chegado aonde Jesus estava, e vendo-o, lançou-se aos seus pés, dizendo-lhe: Senhor, se tu estivesses aqui, meu irmäo näo teria morrido.
33  Jesus pois, quando a viu chorar, e também chorando os judeus que com ela vinham, moveu-se muito em espírito, e perturbou-se.
34  E disse: Onde o pusestes? Disseram-lhe: Senhor, vem, e vê.
35  Jesus chorou.
36  Disseram, pois, os judeus: Vede como o amava.
37  E alguns deles disseram: Näo podia ele, que abriu os olhos ao cego, fazer também com que este näo morresse?
38  Jesus, pois, movendo-se outra vez muito em si mesmo, veio ao sepulcro; e era uma caverna, e tinha uma pedra posta sobre ela.
39  Disse Jesus: Tirai a pedra. Marta, irmä do defunto, disse-lhe: Senhor, já cheira mal, porque é já de quatro dias.
40  Disse-lhe Jesus: Näo te hei dito que, se creres, verás a glória de Deus?
41  Tiraram, pois, a pedra de onde o defunto jazia. E Jesus, levantando os olhos para cima, disse: Pai, graças te dou, por me haveres ouvido.
42  Eu bem sei que sempre me ouves, mas eu disse isto por causa da multidäo que está em redor, para que creiam que tu me enviaste.
43  E, tendo dito isto, clamou com grande voz: Lázaro, sai para fora.
44  E o defunto saiu, tendo as mäos e os pés ligados com faixas, e o seu rosto envolto num lenço. Disse-lhes Jesus: Desligai-o, e deixai-o ir.
45  Muitos, pois, dentre os judeus que tinham vindo a Maria, e que tinham visto o que Jesus fizera, creram nele.
46  Mas alguns deles foram ter com os fariseus, e disseram-lhes o que Jesus tinha feito.
47  Depois os principais dos sacerdotes e os fariseus formaram conselho, e diziam: Que faremos? porquanto este homem faz muitos sinais.
48  Se o deixamos assim, todos creräo nele, e viräo os romanos, e tirar-nos-äo o nosso lugar e a naçäo.
49  E Caifás, um deles que era sumo sacerdote naquele ano, lhes disse: Vós nada sabeis,
50  Nem considerais que nos convém que um homem morra pelo povo, e que näo pereça toda a naçäo.
51  Ora ele näo disse isto de si mesmo, mas, sendo o sumo sacerdote naquele ano, profetizou que Jesus devia morrer pela naçäo.
52  E näo somente pela naçäo, mas também para reunir em um corpo os filhos de Deus que andavam dispersos.
53  Desde aquele dia, pois, consultavam-se para o matarem.
54  Jesus, pois, já näo andava manifestamente entre os judeus, mas retirou-se dali para a terra junto do deserto, para uma cidade chamada Efraim; e ali ficou com os seus discípulos.
55  E estava próxima a páscoa dos judeus, e muitos daquela regiäo subiram a Jerusalém antes da páscoa para se purificarem.
56  Buscavam, pois, a Jesus, e diziam uns aos outros, estando no templo: Que vos parece? Näo virá à festa?
57  Ora, os principais dos sacerdotes e os fariseus tinham dado ordem para que, se alguém soubesse onde ele estava, o denunciasse, para o prenderem.

Capitulo 12
1  Foi, pois, Jesus seis dias antes da páscoa a Betánia, onde estava Lázaro, o que falecera, e a quem ressuscitara dentre os mortos.
2  Fizeram-lhe, pois, ali uma ceia, e Marta servia, e Lázaro era um dos que estavam à mesa com ele.
3  Entäo Maria, tomando um arrátel de ungüento de nardo puro, de muito preço, ungiu os pés de Jesus, e enxugou-lhe os pés com os seus cabelos; e encheu-se a casa do cheiro do ungüento.
4  Entäo, um dos seus discípulos, Judas Iscariotes, filho de Simäo, o que havia de traí-lo, disse:
5  Por que näo se vendeu este ungüento por trezentos dinheiros e näo se deu aos pobres?
6  Ora, ele disse isto, näo pelo cuidado que tivesse dos pobres, mas porque era ladräo e tinha a bolsa, e tirava o que ali se lançava.
7  Disse, pois, Jesus: Deixai-a; para o dia da minha sepultura guardou isto;
8  Porque os pobres sempre os tendes convosco, mas a mim nem sempre me tendes.
9  E muita gente dos judeus soube que ele estava ali; e foram, näo só por causa de Jesus, mas também para ver a Lázaro, a quem ressuscitara dentre os mortos.
10  E os principais dos sacerdotes tomaram deliberaçäo para matar também a Lázaro;
11  Porque muitos dos judeus, por causa dele, iam e criam em Jesus.
12  No dia seguinte, ouvindo uma grande multidäo, que viera à festa, que Jesus vinha a Jerusalém,
13  Tomaram ramos de palmeiras, e saíram-lhe ao encontro, e clamavam: Hosana! Bendito o Rei de Israel que vem em nome do Senhor.
14  E achou Jesus um jumentinho, e assentou-se sobre ele, como está escrito:
15  Näo temas, ó filha de Siäo; eis que o teu Rei vem assentado sobre o filho de uma jumenta.
16  Os seus discípulos, porém, näo entenderam isto no princípio; mas, quando Jesus foi glorificado, entäo se lembraram de que isto estava escrito dele, e que isto lhe fizeram.
17  A multidäo, pois, que estava com ele quando Lázaro foi chamado da sepultura, testificava que ele o ressuscitara dentre os mortos.
18  Por isso a multidäo lhe saiu ao encontro, porque tinham ouvido que ele fizera este sinal.
19  Disseram, pois, os fariseus entre si: Vedes que nada aproveitais? Eis que toda a gente vai após ele.
20  Ora, havia alguns gregos, entre os que tinham subido a adorar no dia da festa.
21  Estes, pois, dirigiram-se a Filipe, que era de Betsaida da Galiléia, e rogaram-lhe, dizendo: Senhor, queríamos ver a Jesus.
22  Filipe foi dizê-lo a André, e entäo André e Filipe o disseram a Jesus.
23  E Jesus lhes respondeu, dizendo: E chegada a hora em que o Filho do homem há de ser glorificado.
24  Na verdade, na verdade vos digo que, se o gräo de trigo, caindo na terra, näo morrer, fica ele só; mas se morrer, dá muito fruto.
25  Quem ama a sua vida perdê-la-á, e quem neste mundo odeia a sua vida, guardá-la-á para a vida eterna.
26  Se alguém me serve, siga-me, e onde eu estiver, ali estará também o meu servo. E, se alguém me servir, meu Pai o honrará.
27  Agora a minha alma está perturbada; e que direi eu? Pai, salva-me desta hora; mas para isto vim a esta hora.
28  Pai, glorifica o teu nome. Entäo veio uma voz do céu que dizia: Já o tenho glorificado, e outra vez o glorificarei.
29  Ora, a multidäo que ali estava, e que a ouvira, dizia que havia sido um troväo. Outros diziam: Um anjo lhe falou.
30  Respondeu Jesus, e disse: Näo veio esta voz por amor de mim, mas por amor de vós.
31  Agora é o juízo deste mundo; agora será expulso o príncipe deste mundo.
32  E eu, quando for levantado da terra, todos atrairei a mim.
33  E dizia isto, significando de que morte havia de morrer.
34  Respondeu-lhe a multidäo: Nós temos ouvido da lei, que o Cristo permanece para sempre; e como dizes tu que convém que o Filho do homem seja levantado? Quem é esse Filho do homem?
35  Disse-lhes, pois, Jesus: A luz ainda está convosco por um pouco de tempo. Andai enquanto tendes luz, para que as trevas näo vos apanhem; pois quem anda nas trevas näo sabe para onde vai.
36  Enquanto tendes luz, crede na luz, para que sejais filhos da luz. Estas coisas disse Jesus e, retirando-se, escondeu-se deles.
37  E, ainda que tinha feito tantos sinais diante deles, näo criam nele;
38  Para que se cumprisse a palavra do profeta Isaías, que diz: Senhor, quem creu na nossa pregaçäo? E a quem foi revelado o braço do Senhor?
39  Por isso näo podiam crer, entäo Isaías disse outra vez:
40  Cegou-lhes os olhos, e endureceu-lhes o coraçäo, A fim de que näo vejam com os olhos, e compreendam no coraçäo, E se convertam, E eu os cure.
41  Isaías disse isto quando viu a sua glória e falou dele.
42  Apesar de tudo, até muitos dos principais creram nele; mas näo o confessavam por causa dos fariseus, para näo serem expulsos da sinagoga.
43  Porque amavam mais a glória dos homens do que a glória de Deus.
44  E Jesus clamou, e disse: Quem crê em mim, crê, näo em mim, mas naquele que me enviou.
45  E quem me vê a mim, vê aquele que me enviou.
46  Eu sou a luz que vim ao mundo, para que todo aquele que crê em mim näo permaneça nas trevas.
47  E se alguém ouvir as minhas palavras, e näo crer, eu näo o julgo; porque eu vim, näo para julgar o mundo, mas para salvar o mundo.
48  Quem me rejeitar a mim, e näo receber as minhas palavras, já tem quem o julgue; a palavra que tenho pregado, essa o há de julgar no último dia.
49  Porque eu näo tenho falado de mim mesmo; mas o Pai, que me enviou, ele me deu mandamento sobre o que hei de dizer e sobre o que hei de falar.
50  E sei que o seu mandamento é a vida eterna. Portanto, o que eu falo, falo-o como o Pai mo tem dito.

Capitulo 13
1  Ora, antes da festa da páscoa, sabendo Jesus que já era chegada a sua hora de passar deste mundo para o Pai, como havia amado os seus, que estavam no mundo, amou-os até o fim.
2  E, acabada a ceia, tendo o diabo posto no coraçäo de Judas Iscariotes, filho de Simäo, que o traísse,
3  Jesus, sabendo que o Pai tinha depositado nas suas mäos todas as coisas, e que havia saído de Deus e ia para Deus,
4  Levantou-se da ceia, tirou as vestes, e, tomando uma toalha, cingiu-se.
5  Depois deitou água numa bacia, e começou a lavar os pés aos discípulos, e a enxugar-lhos com a toalha com que estava cingido.
6  Aproximou-se, pois, de Simäo Pedro, que lhe disse: Senhor, tu lavas-me os pés a mim?
7  Respondeu Jesus, e disse-lhe: O que eu faço näo o sabes tu agora, mas tu o saberás depois.
8  Disse-lhe Pedro: Nunca me lavarás os pés. Respondeu-lhe Jesus: Se eu te näo lavar, näo tens parte comigo.
9  Disse-lhe Simäo Pedro: Senhor, näo só os meus pés, mas também as mäos e a cabeça.
10  Disse-lhe Jesus: Aquele que está lavado näo necessita de lavar senäo os pés, pois no mais todo está limpo. Ora vós estais limpos, mas näo todos.
11  Porque bem sabia ele quem o havia de trair; por isso disse: Nem todos estais limpos.
12  Depois que lhes lavou os pés, e tomou as suas vestes, e se assentou outra vez à mesa, disse-lhes: Entendeis o que vos tenho feito?
13  Vós me chamais Mestre e Senhor, e dizeis bem, porque eu o sou.
14  Ora, se eu, Senhor e Mestre, vos lavei os pés, vós deveis também lavar os pés uns aos outros.
15  Porque eu vos dei o exemplo, para que, como eu vos fiz, façais vós também.
16  Na verdade, na verdade vos digo que näo é o servo maior do que o seu senhor, nem o enviado maior do que aquele que o enviou.
17  Se sabeis estas coisas, bem-aventurados sois se as fizerdes.
18  Näo falo de todos vós; eu bem sei os que tenho escolhido; mas para que se cumpra a Escritura: O que come o päo comigo, levantou contra mim o seu calcanhar.
19  Desde agora vo-lo digo, antes que aconteça, para que, quando acontecer, acrediteis que eu sou.
20  Na verdade, na verdade vos digo: Se alguém receber o que eu enviar, me recebe a mim, e quem me recebe a mim, recebe aquele que me enviou.
21  Tendo Jesus dito isto, turbou-se em espírito, e afirmou, dizendo: Na verdade, na verdade vos digo que um de vós me há de trair.
22  Entäo os discípulos olhavam uns para os outros, duvidando de quem ele falava.
23  Ora, um de seus discípulos, aquele a quem Jesus amava, estava reclinado no seio de Jesus.
24  Entäo Simäo Pedro fez sinal a este, para que perguntasse quem era aquele de quem ele falava.
25  E, inclinando-se ele sobre o peito de Jesus, disse-lhe: Senhor, quem é?
26  Jesus respondeu: É aquele a quem eu der o bocado molhado. E, molhando o bocado, o deu a Judas Iscariotes, filho de Simäo.
27  E, após o bocado, entrou nele Satanás. Disse, pois, Jesus: O que fazes, faze-o depressa.
28  E nenhum dos que estavam assentados à mesa compreendeu a que propósito lhe dissera isto.
29  Porque, como Judas tinha a bolsa, pensavam alguns que Jesus lhe tinha dito: Compra o que nos é necessário para a festa; ou que desse alguma coisa aos pobres.
30  E, tendo Judas tomado o bocado, saiu logo. E era já noite.
31  Tendo ele, pois, saído, disse Jesus: Agora é glorificado o Filho do homem, e Deus é glorificado nele.
32  Se Deus é glorificado nele, também Deus o glorificará em si mesmo, e logo o há de glorificar.
33  Filhinhos, ainda por um pouco estou convosco. Vós me buscareis, mas, como tenho dito aos judeus: Para onde eu vou näo podeis vós ir; eu vo-lo digo também agora.
34  Um novo mandamento vos dou: Que vos ameis uns aos outros; como eu vos amei a vós, que também vós uns aos outros vos ameis.
35  Nisto todos conheceräo que sois meus discípulos, se vos amardes uns aos outros.
36  Disse-lhe Simäo Pedro: Senhor, para onde vais? Jesus lhe respondeu: Para onde eu vou näo podes agora seguir-me, mas depois me seguirás.
37  Disse-lhe Pedro: Por que näo posso seguir-te agora? Por ti darei a minha vida.
38  Respondeu-lhe Jesus: Tu darás a tua vida por mim? Na verdade, na verdade te digo que näo cantará o galo enquanto näo me tiveres negado três vezes.

Capitulo 14

1  Näo se turbe o vosso coraçäo; credes em Deus, crede também em mim.
2  Na casa de meu Pai há muitas moradas; se näo fosse assim, eu vo-lo teria dito. Vou preparar-vos lugar.
3  E quando eu for, e vos preparar lugar, virei outra vez, e vos levarei para mim mesmo, para que onde eu estiver estejais vós também.
4  Mesmo vós sabeis para onde vou, e conheceis o caminho.
5  Disse-lhe Tomé: Senhor, nós näo sabemos para onde vais; e como podemos saber o caminho?
6  Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senäo por mim.
7  Se vós me conhecêsseis a mim, também conheceríeis a meu Pai; e já desde agora o conheceis, e o tendes visto.
8  Disse-lhe Filipe: Senhor, mostra-nos o Pai, o que nos basta.
9  Disse-lhe Jesus: Estou há tanto tempo convosco, e näo me tendes conhecido, Filipe? Quem me vê a mim vê o Pai; e como dizes tu: Mostra-nos o Pai?
10  Näo crês tu que eu estou no Pai, e que o Pai está em mim? As palavras que eu vos digo näo as digo de mim mesmo, mas o Pai, que está em mim, é quem faz as obras.
11  Crede-me que estou no Pai, e o Pai em mim; crede-me, ao menos, por causa das mesmas obras.
12  Na verdade, na verdade vos digo que aquele que crê em mim também fará as obras que eu faço, e as fará maiores do que estas, porque eu vou para meu Pai.
13  E tudo quanto pedirdes em meu nome eu o farei, para que o Pai seja glorificado no Filho.
14  Se pedirdes alguma coisa em meu nome, eu o farei.
15  Se me amais, guardai os meus mandamentos.
16  E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre;
17  O Espírito de verdade, que o mundo näo pode receber, porque näo o vê nem o conhece; mas vós o conheceis, porque habita convosco, e estará em vós.
18  Näo vos deixarei órfäos; voltarei para vós.
19  Ainda um pouco, e o mundo näo me verá mais, mas vós me vereis; porque eu vivo, e vós vivereis.
20  Naquele dia conhecereis que estou em meu Pai, e vós em mim, e eu em vós.
21  Aquele que tem os meus mandamentos e os guarda esse é o que me ama; e aquele que me ama será amado de meu Pai, e eu o amarei, e me manifestarei a ele.
22  Disse-lhe Judas (näo o Iscariotes): Senhor, de onde vem que te hás de manifestar a nós, e näo ao mundo?
23  Jesus respondeu, e disse-lhe: Se alguém me ama, guardará a minha palavra, e meu Pai o amará, e viremos para ele, e faremos nele morada.
24  Quem näo me ama näo guarda as minhas palavras; ora, a palavra que ouvistes näo é minha, mas do Pai que me enviou.
25  Tenho-vos dito isto, estando convosco.
26  Mas aquele Consolador, o Espírito Santo, que o Pai enviará em meu nome, esse vos ensinará todas as coisas, e vos fará lembrar de tudo quanto vos tenho dito.
27  Deixo-vos a paz, a minha paz vos dou; näo vo-la dou como o mundo a dá. Näo se turbe o vosso coraçäo, nem se atemorize.
28  Ouvistes que eu vos disse: Vou, e venho para vós. Se me amásseis, certamente exultaríeis porque eu disse: Vou para o Pai; porque meu Pai é maior do que eu.
29  Eu vo-lo disse agora antes que aconteça, para que, quando acontecer, vós acrediteis.
30  Já näo falarei muito convosco, porque se aproxima o príncipe deste mundo, e nada tem em mim;
31  Mas é para que o mundo saiba que eu amo o Pai, e que faço como o Pai me mandou. Levantai-vos, vamo-nos daqui.

Capitulo 15

1  Eu sou a videira verdadeira, e meu Pai é o lavrador.
2  Toda a vara em mim, que näo dá fruto, a tira; e limpa toda aquela que dá fruto, para que dê mais fruto.
3  Vós já estais limpos, pela palavra que vos tenho falado.
4  Estai em mim, e eu em vós; como a vara de si mesma näo pode dar fruto, se näo estiver na videira, assim também vós, se näo estiverdes em mim.
5  Eu sou a videira, vós as varas; quem está em mim, e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer.
6  Se alguém näo estiver em mim, será lançado fora, como a vara, e secará; e os colhem e lançam no fogo, e ardem.
7  Se vós estiverdes em mim, e as minhas palavras estiverem em vós, pedireis tudo o que quiserdes, e vos será feito.
8  Nisto é glorificado meu Pai, que deis muito fruto; e assim sereis meus discípulos.
9  Como o Pai me amou, também eu vos amei a vós; permanecei no meu amor.
10  Se guardardes os meus mandamentos, permanecereis no meu amor; do mesmo modo que eu tenho guardado os mandamentos de meu Pai, e permaneço no seu amor.
11  Tenho-vos dito isto, para que o meu gozo permaneça em vós, e o vosso gozo seja completo.
12  O meu mandamento é este: Que vos ameis uns aos outros, assim como eu vos amei.
13  Ninguém tem maior amor do que este, de dar alguém a sua vida pelos seus amigos.
14  Vós sereis meus amigos, se fizerdes o que eu vos mando.
15  Já vos näo chamarei servos, porque o servo näo sabe o que faz o seu senhor; mas tenho-vos chamado amigos, porque tudo quanto ouvi de meu Pai vos tenho feito conhecer.
16  Näo me escolhestes vós a mim, mas eu vos escolhi a vós, e vos nomeei, para que vades e deis fruto, e o vosso fruto permaneça; a fim de que tudo quanto em meu nome pedirdes ao Pai ele vo-lo conceda.
17  Isto vos mando: Que vos ameis uns aos outros.
18  Se o mundo vos odeia, sabei que, primeiro do que a vós, me odiou a mim.
19  Se vós fósseis do mundo, o mundo amaria o que era seu, mas porque näo sois do mundo, antes eu vos escolhi do mundo, por isso é que o mundo vos odeia.
20  Lembrai-vos da palavra que vos disse: Näo é o servo maior do que o seu senhor. Se a mim me perseguiram, também vos perseguiräo a vós; se guardaram a minha palavra, também guardaräo a vossa.
21  Mas tudo isto vos faräo por causa do meu nome, porque näo conhecem aquele que me enviou.
22  Se eu näo viera, nem lhes houvera falado, näo teriam pecado, mas agora näo têm desculpa do seu pecado.
23  Aquele que me odeia, odeia também a meu Pai.
24  Se eu entre eles näo fizesse tais obras, quais nenhum outro tem feito, näo teriam pecado; mas agora, viram-nas e me odiaram a mim e a meu Pai.
25  Mas é para que se cumpra a palavra que está escrita na sua lei: Odiaram-me sem causa.
26  Mas, quando vier o Consolador, que eu da parte do Pai vos hei de enviar, aquele Espírito de verdade, que procede do Pai, ele testificará de mim.
27  E vós também testificareis, pois estivestes comigo desde o princípio.

Capitulo 16
1  Tenho-vos dito estas coisas para que vos näo escandalizeis.
2  Expulsar-vos-äo das sinagogas; vem mesmo a hora em que qualquer que vos matar cuidará fazer um serviço a Deus.
3  E isto vos faräo, porque näo conheceram ao Pai nem a mim.
4  Mas tenho-vos dito isto, a fim de que, quando chegar aquela hora, vos lembreis de que já vo-lo tinha dito. E eu näo vos disse isto desde o princípio, porque estava convosco.
5  E agora vou para aquele que me enviou; e nenhum de vós me pergunta: Para onde vais?
6  Antes, porque isto vos tenho dito, o vosso coraçäo se encheu de tristeza.
7  Todavia digo-vos a verdade, que vos convém que eu vá; porque, se eu näo for, o Consolador näo virá a vós; mas, quando eu for, vo-lo enviarei.
8  E, quando ele vier, convencerá o mundo do pecado, e da justiça e do juízo.
9  Do pecado, porque näo crêem em mim;
10  Da justiça, porque vou para meu Pai, e näo me vereis mais;
11  E do juízo, porque já o príncipe deste mundo está julgado.
12  Ainda tenho muito que vos dizer, mas vós näo o podeis suportar agora.
13  Mas, quando vier aquele Espírito de verdade, ele vos guiará em toda a verdade; porque näo falará de si mesmo, mas dirá tudo o que tiver ouvido, e vos anunciará o que há de vir.
14  Ele me glorificará, porque há de receber do que é meu, e vo-lo há de anunciar.
15  Tudo quanto o Pai tem é meu; por isso vos disse que há de receber do que é meu e vo-lo há de anunciar.
16  Um pouco, e näo me vereis; e outra vez um pouco, e ver-me-eis; porquanto vou para o Pai.
17  Entäo alguns dos seus discípulos disseram uns aos outros: Que é isto que nos diz? Um pouco, e näo me vereis; e outra vez um pouco, e ver-me-eis; e: Porquanto vou para o Pai?
18  Diziam, pois: Que quer dizer isto: Um pouco? Näo sabemos o que diz.
19  Conheceu, pois, Jesus que o queriam interrogar, e disse-lhes: Indagais entre vós acerca disto que disse: Um pouco, e näo me vereis, e outra vez um pouco, e ver-me-eis?
20  Na verdade, na verdade vos digo que vós chorareis e vos lamentareis, e o mundo se alegrará, e vós estareis tristes, mas a vossa tristeza se converterá em alegria.
21  A mulher, quando está para dar à luz, sente tristeza, porque é chegada a sua hora; mas, depois de ter dado à luz a criança, já näo se lembra da afliçäo, pelo prazer de haver nascido um homem no mundo.
22  Assim também vós agora, na verdade, tendes tristeza; mas outra vez vos verei, e o vosso coraçäo se alegrará, e a vossa alegria ninguém vo-la tirará.
23  E naquele dia nada me perguntareis. Na verdade, na verdade vos digo que tudo quanto pedirdes a meu Pai, em meu nome, ele vo-lo há de dar.
24  Até agora nada pedistes em meu nome; pedi, e recebereis, para que o vosso gozo se cumpra.
25  Disse-vos isto por parábolas; chega, porém, a hora em que näo vos falarei mais por parábolas, mas abertamente vos falarei acerca do Pai.
26  Naquele dia pedireis em meu nome, e näo vos digo que eu rogarei por vós ao Pai;
27  Pois o mesmo Pai vos ama, visto como vós me amastes, e crestes que saí de Deus.
28  Saí do Pai, e vim ao mundo; outra vez deixo o mundo, e vou para o Pai.
29  Disseram-lhe os seus discípulos: Eis que agora falas abertamente, e näo dizes parábola alguma.
30  Agora conhecemos que sabes tudo, e näo precisas de que alguém te interrogue. Por isso cremos que saíste de Deus.
31  Respondeu-lhes Jesus: Credes agora?
32  Eis que chega a hora, e já se aproxima, em que vós sereis dispersos cada um para sua parte, e me deixareis só; mas näo estou só, porque o Pai está comigo.
33  Tenho-vos dito isto, para que em mim tenhais paz; no mundo tereis afliçöes, mas tende bom ánimo, eu venci o mundo.

Capitulo 17
1  Jesus falou assim e, levantando seus olhos ao céu, disse: Pai, é chegada a hora; glorifica a teu Filho, para que também o teu Filho te glorifique a ti;
2  Assim como lhe deste poder sobre toda a carne, para que dê a vida eterna a todos quantos lhe deste.
3  E a vida eterna é esta: que te conheçam, a ti só, por único Deus verdadeiro, e a Jesus Cristo, a quem enviaste.
4  Eu glorifiquei-te na terra, tendo consumado a obra que me deste a fazer.
5  E agora glorifica-me tu, ó Pai, junto de ti mesmo, com aquela glória que tinha contigo antes que o mundo existisse.
6  Manifestei o teu nome aos homens que do mundo me deste; eram teus, e tu mos deste, e guardaram a tua palavra.
7  Agora já têm conhecido que tudo quanto me deste provém de ti;
8  Porque lhes dei as palavras que tu me deste; e eles as receberam, e têm verdadeiramente conhecido que saí de ti, e creram que me enviaste.
9  Eu rogo por eles; näo rogo pelo mundo, mas por aqueles que me deste, porque säo teus.
10  E todas as minhas coisas säo tuas, e as tuas coisas säo minhas; e nisso sou glorificado.
11  E eu já näo estou mais no mundo, mas eles estäo no mundo, e eu vou para ti. Pai santo, guarda em teu nome aqueles que me deste, para que sejam um, assim como nós.
12  Estando eu com eles no mundo, guardava-os em teu nome. Tenho guardado aqueles que tu me deste, e nenhum deles se perdeu, senäo o filho da perdiçäo, para que a Escritura se cumprisse.
13  Mas agora vou para ti, e digo isto no mundo, para que tenham a minha alegria completa em si mesmos.
14  Dei-lhes a tua palavra, e o mundo os odiou, porque näo säo do mundo, assim como eu näo sou do mundo.
15  Näo peço que os tires do mundo, mas que os livres do mal.
16  Näo säo do mundo, como eu do mundo näo sou.
17  Santifica-os na tua verdade; a tua palavra é a verdade.
18  Assim como tu me enviaste ao mundo, também eu os enviei ao mundo.
19  E por eles me santifico a mim mesmo, para que também eles sejam santificados na verdade.
20  E näo rogo somente por estes, mas também por aqueles que pela sua palavra häo de crer em mim;
21  Para que todos sejam um, como tu, ó Pai, o és em mim, e eu em ti; que também eles sejam um em nós, para que o mundo creia que tu me enviaste.
22  E eu dei-lhes a glória que a mim me deste, para que sejam um, como nós somos um.
23  Eu neles, e tu em mim, para que eles sejam perfeitos em unidade, e para que o mundo conheça que tu me enviaste a mim, e que os tens amado a eles como me tens amado a mim.
24  Pai, aqueles que me deste quero que, onde eu estiver, também eles estejam comigo, para que vejam a minha glória que me deste; porque tu me amaste antes da fundaçäo do mundo.
25  Pai justo, o mundo näo te conheceu; mas eu te conheci, e estes conheceram que tu me enviaste a mim.
26  E eu lhes fiz conhecer o teu nome, e lho farei conhecer mais, para que o amor com que me tens amado esteja neles, e eu neles esteja.

Capitulo 18
1  Tendo Jesus dito isto, saiu com os seus discípulos para além do ribeiro de Cedrom, onde havia um horto, no qual ele entrou e seus discípulos.
2  E Judas, que o traía, também conhecia aquele lugar, porque Jesus muitas vezes se ajuntava ali com os seus discípulos.
3  Tendo, pois, Judas recebido a coorte e oficiais dos principais sacerdotes e fariseus, veio para ali com lanternas, e archotes e armas.
4  Sabendo, pois, Jesus todas as coisas que sobre ele haviam de vir, adiantou-se, e disse-lhes: A quem buscais?
5  Responderam-lhe: A Jesus Nazareno. Disse-lhes Jesus: Sou eu. E Judas, que o traía, estava com eles.
6  Quando, pois, lhes disse: Sou eu, recuaram, e caíram por terra.
7  Tornou-lhes, pois, a perguntar: A quem buscais? E eles disseram: A Jesus Nazareno.
8  Jesus respondeu: Já vos disse que sou eu; se, pois, me buscais a mim, deixai ir estes;
9  Para que se cumprisse a palavra que tinha dito: Dos que me deste nenhum deles perdi.
10  Entäo Simäo Pedro, que tinha espada, desembainhou-a, e feriu o servo do sumo sacerdote, cortando-lhe a orelha direita. E o nome do servo era Malco.
11  Mas Jesus disse a Pedro: Pöe a tua espada na bainha; näo beberei eu o cálice que o Pai me deu?
12  Entäo a coorte, e o tribuno, e os servos dos judeus prenderam a Jesus e o maniataram.
13  E conduziram-no primeiramente a Anás, por ser sogro de Caifás, que era o sumo sacerdote daquele ano.
14  Ora, Caifás era quem tinha aconselhado aos judeus que convinha que um homem morresse pelo povo.
15  E Simäo Pedro e outro discípulo seguiam a Jesus. E este discípulo era conhecido do sumo sacerdote, e entrou com Jesus na sala do sumo sacerdote.
16  E Pedro estava da parte de fora, à porta. Saiu entäo o outro discípulo que era conhecido do sumo sacerdote, e falou à porteira, levando Pedro para dentro.
17  Entäo a porteira disse a Pedro: Näo és tu também dos discípulos deste homem? Disse ele: Näo sou.
18  Ora, estavam ali os servos e os servidores, que tinham feito brasas, e se aquentavam, porque fazia frio; e com eles estava Pedro, aquentando-se também.
19  E o sumo sacerdote interrogou Jesus acerca dos seus discípulos e da sua doutrina.
20  Jesus lhe respondeu: Eu falei abertamente ao mundo; eu sempre ensinei na sinagoga e no templo, onde os judeus sempre se ajuntam, e nada disse em oculto.
21  Para que me perguntas a mim? Pergunta aos que ouviram o que é que lhes ensinei; eis que eles sabem o que eu lhes tenho dito.
22  E, tendo dito isto, um dos servidores que ali estavam, deu uma bofetada em Jesus, dizendo: Assim respondes ao sumo sacerdote?
23  Respondeu-lhe Jesus: Se falei mal, dá testemunho do mal; e, se bem, por que me feres?
24  E Anás mandou-o, maniatado, ao sumo sacerdote Caifás.
25  E Simäo Pedro estava ali, e aquentava-se. Disseram-lhe, pois: Näo és também tu um dos seus discípulos? Ele negou, e disse: Näo sou.
26  E um dos servos do sumo sacerdote, parente daquele a quem Pedro cortara a orelha, disse: Näo te vi eu no horto com ele?
27  E Pedro negou outra vez, e logo o galo cantou.
28  Depois levaram Jesus da casa de Caifás para a audiência. E era pela manhä cedo. E näo entraram na audiência, para näo se contaminarem, mas poderem comer a páscoa.
29  Entäo Pilatos saiu fora e disse-lhes: Que acusaçäo trazeis contra este homem?
30  Responderam, e disseram-lhe: Se este näo fosse malfeitor, näo to entregaríamos.
31  Disse-lhes, pois, Pilatos: Levai-o vós, e julgai-o segundo a vossa lei. Disseram-lhe entäo os judeus: A nós näo nos é lícito matar pessoa alguma.
32  (Para que se cumprisse a palavra que Jesus tinha dito, significando de que morte havia de morrer).
33  Tornou, pois, a entrar Pilatos na audiência, e chamou a Jesus, e disse-lhe: Tu és o Rei dos Judeus?
34  Respondeu-lhe Jesus: Tu dizes isso de ti mesmo, ou disseram-to outros de mim?
35  Pilatos respondeu: Porventura sou eu judeu? A tua naçäo e os principais dos sacerdotes entregaram-te a mim. Que fizeste?
36  Respondeu Jesus: O meu reino näo é deste mundo; se o meu reino fosse deste mundo, pelejariam os meus servos, para que eu näo fosse entregue aos judeus; mas agora o meu reino näo é daqui.
37  Disse-lhe, pois, Pilatos: Logo tu és rei? Jesus respondeu: Tu dizes que eu sou rei. Eu para isso nasci, e para isso vim ao mundo, a fim de dar testemunho da verdade. Todo aquele que é da verdade ouve a minha voz.
38  Disse-lhe Pilatos: Que é a verdade? E, dizendo isto, tornou a ir ter com os judeus, e disse-lhes: Näo acho nele crime algum.
39  Mas vós tendes por costume que eu vos solte alguém pela páscoa. Quereis, pois, que vos solte o Rei dos Judeus?
40  Entäo todos tornaram a clamar, dizendo: Este näo, mas Barrabás. E Barrabás era um salteador.

Capitulo 19

1  Pilatos, pois, tomou entäo a Jesus, e o açoitou.
2  E os soldados, tecendo uma coroa de espinhos, lha puseram sobre a cabeça, e lhe vestiram roupa de púrpura.
3  E diziam: Salve, Rei dos Judeus. E davam-lhe bofetadas.
4  Entäo Pilatos saiu outra vez fora, e disse-lhes: Eis aqui vo-lo trago fora, para que saibais que näo acho nele crime algum.
5  Saiu, pois, Jesus fora, levando a coroa de espinhos e roupa de púrpura. E disse-lhes Pilatos: Eis aqui o homem.
6  Vendo-o, pois, os principais dos sacerdotes e os servos, clamaram, dizendo: Crucifica-o, crucifica-o. Disse-lhes Pilatos: Tomai-o vós, e crucificai-o; porque eu nenhum crime acho nele.
7  Responderam-lhe os judeus: Nós temos uma lei e, segundo a nossa lei, deve morrer, porque se fez Filho de Deus.
8  E Pilatos, quando ouviu esta palavra, mais atemorizado ficou.
9  E entrou outra vez na audiência, e disse a Jesus: De onde és tu? Mas Jesus näo lhe deu resposta.
10  Disse-lhe, pois, Pilatos: Näo me falas a mim? Näo sabes tu que tenho poder para te crucificar e tenho poder para te soltar?
11  Respondeu Jesus: Nenhum poder terias contra mim, se de cima näo te fosse dado; mas aquele que me entregou a ti maior pecado tem.
12  Desde entäo Pilatos procurava soltá-lo; mas os judeus clamavam, dizendo: Se soltas este, näo és amigo de César; qualquer que se faz rei é contra César.
13  Ouvindo, pois, Pilatos este dito, levou Jesus para fora, e assentou-se no tribunal, no lugar chamado Litóstrotos, e em hebraico Gabatá.
14  E era a preparaçäo da páscoa, e quase à hora sexta; e disse aos judeus: Eis aqui o vosso Rei.
15  Mas eles bradaram: Tira, tira, crucifica-o. Disse-lhes Pilatos: Hei de crucificar o vosso Rei? Responderam os principais dos sacerdotes: Näo temos rei, senäo César.
16  Entäo, conseqüentemente entregou-lho, para que fosse crucificado. E tomaram a Jesus, e o levaram.
17  E, levando ele às costas a sua cruz, saiu para o lugar chamado Caveira, que em hebraico se chama Gólgota,
18  Onde o crucificaram, e com ele outros dois, um de cada lado, e Jesus no meio.
19  E Pilatos escreveu também um título, e pó-lo em cima da cruz; e nele estava escrito: JESUS NAZARENO, O REI DOS JUDEUS.
20  E muitos dos judeus leram este título; porque o lugar onde Jesus estava crucificado era próximo da cidade; e estava escrito em hebraico, grego e latim.
21  Diziam, pois, os principais sacerdotes dos judeus a Pilatos: Näo escrevas, O Rei dos Judeus, mas que ele disse: Sou o Rei dos Judeus.
22  Respondeu Pilatos: O que escrevi, escrevi.
23  Tendo, pois, os soldados crucificado a Jesus, tomaram as suas vestes, e fizeram quatro partes, para cada soldado uma parte; e também a túnica. A túnica, porém, tecida toda de alto a baixo, näo tinha costura.
24  Disseram, pois, uns aos outros: Näo a rasguemos, mas lancemos sortes sobre ela, para ver de quem será. Para que se cumprisse a Escritura que diz: Repartiram entre si as minhas vestes, E sobre a minha vestidura lançaram sortes.
25  E junto à cruz de Jesus estava sua mäe, e a irmä de sua mäe, Maria mulher de Clopas, e Maria Madalena.
26  Ora Jesus, vendo ali sua mäe, e que o discípulo a quem ele amava estava presente, disse a sua mäe: Mulher, eis aí o teu filho.
27  Depois disse ao discípulo: Eis aí tua mäe. E desde aquela hora o discípulo a recebeu em sua casa.
28  Depois, sabendo Jesus que já todas as coisas estavam terminadas, para que a Escritura se cumprisse, disse: Tenho sede.
29  Estava, pois, ali um vaso cheio de vinagre. E encheram de vinagre uma esponja, e, pondo-a num hissope, lha chegaram à boca.
30  E, quando Jesus tomou o vinagre, disse: Está consumado. E, inclinando a cabeça, entregou o espírito.
31  Os judeus, pois, para que no sábado näo ficassem os corpos na cruz, visto como era a preparaçäo (pois era grande o dia de sábado), rogaram a Pilatos que se lhes quebrassem as pernas, e fossem tirados.
32  Foram, pois, os soldados, e, na verdade, quebraram as pernas ao primeiro, e ao outro que como ele fora crucificado;
33  Mas, vindo a Jesus, e vendo-o já morto, näo lhe quebraram as pernas.
34  Contudo um dos soldados lhe furou o lado com uma lança, e logo saiu sangue e água.
35  E aquele que o viu testificou, e o seu testemunho é verdadeiro; e sabe que é verdade o que diz, para que também vós o creiais.
36  Porque isto aconteceu para que se cumprisse a Escritura, que diz: Nenhum dos seus ossos será quebrado.
37  E outra vez diz a Escritura: Veräo aquele que traspassaram.
38  Depois disto, José de Arimatéia (o que era discípulo de Jesus, mas oculto, por medo dos judeus) rogou a Pilatos que lhe permitisse tirar o corpo de Jesus. E Pilatos lho permitiu. Entäo foi e tirou o corpo de Jesus.
39  E foi também Nicodemos (aquele que anteriormente se dirigira de noite a Jesus), levando quase cem arráteis de um composto de mirra e aloés.
40  Tomaram, pois, o corpo de Jesus e o envolveram em lençóis com as especiarias, como os judeus costumam fazer, na preparaçäo para o sepulcro.
41  E havia um horto naquele lugar onde fora crucificado, e no horto um sepulcro novo, em que ainda ninguém havia sido posto.
42  Ali, pois (por causa da preparaçäo dos judeus, e por estar perto aquele sepulcro), puseram a Jesus.


Capitulo 20
1  E no primeiro dia da semana, Maria Madalena foi ao sepulcro de madrugada, sendo ainda escuro, e viu a pedra tirada do sepulcro.
2  Correu, pois, e foi a Simäo Pedro, e ao outro discípulo, a quem Jesus amava, e disse-lhes: Levaram o Senhor do sepulcro, e näo sabemos onde o puseram.
3  Entäo Pedro saiu com o outro discípulo, e foram ao sepulcro.
4  E os dois corriam juntos, mas o outro discípulo correu mais apressadamente do que Pedro, e chegou primeiro ao sepulcro.
5  E, abaixando-se, viu no chäo os lençóis; todavia näo entrou.
6  Chegou, pois, Simäo Pedro, que o seguia, e entrou no sepulcro, e viu no chäo os lençóis,
7  E que o lenço, que tinha estado sobre a sua cabeça, näo estava com os lençóis, mas enrolado num lugar à parte.
8  Entäo entrou também o outro discípulo, que chegara primeiro ao sepulcro, e viu, e creu.
9  Porque ainda näo sabiam a Escritura, que era necessário que ressuscitasse dentre os mortos.
10  Tornaram, pois, os discípulos para casa.
11  E Maria estava chorando fora, junto ao sepulcro. Estando ela, pois, chorando, abaixou-se para o sepulcro.
12  E viu dois anjos vestidos de branco, assentados onde jazera o corpo de Jesus, um à cabeceira e outro aos pés.
13  E disseram-lhe eles: Mulher, por que choras? Ela lhes disse: Porque levaram o meu Senhor, e näo sei onde o puseram.
14  E, tendo dito isto, voltou-se para trás, e viu Jesus em pé, mas näo sabia que era Jesus.
15  Disse-lhe Jesus: Mulher, por que choras? Quem buscas? Ela, cuidando que era o horteläo, disse-lhe: Senhor, se tu o levaste, dize-me onde o puseste, e eu o levarei.
16  Disse-lhe Jesus: Maria! Ela, voltando-se, disse-lhe: Raboni (que quer dizer, Mestre).
17  Disse-lhe Jesus: Näo me detenhas, porque ainda näo subi para meu Pai, mas vai para meus irmäos, e dize-lhes que eu subo para meu Pai e vosso Pai, meu Deus e vosso Deus.
18  Maria Madalena foi e anunciou aos discípulos que vira o Senhor, e que ele lhe dissera isto.
19  Chegada, pois, a tarde daquele dia, o primeiro da semana, e cerradas as portas onde os discípulos, com medo dos judeus, se tinham ajuntado, chegou Jesus, e pós-se no meio, e disse-lhes: Paz seja convosco.
20  E, dizendo isto, mostrou-lhes as suas mäos e o lado. De sorte que os discípulos se alegraram, vendo o Senhor.
21  Disse-lhes, pois, Jesus outra vez: Paz seja convosco; assim como o Pai me enviou, também eu vos envio a vós.
22  E, havendo dito isto, assoprou sobre eles e disse-lhes: Recebei o Espírito Santo.
23  Åqueles a quem perdoardes os pecados lhes säo perdoados; e àqueles a quem os retiverdes lhes säo retidos.
24  Ora, Tomé, um dos doze, chamado Dídimo, näo estava com eles quando veio Jesus.
25  Disseram-lhe, pois, os outros discípulos: Vimos o Senhor. Mas ele disse-lhes: Se eu näo vir o sinal dos cravos em suas mäos, e näo puser o dedo no lugar dos cravos, e näo puser a minha mäo no seu lado, de maneira nenhuma o crerei.
26  E oito dias depois estavam outra vez os seus discípulos dentro, e com eles Tomé. Chegou Jesus, estando as portas fechadas, e apresentou-se no meio, e disse: Paz seja convosco.
27  Depois disse a Tomé: Pöe aqui o teu dedo, e vê as minhas mäos; e chega a tua mäo, e pöe-na no meu lado; e näo sejas incrédulo, mas crente.
28  E Tomé respondeu, e disse-lhe: Senhor meu, e Deus meu!
29  Disse-lhe Jesus: Porque me viste, Tomé, creste; bem-aventurados os que näo viram e creram.
30  Jesus, pois, operou também em presença de seus discípulos muitos outros sinais, que näo estäo escritos neste livro.
31  Estes, porém, foram escritos para que creiais que Jesus é o Cristo, o Filho de Deus, e para que, crendo, tenhais vida em seu nome.

Capitulo 21
1  Depois disto manifestou-se Jesus outra vez aos discípulos junto do mar de Tiberíades; e manifestou-se assim:
2  Estavam juntos Simäo Pedro, e Tomé, chamado Dídimo, e Natanael, que era de Caná da Galiléia, os filhos de Zebedeu, e outros dois dos seus discípulos.
3  Disse-lhes Simäo Pedro: Vou pescar. Dizem-lhe eles: Também nós vamos contigo. Foram, e subiram logo para o barco, e naquela noite nada apanharam.
4  E, sendo já manhä, Jesus se apresentou na praia, mas os discípulos näo conheceram que era Jesus.
5  Disse-lhes, pois, Jesus: Filhos, tendes alguma coisa de comer? Responderam-lhe: Näo.
6  E ele lhes disse: Lançai a rede para o lado direito do barco, e achareis. Lançaram-na, pois, e já näo a podiam tirar, pela multidäo dos peixes.
7  Entäo aquele discípulo, a quem Jesus amava, disse a Pedro: É o Senhor. E, quando Simäo Pedro ouviu que era o Senhor, cingiu-se com a túnica (porque estava nu) e lançou-se ao mar.
8  E os outros discípulos foram com o barco (porque näo estavam distantes da terra senäo quase duzentos cóvados), levando a rede cheia de peixes.
9  Logo que desceram para terra, viram ali brasas, e um peixe posto em cima, e päo.
10  Disse-lhes Jesus: Trazei dos peixes que agora apanhastes.
11  Simäo Pedro subiu e puxou a rede para terra, cheia de cento e cinqüenta e três grandes peixes e, sendo tantos, näo se rompeu a rede.
12  Disse-lhes Jesus: Vinde, comei. E nenhum dos discípulos ousava perguntar-lhe: Quem és tu? sabendo que era o Senhor.
13  Chegou, pois, Jesus, e tomou o päo, e deu-lhes e, semelhantemente o peixe.
14  E já era a terceira vez que Jesus se manifestava aos seus discípulos, depois de ter ressuscitado dentre os mortos.
15  E, depois de terem jantado, disse Jesus a Simäo Pedro: Simäo, filho de Jonas, amas-me mais do que estes? E ele respondeu: Sim, Senhor, tu sabes que te amo. Disse-lhe: Apascenta os meus cordeiros.
16  Tornou a dizer-lhe segunda vez: Simäo, filho de Jonas, amas-me? Disse-lhe: Sim, Senhor, tu sabes que te amo. Disse-lhe: Apascenta as minhas ovelhas.
17  Disse-lhe terceira vez: Simäo, filho de Jonas, amas-me? Simäo entristeceu-se por lhe ter dito terceira vez: Amas-me? E disse-lhe: Senhor, tu sabes tudo; tu sabes que eu te amo. Jesus disse-lhe: Apascenta as minhas ovelhas.
18  Na verdade, na verdade te digo que, quando eras mais moço, te cingias a ti mesmo, e andavas por onde querias; mas, quando já fores velho, estenderás as tuas mäos, e outro te cingirá, e te levará para onde tu näo queiras.
19  E disse isto, significando com que morte havia ele de glorificar a Deus. E, dito isto, disse-lhe: Segue-me.
20  E Pedro, voltando-se, viu que o seguia aquele discípulo a quem Jesus amava, e que na ceia se recostara também sobre o seu peito, e que dissera: Senhor, quem é que te há de trair?
21  Vendo Pedro a este, disse a Jesus: Senhor, e deste que será?
22  Disse-lhe Jesus: Se eu quero que ele fique até que eu venha, que te importa a ti? Segue-me tu.
23  Divulgou-se, pois, entre os irmäos este dito, que aquele discípulo näo havia de morrer. Jesus, porém, näo lhe disse que näo morreria, mas: Se eu quero que ele fique até que eu venha, que te importa a ti?
24  Este é o discípulo que testifica destas coisas e as escreveu; e sabemos que o seu testemunho é verdadeiro.
25  Há, porém, ainda muitas outras coisas que Jesus fez; e se cada uma das quais fosse escrita, cuido que nem ainda o mundo todo poderia conter os livros que se escrevessem. Amém.


Mateus 3:2 - Arrependei-vos, porque é chegado o reino dos céus.`;
for (let i = 0; i < 1; i++) {
  text += "\nFim \n";
}
enviarScript(text)
.then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
