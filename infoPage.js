function changePage(page) {
    switch(page) {
        case 'plastics':
            window.location = ("infoPlastics.html");
            break;
        case 'bottles':
            window.location = ("infoBottles.html");
            break;
        case 'bags':
            window.location = ("infoBags.html");
            break;
        case 'packaging':
            window.location = ("infoPackaging.html");
            break;
        case 'plasticOther':
            window.location = ("infoPlasticOther.html");
            break;
        case 'metals':
            window.location = ("infoMetals.html");
            break;
        case 'metalId':
            window.location = ("infoMetalId.html");
            break;
        case 'cans':
            window.location = ("infoMetalCans.html");
            break;
        case 'scraps':
            window.location = ("infoMetalScraps.html");
            break;
        case 'radio':
            window.location = ("infoMetalUn.html");
            break;
        case 'papers':
            window.location = ("infoPaper.html");
            break;
        case 'cardboard':
            window.location = ("infoCardboard.html");
            break;
        case 'magazine':
            window.location = ("infoMagazines.html");
            break;
        case 'officepaper':
            window.location = ("infoOfficepaper.html");
            break;
        case 'paperother':
            window.location = ("infoPaperOther.html");
			break;
        case 'other':
            window.location = ("infoOther.html");
            break;
        case 'batteries':
            window.location = ("infoBatteries.html");
            break;
        case 'electronics':
            window.location = ("infoElectronics.html");
            break;
        case 'bulbs':
            window.location = ("infoBulbs.html");
            break;
        case 'misc':
            window.location = ("infoOtherMisc.html");
            break;
        case 'infoPage':
            window.location = ("infoPage.html");
            break;
        case 'rnm':
            window.location = ("RecyclingNearMe2.html");
            break;
        case 'dropFind':
            window.location = ("dropFind.html");
            break;
        case 'dropCreate':
            window.location = ("dropCreate.html");
    }
}

function increaseOpacity(item) {
    document.getElementById(item).style.transition = "opacity 0.3s ease-in";
    document.getElementById(item).style.opacity = 1;
}

function decreaseOpacity(item) {
    document.getElementById(item).style.transition = "opacity 0.3s ease-out";
    document.getElementById(item).style.opacity = 0.5;
}
