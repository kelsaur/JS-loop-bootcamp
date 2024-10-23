let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].name + "'s favoritfrukter:");
    for (let j = 0; j < friends[i].likes.length; j++) {
        console.log(friends[i].likes[j]);
    }
    console.log('---'); // Separera varje vän med streck
}




//Miller komma