//= require ./ModalMixin

var ExampleModal = React.createClass({
  mixins: [BootstrapModalMixin]
 
, render: function() {
    var buttons = this.props.buttons.map(function(button) {
      return <button type="button" className={'btn btn-' + button.type} onClick={button.handler}>
        {button.text}
      </button>
    })
 
    return <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            {this.renderCloseButton()}
            <strong>{this.props.header}</strong>
          </div>
          <div className="modal-body row">
            {this.props.children}
          </div>
          <div className="modal-footer">
            {buttons}
          </div>
        </div>
      </div>
    </div>
  }
})