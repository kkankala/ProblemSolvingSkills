using System;
using System.Collections.Generic;
using helperlibrary;

namespace shiftarraybyposition {
    class Program {
        static void Main (string[] args) {
            int[] arr = new int[] { 1, 2, 3, 4, 5, 6 };
            UsingCustomLinkedListRotateLeft (arr, 2);
            UsingArrayRotateRight (arr, 2);
            UsingArrayRotateLeft (arr, 2);
        }

        #region CustomLinkedList
        public static void UsingCustomLinkedListRotateLeft (int[] arr, int position) {
            var linkedList = new CustomLinkedList<int> ();
            System.Console.WriteLine ("Items in Array:");
            foreach (var item in arr) {
                Console.Write ("{0} ", item);
                linkedList.AddLast (item);
            }
            System.Console.WriteLine ();
            System.Console.WriteLine ("Item in Linked List:");
            linkedList.PrintList ();
            RotateLeft (linkedList, position);
            Console.WriteLine ("Linked list after shifting 2 positions to Left");
            linkedList.PrintList ();
            Console.WriteLine ();
        }

        private static void RotateLeft (CustomLinkedList<int> linkedList, int position) {

            if (position == 0) return;

            // Let us understand the below  
            // code for example k = 4 
            // and list = 10->20->30->40->50->60. 
            LinkedNode<int> current = linkedList.Head;

            // current will either point to kth  
            // or NULL after this loop. current 
            // will point to node 40 in the above example 
            int count = 1;
            while (count < position && current.Next != null) {
                current = current.Next;
                count++;
            }

            // If current is NULL, k is greater than 
            // or equal to count of nodes in linked list. 
            // Don't change the list in this case 
            if (current == null)
                return;

            // current points to kth node.  
            // Store it in a variable. 
            // kthNode points to node 
            // 40 in the above example 
            LinkedNode<int> kthNode = current;

            // current will point to  
            // last node after this loop 
            // current will point to 
            // node 60 in the above example 
            while (current.Next != null)
                current = current.Next;

            // Change next of last node to previous head 
            // Next of 60 is now changed to node 10 

            current.Next = linkedList.Head;

            // Change head to (k+1)th node 
            // head is now changed to node 50 
            linkedList.Head = kthNode.Next;

            // change next of kth node to null 
            kthNode.Next = null;

        }

        #endregion CustomLinkedList

        #region UsingArrays
        private static void UsingArrayRotateRight (int[] arr, int position) {
            int[] clonedArray = new int[arr.Length];
            System.Console.WriteLine ("Items in Cloned Array:");
            for (int i = 0; i < arr.Length; i++) {
                clonedArray[i] = arr[i];
                Console.Write ("{0} ", clonedArray[i]);
            }
            RotateRight (clonedArray, position);
            Console.WriteLine ();
            System.Console.WriteLine ("Total items in array : {0}", clonedArray.Length);
            Console.WriteLine ("Array after shifting 2 positions to Right");
            for (var i = 0; i < clonedArray.Length; i++) {
                Console.Write ("{0} ", clonedArray[i]);
            }
            Console.WriteLine ();
        }

        private static void UsingArrayRotateLeft (int[] arr, int position) {
            int[] clonedArray = new int[arr.Length];
            System.Console.WriteLine ("Items in Cloned Array:");
            for (int i = 0; i < arr.Length; i++) {
                clonedArray[i] = arr[i];
                Console.Write ("{0} ", clonedArray[i]);
            }
            RotateLeft (clonedArray, position);
            Console.WriteLine ();
            System.Console.WriteLine ("Total items in array : {0}", clonedArray.Length);
            Console.WriteLine ("Array after shifting 2 positions to Left");
            for (var i = 0; i < clonedArray.Length; i++) {
                Console.Write ("{0} ", clonedArray[i]);
            }
            Console.WriteLine ();
        }

        private static void RotateRight (int[] data, int position) {
            while (position > 0) {
                int temp = data[data.Length - 1];
                // System.Console.WriteLine ("temp is {0}", temp.ToString ());
                for (var i = data.Length - 1; i >= 1; i--) {
                    data[i] = data[i - 1];
                    // System.Console.WriteLine ("i is {0} and data of i is {1}", i, data[i]);
                }
                data[0] = temp;
                position--;
            }
        }

        private static void RotateLeft (int[] data, int position) {

            while (position > 0) {
                int temp = data[0];
                for (var i = 1; i < data.Length; i++) {
                    data[i - 1] = data[i];
                }
                data[data.Length - 1] = temp;
                position--;
            }
        }

        #endregion UsingArrays

    }
}