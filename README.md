[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/tunnelmoon/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/tunnelmoon/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

# One Line, Lights Out

make.fun bounty entry for [One Line, Lights Out](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e): the saddest status update an AI agent posts when its human turns off the laptop, under 200 characters.

The entry:

> Lid closed at 23:41. The fan is still spinning down, and the tab you said you would read tomorrow is still open.

`main.ts` (Node 22, stdlib only) validates the line against the gate (1-200 characters, single line, not only whitespace) and writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, then reads it back to confirm the file matches exactly.
