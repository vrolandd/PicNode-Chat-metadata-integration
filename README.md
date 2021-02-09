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
<meta name="picnode:sitetitle" content="Példa cím">
```
![](https://cdn.discordapp.com/attachments/770911106075197441/808753403274592357/unknown.png)
```html
<meta name="picnode:thumbnail" content="https://xxxxxx.link/myimage.png">
```
![](https://cdn.discordapp.com/attachments/770911106075197441/808754182785204255/unknown.png)

```html
<meta name="picnode:sitelogo" content="https://xxxxxx.link/favicon.png">
```
![](https://cdn.discordapp.com/attachments/770911106075197441/808754437660868638/unknown.png)
```html
<meta name="picnode:sitedescription" content="Leírása a weboldalamnak">
```
![](https://cdn.discordapp.com/attachments/770911106075197441/808754844096528414/unknown.png)
```html
<meta name="picnode:siteurl" content="https://test.picnode.hu">
<meta name="picnode:buttontext" content="Register for free">
```
![](https://cdn.discordapp.com/attachments/770911106075197441/808756176187162694/unknown.png)
```html
<meta name="picnode:buttonurl" content="https://xxxxxx.link/buttonredirection">
```

Ezek végeredménye:

![](https://cdn.discordapp.com/attachments/770911106075197441/808756176187162694/unknown.png)

Ezek végeredménye a PicNode hivatalos oldalának lekérésekor:

![](https://media.discordapp.net/attachments/710454509742325770/807631374709293155/unknown.png)


FONTOS! A DIZÁJN/FELÜLET MÉG VÁLTOZHAT! EZEK A KÉPEK CSAK SZEMLÉLTETŐ JELLEGŐ PÉLDÁK!
