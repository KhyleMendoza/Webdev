function bottlesOfBeerLyrics() {
    var bottles = 99;

    console.log("Lyrics of the song 99 Bottles of Beer")

    while (bottles > 0) {
        if (bottles > 1) {
            console.log(`${bottles} bottles of beer on the wall, ${bottles} of beer.`)
            bottles--;
            console.log(`Take one down and pass it around, ${bottles} bottles of beer on the wall.`)
        } else {
            console.log(`${bottles} bottles of beer on the wall, ${bottles} of beer.`)
            bottles--;
            console.log(`Take one down and pass it around, no more bottles of beer on the wall.`)
        }
    }

    console.log(`no more bottles of beer on the wall, no more bottles of beer.`)
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
}

bottlesOfBeerLyrics()