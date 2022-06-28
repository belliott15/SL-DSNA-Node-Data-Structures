class BinaryTreeNode {
    constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
}};

 


class BinaryTree{
    constructor(val){
        this.root = new BinaryTreeNode(val);
    } 
  insert(letter){
   const newNode = new BinaryTreeNode(letter);

   if (this.root === null) {
     this.root = newNode;
   } else {
    this.insertNode(this.root, newNode);
   }
  }
insertNode(current, newNode) {
        if (newNode.value < current.value){
            if (current.left === null) {
                current.left = newNode;
            } else {
                this.insertNode(current.left, newNode);
            }
        } else { 
            if (current.right === null) {
                current.right = newNode;
            } else {
                this.insertNode(current.right, newNode);
            }
    }
}
}

const B = new BinaryTree("B");
const A = new BinaryTree("A");
const C = new BinaryTree("C");
const D = new BinaryTree("D");
// console.log('B', B);
B.insert(A)
// console.log('B', B);
B.insert(C);
B.insert(D);
console.log('B', B);


