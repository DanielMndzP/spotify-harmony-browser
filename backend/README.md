# Spotify API Backend

Spring Boot backend for Spotify Web API integration.

## Setup
1. Configure Spotify credentials in application.yml
2. Run `./gradlew bootRun`

## API Endpoints
- POST /api/auth/login - Spotify OAuth login
- GET /api/user/profile - Get user profile
- GET /api/user/top-tracks - Get user's top tracks
- GET /api/user/top-artists - Get user's top artists
- GET /api/search - Search Spotify content