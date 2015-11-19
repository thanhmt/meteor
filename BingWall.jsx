var source="http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US";
BingWall = React.createClass({
  componentDidMount: function() {
     $.ajax({
        url: source,
        type: "GET",
        dataType: 'json',
        success: function(data) {
          this.setState({data: data});
          console.log(this.state.data);
        }.bind(this)
      });

  },
  getInitialState: function() {
    return {data: {}};
  },
  render: function() {
    return (
      <div>
      <img src={false}/>
      </div>
    );
  }
});
