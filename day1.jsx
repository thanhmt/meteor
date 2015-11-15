//DB
//Tasks = new Mongo.Collection("tasks");
if (Meteor.isClient) {
  // This code is executed on the client only
 
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
    React.render(<BingWall />, source="http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US");
  });
}