function fillBar(element) {
    alert("Page is loaded");
    console.log(element)
}

document.getScroll = function() {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

let getSec = async function() {
    h = innerHeight;
    y = document.getScroll()[1];
    if (0 < y < h) {
        return 1;
    }
    if (h < y < 2 * h) {
        return 2;
    }
    if (2 * h < y < 3 * h) {
        return 3;
    }
}