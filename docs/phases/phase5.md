# Phase 5: Comments (2 days)

## Rails
### Models
* Comments

### Controllers
* Api::CommentsController (create, destroy, index, show, update)

### Views
* reminders/show.json.jbuilder

## Flux
### Views (React Components)
* DesignShow includes CommentsIndex
  - CommentsIndexItem
* DesignShow includes CommentShow
* DesignShow includes CommentForm

### Stores


### Actions
* ServerActions.receiveSingleComment
* ServerActions.deleteComment
* ClientActions.createComment
* ClientActions.updateComment
* ClientActions.destroyComment

### ApiUtil
* ApiUtil.createComment
* ApiUtil.updateComment
* ApiUtil.destroyComment

## Gems/Libraries
