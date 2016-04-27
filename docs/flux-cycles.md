# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Design Cycles

### Designs API Request Actions

* `fetchAllDesigns`
  0. invoked from `DesignsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/designs` is called. Should not include comments in the request.
  0. `receiveAllDesigns` is set as the callback in ServerActions.

* `createDesign`
  0. invoked from new Design button `onClick` in the navbar component.
  0. `POST /api/designs` is called in ApiUtil.
  0. `receiveSingleDesign` is set as the callback.

* `fetchSingleDesign`
  0. invoked from `DesignShow` `didMount`/`willReceiveProps`
  0. `GET /api/design/:designId` is called.
  0. `receiveSingleDesign` is set as the callback, comes with comments.

* `editDesign`
  0. invoked from `DesignForm` `onSubmit`
  0. `PATCH /api/designs/:designId` is called.
  0. `receiveSingleDesign` is set as the callback.

* `destroyDesign`
  0. invoked from delete Design button `onClick` on Design Show if current_user is owner
  0. `DELETE /api/designs/:id` is called.
  0. `removeDesign` is set as the callback.

### Designs API Response Actions

* `receiveAllDesigns`
  0. invoked from an API callback.
  0. `Design` store updates `_designs` and emits change.

* `receiveSingleDesign`
  0. invoked from an API callback.
  0. `Design` store updates `_designs[id]` and emits change.

* `removeDesign`
  0. invoked from an API callback.
  0. `Design` store removes `_designs[id]` and emits change.

### Store Listeners

* `DesignsIndex` component listens to `Design` store.
* `DesignsShow` component listens to `Design` store.
