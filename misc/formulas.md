# Formulas

Many of the formulas used in Hungry Dungeon are extremely complicated, designed
to be done by computers. For transparency, they will be shown here.

## Regression and Rebirth

By default, regression and rebirth take 20 turns each - "regression" here
meaning a return to zero, so a full character reset takes 40 turns. The rebirth
portion requires satiation, equal to the rebirthed character's energy per size
(EPS) multiplied by the size gain that turn. If the available satiation is less
than that, only a portion of the size will be gained that turn.
