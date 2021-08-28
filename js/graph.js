function setNodes(params) {
    let tmp=[];
    for (let index = 0; index < 10; index++) {
        tmp.push({id: index, label: alphabet[index], shape: "circle"});
    }
    tmp.push({id: 10, label: "ini", shape: "circle", color: "orange", fixed: true, font: { size: 30 }});
    for (let index = 11; index < 20; index++) {
        tmp.push({id: index, label: alphabet[index], shape: "circle", color: "lime", font: { size: 30 }});
    }
    for (let index = 20; index < alphabet.length; index++) {
        tmp.push({id: index, label: alphabet[index], shape: "circle"});
    }

    return tmp;
}

function setEdges(params) {
    let tmp=[];
    for (let index = 0; index < alphabet.length; index++) {
        for (let index2 = 0; index2 < alphabet.length; index2++) {
            if (delta[index][index2] == 1) {
                tmp.push({from: index, to: index2, arrows: "to"});
            }
        }
    }
    return tmp;
}

function clusterByHubsize() {
    network.setData(data);
    var clusterOptionsByData = {
      processProperties: function (clusterOptions, childNodes) {
        clusterOptions.label = "[" + childNodes.length + "]";
        return clusterOptions;
      },
      clusterNodeProperties: {
        borderWidth: 3,
        shape: "box",
        font: { size: 30 },
      },
    };
    network.clusterByHubsize(undefined, clusterOptionsByData);
  }

  function clusterByCid() {
    network.setData(data);
    var clusterOptionsByData = {
      joinCondition: function (childOptions) {
        return childOptions.id > 20;
      },
      clusterNodeProperties: {
        id: "cidCluster",
        borderWidth: 3,
        label: "letras",
        shape: "circle",
      },
    };
    network.cluster(clusterOptionsByData);
  }


var n = setNodes(); 
var e = setEdges();
// create an array with nodes
var nodes = new vis.DataSet(n);

// create an array with edges
var edges = new vis.DataSet(e);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    nodes: {
      shape: "circle",
      scaling: {
        min: 10,
        max: 30,
      },
      font: {
        size: 12,
        face: "Tahoma",
      },
    },
    edges: {
      width: 0.15,
      color: { inherit: "from" },
      smooth: {
        type: "continuous",
      },
    },
    physics: {
      stabilization: true,
      barnesHut: {
        gravitationalConstant: -80000,
        springConstant: 0.001,
        springLength: 200,
      },
    },
    interaction: {
      tooltipDelay: 200,
      hideEdgesOnDrag: true,
    },
  };

// initialize your network!
var network = new vis.Network(container, data, options);
network.on("selectNode", function (params) {
    if (params.nodes.length == 1) {
      if (network.isCluster(params.nodes[0]) == true) {
        network.openCluster(params.nodes[0]);
      }
    }
});

clusterByCid();
