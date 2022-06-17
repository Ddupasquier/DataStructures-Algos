class Node {
      constructor(val) {
            this.val = val
            this.next = null
      }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d

// * A => B => C => D => NULL

const printLL = (head) => {
      if (head === null) return
      console.log(head.val)
      printLL(head.next)
}

printLL(a)