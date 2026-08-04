# Portfolio Website - Project Context

## Overview

This repository contains my personal portfolio website.

The purpose of this website is not to act as a traditional job-seeking portfolio. It should feel like a personal research lab / digital garden showcasing projects, experiments, and technical explorations driven by curiosity.

The website should communicate:

> I enjoy exploring interesting problems at the intersection of machine learning, AI, statistics, and scientific computing.

The tone should be:
- curious
- technical but accessible
- thoughtful
- personal
- exploration-driven

Avoid making the site feel like a CV or a list of skills.

---

# Core Projects

The website will showcase three major personal projects.

## 1. Footynomics ⚽

Theme:
Exploring football through Bayesian modelling, statistics, and machine learning.

Description:

Footynomics is an interactive football analytics laboratory exploring how different modelling approaches can be used to understand and predict football.

Key themes:
- Bayesian modelling
- uncertainty quantification
- machine learning comparison
- football analytics
- interactive visualisation

Features:
- Bayesian football models
- ML model comparison
- model performance league
- uncertainty visualisations
- Monte Carlo simulations
- team/player insights
- exploratory analytics

The focus is not simply prediction accuracy, but understanding:
- why models make predictions
- uncertainty around predictions
- differences between modelling approaches

---

## 2. Agora 🧠

Theme:
Exploring collaborative AI reasoning.

Description:

Agora is an AI reasoning laboratory exploring complex questions through collaborative intelligence, evidence, and diverse perspectives.

The goal is to investigate whether multiple AI agents can work together to produce more thoughtful, balanced, and evidence-based conclusions.

Key themes:
- multi-agent systems
- LLM applications
- reasoning
- evidence synthesis
- AI collaboration

Features:
- multiple expert agents
- structured discussions
- debate workflows
- belief updating
- evidence evaluation
- consensus synthesis

The emphasis is on:
- truth seeking over winning arguments
- uncertainty over false confidence
- reasoning transparency

---

## 3. First Principles ⚛️

Theme:
Exploring scientific machine learning.

Description:

First Principles explores how machine learning can incorporate physical knowledge and scientific principles.

Key themes:
- physics-informed machine learning
- scientific AI
- hybrid modelling
- computational experimentation

Areas of exploration:
- Physics-informed neural networks (PINNs)
- Bayesian scientific ML
- neural operators
- surrogate modelling
- numerical simulation

The goal is to understand how data-driven approaches can combine with physical laws.

---

# Website Structure

The website should eventually contain:

Home
|
├── Projects
| |
| ├── Footynomics
| ├── Agora
| └── First Principles
|
├── Writing
|
├── About
|
└── Contact

---

# Homepage Vision

The homepage should be simple and elegant.

It should introduce:

Name:
Conor Chalcroft

Short introduction:

"Exploring machine learning, AI, statistics and scientific computing through personal projects."

Then highlight the three projects.

The homepage should feel like:
- a personal research notebook
- an exploration space
- a collection of experiments

Not:
- a recruitment page
- a technology skills checklist

---

# Design Principles

## Visual style

Aim for:
- clean
- minimal
- modern
- technical

Avoid:
- excessive animations
- corporate style
- generic portfolio templates

Think:
- research lab
- personal knowledge base
- scientific notebook

---

# Technical Requirements

Technology:

- Next.js
- TypeScript
- Tailwind CSS

Prefer:
- reusable components
- clean architecture
- maintainable code

Suggested structure:

src/
|
├── app/
| ├── page.tsx
| ├── projects/
| ├── writing/
| └── about/
|
├── components/
|
├── data/
|
└── lib/


---

# Future Features

Potential additions:

## Project pages

Each project page should contain:

- overview
- motivation
- technical details
- architecture
- images/visualisations
- links to GitHub
- live demos where available

---

## Writing section

A technical blog / notes section.

Possible articles:

- Building a hierarchical Bayesian football model
- Understanding physics-informed neural networks
- Designing multi-agent AI systems
- Lessons from implementing ML projects

---

# Important Guidance

When adding content:

Prioritise explaining:
- why the project exists
- what questions it explores
- what was learned

Do not make content purely about:
- tools used
- programming languages
- technical buzzwords

The website should demonstrate curiosity, depth of understanding, and experimentation.