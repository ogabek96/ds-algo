class Node {
  data = null;
  next = null;
  constructor(data) {
      this.data = data;
  }
}
class Queue {
  head = null;
  tail = null;

  isEmpty() {
      return this.head === null;
  }
  peek() {
      return this.head.data;
  }
  add(data){
      const node = new Node(data);
      if(this.tail !== null) {
          this.tail.next = node;
      }
      this.tail = node;
      if(this.head === null) {
          this.head = node;
      }
  }
  remove() {
      this.data = this.head.data;
      this.head = this.head.next;
      if(this.head === null) {
          this.tail = null;
      }
      return this.data;
  }
}