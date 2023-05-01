// import LinkedListNode from "./LinkedListNode";

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // head and tail are Reference variable
        // head point to first Node and tail point to last Node
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // return head Node in the list
    getHead() {
        return this.head.value;
    }

    // return tail Node in the list
    getTail() {
        return this.tail.value;
    }

    // give size of the list
    getSize() {
        return this.size;
    }

    // check listIsEmpty give true are fasle
    // false means it's contain node and true means it's empty
    isEmpty() {
        return this.size === 0;
    }


    // add element first of the list
    insertFirst(val) {
        const node = new LinkedListNode(val);

        node.next = this.head;
        this.head = node;

        // add a first node that's why head and tail point to the same node
        if (this.tail === null) this.tail = this.head;

        this.size++;
    }

    // add element end of the list
    insertLast(val) {
        if (this.tail === null) {
            this.insertFirst(val);
            return;
        }
        const node = new LinkedListNode(val);
        this.tail.next = node;
        this.tail = node;
        node.next = null;
        
        this.size++;
    }

    // insert elemant in particular index
    inserAt(val, index) {
        if (index === 0) {
            this.insertFirst(val);
            return;
        }

        if (index === this.size) {
            this.insertLast(val);
            return;
        }

        // using two pointer
        // prev goes (i - 1) and curr goes (i)
        let prev = null;
        let curr = this.head;
        let i = 0;

        while (curr !== null && i < index) {
            prev = curr;
            curr = curr.next;
            i++;
        }

        if (i === index) {
            const node = new LinkedListNode(val);
            prev.next = node;
            node.next = curr;

            this.size++;
        }
    }

    // delete first element in the list
    deleteFirst() {
        const val = this.head.value;
        this.head = this.head.next;

        if (this.head === null) this.tail === null;
        this.size--;
        return val;
    }

    // delete last element in the list
    deleteLast() {
        if (this.size <= 1) return this.deleteFirst();

        let secondLast = this.get(this.size - 2);
        const val = this.tail.value;

        this.tail = secondLast;
        this.tail.next = null;

        this.size--;
        return val;
    }

    // create a function that's return (size - 2) index position
    // because last index is (size - 1)
    get(index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    find(val) {
        let node = this.head;
        while (node) {  // node !== null
            if (node.value === val) {
                return node.value;
            }
            node = node.next;
        }
        return null;  // if not found
    }

    // delete at particular index
    deleteAt(index) {
        if (index === 0) return this.deleteFirst();
        if (index === this.size - 1) return this.deleteLast();

        const prev = this.get(index - 1);
        const val = prev.next.value;

        prev.next = prev.next.next;

        this.size--;
        return val;
    }
    /*
    deleteAt(index) {
        if (index === 0) return this.deleteFirst();
        if (index === this.size - 1) return this.deleteLast();

        let prev = null;
        let curr = this.head;
        let i = 0;
        while (curr !== null && i < index) {
            prev = curr;
            curr = curr.next;
            i++;
        }
        const val = curr.value;
        prev.next = curr.next;
        this.size--; 
        return val;

        // if (i === index) {
        //     const val = curr.value;
        //     prev.next = curr.next;
        //     this.size--; 
        //     return val;
        // }
    }
    */



    // prints the list
    printList() {
        let curr = this.head;
        let str = '';

        while (curr) {   // curr !== null
            str += curr.value + ' -> ';
            curr = curr.next;
        };
        console.log(str + 'END');
    }
}


const linkedList = new LinkedList();
//insert first
linkedList.insertFirst(3);
linkedList.insertFirst(2);
linkedList.insertFirst(8);
linkedList.insertFirst(17);
linkedList.printList();
// console.log(linkedList.getSize());
// insert last
// linkedList.insertLast(99);
// linkedList.insertLast(100);
// linkedList.printList();
// console.log(linkedList.getHead());
// console.log(linkedList.getTail());
// console.log(linkedList.getSize());

// linkedList.inserAt(9, 4);
// linkedList.printList();
// console.log(linkedList.deleteFirst());
// linkedList.printList();
// console.log(linkedList.deleteLast());
// linkedList.printList();
// console.log(linkedList.deleteLast());
// linkedList.printList();
// console.log(linkedList.deleteAt(3));
// linkedList.printList();
// console.log(linkedList.find(10))
