const quotes = [
    {
        quote:"무슨 일이든 할 수 있다고 생각하는 사람이 해내는 법이다. 의심하면 의심하는 만큼 밖에는 못하고, 할 수 없다고 생각하면 할 수 없는 것이다.",
        author:"고 정주영 현대 회장",
    },
    {
        quote:"힘들어도 웃어라. 절대자도 웃는 사람을 좋아한다.",
        author:"고 이건희 삼성 회장",
    },
    {
        quote:"부자와 가난한 자의 단 하나의 차이점은 어떻게 시간을 사용하느냐이다.",
        author:"로버트 기요사키",
    },
    {
        quote:"돈에 대한 탐욕이 만악의 근원이다. 하지만 돈의 결핍 또한 마찬가지이다.",
        author:"사무엘 버틀러",
    },
    {
        quote:"돈을 버는 가장 쉬운 방법은 거리에 피가 낭자할 때 주식을 매입하는 것이다.",
        author:"존 D. 록펠러",
    },
    {
        quote:"지식에 대한 투자는 최고의 수익률로 돌아온다.",
        author:"벤자민 플랭클린",
    },
    {
        quote:"추구할 수 있는 용기가 있다면 우리의 꿈은 모두 이뤄질 수 있다.",
        author:"월트 디즈니",
    },
    {
        quote:"나는 실패한 것이 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.",
        author:"토마스 에디슨",
    },
    {
        quote:"위대한 일을 할 수 있는 유일한 방법은 자신이 하고 있는 일을 사랑하는 것이다.",
        author:"팀 쿡",
    },
    {
        quote:"가끔은 혁신을 추구하다 실수할 때도 있다. 실수는 빠르게 인정하고 다른 혁신을 개선해 나가는 것이 최선이다.",
        author:"스티브 잡스"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//배열의 길이를 넣어주면 추후에 추가된

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;