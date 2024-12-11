# Vore

This is a vore game, first and foremost - obviously we spent a lot of time on
the vore mechanics. You can swallow enemies to finish them off, or just to get
them out of the way; swallow allies to protect them, or digest them to empower
yourself; let yourself be swallowed to attack an enemy from the inside, or to
rescue an ally.

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
hardness the food item turns into digested food.

## Absorption

Every turn, digested food is absorbed based on digestion damage. When food is
absorbed, what happens varies depending on the type of organ, but usually the
pred gains satiation according to the nutrients in the food. The formulas for
calculating this are complex, and will not be detailed here.

## Indigestion

When an organ is attacked from the inside, the pred will take health damage and
the organ will take indigestion damage. Once indigestion reaches its maximum
value (calculation omitted here), the organ is weakened, allowing prey the
ability to escape.
