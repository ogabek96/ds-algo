/**
 * Binary search tree using ES6 classes.
 */
class Node {
  left = null;
  right = null;
  data = null;

  constructor(data) {
      this.data = data;
  }

  insert(value) {
      if(value <= this.data) {
          if(this.left === null) {
              this.left = new Node(value);
          } else {
              this.left.insert(value);
          }
      } else {
          if(this.right === null) {
              this.right = new Node(value);
          } else {
              this.right.insert(value);
          }
      }
  }
  contains(value) {
      if(value === this.data) return true;
      if(value < this.data) {
          if(this.left === null) {
              return false;
          } else {
              return this.left.contains(value);
          }
      } else {
          if(this.right === null) {
              return false;
          } else {
              return this.right.contains(value);
          }
      }
  }
  print() {
      if(this.left !== null) {
          this.left.print();
      }
      console.log(this.data);
      if(this.right !== null) {
          this.right.print();
      }
  }
}