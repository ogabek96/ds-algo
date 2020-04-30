class Node {
  data = null;
  next = null;
  constructor(data) {
      this.data = data;
  }
}

class Stack {
  top = null;
  isEmpty() {
      return this.top === null; 
  }
  peek() {
      return this.top.data;
  }
  push(data) {
      const node = new Node(data);
      node.next = this.top;
      this.top = node;
  }
  pop() {
      const data = this.top.data;
      this.top = this.top.next;
      return data;
  }
}