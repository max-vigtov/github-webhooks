# GitHub Webhooks Handler

A Node.js application that processes GitHub webhooks and integrates with Discord for notifications. Built with TypeScript and Express.js, this service provides a secure and efficient way to handle GitHub events and forward them to Discord channels.

## Features

- 🔒 Secure webhook handling with SHA-256 signature verification
- 🔄 Real-time GitHub event processing
- 💬 Discord integration for notifications
- 🛠 Built with TypeScript for better type safety and maintainability
- ⚡ Express.js for high-performance API handling

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Discord API Integration
- GitHub Webhooks API

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your environment variables
4. Run in development: `npm run dev`
5. Build and run: `npm run build && npm start`

## Environment Variables

The following environment variables are required:
- `PORT`: Server port number
- `GITHUB_SECRET`: GitHub webhook secret
- `DISCORD_WEBHOOK_URL`: Discord webhook URL

## License

ISC
