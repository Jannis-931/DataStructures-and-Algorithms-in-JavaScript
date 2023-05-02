class DoublyLinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    // this.tail = null;
    this.size = 0;
  }

  // return head of the list
  getHead() {
    return this.head.value;
  }

  // return tail of the list
  getTail() {
    return this.tail.value;
  }

  //return last node of the list
  getLast() {
    if (this.head.next === null) {
      return this.head.value;
    }

    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    return last.value;
  }

  // return size of the list
  getSize() {
    return this.size;
  }

  // return list is empty or not
  isEmpty() {
    return this.size === 0;
  }

  // insert element head of the list
  insertFirst(val) {
    const node = new DoublyLinkedListNode(val);
    node.next = this.head;
    node.prev = null;
    // head maybe null if you're inserting it for the very first time
    // hence this will give error
    if (this.head !== null) {
      // or (this.head)
      this.head.prev = node;
    }
    this.head = node;

    this.size++;
  }

  // insert element end of the list
  insertLast(val) {
    if (this.head === null) {
      this.insertFirst();
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    const node = new DoublyLinkedListNode(val);
    curr.next = node;
    node.prev = curr;
    node.next = null;

    this.size++;
  }

  // insert elemet at particular index
  insertAt(val, index) {
    if (index === 0) {
      this.insertFirst(val);
      return;
    }

    if (index === this.size) {
      this.insertLast(val);
      return;
    }

    let prev = null;
    let curr = this.head;
    let i = 0;
    while (curr !== null && i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    const node = new DoublyLinkedListNode(val);
    prev.next = node;
    node.prev = prev;
    node.next = curr;
    if (curr !== null) {
      curr.prev = node;
    }
    // curr.prev = node;

    this.size++;
  }

  // insert value after some given node
  insertAfter(val, after) {
    const p = this.find(after);

    if (p === null) {
        console.log('does not exit');
        return;  // if not give 'return' than it's give error
    }

    const node = new DoublyLinkedListNode(val);
    node.next = p.next;
    p.next = node;
    node.prev = p;
    if (node.next !== null) {
        node.next.prev = node;
    }
    this.size++;
  }


  // find a value
  find(val) {
    let curr = this.head;
    while (curr) {
        if (curr.value === val) {
            return curr;
        }
        curr = curr.next;
    }
    return null
  }

  // remove head of the list and return it
  deleteFirst() {
    const val = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;

    this.size--;
    return val;
  }

  // remove last element of the list
  deleteLast() {
    if (this.size <= 1) {
        this.deleteFirst();
        return;
    }

    let prev = null;
    let curr = this.head;
    while (curr.next) {
        prev = curr;
        curr = curr.next;
    }

    const val = curr.value;
    prev.next = null;
    this.size--;
    return val;
  }

  // print list
  printList() {
    let curr = this.head;
    let str = '';
    while (curr) {
        str += curr.value + ' -> ';
        curr = curr.next;
    }
    console.log(str + 'END')
  }

  // reverse doubly linked list
  reverseList() {
    let last = null;
    let curr = this.head;
    let str = '';
    while (curr) {
        last = curr;
        curr = curr.next;
    }

    while (last) {
        str += last.value + ' -> ';
        last = last.prev;
    }
    console.log(str + 'START');
  }

}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertFirst(3);
doublyLinkedList.insertFirst(2);
doublyLinkedList.insertFirst(8);
doublyLinkedList.insertFirst(17);
doublyLinkedList.printList();
// console.log(doublyLinkedList.getLast());
// doublyLinkedList.printReverse();
// doublyLinkedList.insertLast(20);
// doublyLinkedList.printList();
// doublyLinkedList.insertAt(20, 0);
// doublyLinkedList.printList();
// doublyLinkedList.insertAfter(14, 99);
// doublyLinkedList.printList();
// doublyLinkedList.reverseList();
// console.log(doublyLinkedList.deleteFirst());
// console.log(doublyLinkedList.getLast())
// console.log(doublyLinkedList.deleteLast());
