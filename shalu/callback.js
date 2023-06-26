function getGrocry(afterReach) {
    afterReach();
    console.log("Shalu reached Kasia");
}

function afterReach() {
    console.log("Take a packet of Tea");
}

getGrocry(afterReach);

