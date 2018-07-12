var g = document.getElementById("geo")
getCurrentLoaction = function () {
    navigator.geolocation.getCurrentPosition(SuccessfullyGotLocation,FailureInLocation)
sss}
function SuccessfullyGotLocation(location) {
    var lat = location.coords.latitude
    var log = location.coords.longitude
    g.innerHTML = lat + "," + log
}
function FailureInLocation(){
    g.innerHTML="Sorry, No Access To GeoLocation"
}