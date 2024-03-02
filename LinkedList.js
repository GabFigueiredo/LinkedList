class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.index = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }
    
    append(data) {
        const newNode = new Node(data);
        if(this.root === null) {
            newNode.index = 0;
            this.root = newNode;

        } else {
            const lastIndex = this.size() - 1;
            newNode.index = lastIndex + 1;
            const lastNode = this.at(lastIndex);
            lastNode.next = newNode;
        }
    }
    
    prepend(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            newNode.index = 0;
            this.root = newNode;
        } else {
            function incrementIndex(node) {
                if (node === null) {
                    return;
                }
                node.index += 1;
                return incrementIndex(node.next)
            }
            incrementIndex(this.root)
    
            newNode.next = this.root;
            newNode.index = 0;
            this.root = newNode;
        }
    }
s
    size() {
        function size(node, value = 0) {
            if(node === null) {
                return value;
            }
            value += 1
            return size(node.next, value);
        }
        return size(this.root)
    }

    at(target) {
        function at(node) {
            if(node === null) {
                return;
            }
            if (node.index === target) {
                return node;
            }
            
            return at(node.next)
        }
        return at(this.root) 
    }

    head() {
        return this.root;
    }

    tail() {
        const lastIndex = this.size(this.root) - 1;

        function findLast(node, target) {
            if(node === null) {
                return;
            }
            if(node.index === target) {
                return node;
            }

            return findLast(node.next, target);
        }

        return findLast(this.root, lastIndex)
    }

    pop() {
        const lastIndex = this.size() - 2;
        const lastNode = this.at(lastIndex)
        lastNode.next = null;
    }

    contains(data) {
        function contains(node, target) {
            if (node === null) {
                return false;
            }

            if (node.data === target) {
                return true;
            }

            return contains(node.next, target);
        }

        return contains(this.root, data)
    }

    find(data) {
        function find(node, target) {
            if (node === null) {
                return null;
            }

            if (node.data === target) {
                return node.index;
            }

            return find(node.next, target);
        }

        return find(this.root, data)
    }

    toString() {
        function toString(node) {
            if (node === null) {
                return;
            }
            return `${node.data} -> ${toString(node.next)}`
        }

        return toString(this.root);
    }

}

const teste = new LinkedList()
teste.append(3);
teste.append(6);
teste.append(8); 
teste.prepend(7);

console.log(teste.toString())
console.log(teste)
// console.log(teste.size());
// console.log(teste.at(1))
// console.log(teste.at(3))
// teste.pop()
// console.log(teste.contains(4))
console.log(teste.find(5))


console.log(teste.toString())
