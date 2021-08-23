// Eduardo T Santos

const Qtd_Participantes = 100;
const Anos_permitido    = 18;

var Participantes  = ["Alexandre","Eduardo","Henrique","Murilo","Theo","André","Enrico","Henry","Nathan","Thiago","Antônio","Enzo","Ian","Otávio","Thomas","Augusto","Erick","Isaac","Pietro","Vicente","reno","Felipe","João","Rafael","Vinícius","Bruno","Fernando","Kaique","Raul","Vitor","Caio","Francisco","Leonardo","Rian","Yago","Cauã","Frederico","Luan","Ricardo","Ygor","Daniel","uilherme","Lucas","Rodrigo","Yuri","Danilo","Gustavo","Mathias","Samuel","Agatha","Camila","Esther","Isis","Maitê","Natália","Alícia","Carolina","Fernanda","Joana","Malu","Nicole","manda","Catarina","Gabriela","Laís","Maria","Olívia","Ana","Cecília","Gabrielle","Lara","Mariah","Pietra","Antonela","Clara","Giovanna","Larissa","Mariana","Rafaela","Aurora","Clarice","Giulia","Lavínia","Marina","Rebeca","Bárbara","Eduarda","Heloísa","Letícia","Maya","Sara","Beatriz","Elisa","Isabel","Liz","Melissa","Sophie","Bianca","Emanuelly","Isabelly","Lorena","Milena","Stella","runa","Emilly","Isadora","Luana","Mirella","Vitória","Yasmin"];
var Aniversario    = ["13/06/1998","07/06/2001","13/07/1998","06/12/1985","27/01/2000","05/10/1994","12/07/1964","09/02/2001","26/08/1985","26/12/1969","13/03/1988","18/04/1975","12/02/1987","12/05/1984","2/01/1996","13/06/1998","07/06/2001","13/07/1998","06/12/1985","27/01/2000","05/10/1994","12/07/1964","09/02/2001","26/08/1985","26/12/1969","13/03/1988","18/04/1975","12/02/1987","12/5/1984","12/01/1996","01/07/1996","15/07/1995","16/04/1975","03/06/1993","06/04/1995","23/12/1976","06/04/1975","01/12/1971","29/08/1977","08/04/1994","26/07/1984","16/05/1965","05/02/001","08/07/1990","10/04/1989","06/12/1985","27/01/2000","05/10/1994","12/07/1964","09/02/2001","26/08/1985","26/12/1969","13/03/1988","18/04/1975","12/02/1987","12/05/1984","12/01/996","13/06/1998","07/06/2001","13/07/1998","06/12/1985","27/01/2000","05/10/1994","12/07/1964","09/02/2001","26/08/1985","26/12/1969","13/03/1988","18/04/1975","12/02/1987","12/05/984","12/01/1996","01/07/1996","15/07/1995","16/04/1975","03/06/1993","06/04/1995","23/12/1976","06/04/1975","01/12/1971","29/08/1977","08/04/1994","26/07/1984","16/05/1965","05/02/2008","08/07/1990","10/04/1989","12/02/1987","12/05/1984","12/01/1996","13/06/1998","07/06/2001","13/07/1998","06/12/1985","07/06/2001","13/07/1998","06/12/1985","27/01/2000","05/10/1994","12/07/1964","09/2/2001","26/08/1985","26/12/1969","13/03/1988","26/08/1985","26/12/2018","13/03/1988","18/04/1975","12/02/1987","12/05/1984"];

var Evento    = ["Feira 1","Circo 2","Show 3"];
var DtEvento  = ["01/09/2021","20/08/2021","31/12/2021"];

var Participantes_ADC = [];
// Peso da lista de peças que serão adicionadas

var Hoje = (new Date().toJSON().slice(0,10).replace(/-/g,''));

let date1 = new Date(parseFloat(Hoje.substr(0,4)), parseFloat(Hoje.substr(4,2)), parseFloat(Hoje.substr(6,2)), 11, 45, 55) ;

    for(let ev = 0; ev < Evento.length; ev = ev + 1 ) 
        {
           
            let date2 = new Date(parseFloat(DtEvento[ev].substr(6,4)), parseFloat(DtEvento[ev].substr(3,2)), parseFloat(DtEvento[ev].substr(0,2)), 11, 45, 55) ;
            
            if (Number(date2) <= Number(date1))
                {
                    console.log("cadastro Evento " + Evento[ev] + " não será permitido por data " + DtEvento[ev] +  " inválida")
                }
            else 
                {

                    for(let i = 0; i < Participantes.length; i = i + 1 )
                    {
                    
                        if (Participantes_ADC.length < (Qtd_Participantes )) 
                            {

                                if ((parseFloat(Hoje.substr(0,4)) - parseFloat(Aniversario[i].split('/')[2])) > 18) 
                                    {
                                        Participantes_ADC.push(Participantes[i]);
                                    } 
                                else 
                                    {
                                        console.log("cadastro " + Participantes[i] + " não será permitido por idade " + Aniversario[i] +  " menor " + Anos_permitido + " inválida")
                                    }
                            } 
                        else 
                            {
                                console.log("Não é permitido exceder o limite " + Qtd_Participantes +  " !") 
                            }

                    } 

                    // Lista os incluidos
                    for(let i = 0; i < Participantes_ADC.length; i = i + 1 ) 
                    {
                        console.log("Participante: ",Participantes_ADC[i],  " do evento ", Evento[ev] ," Nascimento:", Aniversario[i]);
                    }

                    // Zerando o Array
                    while(Participantes_ADC.length) 
                    {
                        Participantes_ADC.pop();
                    }

                }
        } 
