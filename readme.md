# Streamer Background

This project is an idea to replace a streamer's video loop background
with an HTML canvas interface that does not loop.

The particular streamer I have in mind is
[LearnWithLeon](https://www.twitch.tv/learnwithleon) who has a
video loop including cats, planets, asteroids, shooting stars,
and a space suit (with a cat) flying through space behind a
Millenium-Falcon-like window. Leon teaches JavaScript (for free; check
out [#100Devs](https://leonnoel.com/100devs/)), so I thought to use
object-oriented JavaScrpt to animate the image props in the background.

## Status

The object structure is in place and working well. Currently hard-sized
green rectangles are drawn and will bounce around or attempt to recede
into the background via scaling down, but the scaling is not yet working
as desired.

Future steps include fixing scaling, improving prop self-tracking,
image display, animated image display, and perhaps effects objects for
shooting stars and such.

