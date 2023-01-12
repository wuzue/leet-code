// 1791. Find Center of Star Graph

// There is an undirected star graph consisting of n nodes labeled from 1 to n. 
// A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.
// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  let resArr = []
  let res = []
  let toArr = edges.toString().split(' ')
  for (let i = 0; i < edges.length; i++){
    resArr.push(toArr[i])
    if(resArr.includes(toArr[i])){
      res.push(toArr[i])
    }
  }
  console.log(res);
};

findCenter([[1,2], [5,1], [1,3], [1,4]])