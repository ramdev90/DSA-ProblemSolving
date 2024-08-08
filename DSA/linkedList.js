class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = this.head;
		this.length = 0;
	}

	append(value) {
		const newNode = new Node(value);

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}


	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}

		const newNode = new Node(value);

		if (this.head === null) {
			this.head = newNode;
		} else {
			let currentNode = this.head;
			while (currentNode.next !== null) {
				currentNode = currentNode.next
			}
			currentNode.next = newNode;
		}
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
		} else {
			const prevNode = this.traverseToIndex(index - 1);
			prevNode.next = prevNode.next.next;
		}

		this.length--;
		return this
	}


	reverse() {
		if (!this.head.next) {
			return this.head;
		}
		let first = this.head;
		this.tail = this.head;
		let second = first.next;

		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}

		this.head.next = null;
		this.head = first;
		return this
	}
}

let linkedLIst = new LinkedList(10);
linkedLIst.append(5)
linkedLIst.append(16)
linkedLIst.prepend(1)
linkedLIst.insert(2, 99)
linkedLIst.insert(20, 88)
linkedLIst.remove(2)
linkedLIst.reverse()

cosole.log(linkedLIst, "LL")