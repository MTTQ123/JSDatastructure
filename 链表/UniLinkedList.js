class UniLinkedList {
    head = null;
    length = 0;

    append(element) {
        let newNode = new Node(element)

        // 原链表为空
        if (this.length === 0) {
            this.head = newNode;
        } else { // 不为空
            let currentNode = this.head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
        this.length += 1;
    }

    insert(position, element) {
        const newNode = new Node(element);
        if (position < 0 || position > this.length) return false;
        else if (position == 0) {
            newNode.nextNode = this.head
            this.head = newNode;
        } else {
            let currentNode = this.head;
            let previousNode = null;
            for (let index = 0; index < position; index++) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            newNode.nextNode = currentNode;
            previousNode.nextNode = newNode;
        }
        this.length += 1;
    }

    get(position) {
        if (position < 0 || position >= this.length) return false;
        let currentNode = this.head;
        for (let index = 0; index < position; index++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    indexOf(element) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.data === element) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index += 1;
        }
        return -1;
    }

    update(position, element) {
        if (position < 0 || position >= this.length) return false;
        let currentNode = this.head;
        for (let index = 0; index < position; index++) {
            currentNode = currentNode.nextNode;
        }
        currentNode.data = element;
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) return false;

        let currentNode = this.head;
        if (position === 0) {
            this.head = this.head.nextNode;

        }
        else {
            let previousNode = null;
            for (let index = 0; index < position; index++) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            previousNode.nextNode = currentNode.nextNode;

        }
        this.length -= 1;
        return currentNode.data;
    }

    remove(element) {
        const index = this.indexOf(element);
        if (index !== -1) {
            this.removeAt(index);
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    toString() {
        let currentNode = this.head;
        let str = "";
        for (let i = 0; i < list.length; i++) {
            str += currentNode.data + " ";
            currentNode = currentNode.nextNode;
        }
        return str;
    }
}