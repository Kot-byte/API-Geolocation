function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`)
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            document.getElementById('location').textContent = `Город: ${city}`;
        })
        .catch(error => console.error('Ошибка при получении местоположения:', error));
    
    const hour = new Date().getHours();
    let dayPart;
    if (hour >= 5 && hour < 12) {
        dayPart = "утро";
    } else if (hour >= 12 && hour < 18) {
        dayPart = "день";
    } else {
        dayPart = "вечер";
    }
    document.getElementById('dayPart').textContent = dayPart;
    }
    
    function errorCallback(error) {
    console.error('Ошибка при получении местоположения:', error);
    }
    
    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.error('Геолокация не поддерживается в вашем браузере');
    }
    }
    
    window.onload = getLocation;