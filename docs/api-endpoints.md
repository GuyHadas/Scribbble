# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Designs

- `GET /api/designs`
  - Designs index
  - accepts pagination params (if I get there)
- `POST /api/designs`
- `GET /api/designs/:id`
  - Returns design's comments as well.
- `PATCH /api/designs/:designId`
- `DELETE /api/designs/:designId`

### Comments
- `GET /api/designs/:designId/comments/:commentId`
- `POST /api/designs/:designId/comments`
- `PATCH /api/designs/:designId/comments/:commentId`
