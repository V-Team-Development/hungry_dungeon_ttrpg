## Sex

A penis going inside of an organ and putting cum inside is obvious.

Tie it to the grapple system, maybe?

## Changes

Make even normal logins require a life, to make digestion feel more impactful.

Breast/cock vore should be unlocked with a perk, not default.

## Grapple

"Smother with breasts" ability for grappled targets? Instinct debuff, damage
from lack of air?

Entrapment (like with clothing) is a kink that works well in this context, I
should add some if I can.

Connections between objects now need a source, so players can see what causes a
connection and break it if needed.

## General Concepts

Negative perks that give extra points when taken.

Spawn NPC allies (birthed?) to help fight.

Alchemy system where you need to swallow a certain combination of ingredients to
create a particular effect. Potion becomes milk?

A stuffing RP mode with infinite capacity

Ovipositors for adding eggs? Combine with cum inflation?

Have a mass of slime growing in your womb. When there's enough of it, use an
ability to birth a short-lived slime ally.

Actions should have some combination of traits required. For example, a belly
rub requires touch-range to a target, requires free hands, and counts as
"affection". A dog girl might get bonuses from affection abilities, for example.

Option for permanent digestion, triggered post-digestion. Requires tracking what
digested a player last, and whether that was a player.

Spending points to increase max capacity should also increase current capacity
if it's too far below the new max. This would let organs with small initial
capacities start being useful sooner.

Different food types, with perks to make those food types more or less effective
when digesting or absorbing energy. Herbavore races digest plants better,
carnevore races digest meat better, and some special races digest things like
stone or metal.

Keeping prey inside your womb wears down at their mental resistance, eventually
allowing them to become tamed.

Lowering mental health (need better term) also reduces the rate poise recovers,
and both that and physical health being lowered exponentially lowers poise
regen. I don't have any ideas for mental health besides making alive-but-broken
npcs, maybe that taming thing can be involved.

Add cooldown system for abilities and spells.

Males are off the table, but non-binary AFABs are probably fine. Add a pronoun
system.

When deleting a character that was digested by a player, allow them to say that
that player perma-digested them, which logs their name in that pred's data.

Goblin Queen boss with minions. When attacked, she can grab a minion who takes
the damage instead of her. The minions try to feed players to her, or themselves
if she's hungry. The queen usually doesn't attack, but can use big, hard-hitting
attacks that consume lots of energy. The queen is hard to escape from once
eaten. Spawns new waves of goblins when her minions run out? Special flavor text
when players eat the minions? "Hey, those are my food, not yours!" Aside from
the big attacks, she spends her turns digesting or buffing her minions
(literally just yelling at them to fight harder).

I need to create general size-change mechanics, where stats change with size
dynamically.

Allow players to choose default actions for /attack, /devour, and such

Add dungeonkeep teleport command.

Both the actor and the organs need JSON settings values.

for tanking, being attacked adds aggro, but failing an attack removes it, so if
an enemy isn't getting anywhere with attacking it'll move on to someone else.
Aggro also fades over time, so if a player hides inside another for a while they
won't be instantly targeted.

Obviously, I need a "taunt" action that does nothing but add aggro.

The "hunger" part of aggro increases for everyone when an actor needs SAT. The
per-actor hunger and personal hunger are not the same - the desire to eat in
general and the desire to eat someone in particular are different. Hunger for an
actor decreases when that prey escapes, and decreases more based on how much of
a fight the prey put up.

A party system for when things get more complex, so you can keep track of who
you're playing with.

A new command to delete rooms for deleted channels.

Clothing, weapons, and more are all children as well, not just organs.

Make short-lived rooms in DMs that allow tutorials.

A "guard" system, where attempts to attack a target aren't possible while they
are guarded by another target. This takes the form of a "guarded" effect on the
protected target, which is removed if the guard is staggered, KOd, or changes
parents.

Webs that have to be broken to attack a spider. Take poise damage while
breaking?

Instead of having all organ interactions in the same list, each organ should get
their own sub-category to interact with. This means I can put feedself into the
interaction menu.

Like the dice explosion feature, an inverse that lets you reroll any failures,
once.

Energy transfer spell that restores x energy to the target at the cost of x*2
for the caster. Symbiotes should have a variant of this.

The hit that brings poise/indigestion to threshhold should cap it at 0, and it
takes hits beyond that to bring it lower.

AI Should report will/energy cost, not using any abilities it doesn't have
enough for. An "energy desire" system calculates how much the lack of energy
affects an AIs ability to use the actions it wants (energy desire increases when
it can't use an ability to lack of energy) and higher desire makes using Rest
(or other en-generating things) more likely.

To fit the lore, digesting someone for good requires that you digest the
dream-memory of them, not just their body. This is much, much harder.

Ability to recover poise?

When digested, the prey might be able to become sentient fat, using the same
code as the symbiote. Jiggle around at odd moments to throw off a pred, or to
help blunt blows they take.

Add bonus health, which doesn't count as normal health for deciding percentage.

You can recover from a KO by using a life. This should be normal in
high-difficulty boss fights.

To migrate accounts during schema changes, I need a way to log in characters
then log them back out on my own, without needing the account owner to do it.

A last gasp system, where actors at low hp or high buildup gain big boosts to
will/energy regen. Would make the end of a fight feel more dramatic.

If enemy mobs are still too little of a threat, introduce Mobbing. Applying for
only one turn, blocked damage reduces durability by some part of the blocked
damage for subsequent attacks. This should allow enemy hordes to actually damage
players, and makes numbers far more dangerous. (idea via Aesa)

Make perk unlocks require confirmation like stats.

For cock vore, have digestion damage be based on horny? And it can't fully
digest automatically, but when you cum it does a massive burst of damage,
instantly churning most prey and using them for the cum. I could expand this
feature to include faster digestion in other organs, especially breasts, though
cock vore should be special in this regard.

I imagine the lust mechanic as being both powerful and dangerous. Being horny
makes you more vulnerable, but it also gives advantages, especially in certain
playstyles. The gutslut perk makes you gain lust when being digested, for
example, and there might be an alternate perk that boosts your lust when
digesting prey. Maybe high lust increases will regen? Orgasms should be part of
the playstyle, like how poise and devour work.

Thrash, a high-energy, high-damage escape skill. Might consume all of your
energy, doing damage based on how much was spent. The energy cost of this gets
more intense with the new energy regen, as being empty means more turns needing
sat to recover.

### State ideas

Enclosed: applies when eaten or otherwise trapped inside something.

Standing: not trapped by anything.

Flying: in the air.

Swimming: Same but underwater. Only applies when water exists.

Restrained: applies when grabbed, webbed, etc.

Unconsious: at zero hp.

Any action has a set of states it can be used in. If you aren't in one of those
states, you can't use the action.

Actions also have tags themselves. 

### Actions

Strike (standing, enclosed) (touch): hit a target. Roll physical, vs a target's
dodge (if they can) or internal (if attacking an organ from inside). Replaces
both old attack and old struggle.

Devour (standing, enclosed)

TODO: switch weight loss to only happen when starving.