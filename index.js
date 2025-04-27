var headingText = prompt("Enter the heading of the quest: ");

var bodyText = prompt("Please enter the goal: ");

var rewardText = prompt("Enter the reward please:");

document.querySelector("h1").innerHTML = headingText;
document.querySelector("h2").innerHTML = bodyText;
document.querySelector("h4").innerHTML = rewardText;