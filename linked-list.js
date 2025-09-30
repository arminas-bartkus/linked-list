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

  size() {
    let currentRef = this.head;
    let counter = 1;
    while (currentRef.nextNode) {
      counter += 1;
      currentRef = currentRef.nextNode;
    }
    return counter;
  }

  returnHead() {
    return this.head;
  }

  returnTail() {
    let currentRef = this.head;

    while (currentRef.nextNode) {
      currentRef = currentRef.nextNode;
    }
    return currentRef;
  }

  at(index) {
    let currentSize = this.size();
    if (index >= currentSize) {
      return "Error";
    }

    let currentRef = this.head;
    let indexNotMet = true;
    let counter = 1;
    while (indexNotMet) {
      if (counter !== index + 1) {
        currentRef = currentRef.nextNode;
        counter += 1;
      } else {
        indexNotMet = !indexNotMet;
      }
    }
    return currentRef;
  }

  pop() {
    let currentRef = this.head;

    while (currentRef.nextNode) {
      if (currentRef.nextNode.nextNode === null) {
        currentRef.nextNode = null;
        return this;
      } else {
        currentRef = currentRef.nextNode;
      }
    }
  }

  contains(value) {
    let currentRef = this.head;
    while (currentRef.nextNode) {
      if (currentRef.value === value) {
        currentRef = currentRef.nextNode;
        return true;
      } else {
        currentRef = currentRef.nextNode;
      }
    }
    if (currentRef.value === value) return true;
    else return false;
  }

  find(value) {
    let foundIndex = 0;
    let currentRef = this.head;

    while (currentRef.nextNode) {
      if (currentRef.value === value) {
        return foundIndex;
      } else {
        currentRef = currentRef.nextNode;
        foundIndex += 1;
      }
    }
    if (currentRef.value === value) {
      return foundIndex;
    } else {
      return null;
    }
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
list.pop();
console.log(list.contains("foo"));
console.log(list.find("big"));
