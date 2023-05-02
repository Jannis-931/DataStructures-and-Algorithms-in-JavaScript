class CircularLinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // insert value tail of the list
  insert(val) {
    const node = new CircularLinkedListNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    node.next = this.head;
    this.tail = node;

    this.size++;
  }

  // delete node a particular value
  delete(val) {
    let node = this.head;
    if (node === null) {
        return;
    }

    if (node.value === val) {
        this.head = this.head.next;
        this.tail.next = this.head;
        return;
    }

    do {
        let n = node.next;
        if (n.value === val) {
            node.next = n.next;
            break;
        }
        // otherwise keep moving forward
        node = node.next;
    } while (node !== this.head);
  }

  // Print the list values
  printList() {
    if (this.head === null) {
      console.log("The list is empty");
      return;
    }
    let curr = this.head;
    let str = "";
    do {
      str += curr.value + " -> ";
      curr = curr.next;
    } while (curr !== this.head);
    console.log(str + 'HEAD');
  }
}

const circularLinkedList = new CircularLinkedList();
circularLinkedList.insert(23);
circularLinkedList.insert(3);
circularLinkedList.insert(19);
circularLinkedList.insert(75);
circularLinkedList.printList();
circularLinkedList.delete(75);
circularLinkedList.printList();
