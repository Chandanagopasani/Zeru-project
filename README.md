# EigenLayer Restaking API

This project exposes restaking data from EigenLayer using Node.js and MongoDB.

## Endpoints

- `GET /restakers` — list of all restakers
- `GET /validators` — list of validators and their status
- `GET /rewards/:address` — reward insights for a wallet address

## Getting Started

```bash
git clone <repo-url>
cd eigenlayer-restaking-api
npm install
npm run dev
