# Phase 2: Design Model, API, and basic APIUtil and Router (2 days)

## Rails
### Models
* Design

### Controllers
* Api::DesignsController

### Views
* index.json.jbuilder
* show.json.jbuilder

## Flux
### Views (React Components)


### Stores
* DesignStore

### Actions
* ServerActions.receiveAllNotes -> triggered by ApiUtil, sends dispatch
* ServerActions.receiveSingleNote -> triggered by ApiUtil, sends dispatch
* ServerActions.deleteNote -> triggered by ApiUtil, sends dispatch
* ClientActions.fetchAllDesigns -> triggers ApiUtil
* ClientActions.fetchSingleDesign -> triggers ApiUtil
* ClientActions.createDesign -> triggers ApiUtil
* ClientActions.editDesign -> triggers ApiUtil
* ClientActions.destroyDesign -> triggers ApiUtil

### ApiUtil
* ApiUtil.fetchAllDesigns
* ApiUtil.fetchSingleDesigns
* ApiUtil.createDesign
* ApiUtil.editDesign
* ApiUtil.destroyDesign

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
