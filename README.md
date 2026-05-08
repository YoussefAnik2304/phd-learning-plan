# 🎓 PhD Deep Learning Track — 15-Day Learning Plan

A personal, interactive learning tracker built to acquire the necessary **Data Science, NLP, and Deep Learning** skills for a PhD thesis on *"Twitter Data Analysis and Prediction using Deep Learning for Strategic Intelligence"*.

🌐 **Live App:** [https://phd-learning-plan.vercel.app/](https://phd-learning-plan.vercel.app/)

---

## 📖 About

This web application provides a structured 15-day curriculum designed to transition a Software Engineering background into Applied AI and NLP. Each day includes:

- 📌 A focused learning topic
- ✅ Specific bullet-point concepts to cover
- 🎬 A curated YouTube video or playlist
- ⏱️ A realistic time estimate (holiday-friendly, ~1–2 hrs/day)
- 🔘 A "Mark Done" button to track your progress (saved in browser local storage)

---

## 🗺️ Curriculum Overview

| Day | Topic | Est. Time |
|-----|-------|-----------|
| 1 | Python Data Science: Pandas Basics | ~1.5 hrs |
| 2 | Python Data Science: NumPy & Data Cleaning | ~1.5 hrs |
| 3 | Data Visualization (Matplotlib & Seaborn) | ~1 hr |
| 4 | Web Scraping (BeautifulSoup) | ~2 hrs |
| 5 | Working with APIs (Twitter/X) | ~1 hr |
| 6 | NLP Fundamentals (NLTK & spaCy) | ~1.5 hrs |
| 7 | Machine Learning for Text (TF-IDF, Naive Bayes) | ~1.5 hrs |
| 8 | Intro to Deep Learning (3Blue1Brown) | ~1 hr |
| 9 | PyTorch Basics & Tensors | ~2 hrs |
| 10 | Building Classification Models in PyTorch | ~2 hrs |
| 11 | Recurrent Neural Networks (RNN/LSTM) | ~1.5 hrs |
| 12 | Transformers Architecture | ~30 min |
| 13 | Hugging Face Transformers (BERT, fine-tuning) | ~2 hrs |
| 14 | Time Series Forecasting | ~1.5 hrs |
| 15 | Building an AI Dashboard (FastAPI + Next.js) | ~1.5 hrs |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State:** React `useState` + `localStorage` for persistent progress tracking
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Running Locally

Make sure you have **Node.js** installed, then:

```bash
git clone https://github.com/YoussefAnik2304/phd-learning-plan.git
cd phd-learning-plan
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
phd-learning-plan/
├── src/
│   └── app/
│       ├── page.tsx        # Main page with curriculum data & UI
│       ├── layout.tsx      # Root layout
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

---

## 🎯 PhD Thesis Context

**Thesis Title:** Analyse des données Twitter et prédiction par Deep Learning pour la veille stratégique

**Goal:** Build a real-time system to collect Twitter/X data, perform sentiment analysis, predict emerging trends, and present insights through an interactive decision-making dashboard — helping businesses make data-driven strategic decisions.

---

## 👤 Author

**Youssef Anik**
- GitHub: [@YoussefAnik2304](https://github.com/YoussefAnik2304)
