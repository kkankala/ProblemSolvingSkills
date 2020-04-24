using System;

namespace helperlibrary {
    public class LinkedNode<T> {

        public LinkedNode (T value) {
            data = value;
            Next = null;
        }
        public T data { get; set; }

        public LinkedNode<T> Next { get; set; }

    }

    public class CustomLinkedList<T> {
        public LinkedNode<T> Head { get; set; }

        public void AddFirst (T value) {
            var temp = Head;
            var newNode = new LinkedNode<T> (value);
            newNode.Next = temp;
            Head = newNode;
        }

        public void AddLast (T value) {
            var newNode = new LinkedNode<T> (value);
            if (Head == null) {
                Head = newNode;
                return;
            }
            LinkedNode<T> lastNode = Head;
            while (lastNode.Next != null) {
                lastNode = lastNode.Next;
            }
            lastNode.Next = newNode;
        }

        public void PrintList () {
            LinkedNode<T> temp = Head;
            while (temp != null) {
                Console.Write (temp.data + " ");
                temp = temp.Next;
            }
            Console.WriteLine ();
        }
    }

}