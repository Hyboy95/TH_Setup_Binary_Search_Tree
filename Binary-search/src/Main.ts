import {BinaryTree} from "./BinaryTree";

let tree = new BinaryTree<number>();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);
tree.insert(10);
tree.insert(20);
tree.insert(-1);

console.log(`The number of nodes: ${tree.totalNode}`);
console.log(`Duyệt cây trung thứ tự:`);
tree.inorder(tree.root);
console.log(`Duyệt cây tiền thứ tự:`);
tree.preorder(tree.root);
console.log(`Duyệt cây hậu thứ tự:`);
tree.postorder(tree.root);