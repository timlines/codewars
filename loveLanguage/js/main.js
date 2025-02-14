// According to Gary Chapman, marriage counselor and the author of "The Five Love Languages" books, there are five major ways to express our love towards someone: words of affirmation, quality time, gifts, acts of service, and physical touch. These are called the love languages. Usually, everyone has a main language: the one that he/she "speaks" and understands best. In a relationship, it's important to find your partner's main love language, so that you get along better with each other.

// Your task
// Unfortunately, your relationship got worse lately... After a long discussion with your partner, you agreed to give yourself a few weeks to improve it, otherwise you split up...

// You will be given a partner instance, and n weeks. The partner has a .response method, and the responses may be: "positive" or "neutral". You can try to get a response once a day, thus you have n * 7 tries in total to find the main love language of your partner!

// The love languages are: "words", "acts", "gifts", "time", "touch" (available predefined as LOVE_LANGUAGES)

// Notes:
// Your partner will sometimes give a positive response to any love language (a "false positive"), but the main one has a much higher possibility. On the other hand, you may get a neutral response even for the correct language, but with a low possibility (a "false negative").
// There will be 50 tests. There is a slight chance (about 0.5%) to fail a test even with a proper solution, due to the randomness. So if you get 49/50, just run the tests again.
// Examples
// main love language: "words"

// partner.response("words")  -->  "positive"
// partner.response("acts")   -->  "neutral"
// partner.response("words")  -->  "positive"
// partner.response("time")   -->  "neutral"
// partner.response("acts")   -->  "positive"    # false positive
// partner.response("gifts")  -->  "neutral"
// partner.response("words")  -->  "neutral"     # false negative
// etc.
// Happy coding, and DO try this at home! :-)

// My other katas
// If you enjoyed this kata then please try my other katas! :-)

// Translations are welcome!


const LOVE_LANGUAGES = [ 'words', 'acts', 'gifts', 'time', 'touch' ]
let languageCount = { 
    'words': 0,
    'acts': 0,
    'gifts': 0,
    'time': 0,
    'touch': 0,

}

function loveLanguage(partner, weeks) {


    // Change a number into an array counting up from 0 to the number.
    function numToArray(num){
        let array = [];
        for ( let i = 0; i < num; i++ ){
            array.push(i);
        }
        return array;
    }
 
    let days = numToArray(weeks * 7);

    // Tally the results over time
    for ( let language of LOVE_LANGUAGES ) {
        let responseArray = [];
        for ( let day of days ){
            responseArray.push(partner.response(language));
        }
        languageCount[language] = responseArray.filter(word => word === 'positive').length;
        
    
    }
    // score the results

    let highScore = 0;
    let perferedLanguage = '';

   
    for ( let element in languageCount ) {
        if ( languageCount[element] > highScore ){
            highScore = languageCount[element];
            perferedLanguage = element;
        }

    }
    return perferedLanguage;

}

class Partner extends String {
    response(language) {
        return this.toString() === language ?
            Math.random() < 0.85 ? "positive" : "neutral" :
            Math.random() < 0.15 ? "positive" : "neutral" ;
    }
}




console.log(loveLanguage(new Partner('gifts'), 7))