# PicNode Chat
Üdvözlök minden érdeklődőt!
Ebben a dokumentációban a PicNode Chat metaadat integrációjáról olvashatsz, avagy arról, hogyan tudod személyre szabni weboldalad megjelenését a PicNode Chat-ben.

### A PicNode Chat működése
Ha PicNode Chat-en egy linket elküldenek, a PicNode Web Crawler ezt az oldalt elemzi, majd értelmezi a metaadatokat.
Metaadat alatt a <meta> html tag-ekre gondolunk.
```html
<meta name="picnode:xxxxxx" content="xxxxxx">
```

A PicNode Web Crawler ezeket az információkat figyeli, mint másodlagos információforrás:
- Az oldal leírása
```html
<meta name="description" content="Az én oldalam leírása">
```
- Az oldal címe
```html
<title>Oldalam címe</title>
```
- Az oldal ikonja
```html
<link rel="icon" href="xxxxxx.ico/png/jpg">
```
- Az oldalon lévő képek (Példa):
```html
<img src="https://picnode.hu/logo.png"/>
```

## Egyéni metaadatok
Igen, a PicNode Web Crawler nem csak az alap metaadatokat látja.
Egyéni adatokat is megadhatsz, ezeket fogja elsődlegesen kezelni a webfelderítőnk.

Értelmezett paraméterek:
- picnode:thumbnail
- picnode:sitetitle
- picnode:sitedescription
- picnode:siteurl
- picnode:sitelogo
- picnode:buttontext
- picnode:buttonurl

Ezeket egyszerűen tudod közölni a PicNode Web Crawler-rel:
```html
<meta name="picnode:thumbnail" content="https://xxxxxx.link/myimage.png">
<meta name="picnode:sitetitle" content="My example site title">
<meta name="picnode:sitelogo" content="https://xxxxxx.link/favicon.png">
<meta name="picnode:sitedescription" content="My example description of my site.">
<meta name="picnode:siteurl" content="I can modify where the site title will redirect on click">
<meta name="picnode:buttontext" content="Register for free">
<meta name="picnode:buttonurl" content="https://xxxxxx.link/buttonredirection">
```

Ezek végeredménye a PicNode hivatalos oldalának lekérésekor:

![](https://media.discordapp.net/attachments/710454509742325770/807631374709293155/unknown.png)
