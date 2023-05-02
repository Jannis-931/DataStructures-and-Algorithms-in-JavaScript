class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // return head Node in the list
    getHead() {
        return this.head;
    }

    // return size of the list;
    getSize() {
        return this.size;
    }

    // check if list is empty or not: true or false
    isEmpty() {
        return this.size === 0;
    }

    // add element head of the list
    insertFirst(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    // add element end of the list
    insertLast(val) {
        if (this.head === null) {
            this.insertFirst(val);
            return;
        }

        let curr = this.head;
        while (curr.next) {  // curr.next !== null
            curr = curr.next;
        }

        const node = new Node(val);
        curr.next = node;
        node.next = null;

        this.size++;
    }

    // delete first element of the list
    deleteFirst() {
        const val = this.head.val;
        this.head = this.head.next;
        this.size--;
        return val;
    }
    
    // delete last element of the list
    deleteLast() {
        if (this.size <= 1) return this.deleteFirst();

        let prev = null;
        let curr = this.head;
        while (curr.next) {  // curr.next !== null
            prev = curr;
            curr = curr.next;
        }

        let val = curr.value;
        prev.next = null;
        this.size--;
        return val;
    }

    // print linked list
    printList() {
        let curr = this.head;
        let str = '';
        while (curr) {
            str += curr.value + ' -> ';
            curr = curr.next;
        }
        console.log(str + 'END');
    }
}


const linkedList = new LinkedList();
linkedList.insertFirst(8);
linkedList.insertFirst(5);
linkedList.insertFirst(3);
// linkedList.printList();
// console.log(linkedList.getSize());
linkedList.insertLast(7);
linkedList.printList();
// console.log(linkedList.deleteFirst());
// linkedList.printList();
console.log(linkedList.deleteLast());
linkedList.printList();

