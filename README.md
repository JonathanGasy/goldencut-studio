# Golden Cut — Portfolio du studio

Site vitrine pour mon travail de monteur vidéo et créateur de vidéos IA, hébergé gratuitement sur GitHub Pages.

## Structure

```
index.html   → la page (pas besoin d'y toucher)
style.css    → le design (couleurs en haut du fichier)
main.js      → le moteur (pas besoin d'y toucher)
data.js      → ✏️ TOUT LE CONTENU : textes, projets, avis, contacts
medias/      → tes miniatures (.jpg) et vidéos courtes (.mp4)
```

## Mettre en ligne (une seule fois)

1. Sur github.com, crée un dépôt nommé exactement **`JonathanGasy.github.io`** (public).
2. Clique **Add file → Upload files**, glisse tous les fichiers et le dossier `medias`, puis **Commit changes**.
3. Va dans **Settings → Pages** : Source = *Deploy from a branch*, Branch = `main` / `(root)` → **Save**.
4. Après 1 à 2 minutes, ton site est en ligne sur **https://JonathanGasy.github.io**

## Ajouter une vidéo (2 minutes)

1. Mets ta vidéo sur YouTube (en *non répertoriée* si tu veux), ou sur Vimeo.
2. Sur GitHub, ouvre `data.js` → icône ✏️ (Edit).
3. Copie un bloc projet `{ ... },` et colle-le en haut de la liste `PROJETS`.
4. Change `titre`, `client`, `categorie` (`montage`, `shorts` ou `ia`), `format` (`horizontal` ou `vertical`) et colle le lien dans `video`.
5. **Commit changes**. Le site se met à jour tout seul en ~1 minute.

Pour YouTube, la miniature est récupérée automatiquement. Pour Vimeo, ajoute une image dans `medias/` et indique-la dans `miniature`.

## Astuces

- **Aperçu au survol** : exporte un extrait de 3–5 s, muet, en 720p (< 2 Mo) et mets-le dans `apercu`.
- **Showreel en fond** : un MP4 muet de 10–20 s, compressé (< 8 Mo), dans `showreelFond`. GitHub refuse les fichiers de plus de 100 Mo : mets les vidéos longues sur YouTube/Vimeo.
- **Changer les couleurs** : en haut de `style.css`, modifie `--accent` (orange) et `--gold` (italiques).
- **Indisponible ?** Dans `data.js`, mets `disponible: false`.
