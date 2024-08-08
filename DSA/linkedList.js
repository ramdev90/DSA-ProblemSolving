class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	append(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}

		if (index === 0) {
			return this.prepend(value);
		}

		const newNode = new Node(value);
		const prevNode = this.traverseToIndex(index - 1);
		newNode.next = prevNode.next;
		prevNode.next = newNode;

		this.length++;
		return this;
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	remove(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		if (index === 0) {
			this.head = this.head.next;
			if (this.length === 1) {
				this.tail = null;
			}
		} else {
			const prevNode = this.traverseToIndex(index - 1);
			prevNode.next = prevNode.next.next;
			if (index === this.length - 1) {
				this.tail = prevNode;
			}
		}

		this.length--;
		return this;
	}

	reverse() {
		if (!this.head || !this.head.next) {
			return this;
		}
		let prevNode = null;
		let currentNode = this.head;
		this.tail = this.head;

		while (currentNode) {
			const nextNode = currentNode.next;
			currentNode.next = prevNode;
			prevNode = currentNode;
			currentNode = nextNode;
		}

		this.head = prevNode;
		return this;
	}
}

let linkedList = new LinkedList(10);
linkedList.append(5)
linkedList.append(16)
linkedList.prepend(1)
linkedList.insert(2, 99)
linkedList.insert(20, 88)
linkedList.remove(2)
linkedList.reverse()

cosole.log(linkedList, "LL")