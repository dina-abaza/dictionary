# 📘 English Dictionary App

This is a simple **English Dictionary** web application built with **HTML**, **CSS**, and **JavaScript**.  
It allows users to search for any English word and get its **definition**, **part of speech**, **phonetics**, and **pronunciation audio** using the free [dictionaryapi.dev](https://dictionaryapi.dev).

---

## 🚀 Features

- 🔍 Search for the meaning of any English word
- 🗣 Get phonetic transcription
- 🧠 View part of speech (noun, verb, etc.)
- 🔊 Play pronunciation using audio
- ❌ Error handling for unknown words or empty input

---

## 🛠️ Technologies Used

- **HTML** – For the basic structure
- **CSS** – For styling and layout
- **JavaScript** – To handle fetching data from the API and updating the UI
- **Dictionary API** – Free dictionary service to get word data

---

## 📦 How It Works

1. The user enters a word and clicks "Search".
2. JavaScript sends a request to:  
   `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
3. If the word exists:
   - It displays the meaning, example sentence (if available), and pronunciation.
   - It shows a sound icon to play the word’s pronunciation.
4. If the word doesn’t exist:
   - An error message or alert is shown
