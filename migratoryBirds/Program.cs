using System;
using System.Collections.Generic;
using System.Linq;

namespace migratoryBirds {
    class Program {
        static void Main (string[] args) {
            Console.WriteLine ("Hello World!");
            var dict = migratoryBirds (new List<int> { 1, 4, 4, 45, 3 });
            Console.WriteLine (dict);
        }

        static int migratoryBirds (List<int> arr) {

            var currentDict = new Dictionary<int, int> ();
            foreach (var item in arr) {
                if (currentDict.TryGetValue (item, out int value)) {
                    currentDict[item] = value + 1;
                    continue;
                } else {
                    currentDict.Add (item, 1);
                }
            }
            foreach (var item in currentDict.OrderByDescending (x => x.Value).ThenBy (x => x.Key)) {
                Console.WriteLine ($"key is {item.Key} and value is {item.Value}");
            }

            var last = currentDict.OrderByDescending (x => x.Value).ThenBy (x => x.Key).First ();
            return last.Key;
        }

    }
}