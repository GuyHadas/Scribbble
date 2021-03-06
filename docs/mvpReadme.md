# Scribbble

[Check out Scribbble][heroku]

[heroku]: https://scribbble.herokuapp.com/

## Minimum Viable Product

Scribbble is a web application that will allow the design community to give feedback throughout their design process. Scribbble is inspired by Dribbble.com and will be built using Ruby on Rails and React.js. It will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a Dribbble-inspired site: Uploading of designs and saving, design title/description editing.
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, that will eventually replace this README.

## Product Goals and Priorities

Scribbble will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete designs (MVP)
- [ ] Include an ability to show a specific design (MVP)
- [ ] Allow for comments on designs (expected feature, but not MVP)
- [ ] Comments have unique styling relative to positions on the design (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (1 day)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin using FrontEnd Auth
- [ ] blank landing page after signin

### Phase 2: Design Model, API, and basic APIUtil and Router (2 days)

**Objective:** Designs can be created, read, edited and destroyed through
the API.

- [ ] create `Design` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for designs (`DesignController`)
- [ ] jBuilder views for Designs
- [ ] setup Webpack and npmInstalls
- [ ] setup Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] setup Design Flux Loop, except for components
- [ ] setup React Router
- [ ] test out API interaction in the console.
- [ ] integrate Cloudinary for image uploading

### Phase 3: Flux Design Components (1 day)

**Objective:** Designs can be created, read, edited and destroyed with the
user interface.

- implement each Design component
  - [ ] `DesignsIndex`
  - [ ] `DesignsIndexItem`
  - [ ] `DesignShow`
  - [ ] `DesignCreateForm`
  - [ ] `DesignEditForm`

### Phase 4: Basic Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Comments (2 days)

**Objective:** Comments belong to Designs, only viewable on Design Show page.

- [ ] create `Comment` model
- build out API, Flux loop, and components for:
  - [ ] Comment CRUD
  - [ ] Comment components tie into Design Show
- Use CSS to style new views


### Phase 6: Prettify Site (1.5 days)

**Objective:** All views are designed to be clean and final.

- [ ] Home Page layout made
- [ ] Navbar component created and designed
- [ ] Design CRUD styles are finalized
- [ ] Comment Styles are finalized
- [ ] Seed the database with assortment of designs and comments

### Phase 7: UX Features (1 day)

**objective:** Implement various UX features

- [ ] When on Design show, can navigate to previous/next design in index
- [ ] Demo sign in updates as the username/password is typed in
- [ ] Hover on Designs index brings up preview of design title/description
- [ ] Add transitions, modals, and other styling flourishes
- [ ] Mobile responsive using Bootstraps classes
- [ ] Add loading gif throughout site

### Bonus Features (TBD)
- [ ] Designs have Tags and Taggings and are searchable.
- [ ] Allow User to filter index to only designs they've created.
- [ ] Pagination / infinite scroll for Designs Index
- [ ] Additional UX features
- [ ] Add ability to like designs and comments

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

### Phase Details
* [Phase One][phase-one]
* [Phase Two][phase-two]
* [Phase Three][phase-three]
* [Phase Four][phase-four]
* [Phase Five][phase-five]
