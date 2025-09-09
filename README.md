# Dota Captains Mode


### Stack
Main: TypeScript, React <br>
State managment: Redux Toolkit <br>
Forms: react-hook-form (Player form on ImmortalDraft page) <br>
Form validation: Yup <br>
APIs: api.opendota.com (REST api, for fetching matches), stratz.api.com (GraphQL, for hero synergys) <br>
Unit tests: Jest <br>
Misc: Axios (better API requests), Apollo GraphQL (For GraphQL requests),
<br>

### Warning
not optimized for notepads/mobiles and very stretched monitors, might be problems on these devices
<br>

## Description
Captains mode with removable or selectable pick cells and picks tooltip that shows which hero is better to pick or ban. And you can import match id to display picks from it on site! <br>

Immortal Draft with addable custom players also with functions to add 1 or fill out slots with random players <br>
<br>

## Instruction
On hero images is their: Counter pick advantage / Synergy advantage | Overall advantage <br>

If sorting with synergys is enabled then all heroes will be sorted by their OVERALL advantage <br>

Also if your next pick (selected or by default) is ban, then all heroes will be sorted by ENEMY's OVERALL advantage f.e. best enemy hero is antimage then your best ban will be antimage <br>

Match import will update synergys and they will be synchronized with picks (but if you compare not imported picks and imported picks, you will see small difference. Is because stratz for some reason provides different synergy data from fetching with multiple heroes) <br>

Every feature can be disabled with settings on upper-left corner <br>
<br>

### What is numbers mean?
Is stratz data so for detailed information go to their website. Basically is: Antimage Winrate - Antimage winrate vs/with {HERO} = synergy advantage or counterpick advantage
<br>

### If you found bug or want to request a feature
Please create issue for this repo with description. I will fix it or consider to add a feature 
