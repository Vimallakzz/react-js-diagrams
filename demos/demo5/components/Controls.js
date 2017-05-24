import React from 'react';

export class Controls extends React.Component {
  render() {
    const { selectedNode, onUndo, onRedo, canUndo, canRedo,
			disableInteractionZoom, onChangeDisableInteractionZoom
		} = this.props;
    const content = selectedNode ? JSON.stringify(selectedNode.serialize(), null, 2) : '';

  	return (
  	  <div className='controls'>
  	    <div>
  	      <button onClick={onUndo} disabled={!canUndo}>Undo</button>
  	      <button onClick={onRedo} disabled={!canRedo}>Redo</button>
  	    </div>
				<div>
					<label><input type="checkbox" checked={disableInteractionZoom} onChange={onChangeDisableInteractionZoom}/> disableInteractionZoom</label>
				</div>
  	    <pre>
  	      {content}
  	    </pre>
    	</div>
  	);
  }
}
