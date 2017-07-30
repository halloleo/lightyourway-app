# LightYourWay

A Phone(Gap) app which shows you where in ACT you can walk safely at night.

A GovHack ACT 017 competition entry.

***Disclaimer: This repository is in pre-beta!***

## Requirements / Installation

**Step 1.** Install [**PhoneGap**][pg] (We used the CLI version, and for this you need node/npm). Further install the **PhoneGap app** for iOS/Android (We have only tested iOS).[^1]

**Step 2.** Then clone or download this repository.

**Step 3.** Create a demo app with 

    phonegap create sample

and copy the `sample/hooks`, `sample/platforms` and `sample/plugins` directories to this repository. (We didn't include these directories because they contain lots of auto-downloaded stuff.)

**Step 4.** Then cd into this repository and run

    phonegap serve

Note the url in the output. 

## Try the GPS location app

On the **PhoneGap app** enter the url from the `serve` command and - voila! - you should see the LightYourWay app on your phone. This app at thsi stage just shows your current position as a marker.

We tried to put on the street lights layer (data at `data/ACT_Streetlights_arcgis.csv`, Javcript in `www/scripts/basicgps_light_layer_notworking.js`), but could not get it to work.

## Try the location tracker

Additionally we were working on a path tracker which moves on a fixed path. 

This is in the file `www/index_tracker.html` and can be demoed by  renaming `www/index_tracker.html` into `www/index.html` and running again `phonegap serve`.

Now open a browser with the url from the `serve` output and what the moving tracker. This part does not work yet on a phone.

## Data in this repo

We perpared ACT data for our project:

1. `ACT_crimestats.csv`: Crime statistics in Canberra

2. `ACT_Streetlights_arcgis.csv` Strett lights in canberra

[^1]: Links to these things later.

[pg]: https://phonegap.com/
