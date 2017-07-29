# LightYourWay

A Phone(Gap) app which shows you where in ACT you can walk safely at night.

A GovHack ACT 017 competition entry.

## Requirements / Installation

**Step 1.** Install [**PhoneGap**][pg] (I use the CLI version, and for this you need node/npm). Further install the **PhoneGap app** for iOS/Android (I have only tested iOS).[^1]

**Step 2.** Then clone or download this repository.

**Step 3.** Create a demo app with 

    phonegap create sample

and copy the `sample/platforms` and `sample/plugins` directories to this repository. (I didn't include these directories because the contain lots of auto-downloaded stuff.)

**Step 4.** Then cd into this repository and run

    phonegap serve

Note the url in the output. On the **PhoneGap app** enter this url and - voila! - you should see the LightYourWay app on your phone.

[^1]: Links to these things later.

[pg]: https://phonegap.com/
