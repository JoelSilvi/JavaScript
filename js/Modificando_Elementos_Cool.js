const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

// $newCard.innerHTML = ` 
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;

// $newCard.classList.add("card");

// $cards.insertAdjacentElement("beforebegin", $newCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.insertAdjacentElement("afterend", $newCard);
// $cards.insertAdjacentElement("afterbegin", $newCard);

let $contentCard = ` 
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
// $cards.insertAdjacentElement("afterbegin", $newCard);
// $cards.prepend($newCard);
// $cards.before($newCard);
// $cards.append($newCard);
$cards.after($newCard);
