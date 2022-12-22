var message = "Welcome to Monster Clicker! Click the pile of gold to start mining!";
var gold = 0;
var goldsec = 0;
var goblins = 0;
var imps = 0;
var gnomes = 0;
var skeletons = 0;
var trolls = 0;
var demons = 0;
var mummys = 0;
var witches = 0;
var dragons = 0;
var noobs = 0;

setInterval(function () {
    addgold();
}, 1000);

function goldclick() {
    gold = gold + 1;
    display();
}

function display() {
    document.getElementById("goldamount").innerHTML = gold;
    document.getElementById("goblinam").innerHTML = goblins;
    document.getElementById("impam").innerHTML = imps;
    document.getElementById("gnomeam").innerHTML = gnomes;
    document.getElementById("skeletonam").innerHTML = skeletons;
    document.getElementById("trollam").innerHTML = trolls;
    document.getElementById("demonam").innerHTML = demons;
    document.getElementById("mummyam").innerHTML = mummys;
    document.getElementById("witcham").innerHTML = witches;
    document.getElementById("dragonam").innerHTML = dragons;
    document.getElementById("noobam").innerHTML = noobs;
    document.getElementById("goldseconds").innerHTML = goldsec;
    document.getElementById("messages").innerHTML = message;
}

function goldseccheck() {
    goldsec = 0;
    goldsec = goldsec + (goblins * 1);
    goldsec = goldsec + (imps * 10);
    goldsec = goldsec + (gnomes * 20);
    goldsec = goldsec + (skeletons * 30);
    goldsec = goldsec + (trolls * 40);
    goldsec = goldsec + (demons * 50);
    goldsec = goldsec + (mummys * 60);
    goldsec = goldsec + (witches * 70);
    goldsec = goldsec + (dragons * 80);
    goldsec = goldsec + (noobs * 200);
    display();
}

function addgold() {
    gold = gold + goldsec;
    display();
}

function buygoblin() {
    if (gold >= 20) {
        gold = gold - 20;
        goblins = goblins + 1;
        message = "Bought one golbin.";
    } else {
        message = "Can't buy a goblin, not enough gold";
    }
    goldseccheck()
}

function buyimp() {
    if (gold >= 120) {
        gold = gold - 120;
        imps = imps + 1;
        message = "Bought one imp.";
    } else {
        message = "Can't buy an imp, not enough gold";
    }
    goldseccheck()
}

function buygnome() {
    if (gold >= 300) {
        gold = gold - 300;
        gnomes = gnomes + 1;
        message = "Bought one imp.";
    } else {
        message = "Can't buy an imp, not enough gold";
    }
    goldseccheck()
}

function buyskeleton() {
    if (gold >= 500) {
        gold = gold - 500;
        skeletons = skeletons + 1;
        message = "Bought one skeleton.";
    } else {
        message = "Can't buy a skeleton, not enough gold";
    }
    goldseccheck()
}

function buytroll() {
    if (gold >= 1000) {
        gold = gold - 1000;
        trolls = trolls + 1;
        message = "Bought one troll.";
    } else {
        message = "Can't buy a troll, not enough gold";
    }
    goldseccheck()
}

function buydemon() {
    if (gold >= 5000) {
        gold = gold - 5000;
        demons = demons + 1;
        message = "Bought one demon.";
    } else {
        message = "Can't buy a demon, not enough gold";
    }
    goldseccheck()
}

function buymummy() {
    if (gold >= 10000) {
        gold = gold - 10000;
        mummys = mummys + 1;
        message = "Bought one mummy.";
    } else {
        message = "Can't buy a mummy, not enough gold";
    }
    goldseccheck()
}

function buywitch() {
    if (gold >= 100000) {
        gold = gold - 100000;
        witches = witches + 1;
        message = "Bought one witch.";
    } else {
        message = "Can't buy a witch, not enough gold";
    }
    goldseccheck()
}

function buydragon() {
    if (gold >= 1000000) {
        gold = gold - 1000000;
        dragons = dragons + 1;
        message = "Bought one dragon.";
    } else {
        message = "Can't buy a dragon, not enough gold";
    }
    goldseccheck()
}

function buynoob() {
    if (gold >= 10000000) {
        gold = gold - 10000000;
        noobs = noobs + 1;
        message = "Bought one noob.";
    } else {
        message = "Can't buy a noob, not enough gold";
    }
    goldseccheck()
}
