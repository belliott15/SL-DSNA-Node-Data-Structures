class BinaryTreeNode {
    constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
}}

class BinaryTree{
    constructor(val){
        this.root = new BinaryTreeNode(val);
    } 
}