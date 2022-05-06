# Streamer Background

Live demo at https://jimofleisure.github.io/streamer-background/

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

## Idea lists

### Next steps

- Fix "3d" scaling
- Make canvas fill window for use as browser scene for background
- Use position for center of prop instead of top-left
- Instead of totally random start and velocity, choose random off-screen spot and a velocity that takes it reasonably across the screen
- Actually use images
- Animated props
- Props within props (e.g. to put cat image in space suit)
- Drawn props with shaders for effects (e.g. shooting stars)

### Longer-term ideas

- Perhaps limit number of on-screen props at a time; they take turns flying by
- Control interface on separate page

### Stretch ideas

- Dynamically able to add props
- Ability to fire on and destroy props

### Probably not going to happen

- Enable scenes; have background manager able to change scenes and perhaps even do transitions
- Camera moves through 3d space instead of objects flying by relative to camera
