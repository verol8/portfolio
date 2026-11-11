# Mon portfolio

Portfolio statique construit avec [Astro](https://astro.build) et le thème [Fuwari](https://github.com/saicaca/fuwari) (licence MIT), prévu pour être hébergé sur [Vercel](https://vercel.com).

## Ajouter un projet

Un projet = un fichier Markdown dans `src/content/projects/`.

```bash
pnpm new-project mon-super-projet
```

Cela crée `src/content/projects/mon-super-projet/index.md`. Remplis l'en-tête (titre, description, tags, liens) puis écris le contenu en Markdown en dessous.

| Champ | Rôle |
| --- | --- |
| `title` | Titre du projet |
| `description` | Résumé affiché sur la carte |
| `published` | Date (`AAAA-MM-JJ`) |
| `image` | Couverture : `./cover.png` (fichier dans le même dossier) ou `/images/x.png` (dossier `public/`) |
| `tags` | Liste de technologies |
| `demo` | Lien du site en ligne (optionnel) |
| `repo` | Lien GitHub (optionnel) |
| `featured` | `true` pour épingler le projet en premier |
| `order` | Nombre pour forcer l'ordre (optionnel) |
| `draft` | `true` pour ne pas publier |

Ordre d'affichage : projets `featured`, puis `order` croissant, puis les plus récents.

Les dossiers `exemple-*` sont des exemples : supprime-les.

## Publier

Chaque `git push` sur la branche principale redéploie le site automatiquement sur Vercel.

```bash
git add .
git commit -m "Ajoute le projet X"
git push
```

## Développer en local

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # génère dist/
```

## À personnaliser

- `src/config.ts` : titre du site, nom, bio, liens de profil, menu
- `src/content/spec/about.md` : page « À propos »
- `src/assets/images/demo-avatar.png` : ton avatar
- `astro.config.mjs` : URL de repli du site (sur Vercel, l'URL est détectée automatiquement)
