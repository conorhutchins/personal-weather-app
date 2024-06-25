# Weather Application

## Overview

This is a React app that allows users to view weather information for various cities. It uses a weather API to fetch the latest weather data.

## Features
- **Time Display**: Shows the current time on the header.
- **MainView**: Displays weather conditions for Belfast, Edinburgh, London, and Manchester.
- **DetailsView**: Users can view detailed weather information for each city.

## Getting Started

### Prerequisites
- **Node.js and npm**: Ensure you have both installed. You can download them from [nodejs.org](https://nodejs.org/en).
- **Node Version**: This project requires Node.js version 14.21.3.

### Installation

1. **Clone the repository**:
```bash
   git clone https://github.com/conorhutchins/weather-app.git
 ```
2. **Navigate to the project directory**:
```bash
   cd weather-app
 ```
3. **Install dependencies**:
```bash
   npm install
```
4. **Weather API**:
   - This application uses a public weather API to fetch data.
   - No API key is required. The data is fetched from: [UK Weather JSON](https://raw.githubusercontent.com/WillPlayground/weather-data/main/uk-weather.json)


### Running the Application

1. **Start the development server**:
```bash
   npm start
```
   - Open your browser and go to [http://localhost:3000](http://localhost:3000).

### Testing the Application

1. **Run the tests**:
```bash
   npm run test
 ```
### Building for Production

1. **Create a production build**:
```bash
   npm run build
```
2. **Serve the production build locally (optional)**:
```bash
   npx serve -s build
```
      - Open your browser and go to [http://localhost:5000](http://localhost:5000).

## Known Issues and Warnings

- Ensure your API key from the weather provider is active and has not exceeded its usage limit.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Conor Hutchins**: [conorhutchins@btinternet.com](mailto:conorhutchins@btinternet.com)
- **GitHub**: [conorhutchins](https://github.com/conorhutchins)
