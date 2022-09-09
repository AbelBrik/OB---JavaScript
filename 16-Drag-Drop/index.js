function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4.1,
        center: { lat: -25.344, lng: 131.031 },
    });
    const marker = new google.maps.Marker({
        position: { lat: -25.344, lng: 131.031 },
        map,
        title: "Posición 1"
    })
    const marker2 = new google.maps.Marker({
        position: { lat: -20.344, lng: 121.031 },
        map,
        title: "Posición 2"
    })
    const marker3 = new google.maps.Marker({
        position: { lat: -35.344, lng: 150.031 },
        map,
        title: "Posición 3"
    })
}