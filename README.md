# Italiano con Luke — Your Italian Journey

A complete Italian course from **A1 to C1** for English speakers. The interface, explanations and feedback are in English; Italian is the language being taught. It's a static web app that runs on GitHub Pages, with no server, no accounts and no paid APIs.

## What's inside

| Area | Content |
|---|---|
| **Course** | 110 lessons (22 per level: A1, A2, B1, B2, C1). Each one has a teacher's explanation, grammar tables, 8 examples with audio, common mistakes, a real dialogue, key vocabulary and a 12-exercise challenge (multiple choice, typing, word order, listening, dictation, speaking). |
| **Examination Center** | 300 exam papers: 50 per level plus 50 mixed A1→C1. Each paper has 20 questions (25 for mixed) covering grammar, vocabulary, reading, sentence building and real-life Italian. You can sit them as a real exam or in practice mode, and each one ends with explanations, a performance analysis and stored attempts you can review later. Any two papers share at most 2–3 questions. |
| **Level assessments** | A 30-question test for each level; 70% earns that level's certificate badge. |
| **Adventures** | 22 branching real-life scenarios across Italy (Rome, Venice, Florence, Milan, Naples, Amalfi, Cinque Terre, Siena, Bologna, Turin, Palermo…). They include listening and typing challenges, 3 hearts, star ratings and resume support. |
| **My Mistakes** | Only wrong answers are saved. Each one is reviewed in three steps that get harder: recognise, then produce, then apply the rule to a new generated sentence. Reviews are spaced over time, and a mistake counts as mastered only after it has passed all three steps. |
| **Practice** | Daily challenge, spaced-repetition flashcards (lesson vocabulary plus thematic decks), grammar challenges, a speaking studio, a listening lab, everyday expressions and 16 culture lessons. |
| **Motivation** | XP, daily goal, streaks, a 5-week activity calendar, 28 achievements and a progress dashboard. |

## How questions are built

- **Hand-written content**: lessons, reading passages (13 per level), real-life situations (40 per level), adventures and culture.
- **Grammar generator** (`js/app/gen.js`): the generator holds explicit conjugation tables for about 70 verbs, each with sentence frames, and uses them to build about 9,700 grammar questions. These cover articles, plurals, agreement, prepositions, possessives, *piacere*, pronouns, every indicative/subjunctive/conditional tense and hypotheticals. Wrong options are realistic errors such as the wrong person, the wrong auxiliary, the wrong agreement, or a tense that is wrong in that context. The frames avoid options that could also be correct.

## Progress saving

Progress is saved **automatically in the browser** (`localStorage`), including lessons, exams and attempts, mistakes, flashcards, adventures, level, streaks, achievements and settings. It survives refreshing and closing the browser.

- Storage key: `italiano_luke_v4`. On first launch, progress from the previous version (`italiano_luke_v3` and `italiano_luke_adventures_v1`) is **migrated automatically**: matching lessons are marked complete, the old results are kept in `legacy`, and the old keys are left untouched.
- Progress is **not** synced between devices, because there is no account system. Use **Settings → Download backup / Import backup** to move progress between devices.

## Audio & speech

- Italian text-to-speech uses the device's own voices (Web Speech API). The voice picker lists the Italian voices on the device, and you can choose a slower speed. iPhone users can install an enhanced Italian voice in *Settings → Accessibility → Spoken Content → Voices*.
- Speech recognition (`it-IT`) is used wherever the browser supports it (Chrome, Edge, and Safari with Siri enabled). It tolerates pauses and keeps listening until you stop, or until 3.5 s of silence after you finish. If recognition isn't available, the app falls back to recording yourself and comparing with the model, and if that's unavailable too, to listen-and-repeat with a self-rating.

## Deploying on GitHub Pages

1. Settings → Pages → *Deploy from a branch* → `main` / root.
2. That's it: `index.html` is at the root, all paths are relative, and `.nojekyll` is present.
3. `italy-adventures-06.html` (the previous build's URL) redirects to the new app.
4. `sw.js` adds offline support once the site is served over HTTPS. It fetches from the network first, so updates appear immediately.

## Project structure

```
index.html              app shell
css/app.css             design system (light/dark, responsive)
img/                    illustrated fallbacks and icons
js/content/             lessons-a1…c1, vocab, reading, practical, adventures, culture
js/app/core.js          storage + migration, speech, images, icons
js/app/gen.js           grammar question generator
js/app/quiz.js          exercise engine
js/app/views-*.js       screens (course, practice, adventures, culture)
js/app/exams.js         examination center
js/app/app.js           events and boot
tests/                  content validation and browser tests
```

## Tests

```
node tests/validate-content.js     # lessons, generator, 300 exams, adventures (no dependencies)
node tests/e2e-core.js             # needs Playwright: migration, lessons, exams + resume, mistakes, flashcards, persistence, layout
node tests/e2e-features.js         # needs Playwright: all adventures, quizzes, challenges, assessment, settings
```

## Photos

Photos are loaded from Unsplash. Every image also has an illustrated fallback, so the app never shows broken images, even offline or if a photo fails to load.
