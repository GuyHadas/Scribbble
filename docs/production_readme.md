# Scribbble

[Scribbble][heroku] is a web application that allows the design community to give feedback throughout their design process. Inspired by Dribbble.com, Scribbble is built using Ruby on Rails on the backend, React.js with a Flux architectural framework  the frontend, and a PostgreSQL database.


[heroku]: http://www.scribbble.herokuapp.com

##Scribbble Features

* Secure user authentication and easy access to explore Scribbble via a demo account
* Adding new designs to share your current portfolio pieces
* Browse user uploaded designs
* Guided features tour for experimental UX
* View Comments along with a pointer to where they live on the design
* Comment creation via a location on the design


## Scribbble Walk-through

### Scribbble Splash Page

![splash]
[splash]: ./screenshots/splash.png

Scribbble's home page layout is intended to immerse the visitor into a colorful and beautiful world that illustrates the work of Scribbble's community.

Scribbble handles secure user authentication and a demo account for quick accessibility to explore. Scribbble is a single-page application in which the root page renders the splash page when 'UserStore.currentUser()' returns nil, and renders the index page otherwise. Various error messages are easily accessible across components via the 'ErrorStore'.

Allowing for multiple sessions creates a bug-free experience regardless of the amount of people using the demo account.

#### Sample Authentication Code Snippets

```ruby
class Api::SessionsController < ApplicationController

  ...

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login_user!(@user)
      render :show
    else
      @errors = ["Invalid Username or Password"]
      render :show, status: 401
    end
  end

end

class ApplicationController < ActionController::Base

  ...

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login_user!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout_user!
    if current_user
      current_user.reset_session_token!
    end
    session[:session_token] = nil
  end


end

class User < ActiveRecord::Base

  ...

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

end

```

### Design creation and browsing

![designIndex]
[designIndex]: ./screenshots/designIndex.png

![designCreation]
[designCreation]: ./screenshots/designCreation.png

Designs are created and hosted on Cloudinary through their API. The 'DesignIndex' component renders individual 'DesignCard' components which takes the visitor to an individual 'DesignShow' component.

The 'DesignIndex' listens for changes in the 'UserStore' and 'DesignStore' to decide whether to send the visitor back to the home page on logout and which designs to show in the index respectively.

#### Sample Design Index/Creation Code Snippets

```ruby
var DesignIndex = React.createClass({

...

componentDidMount: function() {
  this.designStoreListener = DesignStore.addListener(this.__onDesignsChange);
  this.userStoreListener = UserStore.addListener(this.__onUserChange);
  ClientActions.fetchDesigns();

  if (!this.state.currentUser) {
    HashHistory.push("/");
  }

  if (this.props.params.designId) {
    HashHistory.push("/designs/" + this.props.params.designId);
  }

  $('body').scrollTop(0);
},

__onDesignsChange: function() {
  this.setState({designs: DesignStore.all()});
},

__onUserChange: function() {
  this.setState({ currentUser: UserStore.currentUser() });
},

...

render: function() {
  var designIndexList = this.state.designs.map(function(design) {
    return <DesignCard key={design.id} design={design}/>;
  });

  return (
  <ul className={"design-index-list"}>
    {designIndexList}
  </ul>
  );
}
});

```

### Notebooks

Implementing Notebooks started with a notebook table in the database.  The `Notebook` table contains two columns: `title` and `id`.  Additionally, a `notebook_id` column was added to the `Note` table.  

The React component structure for notebooks mirrored that of notes: the `NotebookIndex` component renders a list of `CondensedNotebook`s as subcomponents, along with one `ExpandedNotebook`, kept track of by `NotebookStore.selectedNotebook()`.  

`NotebookIndex` render method:

```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
```

### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](https://github.com/appacademy/sample-project-proposal/blob/master/docs/tagScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
