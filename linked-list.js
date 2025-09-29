class LinkedList {
  constructor(head) {
    this.head = head;
  }

  append(value) {
    let newNode = new Node();
    newNode.value = value;

    if (this.head === undefined) {
      this.head = newNode;
    } else {
      let currentRef = this.head;
      while (currentRef.nextNode) {
        currentRef = currentRef.nextNode;
      }
      currentRef.nextNode = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node();
    newNode.value = value;

    newNode.nextNode = this.head;
    this.head = newNode;
  }
}

class Node {
  value = null;
  nextNode = null;
}

list = new LinkedList();

list.append("skit");
list.append("big");
list.append("foo");
list.prepend("second");
list.prepend("first");

console.log(list.head.nextNode.nextNode.nextNode.nextNode);
