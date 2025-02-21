# Vore

Vore is a central mechanic to the game, adding "inside" and "outside" as a
dimension. A character inside of another can't be directly interacted with using
most normal actions, but is now vulnerable to actions taken by the pred's body.
Many of these use internal actions, allowing a pred to do two things at once;
however, this also means that the prey has direct access to the pred's body,
which can't dodge or deflect attacks from inside. In some cases, letting
yourself get eaten is an advantage, as it makes it hard for anyone besides the
pred to attack you and makes sure you can land attacks on your prey.

Eating allies lets you protect them from harm and carry them around, and allows
some support abilities to be used on them. This also allows them to share your
movement, so a flying character can bring non-flying characters into the air
with them.

## Digestion

While you have prey inside you, once per turn deal damage based on rampup (see
below). This deals both health damage and buildup damage. Buildup damage is
modified by prey health percentage - for example, a prey with 0 hp takes ten
times as much buildup damage as health damage. This modifier is calculated
before health damage is taken.

If prey takes any digestion damage while their buildup exceeds their base
health, they are digested, their body and any digested food inside them turning
into digested food. Any prey or undigested items inside them move to the organ
the prey was inside of.

## Rampup

All organs start doing zero digestion damage. If they have anything to digest
inside them, their damage increases by one every turn until they reach their
maximum damage, which is usually your body modifier. When there is nothing
inside them, their damage decreases by one per turn until it reaches zero.

## Digesting Food

Regular food items have digestion hardness rather than health. Digestion damage
adds buildup, just like with living prey, and when buildup exceeds digestion
hardness the food item is digested.

## Absorption

Every turn, digested food is absorbed based on your digestion damage. When food
is absorbed, what happens varies depending on the type of organ, but usually the
pred gains satiation according to the nutrients in the food. The formulas for
calculating this are complex, and will not be detailed here.

Not every form of food is the same - some can be absorbed more efficiently than
others. Plants are harder to digest than meat, and processed foods like milk are
even better.

Digestion efficiency also varies depending on perks, including race. A Cowgirl's
slow stomach can absorb more from the same amount of food than the
high-metabolism catgirl.

## Indigestion

When an organ is attacked from the inside, the pred will take health damage and
the organ will take indigestion damage. Once indigestion reaches its maximum
value (calculation omitted here), the organ is weakened, allowing prey the
ability to escape.

## Carry Weight

Every character has a carry weight, which is - as the name suggests - how much
they can carry before penalties kick in. To calculate your carry weight,
multiply your strength stat by 10, then add in racial bonuses.

If the weight of all the stuff you're carrying - either inside or outside of
yourself - exceeds this carry weight, your speed drops by 1 and your dodge
modifier drops by 2. If the total is double your carry weight, those penalties
are doubled, and this continues until both of these are zero and you become
immobile.
