function changePage(page) {
    switch(page) {
        case 'plastics':
            window.location = ("infoPlastics.html");
            break;
        case 'bottles':
            window.location = ("infoBottles.html");
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
    }
}
