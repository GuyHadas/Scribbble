# Scribbble

[Scribbble][heroku] is a web application that allows the design community to give feedback throughout their design process. Inspired by Dribbble.com, Scribbble is built using Ruby on Rails on the backend, React.js with a Flux architectural framework  the frontend, and a PostgreSQL database.


[heroku]: http://www.scribbble.herokuapp.com

##Scribbble Features

* Secure user authentication and easy access to explore Scribbble via a demo account
* Adding new designs to share your current portfolio pieces
* Browse user uploaded designs
* Guided tour showcasing experimental UX features
* View Comments along with a pointer to where they live on the design
* Comment creation via a location on the design


## Scribbble Walk-through

### Scribbble Splash Page

Scribbble's home page layout is intended to immerse the visitor into a colorful and beautiful world that illustrates the work of Scribbble's community.

Scribbble handles secure user authentication and a demo account for quick accessibility to explore. Scribbble is a single-page application in which the root page renders the splash page when 'UserStore.currentUser()' returns nil, and renders the index page otherwise. Various error messages are easily accessible across components via the 'ErrorStore'.

Allowing for multiple sessions creates a bug-free experience regardless of the amount of people using the demo account.

![splash]
[splash]: ./screenshots/splash.png


#### Sample Authentication Code Snippets

```ruby
class Api::SessionsController < ApplicationController

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

  ...

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

  ...

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

  ...

end

```

### Design creation and browsing

Scribbble takes advantage of Cloudinary's API to upload and host images. The 'DesignIndex' component renders individual 'DesignCard' components which takes the visitor to an individual 'DesignShow' component.

The 'DesignIndex' listens for changes in the 'UserStore' and 'DesignStore' to decide whether to send the visitor back to the home page on logout and which designs to show in the index respectively.


![designIndex]
[designIndex]: ./screenshots/designIndex.png

![designCreation]
[designCreation]: ./screenshots/designCreation.png

#### Sample Design Index/Creation Code Snippets

```javascript
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

### Individual Design Page

The 'DesignShow' show component is optimized for multiple screen sizes taking advantage of CSS' media queries. It also contains a guided tour to teach the user how to best interact with the unique comments feature.

'DesignShow' is a react intensive component that optimizes it's look and experience for several potential states.

![designShow]
 [designShow]: ./screenshots/designShow.png

![designWalkthrough]
[designWalkthrough]: ./screenshots/designWalkthrough.png

#### Sample Design Show

```javascript
var DesignShow = React.createClass({

  ...

  prevDesignHandler: function() {
    var prevDesignIdx = this.designs.indexOf(this.state.design) - 1;
    if (prevDesignIdx < 0) {
      var prevDesignId = this.designs[this.designs.length - 1].id.toString();
    } else {
      prevDesignId = this.designs[prevDesignIdx].id.toString();
    }

    HashHistory.push("/designs/" + prevDesignId);
  },

  nextDesignHandler: function() {
    var nextDesignIdx = this.designs.indexOf(this.state.design) + 1;

    if (nextDesignIdx === this.designs.length) {
      var nextDesignId = this.designs[0].id;
    } else {
      nextDesignId = this.designs[nextDesignIdx].id.toString();
    }

    HashHistory.push("/designs/" + nextDesignId);
  },

  ...

  openCommentForm: function(e) {
    $('body').off('keydown', this.handleKey);

    this.xPos = Math.floor(e.pageX - $("#design-img").offset().left);
    this.yPos = Math.floor(e.pageY - $("#design-img").offset().top);

    this.setState({
      commentFormOpen: true,
      commentFormPos: [this.xPos, this.yPos]
    });
  },

  closeCommentForm: function() {
    this.setState({ commentFormOpen: false});
    $('body').on('keydown', this.handleKey);
  },

  ...

  if (this.state.commentPos.length > 0) {
    //adjust position for image size
    var left = this.state.commentPos[0] - 13;
    var top = this.state.commentPos[1] - 25;

    var commentPin = <img
      src="yellowPin.svg"
      id="yellow-comment-pin"
      className="hvr-pulse"
      style={{
        width: "25px",
        height: "25px",
        left: left,
        top: top,
        position: "absolute",
      }}/>;
  } else {
    commentPin = <img
      src="yellowPin.svg"
      id="yellow-comment-pin"
      className="hvr-pulse"
      style={{
        opacity: "0",
        width: "25px",
        height: "25px",
        left: 0,
        top: 0,
        position: "absolute",
      }}/>;
  }

  if (this.state.commentFormOpen) {
    var commentForm = <CommentForm
      closeCommentForm={this.closeCommentForm}
      xPos={this.xPos}
      yPos={this.yPos}
      designId={this.state.design.id}
      userId={this.state.currentUser.user.id}
      />;
    //adjust position for image size
    var leftFormPin = this.state.commentFormPos[0] - 13;
    var topFormPin = this.state.commentFormPos[1] - 25;
    var commentFormPin = <img
      className="hvr-pulse"
      src="greenPin.svg"
      style={{
        width: "25px",
        height: "25px",
        left: leftFormPin,
        top: topFormPin,
        position: "absolute",
      }}/>;
    var designUrlShadow = "0px 6px 20px 0px rgba(0,0,0,0.75)";
  }

...
});
```

### Comments

Scribbble comments are unique, each one lives at a specific spot on their respective design. Hovering over comments in the 'commentBox' displays their location on the design while clicking on the design creates a comment at that location.

Green comment pins reference a comment being created, while yellow comment pins reference a comment being viewed.

In addition to having body, design_id, and user_id columns in the database, comments contain X and Y coordinates that eventually pertain to their parent div (the design they belong to).

Scribbble's API efficiently returns each designs' comments through a single query to the database.

Ex. Comment Box
![commentBox]
[commentBox]: ./screenshots/commentBox.png

![commentPins]
[commentPins]: ./screenshots/commentPins.png


## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
