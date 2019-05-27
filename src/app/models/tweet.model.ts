export class Tweet {
  private _id: Number;
  private _user: String;
  private _content: String;
  private _responses: String[];
  private _date: Date;
  public comments: Comment[];
  private picture: String;

  constructor(id, user, content, date, responses?) {
    this._id = id;
    this._user = user;
    this._content = content;
    this._responses = responses;
    this._date = date;
    this.comments = [];
  }
  addComment(comment: String) {
    var CL;
    if (!this.comments) {
      CL = 0;
    } else {
      CL = this.comments.length + 1;
    }
    var newComment = new Comment(CL, "username", comment);
    this.comments.push(newComment);
  }

  getID() {
    return this._id;
  }
  getUser() {
    return this._user;
  }
  getDate() {
    return this._date;
  }
  getContent() {
    return this._content;
  }
  getComments() {
    return this.comments;
  }
}

export class Comment {
  private _id: String;
  private _user: String;
  private _createdAt: Date;
  private _body: String;
  private commenterPicture: String;

  constructor(id, user, body) {
    this._id = id;
    this._body = body;
    this._user = user;
    this._createdAt = new Date();
    this.commenterPicture = "http://via.placeholder.com/20x20";
  }
  id() {
    return this._id;
  }
  user() {
    return this._user;
  }
  date() {
    return this._createdAt;
  }
  body() {
    return this._body;
  }
  picture() {
    return this.commenterPicture;
  }
}
