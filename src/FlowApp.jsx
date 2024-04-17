import React from "react";
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Panel,
  useReactFlow,
} from "reactflow";
import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { tw } from "twind";
import Osc from "./nodes/Osc";
import Amp from "./nodes/Amp";
import Out from "./nodes/Out";

import "reactflow/dist/style.css";

const nodeTypes = {
  osc: Osc,
  amp: Amp,
  out: Out,
};

const selector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onNodesDelete: store.onNodesDelete,
  onEdgesChange: store.onEdgesChange,
  onEdgesDelete: store.onEdgesDelete,
  addEdge: store.addEdge,
  addOsc: () => store.createNode("osc"),
  addAmp: () => store.createNode("amp"),
});

export default function App() {
  const store = useStore(selector, shallow);
  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={store.nodes}
      edges={store.edges}
      onNodesChange={store.onNodesChange}
      onNodesDelete={store.onNodesDelete}
      onEdgesChange={store.onEdgesChange}
      onEdgesDelete={store.onEdgesDelete}
      onConnect={store.addEdge}
      fitView
    >
      <Panel className={"space-x-4"} position="top-right">
        <button
          className={"px-2 py-1 rounded bg-blue-200 shadow"}
          onClick={store.addOsc}
        >
          Add Osc
        </button>
        <button
          className={"px-2 py-1 rounded bg-slate-300 shadow"}
          onClick={store.addAmp}
        >
          Add Amp
        </button>
      </Panel>
      <Background />
    </ReactFlow>
  );
}
