# Maison Austral

Site vitrine de **maison-austral.ch** — service haut de gamme de relocation et d'accompagnement immobilier entre la Suisse et la péninsule ibérique (Espagne / Portugal).

## Stack

- **Next.js 16** (App Router) avec export statique (`output: 'export'`)
- **Tailwind CSS 3**
- **TypeScript**
- Hébergement cible : **Cloudflare Pages**

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build statique

```bash
npm run build
# → dossier ./out/ contient le site prêt à déployer
```

## Déploiement sur Cloudflare Pages

### Option 1 — via Git (recommandé)

1. Pousser le repo sur GitHub / GitLab.
2. Sur Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
3. Configurer le projet :
   - **Build command** : `npm run build`
   - **Build output directory** : `out`
   - **Framework preset** : Next.js (Static HTML Export)
   - **Node version** : `20` (variable d'env `NODE_VERSION`)
4. Déployer. Le domaine `*.pages.dev` est attribué automatiquement.

### Option 2 — direct via Wrangler

```bash
npx wrangler pages deploy out
```

### Brancher le domaine maison-austral.ch

1. Acheter le domaine (Cloudflare Registrar accepte le `.ch`, ou alternative : Infomaniak / Switch).
2. Sur Cloudflare Pages → **Custom domains** → ajouter `maison-austral.ch` et `www.maison-austral.ch`.
3. Si le domaine est chez un autre registrar, pointer les NS vers Cloudflare ou créer un CNAME `www → <project>.pages.dev` et un A/AAAA via Cloudflare DNS.

## Structure

```
app/
  layout.tsx        # Layout racine + fonts + header + footer
  page.tsx          # Page d'accueil (assemble toutes les sections)
  globals.css       # Styles globaux + utilitaires fade-in
components/
  Header.tsx        # Navigation + menu mobile + sous-menu Découvrir
  Footer.tsx        # FAQ + nav secondaire + email
  Hero.tsx          # Vidéo en boucle + titre principal
  Services.tsx      # 3 blocs : relocation, vacances, rénovation
  Approche.tsx      # 4 piliers (sur mesure, 4h, 24h…)
  Apropos.tsx       # Texte humain + chiffres clés
  Destinations.tsx  # Grille Espagne / Portugal
  Contact.tsx       # CTA mailto final
  Faq.tsx           # Accordéon FAQ
  Logo.tsx          # Logo texte
  RevealOnScroll.tsx # IntersectionObserver pour fade-in
lib/
  content.ts        # Sources de vérité : email, nav, destinations, FAQ
public/
  hero.mp4          # ⚠️ À fournir par le client
  hero-poster.jpg   # ⚠️ Image de remplacement pendant le chargement
```

## À faire côté client

- [ ] Fournir une **vidéo de hero** (`public/hero.mp4`, 1080p, 8–15 s, muette, boucle propre).
- [ ] Fournir une **image poster** (`public/hero-poster.jpg`, 1920×1080).
- [ ] Fournir un **logo vectoriel** si différent du texte actuel.
- [ ] Fournir des **photos** pour les cartes destinations (à intégrer dans `components/Destinations.tsx`).
- [ ] Valider les **textes FAQ** dans `lib/content.ts`.
- [ ] Choisir l'email final : `contact@maison-austral.ch` vs `benjamin@maison-austral.ch` (dans `lib/content.ts`).

## Évolutions prévues (phase 2)

- Internationalisation : DE, EN, PT, ES (actuellement FR uniquement).
- Pages détaillées par destination.
- Témoignages clients.

## Identité visuelle

| Élément | Valeur |
|---|---|
| Bleu nuit | `#0F1B2D` |
| Blanc pur | `#FFFFFF` |
| Sable clair | `#F5EFE3` |
| Cuivre | `#B87333` |
| Display | Cormorant Garamond |
| Body | Inter |
