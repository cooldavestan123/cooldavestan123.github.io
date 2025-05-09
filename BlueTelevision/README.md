# BlueTelevision

BlueTelevision is a web application that allows users to watch, search, and manage videos similar to YouTube. This project is built using TypeScript and follows a modular architecture for better maintainability and scalability.

## Features

- Video playback with controls (play, pause, load)
- Search functionality to find videos
- Display of video lists
- Responsive design for various devices

## Project Structure

```
BlueTelevision
├── src
│   ├── app.ts                # Entry point of the application
│   ├── components            # UI components
│   │   ├── VideoPlayer.ts    # Video player component
│   │   ├── VideoList.ts      # Video list component
│   │   └── SearchBar.ts      # Search bar component
│   ├── services              # API and service layer
│   │   ├── api.ts            # API calls
│   │   └── videoService.ts   # Video data service
│   ├── models                # Data models
│   │   └── Video.ts          # Video model
│   ├── routes                # Application routes
│   │   └── index.ts          # Route definitions
│   └── utils                 # Utility functions
│       └── helpers.ts        # Helper functions
├── public
│   ├── index.html            # Main HTML file
│   └── styles.css            # Application styles
├── package.json              # npm configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/BlueTelevision.git
   ```
2. Navigate to the project directory:
   ```
   cd BlueTelevision
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.