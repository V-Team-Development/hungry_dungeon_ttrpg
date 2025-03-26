# Getting Started

So, you just got here and want to play. You're probably thinking "what do I do?"
Here's the guide on that.

As a game on Discord, every action you can take comes from a command. You can
use commands by typing a / followed by the command name, which will usually have
autocomplete.

## Making a Character

Start with a /account createcharacter to create a character. You'll need to pick
a name, description, and race - the last one has actual gameplay impact, so
choose carefully. Each race has their own stats, starting points, and sometimes
special features, all of which are important.

If that seems overwhelming, just pick whichever race sounds coolest. If you
regret your choice, you can always make a new character later, or get
race-swapped.

You'll start out with some stat points and skill points, and it's best that you
wait to spend them until you know what you want. The beginner enemies are easy
enough that you won't be in trouble.

## Actually Doing Things

Once your character spawns in, you'll probably want to head out and do some
fighting. Use /changeroom to move to another room - right now, you'll want the
nice safe plains. Once you're in there, you can change rooms again to one of the
dungeon rooms, ideally one with just a few slimes. Combat begins!

Use /attack to do a basic attack, so pick a slime and start squishing; right
now, it's time to introduce skill checks.

A skill check takes your skill level for something, rolls a d6 for each level,
and gives you a success on a 5 or 6. If you roll more successes than the check
difficulty, you win! Your skill level depends on the skill's relevant stats
(usually 2, sometimes 1) plus any bonuses you have.

A contested check, which an attack is, runs checks for both you and your target,
and if you have more than them (a tie goes to the defender), you land the hit.
In this case, your Strike skill (Strength plus Agility) contests the slime's
Dodge skill (Agility vs Instinct). If you picked human, you have a nice round 10
in all stats, while the slime only has a 6 for Agility and Instinct; they get 12
dice to roll, while you get 20.

Let's say that you rolled 8 successes, while your target got unlucky and
rolled 4. 8 is more than 4, so you landed the hit! You deal the attack's base
damage (your strength score, 10), plus another 4 (1 for each success more than
your target), totalling up to 14 damage. The slime then gets to roll their
Endure score (just Durability, so 10), each success removing a point of damage.
They get 3 successes, so your final damage dealt is 11. Keep that up and you'll
win pretty soon.

A side note about checks: every Skill has a primary stat, listed first, and
sometimes a secondary stat, listed second. When a flat value is used, like for
base damage, the value equals the primary stat plus any skill bonuses.

You also deal poise damage, which we'll get into later. Your poise damage is
your total successes (8) plus your successes over the target (4) for a total
of 12. Poise damage applies even if you miss - if you had rolled a 4 while the
slime rolled an 8, you would deal 4 poise damage minus the slime's successes
above yours (4) for a total of... 0. The point is that even a dodged attack is
still useful, because it can set up a stagger.

As for what a stagger does - imagine that you've been trading blows for a while,
and the slime has taken so much poise damage that their poise hit zero. Just
like that, the slime is staggered, and will be for another two turns. Being
Staggered is one of many ways to be Vulnerable, which is useful in many ways,
one of which is critical hits.

On your next attack, imagine you rolled just 5 successes, but three of those
were 6s. Three 6s mean you get to roll _another_ three dice, adding every 5 or 6
to your total successes, and if one of those is a 6 then you get another die to
roll. This goes on until you don't roll any sixes, which can give a big boost to
your damage.

## The "Hungry" part

If you're of a predatory persuasion, then above is even more relevant to you,
because a Vulnerable target can be Devoured. You still need to win a contest
(Devour vs Dodge), but if you do, that's one prey in your belly (or other
organ).

Every turn they stay inside you, the prey will be taking digestion damage based
on your Digest skill - 10, if you picked human - which is then reduced by their
Endure roll. They also take Buildup damage (also 10), which doesn't get a resist
roll. If their total Buildup hits their maximum health, they get digested,
turned into food for you to absorb. Other things change the digestion damage you
do, so check the section below.

Of course, that assumes they stay inside you. Prey can choose to struggle, which
pits their Strike against your Body. Other than the skill change, this works the
same as a normal attack, including the poise damage - but on top of lowering
your poise, it increases indigestion. While the regular damage is dealt straight
to you (reduced by your Endure roll), the indigestion damage happens to the
organ the prey is in. If that hits max, the organ becomes upset, which counts as
Vulnerable and allows prey to escape - though they still have to pass a skill
check.

Having prey struggle inside you also does poise damage, but unlike normal
attacks, you only take poise damage if their struggle actually lands.

## Energy and Satiation

# For Reference

## Skills

- Strike (Strength+Agility): exerting force using your body.
- Devour (Strength+Agility): eating things.
- Dodge (Agility+Instinct): moving out of the way of things.
- Body (Strength+Durability): controlling your own body.
- Spellcraft (Sorcery+Instinct): using magic.
- Endure (Durability): resist physical damage.
- Digest (Durability): digest food and prey.

## Digestion

Your Digest skill is the base damage you do per turn. However, organs need time
to start digesting - prey takes no digestion damage their first turn inside an
organ unless that organ was already digesting something. If your satiation is
less than half of its maximum, you count as Starving, and get to roll your
Digest skill for bonus damage. This damage is dealt as both health damage and
Buildup damage; prey can roll Endure to resist health damage, but not buildup.
If the prey's health is below half, they take double the buildup damage.
