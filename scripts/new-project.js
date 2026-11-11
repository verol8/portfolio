/* Crée un nouveau projet : src/content/projects/<nom>/index.md
 * Usage : pnpm new-project mon-super-projet
 * Le dossier permet de poser une image (cover.png) à côté du fichier. */

import fs from "fs"
import path from "path"

function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error(`Erreur : aucun nom fourni
Usage : pnpm new-project <nom-du-projet>`)
  process.exit(1)
}

// "Mon Projet" -> "mon-projet"
const slug = args[0]
  .toLowerCase()
  .normalize("NFD")
  .replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")

if (!slug) {
  console.error("Erreur : nom de projet invalide")
  process.exit(1)
}

const dir = path.join("./src/content/projects/", slug)
const fullPath = path.join(dir, "index.md")

if (fs.existsSync(fullPath)) {
  console.error(`Erreur : ${fullPath} existe déjà`)
  process.exit(1)
}

fs.mkdirSync(dir, { recursive: true })

const content = `---
title: ${args[0]}
description: ''
published: ${getDate()}
image: ''        # ex: ./cover.png (fichier posé dans ce dossier), ou /images/x.png (dossier public/)
tags: []
demo: ''         # lien du site en ligne (laisser vide si aucun)
repo: ''         # lien GitHub (laisser vide si aucun)
featured: false  # true = épinglé en premier
draft: false     # true = non publié
---

Décris ton projet ici : contexte, technologies, difficultés, résultat.
`

fs.writeFileSync(fullPath, content)

console.log(`Projet créé : ${fullPath}`)
