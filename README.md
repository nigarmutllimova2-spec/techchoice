# TechChoice – Adaptive Technology Shopping Platform

**Module:** Intelligent Interactive Systems  
**University:** University of Birmingham  
**README prose word count:** 894 words (excluding code and setup commands).

## 1. Project Overview

TechChoice is an interactive academic prototype developed to explore how adaptive recommendation-list sizes can balance decision effort and product discovery.

The system uses shopping goals and technology familiarity to determine the initial number of recommended products. Users can adjust this number throughout their shopping experience.

The project builds on the research conducted in Assignment 1 concerning choice overload, recommendation systems and user decision-making.

## 2. Project Status

### Implemented

- Shopping goal and technology familiarity selection
- Rule-based adaptive recommendation-list size
- Personalised shopping summary and explanation
- Show More and Show Fewer controls
- Search, filtering and sorting
- Product details, wishlist and side-by-side comparison
- Demonstration shopping bag
- Recommendation-list feedback
- Browser-based storage of preferences and saved products

### Simulated

- Adaptive AI behaviour through predefined decision rules
- Shopping and purchasing interactions
- Illustrative product prices and ratings

### Unfinished or Outside Scope

- Real purchasing and payment
- Automatic learning from user behaviour
- Persistent evaluation feedback collection
- Formal comparative user evaluation

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| React | Interactive user interface |
| TypeScript | Application logic and data structures |
| Vite | Development server and production build |
| Tailwind CSS / CSS | Interface styling and layout |
| React Context | Shared application state |
| Local Storage | Browser-based data persistence |
| Google AI Studio | AI-assisted prototype development |
| ChatGPT | Design review, documentation and visualisation |

The project uses a deterministic rule-based mechanism rather than a trained machine learning model. Although the exported project includes the Google GenAI SDK, the implemented recommendation mechanism does not require Gemini API calls.

## 4. System Architecture

| Component | Responsibility |
|---|---|
| `src/App.tsx` | Main application structure |
| `src/utils/adaptiveLogic.ts` | Adaptive decision rules |
| `src/context/AppContext.tsx` | Application state and user controls |
| `src/data/products.ts` | Local product information |
| `src/pages/` | Main interface pages |
| `src/components/` | Reusable interface components |
| `src/assets/images/` | Product images |
| `src/index.css` | Interface styling |

### Adaptive Decision Rules

| Shopping Goal | Beginner | Somewhat Familiar | Very Familiar |
|---|---:|---:|---:|
| Ready to buy | 3 | 5 | 7 |
| Just exploring | 8 | 10 | 12 |

Users can increase or decrease the display limit in steps of five, within a minimum of three and a maximum of fifteen products.

## 5. Installation and Running the Application

### Prerequisites

- Node.js and npm compatible with the project's dependencies
- Git
- A modern web browser

### Setup

```bash
git clone https://github.com/nigarmutllimova2-spec/techchoice.git
cd techchoice
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

The implemented rule-based functionality does not require an API key. API credentials should never be committed to the repository.

Keep the terminal running while using the application. Press `Ctrl + C` to stop the development server.

## 6. Development Record

### Stage 1 – Research and Interaction Design

I reviewed literature on choice overload and identified the limitations of fixed-size recommendation lists. This informed my decision to personalise the initial list size using shopping goals and technology familiarity.

### Stage 2 – Adaptive Prototype

I introduced a rule-based mechanism and personalised summary to make the adaptation predictable and understandable. The initial recommendation counts were inspected against the predefined decision rules.

### Stage 3 – User Control

I introduced Show More and Show Fewer because the initial adaptation may not always match the user's needs. A walkthrough demonstrated the recommendation limit increasing from eight to thirteen products.

### Stage 4 – Comparison and Feedback

I included product comparison, wishlist and feedback features to support decision-making and continued exploration. Interface walkthroughs demonstrated side-by-side smartwatch comparison and recommendation-list feedback.

### Stage 5 – Documentation and Submission

I prepared the system diagram, interaction storyboards and design rationale, and uploaded the prototype to GitHub.

Relevant commits:

- [Prototype source code](https://github.com/nigarmutllimova2-spec/techchoice/commit/e7229e9)
- [Project documentation and development record](https://github.com/nigarmutllimova2-spec/techchoice/commit/a90ddd9)

## 7. Testing and Evaluation

The prototype's interaction was examined through illustrative walkthroughs covering:

- A ready-to-buy user receiving five recommendations.
- An exploratory user increasing the recommendation limit from eight to thirteen.
- A user comparing two smartwatches side by side.

These walkthroughs demonstrate system functionality rather than completed participant testing.

A future evaluation would compare adaptive and fixed-size recommendation lists using satisfaction, perceived decision difficulty, interaction effort and product discovery as evaluation measures.

## 8. AI Usage and Verification

Google AI Studio and ChatGPT were used as development and documentation assistants throughout the TechChoice project. The application was developed using an iterative, prompt-based approach (vibe coding), where AI was asked to generate, modify and improve specific parts of the interface, adaptive decision mechanism and product exploration features. I reviewed the generated outputs and requested further changes whenever the functionality or interface did not match my intended design.

ChatGPT was also used to organise the project report, refine academic writing, prepare the README documentation and assist with the creation of the storyboard illustrations. I reviewed and adapted the generated content to ensure that it accurately represented the system's architecture, design decisions, implemented functionality and limitations. The storyboards were developed using actual screenshots and interaction sequences from the TechChoice prototype.

I retained responsibility for the project's design choices, implementation decisions and final submitted content. The generated outputs were checked against the actual prototype, including the adaptive recommendation counts, user controls, product comparison and feedback functionality. AI assistance supported the development process, but the implemented system itself operates using predefined decision rules rather than a trained AI model.

## 9. Additional Files

The system diagram, three interaction storyboards, design rationale and references are included in the separately submitted Assignment 2 report.

The complete source code is available through the repository and its release ZIP archives.

Product images and catalogue data are included within the source code.

## 10. Limitations

The prototype relies on self-reported shopping goals and technology familiarity. The recommendation-list sizes are design assumptions that require further evaluation.

Feedback is held in application state and does not automatically modify the recommendation rules or train an AI model.

The prototype is intended for academic demonstration and research rather than real commercial transactions.
