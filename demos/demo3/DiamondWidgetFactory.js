/* @flow */

// src
import * as SRD from "../../src/main";
import {DiamonNodeWidgetFactory} from "./DiamondNodeWidget";

export class DiamondWidgetFactory extends SRD.NodeWidgetFactory{
	constructor(){
		super('diamond');
	}
	
	generateReactWidget(diagramEngine:SRD.DiagramEngine, node:SRD.NodeModel) {
		return DiamonNodeWidgetFactory({ node });
	}
}
