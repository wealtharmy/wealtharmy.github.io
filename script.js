window.sr = ScrollReveal();
sr.reveal('*');

const reviews = [
    {
        "username": ['SamusX0', '#7808'],
        "description": "Gotta love samurai.",
        "rating": "Gotta love samurai, was watching pirates of the Caribbean almost falling asleep. My phone got a discord samurai notification and got in a trade for an easy 20%",
        "stars": 5
    },
    {
        "username": ['Ceguon', '#6969'],
        "description": "Unparalleled.",
        "rating": "The amount of value you get for a Trading Hive subscription is simply unparalleled. The sheer number of analysts you get to choose from, and the wide variety of trading styles (scalps, day trades, swings, and long terms) lets you cater to your own strategies and risk tolerance.",
        "stars": 5
    },
    {
        "username": ['kif', '#6044'],
        "description": "This place is amazing!",
        "rating": "Samurai gets the best of the best alerters and a lot of them. There is about 15 crypto alerters, 14 options alerters, and 11 stock alerters that is available to premium members. I have made my membership cost back within following a single alert",
        "stars": 5
    },
    {
        "username": ['King Noah', '#5723'],
        "description": "Account has grown 3.5%",
        "rating": "I have been with this server for about a month and in total my main account has grown 3.5% (1.2m port: month of gains = 42k). My small account account has grown 68% (10k port: month of gains 6.8k). I love this community and have formed many new friendships.",
        "stars": 5
    }
]    

for (x = 0; x < 20; x++) {
    for (review in reviews) {
        $('.slider').append(`<div class="rating">
        <div class="top">
            <div class="user">
                <div class="usernamerating">
                    <h4>${reviews[review]["username"][0]}<span class="small">${reviews[review]["username"][1]}</span></h4>
                    <div class="stars">
                        ${'<i class="fa-light fa-star"></i>'.repeat(reviews[review]["stars"])}
                    </div>
                </div>
                <p>${reviews[review]["description"]}</p>
            </div>
            <hr>
            <p>${reviews[review]["rating"]}</p>
        </div>
    </div>`);
    };
};
