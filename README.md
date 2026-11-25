# TechChoice – Adaptive Technology Shopping Platform

## Project Overview

TechChoice is an interactive, rule-based shopping prototype developed for the Intelligent Interactive Systems module at the University of Birmingham.

The project explores how adaptive recommendation-list sizes can balance decision effort and product discovery while maintaining user control.

## Research Question

Does adapting recommendation-list size to users' shopping goals and technology familiarity improve the shopping experience compared with a fixed-size recommendation list?

## Implemented Features

- Shopping goal and technology familiarity selection
- Rule-based adaptive recommendation mechanism
- Personalised shopping summary
- Show More and Show Fewer controls
- Product search, filtering and sorting
- Product details
- Side-by-side comparison of up to three products
- Wishlist
- Demonstration shopping bag
- Recommendation-list feedback

## Adaptive Decision Rules

| Shopping Goal | Beginner | Somewhat Familiar | Very Familiar |
|---|---:|---:|---:|
| Ready to buy | 3 | 5 | 7 |
| Just exploring | 8 | 10 | 12 |

Users can manually adjust the number of displayed products between 3 and 15.

## Technologies Used

- React
- TypeScript
- Vite
- CSS

## Running the Project

1. Clone or download the repository.
2. Install Node.js and npm.
3. Open the project directory in a terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL displayed in the terminal.

## Development Record

### Stage 1 – Research and Problem Definition

Reviewed literature on choice overload and recommendation systems. Identified the research gap concerning adaptive recommendation-list sizes and defined the project objectives.

### Stage 2 – Interaction Design

Designed the personalisation process using shopping goal and technology familiarity as the main inputs. Defined the adaptive decision rules and planned the product exploration experience.

### Stage 3 – Prototype Development

Developed the rule-based recommendation mechanism, personalised shopping summary, product catalogue, filtering, sorting and product details.

### Stage 4 – User Control and Feedback

Introduced Show More and Show Fewer controls to make the initial adaptation reversible. Added product comparison, wishlist, demonstration shopping bag and recommendation-list feedback.

### Stage 5 – Documentation and Submission

Prepared the system diagram, three illustrative interaction storyboards, design rationale and project documentation. Uploaded the working prototype to GitHub.

## Implementation Scope and Limitations

The prototype uses implemented decision rules to simulate adaptive AI behaviour rather than a trained machine learning model.

Product prices and ratings are illustrative. The shopping bag is a demonstration feature, and real purchasing and payment are not implemented.

User feedback is collected for evaluation purposes and does not automatically change the recommendation-list size or train an AI model.

## Planned Evaluation

Future evaluation will investigate user satisfaction, perceived decision difficulty, interaction effort and product discovery.

A comparison between adaptive and fixed-size recommendation lists is proposed to evaluate the effectiveness of the adaptive approach.

## Generative AI Acknowledgement

Generative AI was used to support documentation refinement, system diagram visualisation and storyboard illustration. Generated materials were reviewed to ensure they accurately represented the project.
