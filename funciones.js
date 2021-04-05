var signo= prompt('Cual es tu digno')
switch(signo){
    case 'acuario':
        console.log('Los Acuario son tímidos y callados, pero al mismo tiempo, pueden ser excéntricos y enérgicos. Sin embargo, en ambos casos, son pensadores y muy intelectuales, y aman ayudar a otros. Son capaces de ver las dos caras de una situación sin prejuicios, lo cual les permite resolver problemas.')
    break

    case 'piscis':
        console.log('Los Piscis son muy amistosos, así que siempre los encontrarás en compañía de gente diferente. Los Piscis son abnegados, siempre tienen la disposición de ayudar a los demás, sin esperar recibir nada a cambio.')
    break
    case'aries':
    case'Aries':
        console.log('Siendo el primer signo del zodíaco, la presencia de Aries casi siempre marca el inicio de algo turbulento y enérgico. Las personas de éste signo están buscando continuamente dinamismo, velocidad y competencia. Son siempre los primeros en todo – desde el trabajo hasta en los eventos sociales.')
    break

    default:
        console.log('No es un signo zodiacal')
    break


}

